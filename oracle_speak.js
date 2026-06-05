const SPEAK_DATA = [
// Q1 - What is Oracle Database?
`Oracle Database is a multi-model relational database management system developed by Oracle Corporation. It's one of the most widely used enterprise databases, known for reliability, scalability, and security.

Key features that make Oracle popular in enterprises — it supports ACID transactions for data integrity, has built-in high availability with Real Application Clusters (RAC), offers powerful PL/SQL for server-side programming, handles massive data volumes efficiently, and has excellent security features like Transparent Data Encryption.

Oracle uses a different architecture than SQL Server. It has instances and databases as separate concepts — an instance is the memory and processes, a database is the physical files. One instance typically serves one database.

Oracle editions include Enterprise (full features, expensive), Standard (mid-range), Express (XE — free, limited to 12GB data), and Cloud options. Most large enterprises use Enterprise for its advanced features like partitioning, compression, and RAC.

In my project, we use Oracle as our primary database. Our DAL connects through Oracle.ManagedDataAccess (ODP.NET), executes stored procedures for all CRUD operations, and uses Oracle-specific features like sequences for ID generation and NVL for null handling.`,

// Q2 - Oracle vs SQL Server differences
`The differences between Oracle and SQL Server matter for developers who need to work across both platforms.

Syntax differences — Oracle uses NVL instead of ISNULL, SYSDATE instead of GETDATE(), NVL2 for conditional null handling, DECODE instead of simple CASE (though both support CASE). String concatenation uses || in Oracle versus + in SQL Server. Empty string and NULL are the same in Oracle — a critical difference that catches many developers.

Data types differ — Oracle uses NUMBER instead of INT/DECIMAL, VARCHAR2 instead of VARCHAR (VARCHAR is reserved), DATE stores both date and time (no separate DATETIME), CLOB/BLOB for large objects.

Identity columns — Oracle traditionally uses Sequences with triggers, while SQL Server uses IDENTITY. Oracle 12c added identity columns, but sequences are still dominant in existing systems.

Transaction handling — Oracle has implicit transactions (no BEGIN TRANSACTION needed). Every statement is in a transaction until you COMMIT or ROLLBACK. SQL Server auto-commits each statement unless you explicitly start a transaction.

NULL handling — in Oracle, empty string '' equals NULL. This is a massive difference. WHERE Name != '' won't filter empty strings in Oracle because '' IS NULL.

In my project, we use Oracle sequences for ID generation, NVL for null replacement, TO_DATE/TO_CHAR for date formatting, and all our queries account for Oracle's empty-string-is-null behavior.`,

// Q3 - Oracle Data Types
`Oracle has specific data types that differ from SQL Server.

NUMBER(p,s) is the universal numeric type. p is precision (total digits), s is scale (decimal digits). NUMBER(10) is a 10-digit integer. NUMBER(10,2) holds up to 10 digits with 2 decimals. Just NUMBER without parameters stores any numeric value. There's no separate INT, DECIMAL, FLOAT — it's all NUMBER.

VARCHAR2(n) stores variable-length character data up to 4000 bytes (or 32767 in PL/SQL). Always use VARCHAR2, never VARCHAR — Oracle reserves VARCHAR for future use and its behavior could change. CHAR(n) is fixed-length, padded with spaces.

DATE stores both date AND time — down to seconds. There's no separate DATETIME. TIMESTAMP extends DATE with fractional seconds and optional timezone. TIMESTAMP WITH TIME ZONE stores timezone information.

CLOB stores character large objects — unlimited text like documents or XML. BLOB stores binary data like images or files. These replace TEXT and IMAGE types from SQL Server.

ROWID is Oracle-specific — a pseudo-column that uniquely identifies a row's physical location on disk. It's the fastest way to access a specific row but shouldn't be stored long-term as it can change.

In my project, we use NUMBER for all IDs and amounts, VARCHAR2 for text fields, DATE for timestamps (formatted with TO_CHAR for display), and CLOB for large observation descriptions in our audit system.`,

// Q4 - NVL, NVL2, COALESCE, DECODE
`These are Oracle's null-handling and conditional functions — essential for everyday queries.

NVL(value, replacement) returns the replacement if value is NULL. It's Oracle's equivalent of SQL Server's ISNULL. SELECT NVL(Phone, 'N/A') FROM Employee — if Phone is NULL, show 'N/A'. Only takes two parameters.

NVL2(value, if_not_null, if_null) is a three-parameter version. If value is NOT NULL, return the second parameter. If NULL, return the third. SELECT NVL2(ManagerId, 'Has Manager', 'Top Level') — returns different text based on whether ManagerId exists.

COALESCE(val1, val2, val3...) returns the first non-NULL value from the list. ANSI standard, works in both Oracle and SQL Server. SELECT COALESCE(Phone, Mobile, Email, 'No Contact') — tries each in order, returns the first that isn't NULL.

DECODE(expression, search1, result1, search2, result2, ..., default) is Oracle's inline if-then-else. Like a compact CASE statement. DECODE(Status, 'A', 'Active', 'I', 'Inactive', 'Unknown') — if Status is 'A' return 'Active', if 'I' return 'Inactive', else 'Unknown'.

DECODE vs CASE — DECODE is Oracle-specific and more compact for simple equality checks. CASE is ANSI standard, works everywhere, and supports complex conditions (ranges, LIKE, etc.). Prefer CASE for portability and complex logic.

In my project, we use NVL extensively for providing defaults in Oracle queries, DECODE for translating status codes to display names, and COALESCE when checking multiple fallback columns.`,

// Q5 - Sequences in Oracle
`Sequences are Oracle's mechanism for generating unique numeric values — typically used for primary key IDs. They're separate database objects, independent of any table.

CREATE SEQUENCE seq_employee_id START WITH 1 INCREMENT BY 1 NOCACHE NOCYCLE. This creates a sequence starting at 1, incrementing by 1 each time.

To get the next value: seq_employee_id.NEXTVAL. To see the current value: seq_employee_id.CURRVAL (only works after NEXTVAL in the same session).

Usage in INSERT: INSERT INTO Employee (Id, Name) VALUES (seq_employee_id.NEXTVAL, 'John'). Each call to NEXTVAL generates a unique number, even across concurrent sessions — it's thread-safe.

Unlike SQL Server's IDENTITY which is tied to a table, Oracle sequences are independent objects. One sequence can be used across multiple tables. You can have gaps in the sequence (from rollbacks or cached values). You can alter a sequence to change increment or restart.

Oracle 12c added IDENTITY columns: CREATE TABLE Employee (Id NUMBER GENERATED ALWAYS AS IDENTITY). This internally creates a sequence but works more like SQL Server's IDENTITY. However, most existing Oracle systems still use explicit sequences.

In my project, every table has a corresponding sequence — SEQ_AUDIT_ID, SEQ_OBSERVATION_ID, etc. Our INSERT stored procedures call NEXTVAL and return the generated ID through an OUT parameter. The DAL captures this to return the new record's ID to the application layer.`,

// Q6 - ROWNUM vs ROWID vs ROW_NUMBER()
`These three are often confused but serve completely different purposes.

ROWNUM is a pseudo-column assigned to rows AS THEY ARE RETURNED by the query — before ORDER BY. The first row gets ROWNUM 1, second gets 2, etc. Critical issue: WHERE ROWNUM > 5 returns nothing because the first row is always assigned ROWNUM 1, fails the condition, and is discarded. ROWNUM only works reliably with <= or <.

For pagination before Oracle 12c: SELECT * FROM (SELECT a.*, ROWNUM rn FROM (SELECT * FROM Employee ORDER BY Salary DESC) a WHERE ROWNUM <= 20) WHERE rn > 10. This gets rows 11-20. The inner query orders, middle assigns ROWNUM, outer filters. Ugly but necessary.

ROWID is the physical address of a row on disk — the fastest way to locate a specific row. It's like a pointer to the row's exact storage location. Used for fast updates after a query, or for deleting duplicates. But ROWID can change during table reorganization, so never store it permanently.

ROW_NUMBER() OVER (ORDER BY ...) is an analytic function that assigns sequential numbers based on the specified ORDER. Unlike ROWNUM, it respects the ordering and can be partitioned. This is the modern approach for pagination and ranking.

Oracle 12c+ added OFFSET FETCH: SELECT * FROM Employee ORDER BY Salary DESC OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY. Same as SQL Server's syntax — much cleaner than ROWNUM subqueries.

In my project, we use OFFSET FETCH for pagination since we're on Oracle 12c+. For older queries, some still use the ROWNUM subquery pattern. ROW_NUMBER is used in reports for ranking within groups.`,

// Q7 - PL/SQL Basics
`PL/SQL is Oracle's procedural language extension to SQL. It adds programming constructs like variables, loops, conditions, and exception handling to SQL — allowing you to write complex server-side logic.

Structure of a PL/SQL block: DECLARE section for variables, BEGIN for executable code, EXCEPTION for error handling, END. The simplest block is BEGIN ... END with just executable statements.

Variables are declared with their data type: v_name VARCHAR2(100); v_salary NUMBER(10,2); v_hire_date DATE. You can anchor types to table columns: v_name Employee.Name%TYPE — automatically matches that column's type.

Control structures: IF/ELSIF/ELSE/END IF for conditions. FOR i IN 1..10 LOOP ... END LOOP for counted loops. WHILE condition LOOP ... END LOOP. LOOP ... EXIT WHEN condition ... END LOOP for unconditional loops.

Cursors iterate through query results row by row. Implicit cursors handle single-row queries. Explicit cursors handle multi-row results. FOR rec IN (SELECT * FROM Employee) LOOP ... END LOOP is the simplest cursor syntax.

Exception handling: EXCEPTION WHEN NO_DATA_FOUND THEN ... WHEN TOO_MANY_ROWS THEN ... WHEN OTHERS THEN ... Common exceptions include NO_DATA_FOUND, TOO_MANY_ROWS, DUP_VAL_ON_INDEX, ZERO_DIVIDE.

In my project, all our database logic is in PL/SQL stored procedures. They contain business validations, data transformations, and complex operations that are more efficient on the server than in application code.`,

// Q8 - Oracle Stored Procedures
`Oracle stored procedures are PL/SQL blocks stored in the database, callable by name. They encapsulate business logic, improve security, and reduce network round trips.

Syntax: CREATE OR REPLACE PROCEDURE proc_name (p_id IN NUMBER, p_name IN VARCHAR2, p_result OUT NUMBER) IS — variable declarations — BEGIN — executable logic — EXCEPTION — error handling — END proc_name.

Parameter modes: IN is input only (default, read-only inside procedure). OUT is output only (returns value to caller). IN OUT is bidirectional (reads input and returns modified value).

CREATE OR REPLACE means create the procedure or replace it if it already exists — essential for development where you modify procedures repeatedly.

Calling from application code: using OracleCommand with CommandType.StoredProcedure, adding OracleParameter objects for each parameter, marking OUT parameters with Direction = ParameterDirection.Output, then ExecuteNonQuery. After execution, read OUT parameter values.

Exception handling inside procedures: EXCEPTION block catches errors. RAISE_APPLICATION_ERROR(-20001, 'Custom message') throws custom errors to the caller. SQLCODE and SQLERRM give error number and message.

In my project, every database operation goes through stored procedures. SP_INSERT_OBSERVATION takes IN parameters for the data and returns the new ID through OUT. SP_GET_AUDIT_LIST takes search parameters IN and returns a REF CURSOR OUT for the result set. This gives us security (no direct table access), performance (precompiled), and maintainability (change logic without redeploying app).`,

// Q9 - Oracle Functions vs Procedures
`Both are named PL/SQL blocks stored in the database, but they differ in usage and purpose.

A Procedure performs an action — it can INSERT, UPDATE, DELETE, call other procedures, and return multiple values through OUT parameters. You call it with EXEC or from other PL/SQL blocks. It CANNOT be used in a SELECT statement.

A Function MUST return a single value using the RETURN statement. It CAN be used inside SELECT, WHERE, and other SQL clauses. By convention, functions should be read-only — no DML operations inside (though Oracle allows it, it's bad practice).

For example, a function fn_get_department_name(p_dept_id NUMBER) RETURN VARCHAR2 can be called as: SELECT Name, fn_get_department_name(DepartmentId) FROM Employee. You can't do this with a procedure.

Pipelined functions return rows one at a time using PIPE ROW — useful for table functions that you SELECT from like a table.

When to use which: Procedure for operations that modify data or have complex output. Function for calculations, lookups, or transformations used within SQL queries. If you need the result in a SELECT statement, it must be a function.

In my project, we use procedures for all CRUD operations (they take IN parameters and return results through OUT cursors). We use functions for reusable calculations like getting financial year from a date, or translating status codes to display names within queries.`,

// Q10 - REF CURSOR
`REF CURSOR is Oracle's mechanism for returning result sets from stored procedures. It's how you get query results back to the application — similar to how SQL Server procedures just return result sets directly.

In SQL Server, a procedure can simply SELECT and the result set comes back to the caller. In Oracle, you must explicitly open a cursor and pass it as an OUT parameter.

Declaration: TYPE ref_cursor IS REF CURSOR — or use the built-in SYS_REFCURSOR type. The procedure parameter is defined as p_result OUT SYS_REFCURSOR.

Inside the procedure: OPEN p_result FOR SELECT Id, Name, Salary FROM Employee WHERE DepartmentId = p_dept_id. This opens the cursor with your query. The caller reads rows from it.

In .NET code: add an OracleParameter with OracleDbType.RefCursor and Direction.Output. After ExecuteNonQuery, cast the parameter value to OracleDataReader and read rows as normal. Or use OracleDataAdapter to fill a DataTable.

Strong vs weak REF CURSOR — strong is typed to a specific record structure, weak (SYS_REFCURSOR) can return any query. Weak is more flexible and commonly used.

In my project, every SELECT procedure returns a SYS_REFCURSOR. Our OracleHelper opens the cursor parameter, reads it into a DataTable or maps it to our DTO objects using reflection. The procedure SP_GET_OBSERVATIONS returns a REF CURSOR with filtered, paginated results that the DAL reads into List<ObservationDto>.`,

// Q11 - Oracle Joins (old syntax vs ANSI)
`Oracle supports both the old proprietary join syntax and the modern ANSI standard syntax.

Old Oracle syntax uses comma-separated tables in FROM with join conditions in WHERE: SELECT e.Name, d.DeptName FROM Employee e, Department d WHERE e.DeptId = d.Id. Outer joins used the (+) operator: WHERE e.DeptId = d.Id(+) for LEFT JOIN.

ANSI syntax (recommended) uses explicit JOIN keywords: SELECT e.Name, d.DeptName FROM Employee e INNER JOIN Department d ON e.DeptId = d.Id. LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN work the same as SQL Server.

Why ANSI is preferred — clearer intent (JOIN conditions separate from filter conditions), supports FULL OUTER JOIN (impossible with old (+) syntax), portable across databases, and less error-prone. With old syntax, forgetting a join condition in WHERE creates an accidental cartesian product.

The old (+) syntax has limitations — can't do FULL OUTER JOIN, can't use (+) on both sides, can't combine (+) with OR or IN. ANSI syntax has none of these limitations.

Oracle also supports CROSS JOIN and NATURAL JOIN (joins on columns with matching names automatically — avoid this, it's fragile).

In my project, we use ANSI join syntax exclusively in new code. Some legacy procedures still have the old comma-separated syntax with (+) for outer joins — these work fine but we'd convert them to ANSI if refactoring.`,

// Q12 - CONNECT BY (Hierarchical Queries)
`CONNECT BY is Oracle's proprietary syntax for querying hierarchical/tree data — like org charts, category trees, or bill of materials. It's Oracle's equivalent of recursive CTEs.

Basic syntax: SELECT Level, Name, ManagerId FROM Employee START WITH ManagerId IS NULL CONNECT BY PRIOR Id = ManagerId. START WITH defines the root rows (top of tree). CONNECT BY PRIOR defines the parent-child relationship. LEVEL pseudo-column shows the depth.

START WITH ManagerId IS NULL — start from employees with no manager (CEO). CONNECT BY PRIOR Id = ManagerId — for each row found, find children where their ManagerId equals the parent's Id. PRIOR refers to the parent row.

The LEVEL pseudo-column gives the depth: 1 for root, 2 for direct reports, 3 for their reports, etc. Use it for indentation: LPAD(' ', Level*2) || Name gives indented output.

SYS_CONNECT_BY_PATH builds the full path: SYS_CONNECT_BY_PATH(Name, '/') gives /CEO/VP/Manager/Developer. CONNECT_BY_ROOT gets the root node's value for any row.

Oracle also supports recursive CTEs (WITH RECURSIVE) from 11gR2+, which is the ANSI standard approach. But CONNECT BY is still widely used in Oracle-specific code because it's more concise for simple hierarchies.

In my project, our organization hierarchy uses CONNECT BY. When assigning audits, we query the reporting chain to determine who can approve — walking up from the auditor to find their manager, then the manager's manager, until we reach the approval authority level.`,

// Q13 - Oracle Analytic (Window) Functions
`Oracle was actually one of the first databases to implement analytic functions — what others call window functions. They compute values across a set of related rows without collapsing the result.

Syntax: function() OVER (PARTITION BY column ORDER BY column ROWS/RANGE window_clause). PARTITION BY groups rows for independent calculations. ORDER BY defines the sequence within each partition.

Ranking functions — ROW_NUMBER for unique sequential numbers, RANK with gaps for ties, DENSE_RANK without gaps. These work identically to SQL Server.

Aggregate analytics — SUM, AVG, COUNT, MIN, MAX used with OVER clause. SUM(Salary) OVER (PARTITION BY Department) gives the department total on every row without GROUP BY. SUM(Amount) OVER (ORDER BY Date) gives running total.

LAG and LEAD access previous/next row values without self-join. LAG(Salary, 1) OVER (ORDER BY HireDate) gets the previous employee's salary. Great for comparing current row with previous — month-over-month changes, gaps detection.

FIRST_VALUE and LAST_VALUE get boundary values. NTH_VALUE gets a specific position's value. NTILE divides rows into N equal buckets.

Windowing clauses: ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW is the default for running aggregates. ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING gives a 5-row moving average.

In my project, we use ROW_NUMBER for pagination, DENSE_RANK for finding top performers per department, LAG for comparing current month audit findings with previous month, and running SUM for cumulative compliance scores.`,

// Q14 - Oracle Indexes
`Oracle indexes work similarly to SQL Server but with some Oracle-specific types and behaviors.

B-Tree indexes are the default — standard balanced tree structure for equality and range queries. CREATE INDEX idx_emp_name ON Employee(Name). Same concept as SQL Server's non-clustered index.

Unlike SQL Server, Oracle doesn't have "clustered indexes" per se. Oracle has Index-Organized Tables (IOT) where the table data IS stored in the index structure — conceptually similar to a clustered index. Regular Oracle tables are heap-organized — rows stored in no particular order.

Bitmap indexes are Oracle-specific — optimized for columns with few distinct values (like Gender, Status, Boolean flags). They use bit arrays and are extremely efficient for complex WHERE conditions with AND/OR on multiple low-cardinality columns. But they're terrible for heavy DML — use only on read-heavy tables.

Function-based indexes index the RESULT of a function: CREATE INDEX idx_upper_name ON Employee(UPPER(Name)). Now WHERE UPPER(Name) = 'JOHN' uses the index instead of doing a full table scan with function evaluation.

Composite indexes, unique indexes, and covering indexes work the same conceptually as SQL Server. The leftmost prefix rule applies — the index is useful only when the query includes the leading columns.

In my project, we have B-Tree indexes on all foreign keys and frequently filtered columns. We use function-based indexes on UPPER(Name) for case-insensitive searches. Our status columns could benefit from bitmap indexes since they have few values and are heavily queried in reports.`,

// Q15 - Exception Handling in PL/SQL
`PL/SQL has a structured exception handling mechanism using the EXCEPTION block at the end of a BEGIN...END section.

Predefined exceptions include NO_DATA_FOUND (SELECT INTO returned no rows), TOO_MANY_ROWS (SELECT INTO returned multiple rows), DUP_VAL_ON_INDEX (unique constraint violation), ZERO_DIVIDE, VALUE_ERROR (type conversion failed), and INVALID_CURSOR.

The pattern: BEGIN — executable code — EXCEPTION WHEN NO_DATA_FOUND THEN — handle missing data — WHEN DUP_VAL_ON_INDEX THEN — handle duplicate — WHEN OTHERS THEN — catch everything else — END.

WHEN OTHERS catches any exception not handled by specific clauses. Inside it, SQLCODE gives the error number and SQLERRM gives the error message. Always log these before handling.

User-defined exceptions: DECLARE e_insufficient_balance EXCEPTION. Then RAISE e_insufficient_balance when your business condition fails. Catch it in the EXCEPTION block like predefined ones.

RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance') throws a custom error with a number between -20000 and -20999. This error propagates to the calling application where you catch it as an OracleException with the specified number and message.

Exception propagation — if a block doesn't handle an exception, it propagates to the enclosing block. If no block handles it, it reaches the caller (your .NET application) as an OracleException.

In my project, our stored procedures use EXCEPTION blocks to catch constraint violations (return friendly messages instead of Oracle error codes), handle NO_DATA_FOUND for missing records (return NULL or empty cursor), and use RAISE_APPLICATION_ERROR for business rule violations that the application displays to users.`,

// Q16 - Oracle Packages
`A Package is a PL/SQL construct that groups related procedures, functions, variables, cursors, and types into a single unit. It has two parts — specification (public interface) and body (implementation).

Package Specification declares what's publicly accessible — procedure/function signatures, public types, constants. Think of it as the interface in C#. Other code can only see what's in the spec.

Package Body contains the actual implementation of procedures and functions declared in the spec. It can also have private procedures/functions not in the spec — invisible to outside code. Like private methods in a class.

Benefits — encapsulation (hide implementation details), organization (group related functionality), performance (entire package loads into memory on first call), overloading (same procedure name with different parameters), and state (package-level variables persist for the session).

Package variables persist for the duration of a database session. You can initialize them on first access and reuse them across multiple procedure calls within the same connection. Like static variables.

In my project, we organize stored procedures into packages by module — PKG_AUDIT contains all audit-related procedures, PKG_USER handles user management, PKG_REPORT handles report generation. Each package spec defines the public API, and the body hides the implementation details.`,

// Q17 - Oracle Triggers
`Triggers in Oracle are PL/SQL blocks that execute automatically when a DML event (INSERT, UPDATE, DELETE) occurs on a table. They're used for audit logging, data validation, and derived column population.

Timing: BEFORE triggers run before the DML — can modify the data being inserted/updated. AFTER triggers run after — good for logging the final values. INSTEAD OF triggers replace the DML — used on views.

Level: ROW-level triggers (FOR EACH ROW) fire once per affected row — you can access :NEW and :OLD values. STATEMENT-level triggers fire once per statement regardless of how many rows are affected.

:NEW refers to the new row values (INSERT/UPDATE). :OLD refers to the original values (UPDATE/DELETE). In a BEFORE INSERT trigger, you can set :NEW.CreatedDate := SYSDATE to auto-populate a column.

Common uses — auto-populating audit columns (CreatedDate, ModifiedBy), generating IDs from sequences (BEFORE INSERT: :NEW.Id := seq.NEXTVAL), enforcing business rules that constraints can't express, and logging changes to audit tables.

Mutating table error — a row-level trigger cannot query or modify the same table that fired it. This is Oracle's protection against infinite loops. Workaround: use compound triggers or statement-level triggers with package variables.

In my project, we have BEFORE INSERT triggers that populate CreatedDate and CreatedBy, BEFORE UPDATE triggers for ModifiedDate and ModifiedBy, and AFTER triggers that log changes to our audit trail table.`,

// Q18 - Oracle Cursors
`Cursors in PL/SQL process query results row by row. There are implicit cursors (automatic for single-row queries) and explicit cursors (manual for multi-row processing).

Implicit cursors are created automatically for SELECT INTO, INSERT, UPDATE, DELETE. After execution, you check SQL%FOUND, SQL%NOTFOUND, SQL%ROWCOUNT. They're simple and handle single-row operations.

Explicit cursors are for multi-row processing. Declare: CURSOR c_emp IS SELECT Name, Salary FROM Employee. Open: OPEN c_emp. Fetch: FETCH c_emp INTO v_name, v_salary. Close: CLOSE c_emp. Loop until c_emp%NOTFOUND.

Cursor FOR LOOP is the simplest syntax — it handles OPEN, FETCH, and CLOSE automatically: FOR rec IN (SELECT Name, Salary FROM Employee WHERE Dept = 'IT') LOOP — process rec.Name, rec.Salary — END LOOP. Preferred for readability.

Parameterized cursors accept arguments: CURSOR c_emp(p_dept NUMBER) IS SELECT * FROM Employee WHERE DeptId = p_dept. Call with OPEN c_emp(10).

Cursor attributes: %FOUND (last fetch got a row), %NOTFOUND (last fetch got nothing), %ROWCOUNT (rows fetched so far), %ISOPEN (cursor is open).

Bulk operations are better than row-by-row cursors: BULK COLLECT fetches all rows into a collection at once, and FORALL executes DML for all collection elements in one call. Much faster for large datasets.

In my project, we use cursor FOR loops in procedures that process data row by row — like calculating scores for each audit observation. For bulk operations like mass status updates, we use BULK COLLECT with FORALL for performance.`,

// Q19 - BULK COLLECT and FORALL
`BULK COLLECT and FORALL are Oracle's bulk processing mechanisms — they dramatically reduce context switches between SQL and PL/SQL engines.

The problem with row-by-row: every SQL statement inside a PL/SQL loop causes a context switch between the PL/SQL engine and SQL engine. For 10,000 rows, that's 10,000 switches. This overhead is significant.

BULK COLLECT fetches multiple rows into a PL/SQL collection in one operation: SELECT Name, Salary BULK COLLECT INTO v_names, v_salaries FROM Employee WHERE Dept = 'IT'. One context switch regardless of row count.

FORALL executes DML for all collection elements in one bulk operation: FORALL i IN 1..v_ids.COUNT UPDATE Employee SET Status = 'Inactive' WHERE Id = v_ids(i). One context switch for all updates.

LIMIT clause prevents memory issues with large datasets: FETCH cursor BULK COLLECT INTO collection LIMIT 1000. Process 1000 rows at a time in a loop — balances memory usage with performance.

Performance improvement is dramatic — bulk operations can be 10-50x faster than row-by-row processing for large datasets. The bigger the dataset, the bigger the improvement.

In my project, when we need to update status for hundreds of audit observations at month-end, we use BULK COLLECT to fetch all eligible IDs into a collection, then FORALL to update them all in one batch operation. This runs in seconds instead of minutes.`,

// Q20 - Oracle Transactions
`Oracle handles transactions differently from SQL Server. Understanding this is important for developers switching between platforms.

Implicit transactions — in Oracle, every DML statement is automatically in a transaction. You don't need BEGIN TRANSACTION. The transaction starts with your first DML and stays open until you explicitly COMMIT or ROLLBACK. This is the opposite of SQL Server which auto-commits each statement by default.

COMMIT makes all changes permanent. ROLLBACK undoes all changes since the last COMMIT. SAVEPOINT creates a checkpoint within a transaction for partial rollback — ROLLBACK TO savepoint_name undoes only changes after that point.

Read consistency — Oracle provides statement-level read consistency by default. A long-running query sees data as it existed when the query started, even if other sessions modify it during execution. This uses UNDO segments to reconstruct the old version.

Locking — Oracle uses row-level locking for DML. Only the affected rows are locked, not the entire table. Readers never block writers and writers never block readers (thanks to multi-version concurrency control). Deadlocks are automatically detected and one session is rolled back.

SELECT FOR UPDATE explicitly locks rows you're about to modify: SELECT * FROM Employee WHERE Id = 5 FOR UPDATE. This prevents others from modifying those rows until you COMMIT/ROLLBACK. NOWAIT option throws an error immediately if rows are already locked.

In my project, our stored procedures COMMIT at the end of successful operations. If any error occurs in the EXCEPTION block, we ROLLBACK. For complex operations touching multiple tables, we use SAVEPOINT for partial recovery.`,

// Q21 - TO_DATE, TO_CHAR, TO_NUMBER
`These are Oracle's type conversion functions — essential for formatting and parsing dates, numbers, and strings.

TO_DATE converts a string to DATE: TO_DATE('15-03-2024', 'DD-MM-YYYY'). The format mask tells Oracle how to interpret the string. Common masks: DD-MON-YYYY ('15-MAR-2024'), YYYY-MM-DD ('2024-03-15'), DD/MM/YYYY HH24:MI:SS for full timestamp.

TO_CHAR converts DATE or NUMBER to formatted string: TO_CHAR(SYSDATE, 'DD-Mon-YYYY HH24:MI:SS') gives '15-Mar-2024 14:30:45'. For numbers: TO_CHAR(1234567.89, '99,99,999.99') gives '12,34,567.89'. Essential for display formatting.

TO_NUMBER converts string to number: TO_NUMBER('1,234.56', '9,999.99'). Needed when numeric data comes as formatted strings.

Common date format elements: YYYY (4-digit year), MM (month number), MON (abbreviated month), DD (day), HH24 (24-hour), MI (minutes), SS (seconds), DY (abbreviated day name), DAY (full day name).

Date arithmetic in Oracle is simple — dates support + and - with numbers representing days. SYSDATE + 7 is one week from now. SYSDATE - 1 is yesterday. MONTHS_BETWEEN calculates month difference. ADD_MONTHS adds/subtracts months.

In my project, we use TO_CHAR everywhere for displaying dates in DD-Mon-YYYY format. TO_DATE parses date strings from the frontend before INSERT/UPDATE. Our OracleHelper handles date parameter binding with proper OracleDbType.Date to avoid format issues.`,

// Q22 - Oracle Pagination
`Pagination in Oracle has evolved across versions — from complex ROWNUM subqueries to the clean OFFSET FETCH syntax.

Pre-12c approach using ROWNUM (three-level subquery):
SELECT * FROM (
  SELECT a.*, ROWNUM rn FROM (
    SELECT * FROM Employee ORDER BY Salary DESC
  ) a WHERE ROWNUM <= 20
) WHERE rn > 10.
Innermost query orders data. Middle assigns ROWNUM and limits total rows. Outer filters the starting row. Gets rows 11-20.

Oracle 12c+ OFFSET FETCH:
SELECT * FROM Employee ORDER BY Salary DESC OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY.
Much cleaner — same as SQL Server syntax. OFFSET skips rows, FETCH NEXT takes the page size.

ROW_NUMBER approach (works in both):
SELECT * FROM (SELECT e.*, ROW_NUMBER() OVER (ORDER BY Salary DESC) AS rn FROM Employee e) WHERE rn BETWEEN 11 AND 20.
More flexible — can add PARTITION BY for grouped pagination.

Performance tip — for deep pagination (page 10000), all approaches must scan and skip many rows. Keyset pagination (WHERE Id > last_seen_id ORDER BY Id FETCH NEXT 10) is faster for sequential access.

In my project, we use OFFSET FETCH since we're on Oracle 12c+. Our stored procedures accept page_number and page_size parameters, calculate the offset, and also return the total count for the UI to display pagination controls. The formula: OFFSET (p_page - 1) * p_page_size ROWS FETCH NEXT p_page_size ROWS ONLY.`,

// Q23 - Oracle Performance Tuning
`Performance tuning in Oracle involves identifying and fixing slow queries through systematic analysis.

EXPLAIN PLAN shows the execution plan without running the query: EXPLAIN PLAN FOR SELECT ... Then SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY). Look for TABLE ACCESS FULL on large tables (bad), INDEX RANGE SCAN (good), HASH JOIN vs NESTED LOOPS (depends on data size).

AWR (Automatic Workload Repository) reports capture performance data over time. The DBA uses these to identify top SQL by elapsed time, CPU, or I/O. Essential for finding the worst queries in the system.

Common optimizations — add indexes on WHERE and JOIN columns. Avoid functions on indexed columns (WHERE UPPER(Name) = 'X' won't use index on Name — create function-based index instead). Use bind variables to enable plan reuse. Gather statistics with DBMS_STATS for accurate optimizer decisions.

Hints override the optimizer's decisions: /*+ INDEX(e idx_emp_dept) */ forces index usage. /*+ FULL(e) */ forces full scan. /*+ PARALLEL(e, 4) */ enables parallel execution. Use sparingly — the optimizer is usually right.

Common problems — missing indexes causing full table scans, stale statistics causing wrong plans, Cartesian joins from missing WHERE conditions, NOT IN with NULL values, and SELECT * fetching unnecessary columns.

In my project, when users report slow screens, we identify the underlying query, check the execution plan, and typically find a missing index or a full table scan. Adding the right index usually resolves it. Our DBA also runs regular AWR reports to catch degradation before users notice.`,

// Q24 - Oracle Views and Materialized Views
`Regular Views and Materialized Views serve different purposes with different performance characteristics.

A regular View is a stored query — no data stored. Every time you SELECT from it, the underlying query executes fresh. Good for simplifying complex queries, restricting access to certain columns/rows, and providing abstraction over table structure. Performance is the same as running the underlying query directly.

A Materialized View (MV) actually stores the query results physically. The data is precomputed and cached. Querying a MV reads stored results — much faster for complex aggregations or joins on large tables. The trade-off is storage space and staleness.

Refresh options — ON COMMIT refreshes the MV whenever the underlying tables are committed to (always fresh, but adds write overhead). ON DEMAND refreshes only when explicitly requested (DBMS_MVIEW.REFRESH). Scheduled refresh at specific intervals using DBMS_JOB.

Query rewrite — Oracle can automatically redirect queries against base tables to use a materialized view if it produces the same result. This transparently speeds up queries without changing application code.

Common use cases for MVs — summary tables for dashboards (pre-aggregate millions of rows), remote data caching (replicate data from linked databases), and complex report queries that take too long to run on demand.

In my project, we could use materialized views for our dashboard summary statistics — total observations by department, average resolution times, monthly trends. Instead of calculating these from millions of rows on every dashboard load, an MV refreshed every 15 minutes would give near-instant response.`,

// Q25 - MERGE Statement (UPSERT)
`MERGE performs INSERT, UPDATE, or DELETE in a single statement based on whether matching rows exist. It's Oracle's UPSERT — insert if new, update if exists.

Syntax: MERGE INTO target USING source ON (join_condition) WHEN MATCHED THEN UPDATE SET ... WHEN NOT MATCHED THEN INSERT (...) VALUES (...).

Practical example — syncing data from a staging table:
MERGE INTO Employee e USING StagingEmployee s ON (e.EmployeeCode = s.EmployeeCode)
WHEN MATCHED THEN UPDATE SET e.Name = s.Name, e.Salary = s.Salary, e.ModifiedDate = SYSDATE
WHEN NOT MATCHED THEN INSERT (Id, EmployeeCode, Name, Salary, CreatedDate) VALUES (seq_emp.NEXTVAL, s.EmployeeCode, s.Name, s.Salary, SYSDATE).

Optional DELETE clause: WHEN MATCHED THEN UPDATE SET ... DELETE WHERE condition — removes rows from target that match a condition after update.

Benefits over separate INSERT/UPDATE — atomic operation (no race conditions between checking existence and inserting), better performance (single pass through data), cleaner code (one statement instead of IF EXISTS logic).

Use cases — data synchronization from external systems, loading from staging tables, upserting configuration data, processing batch uploads where records may be new or existing.

In my project, MERGE would be perfect for our bulk data import feature — when users upload audit assignments via Excel, some entries might already exist (update them) while others are new (insert them). Currently we check existence separately, but MERGE would be cleaner and faster.`,

// Q26 - Oracle Partitioning
`Partitioning divides a large table into smaller, manageable pieces called partitions. Each partition is stored separately but the table appears as one logical unit to queries.

Range partitioning splits by value ranges — most common for date-based data. PARTITION BY RANGE (audit_date) with partitions for each year or month. Queries filtering by date automatically scan only relevant partitions (partition pruning).

List partitioning splits by specific values. PARTITION BY LIST (region) with partitions for 'North', 'South', 'East', 'West'. Queries filtering by region scan only that partition.

Hash partitioning distributes data evenly across N partitions using a hash function. Good for spreading I/O load when there's no natural range or list criteria.

Composite partitioning combines methods — range-list or range-hash. PARTITION BY RANGE (year) SUBPARTITION BY LIST (region) creates partitions by year, each subdivided by region.

Benefits — massive performance improvement for queries that filter on the partition key (scans only relevant partitions, not the whole table). Easier maintenance — drop old partitions instead of deleting millions of rows. Independent backup of partitions. Parallel operations per partition.

In my project, our audit observation table has millions of records spanning years. Partitioning by audit_year would mean queries for current year audits scan only one partition instead of the entire table — potentially 10x faster for our most common queries.`,

// Q27 - Oracle Synonyms and Database Links
`Synonyms and Database Links provide access abstraction and cross-database connectivity.

A Synonym is an alias for a database object — table, view, procedure, sequence. Instead of referencing SCHEMA_OWNER.TABLE_NAME everywhere, create a synonym: CREATE SYNONYM Employee FOR HR_SCHEMA.TBL_EMPLOYEE. Now code just references Employee. If the underlying object moves, change the synonym definition — no code changes.

Public synonyms are visible to all users. Private synonyms are user-specific. Most applications use synonyms to hide schema ownership from application code.

A Database Link connects to a remote Oracle database. CREATE DATABASE LINK remote_db CONNECT TO user IDENTIFIED BY password USING 'connection_string'. Then query remote tables: SELECT * FROM Employee@remote_db. Useful for distributed queries across databases.

Practical uses for DB Links — accessing data from another system without ETL, distributed transactions across databases, replication setup, and cross-system reporting.

Performance consideration — queries across DB links are slower than local queries due to network overhead. For frequently accessed remote data, consider materialized views that cache it locally.

In my project, we use synonyms for all database objects so our application code doesn't reference schema names directly. If the DBA moves objects to a different schema or tablespace, only synonym definitions change — our stored procedures and application remain unchanged.`,

// Q28 - Oracle Collections (PL/SQL Tables, Nested Tables, VARRAYs)
`PL/SQL Collections are array-like structures for holding multiple values in memory — essential for bulk operations and passing multiple values.

Associative Arrays (INDEX BY tables) are the most flexible — key-value pairs indexed by integer or string. TYPE emp_table IS TABLE OF Employee%ROWTYPE INDEX BY PLS_INTEGER. Sparse (gaps allowed), unbounded, exist only in PL/SQL (not in database). Used for temporary processing.

Nested Tables are like dynamic arrays — can be stored in database columns. TYPE num_list IS TABLE OF NUMBER. Dense initially but can become sparse after deletions. Can be used as table column types and in SQL with TABLE() function.

VARRAYs (Variable-size Arrays) have a fixed maximum size. TYPE phone_list IS VARRAY(5) OF VARCHAR2(20). Dense, ordered, bounded. Good when you know the maximum number of elements. Can be stored in database columns.

Practical usage — BULK COLLECT fills collections from queries. FORALL uses collections for bulk DML. TABLE() function converts a collection to a result set usable in SQL: SELECT * FROM TABLE(my_collection). MEMBER OF checks if a value exists in a collection.

Passing arrays from .NET to Oracle: use UDT (User Defined Type) as a nested table, create an OracleParameter with OracleDbType.Array, and bind the .NET array to it. The procedure receives it as its collection type.

In my project, we use associative arrays in procedures for temporary processing during batch operations. When we need to pass multiple IDs from the application (like bulk status update for selected observations), we use a comma-separated string and parse it in PL/SQL — though a proper collection parameter would be cleaner.`,

// Q29 - Oracle DBMS Packages (DBMS_OUTPUT, DBMS_LOB, UTL_FILE)
`Oracle provides built-in DBMS packages for common operations. Knowing the key ones shows Oracle expertise in interviews.

DBMS_OUTPUT.PUT_LINE displays text output during PL/SQL execution — used for debugging. Like Console.WriteLine. Must enable with SET SERVEROUTPUT ON in SQL*Plus/Developer. Not for production use.

DBMS_LOB handles CLOB/BLOB operations — read, write, append, compare large objects. DBMS_LOB.GETLENGTH gets LOB size. DBMS_LOB.SUBSTR extracts portions. Essential when working with large text or binary data stored in LOB columns.

UTL_FILE reads and writes operating system files from PL/SQL. Used for generating export files, reading import files, writing logs to disk. Requires a directory object: CREATE DIRECTORY my_dir AS '/path/on/server'.

DBMS_SCHEDULER replaces DBMS_JOB for scheduling tasks. Create programs (what to run), schedules (when to run), and jobs (combining both). More flexible than the older DBMS_JOB.

DBMS_STATS gathers optimizer statistics: DBMS_STATS.GATHER_TABLE_STATS('SCHEMA', 'TABLE'). Critical for query performance — the optimizer uses statistics to choose the best execution plan. Stale statistics lead to bad plans.

DBMS_CRYPTO provides encryption/decryption functions for sensitive data. DBMS_RANDOM generates random numbers and strings.

In my project, we use DBMS_LOB for handling large observation descriptions, UTL_FILE for generating CSV export files from the database server, and the DBA schedules DBMS_STATS to refresh statistics nightly for optimal query performance.`,

// Q30 - Connecting Oracle from .NET (ODP.NET)
`ODP.NET (Oracle Data Provider for .NET) is the official Oracle driver for connecting .NET applications to Oracle Database. There are two versions — managed and unmanaged.

Oracle.ManagedDataAccess is the fully managed (pure .NET) driver — no Oracle Client installation needed. Just add the NuGet package and configure the connection string. This is the recommended approach for modern applications. Lighter deployment, easier configuration.

Connection string format: "Data Source=(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=server)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=dbname)));User Id=user;Password=pass". Or use TNS alias if tnsnames.ora is configured: "Data Source=MYDB;User Id=user;Password=pass".

Key classes: OracleConnection (connection management), OracleCommand (execute SQL/procedures), OracleParameter (input/output parameters), OracleDataReader (read results row by row), OracleDataAdapter (fill DataTable).

Calling a stored procedure: create OracleCommand with CommandType.StoredProcedure. Add OracleParameters with proper OracleDbType (Varchar2, Int32, RefCursor, etc.) and Direction (Input, Output). ExecuteNonQuery for procedures, ExecuteReader for queries returning data.

RefCursor handling — add an OracleParameter with OracleDbType.RefCursor and Direction.Output. After execution, use command.ExecuteReader() which reads from the OUT cursor parameter. Or use OracleDataAdapter.Fill(dataTable).

Connection pooling is automatic — configured through connection string: Min Pool Size=5, Max Pool Size=100, Connection Lifetime=120. Connections are reused from the pool. Always Dispose connections (using statement) to return them to the pool.

In my project, our OracleHelper class wraps ODP.NET operations. It manages connection creation from config, parameter building for stored procedure calls, executes queries returning DataTable or DataReader, and properly disposes all resources. All our DAL methods call this helper — ensuring consistent connection handling and error management across the application.`
];
