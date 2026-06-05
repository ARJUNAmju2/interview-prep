const SPEAK_DATA = [
// Q1 - What is C#? And What is the latest version of C#?
`C# is a modern, object-oriented, type-safe programming language developed by Microsoft as part of the .NET platform. It was created by Anders Hejlsberg in the year 2000.

What makes C# special is that it combines the power of C++ with the simplicity of Visual Basic. It's fully object-oriented — everything is inside classes. It's type-safe — the compiler catches type errors at compile time rather than letting them crash at runtime. It has automatic memory management through garbage collection, so we don't manually allocate and free memory.

C# is incredibly versatile. We use it for web applications with ASP.NET Core, desktop apps with WPF or WinForms, mobile apps with Xamarin or MAUI, game development with Unity, cloud services with Azure, and REST APIs. It's cross-platform now — you can run C# on Windows, Linux, and Mac.

The latest version is C# 12, released with .NET 8 in November 2023. Each version adds productivity features. Some important milestones — C# 3.0 brought LINQ and lambda expressions. C# 5.0 introduced async/await. C# 8.0 added nullable reference types. C# 9.0 brought records. C# 10 added global usings and file-scoped namespaces.

In my projects, we use ASP.NET Core with C# for building web applications and REST APIs. The language's strong typing, LINQ support, and async capabilities make it excellent for enterprise applications that need reliability and maintainability.`,

// Q2 - What is an object in C#?
`An Object is an instance of a class — it's the actual entity created in memory that has real values and can perform actions.

When I define a class, I'm just creating a blueprint. No memory is allocated yet. But when I use the 'new' keyword to create an object, that's when memory gets allocated on the heap and the object comes to life with actual data.

Every object has three characteristics. Identity — each object is unique even if two objects have the same values, they occupy different memory locations. State — the current values of all its properties at any point in time. Behavior — the methods it can perform, the actions it can take.

For example, if I have a Car class with properties Brand, Color, Speed and methods Start(), Accelerate() — when I write 'Car myCar = new Car()', I've created an object. myCar has its own Brand, its own Color, its own Speed. I can have another car object with different values — they're independent.

In C#, every object ultimately derives from System.Object, which provides four base methods that every object has — ToString() for string representation, Equals() for equality comparison, GetHashCode() for hash-based collections, and GetType() for runtime type information.

The relationship between class and object is like the relationship between a recipe and the actual dish you cook from it. You can make many dishes from one recipe, and each dish is independent.`,

// Q3 - What is Managed or Unmanaged Code?
`Managed Code is code that runs under the control of the Common Language Runtime — the CLR. The CLR provides automatic memory management through garbage collection, type safety enforcement, exception handling, and security. Languages like C#, VB.NET, and F# produce managed code.

When I write C# code, I don't worry about freeing memory. I create objects with 'new' and the garbage collector automatically reclaims memory when objects are no longer referenced. The CLR also enforces type safety — I can't accidentally write to memory I don't own or cast types incorrectly without the runtime catching it.

Unmanaged Code runs directly on the operating system without CLR supervision. The developer is responsible for everything — allocating memory, freeing memory, handling buffer overflows. Languages like C and C++ produce unmanaged code. It can be faster because there's no CLR overhead, but it's more dangerous — memory leaks and buffer overflows are common bugs.

In C#, we sometimes need to interact with unmanaged code — calling Windows API functions through P/Invoke, using COM components like Office automation, or working with native libraries. The 'unsafe' keyword in C# allows pointer operations for interop scenarios, but this should be rare in application code.

In my project, all our C# code is managed. We interact with Oracle through the managed Oracle.ManagedDataAccess driver. We don't directly use pointers or unmanaged memory. The CLR handles our memory lifecycle, which is one of the reasons .NET applications are generally more stable than C++ applications — fewer memory-related bugs.`,

// Q4 - What is Boxing and Unboxing in C#?
`Boxing is when a value type gets converted to a reference type — the value is copied from the Stack into a new object allocated on the Heap. Unboxing is the reverse — extracting the value from the heap object back to the stack.

Boxing happens implicitly. When I write 'object obj = 42', the integer 42 is boxed — a new object is created on the heap, the value 42 is copied into it, and 'obj' holds a reference to that heap object. I didn't write any cast — it happens automatically.

Unboxing requires an explicit cast. 'int number = (int)obj' extracts the value back. The runtime checks if the object actually contains an int — if it doesn't, you get InvalidCastException. You must unbox to the exact original type — you can't unbox an int directly to a double.

Why does this matter? Performance. Every boxing operation allocates memory on the heap and creates garbage for the GC to collect. In a tight loop that boxes millions of times, this becomes a serious performance problem.

The old ArrayList collection caused boxing for every value type added because it stored everything as 'object'. If you added a million integers, you created a million box objects. This is exactly why generic collections were introduced. List<int> stores integers directly without boxing — no heap allocation, no GC pressure, no casting needed.

Common boxing scenarios people miss — string concatenation with value types like "Value: " + number causes boxing. String.Format with value types. Assigning value types to interface variables since interfaces are reference types.

In my project, since we use List<T> and generic methods in our OracleHelper, we avoid most boxing. But understanding this helps explain why generics are preferred over non-generic collections.`,

// Q5 - What is the difference between a struct and a class in C#?
`The fundamental difference is that Struct is a value type stored on the Stack, while Class is a reference type stored on the Heap. This affects how they're copied, compared, and managed in memory.

When you assign a struct to another variable, it creates a complete COPY of all the data. They become fully independent. If I have a Point struct and assign point1 to point2, changing point2.X has zero effect on point1 — they're separate copies on the stack.

When you assign a class to another variable, it copies the REFERENCE only. Both variables now point to the same object on the heap. Changing the object through one variable affects what the other variable sees — because they're looking at the same object.

Structs cannot be null (unless Nullable<T>), cannot be inherited from, cannot have a parameterless constructor before C# 10, and cannot have a destructor. They're sealed implicitly. They CAN implement interfaces though.

Classes can be null, support full inheritance, can have destructors, and can be abstract, sealed, or neither. They're more flexible but have GC overhead.

When to use struct — for small, lightweight data types under 16 bytes that represent a single value. Things like Point, Color, DateTime, Guid. They're created and destroyed frequently and you want to avoid GC pressure.

When to use class — for complex objects with behavior, relationships, and longer lifetimes. Employee, Order, DbContext — anything that represents a business entity or has significant logic.

In .NET, all primitive types (int, double, bool, decimal) are structs. DateTime and Guid are structs. Almost everything else in application code is a class. In my project, all our DTOs, BLL classes, and service classes are classes.`,

// Q6 - What is the difference between Interface and Abstract Class in C#?
`This is one of the most frequently asked questions, so let me explain it thoroughly.

An Abstract Class can have both abstract methods without implementation AND concrete methods with full implementation. It can have fields to hold state, constructors for initialization, and any access modifier on its members. But you can only inherit from ONE abstract class. It represents an IS-A relationship — closely related classes sharing common code.

An Interface defines a contract — what a class must do, without saying how. Before C# 8, interfaces could only have method signatures with no implementation. All members are implicitly public. A class can implement MULTIPLE interfaces. It represents a CAN-DO relationship — capabilities that unrelated classes might share.

The key deciding factors are — if you have shared implementation code that multiple related classes need, use abstract class. If you need multiple inheritance behavior, use interface. If you want loose coupling for DI and testing, use interface. If you need constructors or fields, use abstract class.

In practice, modern C# development favors interfaces heavily because of Dependency Injection. In ASP.NET Core, everything is registered against interfaces — ILogger, IRepository, IEmailService. This enables mocking for tests and swapping implementations without changing consuming code.

You can use both together, and this is often the best design. Define interfaces for the contract (INotificationService), create an abstract base class that implements common logic (NotificationBase), then have concrete classes for specifics (EmailService, SmsService).

In my project, if I were refactoring, I'd define ILoginService, IAuditService interfaces for DI, potentially with an abstract BaseService for shared logic like validation and logging.`,

// Q7 - What is an enum in C#?
`An Enum is a value type that defines a set of named constants. Instead of using magic numbers throughout your code, you give meaningful names to values, making code more readable and type-safe.

Without enums, you might write 'if (order.Status == 2)' — what does 2 mean? Nobody knows without checking documentation. With enums, you write 'if (order.Status == OrderStatus.Shipped)' — instantly clear to anyone reading the code.

By default, enum values start at 0 and increment by 1. But you can assign custom values — this is useful for mapping to database codes or HTTP status codes. For example, HttpStatusCode.OK is 200, NotFound is 404, InternalServerError is 500.

The Flags attribute allows bitwise combinations. 'Permissions.Read | Permissions.Write' combines two flags. 'userPerms.HasFlag(Permissions.Write)' checks if a specific flag is set. For flags, values should be powers of 2 — 1, 2, 4, 8, 16.

Common operations include parsing strings to enums with Enum.Parse<T>() or Enum.TryParse<T>(), getting all values with Enum.GetValues<T>(), getting names with Enum.GetNames<T>(), and checking if a value is defined with Enum.IsDefined().

In my project, we use enums extensively for audit observation statuses (Draft, Submitted, Approved, Returned, Confirmed), user roles (Auditor, AuditManager, AuditHead), and report types. They make our code self-documenting and prevent invalid values from being assigned.

Enums are also great for switch statements — the compiler can warn you if you're not handling all possible values, preventing bugs from forgotten cases.`,

// Q8 - What is the difference between "continue" and "break" statements in C#?
`Break and Continue are both loop control statements, but they do opposite things.

Break EXITS the entire loop immediately. When the runtime hits break, it stops the loop completely and moves to the first statement after the loop. No more iterations happen. It's like saying "I'm done, stop everything."

Continue SKIPS the current iteration only and jumps to the next one. The loop continues running — it just doesn't execute the remaining code in this particular iteration. It's like saying "skip this one, move to the next."

A practical example with break — searching for a specific item in a list. Once you find it, there's no point checking the remaining items. You break out of the loop. This is an optimization — why check 1000 items when you found what you need at item 50?

A practical example with continue — processing a list of records but wanting to skip invalid ones. If the current record fails validation, use continue to skip to the next record without processing the invalid one. The loop continues with remaining records.

Break is also used in switch statements in C# — it's required at the end of each case to prevent fall-through. Without break, C# would give a compile error because implicit fall-through is not allowed (unlike C where it's a common source of bugs).

In nested loops, break only exits the INNERMOST loop. If you need to break out of multiple nested loops, you'd need a flag variable, a labeled goto (not recommended), or restructure your code into a method with an early return.

Both are simple concepts but interviewers ask them to verify you understand basic control flow. The key is — break stops the loop, continue skips to next iteration.`,

// Q9 - What is the difference between constant and readonly in C#?
`The difference comes down to compile-time versus runtime, and this has practical implications for your code.

Const is evaluated at COMPILE TIME. The value must be known when you write the code — you can only use literal values or expressions the compiler can evaluate. It's implicitly static — you access it through the class name. Only primitive types and strings are allowed because complex objects can't exist at compile time. The compiler actually replaces every reference to the const with its literal value in the compiled code.

Readonly is evaluated at RUNTIME. You can assign it at declaration or in the constructor. It can be instance-level or static. Any type is allowed — objects, DateTime.Now, values from configuration, results of method calls. The value is read from the field at runtime, not baked into the code.

The versioning problem with const is critical to understand. If Assembly A has 'public const int Version = 1' and Assembly B references it, the value 1 is copied into Assembly B's compiled code at compile time. If Assembly A changes to Version = 2 and rebuilds, Assembly B still has 1 until it's ALSO recompiled. With readonly, this doesn't happen because the value is always read at runtime from the actual field.

When to use const — only for values that are truly universal and will NEVER change across any version. Mathematical constants like Pi, fixed sizes, format strings that are truly permanent.

When to use readonly — for everything else. Configuration values, computed values, objects, anything that might change between versions. It's safer by default.

In my project, I might use const for things like maximum login attempts (5) or lockout duration (15 minutes). But for API endpoints, encryption keys, or timeout values, readonly or configuration is more appropriate because these might change between environments or versions.`,

// Q10 - What is the difference between ref and out keywords?
`Both ref and out pass parameters by reference instead of by value, meaning the method can modify the original variable. But they have different rules about initialization.\n\nRef requires the variable to be INITIALIZED before passing. The method receives the existing value and MAY modify it — but it's not required to. Think of ref as \"I'm giving you my existing value, you can read it and optionally change it.\" Use ref when the method needs to both READ the current value and potentially MODIFY it.\n\nOut does NOT require initialization before passing. The method MUST assign a value before it returns. Think of out as \"I'm giving you an empty container, you must fill it.\" Use out when the method needs to RETURN multiple values — the primary return through the return type, additional values through out parameters.\n\nThe most common use of out is the TryParse pattern: 'if (int.TryParse(input, out int result))'. The method returns a bool indicating success, and the parsed value comes through the out parameter. This pattern avoids exceptions for expected failure cases.\n\nC# 7 introduced inline out variable declarations — you can declare the out variable right in the method call instead of declaring it beforehand. And you can use discard with underscore if you don't need the out value: 'dict.TryGetValue(key, out _)'.\n\nThere's also the 'in' keyword (C# 7.2) which passes by reference but prevents modification — it's read-only. Use it for large structs where you want to avoid copying but don't want the method to change the value.\n\nIn practice, out is used frequently with TryParse and TryGetValue patterns. Ref is less common but useful for swap operations or modifying struct values. In my project, we use TryParse for validating user input from forms.`,

// Q11 - Can "this" be used within a static method?
`No, 'this' cannot be used inside a static method. The reason is fundamental to how static works.

'this' refers to the current INSTANCE of a class — the specific object that the method is being called on. But static methods don't belong to any instance — they belong to the class itself. You call them on the class name, not on an object. Since there's no instance involved, there's no 'this' to refer to.

Think of it this way — if I call Employee.GetTotalCount(), there's no specific employee object involved. It's a class-level operation. So what would 'this' point to? There's nothing. That's why the compiler prevents it.

Static methods can only access other static members — static fields, static properties, static methods. They cannot access instance members because instance members require a specific object, and static context has no specific object.

Instance methods, on the other hand, CAN access both instance members through 'this' and static members. Because when an instance method runs, there IS a specific object.

The one exception — extension methods use 'this' in the first parameter: 'public static int WordCount(this string str)'. But this is different syntax — it tells the compiler this is an extension method, not a reference to current instance.

In my project, our static utility classes like InputValidator have only static methods — they can't use 'this' because there's never an instance.`,

// Q12 - What are Properties in C#?
`Properties provide controlled access to class data. They look like fields from outside but internally have getter and setter logic that can include validation or computation.

The simplest form is auto-implemented: 'public string Name { get; set; }'. The compiler creates a hidden backing field automatically. This is what we use most often for simple data holders.

When we need validation, we use full properties with backing field. An Age property might check the value is between 0 and 150 in the setter. If invalid, throw ArgumentException. This is encapsulation — controlling data access.

Variations include — read-only with only getter like computed FullName. Different access levels like 'public decimal Balance { get; private set; }'. Init-only from C# 9 that can only be set during initialization.

Why properties over public fields? They support data binding in MVC/WPF. You can add validation later without breaking code. Breakpoints work on getters/setters. Interfaces can define properties but not fields. Serialization works properly.

In my project, all our DTO classes use auto-properties for serialization compatibility.`,

// Q13 - What is an extension method in C#?
`Extension Methods let you add new methods to existing types without modifying source code, inheriting, or recompiling. They appear as instance methods in IntelliSense.

Three requirements — static class, static method, first parameter has 'this' keyword with the type being extended.

For example, 'public static int WordCount(this string str)' in a static StringExtensions class. Now "Hello World".WordCount() works as if it's a native string method.

This is powerful because you can extend sealed types you don't own. String is sealed — can't inherit. But can add extension methods.

The entire LINQ library is extension methods on IEnumerable<T>. Where(), Select(), OrderBy() don't exist in List directly — they're extensions from System.Linq.

In ASP.NET Core, configuration uses extensions: 'builder.Services.AddControllers()' is an extension on IServiceCollection.

In my project, I'd create extensions for common utilities — date formatting, string validation, Oracle type conversions. Cleaner than static helper methods.`,

// Q14 - What is the difference between Dispose and Finalize in C#?
`Dispose is called by developer explicitly or via 'using' statement. You control WHEN. Releases both managed and unmanaged resources. Fast and predictable. Recommended approach.

Finalize (destructor ~ClassName) is called by GC automatically. You have zero control over timing. Should only release unmanaged resources. Slow — objects survive extra GC generation.

Why Finalize is slow — objects with finalizers go to finalization queue, survive one extra GC cycle, finalizer thread runs them, then they can be collected next cycle. They live longer consuming memory.

The pattern — implement IDisposable with Dispose() for cleanup. Optionally add finalizer as safety net. In Dispose(), call GC.SuppressFinalize(this) to skip finalizer since already cleaned up.

In practice, 99% of code only needs Dispose. Finalizers are for framework code wrapping native handles. Always use 'using' for IDisposable objects.

In my project, our OracleHelper closes connections in finally blocks. Using 'using' statements would be cleaner — it's a refactoring improvement I'd make.`,

// Q15 - What is the difference between String and StringBuilder in C#?
`String is IMMUTABLE. Every modification creates a NEW string object. 's += " World"' creates a new object, old one becomes garbage. For a few concatenations, fine. In a loop with thousands, creates thousands of objects — terrible performance.

StringBuilder is MUTABLE. Uses internal buffer modified in place. Append() adds to existing buffer without new objects. 10,000 concatenations — String takes ~500ms, StringBuilder takes ~1ms. 500x difference.

When to use String — simple assignments, string interpolation, 2-3 concatenations, method parameters. When readability matters.

When to use StringBuilder — loop concatenations, building large strings dynamically, HTML/SQL/CSV content, more than 5-10 modifications.

String is thread-safe because immutable. StringBuilder is NOT thread-safe.

In my project, for building dynamic SQL queries or HTML email templates with many parts, StringBuilder is right. For simple messages like $"Hello {name}", regular interpolation is fine.`,

// Q16 - What is the use of a delegate in C#?
`A Delegate is a type-safe function pointer. It holds a reference to a method, allowing methods to be passed as parameters, stored in variables, and invoked dynamically.

Primary uses — Callbacks for async completion notification. Events for publisher-subscriber pattern. LINQ where every method accepts delegates via lambdas. Strategy pattern for swapping algorithms at runtime.

Modern C# uses built-in delegates — Action (void return), Func (with return), Predicate (returns bool). Lambda expressions create delegates concisely: 'numbers.Where(n => n > 5)'.

In my project, delegates are everywhere through LINQ. Every .Where(), .Select(), .OrderBy() uses delegates internally. Understanding delegates is essential for LINQ, events, and async patterns.`,

// Q17 - What are sealed classes in C#?
`A Sealed class cannot be inherited. No class can derive from it. Use 'sealed' keyword.

Reasons to seal — Security: prevent weakening critical logic through inheritance. Performance: JIT optimizes sealed classes better (no virtual dispatch needed). Design: communicate the class isn't designed for extension.

You can seal individual methods too — 'sealed override void Speak()' allows override at this level but prevents further overriding in deeper derived classes.

Many .NET classes are sealed — String, StringBuilder, DateTime, Math. They're critical types where inheritance could cause bugs.

In my project, utility classes like InputValidator could be sealed since they're not designed for inheritance. It's a small best-practice improvement.`,

// Q18 - What are partial classes in C#?
`Partial classes split one class across multiple files. Compiler combines them. Use 'partial' keyword on each part.

Main reason — separate auto-generated code from custom code. EF generates models in one file, your custom methods in another partial file. Regeneration doesn't overwrite your code.

Also used in — Windows Forms (Designer.cs vs your code), Razor Pages (.cshtml + .cshtml.cs), splitting large classes for readability, reducing merge conflicts in team development.

Rules — all parts must use 'partial', same namespace and assembly, same access modifier. If any part is abstract/sealed, entire class is.

In my project, if we used EF Core Code First, we'd use partial classes for entity models — generated structure in one file, custom logic in another.`,

// Q19 - (gap in source numbering)
`This appears to be a numbering gap in the original source material.`,

// Q20 - What is IEnumerable<> in C#?
`IEnumerable<T> is the most fundamental collection interface. It defines a sequence that can be iterated with foreach and is the foundation of LINQ.

It has one method — GetEnumerator(). Any class implementing it works with foreach and all LINQ methods.

Why important — enables foreach on any collection. Foundation of LINQ (Where, Select, OrderBy all extend IEnumerable). Supports deferred execution — queries aren't executed until iterated or materialized.

IEnumerable vs IQueryable — IEnumerable processes in memory (loads all, then filters). IQueryable builds expression trees translated to SQL (filters at database). For EF Core, use IQueryable until ready to materialize.

Best practice — return IEnumerable<T> when callers only need iteration. Gives flexibility to change internal implementation. Avoid multiple enumeration — materialize with ToList() if you need to iterate multiple times.

In my project, OracleHelper returns List<T> which implements IEnumerable<T>, allowing LINQ operations on returned data.`,

// Q21
`IEnumerable and IQueryable both represent collections that can be iterated, but they work very differently behind the scenes. IEnumerable is in the System.Collections.Generic namespace and is best suited for in-memory collections. When you use IEnumerable, all the data is loaded into memory first, and then filtering or sorting happens on the client side using LINQ to Objects.

IQueryable, on the other hand, is in the System.Linq namespace and is designed for querying external data sources like databases. It builds an expression tree, and the filtering or sorting is translated into a query — like SQL — and executed on the server side. This means only the required data comes back from the database, which is much more efficient for large datasets.

For example, if I write .Where(x => x.IsActive) on an IQueryable, that condition becomes part of the SQL WHERE clause. But on IEnumerable, it would first fetch all rows and then filter in memory.

In my project, since we use ADO.NET with OracleHelper and not Entity Framework, we mostly work with List<T> which implements IEnumerable. But if we were using EF Core, IQueryable would be the preferred return type from repositories to allow deferred execution and server-side filtering.`,

// Q22
`When a class implements multiple interfaces that have methods with the same name, we get a conflict. C# handles this through explicit interface implementation. Instead of implementing the method normally, we prefix it with the interface name — like void IFirst.Show() and void ISecond.Show(). This way, both methods exist in the class but are called depending on which interface reference you use.

For example, if I cast the object to IFirst and call Show(), it executes the IFirst version. If I cast to ISecond, it runs that version. Without explicit implementation, the compiler wouldn't know which interface the method belongs to.

This is a clean way to resolve ambiguity. In practice, this scenario is not very common, but it's important to know because it demonstrates understanding of interfaces and polymorphism at a deeper level.`,

// Q23
`Arrays in C# are fixed-size, strongly-typed collections that store elements of the same data type in contiguous memory locations. They are reference types, meaning the array variable holds a reference to the actual data on the heap.

We can declare arrays in several ways — single-dimensional like int[] nums = new int[5], multi-dimensional like int[,] matrix = new int[3,3], or jagged arrays like int[][] which is an array of arrays where each inner array can have different lengths.

Arrays provide O(1) access by index which makes them very fast for random access. However, their fixed size is a limitation — once created, you cannot add or remove elements. For dynamic collections, we use List<T> which internally uses an array but handles resizing automatically.

Arrays also support methods from the Array class like Sort(), Reverse(), IndexOf(), and Copy(). In my projects, I use arrays when the size is known and fixed, but for most business logic I prefer List<T> for flexibility.`,

// Q24
`Array.CopyTo() and Array.Clone() both create copies of arrays, but they differ in how they work. Clone() creates a new array object — it's a shallow copy that returns an Object, so you need to cast it. CopyTo() copies elements into an existing destination array starting at a specified index.

The key difference is that Clone() creates a brand new array, while CopyTo() requires you to already have a target array allocated. Both perform shallow copies, meaning for reference type elements, only the references are copied, not the actual objects they point to.

So if you have an array of objects and you Clone() it, modifying an object in the cloned array will also affect the original because both arrays reference the same objects. For true deep copy, you'd need to manually copy each object.

In practice, Clone() is simpler when you just want a duplicate, and CopyTo() is useful when you want to merge or copy into a larger array at a specific position.`,

// Q25
`No, multiple catch blocks cannot all execute for a single exception. When an exception is thrown, the runtime checks each catch block from top to bottom and executes only the first one that matches the exception type. After that catch block runs, control moves to the finally block if one exists, or continues after the try-catch.

However, we can have multiple catch blocks defined to handle different types of exceptions. The important rule is to order them from most specific to most general. For example, put SqlException before Exception, because if you put the general Exception first, it will catch everything and the specific ones below will never execute — the compiler will actually give a warning about unreachable code.

In my project, we typically catch specific exceptions like OracleException for database errors, then have a general Exception catch as a fallback that logs the error and returns a generic error message to the user.`,

// Q26
`The Singleton Design Pattern ensures that a class has only one instance throughout the application lifetime and provides a global point of access to it. This is useful when exactly one object is needed to coordinate actions across the system — like a logging service, configuration manager, or database connection pool.

To implement it in C#, we make the constructor private so no one can create instances from outside. Then we provide a static property or method that returns the single instance. The simplest thread-safe way in C# is using a static readonly field with eager initialization, or using Lazy<T> for lazy initialization.

For thread safety, the best modern approach is: private static readonly Lazy<Singleton> instance = new Lazy<Singleton>(() => new Singleton()); and then a public static property Instance that returns instance.Value. This ensures the instance is created only when first accessed and is inherently thread-safe.

In my Audit project, we don't use manual singletons much because ASP.NET Core's DI container handles this with services.AddSingleton<T>() registration, which gives us the same single-instance behavior managed by the framework.`,

// Q27
`The difference between 'throw ex' and 'throw' in a catch block is about preserving the stack trace. When you write 'throw' without any variable, it rethrows the original exception with the complete original stack trace intact, so you can trace back to exactly where the error originated.

But when you write 'throw ex', it resets the stack trace to the current line. This means you lose information about where the exception actually happened, making debugging much harder.

So the best practice is to always use just 'throw' if you want to rethrow an exception after logging or partial handling. Use 'throw ex' only if you intentionally want to hide the original stack trace, which is rarely the case.

There's also 'throw new CustomException(message, ex)' where you pass the original exception as an inner exception. This is the best approach when you want to wrap the exception with additional context while still preserving the original error information. In my project, we use this pattern in the BLL layer — catch the OracleException, log it, then throw a custom business exception with the original as inner exception.`,

// Q28
`Indexers in C# allow objects to be indexed just like arrays. They enable a class or struct to be accessed using square bracket notation — like myObject[0] or myObject["key"]. It's essentially a special property that takes parameters.

You define an indexer using the 'this' keyword with get and set accessors. For example: public string this[int index] { get { return list[index]; } set { list[index] = value; } }. You can also have multiple indexers with different parameter types — one that takes int and another that takes string.

Indexers are useful when your class wraps a collection internally and you want to provide natural array-like access to it. The .NET framework uses them extensively — for example, DataRow uses an indexer so you can access columns by name like row["ColumnName"] or by index like row[0].

In my project, I don't create custom indexers often, but I use them all the time when accessing DataRow values from Oracle query results — like dr["AuditId"].ToString().`,

// Q29
`A multicast delegate in C# is a delegate that holds references to more than one method. When you invoke a multicast delegate, all the methods in its invocation list are called in sequence. In C#, all delegates are actually multicast delegates — they inherit from System.MulticastDelegate.

You can combine delegates using the += operator and remove them using -=. For example, if you have a delegate 'del' and you do del += Method1; del += Method2; then calling del() will execute both Method1 and Method2 in order.

One important thing — if the delegate has a return type, only the return value of the last method in the chain is captured. The return values of earlier methods are discarded. For this reason, multicast delegates are most commonly used with void return type — which is exactly what events do.

Events in C# are built on top of multicast delegates. When you raise an event, all subscribed handlers execute. In my project, though we don't use custom delegates much since we use ASP.NET Core's built-in event patterns and middleware pipeline, understanding this is fundamental to how events and callbacks work in .NET.`,

// Q30 - == vs Equals()
`The equality operator == and the Equals() method both check for equality, but they behave differently depending on the type. For value types, both compare the actual values and work the same way. But for reference types, this is where it gets interesting.

The == operator, by default for reference types, checks reference equality — meaning it checks whether both variables point to the same object in memory. The Equals() method, on the other hand, can be overridden to check value equality — whether two different objects have the same content.

The string type is a special case. Even though string is a reference type, Microsoft overloaded the == operator to compare values, not references. So "hello" == "hello" returns true even if they're different objects. This is why many developers get confused.

For custom classes, if you want == to compare values, you need to overload the operator. And if you want Equals() to compare values, you override the Equals() method and also GetHashCode(). In my project, we mostly compare primitive types and strings, so == works fine. But for comparing DTOs or entities, we override Equals() when needed.`,

// Q31 - Is vs As operators
`The 'is' and 'as' operators are both used for type checking and casting in C#, but they work differently. The 'is' operator checks whether an object is compatible with a given type and returns a boolean — true or false. It doesn't perform the actual cast.

The 'as' operator tries to cast an object to a specified type, and if the cast fails, it returns null instead of throwing an exception. This is safer than a direct cast which would throw an InvalidCastException on failure.

So the pattern is: use 'is' when you just want to check the type without casting, and use 'as' when you want to attempt a cast safely. In modern C# (7+), you can combine both with pattern matching: if(obj is string s) — this checks AND casts in one step, which is the preferred approach now.

In my project, I use 'is' with pattern matching when processing different types of responses from the API layer, like checking if a result is a specific error type before handling it.`,

// Q32 - Nullable Types
`Nullable types in C# allow value types to hold null values, which they normally cannot. By default, value types like int, bool, DateTime always have a value — they can't be null. But in real-world applications, especially when dealing with databases, a field might not have a value.

You declare a nullable type using the ? syntax — like int? or DateTime?. This is shorthand for Nullable<int>. A nullable type has two important properties: HasValue (returns true if it contains a value) and Value (returns the actual value, but throws if HasValue is false).

The null coalescing operator ?? is very useful with nullable types. For example, int result = nullableInt ?? 0 means "use the value if it exists, otherwise use 0." There's also ??= for null coalescing assignment.

In my Audit project, when reading from Oracle database, many columns can be NULL. So when mapping DataReader results to DTOs, I use nullable types like DateTime? for optional date fields, and then use ?? to provide defaults when displaying to the UI.`,

// Q33 - Method Overloading
`Method overloading means having multiple methods with the same name but different parameters in the same class. The compiler differentiates them based on the number of parameters, the type of parameters, or the order of parameter types. This is compile-time polymorphism.

You can overload by changing the number of parameters — like Calculate(int a) and Calculate(int a, int b). You can overload by changing parameter types — like Print(string s) and Print(int n). You can also overload by changing the order — like Display(string s, int n) and Display(int n, string s).

However, you cannot overload by just changing the return type. If two methods have the same name and same parameters but different return types, the compiler will give an error because it can't determine which one to call.

In my project, we use overloading in the DAL layer — for example, GetAuditDetails(int auditId) and GetAuditDetails(int auditId, DateTime fromDate, DateTime toDate) to provide different query options with the same logical method name.`,

// Q34 - Object Pooling
`Object Pooling is a design pattern where you maintain a pool of reusable objects instead of creating and destroying them repeatedly. The idea is that creating certain objects is expensive — like database connections, threads, or large buffers — so you create them once, use them, return them to the pool, and reuse them later.

The most common example in .NET is database connection pooling. ADO.NET automatically pools database connections. When you call connection.Open(), it doesn't always create a new connection — it might give you an existing idle connection from the pool. When you Close() or Dispose(), the connection goes back to the pool, not actually closed.

In ASP.NET Core, the HttpClient is another example where pooling matters. Creating a new HttpClient for every request causes socket exhaustion. That's why we use IHttpClientFactory which manages a pool of HttpMessageHandler instances.

In my project, Oracle connection pooling is handled by ODP.NET automatically. We just set pooling parameters in the connection string like Min Pool Size, Max Pool Size, and Connection Lifetime. This significantly improves performance under load.`,

// Q35 - Generics
`Generics in C# allow you to write classes, methods, and interfaces that work with any data type while maintaining type safety. Instead of writing separate code for int, string, or custom types, you write it once using a type parameter like <T>, and the actual type is specified when you use it.

The biggest advantage is type safety without performance cost. Before generics, we used ArrayList which stored everything as object — this caused boxing for value types and required casting when retrieving. With List<T>, there's no boxing and no casting, and if you try to add a wrong type, the compiler catches it.

You can also apply constraints on generic types using the 'where' keyword. Like where T : class (must be reference type), where T : new() (must have parameterless constructor), where T : IComparable (must implement interface). This gives you more control over what types can be used.

In my project, we use generics in the data access layer — for example, a generic method like List<T> ExecuteQuery<T>(string sql, Func<OracleDataReader, T> mapper) that can map any query result to any DTO type.`,

// Q36 - Access Modifiers
`Access modifiers in C# control the visibility and accessibility of classes, methods, and properties. They define who can access what. The main ones are: public (accessible from anywhere), private (only within the same class), protected (within the class and derived classes), internal (within the same assembly), and protected internal (within the same assembly OR derived classes in other assemblies).

C# 7.2 added 'private protected' which means accessible only within the same assembly AND only in derived classes — it's the most restrictive combination.

The default access modifier for class members is private, and for top-level classes it's internal. Best practice is to use the most restrictive access level possible — this is the principle of least privilege. Make everything private unless there's a reason to expose it.

In my project, we follow layered architecture. DAL classes are internal to their assembly, BLL methods that controllers call are public, helper methods within a class are private, and base class methods meant for derived classes are protected.`,

// Q37 - Virtual Method
`A virtual method in C# is a method declared in a base class using the 'virtual' keyword that can be overridden in derived classes using the 'override' keyword. This is the foundation of runtime polymorphism — the actual method that executes is determined at runtime based on the object's actual type, not the reference type.

When you mark a method as virtual, you're saying "derived classes may provide their own implementation." Unlike abstract methods, virtual methods have a default implementation in the base class, so derived classes can choose to override or use the base version.

If a derived class wants to call the base class version along with its own logic, it can use base.MethodName(). This is common in scenarios like adding validation in the derived class before calling the base implementation.

The difference from 'new' keyword hiding is important: with virtual/override, polymorphism works correctly. With 'new', if you have a base class reference pointing to a derived object, it calls the base method — breaking polymorphism. Always prefer virtual/override over method hiding.`,

// Q38 - Array vs ArrayList
`Array and ArrayList both store collections, but they have key differences. Array is strongly typed and fixed-size — you declare it with a specific type like int[] and a specific length. ArrayList is weakly typed (stores objects) and dynamically sized — it grows automatically as you add items.

Since ArrayList stores everything as object, value types get boxed when stored and unboxed when retrieved, which hurts performance. Arrays don't have this problem because they're typed. Also, ArrayList doesn't give compile-time type checking — you can accidentally add a string to an ArrayList that's supposed to hold integers.

In modern C#, we rarely use either for general purposes. List<T> replaced ArrayList completely — it gives you dynamic sizing like ArrayList but with type safety and no boxing like arrays. It's the best of both worlds.

In my project, we use List<T> almost exclusively for collections. Arrays are only used when interacting with APIs that require them or for fixed-size buffers. ArrayList is considered legacy and shouldn't be used in new code.`,

// Q39 - Value Types vs Reference Types
`Value types and reference types differ in how they're stored in memory and how they behave during assignment. Value types (int, struct, enum, bool, DateTime) are stored directly on the stack and hold the actual value. Reference types (class, string, array, delegate) are stored on the heap, and the variable holds a reference (pointer) to the actual object.

When you assign a value type to another variable, it creates a copy — changing one doesn't affect the other. But when you assign a reference type, both variables point to the same object — changing it through one variable affects the other.

This has implications for method parameters too. Passing a value type to a method passes a copy, so the original isn't modified. Passing a reference type passes the reference, so the method can modify the original object. Using 'ref' keyword forces pass-by-reference even for value types.

Null is another difference — reference types can be null, value types cannot (unless you use Nullable<T>). In my project, DTOs are classes (reference types) passed between layers, while simple values like IDs and counts are value types.`,

// Q40 - Serialization
`Serialization in C# is the process of converting an object into a format that can be stored or transmitted — like JSON, XML, or binary — and deserialization is the reverse, converting that format back into an object.

In modern .NET, JSON serialization using System.Text.Json or Newtonsoft.Json is the most common. For Web APIs, ASP.NET Core automatically serializes response objects to JSON and deserializes request bodies. You can control the process using attributes like [JsonPropertyName], [JsonIgnore], or custom converters.

Binary serialization using BinaryFormatter is now obsolete and considered a security risk. XML serialization using XmlSerializer is still used for SOAP services or configuration files.

In my project, we use Newtonsoft.Json for API communication between the MVC frontend and the private API. Our DTOs are serialized to JSON when sending requests and deserialized from JSON responses. We use [JsonProperty] attributes to map C# property names to the JSON field names expected by the API.`,

// Q41 - using statement
`The 'using' statement in C# ensures that IDisposable objects are properly disposed of when they go out of scope, even if an exception occurs. It's essentially syntactic sugar for a try-finally block where Dispose() is called in the finally.

The most common use is with resources that hold unmanaged handles — like database connections, file streams, or HTTP clients. You write using(var conn = new OracleConnection(connStr)) { ... } and the connection is automatically closed and disposed when the block ends, regardless of whether an error occurred.

In C# 8+, there's a simpler syntax called 'using declaration' — you just write using var conn = new OracleConnection(connStr); without curly braces, and it disposes at the end of the enclosing scope.

There's also the 'using directive' at the top of files for importing namespaces — that's completely different from the using statement. And in C# 10, 'global using' lets you declare namespace imports once for the entire project.

In my Audit project, we use the using statement extensively in the DAL layer when working with OracleConnection and OracleCommand objects to ensure database resources are always released properly.`,

// Q42 - Jagged Array
`A jagged array in C# is an array of arrays, where each inner array can have a different length. It's declared as int[][] unlike a multidimensional array which is int[,]. Think of it as a table where each row can have a different number of columns.

For example, you can have a jagged array where the first row has 3 elements, the second has 5, and the third has 2. This flexibility makes it more memory-efficient than a rectangular multidimensional array when rows genuinely have different sizes.

Performance-wise, jagged arrays are actually faster than multidimensional arrays in .NET because the CLR optimizes single-dimensional array access better. Each inner array is a separate object on the heap, so accessing elements involves one extra dereference, but the JIT compiler handles this efficiently.

In practice, for most business applications, we use List<List<T>> instead of jagged arrays because it offers dynamic sizing. But jagged arrays are useful in algorithms, matrix operations with irregular structures, or when you need raw performance with fixed-size irregular data.`,

// Q43 - Multithreading
`Multithreading in .NET means executing multiple threads concurrently within a single process, allowing your application to perform multiple operations simultaneously. This improves responsiveness and throughput, especially for I/O-bound and CPU-bound operations.

In modern .NET, the preferred approach is the Task Parallel Library (TPL) with async/await rather than manually creating threads. You use Task.Run() for CPU-bound work that should run on a background thread, and async/await for I/O-bound operations like database calls or HTTP requests — these don't even need extra threads because they use I/O completion ports.

The ThreadPool manages a pool of worker threads that are reused across tasks, avoiding the overhead of creating and destroying threads. ASP.NET Core itself is inherently multithreaded — each incoming request is handled on a thread pool thread.

Key concerns with multithreading are race conditions, deadlocks, and thread safety. We use locks, ConcurrentDictionary, or Interlocked class to protect shared state. In my project, the Web API handles concurrent requests naturally through ASP.NET Core's threading model, and we use async/await for all database calls to avoid blocking threads.`,

// Q44 - Anonymous Types
`Anonymous types in C# allow you to create objects without explicitly defining a class. The compiler generates the class behind the scenes with read-only properties based on what you assign. You create them using new { Property1 = value1, Property2 = value2 }.

They're most commonly used with LINQ queries when you want to project only specific fields from a larger object. For example, var result = list.Select(x => new { x.Name, x.Age }) creates a collection of anonymous type objects with just Name and Age properties.

Anonymous types are immutable — all properties are read-only. They have proper Equals() and GetHashCode() implementations, and ToString() returns a readable format. However, they're limited to the scope where they're created because you can't declare a method parameter or return type as an anonymous type (since there's no type name to reference).

In C# 7+, tuples (ValueTuple) have largely replaced anonymous types for quick groupings since tuples can be returned from methods. But anonymous types are still heavily used in LINQ projections and in MVC when passing ad-hoc data to views.`,

// Q45 - Hashtable
`Hashtable in C# is a collection that stores key-value pairs using a hash function for fast lookup. It's in the System.Collections namespace and is the non-generic predecessor to Dictionary<TKey, TValue>. Keys are hashed to determine their storage location, giving O(1) average time for add, remove, and lookup operations.

The main disadvantage of Hashtable is that it's not type-safe — both keys and values are stored as objects, causing boxing for value types and requiring casting on retrieval. It also doesn't throw an error at compile time if you accidentally add a wrong type.

Dictionary<TKey, TValue> from System.Collections.Generic is the modern replacement. It provides the same hash-based O(1) performance but with full type safety, no boxing overhead, and better IntelliSense support. ConcurrentDictionary<TKey, TValue> adds thread safety for multithreaded scenarios.

In my project, we always use Dictionary<string, object> or Dictionary<int, string> instead of Hashtable. The only time you might encounter Hashtable is in legacy .NET Framework code. For new development, there's no reason to use Hashtable over Dictionary.`,

// Q46 - Anonymous Types (duplicate - same content as Q44)
`Anonymous types let you create lightweight objects on the fly without pre-defining a class. The compiler generates an internal sealed class with read-only properties. You declare them with new { } syntax and the property names and types are inferred from the initialization expressions.

They shine in LINQ queries — for example, when querying a database and you only need 3 out of 20 columns, you project into an anonymous type: var data = query.Select(x => new { x.Id, x.Name, x.Date }). This avoids creating a specific DTO class for every small projection.

Limitations include: they can't cross method boundaries (can't be a return type), properties are read-only, and they rely on implicit typing with var. For scenarios where you need to pass data between methods, use tuples, records, or named classes instead.

In my project, I use anonymous types primarily in LINQ projections within a single method scope, like when aggregating audit data before binding to a view model.`,

// Q47 - File Handling
`File handling in C# involves reading from and writing to files using classes in the System.IO namespace. The main classes are File (static methods for quick operations), FileStream (low-level byte stream), StreamReader/StreamWriter (text-based reading/writing), and BinaryReader/BinaryWriter (binary data).

For simple operations, File.ReadAllText(), File.WriteAllText(), File.ReadAllLines() are convenient one-liners. For large files, use StreamReader with a using statement to read line by line without loading the entire file into memory.

Async file operations are available with ReadAllTextAsync(), WriteAllTextAsync(), and StreamReader.ReadLineAsync() — these prevent blocking the thread during I/O which is important in web applications.

Path class helps with cross-platform path manipulation — Path.Combine(), Path.GetExtension(), Path.GetFileName(). Directory class handles folder operations. In my Audit project, we handle file uploads for audit evidence — saving uploaded documents to the server using FileStream, and generating report files using StreamWriter.`,

// Q48 - File Handling (duplicate)
`File I/O in C# is managed through System.IO namespace. The key principle is always using the 'using' statement with streams to ensure proper resource cleanup. FileStream gives you low-level control over file access with options for FileMode (Create, Open, Append), FileAccess (Read, Write, ReadWrite), and FileShare (for concurrent access).

For text files, StreamReader and StreamWriter handle encoding automatically. For configuration or structured data, you'd typically serialize to JSON or XML rather than manual file parsing. For binary files like images or PDFs, you work with byte arrays and FileStream directly.

Error handling is important — you should check File.Exists() before reading, handle IOException for locked files, and UnauthorizedAccessException for permission issues. In web applications, file paths should never come from user input without sanitization to prevent path traversal attacks.

In my project, we store uploaded audit documents on the server file system and keep the file path in the Oracle database. We validate file extensions and size limits before saving, and use unique filenames to prevent overwrites.`,

// Q49 - async deadlock / forget await
`If you forget to await an async method, the method fires and you don't wait for its completion — it becomes fire-and-forget. The calling code continues immediately, and if the async method throws an exception, it gets swallowed silently because nobody is observing the returned Task. The compiler gives a warning CS4014 for this.

Async deadlock is a more serious issue. It happens when you call .Result or .Wait() on an async method from a synchronization context that has a single thread — like the old ASP.NET (not Core) or a UI thread. The async method tries to resume on the captured context, but that thread is blocked waiting for the result. Both are waiting for each other — deadlock.

The solution is simple: use async all the way. Never mix .Result or .Wait() with async code. If you absolutely must call async from sync code (like in a constructor), use Task.Run(() => AsyncMethod()).Result which runs on a thread pool thread without capturing the context.

ASP.NET Core doesn't have a SynchronizationContext, so deadlocks are less common there. But it's still bad practice to block on async code because it wastes a thread. In my project, we use async/await consistently from controller through BLL to DAL.`,

// Q50 - Task vs Thread vs ValueTask
`Thread is the lowest level — it represents an actual OS thread. Creating threads is expensive (about 1MB stack space each), and manually managing them is complex. We rarely use Thread directly in modern .NET.

Task is a higher-level abstraction representing an asynchronous operation. It doesn't necessarily create a new thread — for I/O operations, tasks use I/O completion ports with zero threads. For CPU-bound work, Task.Run() queues work to the ThreadPool which manages a pool of reusable threads efficiently. Task is the standard return type for async methods.

ValueTask is a struct-based alternative to Task, introduced for performance-critical scenarios where the async method often completes synchronously. Since Task is a class (heap allocation), returning a new Task every time has GC overhead. ValueTask avoids this allocation when the result is already available. Use it in hot paths where caching or synchronous completion is common.

The rule of thumb: use Task for most async methods, consider ValueTask only in library code or high-performance scenarios where profiling shows Task allocation is a bottleneck. In my project, we use Task<T> for all async operations since our methods always involve actual async I/O to Oracle.`,

// Q51 - CancellationToken
`CancellationToken is a mechanism in .NET for cooperative cancellation of async operations. You create a CancellationTokenSource, pass its Token to async methods, and when you want to cancel, you call source.Cancel(). The async method periodically checks the token and stops gracefully.

In ASP.NET Core, the framework automatically provides a CancellationToken that gets cancelled when the client disconnects. You can add it as a parameter in controller action methods — if a user navigates away mid-request, the token signals cancellation so you can stop processing and free resources.

To use it in your code, pass the token to async methods that support it — like await dbCommand.ExecuteReaderAsync(cancellationToken), or await httpClient.GetAsync(url, cancellationToken). You can also check token.IsCancellationRequested or call token.ThrowIfCancellationRequested() for manual checks in loops.

For timeouts, you can create a CancellationTokenSource with a timeout: new CancellationTokenSource(TimeSpan.FromSeconds(30)). This auto-cancels after the specified duration. In my project, we pass CancellationToken through to Oracle command execution so long-running queries can be cancelled if the user disconnects.`,

// Q52 - Deferred vs Immediate Execution in LINQ
`Deferred execution means the LINQ query is not executed when it's defined — it's executed only when you actually iterate over the results. Methods like Where(), Select(), OrderBy() use deferred execution. They build up an expression tree or a chain of iterators, but no data is fetched until enumeration.

Immediate execution means the query runs right away and materializes the results. Methods like ToList(), ToArray(), Count(), First(), Single() trigger immediate execution. They force the entire query to evaluate and return concrete results.

This matters a lot for performance. With deferred execution against a database (IQueryable), you can chain multiple Where() and Select() calls, and they all get translated into a single optimized SQL query. If you called ToList() too early, subsequent filtering would happen in memory on all the data.

The gotcha is multiple enumeration — if you iterate a deferred query twice, it executes twice. If it's a database query, that means two database calls. The fix is to materialize with ToList() once and reuse the list. In my project, since we use ADO.NET directly rather than EF, our queries are already immediate — we execute SQL and get back List<T>.`,

// Q53 - SelectMany vs Select
`Select projects each element into a new form — one input gives one output. SelectMany projects each element into a collection and then flattens all those collections into a single sequence. It's the difference between getting a list of lists versus a single flat list.

For example, if you have a list of departments and each department has a list of employees, Select(d => d.Employees) gives you IEnumerable<List<Employee>> — a collection of collections. SelectMany(d => d.Employees) gives you IEnumerable<Employee> — all employees flattened into one list.

In SQL terms, Select is like a simple column projection, while SelectMany is like a JOIN that expands rows. SelectMany is equivalent to a nested foreach loop — iterate outer collection, for each item iterate its inner collection, yield each inner item.

In my project, if I have audit reports grouped by region and I want all findings across all regions in a flat list, I'd use SelectMany: var allFindings = regions.SelectMany(r => r.AuditFindings). This is much cleaner than manually iterating and building a combined list.`,

// Q54 - GroupBy with Aggregate
`GroupBy in LINQ groups elements by a key and returns IEnumerable<IGrouping<TKey, TElement>>. Each group has a Key property and contains all elements that share that key. You typically combine it with aggregate functions like Count(), Sum(), Average(), Min(), Max().

For example: var summary = orders.GroupBy(o => o.Category).Select(g => new { Category = g.Key, Total = g.Sum(o => o.Amount), Count = g.Count() }). This groups orders by category and calculates totals and counts per group.

You can group by multiple fields using anonymous types: GroupBy(o => new { o.Year, o.Category }). For custom aggregation, use Aggregate() method which lets you define your own accumulator function.

In my project, we do grouping in the SQL query itself for performance — GROUP BY in Oracle with SUM, COUNT. But for in-memory data manipulation, like summarizing audit findings by severity or by department in the BLL layer before sending to the view, LINQ GroupBy is very convenient and readable.`,

// Q55 - .NET Framework vs .NET Core
`.NET Framework is the original Windows-only framework released in 2002. .NET Core (now just .NET 5+) is the modern, cross-platform, open-source rewrite. The key differences are significant.

.NET Core/.NET 5+ is cross-platform — runs on Windows, Linux, and macOS. .NET Framework is Windows-only. Core has much better performance — Kestrel web server is significantly faster than IIS alone. Core supports side-by-side deployment — multiple versions can coexist on the same machine. Framework requires machine-wide installation.

Core uses a modular architecture with NuGet packages — you include only what you need. Framework is monolithic. Core supports containerization with Docker natively. Core also gets all new features — C# improvements, new APIs, performance enhancements are only added to .NET 5+.

.NET Framework is in maintenance mode — it still gets security patches but no new features. Microsoft recommends .NET 6/7/8 for all new development. In my project, the newer services like AuditSolution use ASP.NET Core, while legacy applications like the Helpdesk system still run on .NET Framework.`,

// Q56 - Authentication vs Authorization
`Authentication is verifying WHO you are — confirming your identity. Authorization is verifying WHAT you can do — checking your permissions after identity is confirmed. Authentication always comes first.

In ASP.NET Core, authentication is handled by middleware that validates credentials (username/password, JWT token, cookies) and creates a ClaimsPrincipal representing the user. Authorization middleware then checks if that authenticated user has the required roles or claims to access a resource.

Common authentication methods: Cookie-based (for MVC apps), JWT Bearer tokens (for APIs), OAuth/OpenID Connect (for third-party login). Authorization can be role-based ([Authorize(Roles = "Admin")]), policy-based (custom requirements), or resource-based (checking ownership).

In my Audit project, we use JWT authentication — the user logs in with credentials, the API validates against the database and returns a JWT token. For subsequent requests, the token is sent in the Authorization header. Authorization is role-based — different menu items and actions are visible based on user roles like Auditor, Manager, Admin. The [Authorize] attribute on controllers and actions enforces this.`
];
