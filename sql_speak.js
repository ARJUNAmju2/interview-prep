const SPEAK_DATA = [
// Q1 - What is SQL and types
`SQL stands for Structured Query Language. It's the standard language used to interact with relational databases — to create, read, update, and delete data.

SQL commands are divided into five categories based on their purpose.

DDL — Data Definition Language — deals with the structure of the database. Commands like CREATE to make new tables, ALTER to modify table structure, DROP to completely remove a table, and TRUNCATE to remove all rows and reset the table. These affect the schema, not the data directly.

DML — Data Manipulation Language — deals with the actual data inside tables. INSERT to add new rows, UPDATE to modify existing rows, and DELETE to remove specific rows. These are the commands we use most in day-to-day operations.

DQL — Data Query Language — is basically just SELECT. It's used to retrieve data from tables. Some people group it under DML, but technically it's separate because it only reads data without modifying anything.

DCL — Data Control Language — manages permissions. GRANT gives a user permission to perform operations, and REVOKE takes permissions away. This is used by database administrators to control who can do what.

TCL — Transaction Control Language — manages transactions. COMMIT saves changes permanently, ROLLBACK undoes changes, and SAVEPOINT creates checkpoints within a transaction for partial rollback.

In my project, we use all of these. Our DAL layer primarily uses DML through stored procedures for CRUD operations, and our DBA handles DDL and DCL for schema changes and security.`,

// Q2 - DELETE vs TRUNCATE vs DROP
`These three all remove data, but they work very differently.

DELETE is a DML command. It removes specific rows — you can use a WHERE clause to target exactly which rows to delete. It's a fully logged operation, meaning every row deletion is recorded in the transaction log. Because of this, it can be rolled back. It also fires triggers, which is important if you have audit logging. And it does NOT reset the identity counter — if your last ID was 100, the next insert will be 101 even after deleting everything.

TRUNCATE is a DDL command. It removes ALL rows — you cannot use a WHERE clause. It uses minimal logging — it deallocates data pages rather than logging each row removal. This makes it much faster for large tables. It does NOT fire triggers. And importantly, it RESETS the identity counter back to the seed value. However, you cannot truncate a table that has foreign key references.

DROP is also DDL. It doesn't just remove data — it removes the entire table including its structure, indexes, constraints, everything. The table no longer exists in the database. You'd need to recreate it from scratch.

The key decision in practice — if you need to remove specific rows, use DELETE. If you need to empty a table completely and reset it, use TRUNCATE. If you no longer need the table at all, use DROP. In my project, we use DELETE with WHERE for removing specific audit records, and we'd never use TRUNCATE on production tables because we need audit trails.`,

// Q3 - WHERE vs HAVING
`WHERE and HAVING both filter data, but they work at different stages of query execution.

WHERE filters individual rows BEFORE any grouping happens. It runs early in the execution — right after the FROM clause identifies the tables. You cannot use aggregate functions in WHERE because the groups haven't been formed yet. It works with SELECT, UPDATE, and DELETE statements.

HAVING filters groups AFTER GROUP BY has created them. It runs after aggregation, so you CAN use aggregate functions like COUNT, SUM, AVG. It only makes sense with GROUP BY — without grouping, there are no groups to filter.

The execution order of a SQL query is: FROM first, then WHERE filters individual rows, then GROUP BY creates groups, then HAVING filters those groups, then SELECT picks columns, and finally ORDER BY sorts.

A practical example — if I want departments where active employees have an average salary above 50000, I use both. WHERE IsActive = 1 first filters to only active employees. Then GROUP BY Department groups them. Then HAVING AVG(Salary) > 50000 keeps only the departments meeting our threshold.

In my project, we use WHERE for filtering by status, date ranges, or user permissions. We use HAVING in reports — like showing only departments with more than 5 pending audit observations.`,

// Q4 - UNION vs UNION ALL
`Both UNION and UNION ALL combine the results of two or more SELECT queries into a single result set.

UNION combines the results and removes duplicate rows. It performs an implicit DISTINCT operation — so if the same row appears in both queries, it shows only once in the final result. Because it has to check for and eliminate duplicates, it's slower. Internally it does a sort or hash to find duplicates.

UNION ALL combines results and keeps everything — including duplicates. It simply appends the second result set to the first. No duplicate checking means it's faster — significantly faster for large result sets.

The rules for both — the number of columns must be the same in all queries, the data types of corresponding columns must be compatible, and the column names in the result come from the first query.

The best practice is to use UNION ALL by default unless you specifically need duplicate elimination. If you know the data sources are already distinct — like querying different date ranges from the same table, or different tables with no overlap — always use UNION ALL for better performance.

In my project, when combining audit data from multiple regions or merging current and archived records, we use UNION ALL because the source data doesn't overlap.`,

// Q5 - Aggregate Functions + GROUP BY + ORDER BY
`Aggregate functions perform calculations across a set of rows and return a single value per group.

COUNT returns the number of rows. COUNT star counts all rows including NULLs. COUNT of a specific column counts only non-NULL values. COUNT DISTINCT counts unique values only.

SUM adds up all values in a column. AVG calculates the average. MIN and MAX find the smallest and largest values. All of these ignore NULL values — they skip NULLs in their calculation.

GROUP BY is what makes aggregates useful. Without GROUP BY, an aggregate operates on the entire table and returns one row. With GROUP BY, it creates groups based on column values and returns one row per group. For example, GROUP BY Department gives you separate counts, sums, and averages for each department.

ORDER BY sorts the final result set. ASC is ascending which is the default, DESC is descending. You can sort by multiple columns — first by department name ascending, then within each department by salary descending. You can also sort by column position number like ORDER BY 3 for the third column.

In my project, we use aggregates heavily in reports — counting observations per department, summing amounts by category, finding the maximum overdue date. GROUP BY creates the departmental breakdowns, and ORDER BY presents results in a meaningful sequence.`,

// Q6 - NULL values
`NULL in SQL represents an unknown or missing value. It's NOT zero, it's NOT an empty string, it's NOT a space — it's the absence of any value.

The most important thing about NULL is that you cannot compare it with equals. WHERE column = NULL will never return rows — it always evaluates to UNKNOWN, not TRUE. You must use IS NULL or IS NOT NULL for comparisons.

For handling NULLs in output, SQL Server has ISNULL which takes two parameters — the value to check and the replacement if it's NULL. COALESCE is the ANSI standard version and takes multiple parameters — it returns the first non-NULL value from the list. COALESCE is more portable and flexible.

NULLIF is the opposite — it returns NULL if two values are equal. Useful for avoiding division by zero: dividing by NULLIF(denominator, 0) returns NULL instead of an error.

Any arithmetic with NULL produces NULL. 100 + NULL equals NULL, not 100. This catches many developers off guard. You need to handle NULLs before calculations using ISNULL or COALESCE.

In aggregates, functions like AVG and SUM ignore NULL rows. This can give different results depending on whether you want to treat missing values as zero or skip them entirely.

In my project, many Oracle columns allow NULL — like ManagerId for top-level employees, or CompletionDate for ongoing audits. We use NVL in Oracle which is equivalent to ISNULL in SQL Server to provide defaults in our queries.`,

// Q7 - What are JOINS
`JOINs are used to combine rows from two or more tables based on a related column between them. In a normalized database, data is split across multiple tables to avoid redundancy, and JOINs bring that data back together when we need it.

The most common scenario is joining on a Foreign Key to Primary Key relationship. For example, an Employee table has a DepartmentId column that references the Department table's Id. To get employee names with their department names, we JOIN these tables on that relationship.

There are several types of JOINs. INNER JOIN returns only rows that have matches in both tables. LEFT JOIN returns all rows from the left table plus matching rows from the right — with NULLs where there's no match. RIGHT JOIN is the opposite. FULL OUTER JOIN returns all rows from both tables. CROSS JOIN produces a Cartesian product — every possible combination. SELF JOIN is when a table is joined with itself, typically for hierarchical data like employee-manager relationships.

The choice of JOIN type depends on your business requirement. If you only want complete data where matches exist, use INNER JOIN. If you need all records from one side regardless of match, use LEFT JOIN. In my project, we use LEFT JOIN frequently — for example, showing all audit observations even if they haven't been assigned to a reviewer yet.`,

// Q8 - INNER JOIN
`INNER JOIN returns only the rows that have matching values in both tables. If a row in the left table has no corresponding match in the right table, it's excluded. Similarly, if a row in the right table has no match in the left, it's excluded.

Think of it as the intersection — only the overlap between two tables comes through.

For example, if I join Employee with Department on DepartmentId, an employee with a NULL DepartmentId won't appear because there's nothing to match against. And a department with no employees won't appear either because no employee references it.

The syntax is SELECT columns FROM Table1 INNER JOIN Table2 ON Table1.column = Table2.column. The ON clause defines the join condition — typically the foreign key relationship.

INNER JOIN is the default JOIN type — if you just write JOIN without specifying the type, it's INNER JOIN. It's the most commonly used JOIN because usually we want only complete, matched data.

In my project, when showing audit reports with department details, we use INNER JOIN because every audit record should have a valid department. If the department link is broken, we'd rather catch that as a data integrity issue than show incomplete data.`,

// Q9 - LEFT JOIN
`LEFT JOIN returns ALL rows from the left table, and the matching rows from the right table. If there's no match for a left table row, the right side columns show NULL.

The key point is — every row from the left table is guaranteed to appear in the result, whether it has a match or not. The left table drives the result.

For example, if I LEFT JOIN Employee with Department, an employee whose DepartmentId is NULL will still appear in the result — but their DeptName column will show NULL. However, a department with no employees will NOT appear because it's on the right side.

This is extremely useful when you want to see all records from your primary table regardless of whether related data exists. Show all employees even if they haven't been assigned a department yet. Show all orders even if they haven't been shipped yet. Show all audit findings even if no action has been taken.

LEFT JOIN is the second most common JOIN after INNER JOIN. In practice, it's used whenever the left table is your "main" data and the right table provides optional supplementary information.

In my project, we use LEFT JOIN when showing all audit observations with their reviewer names — because some observations might not have a reviewer assigned yet, but we still need to display them.`,

// Q10 - RIGHT JOIN
`RIGHT JOIN is the mirror of LEFT JOIN — it returns ALL rows from the right table, and matching rows from the left table. If there's no match, the left side columns show NULL.

So every row from the right table is guaranteed to appear. For example, RIGHT JOIN Employee with Department gives all departments, even those with no employees. Departments without employees show NULL for employee columns.

In practice, RIGHT JOIN is rarely used. You can always rewrite a RIGHT JOIN as a LEFT JOIN by simply swapping the table order. And since most people read left-to-right, LEFT JOIN is more intuitive — your "main" table goes first, your supplementary table goes second.

Instead of writing FROM Employee RIGHT JOIN Department, you'd write FROM Department LEFT JOIN Employee — same result, more readable.

The one scenario where RIGHT JOIN might appear is in complex multi-table queries where reordering tables would be awkward. But even then, most developers prefer LEFT JOIN for consistency.

In my project, we never use RIGHT JOIN. We always structure our queries with the primary table on the left and use LEFT JOIN for optional data.`,

// Q11 - FULL OUTER JOIN
`FULL OUTER JOIN returns ALL rows from BOTH tables. Where there's a match, you get the combined data. Where there's no match on either side, you get NULLs for the missing side.

Think of it as the union of LEFT JOIN and RIGHT JOIN. You see everything — employees without departments, departments without employees, and employees with their matching departments.

It's useful when you need a complete picture of both sides. For example, a reconciliation report comparing two systems — you want to see records that exist in System A but not B, records in B but not A, and records that match in both.

The syntax is the same as other joins — FROM Table1 FULL OUTER JOIN Table2 ON condition.

FULL OUTER JOIN is less commonly used than INNER or LEFT JOIN. It's typically for reporting, data reconciliation, or gap analysis scenarios.

In my project, we might use it for comparing expected versus actual audit schedules — showing planned audits that haven't started, actual audits that weren't planned, and everything that matches.`,

// Q12 - CROSS JOIN
`CROSS JOIN produces a Cartesian product — every row from the first table is combined with every row from the second table. If Table A has 4 rows and Table B has 3 rows, the result has 12 rows — all possible combinations.

There's no ON clause with CROSS JOIN because there's no matching condition — it's all-to-all combination.

This can produce very large result sets quickly. 1000 rows times 1000 rows gives a million rows. So you use it carefully and intentionally.

The use cases are specific — generating all possible combinations like sizes and colors for a product catalog, creating a calendar by crossing years with months, generating test data, or creating matrix reports where you need every intersection of two dimensions.

In my project, we might use CROSS JOIN to generate a matrix of all departments crossed with all audit categories — giving us every possible combination that should have a compliance check, even if no audit has been performed yet.`,

// Q13 - SELF JOIN
`A SELF JOIN is when a table is joined with itself. You use table aliases to treat the same table as if it were two different tables. It's essential for hierarchical or recursive relationships within a single table.

The most common example is the employee-manager relationship. The Employee table has a ManagerId column that references the Id column of the same table. To show each employee alongside their manager's name, you join Employee with itself — one alias for the employee, another for the manager.

The syntax is: FROM Employee e LEFT JOIN Employee m ON e.ManagerId = m.Id. We use LEFT JOIN because the CEO has no manager — their ManagerId is NULL. If we used INNER JOIN, we'd lose the CEO from the results.

Other use cases for self joins include finding pairs of records within the same table — like employees in the same department, products in the same category, or finding duplicate records.

In my project, we have an organizational hierarchy. Audit assignments follow a chain of approval — the self join lets us show who reports to whom and trace the approval path from auditor to audit head.`,

// Q14 - INNER JOIN vs LEFT JOIN difference
`The fundamental difference is in how they handle non-matching rows.

INNER JOIN is exclusive — it only returns rows where both tables have a match. If an employee has no department, they're excluded. If a department has no employees, it's excluded. You get a smaller, complete dataset with no NULLs from the join.

LEFT JOIN is inclusive for the left table — every left table row appears regardless of whether a match exists. Non-matching rows show NULL for the right table's columns. The left table drives the result count.

When choosing between them, ask yourself: "Do I need to see records from my main table even if related data is missing?" If yes, LEFT JOIN. If you only want complete matched records, INNER JOIN.

Performance-wise, INNER JOIN can sometimes be faster because the optimizer can eliminate rows earlier. But the choice should always be driven by business requirements, not performance — getting wrong results fast is worse than getting right results slightly slower.

In my project, for list pages showing audit observations, we use LEFT JOIN with Reviewer table because observations might not have a reviewer yet. But for the audit report where we need department totals, we use INNER JOIN because every valid audit must have a department.`,

// Q15 - Joining more than 2 tables
`You can chain multiple JOINs to combine data from three, four, or more tables. Each JOIN adds another table to the result, and you can mix JOIN types.

The syntax chains one after another — FROM Employee e INNER JOIN Department d ON e.DepartmentId = d.Id INNER JOIN Project p ON e.ProjectId = p.Id LEFT JOIN Employee m ON e.ManagerId = m.Id. Each JOIN clause specifies which table to add and the condition for matching.

You can mix different JOIN types in the same query. Use INNER JOIN for tables where matches are required, and LEFT JOIN for optional data. The order matters — later JOINs work on the result of earlier ones.

Some practical tips — always use table aliases for readability when joining multiple tables. Make sure your ON conditions are correct — a wrong join condition can produce cartesian products silently. And consider performance — more joins mean more work for the optimizer.

In my project, our audit detail queries often join 4-5 tables — the main Audit table, Department, Employee for the auditor, Employee again for the reviewer (self join), and ObservationCategory. We use aliases like a, d, auditor, reviewer, cat to keep it readable.`,

// Q16 - JOIN vs Subquery
`JOINs and subqueries can often achieve the same result, but they work differently and have different strengths.

A JOIN combines tables side by side — you can select columns from both tables in the result. It's generally better optimized by the query engine because the optimizer has well-established strategies for joining tables.

A Subquery is a query nested inside another query. The inner query runs and its result is used by the outer query. Subqueries are cleaner for simple existence checks or single-value comparisons.

Performance-wise, JOINs are usually faster. The optimizer can choose hash join, merge join, or nested loop join based on data size. Non-correlated subqueries are reasonable — they run once and the result is reused. But correlated subqueries are expensive — they run once for EVERY row in the outer query, like a nested loop without optimization.

However, modern SQL Server's optimizer often rewrites subqueries into joins internally. So the performance gap has narrowed. Choose based on readability unless you have a proven performance issue.

Use JOIN when you need columns from both tables in the output. Use Subquery when you just need a simple filter — like WHERE DepartmentId IN (SELECT Id FROM Department WHERE region = 'North'). It reads more naturally for simple existence checks.

In my project, we use JOINs for most queries since we need data from multiple tables. We use subqueries occasionally for IN clauses when checking against a short list from another table.`,

// Q17 - Subquery
`A subquery is a SELECT statement nested inside another SQL statement. The inner query executes first, and its result is used by the outer query. You can place subqueries in WHERE, SELECT, FROM, or HAVING clauses.

In the WHERE clause, it's used for filtering — like finding employees whose salary is above the company average. The subquery calculates the average, then the outer query uses that value to filter rows.

In the SELECT clause, you can include a calculated value from another table — like showing each employee's salary alongside the department average as a computed column.

In the FROM clause, the subquery creates a derived table — a temporary result set that you can join with or query further. You must give it an alias.

Subqueries can return a single value (scalar subquery), a single column with multiple rows (used with IN, ANY, ALL), or a full result set (derived table). The type determines where and how you can use it.

The key consideration is performance. Non-correlated subqueries run once and are efficient. Correlated subqueries reference the outer query and run once per outer row — potentially slow for large datasets. When you see a correlated subquery, consider if a JOIN would be better.

In my project, we use subqueries for things like finding audit observations that exceed the average resolution time, or checking if an auditor has pending items in other tables.`,

// Q18 - Correlated vs Non-Correlated Subquery
`The key difference is whether the inner query depends on the outer query.

A non-correlated subquery is completely independent. It can run on its own without knowing anything about the outer query. It executes ONCE, produces a result, and that result is used by the outer query. For example, WHERE Salary > (SELECT AVG(Salary) FROM Employee) — the average is calculated once and reused for every row comparison. This is efficient.

A correlated subquery references columns from the outer query. It CANNOT run independently — it needs a value from each outer row. So it executes ONCE FOR EVERY ROW in the outer query. For example, finding employees who earn more than their department's average — the subquery must recalculate the average for each employee's specific department.

Performance-wise, correlated subqueries can be very slow on large tables. If the outer query returns 10,000 rows, the correlated subquery runs 10,000 times. Often you can rewrite them as JOINs for better performance.

You can identify a correlated subquery by looking for a reference to the outer query's table alias inside the inner query. If you see something like WHERE inner.DeptId = outer.DeptId, it's correlated.

In my project, we avoid correlated subqueries for large datasets and prefer JOINs or CTEs. But for small lookups or existence checks with EXISTS, they're perfectly fine.`,

// Q19 - EXISTS vs IN
`Both EXISTS and IN check for the presence of data, but they work differently internally.

IN compares a value against a list of values returned by the subquery. It evaluates the entire subquery result set, then checks if your value exists in that list. It's straightforward and readable for small result sets.

EXISTS checks whether the subquery returns ANY rows at all — it's a true/false check. The moment it finds one matching row, it stops — it short-circuits. It doesn't need to process the entire subquery result.

Performance difference — when the subquery returns a large result set, EXISTS is faster because it stops at the first match. When the subquery returns a small set, IN can be comparable or slightly faster because the optimizer can use the list efficiently.

NULL handling is another important difference. IN has problems with NULLs in the subquery result — if the list contains NULL, NOT IN behaves unexpectedly and may return no rows at all. EXISTS handles NULLs correctly because it only checks for row existence.

The rule of thumb — use IN for small, known sets and simple readability. Use EXISTS for large subquery results and when NULLs might be present. Use EXISTS with NOT EXISTS for "not found" checks — it's safer than NOT IN.

In my project, we use EXISTS for checking whether an audit has any pending observations before allowing status change, and IN for filtering by a small set of status codes.`,

// Q20 - Index in SQL
`An index is a database object that speeds up data retrieval. Without an index, the database must scan every single row in the table to find matching data — called a Full Table Scan. With an index, it can jump directly to the relevant rows — called an Index Seek.

The analogy is a book's index. Without it, you'd read every page to find a topic. With the index at the back, you look up the topic, get the page number, and go directly there.

Internally, most indexes use a B-Tree structure — a balanced tree that keeps data sorted. This allows binary search, which is logarithmic — searching a million rows takes about 20 comparisons instead of a million.

The trade-off is critical to understand. Indexes speed up reads significantly. But they slow down writes because every INSERT, UPDATE, or DELETE must also update all relevant indexes. They also consume disk space. So indexing is a balance — index what you query frequently, don't over-index.

You create an index on columns that appear frequently in WHERE clauses, JOIN conditions, and ORDER BY. The optimizer then uses these indexes automatically when it determines they'll help.

In my project with Oracle, we have indexes on all foreign key columns, columns used in common filters like AuditStatus and CreatedDate, and composite indexes for our most frequent query patterns.`,

// Q21 - Clustered vs Non-Clustered Index
`This is one of the most asked SQL interview questions, so let me explain it clearly.

A Clustered Index determines the PHYSICAL order of data rows in the table. The data is actually sorted and stored on disk in the order of the clustered index key. Because data can only be physically sorted one way, you can have only ONE clustered index per table. By default, the Primary Key creates the clustered index.

Think of a dictionary — the words ARE stored alphabetically. The data IS the index. When you look up a word, you go directly to it because everything is sorted. The leaf nodes of a clustered index contain the actual data rows.

A Non-Clustered Index is a SEPARATE structure that contains the indexed column values plus pointers back to the actual data rows. The table data stays in its original order — the index is like a separate sorted list with page references. You can have up to 999 non-clustered indexes per table.

Think of a textbook index at the back — it's a separate sorted list of topics with page numbers. You look up the topic, find the page number, then go to that page to read the content.

Performance difference — clustered index is faster for range queries because the data is physically contiguous. Non-clustered requires an extra lookup step to go from the index to the actual row, unless it's a covering index that has all needed columns.

In my project, our Primary Keys are clustered indexes. We have non-clustered indexes on frequently queried columns like AuditStatus, CreatedDate, and DepartmentId.`,

// Q22 - Unique Index
`A Unique Index ensures that no two rows can have the same value in the indexed column or combination of columns. It enforces data uniqueness as a constraint.

When you try to insert or update a row with a value that already exists in a unique index, the database rejects the operation with a constraint violation error. This is a data integrity mechanism.

A unique constraint and a unique index are essentially the same thing — creating a UNIQUE constraint automatically creates a unique index behind the scenes. The difference is semantic — constraints express business rules, indexes express performance optimization. But technically they're implemented the same way.

One important detail — a unique index in SQL Server allows ONE NULL value. Since NULL represents unknown, and two unknowns aren't considered equal, one NULL is allowed. But a second NULL would be rejected.

Common use cases include Email columns, SSN, Employee codes, or any business key that must be unique across the table. The Primary Key is actually a special case of unique index that also disallows NULLs.

In my project, we have unique indexes on employee email addresses and audit reference numbers to prevent duplicate entries that could cause confusion in the system.`,

// Q23 - Composite Index
`A Composite Index is an index on two or more columns together. The column order in the index definition is extremely important because of the Leftmost Prefix Rule.

The Leftmost Prefix Rule means the index is useful only when the query includes the leftmost columns of the index. If I create an index on (DepartmentId, Salary), it helps queries that filter by DepartmentId alone, or by DepartmentId AND Salary together. But it does NOT help a query that filters by Salary alone — because Salary isn't the leftmost column.

Think of a phone book sorted by LastName then FirstName. You can look up everyone named "Smith" easily. You can look up "Smith, John" easily. But you can't easily look up everyone named "John" regardless of last name — the book isn't organized that way.

Column order should be based on selectivity and query patterns. Put the most selective column first — the one that narrows down results the most. Or put the column that appears in the most queries first.

Composite indexes are especially useful for queries with multiple filter conditions. Instead of separate indexes on each column, one composite index can serve the entire WHERE clause efficiently.

In my project, we have composite indexes like (DepartmentId, AuditYear) for queries that filter audits by department within a specific year — our most common query pattern.`,

// Q24 - When to use and not use indexes
`Knowing when NOT to index is just as important as knowing when to index.

Use indexes when a column is frequently in WHERE clauses, when it's used in JOIN conditions, when it appears in ORDER BY, when it has high selectivity meaning many unique values, and when the table is large and queries return a small percentage of rows.

Do NOT use indexes when the table is small — scanning 100 rows is fast enough without an index. When the column has low selectivity — like a Gender column with only M or F values, an index doesn't help much because half the table matches anyway. When the table has heavy write operations — every INSERT, UPDATE, and DELETE must update all indexes. When the column is rarely queried. Or when the column is frequently updated — the index must be restructured on every update.

Over-indexing is a common problem. I've seen tables with an index on nearly every column. This means every single INSERT must update 10+ indexes, making writes extremely slow. It's a trade-off — analyze your actual query patterns and index only what matters.

The best approach is to look at slow queries, check the execution plan, and add indexes where you see Table Scans on large tables. Then monitor write performance to ensure you haven't over-indexed.

In my project, we index selectively — foreign keys, status columns, and date columns used in range queries. We avoid indexing columns that are updated frequently like LastModifiedDate.`,

// Q25 - How many clustered indexes
`A table can have only ONE clustered index. This is because the clustered index determines the physical storage order of the data rows on disk. Data can only be physically sorted one way — you can't sort the same data by ID and simultaneously by Name.

By default, when you create a Primary Key, SQL Server automatically creates a clustered index on it. So for most tables, the Primary Key IS the clustered index.

However, you can override this. You can make the Primary Key non-clustered and instead create the clustered index on a different column. This is useful when your most common queries filter or sort by a column other than the ID.

For example, if you have a log table that's almost always queried by date range, you might cluster on CreatedDate instead of the Id. Range queries on CreatedDate would be faster because the data is physically stored in date order — consecutive dates are on adjacent disk pages.

For non-clustered indexes, you can have up to 999 per table in SQL Server. Each one is a separate sorted structure with pointers to the data rows.

In my project, we keep the default — Primary Key as clustered index — for most tables. It works well because our queries often join on the primary key.`,

// Q26 - Stored Procedure
`A Stored Procedure is a precompiled collection of SQL statements saved in the database that you can execute by calling its name. Think of it as a function in the database.

The key benefits are significant. First, performance — when you create an SP, SQL Server compiles it and caches the execution plan. Subsequent calls reuse this cached plan without recompiling. This is faster than sending ad-hoc SQL that must be parsed and compiled each time.

Second, security — you can grant a user EXECUTE permission on a stored procedure without giving them direct table access. They can call GetEmployeeDetails without having SELECT permission on the Employee table directly. This is a powerful security layer.

Third, reduced network traffic — instead of sending a large SQL query over the network, you send a short EXEC command with parameters. The logic lives in the database.

Fourth, maintainability — if the query logic needs to change, you modify the SP in one place. All applications calling it automatically get the new behavior.

Fifth, SQL injection prevention — since parameters are typed and never concatenated into the query string, SQL injection is prevented by design.

In my project, we use stored procedures extensively with Oracle. Our DAL calls procedures like sp_GetAuditObservations, sp_InsertObservation, sp_UpdateStatus. All business-critical queries are in stored procedures for security and performance.`,

// Q27 - Stored Procedure vs Function
`The key differences come down to what they can DO and how they can be USED.

A Stored Procedure can perform any operation — INSERT, UPDATE, DELETE, SELECT. It can modify data, manage transactions, use TRY-CATCH for error handling, return multiple result sets, and have output parameters. But it CANNOT be called inside a SELECT statement.

A Function must return a value and is read-only — it cannot modify data (no INSERT, UPDATE, DELETE on permanent tables). It cannot manage transactions or use TRY-CATCH. But it CAN be used inside a SELECT statement, WHERE clause, or anywhere an expression is expected.

This usability difference is the practical key. If I need to calculate tax for every row in a query, I can write SELECT Name, dbo.fn_CalculateTax(Salary) FROM Employee. I can't do that with a stored procedure. Functions integrate into queries seamlessly.

Stored procedures are for actions — inserting records, complex operations with multiple steps, batch processing. Functions are for calculations — computing values that are used within queries.

There are two types of functions — scalar functions that return a single value, and table-valued functions that return a result set you can SELECT from or JOIN with.

In my project, we use stored procedures for all CRUD operations and complex business logic. We use functions for reusable calculations like date formatting or status code translations that appear in many queries.`,

// Q28 - Input and Output Parameters
`Stored procedures accept input parameters to receive data and output parameters to send data back to the caller.

Input parameters are the most common. You define them in the procedure header with their data type, and optionally a default value. When calling the SP, you pass values for these parameters. They work like function arguments — the procedure uses them in its logic.

Output parameters let the procedure return values back to the caller beyond just a result set. You define them with the OUTPUT keyword. The caller declares a variable, passes it with OUTPUT keyword, and after execution, the variable contains the value set inside the procedure.

This is useful when you need to return metadata alongside the main result. For example, a search procedure might return the matching rows as a result set AND the total count as an output parameter for pagination. Or an insert procedure might return the newly generated ID as an output parameter.

You can have multiple output parameters. A common pattern is having an output parameter for error code and error message alongside the main operation.

Default parameter values make parameters optional. If a caller doesn't provide a value, the default is used. This allows flexible procedure calls without requiring every parameter.

In my project, our insert stored procedures return the new record ID through an output parameter. Our search procedures return both the result set and total count for pagination.`,

// Q29 - User-Defined Function
`A User-Defined Function is a reusable block of SQL logic that returns a value. Unlike stored procedures, functions can be used directly within SQL queries — in SELECT lists, WHERE clauses, JOIN conditions, anywhere an expression is valid.

There are two main types. Scalar functions return a single value — one row, one column. You call them like dbo.fn_GetFullName(FirstName, LastName) and they return a single VARCHAR. They're great for calculations, formatting, or lookups that you need repeatedly across many queries.

Table-valued functions return a result set — they act like a parameterized view. You can SELECT from them, JOIN with them, filter them. Inline table-valued functions have a single SELECT statement and perform well because the optimizer can inline them. Multi-statement table-valued functions build a result row by row and are slower.

The restriction is that functions cannot modify database state — no INSERT, UPDATE, DELETE on permanent tables. No transactions, no TRY-CATCH, no dynamic SQL. They must be deterministic or at least predictable.

Performance consideration — scalar functions called per-row in a query can be slow because they execute once for each row. For large datasets, consider rewriting as inline table-valued functions or using CROSS APPLY.

In my project, we use scalar functions for date formatting specific to our Oracle environment and table-valued functions for parameterized lookups like getting all team members for a given department.`,

// Q30 - Views
`A View is a saved SELECT query that acts like a virtual table. It doesn't store data itself — every time you query the view, it executes the underlying SELECT statement and returns fresh results.

The main benefits are simplification, security, and abstraction. For simplification — if you have a complex 5-table JOIN query that's used in many places, save it as a view and query the view with a simple SELECT. The complexity is hidden.

For security — you can grant users access to a view that shows only certain columns or filtered rows, without giving them access to the underlying tables. For example, a view that shows employee names and departments but hides salary information.

For abstraction — if the underlying table structure changes, you can modify the view to maintain the same output structure. Applications querying the view don't need to change.

Limitations — views cannot have parameters (use table-valued functions for that), cannot have ORDER BY without TOP or OFFSET, and regular views aren't cached — they execute the full query each time.

Indexed views (materialized views in Oracle) actually store the result physically and update it when underlying data changes. These give real performance benefits but at the cost of storage and write overhead.

You can do INSERT, UPDATE, DELETE through simple views (single table, no aggregates). Complex views with joins or GROUP BY don't support DML directly unless you use INSTEAD OF triggers.

In my project, we use views to simplify complex reporting queries and to provide restricted data access for different user roles.`,

// Q31 - Triggers
`A Trigger is a special stored procedure that executes automatically when a specific DML event occurs on a table — INSERT, UPDATE, or DELETE. You don't call triggers manually — they fire on their own when the event happens.

There are two types. AFTER triggers execute after the DML operation completes. The data is already modified when the trigger runs. These are commonly used for audit logging — recording who changed what and when. The insert, update, or delete has already succeeded, and the trigger logs it.

INSTEAD OF triggers execute in place of the DML operation. The original operation does NOT happen — only your trigger code runs. This is powerful for implementing soft deletes — instead of actually deleting a row, the trigger sets an IsActive flag to false. The DELETE statement fires, but no row is physically removed.

Inside triggers, you have access to two special virtual tables. INSERTED contains the new row data — for INSERT it has the new rows, for UPDATE it has the new values. DELETED contains the old row data — for DELETE it has the removed rows, for UPDATE it has the previous values. For UPDATE, you have both, letting you compare old versus new values.

Triggers should be kept lightweight. Heavy trigger logic slows down every DML operation on that table. If a trigger fails, it can roll back the original operation too.

In my project, we use triggers for audit trails — logging every change to critical tables with the old value, new value, who changed it, and when.`,

// Q32 - INSERTED and DELETED tables
`INSERTED and DELETED are special virtual tables available only inside triggers. They let you see what data was affected by the DML operation.

For an INSERT operation, the INSERTED table contains all the new rows that were just added. The DELETED table is empty because nothing was removed.

For a DELETE operation, the DELETED table contains the rows that were just removed. The INSERTED table is empty because nothing was added.

For an UPDATE operation, both tables have data. DELETED contains the old values before the update, and INSERTED contains the new values after the update. This is because UPDATE is internally treated as a DELETE of old row plus INSERT of new row.

This lets you do powerful things in triggers. For audit logging during UPDATE, you can compare INSERTED and DELETED to see exactly which columns changed and what the old and new values were. For validation triggers, you can check INSERTED values and reject the operation if business rules are violated.

The structure of INSERTED and DELETED mirrors the table the trigger is on — same columns, same data types.

In my project, our audit trigger captures changes by selecting from both INSERTED and DELETED, comparing values, and writing the differences to an AuditLog table with timestamp and user information.`,

// Q33 - Constraints and Keys
`Constraints are rules enforced on table columns to ensure data integrity. They prevent invalid data from entering the database.

PRIMARY KEY uniquely identifies each row. It cannot be NULL and must be unique. Only one per table. It automatically creates a clustered index. It's the main identifier for joining tables.

FOREIGN KEY creates a relationship between two tables. It references the Primary Key of another table and ensures you can't insert a value that doesn't exist in the referenced table. This is referential integrity. CASCADE options determine what happens when the parent record is deleted or updated.

UNIQUE constraint ensures all values in a column are distinct. Unlike Primary Key, it allows one NULL value, and you can have multiple unique constraints per table. Use it for business keys like email or employee code.

CHECK constraint validates data against a condition before allowing it. Like CHECK (Salary > 0) ensures no negative salaries, or CHECK (Age BETWEEN 18 AND 65) enforces a valid range.

DEFAULT provides a value when none is specified during INSERT. Like DEFAULT GETDATE() for creation timestamps or DEFAULT 1 for IsActive flags.

NOT NULL simply prevents NULL values in a column. The column must always have a value.

In my project, we use all of these. Primary keys on all tables, foreign keys for relationships with ON DELETE RESTRICT to prevent accidental cascade deletions, unique constraints on audit reference numbers, check constraints on status codes, and defaults on created date columns.`,

// Q34 - CTE (Common Table Expression)
`A CTE or Common Table Expression is a temporary named result set defined within a single statement. It makes complex queries more readable by breaking them into logical, named blocks.

The syntax starts with WITH, followed by the CTE name, AS, and the query in parentheses. After defining the CTE, you immediately use it in the next SELECT, INSERT, UPDATE, or DELETE statement. The CTE only exists for that one statement — it's not stored anywhere.

CTEs are great for readability. Instead of deeply nested subqueries that are hard to follow, you define each logical step as a named CTE and reference them clearly. You can define multiple CTEs separated by commas and reference earlier CTEs in later ones.

Recursive CTEs are especially powerful for hierarchical data. They have two parts — an anchor query that gets the starting rows (like top-level managers with no boss), and a recursive part that joins back to the CTE itself to get the next level. This continues until no more rows are found. Perfect for org charts, bill of materials, or category trees.

The difference from temp tables — CTEs are not stored physically, they exist only during query execution. They're essentially inline views. For performance, they're similar to subqueries. If you need to reference the same result set multiple times or in multiple statements, a temp table is better.

In my project, we use CTEs for hierarchical queries — showing the organization chain for audit assignments — and for breaking complex report queries into readable steps.`,

// Q35 - Temp Table vs Table Variable
`Both are used for storing intermediate results, but they differ in scope, performance, and behavior.

Temp Tables (prefixed with #) are created in the tempdb database. They persist for the session or until explicitly dropped. They support indexes, statistics, and constraints. The query optimizer creates statistics on them, leading to better execution plans for large datasets. They're visible in nested stored procedures. And they participate in transactions — a ROLLBACK undoes changes to temp tables.

Table Variables (declared with DECLARE @table TABLE) live in memory for small datasets but overflow to tempdb for larger ones. They exist only within the current batch or scope. They have limited index support. The optimizer assumes they have 1 row regardless of actual content — this can lead to poor plans for large datasets. They're NOT visible in nested SPs. And critically, they're NOT affected by transactions — ROLLBACK doesn't undo changes to table variables.

When to use which — for large datasets (thousands of rows) or when you need proper indexes and statistics, use temp tables. For small datasets under 1000 rows, or when you need transaction independence, use table variables. Table variables also avoid recompilation issues that temp tables can cause.

In my project, we use temp tables in stored procedures that process large batches of audit data for reports, and table variables for small lookup lists within a procedure.`,

// Q36 - Window Functions (ROW_NUMBER, RANK, DENSE_RANK)
`Window functions perform calculations across a set of rows related to the current row WITHOUT collapsing the result into groups. Unlike GROUP BY which reduces rows, window functions keep all original rows and add a computed column.

The syntax uses OVER() clause which defines the window — the set of rows the function operates on. OVER(ORDER BY Salary DESC) means rank all rows ordered by salary.

ROW_NUMBER assigns a unique sequential number to each row. Even for ties (same salary), each gets a different number. The assignment for ties is arbitrary. Use this for pagination or when you need exactly one winner.

RANK assigns the same rank for ties but SKIPS the next number. If two people are rank 2, the next person is rank 4 (not 3). Use this for competition-style ranking where tied positions are reflected.

DENSE_RANK assigns the same rank for ties but does NOT skip. If two people are rank 2, the next is rank 3. Use this for finding Nth highest values because there are no gaps in the numbering.

These are absolutely essential for interview coding questions. The Nth highest salary question uses DENSE_RANK. Pagination uses ROW_NUMBER. Duplicate detection uses ROW_NUMBER with PARTITION BY.

In my project, we use ROW_NUMBER for pagination in Oracle (ROWNUM equivalent), and DENSE_RANK for reports showing top performers per department.`,

// Q37 - PARTITION BY
`PARTITION BY is used inside the OVER() clause to divide rows into groups for window function calculations. Each partition gets its own independent calculation.

Without PARTITION BY, the window function operates on the entire result set. With PARTITION BY, it resets for each partition — like a GROUP BY but without reducing rows.

For example, ROW_NUMBER() OVER (PARTITION BY Department ORDER BY Salary DESC) gives rank 1, 2, 3 within EACH department separately. The ranking resets for every new department. This is how you find the top N earners per department.

Other uses — running totals within partitions: SUM(Amount) OVER (PARTITION BY CustomerId ORDER BY OrderDate) gives a running total per customer. Or calculating percentage of departmental total: Salary / SUM(Salary) OVER (PARTITION BY Department) gives each employee's share of their department's total salary.

PARTITION BY is one of the most useful SQL features for analytics and reporting. It avoids correlated subqueries and self-joins that would otherwise be needed for these calculations.

In my project, we use PARTITION BY to calculate completion percentages per department, rank auditors by number of findings within their region, and compute running totals for monthly report trends.`,

// Q38 - OFFSET FETCH (Pagination)
`OFFSET FETCH is the standard SQL way to implement pagination — showing a specific page of results from a large dataset.

The syntax goes after ORDER BY: ORDER BY Id OFFSET 20 ROWS FETCH NEXT 10 ROWS ONLY. OFFSET skips the specified number of rows, FETCH NEXT takes the specified count after that.

The formula for any page is: OFFSET (PageNumber - 1) * PageSize ROWS FETCH NEXT PageSize ROWS ONLY. For page 3 with 10 items per page, you OFFSET 20 ROWS and FETCH NEXT 10.

ORDER BY is mandatory with OFFSET FETCH — you must have a deterministic order for consistent pagination. Without a consistent ORDER BY, the same page might show different results on different executions.

This is much cleaner than the older approaches — TOP with subqueries, or ROW_NUMBER with CTE. It's also what Entity Framework generates for Skip and Take operations.

Performance consideration — for very deep pages (like page 10000), OFFSET still has to scan and discard all the preceding rows. For better deep-pagination performance, use keyset pagination (WHERE Id > @lastId ORDER BY Id FETCH NEXT 10).

In my project, all our list pages use server-side pagination. The DAL accepts page number and page size, constructs the OFFSET FETCH query, and also runs a COUNT query for total pages. In Oracle, we use the equivalent OFFSET/FETCH syntax available from Oracle 12c.`,

// Q39 - Nth Highest Salary
`This is probably the most frequently asked SQL coding question in interviews. There are multiple approaches.

The best approach uses DENSE_RANK. You wrap a query that assigns DENSE_RANK ordered by salary descending, then filter WHERE Rank = N in the outer query. DENSE_RANK handles duplicate salaries correctly — if three people earn the same highest salary, they all get rank 1, and the next distinct salary gets rank 2.

The CTE version looks like: WITH RankedSalaries AS (SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS Rank FROM Employee) SELECT DISTINCT Salary FROM RankedSalaries WHERE Rank = 3.

The OFFSET FETCH approach is simpler: SELECT DISTINCT Salary FROM Employee ORDER BY Salary DESC OFFSET 2 ROWS FETCH NEXT 1 ROWS ONLY. Skip the first N-1 distinct salaries, take one.

The subquery approach for specifically 2nd highest: SELECT MAX(Salary) FROM Employee WHERE Salary < (SELECT MAX(Salary) FROM Employee). This finds the max salary that's less than the overall max. But this only works for 2nd, not Nth generally.

Why DENSE_RANK is best — it handles duplicates properly, works for any N, and clearly shows your understanding of window functions. Use DENSE_RANK, not RANK or ROW_NUMBER, because RANK skips numbers and ROW_NUMBER doesn't handle ties.

In interviews, always clarify: should duplicate salaries be considered the same rank or different? This determines whether to use DENSE_RANK or ROW_NUMBER.`,

// Q40 - Find Duplicate Records
`Finding duplicates is another very common interview question. The approach uses GROUP BY with HAVING COUNT > 1.

The basic pattern: SELECT column1, column2, COUNT(*) FROM Table GROUP BY column1, column2 HAVING COUNT(*) > 1. This groups rows by the columns that define duplicates and filters to only groups with more than one row.

To see all the duplicate rows with their full details, you wrap it in a subquery: SELECT * FROM Employee WHERE Email IN (SELECT Email FROM Employee GROUP BY Email HAVING COUNT(*) > 1). This first identifies which emails are duplicated, then retrieves all rows with those emails.

For more sophisticated duplicate detection, you can use window functions: SELECT *, ROW_NUMBER() OVER (PARTITION BY Email ORDER BY Id) AS RowNum FROM Employee. Any row with RowNum > 1 is a duplicate. This also sets you up for deletion if needed.

In my project, we check for duplicates before bulk imports. Our import process first loads data into a staging table, then uses GROUP BY with HAVING to identify duplicates, resolves them (usually keeping the latest), and only then moves clean data to the main table.`,

// Q41 - Delete Duplicates Keeping One
`Deleting duplicates while keeping one copy is a step beyond just finding them. The cleanest approach uses ROW_NUMBER with a CTE.

The pattern: WITH CTE AS (SELECT *, ROW_NUMBER() OVER (PARTITION BY Email ORDER BY Id) AS RowNum FROM Employee) DELETE FROM CTE WHERE RowNum > 1.

How it works — PARTITION BY Email groups rows with the same email. ORDER BY Id determines which to keep — the one with the lowest Id gets RowNum 1 (the keeper). All others get RowNum 2, 3, etc. (the duplicates). DELETE WHERE RowNum > 1 removes the duplicates.

The beauty of this approach is you control which copy to keep through the ORDER BY. ORDER BY Id ASC keeps the oldest. ORDER BY Id DESC keeps the newest. ORDER BY CreatedDate DESC keeps the most recently created.

An alternative approach uses a self-join: DELETE e1 FROM Employee e1 INNER JOIN Employee e2 ON e1.Email = e2.Email AND e1.Id > e2.Id. This deletes every row where another row exists with the same email but a lower ID — effectively keeping the lowest ID for each email.

Always test with SELECT first before running DELETE. Replace DELETE with SELECT to verify you're targeting the right rows.

In my project, we run duplicate cleanup scripts during data migration. We always backup first, test with SELECT, then execute the DELETE within a transaction so we can rollback if something goes wrong.`,

// Q42 - Employee-Manager Hierarchy
`This is a classic self-join question. The Employee table references itself — each employee has a ManagerId that points to another employee's Id.

The simple version uses a self-join: SELECT e.Name AS Employee, m.Name AS Manager FROM Employee e LEFT JOIN Employee m ON e.ManagerId = m.Id. We use LEFT JOIN because the CEO has NULL ManagerId — they'd be excluded with INNER JOIN.

For the full hierarchy with levels, you use a recursive CTE. The anchor query gets the root (CEO with ManagerId IS NULL, Level 0). The recursive part joins Employee with the CTE to get the next level down. It keeps expanding until no more children are found.

The recursive CTE gives you the level number, so you can indent the output like an org chart. You can also calculate things like the full management chain for any employee by tracing up from them to the CEO.

Self-joins for hierarchies are very common in real applications — organizational structures, category trees, folder hierarchies, comment threads with replies.

In my project, the audit approval workflow follows the management hierarchy. We use a self-join to show the reporting chain and a recursive query to find all subordinates under a given manager for bulk audit assignments.`,

// Q43 - RANK vs DENSE_RANK vs ROW_NUMBER
`These three window functions all assign numbers to rows, but they handle ties differently.

ROW_NUMBER always gives a unique sequential number: 1, 2, 3, 4, 5. Even if two rows have the same salary, they get different numbers. The assignment between tied rows is arbitrary. Use ROW_NUMBER for pagination or when you need exactly one row per position.

RANK gives the same number to ties but SKIPS the next positions: 1, 2, 2, 4, 5. Two people tied at rank 2 means nobody gets rank 3. Use RANK for competition-style ranking where the gap reflects how many people are ahead of you.

DENSE_RANK gives the same number to ties with NO gaps: 1, 2, 2, 3, 4. The next rank after a tie is always the next integer. Use DENSE_RANK for finding Nth highest values because there are no gaps in the sequence.

The most important interview application — for Nth highest salary, always use DENSE_RANK. If three people earn 100K, they all get rank 1, and 90K gets rank 2. With RANK, 90K would get rank 4 which is wrong for finding the "2nd highest salary." With ROW_NUMBER, you'd get inconsistent results since tied rows get arbitrary positions.

For pagination, use ROW_NUMBER because you want exactly one row per position — page boundaries should be predictable.`,

// Q44 - @@IDENTITY vs SCOPE_IDENTITY vs IDENT_CURRENT
`All three retrieve the last generated identity value, but from different scopes.

SCOPE_IDENTITY() returns the last identity value generated in the current session AND current scope. "Scope" means the current stored procedure, trigger, function, or batch. If your INSERT fires a trigger that inserts into another table with identity, SCOPE_IDENTITY still returns YOUR table's identity, ignoring the trigger's insert. This is the SAFEST and RECOMMENDED option.

@@IDENTITY returns the last identity value generated in the current session across ANY scope. If a trigger on your table inserts into another identity table, @@IDENTITY returns that trigger's value, not yours. This is DANGEROUS and unpredictable.

IDENT_CURRENT('TableName') returns the last identity value generated for a SPECIFIC table across ANY session. If another user just inserted into that table, you'd get THEIR identity value. Not safe for concurrent environments at all.

The practical rule is simple — always use SCOPE_IDENTITY() after an INSERT to get the newly generated ID. It's immune to triggers and other sessions.

In modern applications with EF Core, the framework handles this automatically — after SaveChanges, the entity's Id property is populated. But if you're writing raw SQL or stored procedures, SCOPE_IDENTITY() is your friend.

In my project with Oracle, we use sequences and RETURNING INTO clause to get the generated ID, which is Oracle's equivalent of SCOPE_IDENTITY.`,

// Q45 - Cursors
`A Cursor processes rows one at a time in a loop, rather than operating on the entire set at once. It's like a foreach loop over query results.

The process is: DECLARE the cursor with a SELECT, OPEN it, FETCH rows one by one into variables, process each row in a WHILE loop, then CLOSE and DEALLOCATE.

Why cursors are bad — SQL is designed for set-based operations. The engine is optimized to process millions of rows in one statement efficiently. Cursors fight against this by processing row-by-row, which is dramatically slower. A set-based UPDATE that takes 1 second might take 100 seconds as a cursor. They also hold locks longer, use more memory, and make code more complex.

When cursors might be acceptable — when you genuinely need to call a stored procedure for each row, when processing rows requires different logic based on the previous row, or for administrative tasks that aren't performance-critical.

But even in these cases, alternatives often exist. You can use WHILE loops with a counter, or recursive CTEs, or CROSS APPLY, or table-valued parameters to pass sets to procedures.

The interview answer should always emphasize: avoid cursors, prefer set-based operations. If the interviewer asks when you'd use one, mention admin scripts or genuinely sequential processing requirements.

In my project, we never use cursors in application-facing code. All our data operations are set-based for performance.`,

// Q46 - ISNULL vs COALESCE
`Both handle NULL replacement, but with important differences.

ISNULL takes exactly two parameters — the value to check and the replacement. If the first is NULL, return the second. It's SQL Server specific and not portable to other databases. The return type is determined by the first parameter's type.

COALESCE takes two or more parameters and returns the first non-NULL value from the list. It's ANSI standard SQL, meaning it works across SQL Server, Oracle, PostgreSQL, MySQL. The return type is determined by the highest precedence type among all parameters.

The flexibility of COALESCE is its main advantage. COALESCE(Phone, Mobile, WorkPhone, Email, 'No Contact') tries each value in order and returns the first one that isn't NULL. To do this with ISNULL, you'd need to nest them: ISNULL(Phone, ISNULL(Mobile, ISNULL(WorkPhone, ISNULL(Email, 'No Contact')))) — much uglier.

Performance-wise, ISNULL is marginally faster because it's simpler internally. But the difference is negligible for almost all practical cases.

My recommendation is to use COALESCE as the default choice — it's standard, more flexible, and reads better. Use ISNULL only when you specifically need its type conversion behavior or are in a highly performance-sensitive context.

In my project with Oracle, we use NVL (Oracle's ISNULL equivalent) and COALESCE interchangeably. NVL for simple two-parameter cases, COALESCE when checking multiple fallback values.`,

// Q47 - Clustered vs Non-Clustered (detailed)
`Let me give a thorough comparison since this is asked in almost every SQL interview.

Clustered index physically sorts and stores the actual data rows. The table data IS the clustered index — they're the same thing. Only one per table because data can only be sorted one physical way. Primary Key creates it by default. Excellent for range queries like WHERE Date BETWEEN because consecutive rows are stored together on disk.

Non-clustered index is a separate structure containing the indexed columns plus a pointer back to the actual data row. Multiple per table. Like a book's index — sorted reference pointing to the actual content elsewhere. Requires an extra lookup step called "key lookup" to get columns not in the index.

Covering index is a non-clustered index that INCLUDES all columns a query needs. The query is answered entirely from the index without going to the table at all. Created with INCLUDE clause: CREATE INDEX IX ON Table(FilterColumn) INCLUDE (Column1, Column2). This avoids the key lookup penalty.

When choosing which column to cluster on — choose the column most used for range queries and that determines the most common access pattern. Usually this is the Primary Key, but for time-series data, clustering on date can be better.

In my project, all primary keys are clustered. We have non-clustered indexes on DepartmentId, StatusCode, and CreatedDate. For our most frequent audit listing query, we created a covering index that includes all displayed columns to avoid table lookups.`,

// Q48 - Optimize slow query
`Query optimization is a very practical interview topic. Here's my systematic approach.

First, check the execution plan. Look for Table Scans on large tables — they indicate missing indexes. Look for Key Lookups — they suggest the index doesn't cover all needed columns. Look for high-cost operators like Hash Joins on small tables.

Second, add proper indexes. Index columns in WHERE, JOIN ON, and ORDER BY clauses. Use covering indexes with INCLUDE for frequently accessed columns. Remove unused indexes that just slow down writes.

Third, avoid SELECT star. Only retrieve the columns you actually need. This reduces I/O and allows covering indexes to work.

Fourth, avoid functions on indexed columns. WHERE YEAR(OrderDate) = 2024 can't use an index on OrderDate. Rewrite as WHERE OrderDate >= '2024-01-01' AND OrderDate < '2025-01-01' which can use the index.

Fifth, use EXISTS instead of IN for large subqueries. EXISTS short-circuits on first match.

Sixth, implement pagination with OFFSET FETCH instead of loading everything.

Seventh, avoid cursors — rewrite as set-based operations.

Eighth, check statistics are up to date. Stale statistics lead to bad execution plans.

In my project, when we encounter slow queries, we first check the Oracle execution plan using EXPLAIN PLAN, then add indexes or rewrite the query. Most performance issues are solved by adding the right index or eliminating unnecessary full table scans.`,

// Q49 - Nth Highest Salary (detailed)
`This is the classic SQL interview coding question. Let me explain multiple methods.

Method 1 — DENSE_RANK in a CTE. This is the best approach. Create a CTE that assigns DENSE_RANK to each salary ordered descending. Then SELECT WHERE Rank = N. DENSE_RANK handles duplicate salaries correctly — multiple people with the same salary get the same rank, and the next distinct salary gets the next rank without gaps.

Method 2 — OFFSET FETCH. SELECT DISTINCT Salary ORDER BY Salary DESC OFFSET N-1 ROWS FETCH NEXT 1 ROWS ONLY. Simple and elegant, but DISTINCT is important to handle duplicate salaries.

Method 3 — Subquery for specifically 2nd highest. SELECT MAX(Salary) WHERE Salary < (SELECT MAX(Salary) FROM Employee). This finds the max that's below the overall max. Works only for 2nd, not generic Nth.

Why DENSE_RANK is preferred — it handles all edge cases. If asked for 3rd highest and salaries are 100K, 100K, 90K, 80K, 80K, 70K, DENSE_RANK correctly identifies 80K as 3rd highest. ROW_NUMBER might pick 90K depending on arbitrary tie-breaking. RANK would skip numbers making the Nth position unreliable.

In interviews, always ask clarifying questions: Should I return multiple employees if they share the same Nth salary? Should duplicates count as separate ranks? Then explain why you chose DENSE_RANK.`,

// Q50 - CTE vs Temp Table vs Table Variable
`These three all provide intermediate result storage, but for different scenarios.

CTE exists only during a single statement. It's an inline named result set — no physical storage. After the statement executes, it's gone. Best for improving readability of complex queries and for recursive hierarchies. Cannot be indexed. Cannot be reused across multiple statements.

Temp Table is a physical table in tempdb. It persists for the session or until dropped. It has statistics, can have indexes, participates in transactions. Best for large intermediate results that are used multiple times, or when you need indexes for performance. Visible in nested stored procedures.

Table Variable lives in memory for small data, overflows to tempdb for larger amounts. Scope is the current batch only. No statistics (optimizer assumes 1 row), limited indexing. NOT affected by transactions — ROLLBACK doesn't undo table variable changes. Best for small datasets under 1000 rows.

Decision guide — If you need the result in one query only and it's for readability, use CTE. If you have large data used across multiple statements or need indexes, use temp table. If you have small data and want it transaction-independent, use table variable.

In my project, we use CTEs for readable multi-step queries in reports, temp tables for complex stored procedures that build results in stages, and table variables for small parameter lists passed between procedure steps.`,

// Q51 - Stored Procedure vs Inline Query
`This is about where to put your SQL logic — in the database or in the application code.

Stored Procedures live in the database. They're precompiled with cached execution plans, so repeated calls are fast. They provide security through EXECUTE permissions without direct table access. They reduce network traffic — one short EXEC call instead of a long SQL string. They're maintained by DBAs and can be optimized independently of the application.

Inline queries live in application code — either as raw SQL strings or as LINQ/EF Core expressions that generate SQL. They're version-controlled with your application code. They're easier to test in unit tests. They keep logic close to where it's used. And with ORMs like EF Core, you get type safety and refactoring support.

When to use Stored Procedures — complex multi-step operations, batch processing, when the DBA manages database performance, security-sensitive operations, or when network latency matters (reducing round trips).

When to use inline queries — simple CRUD operations, when using Code First with EF Core, when you want logic in one place with the application, for microservices with dedicated databases, or when rapid development matters.

In my project, we use stored procedures for all database operations. Our DAL calls Oracle procedures through OracleHelper. This gives us the security benefit — the application database user only has EXECUTE permissions, no direct table access. It also lets our DBA optimize queries without requiring application deployments.`,

// Q52 - Window Functions with PARTITION BY (detailed)
`Window functions are one of the most powerful SQL features. They compute values across a set of rows related to the current row, without collapsing the result like GROUP BY does.

The OVER() clause defines the window. ORDER BY inside OVER determines the computation order. PARTITION BY inside OVER resets the calculation for each group.

ROW_NUMBER() OVER (PARTITION BY Department ORDER BY Salary DESC) gives each employee a rank within their department. IT department gets 1, 2, 3. HR gets its own 1, 2, 3. Ranks reset per partition.

This is how you solve "top N per group" questions. Wrap in a CTE, assign ROW_NUMBER or DENSE_RANK partitioned by the group column, then filter WHERE Rank <= N.

Running totals use SUM with OVER: SUM(Amount) OVER (ORDER BY OrderDate) gives cumulative sum up to each row. Add PARTITION BY CustomerId to get running total per customer.

Other window functions — LAG() and LEAD() access previous/next row values without self-join. FIRST_VALUE and LAST_VALUE get boundary values of the window. NTILE divides rows into N equal groups.

In my project, we use window functions for:
- Pagination with ROW_NUMBER
- Finding latest record per group (ROW_NUMBER partitioned by EntityId, ordered by Date DESC, take RowNum = 1)
- Calculating month-over-month trends using LAG
- Ranking auditors by performance within their region`
];
