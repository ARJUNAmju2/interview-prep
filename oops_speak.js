const SPEAK_DATA = [
// Q1 - What is Object-Oriented Programming?
`Sure, let me explain what Object-Oriented Programming is.

OOP is a programming paradigm where we organize our code around objects rather than just functions and procedures. An object is basically a combination of data and behavior — it has properties that hold data, and methods that define what it can do.

The key idea is that we model real-world entities as objects in our code. For example, if I'm building an application that deals with cars, I would create a Car class with properties like Color and Speed, and methods like Start() and Stop(). Then I can create multiple car objects from that class, each with their own values.

OOP focuses on three main things — what objects are needed in the system, how those objects interact with each other, and hiding unnecessary complexity while exposing only what's needed. This makes our code more organized, reusable, and easier to maintain compared to procedural programming where everything is just functions operating on data.

In C#, everything revolves around OOP — every piece of code we write is inside a class, and we create objects to use that code.`,

// Q2 - What are the 4 pillars of OOPs?
`The four pillars of OOP are Encapsulation, Inheritance, Polymorphism, and Abstraction. Let me explain each one briefly.

Encapsulation means wrapping data and the methods that work on that data together into a single unit, which is the class. The key idea is hiding internal details from outside. For example, I make my fields private and expose them through public properties with validation in the setter — so outside code can't set invalid values directly.

Inheritance allows us to create a new class from an existing class. The child class inherits all the properties and methods of the parent. This promotes code reusability. For example, if I have an Animal class with common properties like Name and methods like Eat(), I can create Dog and Cat classes that inherit from Animal without rewriting that common code.

Polymorphism means "many forms" — the same method can behave differently based on the object. There are two types — compile-time polymorphism through method overloading where same method name has different parameters, and runtime polymorphism through method overriding where a child class provides its own implementation of a parent's virtual method.

Abstraction means hiding complex implementation details and showing only the essential features. We achieve this through abstract classes and interfaces. For example, when you drive a car, you just use the steering and pedals — you don't need to know how the engine works internally. Similarly, in code, we define what an object should do through an interface, without specifying how.`,

// Q3 - Procedural vs OOP?
`The main difference between Procedural Programming and OOP is how we organize our code.

In Procedural Programming, we organize code around functions or procedures. Data and functions are separate — functions operate on data that's passed to them. It follows a top-down approach where we break the problem into smaller functions. There's no access control on data, so any function can modify any data. Languages like C and Pascal follow this approach. The problem is that for large applications, it becomes very hard to maintain because changing one function might break others that depend on the same data.

In Object-Oriented Programming, we organize code around objects that bundle data and behavior together. Each object controls access to its own data through encapsulation. It follows a bottom-up approach where we first identify the objects needed and then build the system around them. Access modifiers protect data from unauthorized modification. Languages like C#, Java, and Python follow this approach. It's much easier to maintain large applications because changes to one object don't affect others if the interface remains the same.

The key advantages of OOP over procedural are — better data security through encapsulation, code reusability through inheritance, easier maintenance, and better mapping to real-world problems. In my projects, we always use OOP because our applications are complex with multiple modules that need to be maintained independently.`,

// Q4 - What is a Class and Object?
`A Class is like a blueprint or template — it defines the structure and behavior that objects of that type will have. It specifies what properties the object will hold and what methods it can perform. A class exists at design time — it's just a definition in code. No memory is allocated just by defining a class.

An Object is an actual instance created from that class. It's a real entity in memory with actual values. When we use the 'new' keyword, we create an object — that's when memory gets allocated on the heap.

Let me give you an analogy — think of a class as an architectural blueprint for a house. The blueprint defines the number of rooms, doors, windows. But you can't live in a blueprint. When you actually build a house from that blueprint, that's the object — it has real walls, real doors, and you can live in it. You can build multiple houses from the same blueprint, and each house is independent — painting one house red doesn't change the color of another house.

In C#, for example, I might have an Employee class with properties like Id, Name, and Salary, and a method called DisplayInfo(). From this one class, I can create multiple employee objects — emp1 and emp2 — each with their own values. Modifying emp1's name doesn't affect emp2.`,

// Q5 - Difference between Class and Object?
`The difference between Class and Object comes down to blueprint versus reality.

A Class is the blueprint or template — it's a logical concept that exists at design time. It defines what properties and methods will exist, but no memory is allocated for a class definition. You define a class once using the 'class' keyword. It contains declarations — the structure of data and the signatures of methods.

An Object is the instance — it's a physical entity that exists at runtime in memory. Memory is allocated on the heap when you use the 'new' keyword. You can create multiple objects from the same class, and each object is independent with its own copy of data.

Think of it like a cookie cutter and cookies. The cookie cutter is the class — there's only one, it defines the shape. The cookies are objects — you can make many from the same cutter, each can have different decorations. Or think of a car design blueprint versus the actual manufactured cars.

In terms of code — 'class Employee { }' is the class definition. 'new Employee()' creates an object. You can have hundreds of Employee objects, but the Employee class is defined only once.`,

// Q6 - What is a Constructor?
`A Constructor is a special method that gets called automatically when you create an object using the 'new' keyword. Its primary purpose is to initialize the object — setting up default values or required data when the object is born.

There are specific rules for constructors in C#. First, the constructor must have the same name as the class. Second, it has no return type — not even void. Third, it's called automatically with 'new' — you don't call it manually like a regular method. Fourth, constructors can be overloaded, meaning you can have multiple constructors with different parameters. And fifth, if you don't define any constructor, the compiler provides a default parameterless constructor automatically.

The purpose of constructors includes initializing objects with default or specific values, allocating any resources the object needs, and enforcing that required data is provided at the time of creation. In ASP.NET Core, constructors are heavily used for Dependency Injection — the framework automatically provides required services through the constructor parameters.

For example, if I have an Employee class, I might have a constructor that takes name and salary as parameters, so you can't create an Employee without providing these essential values. This ensures the object is always in a valid state from the moment it's created.`,

// Q7 - Types of Constructors?
`There are five types of constructors in C#. Let me explain each one.

First is the Default Constructor — it takes no parameters and initializes properties to their default values. If you don't write any constructor in your class, the compiler automatically provides one. It simply creates the object with default values like 0 for integers, null for strings.

Second is the Parameterized Constructor — it takes parameters to initialize the object with specific values. This is what you use most often. For example, a constructor that takes id and name so you can create an Employee with those values right away.

Third is the Copy Constructor — it creates a new object by copying values from an existing object. C# doesn't have a built-in copy constructor like C++, so you write it yourself by accepting an object of the same type as a parameter and copying its properties.

Fourth is the Static Constructor — it initializes static members of the class. It's called only once, automatically, the first time the class is used. It has no access modifier, takes no parameters, and you can't call it directly. It's useful for setting up static configuration or resources that all instances share.

Fifth is the Private Constructor — it prevents creating objects from outside the class. This is the foundation of the Singleton pattern where you want only one instance to exist. It's also used in classes that have only static members, like utility classes.

In my projects, we use parameterized constructors most often, especially for Dependency Injection in ASP.NET Core controllers. And we use the private constructor pattern in our BLL classes for Singleton instances.`,

// Q8 - Constructor Overloading?
`Constructor Overloading means having multiple constructors in the same class, each with a different parameter list. This gives flexibility — you can create objects in different ways depending on how much information you have at the time of creation.

The rules are the same as method overloading — same name, different number or type of parameters. The compiler determines which constructor to call based on the arguments you pass.

For example, imagine a Product class. You might have a default constructor that sets everything to default values. Then a constructor that takes just the name. Another that takes name and price. And a full constructor that takes id, name, price, and category. This way, whoever creates a Product object can provide as much or as little information as they have.

This is really useful in real applications. Sometimes you need to create an object with full details from a database record. Other times you just need a quick object with minimal information for display purposes. Constructor overloading lets you handle both cases cleanly without forcing callers to provide all information every time.

In practice, with C# modern features, you can also achieve similar flexibility using optional parameters with default values, but constructor overloading gives you more control over initialization logic for each variant.`,

// Q9 - Constructor Chaining?
`Constructor Chaining is when one constructor calls another constructor in the same class using 'this' keyword, or calls a parent class constructor using 'base' keyword. This avoids code duplication when multiple constructors share common initialization logic.

With 'this' keyword — you chain within the same class. For example, you have a 3-parameter constructor that does all the heavy initialization work. Your 2-parameter constructor can call the 3-parameter one using 'this' and just pass a default value for the missing parameter. Your parameterless constructor can call the 2-parameter one with default values. This way, the actual initialization logic exists in only one place.

With 'base' keyword — you chain to the parent class constructor. When you have inheritance, the child class constructor often needs to pass values up to the parent constructor. For example, if Employee inherits from Person, and Person's constructor takes a name parameter, then Employee's constructor uses 'base(name)' to pass the name up to Person before setting its own properties like Salary.

The execution order is important to understand — the chained constructor runs FIRST, then the current constructor's body runs. So in inheritance, the parent constructor always executes before the child constructor.

This pattern is very common in real applications. It reduces code duplication and ensures there's a single point of initialization logic, making the code easier to maintain.`,

// Q10 - Destructor/Finalizer?
`A Destructor, also called a Finalizer in C#, is a method that gets called by the Garbage Collector just before an object is destroyed. Its purpose is to release unmanaged resources — things like file handles, database connections, or COM objects that the garbage collector can't clean up on its own.

The syntax uses a tilde followed by the class name — like ~MyClass(). It has no access modifier, no parameters, no return type, and you can only have one per class. The important thing is — you cannot call a destructor directly. The Garbage Collector decides when to call it, and you have no control over the timing.

However, in modern C#, destructors are rarely used directly. The recommended approach is the IDisposable pattern with a Dispose method. Here's why — with a destructor, you don't know WHEN it will run because the GC runs non-deterministically. Objects with finalizers also have extra overhead because they go to a special finalization queue and survive an extra GC generation before being collected.

The proper approach is to implement IDisposable with a Dispose method that releases resources immediately when you're done with them. You use the 'using' statement to ensure Dispose is called automatically. The destructor then acts only as a safety net — in case someone forgets to call Dispose, the GC will eventually clean up through the destructor.

In my projects, we follow this pattern for our OracleHelper — though honestly, we should be using 'using' statements more consistently for proper resource disposal.`,

// Q11 - Struct vs Class?
`The main difference between Struct and Class in C# is that Struct is a value type stored on the Stack, while Class is a reference type stored on the Heap.

When you assign a struct to another variable, it creates a complete independent copy of the data. So if I have a Point struct with X and Y values, and I assign point1 to point2, changing point2's X won't affect point1 at all — they're completely independent copies.

But with a class, when you assign one variable to another, both variables point to the SAME object in memory. So if I have an Employee class and assign emp1 to emp2, changing emp2's Name will also change emp1's Name because they're both referencing the same object on the heap.

Other key differences — structs cannot be inherited from, they can't be null unless you use Nullable, they don't have destructors, and they're implicitly sealed. Classes support inheritance, can be null, can have destructors, and can be abstract or sealed.

When to use struct — for small, lightweight data that represents a single value, like Point, Color, or DateTime. When to use class — for complex objects with behavior, relationships, and longer lifetimes, like Employee, Order, or DbContext.

In practice, most things in our applications are classes. Structs are used internally by .NET for things like int, decimal, DateTime, and Guid. If your data type is less than 16 bytes and is logically a single value, struct might be appropriate.`,

// Q12 - Static class?
`A Static class is a class that cannot be instantiated — you can never create an object from it using 'new'. It can only contain static members — static methods, static properties, and static fields.

The key characteristics are — you cannot use 'new' to create an instance, it cannot be inherited, it can only have static members, and it's implicitly sealed. It also doesn't have an instance constructor, only a static constructor that runs once when the class is first accessed.

We use static classes mainly for utility or helper methods — methods that don't need any object state and just perform a calculation or operation based on their parameters. For example, a MathHelper class with methods like Add(), Multiply(), or CalculateArea(). You call them directly on the class name — MathHelper.Add(5, 3) — without creating any object.

Common .NET static classes include Math (Math.Abs, Math.Max), Console (Console.WriteLine), File (File.ReadAllText), and Convert (Convert.ToInt32).

In my projects, we have static helper classes like InputValidator for security checks, and our AppConfigManager for reading configuration values. These are stateless utilities that just take input, process it, and return output — they don't need to maintain any state between calls.

Extension methods also must be defined in static classes — like our StringExtensions class that adds custom methods to the string type.`,

// Q13 - Partial class?
`A Partial class allows you to split a single class definition across multiple files. All the parts are combined into one class at compile time — the compiler merges them together as if they were written in a single file.

You use the 'partial' keyword on each part. All parts must be in the same namespace and assembly, must use the same accessibility level, and all must include the 'partial' keyword.

The main reason we use partial classes is to separate auto-generated code from our custom code. This is very common in Entity Framework — the tool generates model classes in one file, and we write our custom methods, validation, or computed properties in a separate partial file. When the tool regenerates, our custom code is safe in its own file and doesn't get overwritten.

Another use case is organizing large classes into logical sections — properties in one file, methods in another, validation in a third. This makes navigation easier in large projects. It also helps when multiple developers need to work on the same class — they can work on different files to reduce merge conflicts.

In ASP.NET, partial classes are used in Windows Forms where the designer generates UI code in Form.Designer.cs and you write event handlers in Form.cs. Similarly in Razor Pages — the .cshtml is the view and .cshtml.cs is the partial code-behind class.

The rules are — all parts must use 'partial', must be in the same namespace and assembly, must have the same access modifier, and if any part is abstract or sealed, the entire class becomes abstract or sealed.`,

// Q14 - Sealed class?
`A Sealed class is a class that cannot be inherited — no other class can derive from it. You use the 'sealed' keyword to prevent any class from extending it.

There are several reasons to seal a class. First, security — if you have a critical class like a PasswordHasher, you don't want someone to inherit from it and potentially weaken the security logic by overriding methods. Second, performance — the JIT compiler can optimize sealed classes better because it knows there are no derived classes, so it doesn't need to set up virtual method dispatch. Method calls on sealed classes can be inlined for faster execution. Third, design intent — sometimes a class is simply not designed for inheritance, and sealing it communicates that clearly.

You can also seal individual methods using 'sealed override' — this means the method was overridden from a parent but cannot be overridden further by any class that inherits from this one. This is useful when you want to allow one level of customization but prevent further changes.

Many .NET framework classes are sealed — String, StringBuilder, DateTime, and Math are all sealed because they're critical types that shouldn't be modified through inheritance.

In my projects, our utility classes and helper classes could benefit from being sealed since they're not designed for inheritance. It's a good practice that I would apply if refactoring.`,

// Q15 - What is Encapsulation?
`Encapsulation is the concept of wrapping data and the methods that operate on that data into a single unit — the class — and restricting direct access to the internal details from outside.

The simplest way to think about it is "hide the HOW, expose the WHAT." You hide how something works internally and only expose what others need to interact with.

Let me give you a practical example. Without encapsulation, if I have a BankAccount class with a public Balance field, anyone can directly set it to any value — including negative values like -5000. There's no protection, no validation.

With encapsulation, I make the balance field private and provide public methods like Deposit() and Withdraw() that include validation. The Deposit method checks that the amount is positive before adding it. The Withdraw method checks that there are sufficient funds before deducting. Now nobody can directly manipulate the balance — they must go through my controlled methods.

The benefits are — data protection through validation before any modification, hiding complexity so users of your class don't need to understand internal implementation, controlled access through well-defined public methods, and easy maintenance because you can change internal implementation without affecting external code.

In my projects, this is fundamental. Our BLL classes encapsulate business logic — controllers can't directly access the database, they must go through the BLL methods which contain all the validation and business rules. The DAL encapsulates database operations behind methods like GetRecords and ExecuteNonQuery.`,

// Q16 - Access Modifiers?
`Access Modifiers control the visibility and accessibility of classes, methods, properties, and fields. They determine who can see and use a particular member.

C# has six access modifiers. Let me explain each one.

Public means accessible from anywhere — any class, any assembly, any project can access it. We use this for properties and methods that form our class's public API.

Private means accessible only within the same class. This is the most restrictive. It's the default for class members if you don't specify anything. We use it for internal implementation details — fields, helper methods that shouldn't be exposed.

Protected means accessible within the same class AND any class that inherits from it. But not accessible from outside unrelated classes. We use it when we want child classes to access something but not external code.

Internal means accessible within the same assembly or project. Classes from other projects cannot access internal members. This is the default for classes themselves. We use it for things that should be shared within a project but not exposed to consumers of our library.

Protected Internal is the union of protected and internal — accessible within the same assembly OR from derived classes even in other assemblies.

Private Protected is the intersection — accessible only from derived classes within the same assembly. It's the most restrictive combination.

In practice, I mostly use public for APIs and properties, private for fields and internal helpers, protected for members needed by child classes, and internal for project-level sharing. The principle is always to use the most restrictive access level that still allows your code to work.`,

// Q17 - Difference between all access modifiers?
`Let me explain the key differences by describing who can access each modifier.

Public is completely open — same class yes, derived class yes, same assembly yes, different assembly yes. Everything can access it.

Private is completely closed — only the same class can access it. Nothing else. Not derived classes, not same assembly, not anyone.

Protected is family-only — same class yes, derived classes yes regardless of assembly, but other non-derived classes cannot access it even within the same assembly.

Internal is project-level — same class yes, derived class in same assembly yes, any class in same assembly yes, but nothing outside the assembly can see it.

Protected Internal is the most permissive combination — it's accessible if you're in the same assembly OR if you're a derived class. So derived classes in other assemblies can access it, and any class in the same assembly can access it.

Private Protected is the most restrictive combination — only derived classes that are also in the same assembly can access it. If you inherit from another assembly, you can't access private protected members.

The most commonly used in practice are — public for API surface, private for internal fields and helpers, protected for inheritance scenarios, and internal for classes shared within a project but not exposed externally.

Default access levels to remember — classes default to internal, class members default to private, interface members are implicitly public.`,

// Q18 - Properties (get/set)?
`Properties provide controlled access to private fields. They look like simple fields from the outside, but internally they have getter and setter logic that can include validation, computation, or side effects.

There are several types of properties in C#. The most common is the auto-implemented property — like 'public string Name { get; set; }' — where the compiler automatically creates a hidden backing field. This is what we use for simple data holders that don't need any validation.

When we need validation or logic, we use full properties with a backing field. For example, an Age property might have a private _age field, and the setter checks that the value is between 0 and 150 before assigning it. If someone tries to set an invalid age, we throw an ArgumentException.

Read-only properties have only a getter — they can be set only in the constructor or through computed expressions. Like a FullName property that combines FirstName and LastName. You can read it but never set it directly.

C# 9 introduced init-only properties — 'public string Name { get; init; }' — which can be set during object initialization but never changed after. This is great for immutable objects.

Properties can have different access levels — like 'public decimal Balance { get; private set; }' — where anyone can read the balance but only the class itself can modify it.

Why use properties instead of public fields? Data binding in MVC works with properties. You can add validation logic later without changing the external API. You can set breakpoints on getters/setters for debugging. And interfaces can define properties but not fields.`,

// Q19 - Field vs Property?
`The difference between a Field and a Property is about control and access.

A Field is a variable declared directly in the class. It has no get/set logic, usually is private, provides no validation capability, and gives direct memory access. You typically declare fields like 'private string _name;' or 'private int _age;'.

A Property is a wrapper around a field with get and set accessors. It can have validation logic in the setter, can be read-only or write-only, can trigger events on change, and supports data binding. You declare them like 'public string Name { get => _name; set => _name = value ?? throw new ArgumentNullException(); }'.

The key differences in practice — fields cannot be defined in interfaces but properties can. Fields don't support data binding in WPF or MVC but properties do. You can't set breakpoints on field access but you can on property getters/setters. Fields don't serialize properly in many frameworks but properties do.

The best practice is — fields should always be private, and data should be exposed through properties. Even for simple cases where you don't need validation today, use auto-properties because you can add validation later without breaking external code. If you had a public field and later need to add validation, changing it to a property would break all consuming code that directly accessed the field.

In our projects, all our DTO classes use auto-properties for serialization compatibility. Our domain classes use full properties with validation where business rules need enforcement.`,

// Q21 - Read-only vs Write-only Property?
`Read-only property means it has only a getter — you can read the value but cannot set it from outside. There are several ways to create read-only properties in C#.

The simplest is using a getter-only auto-property — 'public double Radius { get; }'. This can only be assigned in the constructor. Once the object is created, the value can never change. This is great for immutable objects where you want values fixed at creation time.

Another common pattern is computed read-only properties using expression body — 'public double Area => Math.PI * Radius * Radius'. This calculates the value every time you access it. There's no backing field — it's computed on the fly from other properties.

Derived read-only properties are also useful — like 'public int Age => DateTime.Now.Year - BirthYear' or 'public bool IsAdult => Age >= 18'. These derive their value from other data.

Write-only property means it has only a setter — you can set a value but never read it back. This is very rare in practice. The classic example is a Password property where you can set the password (which gets hashed internally) but you can never read the original password back for security reasons.

In real applications, read-only properties are extremely common — computed values, derived data, values that should only be set once. Write-only properties are almost never used because it's a strange pattern. If you need write-only behavior, a method usually communicates the intent better — like SetPassword() instead of a write-only Password property.`,

// Q22 - readonly vs const?
`The difference between readonly and const comes down to when the value is determined — compile-time versus runtime.

Const is a compile-time constant. The value must be assigned at declaration and can never change. It's implicitly static — you access it through the class name. It only supports primitive types and strings because the value must be known at compile time. The compiler actually embeds the value directly into the code wherever it's used — it doesn't reference the field at runtime.

Readonly is a runtime constant. The value can be assigned at declaration OR in the constructor. It can be instance-level or static. It supports any type — objects, collections, DateTime, anything. The value is resolved at runtime.

Here's a practical difference — if I have 'const int Version = 1' in a library, and another project references it, the value 1 gets baked into that other project at compile time. If I later change it to 2 and rebuild only the library, the other project still sees 1 until it's also recompiled. This is called the versioning problem. With readonly, there's no such issue because the value is always read at runtime.

When to use const — for true mathematical or physical constants that will never change in any version. Like Pi, days in a week, or fixed configuration values that are truly universal.

When to use readonly — for values determined at runtime, values that might change between versions, or any type that's not a primitive. Like connection strings, configuration objects, DateTime.Now, or anything calculated.

In my projects, I use const very sparingly — only for things like maximum retry counts or fixed format strings. Most "constants" are static readonly because they're safer for versioning.`,

// Q23 - What is Inheritance?
`Inheritance allows a class to acquire the properties and methods of another class. The child class or derived class inherits from a parent class or base class, getting all its non-private members automatically.

The syntax in C# is simple — 'class Dog : Animal'. Now Dog has everything Animal has, plus anything additional you define in Dog. You don't need to rewrite the common code.

The main benefit is code reusability. If I have 10 types of employees — Manager, Developer, Designer — and they all share common properties like Name, Email, and HireDate, I don't write these 10 times. I put them in a base Employee class and have each specific type inherit from it. Each child class only defines what's unique to it.

Inheritance establishes an IS-A relationship. A Dog IS-A Animal. A Manager IS-A Employee. This means anywhere you expect an Animal, you can pass a Dog — this is the foundation of polymorphism.

In C#, a class can inherit from only ONE base class — no multiple inheritance with classes. But it can implement multiple interfaces. The reason for this restriction is the Diamond Problem — if two parent classes have the same method, which one does the child get? C# avoids this ambiguity by allowing only single class inheritance.

In my projects, our controller classes inherit from Controller or ControllerBase. Our API response classes might inherit from a base Response class with common properties like StatusCode and Message.`,

// Q24 - Types of Inheritance?
`There are several types of inheritance, and it's important to know which ones C# supports.

Single Inheritance is when one child inherits from one parent. Like Dog inherits from Animal. This is the most common and fully supported in C#.

Multilevel Inheritance is a chain — grandparent to parent to child. Like Animal to Dog to GoldenRetriever. Each level inherits from the one above. This is supported in C#.

Hierarchical Inheritance is when multiple children inherit from the same parent. Like Dog, Cat, and Bird all inherit from Animal. This is supported and very common.

Multiple Inheritance is when one child inherits from multiple parents — like 'class Child : Parent1, Parent2'. This is NOT supported with classes in C# because of the Diamond Problem. If both parents have a method called Display(), which one does the child get? It's ambiguous.

However, C# achieves multiple inheritance behavior through interfaces. A class can implement multiple interfaces — 'class Duck : IFlyable, ISwimmable'. Since interfaces traditionally don't have implementation, there's no ambiguity about which code to use.

Hybrid Inheritance is a combination of the above types and is achieved through interfaces in C#.

In practice, I use single inheritance for class hierarchies and multiple interface implementation for adding capabilities. For example, our Entity classes might inherit from BaseEntity for common properties, and implement IValidatable for validation support.`,

// Q25 - Why no Multiple Inheritance in C#?
`C# doesn't support multiple class inheritance because of the Diamond Problem. Let me explain what that is and how C# solves it.

Imagine ClassA has a method called Display(). ClassB inherits from A and overrides Display() to print "B". ClassC also inherits from A and overrides Display() to print "C". Now if ClassD could inherit from both B and C, which version of Display() does it get? B's version or C's version? This is ambiguous and the compiler can't decide. This is called the Diamond Problem because the inheritance diagram looks like a diamond shape.

Languages like C++ allow this and force the programmer to resolve it manually, which leads to complex and error-prone code. C# took the cleaner approach of simply not allowing it.

The solution in C# is interfaces. A class can implement multiple interfaces because interfaces define contracts — what methods must exist — without providing implementation. So there's no conflict about WHICH code to run. The implementing class provides the single implementation.

With C# 8's default interface methods, there's a small exception — interfaces can now have default implementations. If two interfaces have the same method with default implementations, the class must explicitly implement it to resolve the conflict.

In practice, this rarely limits us. If I need a Duck that can both fly and swim, I create IFlyable and ISwimmable interfaces and implement both. The Duck class provides its own Fly() and Swim() implementations with no ambiguity.`,

// Q26 - Achieve Multiple Inheritance (Interfaces)?
`We achieve multiple inheritance behavior in C# through interfaces. A class can implement as many interfaces as it needs, gaining all their contracts.

For example, imagine I have an Invoice class that needs to be printable, emailable, and exportable. I would define three interfaces — IPrintable with a Print() method, IEmailable with a SendEmail() method, and IExportable with ExportToPdf() and ExportToExcel() methods. Then my Invoice class implements all three — 'class Invoice : IPrintable, IEmailable, IExportable'. It must provide implementations for all methods from all three interfaces.

You can also combine class inheritance with interface implementation. So if I have a Document base class with shared properties, my Report class can inherit from Document AND implement additional interfaces — 'class Report : Document, IEmailable, IPrintable'. You inherit code from one class and capabilities from multiple interfaces.

The beauty of this is polymorphism. I can treat my Invoice as an IPrintable when I need to print it, as an IEmailable when I need to email it, or as an IExportable when I need to export it. Different parts of the system interact with the same object through different interfaces.

This approach is heavily used in ASP.NET Core — our services implement multiple interfaces for different capabilities. Dependency Injection resolves the correct implementation based on which interface is requested. In my project, our notification system uses IEmailService and ISmsService interfaces that different classes implement.`,

// Q27 - base keyword?
`The 'base' keyword in C# refers to the parent or base class. It's used in three main scenarios.

First, calling the parent's constructor. When a child class is created, it often needs to pass initialization data up to the parent. For example, if Person has a constructor that takes a name, and Employee inherits from Person, then Employee's constructor uses 'base(name)' to pass the name up. The syntax is — 'public Employee(string name, decimal salary) : base(name)'. The base constructor runs first, then the child constructor body executes.

Second, calling the parent's method when you're overriding it. Sometimes you want to extend the parent's behavior, not completely replace it. So in the overridden method, you call base.MethodName() first to run the parent's logic, then add your own logic after. For example, in an overridden Speak() method in Dog, you might call base.Speak() which prints "Animal speaks", then add Console.WriteLine("Dog barks") after.

Third, accessing parent's members directly. If the parent has a protected field or property, you can access it through 'base.PropertyName' in the child class. Though usually you'd just access it directly since protected members are visible in child classes.

The key thing to remember is that 'base' always refers to the immediate parent class. And unlike 'this' which refers to the current instance, 'base' gives you access to the parent's version of overridden members.`,

// Q28 - Constructor execution order in Inheritance?
`When you create an object of a derived class, constructors execute from the TOP of the hierarchy to the BOTTOM. The parent constructor ALWAYS runs before the child constructor.

So if I have three levels — class A, class B inherits from A, class C inherits from B — and I create a new C(), the execution order is: A's constructor first, then B's constructor, then C's constructor. The base-most class initializes first.

This makes logical sense. The parent needs to set up its part of the object before the child can use or build upon it. If Employee inherits from Person, Person's constructor sets up Name and Age first, then Employee's constructor can safely use those values when setting up Salary or Department.

With parameterized constructors, if the parent doesn't have a parameterless constructor, the child MUST explicitly call the parent's constructor using 'base()' with the required parameters. If you forget, you get a compile error because the compiler doesn't know how to construct the parent part of the object.

This is a common interview trap question. They might show you code with multilevel inheritance and ask "What's the output?" The answer is always — constructors run top to bottom (base first), and destructors run bottom to top (derived first, base last).`,

// Q29 - Can private member be inherited?
`This is a subtle but important distinction. Private members ARE inherited in the sense that they exist in memory as part of the child object. But they are NOT ACCESSIBLE from the child class code.

When you create a child object, the memory layout includes space for all members from all parent classes — including private ones. They're physically there. But the child class code cannot directly read or modify them because of access modifier restrictions.

However, the child can indirectly access private parent members through public or protected methods that the parent provides. For example, if the parent has a private field '_secret' and a public method 'GetSecret()' that returns its value, the child can call GetSecret() to access that data. The encapsulation is preserved — the child goes through the parent's controlled access point.

Protected members, on the other hand, ARE accessible in child classes. That's exactly what protected is for — it says "I want my children to access this, but not the general public."

This design maintains encapsulation. A parent class can have implementation details that children shouldn't mess with directly. The parent controls how those details are accessed. This prevents child classes from corrupting the parent's internal state while still allowing them to use the parent's functionality through its public or protected interface.`,

// Q30 - IS-A vs HAS-A relationship?
`IS-A and HAS-A represent two fundamentally different relationships between classes, and choosing the right one is important for good design.

IS-A relationship means inheritance. A Dog IS-A Animal. An Employee IS-A Person. A Manager IS-A Employee. When you say class B inherits from class A, you're saying B is a specialized type of A. B can do everything A can do, plus more. You achieve this with the colon syntax — 'class Dog : Animal'.

HAS-A relationship means composition. A Car HAS-A Engine. An Employee HAS-A Address. An Order HAS-A List of OrderItems. Here, one class contains a reference to another class as a property. The contained object is a part of or belongs to the containing object. You achieve this simply by having a property — 'public Engine Engine { get; set; }' inside the Car class.

The key question to ask when designing is — is B a TYPE OF A, or does B CONTAIN A? A Dog is a type of Animal — use inheritance. A Car contains an Engine — use composition. Getting this wrong leads to awkward designs.

A common mistake is using inheritance when composition is more appropriate. For example, 'class Car : Engine' would be wrong — a Car is not a type of Engine. Or 'class Stack : ArrayList' would be wrong — a Stack is not an ArrayList, it uses a list internally.

In modern software design, there's a principle that says "Favor Composition over Inheritance" because composition gives more flexibility — you can swap the contained object at runtime, whereas inheritance is fixed at compile time.`,

// Q31 - Composition vs Inheritance?
`This is a very important design question. The principle is "Favor Composition over Inheritance" — and let me explain why.

Inheritance creates a tight coupling between parent and child. The child depends on the parent's implementation. If the parent changes, all children are affected. You can't change the parent-child relationship at runtime — it's fixed at compile time. And you can only inherit from ONE class in C#.

Composition creates a loose coupling. Your class CONTAINS another class through an interface reference. You can swap implementations at runtime. You can combine multiple behaviors. And you can easily mock dependencies for testing.

Let me give a practical example. Say I need a logging system. With inheritance approach, I might have a class Logger with a Log() method, and FileLogger inherits from it. But what if I want both File AND Database logging? I can't inherit from two classes.

With composition approach, I define an ILogger interface. Then I create FileLogger and DatabaseLogger that implement ILogger. My OrderService CONTAINS an ILogger — injected through the constructor. I can pass FileLogger, DatabaseLogger, or even a CompositeLogger that does both. I can swap implementations without changing OrderService. I can mock ILogger for unit testing.

This is exactly how Dependency Injection works in ASP.NET Core — it's composition through interfaces. In my projects, we use interfaces for all services and inject them through constructors. This gives us testability, flexibility, and follows the Dependency Inversion Principle.

When to still use inheritance — when there's a genuine IS-A relationship with shared behavior that won't change, like Controller inheriting from ControllerBase, or when the framework requires it.`,

// Q32 - What is Polymorphism?
`Polymorphism means "many forms" — the same method or interface can behave differently depending on the object that's using it. It's one of the most powerful features of OOP because it enables flexible, extensible code.

There are two types. Compile-time polymorphism, also called static polymorphism or early binding, which is achieved through method overloading and operator overloading. The compiler decides at compile time which method to call based on the parameters you pass.

Runtime polymorphism, also called dynamic polymorphism or late binding, which is achieved through method overriding using virtual and override keywords. The decision of which method to call happens at runtime based on the actual object type, not the reference type.

Let me give you a real-world example of runtime polymorphism. Say I have a Shape base class with a virtual method CalculateArea(). I have Circle and Rectangle classes that override this method. Now I can have a List of Shape and put circles and rectangles in it. When I loop through and call CalculateArea() on each, the correct implementation runs automatically — Circle's version for circles, Rectangle's version for rectangles. The calling code doesn't need to know what specific shape it's dealing with.

This is incredibly powerful for extensibility. If tomorrow I need a Triangle, I just create a new class that overrides CalculateArea(). I don't change any existing code — the loop that processes shapes automatically handles triangles too. This follows the Open/Closed Principle.

In my projects, polymorphism is everywhere — different notification types implementing the same interface, different report generators with the same base class, different user roles with different dashboard behaviors.`,

// Q33 - Compile-time Polymorphism (Overloading)?
`Compile-time polymorphism is when the compiler decides which method to call at compile time. This is achieved through Method Overloading — having multiple methods with the same name but different parameter lists in the same class.

For example, in a Calculator class, I can have multiple Add() methods — one that takes two integers, another that takes two doubles, another that takes three integers, and another that takes two strings for concatenation. When I call Add(5, 3), the compiler looks at the argument types and picks the int version. When I call Add(5.5, 3.2), it picks the double version. This decision happens at compile time — before the program even runs.

The key rules for overloading are — the methods must have the same name, they must differ in the number of parameters, the types of parameters, or the order of parameters. Return type alone is NOT sufficient to overload — you can't have two methods with the same parameters but different return types because the compiler can't determine which one you want just from the call site.

The compiler resolves overloaded calls by finding the most specific match. If you pass an int and there's both an int overload and a double overload, it picks int because it's an exact match. If there's no exact match, it looks for the closest implicit conversion.

This is called "static" or "early" binding because the binding between the call and the actual method happens during compilation, not at runtime. It's slightly faster than runtime polymorphism because there's no runtime lookup needed.`,

// Q34 - Runtime Polymorphism (Overriding)?
`Runtime polymorphism is when the decision of which method to call happens at RUNTIME based on the actual type of the object, not the type of the reference variable. This is achieved through method overriding using virtual and override keywords.

Here's how it works. In the base class, you mark a method as 'virtual' — this means "derived classes are allowed to provide their own version." In the derived class, you use 'override' to provide that different implementation.

The magic happens when you use a base class reference to hold a derived class object. For example — 'Shape shape = new Circle()'. The reference type is Shape, but the actual object is a Circle. When you call shape.CalculateArea(), the runtime looks at the ACTUAL object type (Circle) and calls Circle's version of CalculateArea(), not Shape's version. This decision happens at runtime.

This is incredibly powerful for collections. I can have a List<Shape> containing circles, rectangles, and triangles. I loop through them calling CalculateArea() on each, and the correct implementation runs for each object automatically. The loop code doesn't know or care about the specific types.

This is also the foundation of the Strategy pattern and many other design patterns. In ASP.NET Core, when you register ILogger and call Log(), the runtime decides whether to call ConsoleLogger's Log, FileLogger's Log, or whatever implementation was registered — that's polymorphism in action.

In my project, our BLL layer could benefit from this — different audit types could have different observation validation logic, all accessible through a common virtual method.`,

// Q35 - Method Overloading rules?
`Method Overloading rules define what makes a valid overload. The method name must be the same, and the parameter list must be different. Let me explain what "different" means.

You can overload by having a different NUMBER of parameters. Add(int a, int b) and Add(int a, int b, int c) are valid overloads because one takes two parameters and the other takes three.

You can overload by having different TYPES of parameters. Print(int number) and Print(string text) are valid because the parameter types are different. The compiler knows which to call based on what you pass.

You can overload by having a different ORDER of parameters. Display(string name, int age) and Display(int age, string name) are valid because the order differs.

You can also overload using ref versus no-ref. Process(int x) and Process(ref int x) are valid because they have different calling conventions.

What you CANNOT use for overloading — return type alone. If two methods have identical parameters but different return types, the compiler can't distinguish them at the call site. Also, parameter names alone don't count — Print(int x) and Print(int y) are the same signature. And ref versus out cannot overload each other because they're represented the same way in the compiled code.

The compiler picks the most specific match. If you pass an integer and there's both an int overload and an object overload, it picks int because it's more specific. This resolution happens at compile time.`,

// Q36 - Method Overriding rules?
`Method Overriding is when a child class provides its own implementation of a method that's already defined in the parent class. There are specific rules that must be followed.

First, the method in the parent class must be marked as virtual, abstract, or override. You cannot override a method that isn't explicitly marked for overriding. If the parent method is just a regular method, you can't override it — you can only hide it with 'new'.

Second, the child class must use the 'override' keyword. This explicitly tells the compiler "I'm intentionally providing a new implementation for this parent method."

Third, the method signature must be identical — same name, same parameters, same return type. You can't change the parameters or return type when overriding.

Fourth, the access modifier must be the same. You can't make an overridden method more restrictive — a public virtual method must remain public when overridden.

Fifth, you cannot override static methods — overriding is an instance-level concept that relies on the actual object type at runtime. Static methods belong to the class, not instances.

Sixth, you cannot override sealed methods. If a method in a parent class is marked as 'sealed override', no further overriding is allowed.

The key difference from overloading — overriding requires inheritance (parent-child relationship), uses virtual/override keywords, must have the SAME signature, and the binding happens at runtime. Overloading is within the same class, needs different parameters, and binding happens at compile time.`,

// Q37 - Overloading vs Overriding?
`This is one of the most common interview questions, so let me clearly differentiate them.

Method Overloading is having multiple methods with the same name but different parameters in the SAME class. It's compile-time polymorphism — the compiler decides which method to call based on the arguments. No special keywords are needed. Parameters MUST be different. Return type CAN be different but that alone isn't sufficient. No inheritance is required.

Method Overriding is having a method in a CHILD class that replaces the parent's implementation. It's runtime polymorphism — the runtime decides which method to call based on the actual object type. It requires virtual keyword in parent and override keyword in child. Parameters MUST be the same. Return type MUST be the same. Inheritance IS required.

Let me give you a quick way to remember — Overloading is about providing multiple options (different parameters). Overriding is about changing behavior (same parameters, different implementation).

A practical scenario — in a Calculator class, I might overload Add() to handle int, double, and string concatenation. In a Shape hierarchy, I override CalculateArea() so each shape provides its own formula.

The binding is the crucial difference. With overloading, the compiler knows exactly which method will run — it's decided at compile time. With overriding, the compiler doesn't know — it depends on what object is actually there at runtime. That's why overriding enables true polymorphism where the same code can behave differently based on the runtime object.`,

// Q38 - virtual keyword?
`The 'virtual' keyword marks a method in the base class that CAN be overridden by derived classes. It says "I'm providing a default implementation, but my children are welcome to replace it with their own."

Key characteristics — virtual methods HAVE a body with default implementation. The derived class MAY override them but is not required to. If the child doesn't override, the parent's implementation is used. And you cannot combine virtual with static, abstract, private, or sealed.

When you mark a method as virtual, you're enabling runtime polymorphism. If someone holds a reference of the base type pointing to a derived object and calls the virtual method, the runtime will check the actual object type and call the appropriate version — the overridden one if it exists, or the base one if it doesn't.

For example, in a Notification class, I might have a virtual Send() method that sends an email by default. EmailNotification might not override it — using the default. But SmsNotification would override it to send SMS instead. PushNotification would override it to send push notifications. When I have a collection of Notification objects and call Send() on each, the correct implementation runs for each.

In ASP.NET Core, many framework methods are virtual — allowing you to override default behavior when needed. Like OnActionExecuting in filters, or ToString() from System.Object which you can override to provide a meaningful string representation of your class.

Important to note — once virtual, a method can be overridden in any level of the inheritance hierarchy, unless someone seals it with 'sealed override'.`,

// Q39 - override keyword?
`The 'override' keyword is used in a derived class to provide a new implementation for a virtual or abstract method from the base class. It explicitly replaces the parent's behavior.

The rules are — the base method must be virtual, abstract, or itself an override. The overriding method must have the same signature — same name, same parameters, same return type. You must use the 'override' keyword explicitly — the compiler won't implicitly override even if the signatures match.

When you override a method, runtime polymorphism kicks in. If you have a base class reference pointing to a derived object, calling the method will execute the DERIVED version. This is the key behavior — the actual object type determines which code runs, not the reference type.

You can also call the base class's original implementation from within your override using 'base.MethodName()'. This is useful when you want to EXTEND behavior rather than completely replace it. For example, overriding a Log() method to first call base.Log() for the default logging, then adding your own custom logging after.

The override chain can continue through multiple levels. If A has virtual, B overrides it, and C inherits from B, C can also override it. At runtime, the most derived override is called based on the actual object type.

In my projects, we could use this for different audit types — each type could override a ValidateObservation() method to apply its own specific validation rules while potentially calling base.ValidateObservation() for common validations.`,

// Q40 - new keyword (method hiding)?
`The 'new' keyword in the context of methods creates a method hiding scenario — the derived class has its own version of a method that HIDES the parent's version rather than overriding it.

The critical difference from override — with 'new', the method called depends on the REFERENCE TYPE, not the object type. With override, it depends on the OBJECT TYPE.

Let me explain with an example. If Animal has a regular (non-virtual) Speak() method, and Dog uses 'new' to define its own Speak(), then: If I have 'Dog dog = new Dog()' and call dog.Speak(), I get Dog's version because the reference is Dog. But if I have 'Animal animal = new Dog()' and call animal.Speak(), I get ANIMAL's version because the reference is Animal — even though the actual object is a Dog. The 'new' keyword doesn't participate in polymorphism.

Contrast this with virtual/override — if Speak() were virtual in Animal and overridden in Dog, then 'Animal animal = new Dog(); animal.Speak()' would call Dog's version because override uses the actual object type.

Without the 'new' keyword, if you define a method with the same name as the parent's, the compiler gives you a warning saying you're hiding the parent's method. Adding 'new' explicitly tells the compiler "I know I'm hiding it, this is intentional" and suppresses the warning.

When to use 'new' — honestly, rarely. It's confusing and breaks polymorphic behavior. It's mainly used when you can't modify the base class and need a method with the same name but don't want polymorphism. In almost all cases, virtual/override is the correct approach.`,

// Q41 - virtual/override vs new?
`This is a favorite interview trap question. Let me explain the difference clearly with what actually happens at runtime.

With virtual/override, you get TRUE polymorphism. The method that executes is determined by the ACTUAL OBJECT TYPE at runtime. So if I have 'Base obj = new Derived()' and call obj.Method(), the Derived version runs because the actual object is Derived. The reference type (Base) doesn't matter.

With 'new' (method hiding), there's NO polymorphism. The method that executes is determined by the REFERENCE TYPE at compile time. So if I have 'Base obj = new Derived()' and call obj.Method(), the BASE version runs because the reference type is Base. The actual object type doesn't matter.

Let me put it in a table format mentally. If I have a Base reference pointing to a Derived object: with virtual/override, calling the method gives Derived's implementation. With new, calling the method gives Base's implementation.

If I have a Derived reference pointing to a Derived object: both virtual/override AND new give Derived's implementation. The difference only shows when using a base class reference.

This is why virtual/override is preferred — it enables polymorphism where you can treat different objects uniformly through a common base type. The 'new' keyword breaks this contract and can lead to confusing bugs where the same object behaves differently depending on what type of variable holds it.

The practical advice is — always use virtual/override for polymorphism. Use 'new' only in very rare cases where you intentionally want to break the polymorphic chain, which is almost never in well-designed code.`,

// Q42 - Override without virtual?
`No, you cannot override a method that is not marked as virtual, abstract, or override in the base class. If you try to use the 'override' keyword on a non-virtual method, you'll get a compile error.

This is by design in C# — the base class author explicitly opts in to allowing overriding by marking methods as virtual. This gives the base class author control over which behaviors can be changed by derived classes and which are fixed.

If the parent method is NOT virtual and you want your own version, you have three options.

First, use the 'new' keyword to hide the method. This gives your class its own version, but it doesn't participate in polymorphism — a base class reference will still call the base version.

Second, if you control the base class, simply add the 'virtual' keyword to it. Then you can properly override in the child.

Third, use interface-based polymorphism. Define an interface with the method signature, have both classes implement it, and program against the interface. This gives you polymorphism without requiring the base class to use virtual.

In practice, if you find yourself needing to change a method's behavior but it's not virtual, it usually means the base class wasn't designed for that kind of customization. You should reconsider your design — maybe composition would be better than inheritance in that scenario.`,

// Q43 - Operator Overloading?
`Operator Overloading allows you to define custom behavior for operators like +, -, *, ==, !=, etc. for your own classes. This makes your objects work with operators naturally, like built-in types.

For example, if I have a Money class, I can overload the + operator so that adding two Money objects adds their amounts together. Without operator overloading, I'd have to write something awkward like money1.Add(money2). With overloading, I can write 'total = money1 + money2' which is much more readable and intuitive.

The syntax requires the method to be public static, and at least one parameter must be the containing type. You use the 'operator' keyword followed by the operator symbol. So 'public static Money operator +(Money a, Money b)' defines how two Money objects are added.

There are rules — some operators must be overloaded in pairs. If you overload ==, you must also overload !=. Similarly for < and >, <= and >=. You cannot overload =, &&, ||, or the ternary operator.

Common use cases are mathematical types like Vector, Matrix, Complex numbers, Money, or any type where mathematical operations make semantic sense. You wouldn't overload + for an Employee class because adding two employees doesn't make logical sense.

In practice, I don't use operator overloading often in business applications. It's more common in mathematical or scientific computing libraries. But understanding it is important for interviews and for understanding how built-in types like string use + for concatenation.`,

// Q44 - Covariance and Contravariance?
`Covariance and Contravariance are about how generic type parameters relate to inheritance when used in interfaces and delegates. They control whether you can use a more derived or less derived type than specified.

Covariance uses the 'out' keyword and allows you to use a MORE derived type. Think of it as output — the type parameter only appears in return positions. The classic example is IEnumerable. If Dog inherits from Animal, then IEnumerable<Dog> can be assigned to IEnumerable<Animal>. This makes sense because if you're reading dogs from a collection, you can treat them as animals.

Contravariance uses the 'in' keyword and allows you to use a LESS derived type. Think of it as input — the type parameter only appears in parameter positions. The example is Action<T>. If you have an Action<Animal> that processes any animal, you can assign it to Action<Dog> because anything that can handle any animal can certainly handle a dog.

The easiest way to remember — Covariance (out) goes in the direction of inheritance (child to parent). Contravariance (in) goes against the direction (parent to child).

In daily coding, you benefit from covariance when working with IEnumerable — you can pass a List<string> where IEnumerable<object> is expected because string derives from object and IEnumerable is covariant. This is why LINQ works so smoothly with inheritance hierarchies.

This topic is rarely asked in depth in interviews unless you're applying for a senior position. But knowing the basic concept and the out/in keywords shows strong fundamentals.`,

// Q45 - What is Abstraction?
`Abstraction means hiding complex implementation details and showing only the essential features to the user. The focus is on WHAT an object does, not HOW it does it.

Think of real-world examples. When you use an ATM, you see buttons for withdraw, deposit, balance check. You don't see or need to know the complex banking protocols, network connections, and security algorithms running behind the scenes. That complexity is abstracted away. You interact with a simple interface.

Similarly when you drive a car — you use the steering wheel, pedals, and gear shift. You don't need to understand how the engine combustion works, how the transmission converts torque, or how the electronic stability control operates. All that complexity is hidden behind a simple interface.

In C#, we achieve abstraction through abstract classes and interfaces. An abstract class or interface defines WHAT operations are available without specifying HOW they're implemented. The implementing class provides the actual logic.

For example, I might define an abstract PaymentProcessor class with an abstract method ProcessPayment(). I don't specify HOW to process payment at this level. Then StripePayment, PayPalPayment, and RazorpayPayment each provide their own implementation. The code that uses PaymentProcessor doesn't know or care which payment gateway is being used — it just calls ProcessPayment() and the abstraction handles the rest.

Abstraction differs from Encapsulation. Encapsulation is about hiding DATA (making fields private). Abstraction is about hiding IMPLEMENTATION (showing what, not how). They complement each other in good OOP design.`,

// Q46 - Abstract class?
`An Abstract class is a class that cannot be instantiated directly — you cannot create an object from it using 'new'. It serves as a base class that defines common structure and behavior for derived classes.

An abstract class can contain both abstract methods (without implementation — just the signature) and concrete methods (with full implementation). This is one of its key advantages — it can provide shared code that all children use, while also forcing children to implement certain methods their own way.

For example, I might have an abstract Shape class. It has a concrete method Display() that prints the shape's color — this logic is the same for all shapes so it's implemented once in the base. But it has an abstract method CalculateArea() because each shape has a different formula — Circle uses pi*r*r, Rectangle uses width*height. Each derived class MUST provide its own implementation.

The rules are — you cannot create an instance of an abstract class directly. If a class has even one abstract method, the class must be marked abstract. Derived classes MUST implement all abstract methods unless they themselves are also abstract. Abstract classes CAN have constructors (called via 'base' from child constructors), fields, properties, and any access modifiers.

Abstract classes represent incomplete types — they have some missing pieces that subclasses must fill in. You use them when you have a group of related classes that share some common code but each has its own implementation for certain operations.

In my projects, we could use an abstract BaseAuditService with common methods like ValidateUser() implemented, and abstract methods like ProcessObservation() that each audit type implements differently.`,

// Q47 - Abstract method?
`An Abstract method is a method declared in an abstract class that has NO body — no implementation at all. It only declares the signature (return type, name, parameters). The derived class is FORCED to provide the implementation.

Think of it as a contract — the abstract class says "any class that inherits from me MUST have this method, but each one can implement it differently." If a derived class doesn't implement all abstract methods, it must also be marked as abstract itself.

The rules are — abstract methods can only exist inside abstract classes. They have no method body (no curly braces, just a semicolon). They are implicitly virtual (you don't need to add the virtual keyword). They cannot be private because derived classes need to access them. They cannot be static because they rely on instance-level polymorphism.

The difference between abstract and virtual is obligation. A virtual method HAS a default implementation and derived classes MAY override it — it's optional. An abstract method has NO implementation and derived classes MUST override it — it's mandatory.

For example, in a Database abstract class, I might have abstract methods Connect(), Disconnect(), and Query(). Every database type — SqlServerDatabase, MongoDatabase, OracleDatabase — MUST provide their own implementation because connecting to each database is completely different. There's no sensible default implementation I could write in the base class.

This is different from a virtual method where I might have a virtual Log() method with a default console logging implementation that most classes use as-is, but some might override for custom logging.`,

// Q48 - Abstract class have Constructor?
`Yes, abstract classes CAN have constructors. This surprises some people because you can't instantiate an abstract class directly. So why have a constructor?

The answer is — the abstract class constructor is called through the derived class using 'base()'. When you create a derived class object, the abstract class's constructor runs first (following the rule that parent constructors execute before child constructors). This allows the abstract class to initialize its own properties and fields before the child does its setup.

For example, an abstract Employee class might have a constructor that takes a name parameter, sets the Name property, and initializes HireDate to DateTime.Now. The FullTimeEmployee derived class constructor calls 'base(name)' to let the parent set up the common stuff, then sets its own MonthlySalary property.

The constructor is usually marked as protected rather than public. Since you can't create an abstract class directly, a public constructor doesn't make sense from an API perspective. Protected communicates clearly that it's only meant to be called from derived classes.

This pattern is useful for enforcing that certain data is always provided when creating any derived type. If the abstract class constructor requires a name parameter, every derived class MUST pass a name — there's no way to create any employee without a name. This ensures objects are always in a valid state.

So the constructor exists for initialization of the base class portion of the object, enforcing required data, and running setup logic that's common to all derived classes.`,

// Q49 - Abstract class have non-abstract methods?
`Yes, absolutely. An abstract class can have BOTH abstract methods and non-abstract (concrete) methods. This is actually one of the main reasons to use an abstract class over an interface.

The abstract methods define what each derived class must implement differently. The concrete methods provide shared implementation that all derived classes inherit and use as-is without rewriting.

This is called the Template Method Pattern. The abstract class defines a skeleton of an algorithm with some steps implemented (concrete methods) and some steps left for subclasses to fill in (abstract methods).

For example, imagine an abstract Report class. It has a concrete Print() method that handles formatting, headers, footers, and page numbers — this is the same for all reports. It has a concrete SaveToFile() method that handles file I/O. But it has an abstract GenerateContent() method because each report type generates different content. And an abstract GetTitle() method because each report has a different title.

When SalesReport extends Report, it only implements GenerateContent() and GetTitle(). It gets Print() and SaveToFile() for free from the parent. This is code reuse through inheritance.

You can also have virtual methods in an abstract class — these have a default implementation but CAN be overridden. This gives three levels: abstract (must override), virtual (can override), and regular (cannot override).

This mix of abstract and concrete is the KEY difference from interfaces (before C# 8). Interfaces traditionally could only have abstract members. Abstract classes could have both — giving you the ability to share code while still enforcing a contract.`,

// Q50 - Abstract class vs Interface?
`This is asked in EVERY interview, so let me explain it clearly.

An Abstract class is about sharing code and establishing an IS-A relationship among related classes. It can have fields, constructors, access modifiers on members, both abstract and concrete methods, and maintains state. But you can only inherit from ONE abstract class.

An Interface is about defining a contract or capability — a CAN-DO relationship. It traditionally has no implementation (before C# 8), no fields, no constructors, all members are implicitly public, and it cannot maintain state. But a class can implement MULTIPLE interfaces.

When to use Abstract class — when classes are closely related and share common code. When you need fields or state. When you need constructors for initialization. When you need different access modifiers (protected members). When there's a clear IS-A hierarchy. Example: Shape as base for Circle, Rectangle, Triangle — they share Color property and Display() logic.

When to use Interface — when unrelated classes need to share a contract. When you need multiple inheritance. When you want loose coupling for DI and testing. When defining a capability rather than a type. Example: IDisposable can be implemented by DatabaseConnection, FileStream, HttpClient — completely unrelated classes that all need cleanup capability.

You can use BOTH together. An abstract class can implement interfaces. A derived class can inherit an abstract class AND implement additional interfaces. In my projects, we use interfaces for service contracts (IOrderRepository, IEmailService) for DI, and we could use abstract classes if we had shared logic among related services.

The rule of thumb — if you have shared CODE, use abstract class. If you have a shared CONTRACT, use interface. When in doubt, prefer interface for flexibility.`,

// Q51 - When to use Abstract class vs Interface?
`This builds on the previous question. Let me give you practical decision criteria.

Use Abstract class when your classes share actual code that you don't want to duplicate. For example, all employees share salary calculation logic — the base Employee abstract class implements CalculateBasePay() once, and derived classes like FullTimeEmployee and ContractEmployee override CalculateBonus() with their own logic. The shared code lives in one place.

Use Interface when you need to define a capability that unrelated classes can have. For example, both a Printer class and an EmailService class can "send output" — they're completely unrelated classes but both implement ISendable. Or both DatabaseConnection and FileStream need cleanup — both implement IDisposable even though they have nothing else in common.

Use Interface when you need multiple inheritance behavior. A Document class might need to be IPrintable, ISaveable, and IExportable. You can't inherit from three abstract classes, but you can implement three interfaces.

Use Interface for Dependency Injection and testability. In ASP.NET Core, we register services against interfaces — IOrderRepository, IEmailService. This allows us to swap implementations without changing consuming code, and mock them in unit tests.

In my project specifically — if I were refactoring, I would define interfaces like ILoginService, IAuditObservationService for DI. But if I had multiple audit types (branch audit, special audit, compliance audit) that share 60% of their logic, I'd use an abstract BaseAuditService with the shared code and abstract methods for the parts that differ.

The modern trend in C# is to favor interfaces over abstract classes because of the flexibility they provide, especially with DI. Use abstract classes only when you genuinely need shared implementation code.`,

// Q52 - Create instance of Abstract class?
`No, you cannot create an instance of an abstract class directly. If you write 'new Shape()', you'll get a compile error saying "Cannot create an instance of the abstract type Shape."

This makes logical sense. An abstract class is incomplete — it may have abstract methods with no implementation. If you could create an instance and someone called that abstract method, there would be no code to execute. So the compiler prevents it.

However, you CAN do three things with abstract classes.

First, you can create instances of DERIVED classes and assign them to the abstract type variable. 'Shape shape = new Circle()' is perfectly valid. The Circle provides all the missing implementations, so it's complete and can be instantiated.

Second, you can use abstract class types in collections. 'List<Shape> shapes = new List<Shape>()' works fine. You then add concrete objects like circles and rectangles to the list.

Third, you can use abstract class types as method parameters. 'void ProcessShape(Shape shape)' accepts any derived class instance. This enables polymorphism — the method works with any shape without knowing the specific type.

This is actually the whole point of abstract classes — they exist to be inherited from, not instantiated directly. They define the common contract and shared behavior, while derived classes provide the complete implementation. The abstract class serves as a polymorphic reference type for working with groups of related objects uniformly.`,

// Q53 - Abstract class be Sealed?
`No, an abstract class cannot be sealed. These two modifiers are contradictory and using them together causes a compile error.

Abstract means "this class MUST be inherited — it's incomplete and needs a derived class to fill in the missing pieces." It's designed specifically to be a base class.

Sealed means "this class CANNOT be inherited — no class can derive from it." It's designed to be final.

You can see the contradiction — one says "you must inherit me" and the other says "you cannot inherit me." They're mutually exclusive.

However, there's an interesting related scenario. A method can be both overridden AND sealed in a derived class. For example, Animal has a virtual Speak() method. Dog overrides it with 'sealed override void Speak()'. This means Dog provides its implementation, but any class that inherits from Dog (like GoldenRetriever) cannot override Speak() further. The override chain stops at Dog.

This is useful when you want to allow one level of customization but prevent further changes. You're saying "I've provided the final implementation for this method — no more overriding beyond this point."

In practice, sealing methods is rare but can be useful for security-critical methods where you want to ensure the behavior can't be changed by further derived classes.`,

// Q54 - What is an Interface?
`An Interface is a contract that defines what a class must do without specifying how it does it. It contains method signatures, property declarations, events, and indexers — but traditionally no implementation.

Think of it like a job description. The job posting says "must be able to code, must communicate well, must solve problems" — that's the interface. It doesn't say HOW you should code or communicate. Different candidates (implementing classes) fulfill these requirements in their own way.

In C#, interface names conventionally start with 'I' — IDisposable, IEnumerable, IComparable, ILogger. When a class implements an interface, it MUST provide implementations for ALL members defined in that interface.

The key benefits are — multiple implementation (a class can implement many interfaces), loose coupling (code depends on interface, not concrete class), testability (mock the interface in unit tests), and swappability (change implementation without changing consuming code).

In my projects, interfaces are fundamental to our architecture. If we were using proper DI, we'd have ILoginService, IAuditRepository, IEmailService. The controller depends on the interface, and the DI container provides the actual implementation. This means for testing, I can provide a mock implementation that returns predefined data without hitting the real database.

With C# 8, interfaces can now have default method implementations. This allows you to add new methods to an existing interface without breaking all implementing classes — they get the default implementation unless they choose to override it. But the traditional use — pure contract with no implementation — is still the most common pattern.`,

// Q55 - Default Interface Methods (C# 8+)?
`C# 8 introduced Default Interface Methods — the ability to provide a method implementation directly in the interface. This was a significant change from the traditional "interfaces have no implementation" rule.

The primary motivation was interface evolution. Before C# 8, if you added a new method to an existing interface, every class implementing that interface would break — they'd all need to implement the new method. With default methods, you can add a new method WITH an implementation, and existing classes automatically get that default behavior without any code changes.

For example, if I have an ILogger interface used by 50 classes, and I want to add a LogError() method, I can define it with a default implementation that calls the existing Log() method with an "ERROR:" prefix. All 50 classes continue working. Any class that wants custom error logging behavior can override the default.

There's an important catch though — default interface methods are only accessible through the INTERFACE reference, not through the class reference directly. So if ConsoleLogger implements ILogger, you can't call consoleLogger.LogError() directly. You must cast to ILogger first: ((ILogger)consoleLogger).LogError(). This is because the class didn't declare the method — it comes from the interface.

In practice, default interface methods are used sparingly. They're mainly for backward-compatible evolution of interfaces in libraries. For new designs, it's still better to keep interfaces lean and use abstract classes when you need shared implementation. The clean separation of "interface = contract, abstract class = shared code" is still the preferred design approach.`,

// Q56 - Interface have properties?
`Yes, interfaces can have property declarations. But it's important to understand what this means compared to class properties.

In an interface, you declare properties with get, set, or both — but there's no backing field and no implementation. You're just saying "any class implementing this interface must have a property with this name and these accessors."

For example, 'int Id { get; set; }' in an interface means implementing classes must have an Id property that's readable and writable. 'string Name { get; }' means it must be at least readable — the implementing class can make it read-only or read-write.

The implementing class provides the actual storage. It can use an auto-property, a full property with backing field and validation, a computed property — whatever it wants. The interface only defines the external contract.

This is useful in scenarios like defining a common entity contract. If all my database entities need an Id and CreatedDate, I can define 'interface IEntity { int Id { get; set; } DateTime CreatedDate { get; set; } }'. Any entity class implementing IEntity is guaranteed to have these properties, and my generic repository can work with IEntity knowing these properties exist.

Interfaces cannot have fields — only properties. This is because fields are implementation details (how data is stored), while properties are part of the public contract (what data is accessible). Interfaces are about the contract, not the implementation.`,

// Q57 - Explicit Interface Implementation?
`Explicit Interface Implementation is when you implement an interface method so it's ONLY accessible through the interface reference, not through the class reference directly.

The main use case is resolving conflicts when a class implements two interfaces that have methods with the same name. For example, if ICar has a Start() method and IBoat has a Start() method, and my AmphibiousVehicle implements both, how do I provide different implementations for each?

I use explicit implementation — 'void ICar.Start()' and 'void IBoat.Start()'. Note there's no access modifier and the interface name prefixes the method. Now these methods are only accessible through their respective interface references. If I cast to ICar and call Start(), I get the car version. If I cast to IBoat and call Start(), I get the boat version.

Another use case is hiding interface methods from the class's public API. Maybe I implement IDisposable but don't want Dispose() to appear as a regular method on my class. Explicit implementation hides it — users must cast to IDisposable to call Dispose().

The key rules — explicit implementations have no access modifier (they're effectively private to direct class access). They can only be called through the interface type. You cannot make them virtual or override them normally.

In practice, this comes up occasionally when implementing multiple interfaces or when you want a cleaner public API. It's C#'s solution to the method name conflict problem that could arise from multiple interface implementation.`,

// Q58 - Interface vs Abstract class (detailed)?
`Let me give the detailed comparison that interviewers expect at the 4-5 year experience level.

State and Fields — Abstract classes can hold state through fields and instance variables. Interfaces cannot have fields at all. If you need to store data that's common to all implementations, you need an abstract class.

Constructors — Abstract classes can have constructors to initialize common state. Interfaces cannot. If your base type needs initialization logic, abstract class is the way.

Access Modifiers — Abstract class members can be private, protected, internal, public. Interface members are implicitly public. If you need protected members accessible only to derived classes, use abstract class.

Inheritance — A class can inherit from only ONE abstract class (single inheritance). But it can implement MULTIPLE interfaces. This is often the deciding factor.

Implementation — Abstract classes can have fully implemented methods alongside abstract ones. Before C# 8, interfaces had no implementation. Now with default methods, interfaces can have some implementation, but it's limited and not the same as abstract class concrete methods.

Relationship — Abstract class represents IS-A (what something IS). Interface represents CAN-DO (what something CAN DO). A Dog IS-A Animal (abstract class). A Dog CAN swim (ISwimmable interface). A Dog CAN be trained (ITrainable interface).

Use together — The most powerful designs use both. 'class Duck : Animal, IFlyable, ISwimmable'. Duck IS-A Animal (gets shared code). Duck CAN fly (implements flying contract). Duck CAN swim (implements swimming contract).

In ASP.NET Core, interfaces dominate because DI requires them. But when building a domain model with shared behavior, abstract classes still have their place.`,

// Q59 - Interface inherit another Interface?
`Yes, interfaces can inherit from other interfaces, and they can inherit from MULTIPLE interfaces. This is how you build up larger contracts from smaller, focused ones.

For example, I might have a basic IReadable interface with a Read() method, and an IWritable interface with a Write() method. Then I create IReadWritable that inherits from both — 'interface IReadWritable : IReadable, IWritable { void Flush(); }'. Now IReadWritable combines both contracts and adds its own Flush() method.

A class implementing IReadWritable must implement ALL methods — Read() from IReadable, Write() from IWritable, and Flush() from IReadWritable itself. It gets the full combined contract.

This is different from class inheritance where you can only inherit from ONE class. Interface inheritance supports multiple inheritance because there's no ambiguity — interfaces are just contracts, there's no implementation to conflict.

This pattern is common in .NET. IList<T> inherits from ICollection<T> which inherits from IEnumerable<T>. Each level adds more capabilities. IList has index access, ICollection adds Count and Add, IEnumerable provides basic iteration. When you implement IList, you must implement everything from all three levels.

The design principle here is Interface Segregation — keep interfaces small and focused, then compose larger interfaces from smaller ones. This way, consumers can depend on only the capabilities they actually need.`,

// Q60 - Multiple Interface Implementation?
`A class can implement as many interfaces as it needs. This is C#'s way of achieving multiple inheritance behavior safely.

For example, an Invoice class in a business application might implement IPrintable (can be printed), IEmailable (can be sent via email), IExportable (can be exported to PDF/Excel), and IAuditable (tracks who created/modified it). Each interface defines a specific capability, and the Invoice class provides implementations for all of them.

The syntax is simple — 'class Invoice : IPrintable, IEmailable, IExportable, IAuditable'. The class must implement every method from every interface.

You can also combine class inheritance with multiple interfaces — 'class Invoice : Document, IPrintable, IEmailable'. Here Invoice inherits shared code from Document AND implements two interface contracts. The class always comes first, followed by interfaces.

The power of multiple interface implementation shines with polymorphism. The same Invoice object can be treated differently depending on the context. The print service sees it as IPrintable. The email service sees it as IEmailable. The export service sees it as IExportable. Each service only knows about the capability it cares about.

This is the foundation of the Dependency Inversion Principle. High-level modules define interfaces for what they need. Low-level modules implement those interfaces. The same object can satisfy multiple consumers through different interfaces.

In my project, if we adopted proper DI, a single service class could implement ILoginService and ISessionService if those capabilities are closely related. But following Interface Segregation, it's usually better to keep interfaces focused and have separate implementing classes.`,

// Q61 - Interface Segregation Principle?
`Interface Segregation Principle says that clients should not be forced to depend on interfaces they don't use. In simple terms — keep your interfaces small and focused. Don't create one fat interface with everything.

Let me explain with a bad example first. Suppose I have one big IWorker interface with methods Work(), Eat(), Sleep(), Code(), and Manage(). Now a Robot class implements IWorker — but robots don't eat or sleep. It's forced to implement methods that make no sense for it, probably throwing NotImplementedException. A Manager implements IWorker but doesn't code. This is a violation of ISP.

The fix is to split into smaller, focused interfaces. IWorkable has just Work(). IFeedable has Eat() and Sleep(). ICodable has Code(). IManageable has Manage(). Now a Developer implements IWorkable, IFeedable, and ICodable — only what it actually does. A Robot implements IWorkable and ICodable — no Eat or Sleep forced on it. A Manager implements IWorkable, IFeedable, and IManageable — no Code forced on it.

A real-world example from my domain — instead of one massive IAuditRepository with GetAll, GetById, Add, Update, Delete, Search, Export, GenerateReport, we could split into IReadRepository with just read operations and IWriteRepository with write operations. A reporting service that only reads data depends on IReadRepository — it doesn't need to know about write operations at all.

The benefit is — smaller interfaces are easier to implement, easier to mock in tests, and changes to one interface don't affect unrelated consumers. It follows the principle of least privilege — each component knows only what it needs to know.`,

// Q62 - Dependency Injection using Interfaces?
`Dependency Injection using interfaces is one of the most important patterns in modern .NET development. It's how we achieve loose coupling, testability, and swappability.

The problem without DI — if my OrderService directly creates 'new SqlOrderRepository()' inside itself, it's tightly coupled to that specific implementation. I can't test OrderService without a real database. I can't switch to a different repository without modifying OrderService. It violates the Dependency Inversion Principle.

The solution — OrderService depends on an IOrderRepository INTERFACE, not the concrete class. The actual implementation is provided from outside through the constructor. OrderService doesn't know or care whether it's getting SqlOrderRepository, MongoRepository, or a MockRepository for testing.

In ASP.NET Core, this is built-in. In Program.cs, I register the mapping: 'builder.Services.AddScoped<IOrderRepository, SqlOrderRepository>()'. Now whenever any class requests IOrderRepository through its constructor, the DI container automatically provides a SqlOrderRepository instance.

For testing, I can create a mock: 'var mockRepo = new Mock<IOrderRepository>()' and pass it directly to OrderService. No database needed. I can control exactly what data the mock returns and verify that the service called the right repository methods.

In my current project, we use a static Singleton pattern instead of proper DI — 'LoginBLL.Instance'. If I were refactoring, I would define ILoginService with the login methods, register it as scoped in DI, and inject it into the controller. This would make our BLL layer testable and follow SOLID principles properly.

This pattern is the backbone of modern ASP.NET Core applications. Almost everything is registered in DI — services, repositories, DbContext, configuration, logging, HTTP clients.`,

// Q63 - IDisposable interface?
`IDisposable is an interface that provides a mechanism for releasing unmanaged resources deterministically. It has a single method — Dispose().

Why do we need it? The Garbage Collector handles managed memory automatically. But unmanaged resources — like database connections, file handles, network sockets, COM objects — are NOT managed by the GC. If you don't release them explicitly, they remain open until the finalizer runs, which is unpredictable. This can lead to resource exhaustion — running out of database connections, file locks preventing access, etc.

When a class implements IDisposable, it's telling consumers "I hold resources that need explicit cleanup. Call Dispose() when you're done with me."

The proper way to use IDisposable objects is with the 'using' statement. 'using (var conn = new SqlConnection(connStr)) { ... }' guarantees Dispose() is called at the end, even if an exception occurs. In C# 8+, the shorter 'using var conn = new SqlConnection(connStr);' disposes at the end of the enclosing scope.

The full Dispose pattern includes a protected virtual Dispose(bool disposing) method, a flag to prevent double-disposal, and calling GC.SuppressFinalize(this) to tell the GC "I've already cleaned up, no need to run my finalizer."

Common IDisposable types you'll encounter — SqlConnection, DbContext, FileStream, StreamReader, StreamWriter, HttpClient (though for HttpClient, prefer IHttpClientFactory), MemoryStream, and any wrapper around native resources.

In my project, our OracleHelper creates connections and disposes them in finally blocks. Ideally, we should use 'using' statements more consistently to ensure connections are always properly closed even when exceptions occur.`,

// Q64 - IEnumerable vs ICollection vs IList?
`These three interfaces form a hierarchy, each adding more capabilities. IEnumerable is the most basic, ICollection adds to it, and IList adds even more.

IEnumerable of T is the most basic — it only supports forward-only iteration. You can use it with foreach and LINQ methods. It has no Count property, no Add or Remove, no index access. It supports deferred execution, meaning elements are produced one at a time as you iterate. It's the foundation of LINQ.

ICollection of T extends IEnumerable and adds Count property, Add(), Remove(), Clear(), and Contains() methods. You know how many elements there are without iterating, and you can modify the collection. But you still can't access elements by index.

IList of T extends ICollection and adds index-based access — you can do list[0], list[5]. It also adds Insert() at a specific position, RemoveAt() by index, and IndexOf() to find an element's position.

The best practice is to use the LEAST specific type that meets your needs. If a method only needs to iterate over items, accept IEnumerable — this makes it work with any collection type. If it needs to count or add items, use ICollection. If it needs index access, use IList.

For return types, the same principle applies. Return IEnumerable if the caller only needs to iterate. This gives you flexibility to change the internal implementation without affecting callers.

In my project, our OracleHelper returns List of T, but if we were designing a more flexible API, we could return IEnumerable of T from the repository layer and let the service layer decide whether to materialize it into a List.`,

// Q65 - IComparable vs IComparer?
`IComparable and IComparer both deal with comparing objects, but they work differently.

IComparable of T is implemented BY the object itself — the object knows how to compare ITSELF to another object of the same type. It provides a single default sort order. The method is CompareTo() which returns negative (this comes first), zero (equal), or positive (other comes first).

For example, if Employee implements IComparable of Employee, I might compare by Salary by default. Now when I call employees.Sort(), it uses this default comparison. Every Employee object knows how to compare itself to another Employee.

IComparer of T is an EXTERNAL class that compares two objects. It's separate from the objects being compared. It provides alternative sort orders. The method is Compare(x, y) with the same negative/zero/positive return convention.

For example, I might create a NameComparer class that implements IComparer of Employee to sort by name, and a SalaryDescComparer to sort by salary descending. I pass these to Sort() when I want a different order: 'employees.Sort(new NameComparer())'.

The key difference — IComparable gives you ONE default sort built into the class. IComparer gives you MULTIPLE reusable sort strategies external to the class.

In practice, implement IComparable for the most natural sort order of your type. Create IComparer implementations for alternative sorts that you need. Modern C# often uses lambda expressions instead of separate comparer classes: 'employees.OrderBy(e => e.Name)' achieves the same without creating a class.`,

// Q66 - this keyword?
`The 'this' keyword refers to the current instance of the class. It has four main uses in C#.

First, distinguishing between a field and a parameter when they have the same name. If my constructor has a parameter called 'name' and my class has a field called 'name', I use 'this.name = name' to clarify — this.name is the field, plain name is the parameter. Without 'this', the parameter shadows the field.

Second, passing the current object as an argument to another method. For example, in an event system where I need to register the current object: 'EventManager.Subscribe(this)'. I'm passing the actual current instance to another class.

Third, constructor chaining within the same class. If I have a parameterless constructor that should call the 2-parameter constructor with default values: 'public Employee() : this("Unknown", 0) { }'. The 'this' here calls another constructor in the same class.

Fourth, implementing fluent APIs where methods return the current object. Each method does its work and returns 'this', allowing method chaining: 'builder.Select("*").From("Products").Where("Price > 100")'. Each method returns 'this' so the next method can be called on the same object.

Important limitation — 'this' cannot be used in static methods because static methods belong to the class, not to any instance. There is no "current instance" in a static context.

In extension methods, 'this' appears in the first parameter as a special syntax: 'public static int WordCount(this string str)'. This isn't the same usage — it's telling C# that this is an extension method on the string type.`,

// Q67 - static keyword?
`The 'static' keyword means the member belongs to the TYPE itself, not to any instance. You access it through the class name, not through an object.

A static field is shared across ALL instances. For example, if Employee has a 'static int TotalCount', every Employee object shares the same count. Creating a new employee increments TotalCount for everyone. You access it as Employee.TotalCount, not emp.TotalCount.

A static method operates without any instance. Math.Abs(), Console.WriteLine(), File.ReadAllText() — these don't need an object. You call them on the class name directly. Static methods cannot access instance members because there's no 'this' — there's no specific object to reference.

A static constructor runs only ONCE, automatically, the first time the class is used. It initializes static members. It has no access modifier and no parameters. Use it for one-time setup like loading configuration.

A static class cannot be instantiated at all and can only contain static members. Examples are Math, Console, File, Convert. Use static classes for utility methods that don't need any state.

In my project, our BLL classes use a static Instance property for the Singleton pattern. Our InputValidator is a static class with all static methods — it doesn't need any state, just processes input and returns results. Our OracleHelper is NOT static because each instance holds a connection string, but in hindsight, since the connection string comes from configuration and doesn't change, it could be static.

The key rule — use static when something is shared across all instances or doesn't need instance state at all. Use instance members when each object needs its own copy of data.`,

// Q68 - static vs non-static?
`The fundamental difference is about ownership and lifecycle.

Static members belong to the CLASS. There's ONE copy shared by everything. They're accessed via the class name. They exist for the entire application lifetime. They cannot access instance members. They cannot use the 'this' keyword. Use them for shared utilities, constants, counters, or stateless operations.

Non-static (instance) members belong to each OBJECT. Each object has its own copy. They're accessed via object reference. They exist only while the object exists. They CAN access both static and instance members. They CAN use 'this'. Use them for object-specific data and behavior.

A practical example — in a BankAccount class, InterestRate might be static because it's the same for all accounts. Balance is instance because each account has its own balance. A static method SetInterestRate() changes the rate for everyone. An instance method CalculateInterest() uses both the static rate and the instance balance.

Important accessibility rule — instance methods can access static members (because static exists regardless of instances). But static methods CANNOT access instance members (because which instance would they refer to? There could be thousands).

In ASP.NET Core, this matters for DI lifetimes. A Singleton service is like a static — one instance for the whole app. A Scoped service is instance-based — one per request. Mixing them incorrectly (Singleton capturing Scoped) causes bugs because the Singleton's static-like lifetime keeps the Scoped object alive longer than intended.

In my project, our BLL Singleton instances are effectively static — they're created once and shared across all requests. This works because they're stateless. If they held per-request data, we'd have serious thread-safety issues.`,

// Q69 - Extension Method?
`Extension Methods allow you to add new methods to existing types WITHOUT modifying their source code, without inheriting from them, and without recompiling them. The methods appear as if they're instance methods on the type.

The syntax requires three things — the method must be in a static class, must be a static method, and the first parameter must use the 'this' keyword followed by the type you're extending.

For example, I create a static StringExtensions class with a method 'public static int WordCount(this string str)'. Now I can call "Hello World".WordCount() as if WordCount were a built-in string method. IntelliSense even shows it alongside regular string methods.

This is powerful because you can extend types you don't own. You can't modify the String class — it's sealed and part of .NET. But you can add extension methods to it for your project's needs. Same for any third-party library type.

The entire LINQ library is built on extension methods. Where(), Select(), OrderBy(), ToList() — these are all extension methods on IEnumerable of T. That's why any collection can use LINQ methods even though those methods don't exist in the collection classes themselves.

In ASP.NET Core, extension methods are heavily used for configuration. 'builder.Services.AddControllers()', '.AddSwagger()', '.AddAuthentication()' — these are all extension methods on IServiceCollection that keep the configuration code clean and chainable.

In my project, we have extension methods in our Helpers project for common utilities. If I were refactoring, I'd create extension methods for our custom validations, date formatting, and Oracle-specific type conversions.

Key limitation — if an instance method with the same name exists, the instance method wins. Extension methods can't access private/protected members of the type they extend.`,

// Q70 - Generic class/method?
`Generics allow you to write type-safe, reusable code that works with ANY data type. Instead of writing separate classes or methods for int, string, Employee, Product, you write ONE generic version that works for all types.

Without generics, you'd either create separate classes for each type (code duplication) or use 'object' type which loses type safety and causes boxing/unboxing performance issues.

A Generic Method takes a type parameter: 'public T GetMax<T>(T a, T b) where T : IComparable<T>'. The T is a placeholder — when you call GetMax(5, 10), T becomes int. When you call GetMax("abc", "xyz"), T becomes string. One method handles all types.

A Generic Class works the same way: 'public class Repository<T> where T : class'. Now I can have Repository<Product>, Repository<Employee>, Repository<Order> — all from one class definition. Each gets compile-time type checking specific to its type.

The benefits are significant. Type safety — the compiler checks types at compile time, so errors are caught early. Performance — no boxing/unboxing for value types because the runtime generates specific code for each type. Code reuse — one class serves all types. IntelliSense works correctly because the IDE knows the actual type.

In .NET, generics are everywhere. List<T>, Dictionary<TKey, TValue>, IEnumerable<T>, Task<T>, Func<T, TResult> — all generic. In my project, our OracleHelper has GetRecords<T>() and GetRecord<T>() methods that return strongly-typed objects from database queries using reflection to map DataTable columns to class properties.

Generic constraints (where T : class, where T : new(), where T : IEntity) restrict what types can be used, ensuring your generic code can safely call methods or access properties on the type parameter.`,

// Q71 - Generic Constraints?
`Generic Constraints restrict which types can be used as type arguments. They're specified with the 'where' keyword and ensure your generic code can safely perform operations on the type parameter.

The available constraints are — 'where T : class' means T must be a reference type like a class, interface, or delegate. 'where T : struct' means T must be a value type like int, decimal, or custom struct. 'where T : new()' means T must have a public parameterless constructor, so you can create instances with 'new T()'. 'where T : BaseClass' means T must inherit from that specific class. 'where T : IInterface' means T must implement that interface. 'where T : notnull' means T cannot be nullable.

Why do we need constraints? Without them, the compiler doesn't know what T can do. If I want to call CompareTo() on T, the compiler says "I don't know if T has CompareTo." But if I add 'where T : IComparable<T>', now the compiler knows T definitely has CompareTo and allows the call.

You can combine multiple constraints: 'where T : class, IEntity, new()' means T must be a reference type, must implement IEntity, and must have a parameterless constructor. This is very useful for repository patterns where you need to create instances and access common properties.

Multiple type parameters can have different constraints: 'class Mapper<TSource, TDest> where TSource : class where TDest : class, new()'. Source just needs to be a class, but Dest also needs a constructor so we can create new instances during mapping.

In my project, our OracleHelper uses 'GetRecords<T>()' without explicit constraints, but it relies on reflection and Activator.CreateInstance which effectively requires a parameterless constructor at runtime. Adding 'where T : new()' would make this a compile-time check instead of a runtime failure.`,

// Q72 - Boxing and Unboxing?
`Boxing and Unboxing are about converting between value types and reference types, and they have significant performance implications.

Boxing is when a value type is converted to a reference type. The value gets copied from the Stack into a new object allocated on the Heap. It's implicit — happens automatically without you writing any cast. For example, 'object obj = 42' — the integer 42 is boxed into an object on the heap.

Unboxing is the reverse — extracting the value type from the object back to the stack. It requires an explicit cast: 'int number = (int)obj'. The runtime checks if the object actually contains the expected type — if not, you get an InvalidCastException.

Why does this matter? Performance. Boxing allocates memory on the heap, creating pressure on the Garbage Collector. In a loop that boxes millions of times, this becomes a real performance problem. The old ArrayList class caused boxing for every value type you added because it stored everything as 'object'. Adding integers to ArrayList meant boxing each one.

Generics solve this problem. List<int> stores integers directly without boxing because the runtime generates specific code for int. No object allocation, no GC pressure, no casting needed. This is why generic collections are always preferred over non-generic ones.

Common places where boxing still happens — string concatenation with value types ("Value: " + number causes boxing), string.Format with value types, assigning value types to interface variables (IComparable comp = 5 causes boxing because interface is a reference type).

In my project, since we use List<T> and generic methods, we avoid most boxing scenarios. But if we were using DataTable or ArrayList, boxing would be happening constantly.`,

// Q73 - Value Type vs Reference Type?
`This is a fundamental concept that affects how data is stored, copied, and compared in C#.

Value Types are stored directly on the Stack. They hold the actual data. When you assign one to another, it creates a completely independent COPY. They cannot be null (unless you use Nullable<T>). They're destroyed automatically when they go out of scope — no garbage collection needed. Examples are int, double, bool, char, decimal, struct, enum, DateTime, Guid.

Reference Types are stored on the Heap, with a reference (pointer) on the Stack. They hold a reference to the data, not the data itself. When you assign one to another, both variables point to the SAME object — changes through one variable are visible through the other. They can be null. They're cleaned up by the Garbage Collector. Examples are class, string, array, interface, delegate, object.

Let me give the classic example that interviewers love. If I have 'int a = 10; int b = a; b = 20;' — a is still 10 because b got an independent copy. But if I have 'Employee e1 = new Employee{Name="John"}; Employee e2 = e1; e2.Name = "Jane";' — now e1.Name is ALSO "Jane" because both variables reference the same object.

String is a special case — it's a reference type but behaves like a value type because it's immutable. When you "modify" a string, you actually create a new string object.

This understanding is crucial for avoiding bugs. If you pass a class object to a method and the method modifies it, the caller sees the changes. If you pass a struct, the method gets a copy and the caller's original is unchanged. This is why parameters like 'ref' and 'out' exist — to pass value types by reference when needed.`,

// Q74 - Stack vs Heap memory?
`Stack and Heap are two regions of memory used differently by the runtime.

The Stack is a LIFO (Last In, First Out) structure. It stores local variables, method parameters, and value types. Memory is allocated and deallocated automatically as methods are called and return — it's extremely fast because it just moves a pointer. Each thread has its own stack. It's limited in size (usually 1-4 MB). When a method finishes, all its local variables are instantly cleaned from the stack.

The Heap is a dynamic memory pool. It stores objects (reference types), arrays, and anything created with 'new'. Memory is managed by the Garbage Collector — it runs periodically to find and free objects that are no longer referenced. It's shared across threads. It's large (limited only by system memory) but slower to allocate and access because of the indirection (you follow a pointer to get to the data).

When you write 'int x = 10', x lives on the Stack with value 10 directly. When you write 'Employee emp = new Employee()', the reference 'emp' lives on the Stack, but the actual Employee object lives on the Heap. The stack variable holds the memory address of the heap object.

When a method exits, its stack frame is popped — all local value types and references are gone instantly. But the heap objects they referenced remain until the GC determines they're no longer reachable and collects them.

This is why value types are faster for small, short-lived data — no GC involvement, immediate cleanup. But for complex objects that need to persist beyond a method call or be shared across methods, you need heap allocation through reference types.

Understanding this helps with performance decisions. Excessive object creation means more GC pressure. Using structs for small, frequently-created data reduces heap allocations. But large structs are bad because they get copied entirely on assignment.`,

// Q75 - Garbage Collection?
`Garbage Collection in .NET is automatic memory management. It finds and frees memory occupied by objects that are no longer referenced by any part of your program.

How it works — you create objects using 'new' and they're allocated on the heap. You never explicitly free memory (no 'delete' or 'free' like in C++). When an object has no references pointing to it, it becomes eligible for garbage collection. The GC periodically runs, identifies unreachable objects, frees their memory, and compacts the heap to reduce fragmentation.

When does an object become eligible? When you set the reference to null, when the reference goes out of scope, or when you reassign the reference to a different object. The original object, if nothing else references it, is now unreachable.

When does the GC actually run? It's non-deterministic — you don't know exactly when. It typically runs when the system is low on memory, when the heap reaches a threshold, or when GC.Collect() is explicitly called (which you should almost never do in production).

Benefits — no memory leaks (mostly), no dangling pointers, no manual memory management. Developers focus on logic, not memory. The GC handles circular references too — if A references B and B references A but nothing else references either, both are collected.

The cost — GC introduces brief pauses when it runs ("stop the world" pauses). It has overhead from tracking references and scanning the heap. Non-deterministic timing means you can't control exactly when memory is freed.

For unmanaged resources (file handles, DB connections, network sockets), you must still handle cleanup explicitly through IDisposable/Dispose because the GC doesn't know about these. It only manages managed heap memory.`,

// Q76 - GC Generations?
`The Garbage Collector uses a generational approach to optimize collection performance. The key insight is — most objects die young.

Generation 0 is for newly created objects. This is where all objects start. Gen 0 is collected most frequently because most objects are short-lived — local variables, temporary objects, method results. Collection is very fast because Gen 0 is small. In typical applications, over 90% of objects never make it past Gen 0.

Generation 1 is a buffer zone. Objects that survive a Gen 0 collection get promoted to Gen 1. These are objects that lived a bit longer than average but might still die soon. Gen 1 is collected less frequently than Gen 0.

Generation 2 is for long-lived objects. Objects that survive Gen 1 collection get promoted here. These are typically static data, cached objects, singleton instances, objects referenced for the application's lifetime. Gen 2 collection is the most expensive — it's a full collection that scans the entire heap. It happens least frequently.

The Large Object Heap (LOH) is for objects larger than 85KB. These go directly to Gen 2 and are collected with Gen 2. LOH is not compacted by default (to avoid moving large blocks of memory).

Why generations work — instead of scanning the entire heap every time, the GC usually only scans Gen 0 (small, fast). Only when Gen 0 collection doesn't free enough memory does it expand to Gen 1 or Gen 2. This makes most GC pauses very short.

Practical implications — avoid unnecessary object creation in hot paths (loops). Use object pooling for expensive objects. Implement IDisposable to release resources before GC runs. Avoid finalizers (they delay collection by one generation). Consider struct for small, short-lived data to skip the heap entirely.`,

// Q77 - Dispose pattern vs Finalizer?
`Dispose and Finalizer both handle resource cleanup, but they work very differently and you should strongly prefer Dispose.

Dispose is deterministic — YOU control when it runs. You call it explicitly or use 'using' statement. It can release both managed resources (like closing a DbContext) and unmanaged resources (like closing a file handle). It's fast and predictable. This is the recommended approach.

Finalizer (destructor ~ClassName) is non-deterministic — the GC decides when it runs. You have no control over timing. It should only release unmanaged resources (not managed, because managed objects might already be collected by the time your finalizer runs). It's slow and adds GC overhead.

Why finalizers are expensive — objects with finalizers survive an extra GC generation. Instead of being collected immediately when unreachable, they go to a special finalization queue. The finalizer thread runs them. Only THEN can they be collected in the next GC cycle. So they live at least one generation longer, consuming memory.

The complete Dispose pattern combines both as a safety net. Implement IDisposable with Dispose() that handles all cleanup. Optionally add a finalizer as backup in case Dispose isn't called. In Dispose(), call GC.SuppressFinalize(this) to skip the finalizer since you've already cleaned up.

The pattern uses a Dispose(bool disposing) method. When called from Dispose() (disposing=true), clean up both managed and unmanaged resources. When called from finalizer (disposing=false), only clean up unmanaged resources because managed objects might already be gone.

In practice — always use 'using' for IDisposable objects. Only implement finalizers if your class directly wraps unmanaged resources (rare in application code). Most developers only implement Dispose, not finalizers.`,

// Q78 - using statement?
`The 'using' statement ensures that Dispose() is called automatically on an IDisposable object when you're done with it, even if an exception occurs. It's syntactic sugar for a try-finally block.

The traditional syntax is: 'using (var conn = new SqlConnection(connStr)) { conn.Open(); /* use connection */ }'. At the closing brace, Dispose() is called automatically. Even if an exception is thrown inside the block, the finally block ensures Dispose() runs.

C# 8 introduced the using declaration — simpler syntax without the block: 'using var conn = new SqlConnection(connStr);'. Dispose() is called at the end of the enclosing scope (when the method returns or the block ends). This is cleaner when you use the resource for the rest of the method.

You can stack multiple using statements for multiple resources: 'using var conn = new SqlConnection(connStr); using var cmd = new SqlCommand(sql, conn); using var reader = cmd.ExecuteReader();'. All three get disposed in reverse order when the scope ends.

Internally, 'using' translates to: try { /* create and use resource */ } finally { resource?.Dispose(); }. The finally block guarantees cleanup regardless of how the code exits — normal return, exception, or break.

Common types that need 'using' — SqlConnection, DbContext, FileStream, StreamReader, StreamWriter, HttpClient (though prefer IHttpClientFactory), MemoryStream, and any class implementing IDisposable.

In my project, our OracleHelper should use 'using' statements more consistently. Currently we have try-finally blocks that manually close connections, but 'using' is cleaner and less error-prone. This is one of the refactoring improvements I would make.`,

// Q79 - Dispose vs Finalize?
`Let me clearly differentiate these two for the interview.

Dispose is called by the developer explicitly or through the 'using' statement. It runs when YOU decide. It releases both managed and unmanaged resources. It's fast with no GC overhead. It's implemented through the IDisposable interface with a public Dispose() method. You can call it multiple times safely (the pattern includes a _disposed flag). It's the RECOMMENDED approach for all resource cleanup.

Finalize (destructor) is called by the Garbage Collector automatically. It runs when the GC decides — which is unpredictable. It should only release unmanaged resources. It's slow and causes objects to survive an extra GC cycle. It's implemented with the ~ClassName() syntax. It's called only once by the GC. It's meant as a SAFETY NET only.

The key question in interviews is "which should you use?" The answer is — always implement Dispose. Only add a Finalizer if your class directly owns unmanaged resources AND you want protection against developers forgetting to call Dispose.

When both exist together, Dispose should call GC.SuppressFinalize(this) to tell the GC "I've already cleaned up, skip my finalizer." This avoids the extra GC cycle penalty.

Practical advice — in 99% of application code, you only implement Dispose. Finalizers are for framework-level code or classes that directly wrap Win32 handles, COM objects, or native memory. If you're using managed wrappers like SqlConnection (which already handles its own native resources), you just call Dispose on them — you don't write your own finalizer.

In my projects, we should consistently use 'using' statements for all database connections and file operations. This ensures Dispose is always called without relying on the GC as a backup.`,

// Q80 - What is a Delegate?
`A Delegate is a type-safe function pointer — it holds a reference to a method and allows you to invoke that method through the delegate variable. Think of it as a variable that stores a method instead of data.

The key idea is that methods become first-class citizens — you can pass them as parameters, store them in variables, return them from methods, and invoke them dynamically.

You first declare a delegate type that defines the method signature: 'public delegate int MathOperation(int a, int b)'. This says "any method that takes two ints and returns an int can be assigned to this delegate."

Then you create a delegate instance pointing to a matching method: 'MathOperation operation = Add;'. Now 'operation(5, 3)' calls the Add method. You can reassign it: 'operation = Multiply;' — now the same variable calls Multiply.

Delegates are the foundation of several important C# features. Callbacks — pass a method to another method to be called later (like "when the download completes, call this method"). Events — the publisher-subscriber pattern is built on delegates. LINQ — Where(), Select(), OrderBy() all take delegates (as Func or lambda expressions) to define the operation.

In modern C#, we rarely declare custom delegate types because of the built-in generic delegates. Action for methods that return void, Func for methods that return a value, and Predicate for methods that return bool. Lambda expressions provide concise syntax for creating delegates inline.

In my project, we use delegates extensively through LINQ queries. When we write '.Where(e => e.IsActive)', that lambda is compiled into a delegate that the Where method invokes for each element. Understanding delegates is essential for understanding LINQ, events, and async callbacks.`,

// Q81 - Single vs Multicast Delegate?
`All delegates in C# are actually multicast delegates — they can hold references to multiple methods and invoke them all in sequence.

A single-cast delegate points to one method and returns that method's result directly. A multicast delegate points to multiple methods using += to add and -= to remove. When invoked, it calls ALL methods in the order they were added.

For example, I might have a notification delegate. I add SendEmail to it with +=, then add SendSms with +=, then add LogToFile with +=. When I invoke the delegate with a message, all three methods execute in sequence — the email is sent, the SMS is sent, and the log is written.

There's an important detail about return values with multicast delegates. When multiple methods are chained and they all return values, only the LAST method's return value is captured by the caller. The earlier methods execute and their return values are discarded. If you need all return values, you must use GetInvocationList() to call each method individually and collect results.

Another important consideration is exception handling. If one method in the chain throws an exception, the remaining methods DON'T execute. The exception propagates immediately. If you need guaranteed execution of all methods, you must iterate through GetInvocationList() and wrap each call in try-catch.

Multicast delegates are the foundation of events in C#. When multiple subscribers subscribe to an event, internally it's a multicast delegate with += adding each handler. When the event fires, all handlers are called.

In practice, you rarely use multicast delegates directly. You use events for the publisher-subscriber pattern, and single delegates (Func, Action) for callbacks and LINQ.`,

// Q82 - Func, Action, Predicate?
`These are built-in generic delegate types that eliminate the need to declare custom delegate types for most scenarios.

Action represents a method that takes parameters but returns VOID. Action with no generic parameter is void Method(). Action<string> is void Method(string). Action<int, string> is void Method(int, string). You can have up to 16 parameters. Use Action when you want to DO something without returning a result — like logging, printing, updating UI.

Func represents a method that takes parameters and RETURNS a value. The LAST generic parameter is always the return type. Func<int> is int Method(). Func<string, int> is int Method(string). Func<int, int, bool> is bool Method(int, int). Use Func when you need to compute, transform, or decide something.

Predicate represents a method that takes ONE parameter and returns BOOL. Predicate<int> is bool Method(int). It's essentially the same as Func<T, bool> but more readable for filtering scenarios. It's used in older APIs like List.FindAll() and List.Exists().

In LINQ, these are used everywhere. Where() takes Func<T, bool> — a function that decides whether each element passes the filter. Select() takes Func<T, TResult> — a function that transforms each element. ForEach() takes Action<T> — an action to perform on each element.

With lambda expressions, creating these is concise: 'Func<int, int, int> add = (a, b) => a + b;' or inline: 'numbers.Where(n => n > 5)' where 'n => n > 5' is a Func<int, bool>.

In my project, we use Func and Action extensively with LINQ queries for filtering, projecting, and processing data from our Oracle queries. Understanding these three types is essential for working effectively with LINQ and modern C#.`,

// Q83 - Anonymous Method?
`An Anonymous Method is a method without a name, defined inline using the 'delegate' keyword. It was introduced in C# 2.0 as a way to create inline delegates without declaring a separate named method.

Before anonymous methods, if you wanted to pass a callback, you had to create a separate named method: 'bool IsAdult(int age) { return age >= 18; }' and then assign it: 'Func<int, bool> check = IsAdult;'. With anonymous methods, you write it inline: 'Func<int, bool> check = delegate(int age) { return age >= 18; };'.

The key feature of anonymous methods is that they can capture outer variables — this is called a closure. The method can access and use variables from its enclosing scope, even after that scope has technically ended. For example, 'int threshold = 100; Func<int, bool> isAbove = delegate(int value) { return value > threshold; };' — the threshold variable is "captured" by the anonymous method.

However, anonymous methods have been largely superseded by Lambda Expressions introduced in C# 3.0. Lambdas provide a much more concise and readable syntax for the same functionality. 'delegate(int x) { return x * 2; }' becomes simply 'x => x * 2'. The lambda is shorter, cleaner, and easier to read.

You'll still see anonymous methods in older codebases, but in modern C#, lambdas are the standard. The only scenario where the older syntax might be preferred is when you want a delegate that takes no parameters and ignores parameters — 'delegate { DoSomething(); }' can match any delegate signature. But this is rare.

Understanding anonymous methods helps you appreciate the evolution of C# — from named methods to anonymous methods to lambdas, each iteration making callback code more concise and readable.`,

// Q84 - Lambda Expression?
`A Lambda Expression is a concise way to write anonymous methods using the => syntax. It's the modern, preferred way to create inline delegates in C#.

The syntax is: (parameters) => expression_or_block. For single expressions: 'x => x * 2' takes x and returns x doubled. For multiple statements: '(a, b) => { var sum = a + b; return sum * 2; }' uses a block with explicit return.

Shorthand rules — single parameter doesn't need parentheses: 'x => x > 5'. No parameters use empty parentheses: '() => Console.WriteLine("Hello")'. Single expression doesn't need braces or return keyword: '(a, b) => a + b'.

Lambdas are used EVERYWHERE in modern C#. LINQ queries: '.Where(p => p.Price > 100).Select(p => p.Name).OrderBy(p => p.Name)'. Event handlers: 'button.Click += (sender, e) => HandleClick()'. Async operations: 'Task.Run(() => ProcessData())'. DI configuration: 'services.AddScoped<IService>(sp => new Service(sp.GetService<IDep>()))'.

Lambdas can capture outer variables (closures): 'int min = 18; var adults = people.Where(p => p.Age >= min);'. The 'min' variable is captured — if you change min before the query executes, the new value is used.

There's the classic interview trap with closures in loops. 'for(var i=0; i<3; i++) { actions.Add(() => Console.Write(i)); }' — all three print 3 because they capture the same variable i. Fix with 'let' in LINQ or by creating a local copy inside the loop.

In my project, lambdas are in every LINQ query, every collection operation, and every callback. They're the most commonly used C# feature after basic syntax.`,

// Q85 - What is an Event?
`An Event is a mechanism for one class (publisher) to notify other classes (subscribers) when something interesting happens. It's built on delegates but adds encapsulation and safety.

The publisher declares an event: 'public event Action<Order> OrderPlaced;'. Subscribers register handlers using +=: 'orderService.OrderPlaced += SendConfirmationEmail;'. When the event fires, all subscribers are notified: 'OrderPlaced?.Invoke(order);'.

The key difference between an event and a plain delegate is SAFETY. With a plain public delegate, anyone can invoke it, replace all handlers with =, or inspect the invocation list. With an event, only the declaring class can invoke it. Outside code can only += (subscribe) or -= (unsubscribe). You can't accidentally overwrite all handlers or trigger someone else's event.

The typical pattern involves EventArgs for passing data. You define 'public class OrderEventArgs : EventArgs { public int OrderId; public decimal Amount; }'. The event signature is 'public event EventHandler<OrderEventArgs> OrderPlaced;'. Subscribers get the sender and event data: 'void OnOrderPlaced(object sender, OrderEventArgs e) { /* use e.OrderId */ }'.

Real-world usage in my domain — when an audit observation is submitted, the system should notify the Audit Manager (email), update the dashboard (UI), and log the action (audit trail). Instead of the submission code knowing about all these concerns, it raises an event. Each concern subscribes independently. Adding a new notification (like SMS) means just adding a new subscriber — no change to the submission code.

Events implement the Observer pattern and promote loose coupling — the publisher doesn't know or care who's listening. Subscribers can be added or removed without affecting the publisher.`,

// Q86 - Delegate vs Event?
`The difference between a delegate and an event comes down to encapsulation and safety.

A public delegate field is like a public variable — anyone can read it, replace it, or invoke it. If I have 'public Action<string> OnMessage;', any code can do 'OnMessage = null' (removing all subscribers), 'OnMessage = MyMethod' (replacing all subscribers with just one), or 'OnMessage("hello")' (triggering it from outside). This is dangerous in a multi-subscriber scenario.

An event adds restrictions. Outside the declaring class, you can ONLY do += (subscribe) and -= (unsubscribe). You cannot invoke the event from outside. You cannot assign = to replace all handlers. You cannot read the invocation list. Only the class that declares the event can fire it.

Think of it like a radio station. The delegate is like giving everyone access to the broadcast booth — anyone can hit the button. The event is like a proper radio — the station (publisher) controls when to broadcast, listeners (subscribers) can only tune in or tune out.

When to use which — use events for notifications where one class informs others about something happening. Use delegates (Func, Action) for callbacks and functional programming scenarios where you're passing behavior as a parameter.

In ASP.NET Core, events are used in framework components. For example, application lifetime events. In my project's email notification system, if we refactored to use events, the observation submission code would raise an ObservationSubmitted event, and email, logging, and dashboard update services would subscribe independently. This would be cleaner than our current approach where the BLL directly calls email sending.

The rule is simple — if something is a notification that multiple parts of the system might care about, use an event. If you're passing a specific action to be performed, use a delegate.`,

// Q87 - Publisher-Subscriber pattern?
`Publisher-Subscriber is a messaging pattern where the sender of a message (publisher) doesn't know who will receive it, and receivers (subscribers) don't know who sent it. They're completely decoupled.

The Publisher has an event and raises it when something happens. It doesn't know or care how many subscribers exist or what they do. Even if there are zero subscribers, the publisher works fine.

Subscribers register their interest using += on the event. They provide a handler method that will be called when the event fires. Multiple subscribers can listen to the same event. They don't know about each other.

In code, a StockMarket publisher might have an event 'StockChanged'. A TradingBot subscribes and automatically buys when price drops. An AlertService subscribes and sends notifications. A Logger subscribes and records price history. Each operates independently — adding or removing one doesn't affect the others.

This pattern promotes loose coupling and extensibility. Want to add SMS notifications when stock changes? Just create a new SmsNotifier class that subscribes to StockChanged. No changes to StockMarket, TradingBot, or AlertService. This follows the Open/Closed Principle — open for extension, closed for modification.

In my Audit project, the concept applies to our notification system. When an observation status changes, multiple actions need to happen — email to manager, update dashboard count, write audit log, potentially send SMS. Currently these are hard-coded in sequence. With Pub-Sub, the status change would publish an event, and each notification type would subscribe independently.

In larger systems, this pattern is implemented through message queues like RabbitMQ or Azure Service Bus, where publishers and subscribers don't even need to be in the same application.`,

// Q88 - Callback using Delegates?
`A Callback is a method that gets passed as a parameter to another method and is called when an operation completes. Delegates make this possible in C# by allowing methods to be passed as values.

The basic pattern is — I have a long-running operation and I want to be notified when it's done, or I want to let the caller decide what happens at a certain point in my operation.

For example, a download method might accept two callbacks — one for success and one for failure: 'void DownloadFile(string url, Action<string> onSuccess, Action<Exception> onError)'. The caller provides what should happen in each case without the download method knowing the specifics.

Another example is progress reporting: 'void ProcessItems(List<Item> items, Action<int> progressCallback)'. Inside the processing loop, after each batch, we call 'progressCallback(percentComplete)'. The caller can update a progress bar, log to console, or do nothing — the processing method doesn't care.

Callbacks were the primary async pattern before async/await. You'd start an operation and provide a callback for when it completes. The problem was "callback hell" — nested callbacks becoming unreadable. Modern C# uses async/await which is cleaner but internally still uses callbacks through Task continuations.

In modern C# with async/await, the callback pattern is less common for async operations. But it's still useful for synchronous scenarios like strategy pattern (pass different algorithms), event-like notifications within a method, progress reporting with IProgress<T>, and LINQ where every method accepts a callback (the lambda) to define the operation.

In my project, our AJAX success/error callbacks in JavaScript are essentially this pattern. The server responds, and we pass what to do on success versus what to do on error.`,

// Q89 - What is Exception Handling?
`Exception Handling is a mechanism to handle runtime errors gracefully without crashing the application. Instead of the program terminating with an error, we catch the exception, handle it appropriately, and allow the program to continue or fail gracefully.

Without exception handling, if code throws an error — like dividing by zero, accessing a null object, or failing to connect to a database — the application crashes immediately with an ugly error message. The user sees a stack trace or a generic "application has stopped working" message.

With exception handling using try-catch-finally, we wrap risky code in a try block, catch specific exceptions and handle them appropriately, and use finally for cleanup that must happen regardless of success or failure.

The key concepts are — an Exception is an object representing the error with properties like Message, StackTrace, and InnerException. The 'try' block contains code that might throw. The 'catch' block handles specific exception types. The 'finally' block always executes for cleanup. The 'throw' keyword raises exceptions.

Best practices include — catch specific exceptions rather than general Exception (so you can handle each differently). Never swallow exceptions silently (empty catch blocks hide bugs). Use finally or 'using' for resource cleanup. Throw meaningful custom exceptions with context. Log exceptions for debugging. Show user-friendly messages to end users while logging technical details internally.

In my project, we have multiple levels of exception handling. Global exception handler middleware catches anything that bubbles up. API controllers catch business logic exceptions and return appropriate status codes. The DAL catches database exceptions and returns empty results with error logging. The frontend shows toast notifications for user-friendly error messages.`,

// Q90 - try-catch-finally?
`The try-catch-finally structure is how we handle exceptions in C#. Each part has a specific role.

The try block wraps code that might throw an exception. This is where you put your risky operations — database calls, file access, parsing, network requests. If no exception occurs, the catch blocks are skipped entirely.

The catch block handles specific exceptions when they occur. You can have multiple catch blocks for different exception types, ordered from most specific to most general. The runtime matches the thrown exception against catch blocks from top to bottom and executes the FIRST matching one. Only one catch block executes per exception.

The finally block ALWAYS executes — whether an exception occurred or not, whether it was caught or not, even after a return statement in try or catch. It's used for cleanup code that must run regardless — closing connections, releasing file handles, restoring state. It's the guarantee.

The ordering rule for catch blocks is crucial. Specific exceptions must come before general ones. If you put 'catch(Exception)' first, it catches everything and the specific catches below are unreachable — the compiler will actually give you an error for this.

A try block must be followed by at least one catch OR a finally (or both). You can have try-catch, try-finally, or try-catch-finally.

A practical pattern from my project — try to execute a database operation, catch SqlException for database-specific errors (connection timeout, constraint violation), catch a general Exception for unexpected errors, and finally ensure the connection is closed and disposed regardless of what happened. This way, database errors get specific handling (maybe retry), unexpected errors get logged, and resources are always cleaned up.`,

// Q91 - throw vs throw ex?
`This is a common interview question about preserving the stack trace when rethrowing exceptions.

'throw' by itself (rethrow) preserves the ORIGINAL stack trace. It shows exactly where the exception first occurred — the original line number deep in the call stack. This is what you should use when you catch an exception, log it, and want to let it propagate further. The debugging information stays intact.

'throw ex' resets the stack trace to the CURRENT line. It loses all information about where the exception originally occurred. The stack trace only shows from this point upward. This makes debugging much harder because you can't see the root cause location.

Let me give you a scenario. An error occurs at line 50 inside SomeMethod(). In the calling code, I catch it, log it, and rethrow. With 'throw;', the stack trace still shows line 50 in SomeMethod — I can find the exact problem location. With 'throw ex;', the stack trace only shows my catch block's line number — the original location is lost forever.

The third option is 'throw new CustomException("message", ex)' — wrapping the original in a new exception and passing it as the InnerException parameter. This preserves the original stack trace inside InnerException while adding your own context message. This is the proper way to add context when rethrowing.

The rule is simple — always use 'throw;' for rethrow. Never use 'throw ex;'. If you need to add context, wrap it: 'throw new DataAccessException("Failed to save order", ex);' where ex becomes the InnerException.

In my project, our error handling uses try-catch with logging and then lets the exception propagate. We should always use 'throw;' in these cases to preserve the stack trace for debugging.`,

// Q92 - Custom Exception?
`Custom Exceptions represent domain-specific errors in your application. Instead of throwing generic Exception with different messages, you create specific exception types that clearly communicate what went wrong.

The convention is to inherit from Exception (not ApplicationException which is deprecated) and end the class name with "Exception". You should provide at least three constructors — parameterless, message only, and message with inner exception.

For example, in my audit module, I might create InsufficientPermissionException when a user tries to approve their own observation. Or ObservationNotFoundException when someone requests an observation ID that doesn't exist. Or AuditDeadlineExceededException when trying to submit after the deadline.

The benefit of custom exceptions is type-based catching. Instead of catching Exception and checking the message string, I can catch the specific type: 'catch (ObservationNotFoundException ex) { return NotFound(); } catch (InsufficientPermissionException ex) { return Forbid(); }'. Each exception type gets its own handling logic.

You can add custom properties for additional context. An InsufficientFundsException might have CurrentBalance and RequestedAmount properties. A NotFoundException might have EntityName and EntityId properties. These provide structured information beyond just a message string.

Best practices — only create custom exceptions when you need type-based handling. Don't create them for every possible error — it leads to exception type explosion. Use them for business-level errors that callers need to distinguish and handle differently. For unexpected errors that just need logging, the built-in Exception types are fine.

In my project, creating custom exceptions for our workflow violations would improve our error handling significantly — instead of checking error message strings, we'd catch specific exception types and respond appropriately.`,

// Q93 - Exception hierarchy?
`The exception hierarchy in .NET follows an inheritance structure rooted at System.Exception. Understanding this hierarchy helps you catch exceptions at the right level of specificity.

At the top is System.Exception — the base class for ALL exceptions. Everything inherits from it. You should rarely catch at this level unless it's a last-resort handler.

System.SystemException covers runtime and CLR errors — things like NullReferenceException, IndexOutOfRangeException, InvalidOperationException, DivideByZeroException, StackOverflowException. These are typically programming errors that indicate bugs in your code.

System.ArgumentException is for invalid method arguments. It has children — ArgumentNullException (argument was null), ArgumentOutOfRangeException (argument outside valid range). These clearly communicate what parameter was wrong.

System.IO.IOException covers file and I/O errors. Children include FileNotFoundException and DirectoryNotFoundException. Useful for specific file operation error handling.

Your custom exceptions typically inherit directly from Exception.

The catching rule is — catch from most specific to most general. If you're doing file operations, catch FileNotFoundException first (specific handling like "file doesn't exist, create it"), then IOException (general I/O errors like "disk full"), then Exception (unexpected errors). The first matching catch wins.

If you catch Exception at the top, nothing below it will ever execute because Exception matches everything. The compiler enforces this — it gives an error if you put a more general catch before a more specific one.

Practically, I catch specific exceptions when I can handle them meaningfully. For everything else, I let them propagate to the global handler where they get logged and a user-friendly error is returned.`,

// Q94 - finally block always execute?
`The finally block ALMOST always executes. There are very few edge cases where it doesn't.

Normal scenarios where finally RUNS — after try completes normally, after a catch handles an exception, after throw or rethrow in catch, after a return statement in try, after a return statement in catch. In all these cases, finally executes before control leaves the method.

This is what makes finally perfect for resource cleanup. Whether the code succeeds, fails, or returns early, the finally block ensures connections are closed, files are released, and locks are freed.

Edge cases where finally does NOT run — Environment.FailFast() which terminates immediately without any cleanup. StackOverflowException which crashes the process. Power failure or process kill from outside. An infinite loop in try or catch that never reaches finally.

A subtle point about return values — if try has 'return 1' and finally has code (but not a return), the method returns 1 but finally runs BEFORE the return actually completes. If finally also has a return, it overrides the try's return value — but this is bad practice and compilers warn about it.

In my project, our OracleHelper uses finally blocks to ensure database connections are always closed: 'finally { if(conn.State == ConnectionState.Open) conn.Close(); conn.Dispose(); }'. This prevents connection leaks even when queries fail. The modern approach would be 'using' statements which achieve the same thing more cleanly, and I'd use those in a refactor.`,

// Q95 - System.Exception vs ApplicationException?
`System.Exception is the base class for all exceptions and is what you should inherit from when creating custom exceptions.

System.ApplicationException was originally intended to be the base for application-specific exceptions, while SystemException would be for CLR/runtime errors. The idea was to distinguish between "our code's errors" and "framework errors."

However, Microsoft has officially deprecated this distinction. They now recommend that custom exceptions should inherit directly from Exception, NOT from ApplicationException. The reason is that the distinction was never useful in practice — nobody catches ApplicationException specifically, and there's no real benefit to having an extra level in the hierarchy.

ApplicationException still exists for backward compatibility, but it adds no functionality over Exception. It's just an empty class that inherits from Exception.

The current best practice is simple — inherit custom exceptions from Exception. Name them ending with "Exception". Provide the standard three constructors. Don't use ApplicationException.

This is a quick factual question in interviews. The answer is: "ApplicationException is deprecated. Microsoft recommends inheriting from Exception directly for custom exceptions. The ApplicationException vs SystemException distinction was abandoned because it provided no practical value."`,

// Q96 - Exception filters (when keyword)?
`Exception filters using the 'when' keyword add a condition to a catch block. The catch only executes if both the exception type matches AND the when condition is true.

The syntax is: 'catch (HttpRequestException ex) when (ex.StatusCode == 404)'. This catches the exception ONLY if it's an HttpRequestException AND the status code is 404. If the condition is false, the runtime continues looking at subsequent catch blocks.

This is cleaner than catching broadly and using if-else inside. Without 'when', you'd catch HttpRequestException and then check the status code inside, potentially re-throwing if it doesn't match. With 'when', the runtime skips the catch entirely if the condition doesn't match — and the stack trace is preserved because the exception was never actually caught.

Useful scenarios — handling different HTTP error codes differently, handling SQL exceptions by error number (duplicate key vs connection timeout), catching exceptions only when a specific condition is met (like a retry count).

A clever trick is using 'when' for logging without catching: 'catch (Exception ex) when (LogException(ex))' where LogException always returns false. The exception gets logged but never caught — it continues propagating. The stack trace is completely untouched because the catch block never executes.

Benefits over catch-and-rethrow — better performance (no stack unwinding for non-matching conditions), preserved stack trace, cleaner code, and the debugger stops at the original throw location rather than the rethrow location.

In my project, we could use exception filters to handle different Oracle error codes differently — connection timeout versus constraint violation versus deadlock — each requiring different handling logic.`,

// Q97 - Array vs ArrayList?
`Array and ArrayList are both collections, but they differ significantly in type safety, size flexibility, and performance.

Array is fixed-size and type-safe. When you create 'int[] numbers = new int[5]', it holds exactly 5 integers and nothing else. You can't add a 6th element, you can't put a string in it. The size is determined at creation and cannot change. There's no boxing for value types because the array stores the actual values directly. Access is O(1) by index.

ArrayList is dynamic-size but NOT type-safe. It stores everything as 'object'. You can add integers, strings, booleans, anything to the same ArrayList — there's no compile-time checking. For value types like int, every Add() causes boxing (wrapping in an object on the heap), and every retrieval requires unboxing and casting back. It can grow dynamically as you add items.

The performance problem with ArrayList is boxing. If you add a million integers, you create a million object wrappers on the heap, causing massive GC pressure. Retrieving requires casting: '(int)list[0]' — if the type is wrong, you get a runtime error, not a compile-time error.

The modern solution is List<T> which gives you BOTH dynamic sizing AND type safety without boxing. 'List<int> numbers = new List<int>()' — it grows as needed, only accepts integers, no boxing, no casting needed.

In modern C#, there's almost NEVER a reason to use ArrayList. Always use List<T>. ArrayList exists only for backward compatibility with very old .NET code. If you see ArrayList in a codebase, it's a sign of legacy code that should be refactored.

In my project, we use List<T> for all our in-memory collections. Our OracleHelper returns List<T> from GetRecords<T>() which provides type safety and good performance.`,

// Q98 - ArrayList vs List<T>?
`This continues from the previous question. Let me be very specific about the differences since this is commonly asked.

ArrayList stores everything as 'object'. This means no type safety at compile time — you can add anything and the compiler won't complain. But at runtime, wrong casts throw InvalidCastException. Value types get boxed on add and unboxed on retrieval — this is expensive. IntelliSense can't help you because it doesn't know what type is stored. It's in the System.Collections namespace.

List<T> is type-safe through generics. The compiler ensures only the specified type is added. No boxing for value types because the runtime generates specific code for each type. IntelliSense works perfectly because the IDE knows the exact type. It's in System.Collections.Generic namespace.

The performance difference is measurable. In benchmarks, List<int> can be 3-5x faster than ArrayList for value types because of eliminated boxing. For reference types, the difference is smaller (no boxing involved) but List<T> still wins on the casting overhead elimination.

List<T> also has a richer API with type-safe methods: Find(predicate), FindAll(predicate), ConvertAll(), Exists(), TrueForAll(). These all work with the specific type T, providing compile-time safety.

Common List<T> operations — Add(), Remove(), Contains(), Sort(), Find(), Where() (LINQ), FirstOrDefault() (LINQ), ForEach(). All type-safe, all with IntelliSense support.

The rule is absolute — never use ArrayList in new code. Always use List<T>. If you inherit legacy code with ArrayList, refactoring to List<T> is usually straightforward and worthwhile for the type safety and performance gains.`,

// Q99 - Dictionary<TKey, TValue>?
`Dictionary is a collection that stores key-value pairs with O(1) average lookup time. It's one of the most useful collections for scenarios where you need fast access by a known key.

Internally, Dictionary uses a hash table. When you add a key-value pair, the key is hashed to determine where to store the value. When you look up by key, it hashes the key again to find the value directly — without searching through all elements. This is why lookups are O(1) regardless of how many items are stored.

The rules — keys must be UNIQUE. If you try to add a duplicate key, you get an ArgumentException. Keys cannot be null for reference types. Values can be duplicates and can be null. The order of elements is not guaranteed (use SortedDictionary if you need ordering).

Common operations — Add(key, value) or dict[key] = value to insert. dict[key] to retrieve (throws if key doesn't exist). TryGetValue(key, out value) for safe retrieval without exception. ContainsKey(key) to check existence. Remove(key) to delete.

TryGetValue is the preferred pattern for lookups: 'if (dict.TryGetValue("age", out int age)) { /* use age */ } else { /* not found */ }'. This avoids the exception that dict[key] throws for missing keys and is a single lookup (versus ContainsKey followed by indexer which does two lookups).

In my project, dictionaries are useful for caching frequently accessed data, grouping related items by a key, configuration lookups, and building lookup tables from database results. For example, mapping employee codes to names for display without repeated database calls.`,

// Q100 - List vs Dictionary vs HashSet?
`These three collections serve different purposes. Choosing the right one depends on what operations you need to perform.

List<T> is an ordered collection with index access. It maintains insertion order, allows duplicates, and you can access elements by position like list[0]. Searching for an element is O(n) — it must check each element. Use List when you need ordered items, allow duplicates, need index access, or frequently iterate through all elements.

Dictionary<TKey, TValue> is a key-value lookup table. Each entry has a unique key mapped to a value. Lookup by key is O(1). No index access — you access by key, not position. Use Dictionary when you need fast lookup by a known key, like "give me the employee with ID 5" or "what's the configuration value for this setting name."

HashSet<T> is a collection of unique values with O(1) membership testing. It automatically removes duplicates. No index access, no key-value pairs — just unique items. Contains() check is O(1). It also supports set operations like Union, Intersect, and Except. Use HashSet when you need unique items and fast "does this exist" checks.

Practical examples — storing a list of orders for display: List<Order>. Looking up product details by ID: Dictionary<int, Product>. Tracking which user IDs have already been processed: HashSet<int>.

Performance comparison for Contains: List is O(n) — scans every element. Dictionary.ContainsKey is O(1). HashSet.Contains is O(1). If you're frequently checking "is this item in the collection?", HashSet or Dictionary dramatically outperform List.

In my project, we use List for most collections returned from database queries. If we need fast lookups, we convert to Dictionary using LINQ's ToDictionary(). If we need to track unique items processed, HashSet is the right choice.`,

// Q101 - IEnumerable vs IQueryable?
`This is a critical question for anyone working with databases. The difference is WHERE the filtering happens.

IEnumerable<T> works in memory on the client side. When you use IEnumerable to query a database through EF or similar, it first loads ALL records into memory, and THEN applies your Where, OrderBy, and other operations in C# code on the application server. This can be catastrophically slow for large tables.

IQueryable<T> builds an expression tree and executes on the SERVER (database). Your Where, OrderBy, and other operations are translated into SQL and sent to the database. Only the matching results come back. The database does the heavy lifting.

The practical difference — if I have a Products table with a million rows and I want products where Price > 100: with IEnumerable, the SQL is 'SELECT * FROM Products' (gets ALL million rows into memory, then C# filters). With IQueryable, the SQL is 'SELECT * FROM Products WHERE Price > 100' (database filters, only matching rows transfer).

The rule — keep data as IQueryable as long as possible. Call .ToList() or .ToListAsync() only at the end when you're ready to materialize the results. This allows the database to do all the filtering, sorting, and paging.

Another powerful aspect of IQueryable is query composition. You can build queries step by step: start with _context.Products, conditionally add .Where() for search, add .OrderBy() for sorting, add .Skip().Take() for pagination — and the SINGLE optimized SQL query is only generated and executed when you finally call .ToListAsync().

In my project, since we use raw SQL through OracleHelper rather than EF Core, we handle this manually — building the SQL query with WHERE clauses, ORDER BY, and pagination at the database level. The concept is the same, just implemented differently.`,

// Q102 - yield keyword?
`The yield keyword creates an iterator that returns elements one at a time using lazy evaluation. Instead of building an entire collection in memory and returning it all at once, yield produces elements on demand as the consumer requests them.

When you write 'yield return item' inside a method that returns IEnumerable<T>, the method doesn't execute all at once. It pauses after each yield return, remembers its position, and continues from there when the next element is requested.

For example, a method GetEvenNumbers(int max) that loops from 0 to max and yields each even number. If max is a million, it doesn't create a list of 500,000 numbers in memory. It produces them one at a time as the consumer iterates with foreach or LINQ.

The benefits are significant. Memory efficiency — only one element exists in memory at a time, not the entire collection. Lazy evaluation — elements are only computed when needed. If the consumer stops early (like .Take(5)), remaining elements are never generated. Infinite sequences become possible — you can have a Fibonacci generator that yields forever, and just Take() what you need.

'yield break' stops the iteration entirely. It's like a return statement for iterators — no more elements will be produced.

The deferred nature means the code inside the method doesn't run until someone starts iterating. If you call GetEvenNumbers(1000000), nothing happens yet. Only when you foreach over the result or call ToList() does it start executing.

In practice, yield is used in custom LINQ-like methods, data streaming scenarios, and anywhere you want lazy computation. Many LINQ operators internally use yield — that's how deferred execution works.`,

// Q103 - What is LINQ?
`LINQ stands for Language Integrated Query. It provides a unified syntax to query data from different sources — in-memory collections, databases, XML, and more — using a consistent API directly in C#.

Before LINQ, querying a list required manual loops with if conditions. Querying a database required SQL strings. Querying XML required XPath. Each had different syntax and patterns. LINQ unified all of these with one approach.

There are two syntaxes. Query syntax looks like SQL: 'from p in products where p.Price > 100 orderby p.Name select p.Name'. Method syntax uses extension methods: 'products.Where(p => p.Price > 100).OrderBy(p => p.Name).Select(p => p.Name)'. Both produce the same result. Method syntax is more common in practice because it's more flexible and chains well.

LINQ works with different providers. LINQ to Objects queries in-memory collections (List, Array). LINQ to Entities queries databases through EF Core — expressions are translated to SQL. LINQ to XML queries XML documents.

Two important characteristics. First, deferred execution — defining a query doesn't execute it. Execution happens when you iterate (foreach) or materialize (ToList, Count, First). This allows query composition — building queries step by step. Second, strongly typed — you get compile-time checking and IntelliSense support, unlike SQL strings where errors are only found at runtime.

In my project, every collection operation uses LINQ. Filtering audit observations, grouping by department, calculating totals, finding specific records. Without LINQ, we'd need loops everywhere. With LINQ, complex operations are expressed in one readable chain of method calls.

LINQ is probably the most productivity-boosting feature of C# — it makes data manipulation code 3-5x shorter and much more readable than equivalent loops.`,

// Q104 - Common LINQ methods?
`Let me walk through the most commonly used LINQ methods grouped by purpose.

Filtering — Where() is the most used. It takes a predicate and returns only matching elements: '.Where(p => p.Price > 100)'. OfType<T>() filters by type when you have a mixed collection.

Projection — Select() transforms each element: '.Select(p => p.Name)' extracts just names. SelectMany() flattens nested collections: if each customer has a list of orders, SelectMany gives you all orders in one flat list.

Ordering — OrderBy() and OrderByDescending() sort by a key. ThenBy() adds secondary sorting: '.OrderBy(p => p.Category).ThenBy(p => p.Name)'.

Aggregation — Count() for total elements, Sum() for totals, Average(), Min(), Max(). These force immediate execution and return a single value.

Element selection — First() gets the first element (throws if empty). FirstOrDefault() returns default if empty (null for reference types, 0 for int). Single() expects exactly one match (throws if 0 or 2+). SingleOrDefault() for 0 or 1.

Quantifiers — Any() checks if at least one element matches. All() checks if every element matches. Contains() checks for a specific item.

Set operations — Distinct() removes duplicates. Union() combines without duplicates. Intersect() finds common elements. Except() finds elements in first but not second.

Partitioning — Take(n) gets first n items. Skip(n) skips first n items. Together they do pagination: '.Skip(20).Take(10)' for page 3 with 10 items per page.

Grouping — GroupBy() groups elements by a key and returns IGrouping objects. Essential for reports.

Conversion — ToList(), ToArray(), ToDictionary(), AsEnumerable(), AsQueryable(). These materialize the query or change the type.

In my project, we chain these together constantly: '.Where(o => o.Status == "Active").OrderByDescending(o => o.Date).Skip(page * size).Take(size).Select(o => new OrderDto { ... }).ToList()'. One readable line replaces what would be 20+ lines of loop code.`,

// Q105 - throw vs throw ex
`The difference between 'throw' and 'throw ex' in a catch block is about preserving the stack trace. When you write just 'throw' without anything, it rethrows the original exception with the complete original stack trace intact, so you can trace exactly where the error originated.

But 'throw ex' resets the stack trace to the current line. You lose the information about where the exception actually happened deeper in the call stack. This makes debugging much harder because you only see the catch block as the origin.

Best practice: always use just 'throw' if you want to rethrow after logging or partial handling. The only time you might use 'throw ex' is if you intentionally want to hide internal details from callers, which is rare.

There's also 'throw new CustomException(message, ex)' which wraps the original as InnerException. This is the best approach when you want to add context while preserving the original error chain. In my project, we catch OracleException in the DAL, log it, then throw a custom BusinessException with the original as inner exception so the BLL layer gets meaningful error context.`,

// Q106 - Custom Exception
`A Custom Exception is a user-defined exception class that represents specific error conditions in your application. You create it by inheriting from Exception (or a more specific exception like InvalidOperationException).

To create one: public class AuditNotFoundException : Exception. You should provide at least three constructors: parameterless, one with message, and one with message and inner exception. This follows the standard exception pattern.

Why use custom exceptions: they make error handling more specific and meaningful. Instead of catching generic Exception everywhere, you can catch AuditNotFoundException separately from ValidationException and handle each differently. They also carry domain-specific data as additional properties.

For example: throw new AuditNotFoundException(auditId) where the exception class has an AuditId property. The caller catches it specifically and returns a 404 with a meaningful message.

In my project, we have custom exceptions like AuditNotFoundException, UnauthorizedAccessException (our own), and ValidationException. The BLL throws these, and the controller catches them to return appropriate HTTP responses — 404 for not found, 403 for unauthorized, 400 for validation errors.`,

// Q107 - Exception hierarchy in .NET
`All exceptions in .NET inherit from System.Exception, which is the base class. The hierarchy branches into two main categories:

System.SystemException — exceptions thrown by the runtime/CLR: NullReferenceException, IndexOutOfRangeException, StackOverflowException, OutOfMemoryException, InvalidCastException, DivideByZeroException. These indicate programming bugs usually.

System.ApplicationException — was intended for application-specific exceptions. However, Microsoft now recommends inheriting directly from Exception instead of ApplicationException for custom exceptions.

Common hierarchy: Exception > SystemException > ArgumentException > ArgumentNullException, ArgumentOutOfRangeException. Exception > IOException > FileNotFoundException. Exception > SqlException (from ADO.NET).

Important exceptions to know: ArgumentNullException (null passed where not allowed), InvalidOperationException (operation not valid for current state), NotImplementedException (method not yet implemented), NotSupportedException (operation not supported), ObjectDisposedException (using a disposed object).

In my project, we catch specific exceptions: OracleException for database errors, HttpRequestException for API call failures, JsonException for deserialization issues. Each is handled differently with appropriate user-facing messages.`,

// Q108 - finally block
`The finally block is code that executes regardless of whether an exception occurred or not. It runs after the try block completes normally or after a catch block handles an exception. Its primary purpose is cleanup — releasing resources, closing connections, disposing objects.

Does it always execute? Almost always. It executes whether an exception was thrown or not, whether the exception was caught or not, and even if there's a return statement in try or catch. The only cases where finally doesn't run: Environment.FailFast() is called, a StackOverflowException occurs, the process is killed externally, or power failure.

Common pattern: try { open connection, execute query } catch { log error } finally { close connection }. The connection is closed whether the query succeeded or failed.

However, in modern C#, the 'using' statement replaces most finally blocks for IDisposable objects. using(var conn = new OracleConnection()) is cleaner than try/finally with manual dispose.

In my project, we use 'using' statements for database connections and streams rather than explicit finally blocks. But finally is still useful for non-IDisposable cleanup like resetting state or removing temporary files.`,

// Q109 - System.Exception vs System.ApplicationException
`System.Exception is the base class for ALL exceptions in .NET. Every exception ultimately derives from it. It provides the core properties: Message, StackTrace, InnerException, HResult.

System.ApplicationException was originally intended as the base class for custom application exceptions, separating them from system/runtime exceptions. The idea was: system exceptions from SystemException, your exceptions from ApplicationException.

However, Microsoft's own guidelines now say: do NOT use ApplicationException. It adds no value. Derive custom exceptions directly from Exception instead. The ApplicationException layer was a design mistake that was never consistently followed — even Microsoft's own libraries don't follow it.

So the current best practice is simple: inherit from Exception for your custom exceptions. ApplicationException exists for backward compatibility but shouldn't be used in new code.

In my project, all our custom exceptions inherit directly from Exception: public class AuditNotFoundException : Exception. We don't use ApplicationException anywhere. This follows current Microsoft guidelines and keeps the hierarchy simple.`,

// Q110 - when keyword in catch (Exception filters)
`The 'when' keyword in catch blocks is an exception filter introduced in C# 6. It lets you add a condition to a catch block: catch(Exception ex) when (ex.Message.Contains("timeout")). The catch block only executes if both the exception type matches AND the when condition is true.

Without 'when', you'd catch the exception and check the condition inside with an if statement, rethrowing if it doesn't match. But rethrowing resets the stack trace (or requires 'throw' carefully). Exception filters don't unwind the stack until a matching filter is found, preserving the original state.

Use cases: catch specific error codes: catch(OracleException ex) when (ex.Number == 1) for unique constraint violations. Catch based on HTTP status: catch(HttpRequestException ex) when (ex.StatusCode == 404). Catch conditionally: catch(Exception ex) when (retryCount < 3).

Multiple catch blocks with filters are evaluated top to bottom. First matching filter wins. This allows granular exception handling without nested if-else inside catch blocks.

In my project, we use exception filters to handle specific Oracle error numbers differently: when(ex.Number == 1) for duplicate key, when(ex.Number == 2292) for foreign key violations, each returning a different user-friendly message.`,

// Q111 - Array vs ArrayList
`Array is strongly typed and fixed-size. You declare it with a specific type like int[] and a set length. Elements are accessed by index with O(1) performance. No boxing for value types since the type is known at compile time.

ArrayList is weakly typed (stores everything as object) and dynamically sized. It can hold mixed types in the same collection. It grows automatically as you add items. But value types get boxed when stored and unboxed when retrieved, hurting performance.

ArrayList disadvantages: no type safety (can add string to an int collection without compile error), boxing/unboxing overhead for value types, requires casting on retrieval, runtime errors instead of compile-time errors.

In modern C#, neither is commonly used for general collections. List<T> replaced ArrayList completely — it's dynamic like ArrayList but type-safe like arrays, with no boxing. Arrays are only used for fixed-size data or performance-critical scenarios.

In my project, we use List<T> for all dynamic collections. Arrays appear only when an API requires them or for fixed buffers. ArrayList is never used — it's considered legacy.`,

// Q112 - ArrayList vs List<T>
`ArrayList stores objects — no type safety, boxing for value types, casting needed on retrieval. It's from System.Collections namespace and is a legacy collection from .NET 1.0 before generics existed.

List<T> is the generic version — strongly typed, no boxing, compile-time type checking, full IntelliSense. It's from System.Collections.Generic and was introduced in .NET 2.0 with generics.

Performance: List<int> stores integers directly. ArrayList stores boxed integers (object wrapper on heap). For a million integers, ArrayList uses significantly more memory and is slower due to boxing/unboxing and garbage collection pressure.

Functionality: both are dynamic arrays that resize internally. Both support Add, Remove, Insert, Sort, IndexOf. But List<T> adds LINQ support, type-safe enumeration, and works with modern C# features.

When to use: always use List<T> in new code. The only reason to encounter ArrayList is in legacy .NET 1.x code that hasn't been updated. If you're maintaining old code with ArrayList, consider migrating to List<T>.

In my project, every collection is List<T> or Dictionary<TKey, TValue>. When the DAL returns data from Oracle, it's always typed as List<AuditDto> or similar.`,

// Q113 - Dictionary<TKey, TValue>
`Dictionary is a collection of key-value pairs with O(1) average lookup time using hash-based indexing. You access values by key instead of by position. Each key must be unique.

Declaration: var dict = new Dictionary<int, string>(). Add: dict.Add(1, "Active") or dict[1] = "Active". Access: var value = dict[1]. Check existence: dict.ContainsKey(1) or dict.TryGetValue(1, out var val) which is safer as it doesn't throw if key is missing.

Internal working: the key is hashed using GetHashCode(), and the hash determines the storage bucket. This is why lookup is O(1) — you compute the hash and go directly to the bucket instead of searching through all items.

Common use cases: caching key-value lookups, grouping data by ID, configuration settings, fast lookups by unique identifier, mapping codes to descriptions.

Thread safety: Dictionary is not thread-safe. For multi-threaded scenarios, use ConcurrentDictionary<TKey, TValue> which provides thread-safe Add, Remove, and Update operations.

In my project, we use Dictionary for in-memory lookups — like mapping status codes to display names, caching department ID to department name, and grouping audit findings by category for report generation.`,

// Q114 - List vs Dictionary vs HashSet
`List<T> is an ordered collection accessed by index. Use when you need sequential data, maintaining insertion order, or iterating all elements. Lookup by value is O(n) — it must scan each element.

Dictionary<TKey, TValue> is key-value pairs with O(1) lookup by key. Use when you need fast access by a unique identifier. Each entry has both a key and a value. Keys must be unique.

HashSet<T> is a collection of unique values with O(1) lookup. Like Dictionary but without values — just keys. Use when you need to check existence quickly or ensure no duplicates. Automatically ignores duplicate Add attempts.

Choosing: Need ordered sequential access? List. Need fast lookup by key with associated value? Dictionary. Need fast existence checking or unique collection? HashSet.

Examples: List<Audit> for a list of audit records to display. Dictionary<int, Audit> for quick lookup by audit ID. HashSet<int> for tracking which audit IDs have been processed (fast Contains check).

In my project, we use List for query results and display data, Dictionary for caching reference data by ID, and HashSet when checking if an item already exists in a collection — like checking duplicate entries during bulk import.`,

// Q115 - IEnumerable vs IQueryable
`IEnumerable is in System.Collections.Generic and works with in-memory collections. When you filter with Where() on IEnumerable, all data is loaded into memory first, then filtering happens client-side using LINQ to Objects.

IQueryable is in System.Linq and works with external data sources like databases. It builds an expression tree, and filtering is translated to SQL and executed on the server. Only matching data comes back from the database.

Performance impact: if you have a table with a million rows and want 10 matching records — with IEnumerable, all million rows are fetched then filtered in memory. With IQueryable, the WHERE clause runs on the database server and only 10 rows transfer over the network.

Deferred execution: both support deferred execution. The query doesn't run until you enumerate (foreach, ToList, Count). But IQueryable defers to the database, IEnumerable defers to in-memory iteration.

In my project, since we use ADO.NET with Oracle directly (not EF Core), we work with List<T> which implements IEnumerable. Our filtering is done in the SQL query itself with WHERE clauses, so we get the server-side filtering benefit manually rather than through IQueryable.`,

// Q116 - yield keyword
`The yield keyword enables lazy evaluation in C#. When you write yield return item inside a method that returns IEnumerable<T>, the method doesn't execute all at once. Instead, it returns one item at a time, pausing between each iteration and resuming when the next item is requested.

The method must return IEnumerable<T> or IEnumerator<T>. Each time the caller's foreach requests the next item, execution resumes from where it paused. yield break stops the iteration early.

Benefit: memory efficiency. Without yield, you'd build an entire list in memory then return it. With yield, items are produced one at a time — only one item in memory at any point. Perfect for large data sets or infinite sequences.

Example: public IEnumerable<int> GetEvenNumbers(int max) { for(int i=0; i<=max; i++) { if(i%2==0) yield return i; } }. Numbers are generated on demand, not all stored in memory.

Under the hood, the compiler generates a state machine class that tracks where execution paused and resumes from there. It's the foundation of LINQ's lazy evaluation.

In my project, we don't use yield directly much since our DAL returns complete List<T> from Oracle queries. But yield is used internally by LINQ methods like Where and Select that we use frequently.`,

// Q117 - LINQ
`LINQ (Language Integrated Query) is a set of features in C# that adds query capabilities directly into the language. Instead of writing different query syntaxes for different data sources (SQL for databases, XPath for XML, loops for collections), you use one consistent C# syntax for all.

Two syntaxes: Query syntax (from x in collection where x.Active select x.Name) and Method syntax (collection.Where(x => x.Active).Select(x => x.Name)). Both compile to the same code. Method syntax is more common in practice.

LINQ works with anything that implements IEnumerable<T> (in-memory) or IQueryable<T> (external sources). LINQ to Objects queries collections, LINQ to Entities queries databases through EF Core, LINQ to XML queries XML documents.

Key LINQ features: deferred execution (query runs only when enumerated), lambda expressions for predicates, method chaining for complex queries, strongly typed (compile-time checking of queries).

In my project, we use LINQ to Objects extensively for manipulating data after it's fetched from Oracle — filtering lists, grouping audit findings by category, ordering results, projecting entities to ViewModels with Select, and aggregating with Sum/Count/Average.`,

// Q118 - Common LINQ methods
`The most commonly used LINQ methods:

Filtering: Where(predicate) — filters elements matching a condition. OfType<T>() — filters by type.

Projection: Select(transform) — transforms each element. SelectMany(transform) — flattens nested collections.

Ordering: OrderBy, OrderByDescending, ThenBy, ThenByDescending — sorting with multiple levels.

Aggregation: Count(), Sum(), Average(), Min(), Max(), Aggregate() — compute single values from collections.

Element: First(), FirstOrDefault(), Single(), SingleOrDefault(), Last(), ElementAt() — get specific elements. Use OrDefault variants to avoid exceptions.

Quantifiers: Any(predicate) — does any match? All(predicate) — do all match? Contains(item) — exists in collection?

Grouping: GroupBy(keySelector) — groups elements by key. Returns IGrouping with Key and elements.

Set: Distinct(), Union(), Intersect(), Except() — set operations.

Joining: Join(), GroupJoin() — combine collections by key.

In my project, the most used are: Where for filtering, Select for projection to DTOs/ViewModels, OrderBy for sorting, FirstOrDefault for single lookups, Any for existence checks, ToList to materialize results, and GroupBy for report aggregations.`
];

