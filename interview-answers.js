// Correct Interview Answers - What interviewer expects to hear
// Format: { questionNumber: { answer: "...", keywords: [...] } }

var INTERVIEW_ANSWERS = {
    'oops_interview_questions': {
        1: {
            answer: "OOP is a programming paradigm that organizes code around objects which contain both data and behavior. It focuses on how objects interact with each other, hides complexity, and exposes only essential details. The 4 main features are: Encapsulation (security/data hiding), Inheritance (code reusability), Polymorphism (flexibility, same method different behavior), and Abstraction (hiding complexity). It makes code scalable, maintainable, and models real-world entities.",
            keywords: ["paradigm","object","data","behavior","encapsulation","inheritance","polymorphism","abstraction","hiding","reusability","flexibility","scalable"]
        },
        2: {
            answer: "The 4 pillars of OOP are: 1) Encapsulation - bundling data and methods together, hiding internal details using access modifiers. 2) Inheritance - a class acquires properties/methods from another class for code reuse. 3) Polymorphism - same method behaves differently, includes overloading (compile-time) and overriding (runtime). 4) Abstraction - showing only essential details, hiding complexity using abstract classes and interfaces.",
            keywords: ["encapsulation","inheritance","polymorphism","abstraction","data hiding","access modifier","code reuse","overloading","overriding","compile-time","runtime","abstract","interface"]
        },
        3: {
            answer: "In Procedural programming, code is organized as a sequence of functions/procedures that operate on data separately. In OOP, code is organized around objects that combine data and behavior together. OOP provides encapsulation, inheritance, polymorphism which procedural doesn't. OOP is better for large, complex applications. Procedural is simpler for small scripts.",
            keywords: ["procedural","functions","sequence","objects","data","behavior","together","encapsulation","inheritance","large","complex","simple"]
        },
        4: {
            answer: "A Class is a blueprint/template that defines properties and methods. An Object is an instance of a class - it's the actual entity created in memory. Class is like a design, object is the actual thing built from that design. For example, 'Car' is a class, 'myHondaCar' is an object. Class is defined once, but multiple objects can be created from it.",
            keywords: ["blueprint","template","instance","memory","properties","methods","design","multiple","created"]
        },
        5: {
            answer: "Class is a blueprint/definition, Object is an instance created from that class. Class is logical (no memory), Object is physical (occupies memory). Class is defined once, Objects can be many. Class has the structure, Object has actual values. Example: Class = Student(Name, Age), Object = student1('Rahul', 25).",
            keywords: ["blueprint","instance","memory","logical","physical","defined once","many","values","structure"]
        },
        6: {
            answer: "A Constructor is a special method that is automatically called when an object is created. It has the same name as the class, no return type. Used to initialize object properties with default or passed values. Types: Default (no parameters), Parameterized (with parameters), Copy (copies another object), Static (runs once for class-level initialization).",
            keywords: ["special method","automatically","created","same name","no return","initialize","default","parameterized","copy","static"]
        },
        7: {
            answer: "Types of constructors in C#: 1) Default Constructor - no parameters, initializes with default values. 2) Parameterized Constructor - takes parameters to set custom values. 3) Copy Constructor - creates object by copying another object. 4) Static Constructor - runs only once, initializes static members, no access modifier, no parameters. 5) Private Constructor - used in Singleton pattern, prevents external instantiation.",
            keywords: ["default","parameterized","copy","static","private","singleton","parameters","initialize","once"]
        },
        8: {
            answer: "Constructor Overloading means having multiple constructors in the same class with different parameters. The compiler decides which constructor to call based on the arguments passed. It provides flexibility to create objects in different ways. Example: Employee() for default, Employee(string name) with name, Employee(string name, int age) with both.",
            keywords: ["multiple","same class","different parameters","compiler","arguments","flexibility","overloading"]
        },
        9: {
            answer: "Constructor Chaining is one constructor calling another constructor in the same class (using 'this') or parent class (using 'base'). It avoids code duplication. 'this' keyword calls another constructor in the same class. 'base' keyword calls the parent class constructor. Execution flows from base to derived - parent constructor always runs first.",
            keywords: ["chaining","this","base","same class","parent","avoid duplication","execution","first"]
        },
        10: {
            answer: "A Destructor (Finalizer in C#) is called by the Garbage Collector before an object is removed from memory. It's used to release unmanaged resources like file handles, database connections. Syntax: ~ClassName(). You cannot call it manually, cannot overload it, no parameters, no access modifier. In modern C#, prefer IDisposable pattern with 'using' statement instead.",
            keywords: ["destructor","finalizer","garbage collector","memory","unmanaged","resources","file","connection","idisposable","using"]
        },
        11: {
            answer: "Struct is a value type stored on stack, Class is a reference type stored on heap. Struct cannot inherit (except interfaces), Class supports inheritance. Struct has no default constructor, Class can have. Struct is for small, simple data (Point, Color). Class is for complex objects with behavior. Struct is copied by value, Class is copied by reference.",
            keywords: ["value type","reference type","stack","heap","inherit","small","simple","complex","copied","struct","class"]
        },
        12: {
            answer: "A Static class cannot be instantiated (no objects), all members must be static. It's sealed implicitly (cannot be inherited). Used for utility/helper methods like Math class. Static members belong to the class itself, not instances. Accessed directly via ClassName.Method(). Only one copy exists in memory throughout the application lifetime.",
            keywords: ["static","cannot instantiate","sealed","utility","helper","math","one copy","lifetime","class itself"]
        },
        15: {
            answer: "Encapsulation is wrapping data (fields) and methods together in a class, and hiding internal details from outside. Achieved using: private fields + public properties (getters/setters), access modifiers (private, protected, internal, public). Benefits: data protection, validation in setters, flexibility to change internal implementation without affecting outside code.",
            keywords: ["wrapping","data","methods","hiding","private","public","properties","getter","setter","access modifier","protection","validation"]
        },
        23: {
            answer: "Inheritance allows a child/derived class to acquire properties and methods from a parent/base class. It promotes code reuse - write once in base, use in all derived classes. Uses ':' symbol in C#. Types: Single, Multilevel, Hierarchical. C# doesn't support multiple class inheritance (uses interfaces instead). Base keyword accesses parent members.",
            keywords: ["child","parent","derived","base","code reuse","single","multilevel","hierarchical","multiple","interface","base keyword"]
        },
        32: {
            answer: "Polymorphism means 'many forms' - same method name behaves differently based on context. Two types: 1) Compile-time (Static) - Method Overloading, same method name with different parameters, resolved at compile time. 2) Runtime (Dynamic) - Method Overriding, child class overrides parent's virtual method using override keyword, resolved at runtime based on actual object type.",
            keywords: ["many forms","compile-time","runtime","overloading","overriding","virtual","override","parameters","object type","static","dynamic"]
        },
        50: {
            answer: "Abstract class: can have constructors, fields, implemented methods + abstract methods. Single inheritance only. Use when classes share common behavior. Interface: no constructors/fields (before C#8), only method signatures. Multiple inheritance supported. Use for contracts/capabilities. Abstract = 'is-a' partial implementation. Interface = 'can-do' contract. Choose abstract when you need shared code, interface when you need multiple inheritance or pure contract.",
            keywords: ["abstract","interface","constructor","fields","single inheritance","multiple inheritance","method signature","contract","shared","is-a","can-do"]
        },
        54: {
            answer: "An Interface is a contract that defines what a class must do, without how. It contains only method signatures (before C# 8). A class implements interface using ':' and must provide implementation for ALL methods. Supports multiple interface implementation. Used for: loose coupling, dependency injection, testability, polymorphism. Example: IDisposable, IEnumerable, IComparable.",
            keywords: ["contract","method signature","implement","all methods","multiple","loose coupling","dependency injection","testability","idisposable","ienumerable"]
        },
        72: {
            answer: "Boxing is converting a value type (stack) to reference type (heap) - wrapping in object. int x=5; object obj=x; Unboxing is the reverse - extracting value type from object. int y=(int)obj; Boxing is implicit, Unboxing is explicit (needs casting). Both are expensive operations - avoid in loops. Use generics (List<int>) instead of ArrayList to avoid boxing.",
            keywords: ["boxing","unboxing","value type","reference type","stack","heap","object","implicit","explicit","casting","expensive","generics","avoid"]
        },
        73: {
            answer: "Value types store actual data on stack (int, float, bool, struct, enum). Copied by value - changing copy doesn't affect original. Reference types store reference/pointer on stack pointing to data on heap (class, string, array, delegate). Copied by reference - both variables point to same object. Value types are faster (stack), reference types for complex objects (heap with GC).",
            keywords: ["value type","reference type","stack","heap","actual data","pointer","copied","faster","complex","garbage collection"]
        },
        89: {
            answer: "Exception handling is a mechanism to handle runtime errors gracefully without crashing the application. Uses try-catch-finally blocks. try: code that might throw exception. catch: handles the exception. finally: always executes (cleanup). Common exceptions: NullReferenceException, ArgumentException, InvalidOperationException. Best practices: catch specific exceptions first, use 'throw' not 'throw ex', don't catch generic Exception unless logging.",
            keywords: ["exception","runtime","gracefully","try","catch","finally","cleanup","nullreference","specific","throw"]
        }
    }
};


// C# Interview Answers
INTERVIEW_ANSWERS['c#_interview_questions'] = {
    1: {
        answer: "C# is a modern, object-oriented, type-safe programming language developed by Microsoft for the .NET platform. It combines the power of C++ with the simplicity of Visual Basic. It's fully object-oriented, type-safe (compiler catches errors at compile time), and has automatic memory management through garbage collection. Used for web apps (ASP.NET Core), desktop (WPF), mobile (MAUI), games (Unity), and REST APIs.",
        keywords: ["object-oriented","type-safe","microsoft",".net","garbage collection","compile time","asp.net","web","desktop","mobile"]
    },
    2: {
        answer: "Value types store actual data on the stack (int, float, bool, struct, enum). They are copied by value - changing one doesn't affect the other. Reference types store a reference/pointer on stack pointing to data on the heap (class, string, array, delegate). They are copied by reference - both variables point to same object. Value types are faster but for small data, reference types for complex objects.",
        keywords: ["value type","reference type","stack","heap","actual data","pointer","copied","struct","class","faster"]
    },
    3: {
        answer: "Boxing is converting a value type to reference type - wrapping it in an object on heap. Example: int x=5; object obj=x; Unboxing is the reverse - extracting value type from object back to stack. Example: int y=(int)obj; Boxing is implicit, unboxing is explicit (needs casting). Both are expensive operations. Avoid in loops - use generics (List<int>) instead of ArrayList.",
        keywords: ["boxing","unboxing","value type","reference type","stack","heap","object","implicit","explicit","casting","expensive","generics"]
    },
    4: {
        answer: "Struct is a value type stored on stack, Class is a reference type stored on heap. Struct cannot inherit other structs (only interfaces). Struct doesn't support default constructor. Struct is best for small, lightweight data like Point, Color. Class supports inheritance, constructors, and is for complex objects with behavior. Struct is copied by value, Class by reference.",
        keywords: ["struct","class","value type","reference type","stack","heap","inherit","small","lightweight","complex","copied"]
    },
    5: {
        answer: "An Interface is a contract that defines what a class must do without implementation. It has only method signatures (before C# 8). A class must implement ALL methods. Abstract class can have both implemented and abstract methods, constructors, fields. Key difference: multiple interface inheritance allowed, only single class inheritance. Use interface for contracts/capabilities, abstract for shared base behavior.",
        keywords: ["interface","abstract","contract","method signature","implement","multiple inheritance","single inheritance","constructor","fields","shared"]
    },
    6: {
        answer: "Enum is a set of named integer constants. It makes code readable and type-safe. Default starts from 0. Can specify custom values. Used for: days of week, status codes, directions, roles. Example: enum Status { Active=1, Inactive=2, Deleted=3 }. Can cast to/from int. Use [Flags] attribute for bitwise combinations.",
        keywords: ["enum","named","constants","integer","readable","type-safe","status","values","flags"]
    },
    7: {
        answer: "break exits the current loop or switch completely - jumps to next statement after the loop. continue skips the current iteration and moves to the next iteration of the loop. Example: in a for loop, break stops the loop entirely, continue skips to next i value. Use break when you found what you need, continue when you want to skip certain items.",
        keywords: ["break","continue","loop","exits","skips","iteration","current","next","switch","stop"]
    },
    8: {
        answer: "const is a compile-time constant - value must be assigned at declaration, cannot change, implicitly static, value baked into IL code. readonly is a runtime constant - can be assigned in constructor, can be instance-level, evaluated at runtime. Use const for true constants (Pi, MaxSize). Use readonly for values set once at construction (config values, injected dependencies).",
        keywords: ["const","readonly","compile-time","runtime","constructor","static","declaration","constant","assigned","instance"]
    },
    9: {
        answer: "ref parameter must be initialized before passing to method. The method can read and modify it. out parameter doesn't need initialization - the method MUST assign a value before returning. Both pass by reference. Use ref when method needs to read+modify existing value. Use out when method produces a new value (like TryParse pattern: int.TryParse(s, out int result)).",
        keywords: ["ref","out","initialized","must assign","reference","read","modify","tryparse","before passing","before returning"]
    },
    10: {
        answer: "The 'this' keyword refers to the current instance of the class. Used to: distinguish between field and parameter with same name (this.name = name), call another constructor in same class (constructor chaining: this()), pass current object as parameter, and with extension methods. Cannot use 'this' in static methods because static belongs to class, not instance.",
        keywords: ["this","current instance","field","parameter","same name","constructor chaining","extension","static","cannot"]
    },
    11: {
        answer: "Properties provide controlled access to private fields using get and set accessors. They look like fields from outside but have method-like logic inside. Benefits: validation in setter, read-only/write-only control, encapsulation. Auto-property: public string Name { get; set; } - compiler creates backing field. Can have different access levels: public get, private set.",
        keywords: ["properties","get","set","private field","validation","encapsulation","auto-property","read-only","access","controlled"]
    },
    12: {
        answer: "Extension methods add new methods to existing types WITHOUT modifying them. Defined as static methods in a static class with 'this' keyword on first parameter. Example: public static int WordCount(this string s). Called like instance method: myString.WordCount(). LINQ is built on extension methods. Cannot override existing methods - instance methods take priority.",
        keywords: ["extension","static","this keyword","existing type","without modifying","linq","instance","priority","static class","add methods"]
    },
    13: {
        answer: "Extension methods add new methods to existing types without modifying the original class or creating derived class. Defined in a static class as static method with 'this' keyword before the first parameter (the type being extended). Called like instance methods. LINQ methods (Where, Select, OrderBy) are extension methods on IEnumerable<T>. Cannot access private members of extended type. Instance methods take priority over extension methods with same signature.",
        keywords: ["static class","static method","this keyword","existing type","without modifying","LINQ","IEnumerable","instance method","priority","first parameter"]
    },
    14: {
        answer: "Dispose is from IDisposable interface, called explicitly by developer or via 'using' statement for deterministic cleanup of unmanaged resources (files, DB connections). Finalize (destructor ~) is called by Garbage Collector non-deterministically before object is reclaimed. Dispose is preferred - you control timing. Best practice: implement both (Dispose pattern), call GC.SuppressFinalize(this) in Dispose to avoid double cleanup.",
        keywords: ["Dispose","Finalize","IDisposable","using","deterministic","Garbage Collector","unmanaged resources","GC.SuppressFinalize","destructor","explicit"]
    },
    15: {
        answer: "String is immutable - every modification creates a new string object in memory (wasteful for repeated concatenation). StringBuilder is mutable - modifies the same object in memory without creating new instances. Use String for few modifications, StringBuilder for loops/frequent concatenation. StringBuilder is in System.Text namespace. Methods: Append(), Insert(), Replace(), Remove(), ToString().",
        keywords: ["immutable","mutable","new object","same object","memory","concatenation","StringBuilder","loop","Append","System.Text","performance"]
    },
    16: {
        answer: "A delegate is a type-safe function pointer - it holds reference to a method with specific signature. Used for: callbacks, event handling, LINQ, passing methods as parameters. Predefined delegates: Action (void return), Func (with return value), Predicate (returns bool). Supports multicast (+=) to chain multiple methods. Foundation for events and lambda expressions.",
        keywords: ["function pointer","type-safe","reference to method","callback","event","Action","Func","Predicate","multicast","lambda","signature"]
    },
    17: {
        answer: "A sealed class cannot be inherited - it prevents other classes from deriving from it. Use 'sealed' keyword. Benefits: security (prevents modification of behavior), performance (JIT compiler can optimize calls since no virtual dispatch needed). String class in .NET is sealed. Sealed methods can also be used on overridden methods to prevent further overriding in derived classes.",
        keywords: ["sealed","cannot inherit","prevents derivation","security","performance","JIT","optimization","String class","sealed method","override"]
    },
    18: {
        answer: "Partial classes allow splitting a single class definition across multiple files using 'partial' keyword. All parts are combined at compile time into one class. Used for: separating auto-generated code from custom code (like Windows Forms designer), large classes, multiple developers working on same class. All parts must have same access modifier and be in same namespace/assembly.",
        keywords: ["partial","multiple files","split","compile time","combined","auto-generated","designer","same namespace","same access modifier","large class"]
    },
    20: {
        answer: "IEnumerable<T> is an interface in System.Collections.Generic that represents a forward-only, read-only sequence of elements. It has one method: GetEnumerator() which returns IEnumerator<T> for iterating with MoveNext() and Current. Used with foreach loop. LINQ extension methods work on IEnumerable<T>. It supports deferred execution - items are fetched one at a time (lazy loading). Best for in-memory collections.",
        keywords: ["IEnumerable","forward-only","read-only","GetEnumerator","foreach","LINQ","deferred execution","lazy","in-memory","iterate","sequence"]
    },
    21: {
        answer: "Early binding (static binding) - method call is resolved at compile time. Achieved through method overloading, direct method calls. Faster performance, compile-time error checking. Late binding (dynamic binding) - method call is resolved at runtime. Achieved through virtual/override, interfaces, reflection, dynamic keyword. More flexible but slower, errors caught only at runtime.",
        keywords: ["early binding","late binding","compile time","runtime","static","dynamic","overloading","virtual","override","reflection","flexible","faster"]
    },
    22: {
        answer: "IEnumerable executes queries in-memory (client side), loads all data first then filters. IQueryable executes queries on server side (translates to SQL), filters at database level. IQueryable inherits IEnumerable and adds Expression and Provider properties for query translation. Use IQueryable with EF Core/LINQ-to-SQL for efficient database queries. Use IEnumerable for in-memory collections.",
        keywords: ["IEnumerable","IQueryable","in-memory","server side","SQL","client side","database","Expression","EF Core","efficient","filter"]
    },
    23: {
        answer: "When a class implements multiple interfaces with same method name, use explicit interface implementation to resolve the conflict. Syntax: void IFirst.Method() {} and void ISecond.Method() {}. Explicit implementations cannot have access modifiers (always private), can only be called through the interface reference, not through the class instance directly.",
        keywords: ["explicit implementation","conflict","multiple interfaces","same method","interface reference","no access modifier","private","resolve","IFirst.Method"]
    },
    24: {
        answer: "Arrays are fixed-size, strongly-typed collections stored in contiguous memory. Types: Single-dimensional (int[] arr = new int[5]), Multi-dimensional/rectangular (int[,] arr = new int[3,4]), Jagged (int[][] arr - array of arrays with different row sizes). Arrays have fixed length, zero-based index, support LINQ. Array class provides methods: Sort(), Reverse(), IndexOf(), Copy(). Length property gives total elements.",
        keywords: ["fixed-size","contiguous memory","strongly-typed","single-dimensional","multi-dimensional","jagged","zero-based","Length","Sort","index"]
    },
    26: {
        answer: "Array.CopyTo() copies elements from source array to destination array starting at specified index - it uses existing destination array (must be pre-allocated). Array.Clone() creates a new array object that is a shallow copy of the original. CopyTo can copy to a specific position in destination, Clone always creates new array of same size. Both perform shallow copy (reference types still point to same objects).",
        keywords: ["CopyTo","Clone","destination array","new array","shallow copy","pre-allocated","specific index","same size","reference","copy"]
    },
    27: {
        answer: "No, multiple catch blocks cannot all execute for a single exception. Only the FIRST matching catch block executes, then control goes to finally (if present). Order matters - place most specific exceptions first, general Exception last. If you put Exception first, compiler gives error (unreachable code). However, you can have multiple catch blocks defined - just one executes per exception thrown.",
        keywords: ["first matching","only one","order matters","specific first","general last","unreachable code","finally","compiler error","single exception"]
    },
    28: {
        answer: "Singleton ensures a class has only ONE instance throughout the application lifetime and provides global access to it. Implementation: private constructor (prevents external instantiation), private static instance variable, public static method/property to get instance. Thread-safe approaches: use lock, static readonly with eager initialization, or Lazy<T>. Used for: logging, configuration, connection pools, caching.",
        keywords: ["one instance","private constructor","static","global access","thread-safe","lock","Lazy<T>","eager","logging","configuration","connection pool"]
    },
    29: {
        answer: "'throw ex' resets the stack trace - you lose original error location, stack trace starts from this line. 'throw' (without exception) re-throws the current exception preserving the original stack trace. Always use 'throw' in catch blocks to maintain debugging information. 'throw new Exception(msg, ex)' wraps original as InnerException while adding context.",
        keywords: ["throw","throw ex","stack trace","resets","preserves","re-throw","original location","InnerException","debugging","catch block"]
    },
    30: {
        answer: "Indexers allow objects to be indexed like arrays using [] syntax. Defined with 'this' keyword and parameter. Syntax: public T this[int index] { get { } set { } }. Enables accessing class elements using index notation (myObj[0]). Can be overloaded with different parameter types (int, string). Used in collections like List<T>, Dictionary. Cannot be static.",
        keywords: ["indexer","this keyword","array syntax","[]","get set","index notation","overloaded","parameter","collections","cannot be static"]
    },
    31: {
        answer: "A multicast delegate holds references to multiple methods in its invocation list. Methods are added with += and removed with -=. When invoked, all methods execute in the order they were added. Must return void (or only last method's return value is captured). If any method throws exception, remaining methods won't execute. Events in C# are built on multicast delegates.",
        keywords: ["multicast","multiple methods","invocation list","+=","-=","order","void","last return value","events","exception","chained"]
    },
    32: {
        answer: "== (equality operator) for value types compares values directly. For reference types, it compares references (memory addresses) by default unless overloaded (like string). Equals() method by default also compares references, but can be overridden to compare values (like string does). For strings, both == and Equals() compare content. Best practice: override Equals() and GetHashCode() together for custom value comparison.",
        keywords: ["==","Equals","value comparison","reference comparison","memory address","override","string","GetHashCode","overloaded","content"]
    },
    33: {
        answer: "'is' operator checks if an object is compatible with a given type - returns true/false. Does not perform conversion. 'as' operator attempts to cast and returns the casted object if successful, or null if it fails (no exception). 'as' works only with reference types and nullable types. 'is' can be used with pattern matching in C# 7+: if(obj is string s) uses s directly.",
        keywords: ["is","as","true/false","null","cast","compatible","no exception","reference types","pattern matching","check type"]
    },
    34: {
        answer: "Nullable<T> (shorthand: T?) allows value types to hold null. Example: int? x = null. Properties: HasValue (bool), Value (actual value - throws if null). Use ?? (null-coalescing) for default: int y = x ?? 0. Use ?. (null-conditional) for safe access. Useful for database fields that can be NULL, optional parameters.",
        keywords: ["Nullable","?","null","value type","HasValue","Value","??","null-coalescing","?.","database","optional"]
    },
    35: {
        answer: "Method overloading ways: 1) Different number of parameters - Add(int a) vs Add(int a, int b). 2) Different types of parameters - Print(int x) vs Print(string x). 3) Different order of parameters - Display(int a, string b) vs Display(string b, int a). Return type alone cannot differentiate overloaded methods. Also: params keyword, optional parameters (though these can cause ambiguity).",
        keywords: ["overloading","number of parameters","types","order","return type cannot","compile-time","params","optional","different signature"]
    },
    36: {
        answer: "Object pooling is a design pattern that reuses objects from a pre-created pool instead of creating new ones. Objects are borrowed from pool, used, then returned. Reduces overhead of object creation and garbage collection for expensive objects. Used for: database connections (Connection Pooling), threads (ThreadPool), HttpClient. .NET provides ObjectPool<T> in Microsoft.Extensions.ObjectPool.",
        keywords: ["pool","reuse","pre-created","borrow","return","overhead","garbage collection","connection pooling","ThreadPool","expensive objects"]
    },
    37: {
        answer: "Generics allow writing type-safe, reusable code that works with any data type without boxing/unboxing. Define with type parameter <T>. Examples: List<T>, Dictionary<TKey,TValue>, custom: class Stack<T>. Benefits: compile-time type safety, no casting needed, code reuse, better performance (no boxing for value types). Constraints (where T : class/struct/new()/interface) restrict allowed types.",
        keywords: ["generics","<T>","type-safe","reusable","boxing","compile-time","List<T>","constraints","where","performance","any data type"]
    },
    38: {
        answer: "Access modifiers control visibility/accessibility of types and members. public - accessible from anywhere. private - only within same class (default for members). protected - within class and derived classes. internal - within same assembly (default for classes). protected internal - same assembly OR derived classes. private protected (C# 7.2) - derived classes within same assembly only.",
        keywords: ["public","private","protected","internal","protected internal","private protected","visibility","accessibility","assembly","least privilege"]
    },
    39: {
        answer: "A virtual method is declared in base class with 'virtual' keyword and can be overridden in derived class using 'override' keyword. Enables runtime polymorphism - actual method called depends on object type, not reference type. If not overridden, base class version executes. 'new' keyword hides base method instead of overriding (breaks polymorphism). Virtual methods use vtable for dynamic dispatch at runtime.",
        keywords: ["virtual","override","base class","derived class","runtime polymorphism","vtable","dynamic dispatch","new keyword","hides","object type"]
    },
    40: {
        answer: "Array is fixed-size, strongly typed, stores one data type, better performance, stored in contiguous memory. ArrayList is dynamic-size (grows automatically), stores objects (any type), not type-safe, requires boxing/unboxing for value types. Array uses [], ArrayList uses Add()/Remove(). ArrayList is obsolete - use List<T> which is generic, dynamic, and type-safe.",
        keywords: ["Array","ArrayList","fixed-size","dynamic","strongly typed","object","boxing","List<T>","obsolete","contiguous","performance"]
    },
    41: {
        answer: "Value types store data directly on stack (int, float, bool, char, struct, enum, decimal). Each variable has own copy - assignment copies value. Reference types store reference on stack pointing to data on heap (class, string, array, delegate, interface, object). Assignment copies reference - both point to same object. Value types are faster, destroyed when scope ends. Reference types managed by GC, support null.",
        keywords: ["value type","reference type","stack","heap","own copy","same object","int","struct","class","GC","null","faster"]
    },
    42: {
        answer: "Serialization converts an object into a format (JSON, XML, binary) that can be stored or transmitted, and later reconstructed (deserialization). Used for: saving state to file, sending data over network, caching, API communication. In .NET: System.Text.Json (JsonSerializer), Newtonsoft.Json, XmlSerializer, BinaryFormatter (obsolete). Use [JsonIgnore] to skip properties.",
        keywords: ["serialization","deserialization","JSON","XML","binary","convert","store","transmit","JsonSerializer","Newtonsoft","state","API"]
    },
    43: {
        answer: "The 'using' statement ensures IDisposable objects are properly disposed after use, even if exceptions occur. It calls Dispose() automatically at end of block. Syntax: using(var conn = new SqlConnection()) { }. In C# 8+: using var conn = new SqlConnection(); (disposes at end of scope). Also used for namespace imports (using System;) and type aliases (using StringList = List<string>).",
        keywords: ["using","IDisposable","Dispose","automatically","exception","SqlConnection","end of block","namespace","alias","C# 8"]
    },
    44: {
        answer: "A jagged array is an array of arrays where each inner array can have different lengths (unlike rectangular arrays where all rows have same columns). Declaration: int[][] jagged = new int[3][]; jagged[0] = new int[4]; jagged[1] = new int[2]; More memory efficient when rows have varying sizes. Each inner array is stored separately on heap.",
        keywords: ["jagged","array of arrays","different lengths","varying sizes","int[][]","memory efficient","rectangular","separate","rows","heap"]
    },
    45: {
        answer: "Multithreading is executing multiple threads concurrently within a process. Each thread shares same memory space but has own execution path. In .NET: Thread class, ThreadPool, Task (TPL - Task Parallel Library), async/await. Benefits: responsive UI, parallel processing, better CPU utilization. Challenges: race conditions, deadlocks, thread safety. Use lock, Monitor, Mutex for synchronization. Task and async/await are preferred modern approach.",
        keywords: ["multithreading","concurrent","Thread","Task","async","await","TPL","race condition","deadlock","lock","parallel","synchronization"]
    },
    46: {
        answer: "Anonymous types are unnamed types created using 'new { }' syntax with object initializer. Properties are read-only and inferred by compiler. Stored in var (implicitly typed). Used for temporary data, LINQ projections (select new { Name, Age }). Compiler generates the class behind the scenes. Cannot be returned from methods (use named class or tuple instead). Scoped to method level.",
        keywords: ["anonymous","new {}","unnamed","var","read-only","LINQ","projection","temporary","compiler","cannot return","method level"]
    },
    47: {
        answer: "Hashtable is a non-generic collection (System.Collections) that stores key-value pairs using hashing for O(1) lookup. Keys must be unique, values can be null. Stores everything as object - requires boxing/unboxing, not type-safe. Replaced by Dictionary<TKey,TValue> which is generic, type-safe, and better performance. Access: hashtable[key] returns null if key not found.",
        keywords: ["Hashtable","key-value","hashing","O(1)","non-generic","object","boxing","Dictionary","type-safe","null"]
    },
    48: {
        answer: "File handling in C# uses System.IO namespace. Key classes: File (static methods: ReadAllText, WriteAllText, Exists, Delete, Copy), StreamReader/StreamWriter (for large files, line by line), FileStream (byte-level access), FileInfo (instance methods with file metadata). Use 'using' statement to ensure streams are properly closed/disposed. Async versions available: ReadAllTextAsync.",
        keywords: ["File","System.IO","StreamReader","StreamWriter","ReadAllText","WriteAllText","FileStream","using","Exists","async","dispose"]
    },
    49: {
        answer: "If you forget await, the method returns a Task instead of the actual result - code continues without waiting, exceptions are swallowed (fire-and-forget). Async deadlock occurs when you call .Result or .Wait() on async method in synchronous context (like UI thread or ASP.NET) - the thread blocks waiting for Task, but Task needs that same thread to complete. Fix: use await all the way (async/await chain), never .Result/.Wait() in sync context. Use ConfigureAwait(false) in libraries.",
        keywords: ["forget await","Task",".Result",".Wait()","deadlock","synchronous context","blocks","fire-and-forget","ConfigureAwait","async chain","swallowed"]
    },
    50: {
        answer: "Thread is OS-level execution unit, heavyweight, manual management (Thread.Start()). Task is higher abstraction over ThreadPool, lightweight, supports async/await, continuations, cancellation. Task uses ThreadPool threads efficiently. ValueTask is struct-based (no heap allocation) - use when result is often available synchronously (cached results). Use Task for most async work, ValueTask for high-performance scenarios to avoid allocation overhead.",
        keywords: ["Thread","Task","ValueTask","ThreadPool","OS-level","lightweight","heavyweight","async await","struct","no allocation","synchronous","cached"]
    },
    51: {
        answer: "CancellationToken allows cooperative cancellation of async operations. Create CancellationTokenSource, pass its Token to async methods. Call source.Cancel() to request cancellation. In async method: check token.IsCancellationRequested or call token.ThrowIfCancellationRequested(). Used with HttpClient, EF Core queries, Task.Delay. Supports timeout via CancellationTokenSource(TimeSpan). Linked tokens combine multiple sources.",
        keywords: ["CancellationToken","CancellationTokenSource","Cancel","IsCancellationRequested","ThrowIfCancellationRequested","cooperative","timeout","HttpClient","Token","linked"]
    },
    52: {
        answer: "Deferred (lazy) execution - query is NOT executed when defined, only when iterated (foreach, ToList, Count). Allows building queries incrementally. Most LINQ operators are deferred (Where, Select, OrderBy). Immediate execution - query executes right away and returns results. Triggered by: ToList(), ToArray(), Count(), First(), Sum(), ToDictionary(). Use ToList() when you need to materialize results or prevent multiple executions.",
        keywords: ["deferred","lazy","immediate","ToList","ToArray","foreach","not executed","iterated","materialize","Where","Select","Count"]
    },
    53: {
        answer: "Select does one-to-one mapping - transforms each element. Returns IEnumerable<IEnumerable<T>> for nested collections (preserves nesting). SelectMany flattens nested collections into single sequence - one-to-many mapping. Example: customers.Select(c => c.Orders) returns list of lists. customers.SelectMany(c => c.Orders) returns flat list of all orders. SelectMany = Select + flatten.",
        keywords: ["Select","SelectMany","one-to-one","one-to-many","flatten","nested","single sequence","list of lists","flat list","mapping"]
    },
    54: {
        answer: "GroupBy groups elements by key, then apply aggregates. Syntax: collection.GroupBy(x => x.Key).Select(g => new { Key = g.Key, Count = g.Count(), Avg = g.Average(x => x.Value) }). Equivalent to SQL GROUP BY with aggregate functions. Each group has Key property and is IEnumerable of elements. Can use multiple aggregates: Count(), Sum(), Average(), Min(), Max(). Use 'into' in query syntax for continuation.",
        keywords: ["GroupBy","Key","Count","Sum","Average","aggregate","IGrouping","Select","Min","Max","SQL GROUP BY"]
    },
    55: {
        answer: ".NET Framework: Windows-only, mature, full WCF/WebForms support, no cross-platform, installed system-wide, not open source initially. .NET Core/.NET 5+: cross-platform (Windows/Linux/Mac), open source, high performance, side-by-side deployment, modular (NuGet), supports microservices/containers/Docker. .NET 5+ unified both. New projects should use .NET 6/7/8+. Framework is maintenance mode only.",
        keywords: [".NET Framework",".NET Core","cross-platform","Windows-only","open source","performance","side-by-side","Docker","modular","unified",".NET 5"]
    },
    56: {
        answer: "Authentication = WHO are you? Verifies user identity (login with username/password, OAuth, JWT token validation). Authorization = WHAT can you do? Determines permissions/access rights after authentication. Authentication comes FIRST, then Authorization. In ASP.NET Core: [Authorize] attribute, AddAuthentication() for identity, AddAuthorization() with policies/roles. Examples: JWT Bearer auth, Cookie auth, Role-based/Policy-based authorization.",
        keywords: ["Authentication","Authorization","WHO","WHAT","identity","permissions","JWT","Authorize","roles","policies","login","first then"]
    }
};


// SQL Interview Answers
INTERVIEW_ANSWERS['sql_interview_questions'] = {
    1: {
        answer: "SQL is Structured Query Language used to communicate with relational databases. It's used to create, read, update, and delete data (CRUD). Types: DDL (CREATE, ALTER, DROP) for structure, DML (INSERT, UPDATE, DELETE) for data, DQL (SELECT) for queries, DCL (GRANT, REVOKE) for permissions, TCL (COMMIT, ROLLBACK) for transactions.",
        keywords: ["structured query language","relational","database","crud","ddl","dml","dql","create","select","insert","update","delete"]
    },
    2: {
        answer: "WHERE filters rows BEFORE grouping - used with individual rows, cannot use aggregate functions. HAVING filters groups AFTER GROUP BY - used with grouped results, can use aggregate functions like COUNT, SUM, AVG. Example: WHERE salary > 5000 filters rows first, HAVING COUNT(*) > 3 filters groups after grouping.",
        keywords: ["where","having","before","after","group by","aggregate","rows","groups","count","sum","filter"]
    },
    3: {
        answer: "INNER JOIN returns only matching rows from both tables. LEFT JOIN returns all rows from left table + matching from right (NULL if no match). RIGHT JOIN returns all from right + matching from left. FULL OUTER JOIN returns all rows from both tables. CROSS JOIN gives cartesian product. SELF JOIN joins table with itself (for hierarchical data like employee-manager).",
        keywords: ["inner join","left join","right join","full join","cross join","self join","matching","null","cartesian","both tables"]
    },
    4: {
        answer: "Primary Key uniquely identifies each row - cannot be NULL, only one per table, creates clustered index by default. Foreign Key references primary key of another table - maintains referential integrity, can be NULL, multiple allowed per table. Primary Key ensures uniqueness, Foreign Key ensures valid relationships between tables.",
        keywords: ["primary key","foreign key","unique","null","one per table","clustered index","referential integrity","relationship","references","multiple"]
    },
    5: {
        answer: "DELETE removes specific rows using WHERE clause. It's logged (can rollback), fires triggers, doesn't reset identity. TRUNCATE removes ALL rows. It's minimally logged, faster, resets identity counter, cannot use WHERE. DROP removes the entire table structure + data permanently. Use DELETE for specific rows, TRUNCATE to empty table, DROP to remove table completely.",
        keywords: ["delete","truncate","drop","where","rollback","trigger","identity","faster","structure","permanent","logged"]
    },
    6: {
        answer: "An Index is a data structure that speeds up data retrieval (like a book index). Clustered Index physically sorts and stores table data - only ONE per table, usually on Primary Key. Non-Clustered Index is a separate structure with pointers to actual data - can have MULTIPLE (up to 999). Use indexes on columns in WHERE, JOIN, ORDER BY. Avoid on frequently updated columns.",
        keywords: ["index","speed","clustered","non-clustered","physical","pointer","one per table","multiple","where","join","order by","data structure"]
    },
    7: {
        answer: "A Stored Procedure is a precompiled collection of SQL statements stored in database. Benefits: performance (cached execution plan), security (no direct table access), reusability, less network traffic. Can have input/output parameters. Executed with EXEC. Difference from Function: SP can modify data, return multiple results, use TRY-CATCH. Function returns single value, used in SELECT.",
        keywords: ["stored procedure","precompiled","cached","execution plan","security","reusability","parameters","exec","function","performance"]
    },
    8: {
        answer: "GROUP BY groups rows with same values into summary rows. Used with aggregate functions: COUNT, SUM, AVG, MIN, MAX. Every column in SELECT must either be in GROUP BY or an aggregate function. Example: SELECT DeptId, COUNT(*) FROM Employees GROUP BY DeptId — gives employee count per department. Use HAVING to filter groups after grouping.",
        keywords: ["group by","aggregate","count","sum","avg","min","max","summary","column","having","department"]
    },
    9: {
        answer: "A Subquery is a query inside another query. Can be in WHERE, SELECT, or FROM clause. Types: Single-row (returns one value), Multi-row (returns multiple values, use IN/ANY/ALL), Correlated (references outer query, runs per row — slower). Example: SELECT * FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees). Use EXISTS for better performance than IN with large datasets.",
        keywords: ["subquery","inner","outer","where","select","from","correlated","single-row","multi-row","exists","in"]
    },
    10: {
        answer: "Normalization is organizing database to reduce redundancy and dependency. 1NF: atomic values, no repeating groups, each row unique. 2NF: 1NF + no partial dependency (all non-key columns depend on FULL primary key). 3NF: 2NF + no transitive dependency (non-key depends only on PK, not on other non-key columns). Denormalization is the reverse — adding redundancy for read performance.",
        keywords: ["normalization","redundancy","dependency","1nf","2nf","3nf","atomic","partial","transitive","primary key","denormalization"]
    },
    11: {
        answer: "A View is a virtual table based on a SELECT query. It doesn't store data — executes query each time accessed. Benefits: simplify complex queries, security (restrict column access), abstraction. Indexed View (Materialized) stores results physically — faster reads but needs maintenance on data changes. Cannot INSERT into view with joins or aggregates.",
        keywords: ["view","virtual table","select","query","simplify","security","abstraction","indexed view","materialized","restrict"]
    },
    12: {
        answer: "A Trigger is a special stored procedure that automatically executes when an INSERT, UPDATE, or DELETE event occurs on a table. Types: AFTER trigger (runs after the event), INSTEAD OF trigger (replaces the event). Uses: audit logging, enforcing business rules, maintaining denormalized data. Access changed data via 'inserted' and 'deleted' virtual tables.",
        keywords: ["trigger","automatically","insert","update","delete","after","instead of","audit","logging","inserted","deleted","business rules"]
    },
    13: {
        answer: "UNION combines results of two queries and removes duplicates (performs sorting). UNION ALL combines all results INCLUDING duplicates (faster, no sorting). Both require same number of columns with compatible data types. Use UNION ALL when you know there are no duplicates or don't care — better performance. Use UNION when you need distinct combined results.",
        keywords: ["union","union all","duplicates","removes","faster","sorting","same columns","compatible","distinct","combines"]
    },
    14: {
        answer: "ROW_NUMBER gives unique sequential numbers to each row — no ties. RANK assigns same rank to ties but SKIPS numbers after (1,2,2,4). DENSE_RANK assigns same rank to ties but DOESN'T skip (1,2,2,3). All use OVER(ORDER BY) clause. Can partition with PARTITION BY for ranking within groups. Most common interview question: find Nth highest salary using DENSE_RANK.",
        keywords: ["row_number","rank","dense_rank","unique","ties","skips","doesn't skip","over","order by","partition by","nth highest"]
    },
    15: {
        answer: "A CTE (Common Table Expression) is a temporary named result set defined with WITH keyword. Exists only for the duration of the query. Benefits: readability, recursive queries, avoid subquery repetition. Recursive CTE references itself — used for hierarchical data (org chart, tree). Temp Table is physical table in tempdb — persists in session, can have indexes, better for large datasets reused multiple times.",
        keywords: ["cte","common table expression","with","temporary","recursive","hierarchy","temp table","tempdb","readability","named result"]
    }
};


// OOPs Additional Answers Q13-Q30
INTERVIEW_ANSWERS['oops_interview_questions'][13] = {answer:"A Partial class splits one class definition across multiple files using 'partial' keyword. All parts combine into one class at compile time. Used in: auto-generated code (designer files), large classes, team collaboration. All parts must have same access modifier. Methods, properties from all parts are available in the final class.",keywords:["partial","multiple files","combine","compile time","auto-generated","designer","same access","split"]};
INTERVIEW_ANSWERS['oops_interview_questions'][14] = {answer:"A Sealed class cannot be inherited — no other class can derive from it. Uses: security (prevent overriding behavior), performance (JIT can inline methods), design intent (class is complete). String class is sealed in C#. A sealed method prevents further overriding in derived classes. Use when you don't want anyone extending your class.",keywords:["sealed","cannot inherit","derive","security","performance","jit","inline","string","prevent","overriding"]};
INTERVIEW_ANSWERS['oops_interview_questions'][16] = {answer:"Access modifiers control visibility of classes, methods, properties. public: accessible everywhere. private: same class only. protected: same class + derived classes. internal: same assembly/project only. protected internal: same assembly OR derived classes. private protected: same assembly AND derived class. Default for class members is private, for classes is internal.",keywords:["access modifier","public","private","protected","internal","visibility","same class","derived","assembly","default"]};
INTERVIEW_ANSWERS['oops_interview_questions'][17] = {answer:"public is accessible from anywhere. private is only within same class. protected is within same class and derived classes (even in different assembly). internal is within same assembly/project. protected internal is accessible in same assembly OR derived classes anywhere. private protected (C#7.2) is same assembly AND derived class only.",keywords:["public","private","protected","internal","protected internal","private protected","assembly","derived","anywhere","same class"]};
INTERVIEW_ANSWERS['oops_interview_questions'][18] = {answer:"Properties provide controlled access to private fields using get/set accessors. They look like fields from outside but have logic inside. Full property has backing field + get + set. Auto-property: public string Name { get; set; } — compiler creates backing field. Can add validation in setter. Can make read-only (only get) or write-only (only set). Different access: public get, private set.",keywords:["properties","get","set","private field","backing field","auto-property","validation","read-only","controlled","access"]};
INTERVIEW_ANSWERS['oops_interview_questions'][19] = {answer:"Field is a variable declared directly in class — usually private, no logic. Property is a member with get/set accessors — provides controlled access to fields, can have validation logic, supports data binding. Best practice: make fields private, expose through properties. Properties can be auto-implemented. Fields store data, properties control access to that data.",keywords:["field","property","variable","get","set","private","validation","data binding","controlled","access"]};
INTERVIEW_ANSWERS['oops_interview_questions'][20] = {answer:"Auto-implemented property lets you declare property without explicit backing field. Compiler creates the hidden field automatically. Syntax: public string Name { get; set; }. Shorter than full property. Use when no validation needed. Can have default value: public int Age { get; set; } = 25. Can be made read-only: public string Id { get; } = Guid.NewGuid().ToString().",keywords:["auto-implemented","backing field","compiler","automatic","shorter","no validation","default value","read-only","syntax"]};
INTERVIEW_ANSWERS['oops_interview_questions'][21] = {answer:"Read-only property has only getter — value can be set in constructor but not changed after. Syntax: public string Name { get; }. Write-only property has only setter — rarely used, for security (passwords). Can also use 'init' accessor (C# 9) — settable only during object initialization. Use read-only for immutable data like Id, CreatedDate.",keywords:["read-only","write-only","getter","setter","constructor","init","immutable","cannot change","initialization"]};
INTERVIEW_ANSWERS['oops_interview_questions'][22] = {answer:"const is compile-time constant — must assign at declaration, cannot change, implicitly static, value embedded in IL. readonly is runtime constant — can assign in declaration or constructor, instance-level, evaluated at runtime. Use const for: Math.PI, fixed values known at compile time. Use readonly for: values from config, constructor-injected values, objects.",keywords:["const","readonly","compile-time","runtime","constructor","static","declaration","il","instance","fixed values"]};
INTERVIEW_ANSWERS['oops_interview_questions'][24] = {answer:"Types of inheritance: Single (one parent, one child), Multilevel (chain: A→B→C), Hierarchical (one parent, multiple children). C# does NOT support Multiple inheritance (one child, multiple parents) — causes diamond problem. Use interfaces for multiple inheritance behavior. Also: Hybrid (combination of types) not directly supported in C#.",keywords:["single","multilevel","hierarchical","multiple","diamond problem","interface","chain","parent","child","not supported"]};
INTERVIEW_ANSWERS['oops_interview_questions'][25] = {answer:"C# doesn't support multiple class inheritance because of the Diamond Problem — if two parent classes have same method, child doesn't know which to call. Creates ambiguity. Solution: C# allows multiple INTERFACE inheritance instead. Interfaces have no implementation conflict (before C# 8). If needed, use composition (HAS-A) instead of multiple inheritance.",keywords:["multiple inheritance","diamond problem","ambiguity","same method","interface","composition","has-a","not supported","solution","conflict"]};
INTERVIEW_ANSWERS['oops_interview_questions'][26] = {answer:"Multiple inheritance behavior is achieved using interfaces. A class can implement multiple interfaces. Example: class Employee : IPayable, ITaxable, IComparable. Each interface defines a contract that the class must fulfill. Explicit interface implementation resolves conflicts if two interfaces have same method name. This gives flexibility without diamond problem.",keywords:["interface","multiple","implement","contract","explicit implementation","conflict","same method","flexibility","diamond","class"]};
INTERVIEW_ANSWERS['oops_interview_questions'][27] = {answer:"The 'base' keyword refers to the parent/base class. Used to: call parent constructor (base()), access parent method that's been overridden (base.MethodName()), access parent properties. In constructor chaining, 'base' ensures parent is initialized first. Cannot use 'base' in static methods. Example: public Dog(string name) : base(name) calls Animal's constructor.",keywords:["base","parent","constructor","call","overridden","method","properties","chaining","initialized","static"]};
INTERVIEW_ANSWERS['oops_interview_questions'][28] = {answer:"Constructors execute from TOP (base) to BOTTOM (derived). When you create a derived class object, base class constructor runs FIRST, then derived. This ensures parent is fully initialized before child uses it. With chaining: if C : B : A, order is A → B → C. Destructors run in REVERSE order: C → B → A.",keywords:["constructor","execution order","base first","derived","top","bottom","initialized","chaining","reverse","destructor"]};
INTERVIEW_ANSWERS['oops_interview_questions'][29] = {answer:"Private members ARE inherited but NOT accessible directly in derived class. They exist in derived object's memory but hidden. Can access through public/protected methods of base class. Protected members are inherited AND accessible in derived. This maintains encapsulation — base class controls how its private data is accessed even by children.",keywords:["private","inherited","not accessible","exist","memory","hidden","protected","accessible","encapsulation","base class"]};
INTERVIEW_ANSWERS['oops_interview_questions'][30] = {answer:"IS-A is Inheritance relationship — Dog IS-A Animal. Child class inherits parent. Creates tight coupling. HAS-A is Composition relationship — Car HAS-A Engine. Class contains another class as member. Creates loose coupling. Prefer composition over inheritance — more flexible, easier to change. Use IS-A when there's true parent-child taxonomy, HAS-A for capabilities.",keywords:["is-a","has-a","inheritance","composition","tight coupling","loose coupling","prefer composition","flexible","contains","parent-child"]};
INTERVIEW_ANSWERS['oops_interview_questions'][31] = {answer:"Inheritance (IS-A): Dog IS-A Animal. Tight coupling, less flexible, hard to change base. Use when true taxonomy exists. Composition (HAS-A): Car HAS-A Engine. Loose coupling, flexible, easy to swap. Use when object USES another object. 'Prefer composition over inheritance' — it's more maintainable, testable, and follows SOLID principles. Composition allows runtime behavior changes.",keywords:["inheritance","composition","is-a","has-a","tight coupling","loose coupling","prefer composition","flexible","maintainable","testable","swap"]};


// OOPs Q33-Q51
INTERVIEW_ANSWERS['oops_interview_questions'][33] = {answer:"Compile-time polymorphism (Method Overloading) means same method name with different parameters in the SAME class. Compiler decides which to call based on arguments at compile time. Rules: different number of params, different types, or different order. Return type alone doesn't count. Example: Add(int,int), Add(double,double), Add(int,int,int).",keywords:["compile-time","overloading","same name","different parameters","same class","compiler","arguments","return type","number","types"]};
INTERVIEW_ANSWERS['oops_interview_questions'][34] = {answer:"Runtime polymorphism (Method Overriding) means child class provides different implementation of parent's method. Decided at RUNTIME based on actual object type, not reference type. Requires: virtual keyword in parent, override in child. Example: Animal.Speak() is virtual, Dog.Speak() overrides with 'Bark'. Enables treating different objects uniformly.",keywords:["runtime","overriding","child","parent","virtual","override","object type","reference type","different implementation","uniformly"]};
INTERVIEW_ANSWERS['oops_interview_questions'][35] = {answer:"Method Overloading: same method name, different parameters (number, type, order) in same class. Compile-time polymorphism. Return type doesn't differentiate. Rules: must differ in parameters, can have different return types but that alone won't work. Example: Print(string), Print(int), Print(string, int). Resolved by compiler based on arguments passed.",keywords:["overloading","same name","different parameters","compile-time","same class","return type","number","type","order","compiler"]};
INTERVIEW_ANSWERS['oops_interview_questions'][36] = {answer:"Method Overriding: child class redefines parent's virtual method with same signature. Runtime polymorphism. Rules: parent method must be virtual/abstract, child uses override keyword, same name + same parameters + same return type. The actual method called depends on object type at runtime, not reference type. Enables polymorphic behavior.",keywords:["overriding","child","parent","virtual","override","same signature","runtime","object type","polymorphic","redefines"]};
INTERVIEW_ANSWERS['oops_interview_questions'][37] = {answer:"Overloading: same class, same name, different parameters, compile-time, no keywords needed. Overriding: parent-child, same name + same parameters, runtime, needs virtual/override keywords. Overloading is about multiple versions of method. Overriding is about replacing parent's behavior. Overloading = compile-time polymorphism. Overriding = runtime polymorphism.",keywords:["overloading","overriding","same class","parent-child","compile-time","runtime","virtual","override","parameters","different","same"]};
INTERVIEW_ANSWERS['oops_interview_questions'][38] = {answer:"The 'virtual' keyword marks a method in base class that CAN be overridden by derived classes. It provides a default implementation that children can optionally replace. Without virtual, derived class cannot override (can only hide with 'new'). Virtual enables runtime polymorphism — the correct method is called based on actual object type.",keywords:["virtual","base class","overridden","derived","default implementation","optionally","new","runtime polymorphism","object type","can be"]};
INTERVIEW_ANSWERS['oops_interview_questions'][39] = {answer:"The 'override' keyword in derived class provides new implementation for parent's virtual/abstract method. It replaces the parent's behavior at runtime. Method must have same signature (name, params, return type). The overridden method is called based on actual object type, not reference. Cannot override non-virtual, static, or sealed methods.",keywords:["override","derived","virtual","abstract","replaces","runtime","same signature","object type","cannot","sealed"]};
INTERVIEW_ANSWERS['oops_interview_questions'][40] = {answer:"The 'new' keyword hides parent's method instead of overriding. Method hiding: the method called depends on REFERENCE type (compile-time), not object type. With virtual/override: depends on OBJECT type (runtime). 'new' breaks polymorphism. Example: A obj = new B(); with 'new' calls A's method, with 'override' calls B's method. Avoid 'new' — use override.",keywords:["new","method hiding","reference type","compile-time","object type","breaks polymorphism","override","virtual","avoid","hides"]};
INTERVIEW_ANSWERS['oops_interview_questions'][41] = {answer:"virtual/override = TRUE polymorphism. Method called based on OBJECT type at runtime. A obj = new B(); obj.Method() calls B's version. new = method HIDING. Method called based on REFERENCE type at compile-time. A obj = new B(); obj.Method() calls A's version. override replaces parent behavior, new hides it. Always prefer override over new.",keywords:["virtual","override","new","object type","reference type","runtime","compile-time","hiding","true polymorphism","prefer override"]};
INTERVIEW_ANSWERS['oops_interview_questions'][42] = {answer:"NO. You cannot override a method that is not marked virtual, abstract, or override. Without virtual keyword, derived class can only HIDE the method using 'new' keyword — but this is not true overriding (no runtime polymorphism). If you try to use 'override' without virtual in parent, compiler gives error. Always mark methods virtual if you want polymorphic behavior.",keywords:["cannot override","without virtual","abstract","new","hide","not true overriding","compiler error","polymorphic","must be virtual"]};
INTERVIEW_ANSWERS['oops_interview_questions'][43] = {answer:"Operator Overloading allows custom behavior for operators (+, -, ==, etc.) on user-defined types. Defined using 'operator' keyword with public static. Example: Money a + Money b returns new Money with sum. Not all operators can be overloaded (&&, ||, cannot). Must overload in pairs: == with !=, < with >. Makes code readable: vector1 + vector2 instead of vector1.Add(vector2).",keywords:["operator overloading","custom behavior","operator keyword","public static","pairs","readable","user-defined","cannot","must overload"]};
INTERVIEW_ANSWERS['oops_interview_questions'][44] = {answer:"Covariance (out): allows derived type where base expected. IEnumerable<Dog> can be assigned to IEnumerable<Animal>. Read-only direction. Contravariance (in): allows base type where derived expected. Action<Animal> can be assigned to Action<Dog>. Write-only direction. Used in generic interfaces and delegates. Makes generics more flexible with inheritance hierarchies.",keywords:["covariance","contravariance","out","in","derived","base","ienumerable","action","read-only","write-only","generic","flexible"]};
INTERVIEW_ANSWERS['oops_interview_questions'][45] = {answer:"Abstraction means hiding complex implementation details and showing only essential features to the user. Achieved through: Abstract classes (partial implementation + abstract methods) and Interfaces (pure contract). Example: you drive a car without knowing engine internals. In code: IRepository.GetAll() — you know WHAT it does, not HOW. Reduces complexity for the user.",keywords:["abstraction","hiding complexity","essential","abstract class","interface","contract","what not how","reduces complexity","implementation","user"]};
INTERVIEW_ANSWERS['oops_interview_questions'][46] = {answer:"Abstract class cannot be instantiated directly. Can have both abstract methods (no body, must override) and concrete methods (with implementation). Can have constructors, fields, properties. Used when classes share common behavior. Child MUST implement all abstract methods. Provides partial implementation — some methods ready, some forced to implement. Single inheritance only.",keywords:["abstract class","cannot instantiate","abstract methods","concrete methods","constructor","fields","must implement","partial implementation","single inheritance","common behavior"]};
INTERVIEW_ANSWERS['oops_interview_questions'][47] = {answer:"Abstract method is declared in abstract class with NO body/implementation. Child class MUST provide implementation using override keyword. Forces derived classes to have their own version. Syntax: public abstract void Draw(); Cannot be private (must be accessible to derived). Cannot be static. Used to define a contract within abstract class.",keywords:["abstract method","no body","must override","forces","derived class","implementation","cannot be private","cannot be static","contract","override"]};
INTERVIEW_ANSWERS['oops_interview_questions'][48] = {answer:"YES, abstract class CAN have constructors. But you cannot call them directly (can't instantiate abstract class). Constructor is called when derived class object is created — via 'base()' keyword. Used to initialize common fields/properties shared by all derived classes. Example: abstract Shape has constructor setting Color, derived Circle calls base(color).",keywords:["abstract","constructor","yes","cannot instantiate","derived class","base","initialize","common fields","shared","called when"]};
INTERVIEW_ANSWERS['oops_interview_questions'][49] = {answer:"YES, abstract class can have BOTH abstract and non-abstract (concrete) methods. Abstract methods: no body, MUST be overridden by child. Concrete methods: have implementation, inherited as-is (can optionally be overridden if marked virtual). This is the KEY advantage over interfaces — you can provide shared implementation + force certain methods to be implemented.",keywords:["abstract","non-abstract","concrete","both","must override","inherited","virtual","shared implementation","advantage","key"]};
INTERVIEW_ANSWERS['oops_interview_questions'][51] = {answer:"Use Abstract class when: classes share common code/behavior, need constructors/fields, want partial implementation, IS-A relationship. Use Interface when: need multiple inheritance, defining capability/contract (can-do), unrelated classes need same behavior, dependency injection. Rule: if >50% methods have implementation → abstract class. If pure contract → interface.",keywords:["abstract class","interface","when to use","common code","multiple inheritance","contract","capability","dependency injection","partial implementation","is-a","can-do"]};


// OOPs Q55-Q90
INTERVIEW_ANSWERS['oops_interview_questions'][55] = {answer:"C# 8+ allows default interface methods — interfaces can have method implementations. This helps evolve interfaces without breaking existing implementations. Old classes don't need to implement new methods. Accessed only through interface reference, not concrete class. Still prefer abstract class for shared implementation — use default methods only for backward compatibility.",keywords:["default interface methods","c# 8","implementation","evolve","breaking","backward compatibility","interface reference","concrete","abstract class","prefer"]};
INTERVIEW_ANSWERS['oops_interview_questions'][56] = {answer:"YES, interfaces can have properties (only declarations). Example: interface IShape { double Area { get; } string Name { get; set; } }. Implementing class must provide the implementation. Can be read-only (only get) or read-write (get+set). Properties in interfaces define the contract — what data the implementing class must expose.",keywords:["interface","properties","yes","declaration","implementing class","read-only","read-write","get","set","contract"]};
INTERVIEW_ANSWERS['oops_interview_questions'][57] = {answer:"Explicit interface implementation makes a method accessible ONLY through the interface reference, not through the class instance. Syntax: void IInterface.Method() { }. Used when: two interfaces have same method name (resolve conflict), want to hide interface methods from class users. Must cast to interface to call: ((IInterface)obj).Method().",keywords:["explicit implementation","interface reference","only through","conflict","same method","cast","hide","two interfaces","resolve","syntax"]};
INTERVIEW_ANSWERS['oops_interview_questions'][58] = {answer:"Abstract class: can have constructors, fields, access modifiers, both abstract+concrete methods, single inheritance. Interface: no constructors, no fields (before C#8), all public, only method signatures, multiple inheritance. Abstract = IS-A partial implementation. Interface = CAN-DO contract. Use abstract for shared code, interface for multiple inheritance and loose coupling.",keywords:["abstract","interface","constructor","fields","single","multiple","concrete","method signatures","is-a","can-do","loose coupling","shared code"]};
INTERVIEW_ANSWERS['oops_interview_questions'][59] = {answer:"YES, interfaces can inherit from one or more interfaces. Example: IReadWriteRepository : IReadRepository, IWriteRepository. The implementing class must implement ALL methods from all parent interfaces. This supports Interface Segregation Principle — keep interfaces small and combine them. Multiple interface inheritance is allowed (unlike classes).",keywords:["interface","inherit","yes","multiple","implement all","parent","segregation","small","combine","allowed"]};
INTERVIEW_ANSWERS['oops_interview_questions'][60] = {answer:"A class can implement MULTIPLE interfaces simultaneously — this is how C# achieves multiple inheritance behavior. Example: class Employee : IPayable, ITaxable, IComparable. Must implement ALL methods from ALL interfaces. This allows a class to have multiple capabilities. Use explicit implementation if two interfaces have same method name.",keywords:["multiple interfaces","simultaneously","multiple inheritance","implement all","capabilities","explicit","same method","class","example"]};
INTERVIEW_ANSWERS['oops_interview_questions'][61] = {answer:"Interface Segregation Principle: clients should NOT be forced to implement interfaces they don't use. Instead of one fat interface, create multiple small specific interfaces. Bad: IWorker with Work(), Eat(), Sleep() — Robot can't Eat/Sleep. Good: IWorkable, IFeedable, ISleepable — Robot implements only IWorkable. Results in more focused, maintainable code.",keywords:["interface segregation","not forced","fat interface","small","specific","robot","focused","maintainable","multiple","clients"]};
INTERVIEW_ANSWERS['oops_interview_questions'][62] = {answer:"DI using interfaces: class depends on interface (abstraction), not concrete class. Constructor receives interface. Actual implementation injected from outside. Benefits: loose coupling, easy testing (inject mock), swappable implementations. Example: OrderService takes IEmailService in constructor. Can inject RealEmailService or MockEmailService. Follows Dependency Inversion Principle.",keywords:["dependency injection","interface","abstraction","constructor","loose coupling","testing","mock","swappable","implementation","inversion"]};
INTERVIEW_ANSWERS['oops_interview_questions'][63] = {answer:"IDisposable interface provides Dispose() method to release unmanaged resources deterministically. Implement when class uses: file handles, DB connections, network sockets, COM objects. Used with 'using' statement — guarantees Dispose() called even if exception occurs. Pattern: Dispose(bool disposing) + GC.SuppressFinalize. Modern C#: 'using declaration' without braces.",keywords:["idisposable","dispose","unmanaged","resources","using","file","connection","deterministic","gc.suppressfinalize","pattern"]};
INTERVIEW_ANSWERS['oops_interview_questions'][64] = {answer:"IEnumerable<T>: most basic, read-only forward-only iteration, supports foreach, lazy. ICollection<T>: adds Count, Add, Remove, Contains — modifiable collection. IList<T>: adds index-based access (list[0]), Insert, RemoveAt — random access. Use the LEAST specific interface needed. Method returning data? Use IEnumerable. Need count? ICollection. Need index? IList.",keywords:["ienumerable","icollection","ilist","foreach","count","add","remove","index","least specific","read-only","random access"]};
INTERVIEW_ANSWERS['oops_interview_questions'][66] = {answer:"'this' refers to current instance of the class. Uses: distinguish field from parameter with same name (this.name = name), constructor chaining (this(param)), pass current object as argument, extension methods (first param). Cannot use in static methods — static belongs to class, not instance. Helps with clarity when field and parameter names conflict.",keywords:["this","current instance","field","parameter","same name","constructor chaining","extension","static cannot","clarity","pass object"]};
INTERVIEW_ANSWERS['oops_interview_questions'][67] = {answer:"'static' means member belongs to the TYPE itself, not to any instance. Static members: shared across all objects, accessed via ClassName.Member, one copy in memory. Static class: cannot instantiate, all members must be static, used for utility/helper methods (Math, Console). Static constructor: runs once, initializes static fields.",keywords:["static","type itself","not instance","shared","one copy","classname","utility","helper","math","static constructor","once"]};
INTERVIEW_ANSWERS['oops_interview_questions'][69] = {answer:"Extension methods add new methods to existing types WITHOUT modifying source code. Defined in static class, static method, 'this' keyword on first parameter. Example: public static int WordCount(this string s). Called like instance method. LINQ is built on extension methods. Rules: cannot override existing, instance methods take priority, must be in scope (using namespace).",keywords:["extension method","existing type","without modifying","static class","this keyword","linq","instance method","priority","cannot override","scope"]};
INTERVIEW_ANSWERS['oops_interview_questions'][70] = {answer:"Generics allow writing type-safe, reusable code that works with ANY data type. Benefits: type safety (compile-time checking), no boxing/unboxing, code reuse. Examples: List<T>, Dictionary<K,V>. Can create generic classes, methods, interfaces. Constraints restrict types: where T : class, where T : new(), where T : IComparable.",keywords:["generics","type-safe","reusable","any type","boxing","unboxing","list","dictionary","constraints","where","compile-time"]};
INTERVIEW_ANSWERS['oops_interview_questions'][74] = {answer:"Stack: stores value types and references, LIFO, fast allocation/deallocation, automatic cleanup when scope ends, small and fixed size. Heap: stores reference type objects, managed by Garbage Collector, slower, larger, objects live until GC collects. Value types on stack (int, struct). Reference types: reference on stack, object on heap.",keywords:["stack","heap","value type","reference type","lifo","fast","garbage collector","slower","automatic","scope","object"]};
INTERVIEW_ANSWERS['oops_interview_questions'][75] = {answer:"Garbage Collection is automatic memory management in .NET. GC reclaims memory from objects no longer referenced. Developer doesn't manually free memory. GC uses mark-and-sweep algorithm. Runs non-deterministically. Uses Generations: Gen 0 (short-lived, frequent collection), Gen 1 (buffer), Gen 2 (long-lived, expensive collection). Call GC.Collect() rarely — let GC decide.",keywords:["garbage collection","automatic","memory","reclaim","no longer referenced","generations","gen 0","gen 1","gen 2","mark-and-sweep","non-deterministic"]};
INTERVIEW_ANSWERS['oops_interview_questions'][76] = {answer:"Gen 0: newly created short-lived objects (local variables). Collected most frequently. Gen 1: objects that survived Gen 0 collection — buffer between short and long lived. Gen 2: long-lived objects (static, cached). Collected rarely — most expensive. Idea: most objects die young (Gen 0), so collect there often. Promotes surviving objects to next generation.",keywords:["gen 0","gen 1","gen 2","short-lived","long-lived","frequent","rarely","expensive","survives","promotes","static","local"]};
INTERVIEW_ANSWERS['oops_interview_questions'][77] = {answer:"Dispose (IDisposable): called explicitly by developer or 'using' statement. Releases BOTH managed and unmanaged resources. Deterministic — you control when. Finalizer (~): called by GC non-deterministically. Safety net if Dispose wasn't called. Only releases unmanaged resources. Pattern: implement both, Dispose calls GC.SuppressFinalize to prevent double cleanup.",keywords:["dispose","finalizer","explicit","gc","deterministic","non-deterministic","managed","unmanaged","using","suppressfinalize","safety net"]};
INTERVIEW_ANSWERS['oops_interview_questions'][78] = {answer:"'using' statement ensures Dispose() is called automatically when block ends — even if exception occurs. Internally it's try-finally. Used for any IDisposable: DB connections, file streams, HTTP clients. C# 8+: 'using declaration' without braces — disposes when variable goes out of scope. Example: using var conn = new SqlConnection(cs);",keywords:["using","dispose","automatically","try-finally","idisposable","connection","stream","exception","c# 8","scope","declaration"]};
INTERVIEW_ANSWERS['oops_interview_questions'][80] = {answer:"A Delegate is a type-safe function pointer — holds reference to one or more methods with matching signature. Used for callbacks, event handling, LINQ. Can be multicast (invoke multiple methods). Built-in delegates: Action (void return), Func (with return), Predicate (returns bool). Lambda expressions are shorthand for delegates.",keywords:["delegate","function pointer","type-safe","reference","method","callback","event","multicast","action","func","predicate","lambda"]};
INTERVIEW_ANSWERS['oops_interview_questions'][82] = {answer:"Func<T,TResult>: takes input parameters, returns a value. Last type param is return type. Example: Func<int,int,int> add = (a,b) => a+b. Action<T>: takes input, returns VOID (no return value). Example: Action<string> print = s => Console.WriteLine(s). Predicate<T>: takes ONE parameter, returns BOOL. Used for filtering. Example: Predicate<int> isEven = x => x%2==0.",keywords:["func","action","predicate","return","void","bool","input","lambda","filtering","parameters","last type"]};
INTERVIEW_ANSWERS['oops_interview_questions'][84] = {answer:"Lambda expression is concise way to write anonymous methods using => syntax. Expression lambda: x => x * 2. Statement lambda: (a,b) => { var sum = a+b; return sum; }. Used everywhere in LINQ: .Where(x => x > 5), .Select(x => x.Name), .OrderBy(x => x.Age). Can capture outer variables (closures). Replaces verbose delegate syntax.",keywords:["lambda","arrow","anonymous","expression","statement","linq","where","select","closure","concise","delegate"]};
INTERVIEW_ANSWERS['oops_interview_questions'][85] = {answer:"An Event is notification mechanism — allows a class to notify others when something happens. Based on publisher-subscriber pattern. Publisher raises event, subscribers handle it. Declared with 'event' keyword + delegate type. Subscribers use += to attach, -= to detach. Events are safer than delegates — cannot be invoked from outside the class, only += and -= allowed.",keywords:["event","notification","publisher","subscriber","raises","handles","event keyword","delegate","+=","-=","cannot invoke outside","safer"]};
INTERVIEW_ANSWERS['oops_interview_questions'][86] = {answer:"Delegate: anyone can invoke it, can assign with = (replace all handlers), less safe. Event: only declaring class can invoke, only += and -= (cannot replace), more safe. Both hold method references. Use Event for notifications (button click, data changed). Use Delegate for callbacks (pass method as parameter). Event is a restricted wrapper around delegate.",keywords:["delegate","event","invoke","anyone","only declaring class","+=","-=","safe","notification","callback","wrapper","restricted"]};
INTERVIEW_ANSWERS['oops_interview_questions'][87] = {answer:"Publisher-Subscriber pattern: Publisher raises events (doesn't know who listens). Subscribers handle events (don't know who publishes). Loose coupling between them. One publisher, many subscribers. Example: OrderService (publisher) raises OrderPlaced event. EmailService and InventoryService (subscribers) handle it independently. Adding/removing subscribers doesn't affect publisher.",keywords:["publisher","subscriber","raises","handles","loose coupling","one to many","independently","doesn't know","adding","removing","event"]};
INTERVIEW_ANSWERS['oops_interview_questions'][90] = {answer:"try: contains code that might throw exception. catch: handles specific exceptions — multiple catch blocks ordered specific to general. finally: ALWAYS executes regardless of exception — used for cleanup (close connections, files). Rules: try required, catch or finally must follow, specific exceptions before general, finally runs even after return/throw.",keywords:["try","catch","finally","exception","specific","general","always executes","cleanup","connection","return","throw","multiple"]};
INTERVIEW_ANSWERS['oops_interview_questions'][91] = {answer:"'throw' re-throws current exception preserving original stack trace — shows where error actually occurred. 'throw ex' resets stack trace — you lose the original error location, makes debugging harder. ALWAYS use 'throw' in catch blocks. If wrapping: throw new CustomException(message, ex) — preserves original as InnerException.",keywords:["throw","throw ex","stack trace","preserves","resets","original location","debugging","always use throw","innerexception","catch"]};
INTERVIEW_ANSWERS['oops_interview_questions'][101] = {answer:"IEnumerable executes in MEMORY (client-side) — loads ALL data first, then filters. Good for in-memory collections. IQueryable translates to SQL, executes on DATABASE SERVER — filters at source, only matching data transferred. Good for EF Core/database queries. Use IQueryable for DB queries (performance), IEnumerable for in-memory (after data loaded).",keywords:["ienumerable","iqueryable","memory","database","server","loads all","filters at source","ef core","sql","performance","in-memory"]};
INTERVIEW_ANSWERS['oops_interview_questions'][103] = {answer:"LINQ (Language Integrated Query) provides unified syntax to query data from different sources — collections, databases, XML. Two syntaxes: Query (from x in list where...) and Method (list.Where().Select()). Key methods: Where, Select, OrderBy, GroupBy, FirstOrDefault, Any, Count. Supports deferred execution — query runs only when iterated/materialized (ToList).",keywords:["linq","language integrated query","unified","collections","database","where","select","orderby","groupby","deferred execution","tolist","method"]};
INTERVIEW_ANSWERS['oops_interview_questions'][104] = {answer:"Common LINQ methods: Filtering: Where, OfType. Projection: Select, SelectMany. Ordering: OrderBy, ThenBy. Aggregation: Count, Sum, Average, Min, Max. Element: First, FirstOrDefault, Single, Last. Quantifiers: Any, All, Contains. Set: Distinct, Union, Intersect, Except. Partitioning: Take, Skip (pagination). Grouping: GroupBy. Conversion: ToList, ToArray, ToDictionary.",keywords:["where","select","orderby","groupby","first","firstordefault","count","sum","any","distinct","take","skip","tolist","selectmany"]};

// OOPs Q1-Q12 (Fundamentals)
INTERVIEW_ANSWERS['oops_interview_questions'][1] = {
  answer: "Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects rather than functions and logic. Objects are instances of classes that contain data (properties/fields) and behavior (methods). OOP helps in writing modular, reusable, and maintainable code by modeling real-world entities. The four main principles are Encapsulation, Inheritance, Polymorphism, and Abstraction.",
  keywords: ["programming paradigm", "objects", "classes", "data", "behavior", "methods", "modular", "reusable", "encapsulation", "inheritance", "polymorphism", "abstraction"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][2] = {
  answer: "The 4 pillars of OOP are: 1) Encapsulation - bundling data and methods together, hiding internal details using access modifiers. 2) Inheritance - a class can inherit properties and methods from another class, promoting code reuse. 3) Polymorphism - ability to take many forms, same method behaves differently (compile-time via overloading, runtime via overriding). 4) Abstraction - hiding complex implementation details and showing only essential features using abstract classes or interfaces.",
  keywords: ["encapsulation", "inheritance", "polymorphism", "abstraction", "bundling", "code reuse", "many forms", "hiding", "access modifiers", "overloading", "overriding"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][3] = {
  answer: "In Procedural Programming, code is organized as a sequence of functions/procedures that operate on data. Data and functions are separate. In OOP, code is organized around objects that combine data and behavior together. OOP provides better code reuse through inheritance, better security through encapsulation, and better maintainability through modularity. Procedural is top-down approach while OOP models real-world entities.",
  keywords: ["procedural", "functions", "sequence", "data and behavior", "objects", "top-down", "modularity", "code reuse", "encapsulation", "real-world"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][4] = {
  answer: "A Class is a blueprint or template that defines the properties (data) and methods (behavior) that objects of that type will have. It is a logical entity and does not occupy memory until instantiated. An Object is an instance of a class - it is a real entity created in memory using the 'new' keyword. Example: 'Car' is a class, 'myCar = new Car()' is an object.",
  keywords: ["blueprint", "template", "properties", "methods", "instance", "new keyword", "memory", "logical entity", "real entity"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][5] = {
  answer: "Class is a blueprint/template, Object is an instance of that class. Class is a logical entity that doesn't consume memory, Object is a physical entity stored in heap memory. Class is defined once, multiple objects can be created from it. Class defines what properties and methods an object will have, Object holds actual values. Class is created using 'class' keyword, Object is created using 'new' keyword.",
  keywords: ["blueprint", "instance", "logical", "physical", "memory", "heap", "new keyword", "template", "multiple objects", "one class"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][6] = {
  answer: "A constructor is a special method that is automatically called when an object is created using the 'new' keyword. It has the same name as the class, has no return type (not even void), and is used to initialize the object's state (set default values to fields/properties). If no constructor is defined, the compiler provides a default parameterless constructor.",
  keywords: ["special method", "automatically called", "new keyword", "same name as class", "no return type", "initialize", "default values", "parameterless", "object creation"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][7] = {
  answer: "Types of constructors in C#: 1) Default Constructor - no parameters, provided by compiler if none defined. 2) Parameterized Constructor - accepts parameters to initialize with specific values. 3) Copy Constructor - creates object by copying from another object. 4) Static Constructor - initializes static members, called once before first instance or static member access, no access modifier or parameters. 5) Private Constructor - restricts object creation from outside, used in Singleton pattern.",
  keywords: ["default", "parameterized", "copy", "static", "private", "singleton", "no parameters", "static members", "called once"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][8] = {
  answer: "Constructor overloading means having multiple constructors in a class with different parameter lists (different number, type, or order of parameters). This allows creating objects in different ways. The compiler selects the appropriate constructor based on the arguments passed during object creation. It is a form of compile-time polymorphism.",
  keywords: ["multiple constructors", "different parameters", "number", "type", "order", "compile-time", "polymorphism", "overloading"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][9] = {
  answer: "Constructor chaining is calling one constructor from another. In C#, 'this' keyword is used to call another constructor in the same class, and 'base' keyword is used to call a constructor in the parent class. This avoids code duplication and ensures proper initialization. Syntax: public ClassName(params) : this(otherParams) or : base(params). The chained constructor executes first before the calling constructor's body.",
  keywords: ["this", "base", "calling one constructor from another", "same class", "parent class", "code duplication", "initialization", "chaining", "executes first"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][10] = {
  answer: "A destructor (finalizer) in C# is defined using ~ClassName() syntax. It is called by the Garbage Collector before an object is destroyed to release unmanaged resources. It cannot be called manually, has no parameters, no access modifiers, and no return type. A class can have only one destructor. It is non-deterministic (you cannot predict when GC will call it). For deterministic cleanup, use IDisposable with Dispose() pattern instead.",
  keywords: ["~ClassName", "garbage collector", "unmanaged resources", "cannot call manually", "no parameters", "one destructor", "non-deterministic", "IDisposable", "Dispose", "finalizer"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][11] = {
  answer: "Struct is a value type stored on the stack, Class is a reference type stored on the heap. Struct cannot inherit from another struct (only interfaces), Class supports inheritance. Struct has no default constructor in older C#, Class always has one. Struct cannot have destructors, Class can. Struct is suitable for small, lightweight data (like Point, Color), Class for complex objects. Struct members default to private, assignment copies the value (no reference sharing).",
  keywords: ["value type", "reference type", "stack", "heap", "inheritance", "lightweight", "no destructor", "copy", "small data", "interfaces"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][12] = {
  answer: "A static class is a class that cannot be instantiated (no objects can be created). It can only contain static members (static methods, properties, fields). It is sealed implicitly (cannot be inherited). Used for utility/helper methods like Math class. Declared with 'static' keyword before 'class'. All members must be static. It is loaded once into memory and remains throughout application lifetime.",
  keywords: ["cannot instantiate", "static members", "sealed", "utility", "helper", "Math", "static keyword", "loaded once", "no objects", "cannot inherit"]
};

// OOPs Q15 (Encapsulation)
INTERVIEW_ANSWERS['oops_interview_questions'][15] = {
  answer: "Encapsulation is the process of bundling data (fields) and methods that operate on that data into a single unit (class), and restricting direct access to internal details using access modifiers (private, protected, public, internal). Data is hidden and accessed only through public properties (getters/setters). Benefits: data protection, controlled access, flexibility to change implementation without affecting outside code, and better maintainability.",
  keywords: ["bundling", "data and methods", "single unit", "access modifiers", "private", "public", "properties", "getters", "setters", "data hiding", "controlled access", "protection"]
};

// OOPs Q23 (Inheritance)
INTERVIEW_ANSWERS['oops_interview_questions'][23] = {
  answer: "Inheritance is a mechanism where a child (derived) class acquires properties and methods from a parent (base) class. It promotes code reusability and establishes an IS-A relationship. In C#, only single inheritance is supported for classes (a class can inherit from one base class only), but multiple inheritance is achieved through interfaces. The derived class can add new members or override existing ones. Syntax: class Child : Parent {}.",
  keywords: ["child class", "parent class", "derived", "base", "code reusability", "IS-A", "single inheritance", "multiple interfaces", "override", "acquire", "properties and methods"]
};

// OOPs Q32 (Polymorphism)
INTERVIEW_ANSWERS['oops_interview_questions'][32] = {
  answer: "Polymorphism means 'many forms' - the ability of an object to take different forms or a method to behave differently based on context. Two types: 1) Compile-time (Static) Polymorphism - achieved through method overloading and operator overloading, resolved at compile time. 2) Runtime (Dynamic) Polymorphism - achieved through method overriding using virtual/override keywords, resolved at runtime using vtable. It enables writing flexible and extensible code.",
  keywords: ["many forms", "compile-time", "runtime", "overloading", "overriding", "virtual", "override", "static", "dynamic", "vtable", "method", "flexible"]
};

// OOPs Q50 (Abstract class vs Interface)
INTERVIEW_ANSWERS['oops_interview_questions'][50] = {
  answer: "Abstract class can have both abstract and concrete methods with implementation, Interface (before C# 8) can only have method signatures. Abstract class can have constructors, fields, access modifiers; Interface cannot have constructors or fields (only properties). A class can inherit only one abstract class but implement multiple interfaces. Abstract class represents IS-A relationship; Interface represents CAN-DO/capability. From C# 8+, interfaces can have default implementations. Use abstract class for shared base functionality, interface for defining contracts.",
  keywords: ["abstract methods", "concrete methods", "constructors", "fields", "single inheritance", "multiple interfaces", "IS-A", "CAN-DO", "contract", "access modifiers", "default implementation"]
};

// OOPs Q52-Q54
INTERVIEW_ANSWERS['oops_interview_questions'][52] = {
  answer: "No, we cannot create an instance of an abstract class directly using the 'new' keyword. Abstract classes are incomplete by design - they may contain abstract methods without implementation. However, we can create a reference variable of abstract class type and assign it a derived class object (upcasting). Example: Animal a = new Dog(); where Animal is abstract and Dog is concrete derived class.",
  keywords: ["cannot create instance", "new keyword", "incomplete", "abstract methods", "reference variable", "derived class", "upcasting", "concrete class"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][53] = {
  answer: "No, an abstract class cannot be sealed. These are contradictory concepts. Abstract class is meant to be inherited (it requires derived classes to provide implementation), while sealed class prevents inheritance. Applying both would make the class unusable - it cannot be instantiated (abstract) and cannot be inherited (sealed). The compiler will give an error if you try to use both together.",
  keywords: ["cannot be sealed", "contradictory", "meant to be inherited", "prevents inheritance", "compiler error", "cannot instantiate", "unusable"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][54] = {
  answer: "An interface is a contract that defines a set of method signatures, properties, events, and indexers that a class must implement. It contains no implementation (before C# 8). A class can implement multiple interfaces, enabling multiple inheritance behavior. Interfaces use 'interface' keyword and members are public by default. They define WHAT a class can do, not HOW. Used for loose coupling, dependency injection, and testability.",
  keywords: ["contract", "method signatures", "must implement", "multiple interfaces", "multiple inheritance", "interface keyword", "public", "loose coupling", "dependency injection", "WHAT not HOW"]
};

// OOPs Q65
INTERVIEW_ANSWERS['oops_interview_questions'][65] = {
  answer: "IComparable is implemented by the class itself to define its default sorting logic (natural ordering). It has CompareTo(T other) method. IComparer is a separate class that provides custom comparison logic from outside. It has Compare(T x, T y) method. Use IComparable when a class has one obvious sorting (e.g., Employee by ID). Use IComparer when you need multiple sorting strategies (by name, by salary, by age) without modifying the original class.",
  keywords: ["IComparable", "IComparer", "CompareTo", "Compare", "default sorting", "custom comparison", "natural ordering", "separate class", "multiple sorting", "without modifying"]
};

// OOPs Q68
INTERVIEW_ANSWERS['oops_interview_questions'][68] = {
  answer: "Static members belong to the class itself, shared across all instances, accessed via class name (ClassName.Method()), initialized once when class loads. Non-static members belong to each object instance, each object has its own copy, accessed via object reference. Static methods cannot access non-static members directly (no 'this' reference). Non-static methods can access both static and non-static members. Static is used for utility methods, constants, shared state.",
  keywords: ["belongs to class", "belongs to instance", "shared", "own copy", "class name", "object reference", "cannot access non-static", "this", "utility", "shared state", "initialized once"]
};

// OOPs Q71-Q73
INTERVIEW_ANSWERS['oops_interview_questions'][71] = {
  answer: "Generic constraints restrict the types that can be used as type arguments. Specified using 'where' keyword. Types: where T : struct (value type), where T : class (reference type), where T : new() (parameterless constructor), where T : BaseClass (must inherit from BaseClass), where T : IInterface (must implement interface), where T : U (T must derive from U). Constraints provide compile-time type safety and allow accessing specific members of the constrained type.",
  keywords: ["where", "restrict types", "struct", "class", "new()", "base class", "interface", "type safety", "compile-time", "type arguments"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][72] = {
  answer: "Boxing is converting a value type (stack) to reference type (object on heap). It is implicit. Example: int i = 10; object o = i; Unboxing is converting the reference type back to value type. It is explicit and requires casting. Example: int j = (int)o; Boxing/unboxing has performance overhead due to memory allocation and copying. To avoid it, use generics (List<int> instead of ArrayList). Boxing creates a new object on heap.",
  keywords: ["value type to reference type", "stack to heap", "implicit", "explicit", "casting", "performance overhead", "memory allocation", "generics", "object", "copying"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][73] = {
  answer: "Value types store data directly on the stack (int, float, bool, struct, enum). Each variable has its own copy - assignment copies the value. Reference types store a reference (pointer) on stack pointing to actual data on the heap (class, string, array, delegate, interface). Assignment copies the reference - both variables point to same object. Value types have faster access, reference types support null. Value types derive from System.ValueType, reference types from System.Object.",
  keywords: ["stack", "heap", "own copy", "reference", "pointer", "same object", "int", "struct", "class", "string", "null", "ValueType", "faster", "assignment"]
};

// OOPs Q79
INTERVIEW_ANSWERS['oops_interview_questions'][79] = {
  answer: "Dispose is a method from IDisposable interface, called explicitly by developer (or via 'using' statement) to release unmanaged resources deterministically. Finalize (~destructor) is called by Garbage Collector non-deterministically before object is collected. Dispose is preferred because you control when cleanup happens. Best practice: implement both (Dispose pattern) - Dispose for immediate cleanup, Finalize as safety net if Dispose wasn't called. Dispose can call GC.SuppressFinalize to skip finalization.",
  keywords: ["IDisposable", "explicit", "using statement", "deterministic", "Garbage Collector", "non-deterministic", "unmanaged resources", "Dispose pattern", "GC.SuppressFinalize", "safety net"]
};

// OOPs Q81
INTERVIEW_ANSWERS['oops_interview_questions'][81] = {
  answer: "Singlecast delegate holds reference to a single method and returns the method's return value. Multicast delegate holds references to multiple methods (invocation list) using += operator. When invoked, all methods in the list are called in order. Multicast delegates must return void (or only the last method's return value is captured). -= operator removes a method. Events are built on multicast delegates. If any method throws exception, remaining methods won't execute.",
  keywords: ["singlecast", "single method", "multicast", "multiple methods", "invocation list", "+=", "-=", "void", "last return value", "events", "in order"]
};

// OOPs Q83
INTERVIEW_ANSWERS['oops_interview_questions'][83] = {
  answer: "An anonymous method is a method without a name, defined inline using the 'delegate' keyword. It can be assigned to a delegate variable. Syntax: delegate(params) { body }. Introduced in C# 2.0. It can access outer variables (closure). Largely replaced by lambda expressions (=>) in C# 3.0+ which are more concise. Used for short event handlers or callbacks where creating a named method is unnecessary.",
  keywords: ["no name", "inline", "delegate keyword", "closure", "outer variables", "lambda", "C# 2.0", "event handlers", "callbacks", "concise"]
};

// OOPs Q88-Q89
INTERVIEW_ANSWERS['oops_interview_questions'][88] = {
  answer: "A callback is a method passed as a parameter (via delegate) to another method, which calls it back at a certain point. The calling method doesn't know the exact implementation - it just invokes the delegate. Used for asynchronous notifications, event handling, and extensibility. Example: a download method accepts an Action<int> callback to report progress. This enables loose coupling - the caller decides what happens when an event occurs.",
  keywords: ["method passed as parameter", "delegate", "calls back", "asynchronous", "notification", "event handling", "loose coupling", "Action", "extensibility", "progress"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][89] = {
  answer: "Exception handling is a mechanism to handle runtime errors gracefully without crashing the application. In C#, it uses try-catch-finally blocks. try contains code that might throw exception, catch handles specific exceptions, finally executes cleanup code regardless of exception. throw keyword raises an exception. Exceptions are objects derived from System.Exception class. It separates error handling from normal code flow and provides meaningful error messages to users.",
  keywords: ["runtime errors", "gracefully", "try", "catch", "finally", "throw", "System.Exception", "cleanup", "error handling", "meaningful messages", "without crashing"]
};

// OOPs Q92-Q100
INTERVIEW_ANSWERS['oops_interview_questions'][92] = {
  answer: "A custom exception is a user-defined exception class that inherits from System.Exception (or ApplicationException). Created when built-in exceptions don't describe the specific error scenario. Best practices: name ends with 'Exception' suffix, provide three constructors (default, message, message+innerException), make it serializable. Example: class InsufficientBalanceException : Exception { }. Provides meaningful, domain-specific error information.",
  keywords: ["user-defined", "inherits Exception", "custom", "three constructors", "suffix Exception", "domain-specific", "serializable", "ApplicationException", "meaningful"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][93] = {
  answer: "All exceptions derive from System.Exception (base class). Two main branches: System.SystemException (thrown by CLR - NullReferenceException, IndexOutOfRangeException, StackOverflowException, DivideByZeroException, OutOfMemoryException) and System.ApplicationException (thrown by application code, base for custom exceptions). Common hierarchy: Exception → SystemException → specific exceptions. Always catch most specific exception first, then general Exception last.",
  keywords: ["System.Exception", "SystemException", "ApplicationException", "CLR", "NullReferenceException", "IndexOutOfRangeException", "hierarchy", "specific first", "base class", "DivideByZeroException"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][94] = {
  answer: "The finally block contains code that always executes regardless of whether an exception occurred or not. Used for cleanup operations like closing connections, disposing objects, releasing resources. Yes, it always executes EXCEPT in rare cases: Environment.FailFast() is called, power failure, StackOverflowException, or process is killed. Finally executes even if there's a return statement in try or catch block.",
  keywords: ["always executes", "cleanup", "closing connections", "disposing", "regardless", "Environment.FailFast", "return statement", "resources", "StackOverflowException"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][95] = {
  answer: "System.Exception is the base class for ALL exceptions in .NET. System.ApplicationException was intended as base class for application-specific (custom) exceptions while SystemException was for CLR/framework exceptions. However, Microsoft now recommends deriving custom exceptions directly from System.Exception instead of ApplicationException, as the distinction provided no practical value and wasn't consistently followed in the framework itself.",
  keywords: ["base class", "all exceptions", "ApplicationException", "custom exceptions", "SystemException", "CLR", "Microsoft recommends", "directly from Exception", "no practical value"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][96] = {
  answer: "The 'when' keyword in catch block (C# 6+) adds a condition/filter to catch block. Syntax: catch(Exception ex) when (ex.Message.Contains(\"specific\")). The exception is caught only if the condition is true, otherwise it propagates to next catch. Benefits: avoids catching and re-throwing, preserves stack trace, allows multiple catch blocks for same exception type with different conditions. Evaluated before the catch block executes.",
  keywords: ["when keyword", "condition", "filter", "C# 6", "propagates", "preserves stack trace", "avoids re-throwing", "same exception type", "evaluated before"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][97] = {
  answer: "Array is fixed-size, strongly typed (stores one data type), stored in contiguous memory, better performance. ArrayList (System.Collections) is dynamic-size, stores objects (any type - not type safe), requires boxing/unboxing for value types causing performance overhead. Array uses [] syntax, ArrayList uses Add()/Remove() methods. ArrayList is largely obsolete - replaced by List<T> which is both dynamic and type-safe.",
  keywords: ["fixed-size", "dynamic-size", "strongly typed", "object", "boxing", "unboxing", "performance", "contiguous", "List<T>", "type safe", "obsolete"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][98] = {
  answer: "ArrayList stores elements as objects (non-generic, System.Collections), requires boxing/unboxing for value types, no compile-time type checking. List<T> is generic (System.Collections.Generic), stores specific type T, type-safe at compile time, no boxing/unboxing needed, better performance. List<T> is the modern replacement for ArrayList. Both are dynamic-size. List<T> provides IntelliSense support and catches type errors at compile time.",
  keywords: ["ArrayList", "object", "non-generic", "List<T>", "generic", "type-safe", "boxing", "compile-time", "performance", "System.Collections.Generic", "dynamic"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][99] = {
  answer: "Dictionary<TKey, TValue> is a generic collection that stores key-value pairs. Keys must be unique, values can be duplicated. Provides O(1) fast lookup by key using hashing. Common operations: Add(key, value), Remove(key), ContainsKey(), TryGetValue(). Throws KeyNotFoundException if key not found (use TryGetValue to avoid). Part of System.Collections.Generic. Example: Dictionary<int, string> for storing ID-Name pairs.",
  keywords: ["key-value pairs", "unique keys", "O(1)", "hashing", "fast lookup", "Add", "Remove", "ContainsKey", "TryGetValue", "KeyNotFoundException", "generic"]
};

INTERVIEW_ANSWERS['oops_interview_questions'][100] = {
  answer: "List<T> - ordered collection, allows duplicates, access by index O(1), search O(n). Best for sequential data. Dictionary<TKey,TValue> - key-value pairs, unique keys, O(1) lookup by key using hashing. Best for fast lookups by identifier. HashSet<T> - unique elements only (no duplicates), unordered, O(1) for Contains/Add/Remove. Best for uniqueness checks and set operations (union, intersect). Choose based on: need duplicates? need key lookup? need ordering?",
  keywords: ["List", "ordered", "duplicates", "index", "Dictionary", "key-value", "O(1) lookup", "hashing", "HashSet", "unique", "no duplicates", "Contains", "set operations", "union", "intersect"]
};

// OOPs Q102
INTERVIEW_ANSWERS['oops_interview_questions'][102] = {
  answer: "The yield keyword is used in iterator methods to return elements one at a time without creating an entire collection in memory (lazy evaluation). 'yield return' returns next element, 'yield break' stops iteration. The method must return IEnumerable<T> or IEnumerator<T>. State is preserved between calls - execution resumes from where it left off. Benefits: memory efficient for large sequences, deferred execution, simplifies iterator implementation.",
  keywords: ["yield return", "yield break", "lazy evaluation", "one at a time", "IEnumerable", "IEnumerator", "state preserved", "memory efficient", "deferred execution", "iterator"]
};

// MVC Interview Answers
INTERVIEW_ANSWERS['mvc_interview_questions'] = {
    1: {
        answer: "MVC (Model-View-Controller) is a design pattern that separates application into three components: Model (data/business logic), View (UI/presentation), Controller (handles requests, coordinates Model and View). User request goes to Controller, which gets data from Model, then returns appropriate View. Promotes separation of concerns, testability, and maintainability.",
        keywords: ["model","view","controller","design pattern","separation of concerns","request","data","ui","business logic","testability"]
    },
    2: {
        answer: "Model: represents data and business logic, includes entities, validation, database operations. Communicates with database via EF Core. View: the UI layer, displays data to user using Razor syntax (.cshtml files). Only responsible for presentation. Controller: handles incoming HTTP requests, processes user input, gets data from Model, selects appropriate View to return. Acts as intermediary between Model and View.",
        keywords: ["model","data","business logic","view","ui","razor","controller","http requests","intermediary","cshtml"]
    },
    3: {
        answer: "Request flow: Browser sends HTTP request → Routing engine matches URL to Controller/Action → Controller is instantiated → Action method executes → Model interacts with database → Controller passes data to View → View renders HTML → Response sent to browser. Middleware pipeline processes request before reaching controller.",
        keywords: ["request","routing","controller","action","model","view","renders","response","browser","middleware","url"]
    },
    4: {
        answer: "MVC solves: tight coupling between UI and logic, difficulty in testing, code duplication, maintenance nightmares. Benefits: Separation of Concerns (each component has single responsibility), parallel development (UI and logic separately), testability (controllers can be unit tested without UI), reusability, clean URLs through routing.",
        keywords: ["separation of concerns","testability","maintainability","loose coupling","parallel development","single responsibility","clean urls","reusability"]
    },
    5: {
        answer: "Advantages: separation of concerns, testable, supports multiple views for same model, clean URLs, parallel development, extensible. Disadvantages: increased complexity for small apps, learning curve, more files/folders to manage, can be overkill for simple CRUD, requires understanding of patterns.",
        keywords: ["separation","testable","multiple views","clean urls","complexity","learning curve","extensible","overkill","parallel"]
    },
    6: {
        answer: "Separation of Concerns means each component handles ONE responsibility only. Model handles data/business rules (doesn't know about UI). View handles display (doesn't know about database). Controller handles flow/coordination (doesn't contain business logic). Benefits: easier testing, maintainability, team can work independently on different layers.",
        keywords: ["one responsibility","model","view","controller","independent","testing","maintainability","layers","business logic","display"]
    },
    7: {
        answer: "MVC is a design PATTERN for UI layer - separates presentation logic. 3-Tier is an ARCHITECTURE - separates entire application into Presentation, Business Logic, Data Access tiers (can be on different servers). MVC can exist WITHIN the presentation tier of 3-tier. 3-tier is about physical/logical separation of entire app, MVC is about UI organization.",
        keywords: ["design pattern","architecture","presentation tier","business logic tier","data access","physical separation","within","ui layer","servers"]
    },
    8: {
        answer: "MVC: Controller handles input, updates Model, selects View. View is passive. Used in web apps (ASP.NET MVC). MVP: Presenter handles all logic, View is very passive with interface. Used in WinForms. MVVM: ViewModel exposes data via data binding, View auto-updates. Used in WPF, MAUI, Angular. Key difference: how View communicates with logic layer.",
        keywords: ["mvc","mvp","mvvm","controller","presenter","viewmodel","data binding","passive","web","wpf","angular"]
    },
    9: {
        answer: "Model represents the data and business logic layer. Types: Domain Model (entity classes mapping to DB tables), ViewModel (shaped for specific view, combines multiple models), DTO (data transfer between layers). Model contains properties, validation attributes (data annotations), business rules. In ASP.NET Core, models are POCO classes.",
        keywords: ["data","business logic","domain model","viewmodel","dto","entity","validation","poco","properties","data annotations"]
    },
    10: {
        answer: "Domain Model: maps directly to database table (entity), used by EF Core. Has all properties of table. ViewModel: shaped specifically for a View, may combine data from multiple models, contains only what View needs. DTO: used to transfer data between layers/services, no behavior, used in APIs. Use ViewModel for Views, DTO for API responses, Domain Model for DB operations.",
        keywords: ["domain model","viewmodel","dto","database","entity","view","combine","transfer","api","ef core","shaped"]
    },
    11: {
        answer: "A strongly typed view is bound to a specific model class using @model directive at top of .cshtml file. Example: @model Employee. Benefits: IntelliSense support, compile-time type checking, no casting needed, access properties with @Model.PropertyName. Errors caught at build time, not runtime.",
        keywords: ["@model","strongly typed","intellisense","compile-time","type checking","no casting","@Model","cshtml","bound","build time"]
    },
    12: {
        answer: "Strongly typed: uses @model directive, compile-time checking, IntelliSense, type-safe, preferred approach. Weakly typed: uses ViewBag/ViewData (dynamic/dictionary), no compile-time checking, no IntelliSense, casting needed, error-prone. Always prefer strongly typed views for safety and maintainability.",
        keywords: ["strongly typed","weakly typed","@model","ViewBag","ViewData","compile-time","dynamic","casting","intellisense","preferred"]
    },
    13: {
        answer: "Use ViewModel when: view needs data from multiple models, view needs subset of model properties, need to prevent over-posting, need display-only computed properties, form has different shape than entity. Pass Model directly when: simple CRUD with single entity, all model properties needed in view. ViewModel is preferred practice for complex views.",
        keywords: ["viewmodel","multiple models","subset","over-posting","computed","simple crud","complex views","preferred","form","entity"]
    },
    14: {
        answer: "AutoMapper automatically maps properties between objects (e.g., Entity to ViewModel and back). Eliminates manual property-by-property assignment. Configuration: CreateMap<Source, Dest>(). Usage: mapper.Map<DestType>(source). Reduces boilerplate code. Supports custom mappings, flattening, conditional mapping. Register in DI: services.AddAutoMapper(). NuGet: AutoMapper.Extensions.Microsoft.DependencyInjection.",
        keywords: ["automapper","map","properties","entity","viewmodel","CreateMap","boilerplate","di","automatic","custom mapping"]
    },
    15: {
        answer: "Data Annotations are attributes applied to model properties for validation and display. Validation: [Required], [StringLength], [Range], [RegularExpression], [Compare], [EmailAddress]. Display: [Display(Name=)], [DisplayFormat]. Database: [Key], [Table], [Column], [MaxLength]. Works with client-side (jQuery validation) and server-side (ModelState.IsValid).",
        keywords: ["data annotations","attributes","required","stringlength","range","validation","display","key","modelstate","client-side","server-side"]
    },
    16: {
        answer: "A View is the UI component responsible for rendering HTML to the user. In ASP.NET Core MVC, views are .cshtml files using Razor syntax (mix of C# and HTML). Views are located in Views/{ControllerName}/ folder. They receive data from Controller via Model, ViewBag, or ViewData. Views should contain only presentation logic, no business logic.",
        keywords: ["view","ui","html","razor",".cshtml","views folder","presentation","no business logic","render","controller"]
    },
    17: {
        answer: "Razor is the default view engine in ASP.NET Core MVC. Uses @ symbol to switch between HTML and C#. File extension: .cshtml. Supports: inline expressions (@Model.Name), code blocks (@{ }), conditionals (@if), loops (@foreach), HTML helpers, tag helpers. Compact syntax, IntelliSense support, compiled for performance.",
        keywords: ["razor","@","cshtml","view engine","inline","code blocks","@if","@foreach","compiled","html","c#"]
    },
    18: {
        answer: "Razor (.cshtml): uses @ for C# code, compact syntax, fewer characters, IntelliSense, default in ASP.NET Core. ASPX (.aspx): uses <% %> tags, verbose, WebForms-style, no longer supported in .NET Core. Razor is lighter, cleaner, easier to read. ASPX is legacy - all new development uses Razor.",
        keywords: ["razor","aspx","@","<% %>","compact","verbose","cshtml","legacy",".net core","webforms","default"]
    },
    19: {
        answer: "_Layout.cshtml is the master page - defines common HTML structure shared across all views (header, footer, navigation, CSS/JS references). Contains @RenderBody() where child view content is inserted. Can have @RenderSection() for optional content. Located in Views/Shared/ folder. Views specify layout via @{ Layout = \"_Layout\"; } or inherit from _ViewStart.",
        keywords: ["_layout","master page","shared","header","footer","@RenderBody","@RenderSection","common structure","views/shared","navigation"]
    },
    20: {
        answer: "_ViewStart.cshtml runs before every view renders. Used to set common properties like Layout page. Contains: @{ Layout = \"_Layout\"; }. Eliminates repeating Layout assignment in every view. Located in Views/ folder. Can be hierarchical - placed in subfolders to override for specific areas. Executes top-down (root first).",
        keywords: ["_viewstart","layout","every view","common","before renders","eliminates repeating","hierarchical","views folder","top-down"]
    },
    21: {
        answer: "_ViewImports.cshtml sets common directives shared across all views: @using (namespaces), @addTagHelper (enable tag helpers), @model (base model), @inject (DI). Eliminates repeating using statements in every view. Located in Views/ folder. Can be hierarchical. Example: @using MyApp.Models, @addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers.",
        keywords: ["_viewimports","@using","@addTagHelper","namespaces","shared","directives","tag helpers","@inject","eliminates repeating"]
    },
    22: {
        answer: "Partial Views are reusable view fragments (.cshtml) that render inside other views. Used for: repeated UI components (navigation, sidebar, cards), breaking large views into smaller pieces, AJAX-loaded content. Rendered using <partial name=\"_MyPartial\" model=\"data\" /> or @await Html.PartialAsync(). Located in Views/Shared/ or same folder. Filename starts with underscore convention.",
        keywords: ["partial view","reusable","fragment","component","<partial>","Html.PartialAsync","shared","underscore","ajax","repeated"]
    },
    23: {
        answer: "Html.Partial returns MvcHtmlString (rendered HTML as string) - can be stored in variable. Html.RenderPartial writes directly to response stream (void) - slightly better performance for large content. Partial: @Html.Partial(\"_Name\"). RenderPartial: @{ Html.RenderPartial(\"_Name\"); }. In .NET Core, prefer <partial> tag helper or @await Html.PartialAsync().",
        keywords: ["Html.Partial","Html.RenderPartial","string","response stream","performance","MvcHtmlString","void","tag helper","PartialAsync"]
    },
    24: {
        answer: "Html.Action calls a child action method and returns result as string. Html.RenderAction writes directly to response stream. Both invoke a controller action and render its view. Used when partial needs its own data logic (e.g., sidebar with own DB query). Removed in .NET Core - replaced by View Components which are more testable and don't go through full pipeline.",
        keywords: ["Html.Action","Html.RenderAction","child action","controller","view components","replaced","own data","response stream",".net core"]
    },
    25: {
        answer: "View Components are like mini-controllers with their own logic (InvokeAsync method) and view. Unlike partial views, they can have their own business logic, DI, and don't depend on parent controller. Used for: navigation menus, shopping cart widget, login panel. Invoked: @await Component.InvokeAsync(\"Name\"). More testable than Html.Action. Replacement for [ChildActionOnly].",
        keywords: ["view components","InvokeAsync","mini-controller","business logic","di","independent","widget","testable","ChildActionOnly","replacement"]
    },
    26: {
        answer: "@RenderBody() in layout: renders the main content from child view (required, only one per layout). @RenderSection(\"name\", required: false): defines named placeholders for optional content like page-specific scripts/CSS. Child view defines: @section Scripts { <script>...</script> }. Allows views to inject content into specific layout positions.",
        keywords: ["@RenderBody","@RenderSection","layout","child view","@section","scripts","optional","required","placeholder","inject"]
    },
    27: {
        answer: "HTML Helpers are C# methods that generate HTML elements. Common ones: @Html.TextBoxFor(), @Html.DropDownListFor(), @Html.LabelFor(), @Html.ValidationMessageFor(), @Html.BeginForm(), @Html.ActionLink(), @Html.DisplayFor(), @Html.EditorFor(), @Html.HiddenFor(), @Html.CheckBoxFor(). They provide model binding and validation integration.",
        keywords: ["html helpers","TextBoxFor","DropDownListFor","LabelFor","ValidationMessageFor","BeginForm","ActionLink","model binding","generate html"]
    },
    28: {
        answer: "Tag Helpers look like standard HTML attributes (asp-for, asp-action, asp-controller) making views more readable. Better than HTML Helpers because: HTML-like syntax (designer-friendly), IntelliSense for attributes, easier to read/maintain. Examples: <input asp-for=\"Name\" />, <a asp-action=\"Index\">, <form asp-action=\"Create\">. Built-in: form, input, select, validation, environment, partial.",
        keywords: ["tag helpers","asp-for","asp-action","asp-controller","html-like","readable","intellisense","input","form","designer-friendly"]
    },
    29: {
        answer: "Custom HTML Helper: create static class with static extension method on IHtmlHelper. Return IHtmlContent or HtmlString. Example: public static IHtmlContent MyButton(this IHtmlHelper html, string text) { return new HtmlString($\"<button>{text}</button>\"); }. Use in view: @Html.MyButton(\"Click\"). Register namespace in _ViewImports.",
        keywords: ["custom","static class","extension method","IHtmlHelper","IHtmlContent","HtmlString","_ViewImports","return","namespace"]
    },
    30: {
        answer: "Custom Tag Helper: create class inheriting from TagHelper, override Process() or ProcessAsync() method. Apply [HtmlTargetElement] to specify which HTML element to target. Register in _ViewImports: @addTagHelper *, MyAssembly. Has access to TagHelperContext and TagHelperOutput to modify element attributes and content. More powerful than HTML helpers.",
        keywords: ["TagHelper","Process","ProcessAsync","HtmlTargetElement","_ViewImports","@addTagHelper","TagHelperOutput","inherit","attributes","custom"]
    },
    31: {
        answer: "Server-side rendering (SSR): HTML generated on server (Razor), full page sent to browser. Good for SEO, initial load. Client-side rendering (CSR): JavaScript renders UI in browser (React, Angular). Server sends JSON data via API. Better for interactivity, SPA. MVC uses SSR by default. Can combine: MVC for pages + AJAX for partial updates.",
        keywords: ["server-side","client-side","razor","javascript","seo","spa","json","api","html on server","browser renders","ajax"]
    },
    32: {
        answer: "Controller is a C# class that handles HTTP requests, inherits from Controller base class. Contains action methods that respond to URL routes. Responsibilities: receive request, validate input, call business/service layer, select and return appropriate view/result. Named with 'Controller' suffix (HomeController). Located in Controllers/ folder.",
        keywords: ["controller","http requests","action methods","inherits Controller","routes","validate","business layer","view","Controllers folder","suffix"]
    },
    33: {
        answer: "Default controller is 'Home', default action is 'Index'. Configured in routing: pattern: \"{controller=Home}/{action=Index}/{id?}\". When user visits root URL (/), it maps to HomeController.Index(). The '?' makes id parameter optional. Can change defaults in Program.cs route configuration.",
        keywords: ["Home","Index","default","routing","pattern","controller=Home","action=Index","id?","root url","Program.cs"]
    },
    34: {
        answer: "HomeController is the default controller that handles root URL requests. Typically contains: Index (homepage), About, Contact, Privacy actions. It's the entry point when users visit the site without specifying a controller. Created by default in MVC project template. Can be renamed by changing route defaults.",
        keywords: ["HomeController","root","default","Index","homepage","entry point","About","Contact","template","route defaults"]
    },
    35: {
        answer: "IActionResult is the interface/return type for action methods. It represents various types of responses (View, JSON, Redirect, File, StatusCode). Benefits: flexibility to return different result types from same method, testable (can check result type in unit tests). ActionResult is abstract base class implementing IActionResult. Prefer IActionResult for flexibility.",
        keywords: ["IActionResult","return type","interface","view","json","redirect","flexibility","testable","ActionResult","different result types"]
    },
    36: {
        answer: "Action Result types: ViewResult (View()), PartialViewResult (PartialView()), JsonResult (Json()), RedirectResult (Redirect(url)), RedirectToActionResult (RedirectToAction()), ContentResult (Content(string)), FileResult (File()), StatusCodeResult (StatusCode(404)), NotFoundResult (NotFound()), OkResult (Ok()), BadRequestResult (BadRequest()), EmptyResult.",
        keywords: ["ViewResult","JsonResult","RedirectResult","RedirectToActionResult","ContentResult","FileResult","NotFound","Ok","BadRequest","StatusCode"]
    },
    37: {
        answer: "RedirectToAction: redirects to specific action/controller in same app (uses action/controller names). RedirectToRoute: redirects using route name defined in routing config. Redirect: redirects to any absolute/relative URL (including external). All perform 302 redirect (temporary). Use Permanent variants for 301. RedirectToAction is most common for internal navigation.",
        keywords: ["RedirectToAction","RedirectToRoute","Redirect","302","301","action name","route name","url","internal","external","permanent"]
    },
    38: {
        answer: "return View(): returns full ViewResult rendered within _Layout page (complete HTML page). return PartialView(): returns view without layout, just the HTML fragment. PartialView used for AJAX calls that update part of page. View for full page navigation. PartialView doesn't execute _ViewStart.cshtml.",
        keywords: ["View()","PartialView()","layout","full page","fragment","ajax","without layout","_ViewStart","html","partial update"]
    },
    39: {
        answer: "Ways to pass data from Controller to View: 1) Model (strongly typed, preferred) - return View(model). 2) ViewBag (dynamic property) - ViewBag.Name = value. 3) ViewData (dictionary) - ViewData[\"key\"] = value. 4) TempData (survives redirect) - TempData[\"key\"] = value. 5) ViewData with ViewBag are aliases internally. Prefer Model for type safety.",
        keywords: ["model","ViewBag","ViewData","TempData","strongly typed","dynamic","dictionary","redirect","preferred","pass data"]
    },
    40: {
        answer: "ViewData: dictionary (ViewDataDictionary), requires casting, current request only. ViewBag: dynamic wrapper over ViewData, no casting, current request only. TempData: stores data across requests/redirects (uses session/cookie), read-once (deleted after read). Session: persists across multiple requests for entire user session, larger data. Use Model > ViewBag/ViewData > TempData > Session.",
        keywords: ["ViewData","ViewBag","TempData","Session","dictionary","dynamic","redirect","current request","casting","read-once","persist"]
    }
};

INTERVIEW_ANSWERS['mvc_interview_questions'][41] = {
    answer: "TempData internally uses TempData Providers - CookieTempDataProvider (default in .NET Core, stores in encrypted cookie) or SessionStateTempDataProvider (stores in server session). Data is marked for deletion after being read. Serialized as JSON. Limited size with cookie provider. Configure in services: services.AddControllersWithViews().AddCookieTempDataProvider().",
    keywords: ["TempDataProvider","cookie","session","encrypted","deleted after read","json","serialized","CookieTempDataProvider","SessionState","configure"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][42] = {
    answer: "TempData.Keep('key'): marks data to NOT be deleted after current request - retains for next request too. TempData.Peek('key'): reads value WITHOUT marking for deletion (value survives). Default behavior: TempData is deleted after being read. Use Peek to read without consuming. Use Keep after reading to retain.",
    keywords: ["Keep","Peek","not deleted","without marking","survives","read","consume","retain","next request","default deleted"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][43] = {
    answer: "HttpContext encapsulates all HTTP-specific information about a request. Contains: Request (URL, headers, body, query string, cookies), Response (status code, headers, body), Session, User (authentication info), Items (per-request storage), Connection. Accessed via Controller.HttpContext or injected IHttpContextAccessor in services.",
    keywords: ["HttpContext","Request","Response","Session","User","headers","cookies","query string","IHttpContextAccessor","per-request"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][44] = {
    answer: "MVC Pipeline: HTTP Request → Middleware Pipeline (auth, routing, etc.) → Routing matches Controller/Action → Controller Factory creates controller → Model Binding (binds request data to parameters) → Action Filters (before) → Action Method executes → Action Filters (after) → Result Execution (View rendering) → Result Filters → Response sent to client.",
    keywords: ["pipeline","middleware","routing","controller factory","model binding","action filters","action method","result execution","view rendering","response"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][45] = {
    answer: "Browser sends HTTP request → DNS resolves domain → Request reaches server → Kestrel receives → Middleware pipeline processes (logging, auth, routing) → Endpoint routing matches URL to action → Controller instantiated via DI → Model binding maps data → Action method executes → Returns IActionResult → View engine renders Razor to HTML → Response travels back through middleware → HTML displayed in browser.",
    keywords: ["dns","kestrel","middleware","routing","controller","model binding","action","view engine","razor","html","response"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][46] = {
    answer: "Routing maps incoming URLs to Controller/Action methods. Two types: Conventional routing (defined in Program.cs with pattern template like '{controller}/{action}/{id?}') and Attribute routing ([Route], [HttpGet('path')] on controllers/actions). URL segments map to controller name, action name, and parameters. Route constraints restrict parameter types ({id:int}).",
    keywords: ["routing","url","controller","action","conventional","attribute","[Route]","pattern","constraints","segments","map"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][47] = {
    answer: "Route Table is a collection of all defined routes in the application. Created during app startup when routing middleware is configured. In .NET Core: app.MapControllerRoute() or attribute routes are compiled into endpoint table. Routes are evaluated in order - first match wins. Defined in Program.cs. Contains: name, pattern, defaults, constraints.",
    keywords: ["route table","startup","MapControllerRoute","endpoint","order","first match","Program.cs","pattern","defaults","constraints"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][48] = {
    answer: "Controller Factory is responsible for creating controller instances. In .NET Core, DI container acts as controller factory - creates controllers and injects dependencies via constructor. Default: DefaultControllerFactory. Controllers are created per-request (transient). Can customize by implementing IControllerFactory. Resolves dependencies automatically.",
    keywords: ["controller factory","di container","creates","per-request","transient","DefaultControllerFactory","IControllerFactory","dependencies","constructor","inject"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][49] = {
    answer: "Action Invoker is responsible for invoking the correct action method on the controller. It handles: finding the matching action method, model binding parameters, executing filters (authorization, action, result), invoking the action, processing the result. In .NET Core, this is handled by ControllerActionInvoker internally.",
    keywords: ["action invoker","invoke","action method","model binding","filters","ControllerActionInvoker","parameters","finding","matching","result"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][50] = {
    answer: "Model Binding maps HTTP request data to action method parameters/model properties. Steps: 1) Identify target parameter/model. 2) Look for values in order: Form data, Route data, Query string, Headers. 3) Convert string values to target type. 4) Validate using data annotations. 5) Populate ModelState with errors. Automatic process - no manual parsing needed.",
    keywords: ["model binding","maps","request data","parameters","form","route","query string","convert","validate","ModelState","automatic"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][51] = {
    answer: "Value Providers supply values to model binder from different request sources. Built-in providers (in order): FormValueProvider (form data), RouteDataValueProvider (URL route segments), QueryStringValueProvider (query string), JQueryFormValueProvider. Custom value providers can be created by implementing IValueProvider. They abstract where data comes from.",
    keywords: ["value providers","FormValueProvider","RouteDataValueProvider","QueryStringValueProvider","IValueProvider","custom","order","sources","abstract"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][52] = {
    answer: "Model binding searches for values in this order: 1) Form data (POST body), 2) Route values (URL segments like /controller/action/5), 3) Query string (?id=5). Can be overridden with explicit attributes: [FromBody], [FromRoute], [FromQuery], [FromForm], [FromHeader]. First match wins. [FromBody] reads entire request body (JSON).",
    keywords: ["order","form data","route values","query string","FromBody","FromRoute","FromQuery","FromForm","first match","override"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][53] = {
    answer: "Action methods are public methods in a controller that handle HTTP requests and return IActionResult. They map to URL endpoints via routing. Can accept parameters (bound from request). Can be decorated with HTTP verb attributes ([HttpGet], [HttpPost]). Can have filters applied. Non-public methods and methods with [NonAction] are not action methods.",
    keywords: ["action methods","public","controller","IActionResult","endpoints","routing","parameters","HttpGet","HttpPost","NonAction"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][54] = {
    answer: "[HttpGet]: handles GET requests (retrieve/display data, idempotent, data in URL). Used for: showing forms, listing data, search. [HttpPost]: handles POST requests (submit/modify data, data in body, not cached). Used for: form submission, creating resources. GET is safe/cacheable, POST is for state changes. Use [HttpGet] for reads, [HttpPost] for writes.",
    keywords: ["HttpGet","HttpPost","GET","POST","retrieve","submit","idempotent","body","url","form submission","reads","writes"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][55] = {
    answer: "[HttpPut]: update entire resource (replace all fields). [HttpDelete]: delete a resource. [HttpPatch]: partial update (modify specific fields). All used primarily in Web API/RESTful services. PUT is idempotent (same result if called multiple times). DELETE removes resource. PATCH sends only changed fields (smaller payload than PUT).",
    keywords: ["HttpPut","HttpDelete","HttpPatch","update","delete","partial","idempotent","rest","web api","replace","resource"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][56] = {
    answer: "[ActionName] attribute changes the action method's name as seen by routing, without changing the actual C# method name. Example: [ActionName(\"List\")] public IActionResult GetAllProducts() - accessible via /Controller/List. Used when method name conflicts with reserved words or when you want cleaner URLs different from method names.",
    keywords: ["ActionName","routing name","different","url","method name","conflicts","cleaner","attribute","accessible"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][57] = {
    answer: "[NonAction] marks a public method in controller as NOT an action method - it won't respond to any HTTP requests. Used when you need a public helper method in controller that shouldn't be URL-accessible. Without [NonAction], all public methods in controller are treated as actions by default.",
    keywords: ["NonAction","not action","public method","helper","not accessible","url","default","attribute","http requests"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][58] = {
    answer: "[ChildActionOnly] in MVC 5 restricted an action to only be called from views (Html.Action), not directly via URL. Removed in .NET Core. Replaced by View Components - which have InvokeAsync method, own view, support DI, and are more testable. View Components don't go through full controller pipeline.",
    keywords: ["ChildActionOnly","MVC 5","Html.Action","view components","replaced","InvokeAsync",".net core","not via url","di","testable"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][59] = {
    answer: "Use HTTP verb attributes: [HttpGet], [HttpPost], [HttpPut], [HttpDelete], [HttpPatch]. Apply to action method. Multiple verbs: [AcceptVerbs(\"GET\",\"POST\")]. If no attribute specified, action responds to ALL HTTP methods. Best practice: always specify HTTP method explicitly for security and clarity.",
    keywords: ["HttpGet","HttpPost","HttpPut","HttpDelete","AcceptVerbs","restrict","explicit","all methods","verb attributes","security"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][60] = {
    answer: "Async action methods use async/await to prevent thread blocking during I/O operations (database calls, API calls, file operations). Returns Task<IActionResult>. Benefits: frees thread pool threads to handle other requests (better scalability), doesn't improve speed of individual request but improves throughput. Use for any I/O-bound operation.",
    keywords: ["async","await","Task<IActionResult>","thread blocking","I/O","scalability","thread pool","throughput","database","api calls"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][61] = {
    answer: "Model Binding automatically maps incoming HTTP request data (form fields, route values, query strings, headers, body) to action method parameters or model objects. Matches by property/parameter NAME. Eliminates manual Request.Form[] parsing. Supports complex objects, collections, nested objects. If binding fails, ModelState.IsValid returns false.",
    keywords: ["model binding","automatic","maps","request data","parameters","name matching","complex objects","ModelState","form fields","eliminates parsing"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][62] = {
    answer: "[FromBody]: binds from request body (JSON/XML), used for complex objects in API. [FromQuery]: from URL query string (?key=value). [FromRoute]: from URL route segments (/controller/action/{id}). [FromForm]: from form POST data. [FromHeader]: from HTTP request headers. Override default binding source. Only one [FromBody] per action.",
    keywords: ["FromBody","FromQuery","FromRoute","FromForm","FromHeader","json","query string","route","form","headers","override"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][63] = {
    answer: "[Bind] attribute controls which properties are included/excluded in model binding. [Bind(\"Name,Email\")] - only binds specified properties (whitelist). Used to prevent over-posting. Example: public IActionResult Create([Bind(\"Name,Email\")] Employee emp). Alternative: use ViewModels with only needed properties (preferred approach).",
    keywords: ["Bind","include","exclude","over-posting","whitelist","properties","prevent","viewmodel","preferred","specified"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][64] = {
    answer: "Over-posting (mass assignment): attacker adds extra form fields (like IsAdmin=true) that bind to model properties not intended to be user-editable. Prevention: 1) Use ViewModels with only needed properties (best). 2) [Bind] attribute to whitelist. 3) [BindNever] on sensitive properties. 4) TryUpdateModelAsync with property list. Never bind entity directly from form.",
    keywords: ["over-posting","mass assignment","extra fields","IsAdmin","ViewModel","Bind","BindNever","whitelist","security","sensitive"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][65] = {
    answer: "ModelState is a dictionary holding validation state of model properties. ModelState.IsValid returns true if ALL validations pass (data annotations + custom validation). Check in action: if(!ModelState.IsValid) return View(model). Contains errors per property accessible in View via validation tag helpers. ModelState.AddModelError() adds custom errors.",
    keywords: ["ModelState","IsValid","validation","dictionary","data annotations","errors","AddModelError","return view","tag helpers","check"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][66] = {
    answer: "Common Data Annotations: [Required], [StringLength(max, MinLength=min)], [MaxLength], [Range(min,max)], [RegularExpression], [EmailAddress], [Phone], [Url], [Compare(\"OtherProp\")], [DataType(DataType.Password)], [Display(Name=\"\")], [Key], [CreditCard]. Applied to model properties. Work with client-side jQuery validation automatically.",
    keywords: ["Required","StringLength","Range","RegularExpression","EmailAddress","Compare","DataType","Display","Key","client-side"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][67] = {
    answer: "Custom Validation Attribute: create class inheriting ValidationAttribute, override IsValid(object value, ValidationContext context) method. Return ValidationResult.Success or new ValidationResult(errorMessage). Example: [MinAge(18)] checks if date makes user 18+. Register: just apply [MinAge] to property. Can access other properties via ValidationContext.",
    keywords: ["ValidationAttribute","IsValid","override","ValidationResult","custom","inherit","ValidationContext","other properties","attribute","error message"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][68] = {
    answer: "IValidatableObject is an interface implemented by the model class itself for cross-property validation. Implement Validate(ValidationContext) method that returns IEnumerable<ValidationResult>. Example: EndDate must be after StartDate. Called after data annotations pass. Allows complex validation logic involving multiple properties. Server-side only.",
    keywords: ["IValidatableObject","Validate","cross-property","ValidationResult","multiple properties","server-side","complex","interface","after annotations"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][69] = {
    answer: "Client-side: JavaScript validates in browser BEFORE form submission (instant feedback, reduces server calls). Uses jQuery Validation + Unobtrusive. Server-side: validates in controller after form POST (ModelState.IsValid). Always required - client-side can be bypassed. Best practice: use BOTH. Client for UX, Server for security.",
    keywords: ["client-side","server-side","javascript","browser","before submit","ModelState","jQuery validation","both","security","ux","bypass"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][70] = {
    answer: "Remote Validation validates via AJAX call to server without full form submit. Used for checks requiring database (e.g., 'username already exists'). Apply [Remote(\"ActionName\",\"Controller\")] on property. Action returns Json(true) if valid, Json(\"error message\") if not. Validates on field blur. Requires jQuery validation unobtrusive AJAX script.",
    keywords: ["Remote","ajax","server","without submit","database","username exists","Json(true)","blur","jQuery","unobtrusive"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][71] = {
    answer: "In View: <span asp-validation-for=\"PropertyName\"></span> (individual field error). <div asp-validation-summary=\"All\"></div> (all errors summary). Summary options: None, ModelOnly (non-property errors), All. Requires jQuery validation scripts for client-side display. Server-side: errors display when ModelState has errors and view is re-rendered.",
    keywords: ["asp-validation-for","asp-validation-summary","span","div","All","ModelOnly","jQuery","scripts","field error","summary"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][72] = {
    answer: "Filters are attributes/classes that run code BEFORE or AFTER certain stages of request pipeline. Used for cross-cutting concerns: authorization, logging, caching, exception handling, validation. Avoid repeating same logic in every action. Can be applied globally, per controller, or per action. Implement specific interfaces or inherit from Attribute.",
    keywords: ["filters","before","after","pipeline","cross-cutting","authorization","logging","caching","exception","global","controller","action"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][73] = {
    answer: "5 filter types (execution order): 1) Authorization Filters (first - check access). 2) Resource Filters (caching, before model binding). 3) Action Filters (before/after action method). 4) Exception Filters (handle unhandled exceptions). 5) Result Filters (before/after result execution/view rendering). Each has specific interface to implement.",
    keywords: ["authorization","resource","action","exception","result","5 types","order","before","after","interface","caching","model binding"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][74] = {
    answer: "Authorization Filter runs FIRST before any other filter. Checks if user is authorized to access resource. Built-in: [Authorize], [AllowAnonymous]. Implement IAuthorizationFilter or AuthorizeAttribute. Short-circuits pipeline if unauthorized (returns 401/403). Can use policies: [Authorize(Policy=\"AdminOnly\")]. Runs before model binding.",
    keywords: ["authorization filter","first","Authorize","AllowAnonymous","IAuthorizationFilter","401","403","policy","short-circuit","before model binding"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][75] = {
    answer: "Resource Filter runs after authorization but BEFORE model binding and action execution. Has OnResourceExecuting (before) and OnResourceExecuted (after everything). Used for: response caching (short-circuit if cached), custom model binding setup, resource-intensive setup. Can short-circuit entire pipeline by setting result in Executing.",
    keywords: ["resource filter","before model binding","after authorization","OnResourceExecuting","OnResourceExecuted","caching","short-circuit","setup"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][76] = {
    answer: "Action Filter wraps the action method execution. OnActionExecuting: runs before action (validate, modify parameters, log). OnActionExecuted: runs after action (modify result, log, handle errors). Implement IActionFilter or IAsyncActionFilter. Example: log execution time, validate model automatically, set common ViewData.",
    keywords: ["action filter","OnActionExecuting","OnActionExecuted","before action","after action","IActionFilter","log","validate","modify","wrap"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][77] = {
    answer: "Result Filter wraps the result execution (view rendering). OnResultExecuting: before result renders (can modify or replace result). OnResultExecuted: after result is rendered (logging, modify response headers). Implement IResultFilter. Used for: adding response headers, modifying view result, post-processing rendered output.",
    keywords: ["result filter","OnResultExecuting","OnResultExecuted","view rendering","IResultFilter","headers","modify result","before renders","after renders"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][78] = {
    answer: "Exception Filter handles unhandled exceptions thrown within action methods, model binding, action/result filters. Implement IExceptionFilter with OnException method. Set context.ExceptionHandled = true after handling. Can return custom error view/result. Not triggered for exceptions in authorization/resource filters. Alternative: UseExceptionHandler middleware.",
    keywords: ["exception filter","unhandled","IExceptionFilter","OnException","ExceptionHandled","custom error","middleware","UseExceptionHandler","action methods"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][79] = {
    answer: "Filter execution order: Authorization → Resource (Executing) → Model Binding → Action (Executing) → ACTION METHOD → Action (Executed) → Result (Executing) → VIEW RENDERS → Result (Executed) → Resource (Executed). Exception filter catches at any point. Global → Controller → Action level (most general to most specific).",
    keywords: ["order","authorization","resource","action","result","global","controller","action level","general","specific","exception"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][80] = {
    answer: "Create class implementing IActionFilter (or ActionFilterAttribute for convenience). Override OnActionExecuting and/or OnActionExecuted. Register: [MyFilter] on action/controller, or globally in Program.cs: options.Filters.Add<MyFilter>(). For DI support, use [ServiceFilter(typeof(MyFilter))] and register in DI container.",
    keywords: ["IActionFilter","ActionFilterAttribute","OnActionExecuting","override","register","globally","ServiceFilter","di","attribute","Program.cs"]
};

INTERVIEW_ANSWERS['mvc_interview_questions'][81] = {
    answer: "Global filter: applies to ALL actions in app (registered in Program.cs options.Filters). Controller-level: [MyFilter] on controller class, applies to all actions in that controller. Action-level: [MyFilter] on specific action method. Execution: Global first → Controller → Action. Allows granular control over where cross-cutting logic runs.",
    keywords: ["global","controller-level","action-level","all actions","specific","Program.cs","options.Filters","granular","execution order"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][82] = {
    answer: "[ServiceFilter(typeof(MyFilter))]: resolves filter from DI container - filter must be registered in DI (AddScoped/Transient). [TypeFilter(typeof(MyFilter))]: creates filter instance using DI but doesn't need explicit registration - can also pass constructor arguments. Both allow filters to have injected dependencies. ServiceFilter is simpler, TypeFilter is more flexible.",
    keywords: ["ServiceFilter","TypeFilter","di","container","registered","constructor arguments","dependencies","inject","AddScoped","flexible"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][83] = {
    answer: "Areas are a way to organize large MVC application into smaller functional groups. Each area has its own Controllers, Views, Models folders. Used for: Admin panel, Customer portal, API section. Structure: Areas/Admin/Controllers/, Areas/Admin/Views/. Adds [Area(\"Admin\")] attribute on controllers. Separate routing configuration.",
    keywords: ["areas","organize","large app","functional groups","admin","own controllers views","[Area]","folder structure","separate routing"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][84] = {
    answer: "Use Areas when: app has distinct functional sections (Admin, Sales, HR), large team works on different modules independently, need clear folder organization, want separate routing per section. Don't use for small apps. Each area acts like a mini-MVC application within the main app. Helps manage complexity.",
    keywords: ["distinct sections","large team","modules","folder organization","separate routing","admin","mini-mvc","complexity","independent"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][85] = {
    answer: "Configure area routing in Program.cs: app.MapControllerRoute(name: \"areas\", pattern: \"{area:exists}/{controller=Home}/{action=Index}/{id?}\"). Place BEFORE default route. Add [Area(\"AreaName\")] attribute on area controllers. Area route must include {area} token. Constraint ':exists' ensures area actually exists.",
    keywords: ["MapControllerRoute","area:exists","pattern","{area}","Program.cs","before default","[Area]","constraint","configure"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][86] = {
    answer: "Create links between areas using asp-area tag helper: <a asp-area=\"Admin\" asp-controller=\"Home\" asp-action=\"Index\">Admin</a>. To link to main area (no area): asp-area=\"\". In Html helpers: @Html.ActionLink(\"text\",\"action\",\"controller\", new { area = \"Admin\" }). Always specify area explicitly when crossing area boundaries.",
    keywords: ["asp-area","tag helper","cross area","asp-controller","asp-action","Html.ActionLink","area=\"\"","main","boundaries","explicit"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][87] = {
    answer: "State Management techniques in MVC: Client-side: Cookies, Query Strings, Hidden Fields, ViewData/ViewBag (request only). Server-side: Session, TempData, Cache (Memory/Distributed), Database. Choose based on: data size, security needs, lifetime required. Prefer server-side for sensitive data. Stateless HTTP needs these mechanisms to maintain state.",
    keywords: ["state management","cookies","session","query string","hidden fields","TempData","cache","database","client-side","server-side","stateless"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][88] = {
    answer: "Session stores user-specific data on server across multiple requests. ASP.NET Core uses distributed cache as backing store (in-memory default, Redis/SQL for production). Session identified by cookie (SessionId). Configure: services.AddSession(), app.UseSession(). Access: HttpContext.Session.SetString/GetString. Has timeout (default 20 min sliding).",
    keywords: ["session","server","multiple requests","distributed cache","cookie","SessionId","AddSession","UseSession","SetString","GetString","timeout"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][89] = {
    answer: "Configure Session in Program.cs: services.AddDistributedMemoryCache() (or Redis), services.AddSession(options => { options.IdleTimeout = TimeSpan.FromMinutes(30); options.Cookie.HttpOnly = true; }), app.UseSession() (after UseRouting, before MapControllers). Store: HttpContext.Session.SetString(\"key\",\"value\"). Retrieve: HttpContext.Session.GetString(\"key\").",
    keywords: ["AddDistributedMemoryCache","AddSession","UseSession","IdleTimeout","Cookie.HttpOnly","SetString","GetString","Program.cs","Redis","configure"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][90] = {
    answer: "Session: per-user, server-side, persists across requests until timeout, larger data. TempData: per-user, survives ONE redirect only (read-once), backed by session/cookie, for messages between redirects. Cache: shared across ALL users, for frequently accessed data, configurable expiration. Use TempData for flash messages, Session for user state, Cache for app-wide data.",
    keywords: ["session","tempdata","cache","per-user","shared","one redirect","timeout","read-once","expiration","flash messages","app-wide"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][91] = {
    answer: "Cookies store small data on client browser. In ASP.NET Core: Response.Cookies.Append(\"key\",\"value\", options) to create. Request.Cookies[\"key\"] to read. Response.Cookies.Delete(\"key\") to remove. Options: Expires, HttpOnly (no JS access), Secure (HTTPS only), SameSite. Used for: remember me, preferences, tracking. Max size ~4KB.",
    keywords: ["cookies","client","browser","Append","Request.Cookies","Delete","Expires","HttpOnly","Secure","SameSite","4KB","preferences"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][92] = {
    answer: "Query String passes data in URL after ? symbol: /search?keyword=mvc&page=2. Access in controller: Request.Query[\"keyword\"] or via model binding (action parameter with same name). Visible in URL (no sensitive data). Used for: search filters, pagination, sorting. Data lost on new request. Bookmarkable. Limited length (~2048 chars).",
    keywords: ["query string","url","?","visible","search","pagination","model binding","parameter","bookmarkable","no sensitive","limited"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][93] = {
    answer: "Hidden Field stores data in form that's not visible to user but sent on form submit. Tag helper: <input type=\"hidden\" asp-for=\"Id\" />. Used for: passing IDs, anti-forgery tokens, maintaining state between posts. Data is in HTML source (not truly secure - can be modified with dev tools). Server-side validation still needed.",
    keywords: ["hidden field","input type hidden","not visible","form submit","asp-for","Id","anti-forgery","html source","not secure","dev tools"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][94] = {
    answer: "Bundling combines multiple CSS/JS files into fewer files (reduces HTTP requests). Minification removes whitespace, comments, shortens variable names (reduces file size). Together they improve page load performance. In .NET Core: use BuildBundlerMinifier NuGet package with bundleconfig.json, or WebOptimizer, or webpack/gulp for complex scenarios.",
    keywords: ["bundling","minification","combine","fewer files","reduce","whitespace","performance","BuildBundlerMinifier","bundleconfig.json","http requests"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][95] = {
    answer: "In ASP.NET Core: 1) BundlerMinifier (bundleconfig.json + MSBuild) - simple setup. 2) WebOptimizer middleware (runtime bundling). 3) LibMan for downloading client libraries + bundleconfig.json. 4) webpack/gulp for complex SPA scenarios. Environment tag helper: <environment include=\"Production\"> for bundled, Development for individual files.",
    keywords: ["BundlerMinifier","WebOptimizer","bundleconfig.json","LibMan","webpack","environment tag helper","Production","Development","runtime"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][96] = {
    answer: "LibMan (Library Manager) is a lightweight client-side library acquisition tool via libman.json. Downloads libraries (jQuery, Bootstrap) from CDN/unpkg. Alternative to npm for simple needs. Webpack is full module bundler for complex SPAs - handles JS modules, CSS, images, code splitting, tree shaking. Use LibMan for simple MVC, Webpack for SPA/complex builds.",
    keywords: ["LibMan","libman.json","client-side libraries","CDN","webpack","module bundler","npm","simple","SPA","jQuery","Bootstrap"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][97] = {
    answer: "Scaffolding auto-generates CRUD code (Controller + Views) based on a model class and DbContext. In Visual Studio: right-click Controllers → Add Scaffolded Item → MVC Controller with views using EF. Generates: Create, Edit, Delete, Details, Index views + controller with all CRUD actions. Speeds up development, provides starting template to customize.",
    keywords: ["scaffolding","auto-generate","crud","controller","views","model","DbContext","Visual Studio","template","customize"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][98] = {
    answer: "Scaffolded CRUD templates generate: Index (list all with table), Details (display single record), Create (form + POST action), Edit (form with existing data + POST), Delete (confirm + POST). Each has corresponding GET and POST action methods in controller. Uses EF Core for database operations. Includes validation and anti-forgery tokens.",
    keywords: ["Index","Details","Create","Edit","Delete","GET","POST","list","form","EF Core","validation","anti-forgery"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][99] = {
    answer: "Customize scaffolded code by: modifying generated views/controllers directly, editing T4 templates (in VS template folders), creating custom scaffolders, using partial views to extend. After scaffolding: add ViewModels, add service layer, add validation, improve UI, add authorization, add error handling. Scaffolding is starting point, not final code.",
    keywords: ["customize","modify","T4 templates","partial views","starting point","viewmodel","service layer","validation","authorization","extend"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][100] = {
    answer: "MVC returns Views (HTML) for browser, supports both UI + API. Web API returns data (JSON/XML) for any client (mobile, SPA, services). MVC has ViewResult, Web API has ObjectResult. MVC uses Controller base class, Web API uses ControllerBase. In .NET Core, both are unified - same controller can return View or JSON. Web API has content negotiation.",
    keywords: ["MVC","Web API","views","html","json","xml","browser","any client","Controller","ControllerBase","unified","content negotiation"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][101] = {
    answer: "Use MVC when: building server-rendered web pages, need Razor views, SEO important, traditional web app. Use Web API when: building RESTful services, client is SPA/mobile/other service, need JSON responses, multiple front-ends consume same data. Can combine: MVC for pages + Web API for AJAX calls in same project.",
    keywords: ["MVC","Web API","server-rendered","SPA","mobile","REST","JSON","SEO","razor","multiple front-ends","combine"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][102] = {
    answer: "Yes, MVC and Web API coexist in same ASP.NET Core project. Both use same pipeline, routing, DI, filters. Controller (with views) and ControllerBase (API only) can exist together. Route differentiation: MVC uses conventional routes (/controller/action), API uses attribute routes (/api/resource). Shared services, models, middleware.",
    keywords: ["coexist","same project","Controller","ControllerBase","route differentiation","api","conventional","attribute","shared","unified"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][103] = {
    answer: "Controller: inherits from ControllerBase + adds View support (View(), PartialView(), ViewData, ViewBag, TempData, Json()). Used for MVC controllers returning views. ControllerBase: base class with only HTTP-related features (Ok(), NotFound(), BadRequest(), StatusCode()). Used for API controllers. Both support model binding, filters, routing.",
    keywords: ["Controller","ControllerBase","View()","ViewData","ViewBag","Ok()","NotFound()","BadRequest()","MVC","API","inherits"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][104] = {
    answer: "File upload: use IFormFile parameter in action. Form: <form enctype=\"multipart/form-data\"><input type=\"file\" asp-for=\"Photo\" />. Controller: async Task<IActionResult> Upload(IFormFile file) { using var stream = new FileStream(path, FileMode.Create); await file.CopyToAsync(stream); }. Validate: file.Length, file.ContentType, file extension. Store in wwwroot or cloud.",
    keywords: ["IFormFile","multipart/form-data","input type file","CopyToAsync","FileStream","upload","validate","extension","ContentType","wwwroot"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][105] = {
    answer: "Search: accept search term in action parameter, filter with LINQ .Where(). Pagination: accept pageNumber/pageSize, use .Skip((page-1)*size).Take(size). Return ViewModel with: Items list, CurrentPage, TotalPages, SearchTerm. View: show items + pagination links (Previous/Next/page numbers). Libraries: X.PagedList simplifies pagination.",
    keywords: ["search","pagination","Where","Skip","Take","pageNumber","pageSize","TotalPages","CurrentPage","X.PagedList","LINQ"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][106] = {
    answer: "Controller: get list from DB, create SelectList: ViewBag.Departments = new SelectList(departments, \"Id\", \"Name\"). View: <select asp-for=\"DepartmentId\" asp-items=\"ViewBag.Departments\"><option value=\"\">Select</option></select>. Better approach: put SelectList in ViewModel. For dependent dropdowns, use AJAX to load child items based on parent selection.",
    keywords: ["SelectList","asp-items","asp-for","dropdown","ViewBag","database","option","ViewModel","dependent","AJAX","Id","Name"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][107] = {
    answer: "Multiple submit buttons: 1) Different name attribute: <button name=\"action\" value=\"save\">, check in controller: if(action==\"save\"). 2) formaction attribute: <button formaction=\"/Controller/Save\">. 3) [HttpPost] with different action names. 4) JavaScript to change form action before submit. Method 1 and 2 are most common.",
    keywords: ["multiple submit","name","value","formaction","check in controller","different action","javascript","button","form"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][108] = {
    answer: "AJAX in MVC: use jQuery $.ajax() or fetch API to call controller actions without full page reload. Controller returns Json() or PartialView(). Setup: $.ajax({ url: '/Controller/Action', type: 'POST', data: { id: 5 }, success: function(result) { $('#div').html(result); } }). Add [ValidateAntiForgeryToken] for POST. Include RequestVerificationToken in AJAX header.",
    keywords: ["ajax","jQuery","$.ajax","fetch","without reload","Json()","PartialView","success","url","POST","anti-forgery"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][109] = {
    answer: "Return JSON from controller: return Json(data) which serializes object to JSON. For API: return Ok(data) which does content negotiation. Example: return Json(new { success = true, message = \"Saved\" }). Used with AJAX calls. In .NET Core, Json() uses System.Text.Json by default. Can configure JsonOptions for camelCase, null handling.",
    keywords: ["Json()","return Json","serialize","AJAX","Ok()","System.Text.Json","camelCase","content negotiation","JsonOptions","object"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][110] = {
    answer: "404 handling: app.UseStatusCodePagesWithReExecute(\"/Error/{0}\") - routes to Error controller with status code. Custom error page: create ErrorController with action for each code. Global exception: app.UseExceptionHandler(\"/Home/Error\") - catches unhandled exceptions. Set in Program.cs. Use environment check: Development shows details, Production shows friendly page.",
    keywords: ["404","UseStatusCodePagesWithReExecute","UseExceptionHandler","ErrorController","custom error","friendly page","Development","Production","unhandled"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][111] = {
    answer: "PRG (Post-Redirect-Get): after form POST, redirect to GET action instead of returning view directly. Prevents double-submission on browser refresh. Flow: POST form → Process → RedirectToAction (302) → GET action shows result. Use TempData to pass success message across redirect. Standard pattern for form submissions.",
    keywords: ["PRG","Post-Redirect-Get","double submission","refresh","RedirectToAction","302","TempData","success message","form","standard pattern"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][112] = {
    answer: "Prevent double form submission: 1) Disable submit button on click (JavaScript). 2) PRG pattern (redirect after post). 3) Anti-forgery token (unique per form). 4) Server-side: check for duplicate in DB before saving (idempotency key). 5) Loading spinner overlay. JavaScript: btn.disabled=true on form submit event. Most reliable: combine client + server approaches.",
    keywords: ["double submission","disable button","PRG","anti-forgery","idempotency","loading spinner","javascript","server-side","duplicate","combine"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][113] = {
    answer: "Cascading dropdowns: Parent dropdown change triggers AJAX call to load child options. Example: Country → State → City. JavaScript: $('#Country').change(function(){ $.getJSON('/GetStates?countryId='+$(this).val(), function(data){ populate #State dropdown }); }). Controller: returns Json(states.Where(s=>s.CountryId==id)). Clear child on parent change.",
    keywords: ["cascading","dependent","AJAX","parent change","$.getJSON","Country","State","City","populate","Json","trigger"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][114] = {
    answer: "Multiple file upload: use List<IFormFile> or IFormFile[] parameter. Form: <input type=\"file\" multiple asp-for=\"Files\" />. Add enctype=\"multipart/form-data\". Controller: foreach(var file in files) { save each }. Validate each file's size, type, extension. Consider: max request size (configure in Kestrel), progress bar with JavaScript.",
    keywords: ["multiple files","List<IFormFile>","multiple attribute","foreach","enctype","validate","size","Kestrel","progress bar","input type file"]
};
INTERVIEW_ANSWERS['mvc_interview_questions'][115] = {
    answer: "Role-based menu visibility: check User.IsInRole(\"Admin\") in View/Layout using @if. Example: @if(User.IsInRole(\"Admin\")){ <li>Admin Panel</li> }. Better approach: use policy-based with IAuthorizationService injected in view. Claims-based: User.HasClaim(). Configure roles in Identity. Tag helper: <div asp-authorize asp-roles=\"Admin\">content</div> (custom).",
    keywords: ["role-based","User.IsInRole","@if","menu","Admin","IAuthorizationService","policy","claims","Identity","visibility","Layout"]
};

// SQL Q16-Q99 (remaining)
INTERVIEW_ANSWERS['sql_interview_questions'][16] = {
    answer: "CROSS JOIN returns Cartesian product - every row from first table combined with every row from second table. No ON condition needed. If Table A has 5 rows and Table B has 3 rows, result has 15 rows. Rarely used in practice. Use case: generating all possible combinations (e.g., all sizes × all colors). Syntax: SELECT * FROM A CROSS JOIN B.",
    keywords: ["cross join","cartesian product","every row","no ON","combination","all possible","multiply","no condition","rarely used"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][17] = {
    answer: "Self Join is joining a table with itself. Uses table aliases to treat it as two different tables. Used for hierarchical/recursive data like Employee-Manager relationship. Example: SELECT e.Name, m.Name AS Manager FROM Employee e LEFT JOIN Employee m ON e.ManagerId = m.EmployeeId. Finds relationships within same table.",
    keywords: ["self join","same table","aliases","hierarchical","employee","manager","ManagerId","recursive","within","two copies"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][18] = {
    answer: "INNER JOIN returns only rows that have matching values in BOTH tables (intersection). LEFT JOIN returns ALL rows from left table + matching rows from right table (NULL for non-matching). Use INNER when you need only matched data. Use LEFT when you need all records from one side regardless of match.",
    keywords: ["inner join","left join","matching both","all rows left","NULL","intersection","regardless","non-matching","only matched"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][19] = {
    answer: "Join more than 2 tables by chaining JOIN clauses. Example: SELECT * FROM Orders o INNER JOIN Customers c ON o.CustomerId = c.Id INNER JOIN Products p ON o.ProductId = p.Id INNER JOIN Categories cat ON p.CategoryId = cat.Id. Each JOIN adds one more table with its ON condition. Can mix join types (INNER, LEFT).",
    keywords: ["chain","multiple joins","ON condition","three tables","mix","INNER","LEFT","each JOIN","more than 2"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][20] = {
    answer: "JOIN combines columns from multiple tables in single result set. Subquery returns data used by outer query. JOIN is generally faster for large datasets (optimizer can use indexes better). Subquery is better for: EXISTS checks, IN lists, correlated lookups. JOIN is readable for direct relationships. Use EXISTS instead of IN for large subquery results. Depends on query optimizer.",
    keywords: ["join","subquery","faster","optimizer","indexes","EXISTS","IN","large datasets","columns","result set","depends"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][21] = {
    answer: "Subquery (nested query) is a SELECT inside another SQL statement. Can be in WHERE, FROM, SELECT, HAVING clauses. Types: Single-row (returns one value), Multi-row (returns list, use IN/ANY/ALL), Table (in FROM clause, like derived table). Example: SELECT * FROM Emp WHERE Salary > (SELECT AVG(Salary) FROM Emp). Executed first (inner), result used by outer.",
    keywords: ["subquery","nested","SELECT inside","WHERE","FROM","single-row","multi-row","IN","derived table","inner first","outer"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][22] = {
    answer: "Non-correlated subquery: executes ONCE independently, result used by outer query. Inner query doesn't reference outer. Example: WHERE Salary > (SELECT AVG(Salary) FROM Emp). Correlated subquery: executes ONCE PER ROW of outer query, references outer table. Example: WHERE Salary > (SELECT AVG(Salary) FROM Emp e2 WHERE e2.DeptId = e1.DeptId). Correlated is slower.",
    keywords: ["correlated","non-correlated","once","per row","references outer","independent","slower","e1","e2","DeptId"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][23] = {
    answer: "EXISTS checks if subquery returns ANY rows (returns TRUE/FALSE). Stops at first match (efficient). IN checks if value matches any value in list/subquery. EXISTS is faster for large subquery results (short-circuits). IN is better for small static lists. EXISTS handles NULLs better. Use EXISTS for correlated subqueries, IN for small value lists.",
    keywords: ["EXISTS","IN","any rows","TRUE/FALSE","short-circuits","faster","large","small list","NULL","correlated","first match"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][26] = {
    answer: "Index is a database object that speeds up data retrieval (like a book index). Creates a separate data structure (B-tree) pointing to actual rows. Speeds up SELECT, WHERE, JOIN, ORDER BY. Slows down INSERT, UPDATE, DELETE (index must be updated). Created on columns frequently used in WHERE/JOIN conditions. Trade-off: faster reads vs slower writes + storage space.",
    keywords: ["index","speed up","retrieval","B-tree","SELECT","WHERE","JOIN","slows INSERT","trade-off","storage","columns"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][27] = {
    answer: "Clustered Index: physically reorders table data on disk. Only ONE per table (like sorting a phone book by name). Table data IS the index. Faster for range queries. Non-Clustered Index: separate structure with pointers to data rows. Multiple allowed (up to 999). Like book's back index pointing to pages. Clustered on Primary Key by default.",
    keywords: ["clustered","non-clustered","physical order","one per table","separate structure","pointers","multiple","primary key","range","B-tree"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][28] = {
    answer: "Unique Index ensures all values in indexed column(s) are distinct - no duplicates allowed. Automatically created when you add UNIQUE constraint or PRIMARY KEY. Can have one NULL (in SQL Server). CREATE UNIQUE INDEX idx_email ON Users(Email). Used to enforce business rules (unique email, unique username). Non-clustered by default.",
    keywords: ["unique index","no duplicates","distinct","UNIQUE constraint","PRIMARY KEY","one NULL","enforce","email","CREATE UNIQUE INDEX"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][29] = {
    answer: "Composite Index is an index on multiple columns. CREATE INDEX idx_name ON Emp(LastName, FirstName). Column order matters - follows leftmost prefix rule. Works for queries filtering on first column, first+second, etc. but NOT second column alone. Used when WHERE clause frequently filters on multiple columns together. Also called multi-column index.",
    keywords: ["composite","multiple columns","order matters","leftmost prefix","first column","multi-column","together","WHERE","CREATE INDEX"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][30] = {
    answer: "Use indexes when: column in WHERE/JOIN/ORDER BY frequently, high selectivity (many unique values), large tables, read-heavy workload. DON'T use when: small tables, columns with few unique values (gender), heavily updated columns, too many indexes (slows writes), columns rarely queried. Monitor: check execution plans, missing index DMVs.",
    keywords: ["when to use","WHERE","JOIN","high selectivity","large tables","don't use","small tables","few unique","heavily updated","execution plan"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][33] = {
    answer: "A table can have only ONE clustered index because data rows can be physically sorted in only one order. But can have up to 999 non-clustered indexes. By default, Primary Key creates clustered index. You can create clustered on different column if needed. If no clustered index, table is called a HEAP (rows stored without order).",
    keywords: ["one clustered","physical order","only one","999 non-clustered","primary key","heap","no order","default","different column"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][34] = {
    answer: "Stored Procedure is a precompiled set of SQL statements stored in database. Called using EXEC sp_name. Benefits: reusability, security (grant EXEC without table access), performance (cached execution plan), reduced network traffic, encapsulates business logic. Supports input/output parameters, IF/ELSE, loops, error handling (TRY-CATCH), transactions.",
    keywords: ["stored procedure","precompiled","EXEC","reusability","security","cached plan","performance","parameters","TRY-CATCH","transactions","encapsulates"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][35] = {
    answer: "Stored Procedure: can return zero/one/multiple result sets, supports output parameters, can do DML (INSERT/UPDATE/DELETE), called with EXEC, can have transactions/error handling. Function: MUST return a value, can be used in SELECT/WHERE, no DML on tables, called inline. SP for operations/logic, Function for calculations/transformations used in queries.",
    keywords: ["procedure","function","must return","EXEC","inline","SELECT","DML","output parameters","transactions","calculations","operations"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][36] = {
    answer: "Input parameters: pass values INTO stored procedure. Declared with @ prefix. Example: @EmployeeId INT. Output parameters: return values FROM procedure back to caller. Declared with OUTPUT keyword. Example: @TotalCount INT OUTPUT. Caller must also specify OUTPUT. Can have multiple output params. Alternative: RETURN for single integer value.",
    keywords: ["input","output","@","INTO","FROM","OUTPUT keyword","caller","multiple","RETURN","pass values","declare"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][37] = {
    answer: "User-Defined Function (UDF): Scalar function returns single value (CREATE FUNCTION dbo.GetAge(@DOB DATE) RETURNS INT). Table-Valued Function returns result set (RETURNS TABLE). Inline TVF: single SELECT (better performance, like parameterized view). Multi-statement TVF: uses BEGIN/END with table variable. Can be used in SELECT, WHERE, JOIN unlike SP.",
    keywords: ["UDF","scalar","single value","table-valued","RETURNS TABLE","inline","multi-statement","SELECT","WHERE","parameterized view","CREATE FUNCTION"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][41] = {
    answer: "View is a virtual table based on a SELECT query. Doesn't store data - executes query each time accessed. Benefits: simplify complex queries, security (expose only needed columns), abstraction (hide table structure), reusable. CREATE VIEW vw_ActiveEmployees AS SELECT... Views can be used in SELECT, JOIN like tables. Updatable views allow INSERT/UPDATE under certain conditions.",
    keywords: ["view","virtual table","SELECT","doesn't store","simplify","security","abstraction","CREATE VIEW","reusable","updatable"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][46] = {
    answer: "Trigger is a special stored procedure that automatically fires when DML event (INSERT, UPDATE, DELETE) occurs on a table. Types: AFTER/FOR trigger (fires after operation), INSTEAD OF trigger (replaces operation). Used for: auditing, enforcing complex rules, maintaining history. Access changed data via INSERTED and DELETED virtual tables. Use sparingly - can impact performance.",
    keywords: ["trigger","automatically","DML","INSERT","UPDATE","DELETE","AFTER","INSTEAD OF","auditing","INSERTED","DELETED","performance"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][48] = {
    answer: "INSERTED table: holds new rows being added (INSERT) or new values (UPDATE). DELETED table: holds removed rows (DELETE) or old values (UPDATE). Available only inside triggers. For INSERT trigger: only INSERTED has data. For DELETE: only DELETED. For UPDATE: both have data (DELETED=old, INSERTED=new). Virtual/logical tables in memory.",
    keywords: ["INSERTED","DELETED","new rows","old values","UPDATE both","INSERT only","DELETE only","virtual","trigger","inside","memory"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][75] = {
    answer: "CTE (Common Table Expression) is a temporary named result set defined with WITH keyword. EXISTS only for the duration of next statement. Syntax: WITH CTE_Name AS (SELECT ...) SELECT * FROM CTE_Name. Benefits: readability for complex queries, recursive queries (hierarchical data), avoids subquery repetition. Can reference itself for recursion. Alternative to derived tables.",
    keywords: ["CTE","WITH","temporary","named result","readability","recursive","hierarchical","next statement","derived table","repetition"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][77] = {
    answer: "Temp Table (#temp): created in tempdb, visible in session, supports indexes/constraints/statistics, can be used in multiple statements/procedures, dropped when session ends. Table Variable (@table): stored in memory (small data), scoped to batch/procedure, no statistics (optimizer assumes 1 row), faster for small datasets. Use #temp for large data, @table for small.",
    keywords: ["temp table","#temp","table variable","@table","tempdb","memory","session","batch","statistics","indexes","large","small"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][79] = {
    answer: "Window functions perform calculations across a set of rows related to current row without collapsing groups. ROW_NUMBER(): assigns unique sequential number (1,2,3,4). RANK(): same value gets same rank, skips next (1,2,2,4). DENSE_RANK(): same rank, doesn't skip (1,2,2,3). All use OVER(ORDER BY col) clause. Used for: pagination, top-N per group, running totals.",
    keywords: ["window functions","ROW_NUMBER","RANK","DENSE_RANK","OVER","ORDER BY","sequential","skips","doesn't skip","pagination","group"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][80] = {
    answer: "PARTITION BY divides result set into partitions (groups) for window functions. Each partition is processed separately. Example: ROW_NUMBER() OVER(PARTITION BY DeptId ORDER BY Salary DESC) - numbers restart for each department. Like GROUP BY but doesn't collapse rows. Used with ROW_NUMBER, RANK, SUM, COUNT, AVG as window aggregates.",
    keywords: ["PARTITION BY","divides","groups","restart","separately","DeptId","window","ROW_NUMBER","doesn't collapse","aggregate"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][84] = {
    answer: "OFFSET FETCH is used for pagination (skip N rows, take M rows). Syntax: ORDER BY col OFFSET 10 ROWS FETCH NEXT 5 ROWS ONLY. Skips first 10, returns next 5. Requires ORDER BY. Page formula: OFFSET (pageNum-1)*pageSize ROWS FETCH NEXT pageSize ROWS ONLY. More readable than ROW_NUMBER approach. SQL Server 2012+.",
    keywords: ["OFFSET","FETCH","pagination","skip","take","ORDER BY","ROWS ONLY","page","pageSize","SQL Server 2012"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][90] = {
    answer: "Find Nth highest salary: Method 1 (subquery): SELECT MAX(Salary) FROM Emp WHERE Salary < (SELECT MAX(Salary) FROM Emp) -- 2nd highest. Method 2 (DENSE_RANK): SELECT * FROM (SELECT *, DENSE_RANK() OVER(ORDER BY Salary DESC) AS Rnk FROM Emp) t WHERE Rnk = N. Method 3: SELECT DISTINCT Salary FROM Emp ORDER BY Salary DESC OFFSET N-1 ROWS FETCH NEXT 1 ROW ONLY.",
    keywords: ["nth highest","salary","DENSE_RANK","OFFSET","MAX","subquery","ORDER BY DESC","Rnk","second highest","DISTINCT"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][91] = {
    answer: "Find duplicates: SELECT column, COUNT(*) FROM table GROUP BY column HAVING COUNT(*) > 1. For full rows: SELECT * FROM Emp WHERE EmpName IN (SELECT EmpName FROM Emp GROUP BY EmpName HAVING COUNT(*) > 1). Using ROW_NUMBER: rows with RN > 1 are duplicates. GROUP BY + HAVING COUNT > 1 is the standard approach.",
    keywords: ["duplicates","GROUP BY","HAVING","COUNT(*) > 1","IN","ROW_NUMBER","RN > 1","find","standard","EmpName"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][92] = {
    answer: "Delete duplicates keeping one: WITH CTE AS (SELECT *, ROW_NUMBER() OVER(PARTITION BY col1, col2 ORDER BY Id) AS RN FROM table) DELETE FROM CTE WHERE RN > 1. Keeps RN=1 (first occurrence), deletes rest. PARTITION BY identifies what makes rows duplicate. ORDER BY decides which one to keep. Can also use self-join approach.",
    keywords: ["delete duplicates","keep one","ROW_NUMBER","PARTITION BY","RN > 1","CTE","DELETE","first occurrence","self-join","ORDER BY"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][93] = {
    answer: "Employee-Manager hierarchy using self-join: SELECT e.Name AS Employee, m.Name AS Manager FROM Employee e LEFT JOIN Employee m ON e.ManagerId = m.EmployeeId. For full hierarchy (all levels): use recursive CTE. WITH Hierarchy AS (SELECT * FROM Emp WHERE ManagerId IS NULL UNION ALL SELECT e.* FROM Emp e JOIN Hierarchy h ON e.ManagerId = h.EmpId).",
    keywords: ["employee","manager","self join","hierarchy","ManagerId","recursive CTE","LEFT JOIN","UNION ALL","levels","ManagerId IS NULL"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][94] = {
    answer: "ROW_NUMBER(): always unique sequential numbers (1,2,3,4,5) even for ties - no gaps, no duplicates. RANK(): ties get same rank, then SKIPS (1,2,2,4,5) - gaps in sequence. DENSE_RANK(): ties get same rank, NO skip (1,2,2,3,4) - no gaps. All use OVER(ORDER BY). Choose based on whether you want gaps for ties or not.",
    keywords: ["ROW_NUMBER","RANK","DENSE_RANK","unique","ties","skip","no gaps","1,2,2,4","1,2,2,3","sequential","OVER"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][95] = {
    answer: "@@IDENTITY: returns last identity value generated in ANY table in current session (can be wrong if trigger inserts into another table). SCOPE_IDENTITY(): returns last identity in current SCOPE and session (safe, recommended). IDENT_CURRENT('table'): returns last identity for specific table regardless of session/scope. Always use SCOPE_IDENTITY() for reliability.",
    keywords: ["@@IDENTITY","SCOPE_IDENTITY","IDENT_CURRENT","session","scope","trigger","any table","specific table","recommended","last identity"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][96] = {
    answer: "Cursor processes rows one-by-one (row-by-row) instead of set-based operations. Steps: DECLARE, OPEN, FETCH NEXT, WHILE @@FETCH_STATUS=0, CLOSE, DEALLOCATE. Avoid because: extremely slow (SQL is optimized for sets), uses more memory/locks, hard to maintain. Alternatives: SET-based queries, WHILE loops with temp tables, window functions. Use only as last resort.",
    keywords: ["cursor","row-by-row","slow","set-based","DECLARE","OPEN","FETCH","CLOSE","DEALLOCATE","avoid","memory","locks"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][97] = {
    answer: "ISNULL(expr, replacement): SQL Server specific, replaces NULL with replacement value, takes exactly 2 parameters, returns data type of first parameter. COALESCE(expr1, expr2, ...): ANSI standard, returns first non-NULL from multiple expressions, takes 2+ parameters, returns highest precedence data type. Prefer COALESCE for portability and flexibility.",
    keywords: ["ISNULL","COALESCE","NULL","replacement","2 parameters","multiple","first non-NULL","ANSI","SQL Server","data type","portability"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][99] = {
    answer: "STRING_AGG(column, separator): SQL Server 2017+, concatenates values into single string with delimiter. Example: STRING_AGG(Name, ', ') returns 'John, Jane, Bob'. FOR XML PATH(''): older approach, concatenates using XML trick. Example: SELECT STUFF((SELECT ', ' + Name FROM Emp FOR XML PATH('')),1,2,''). STRING_AGG is cleaner and preferred in modern SQL Server.",
    keywords: ["STRING_AGG","FOR XML PATH","concatenate","separator","delimiter","STUFF","comma","single string","SQL Server 2017","modern"]
};

INTERVIEW_ANSWERS['sql_interview_questions'][47] = {
    answer: "Clustered Index: physically reorders table data on disk, only ONE per table (data rows stored in index order), faster for range queries (BETWEEN, >, <), Primary Key creates one by default. Non-Clustered: separate structure with pointers to data rows, up to 999 per table, has extra lookup step (key lookup). Clustered is faster for reads on indexed column, Non-Clustered is additional index on other columns.",
    keywords: ["clustered","non-clustered","physical order","one per table","separate structure","pointers","999","primary key","range","key lookup","faster"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][48] = {
    answer: "Optimize slow queries: 1) Check Execution Plan (identify scans vs seeks). 2) Add proper indexes on WHERE/JOIN columns. 3) Avoid SELECT * (select only needed columns). 4) Avoid functions on WHERE columns (breaks index usage). 5) Use EXISTS instead of IN for large sets. 6) Avoid cursors (use set-based). 7) Update statistics. 8) Avoid unnecessary JOINs. 9) Use pagination (OFFSET FETCH). 10) Check for missing indexes via DMVs.",
    keywords: ["execution plan","indexes","SELECT *","functions on WHERE","EXISTS","cursors","statistics","set-based","pagination","DMV","optimize","scan","seek"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][49] = {
    answer: "Nth highest salary: Method 1 (DENSE_RANK): WITH CTE AS (SELECT *, DENSE_RANK() OVER(ORDER BY Salary DESC) AS Rnk FROM Emp) SELECT * FROM CTE WHERE Rnk = N. Method 2 (OFFSET FETCH): SELECT DISTINCT Salary FROM Emp ORDER BY Salary DESC OFFSET N-1 ROWS FETCH NEXT 1 ROW ONLY. Method 3 (Subquery): SELECT MAX(Salary) FROM Emp WHERE Salary NOT IN (SELECT TOP N-1 Salary FROM Emp ORDER BY Salary DESC).",
    keywords: ["nth highest","DENSE_RANK","OFFSET FETCH","salary","subquery","TOP","ORDER BY DESC","Rnk","CTE","DISTINCT"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][50] = {
    answer: "CTE: temporary named result set, exists only for next statement, good for readability and recursion, no indexes. Temp Table (#temp): stored in tempdb, persists for session, supports indexes/statistics, good for large datasets reused multiple times. Table Variable (@var): in memory for small data, scoped to batch, no statistics (optimizer issues with large data). Use CTE for single-use readable queries, #temp for large reusable sets, @var for small lookups.",
    keywords: ["CTE","temp table","table variable","tempdb","memory","session","batch","indexes","statistics","readability","recursion","small","large"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][51] = {
    answer: "Stored Procedure: precompiled, cached execution plan, reusable, supports parameters/error handling/transactions, better security (EXEC permission only), reduces network traffic. Inline Query: ad-hoc SQL from application code, no cached plan (unless parameterized), harder to manage, risk of SQL injection if not parameterized. Use SP for: complex logic, security, reusable operations. Use inline for: simple dynamic queries, ORM-generated (EF Core).",
    keywords: ["stored procedure","inline query","cached plan","precompiled","sql injection","parameterized","security","reusable","EF Core","ORM","ad-hoc","complex"]
};
INTERVIEW_ANSWERS['sql_interview_questions'][52] = {
    answer: "Window Functions perform calculations across related rows WITHOUT collapsing them (unlike GROUP BY). ROW_NUMBER(): unique sequential (1,2,3,4). RANK(): same rank for ties, skips (1,2,2,4). DENSE_RANK(): same rank, no skip (1,2,2,3). PARTITION BY: divides into groups, function resets per group. Syntax: FUNCTION() OVER(PARTITION BY col ORDER BY col). Used for: pagination, top-N per group, running totals, deduplication.",
    keywords: ["window functions","ROW_NUMBER","RANK","DENSE_RANK","PARTITION BY","OVER","no collapse","ties","skip","pagination","running total","per group"]
};

// Oracle Interview Answers
INTERVIEW_ANSWERS['oracle_interview_questions'] = {
    1: {
        answer: "Oracle Database is a multi-model relational database management system (RDBMS) developed by Oracle Corporation. It's enterprise-grade, supports ACID transactions, high availability (RAC), scalability, and advanced features like partitioning, materialized views, PL/SQL. Used in large enterprises for mission-critical applications. Versions: Oracle 19c, 21c. Supports multi-tenant architecture (CDB/PDB).",
        keywords: ["oracle","rdbms","enterprise","ACID","RAC","scalability","PL/SQL","partitioning","mission-critical","multi-tenant","19c"]
    },
    2: {
        answer: "Oracle vs SQL Server: Oracle uses PL/SQL, SQL Server uses T-SQL. Oracle runs on multiple OS (Linux, Unix, Windows), SQL Server primarily Windows (Linux support added). Oracle uses sequences for auto-increment, SQL Server uses IDENTITY. Oracle uses NVL(), SQL Server uses ISNULL(). Oracle uses (+) for outer joins (old syntax), SQL Server uses ANSI. Oracle: ROWNUM, SQL Server: TOP. Licensing: Oracle is more expensive.",
        keywords: ["PL/SQL","T-SQL","NVL","ISNULL","sequences","IDENTITY","ROWNUM","TOP","Linux","Windows","expensive","(+)"]
    },
    3: {
        answer: "Oracle Data Types: NUMBER(p,s) for all numeric. VARCHAR2(size) for variable-length strings (max 4000). CHAR(size) fixed-length. DATE stores date+time (no separate datetime). TIMESTAMP for precise time with fractional seconds. CLOB for large text (4GB). BLOB for binary. NVARCHAR2 for Unicode. RAW for binary data. No BIT type (use NUMBER(1)). No INT keyword (use NUMBER).",
        keywords: ["NUMBER","VARCHAR2","DATE","TIMESTAMP","CLOB","BLOB","CHAR","NVARCHAR2","4000","no INT","RAW"]
    },
    4: {
        answer: "NVL(expr, replacement): if expr is NULL, returns replacement (2 params, same data type). NVL2(expr, not_null_val, null_val): if NOT null returns 2nd param, if null returns 3rd. COALESCE(expr1,expr2,...): returns first non-NULL (ANSI standard, multiple params, different types allowed). DECODE(expr, search1, result1, ..., default): Oracle IF-THEN-ELSE in SQL (replaced by CASE in modern SQL).",
        keywords: ["NVL","NVL2","COALESCE","DECODE","NULL","first non-null","replacement","ANSI","CASE","2 params","multiple"]
    },
    5: {
        answer: "Sequence is a database object that generates unique sequential numbers. Used for Primary Key auto-increment (Oracle has no IDENTITY before 12c). CREATE SEQUENCE seq_emp START WITH 1 INCREMENT BY 1. Use: seq_emp.NEXTVAL (next number), seq_emp.CURRVAL (current). In INSERT: VALUES(seq_emp.NEXTVAL, 'name'). Oracle 12c+ supports IDENTITY columns. Sequences are independent of tables.",
        keywords: ["sequence","NEXTVAL","CURRVAL","auto-increment","CREATE SEQUENCE","START WITH","INCREMENT","primary key","IDENTITY","12c","independent"]
    },
    6: {
        answer: "ROWNUM: pseudo-column, assigned BEFORE ORDER BY (tricky for top-N), sequential starting 1, changes if rows filtered. WHERE ROWNUM <= 5 for top 5. ROWID: physical address of row on disk (unique per row), fastest way to access row, used internally by indexes. ROW_NUMBER(): analytic function, assigned AFTER ORDER BY, supports PARTITION BY. Use ROW_NUMBER() for reliable pagination.",
        keywords: ["ROWNUM","ROWID","ROW_NUMBER","pseudo-column","before ORDER BY","physical address","after ORDER BY","PARTITION BY","pagination","top-N"]
    },
    7: {
        answer: "PL/SQL (Procedural Language/SQL) extends SQL with programming constructs. Block structure: DECLARE (variables, cursors - optional), BEGIN (executable statements - required), EXCEPTION (error handling - optional), END;. Supports: variables, IF/ELSIF/ELSE, loops (FOR, WHILE, LOOP), cursors, procedures, functions, packages, triggers. Anonymous blocks or named (stored procedures/functions).",
        keywords: ["PL/SQL","DECLARE","BEGIN","EXCEPTION","END","block","variables","IF","loops","cursors","anonymous","named"]
    },
    8: {
        answer: "Oracle Stored Procedure: CREATE OR REPLACE PROCEDURE proc_name(p_id IN NUMBER, p_name OUT VARCHAR2) IS/AS BEGIN ... END;. IN (input, default), OUT (output), IN OUT (both). Call: EXEC proc_name(1, :output) or BEGIN proc_name(1, v_name); END;. Supports exception handling, transactions, cursors. Stored in database, precompiled for performance.",
        keywords: ["CREATE OR REPLACE","PROCEDURE","IN","OUT","IN OUT","EXEC","precompiled","exception","BEGIN END","parameters"]
    },
    9: {
        answer: "Function MUST return a value (RETURN clause required), can be used in SELECT/WHERE/expressions, generally for calculations. Procedure may or may not return (uses OUT params), cannot be used in SQL statements directly, for business operations/DML. Functions: no DML on tables (in SQL context), deterministic hint for optimizer. Procedures: can do DML, transactions, multiple OUT params.",
        keywords: ["function","procedure","RETURN","must return","SELECT","WHERE","OUT params","DML","calculations","operations","deterministic"]
    },
    10: {
        answer: "REF CURSOR is a pointer to a result set (like a handle). SYS_REFCURSOR is predefined weak REF CURSOR type. Used to return result sets from procedures to calling programs (.NET, Java). Strong REF CURSOR: tied to specific query structure. Weak (SYS_REFCURSOR): can point to any query. Open with OPEN cursor FOR SELECT... Common pattern for returning data to applications.",
        keywords: ["REF CURSOR","SYS_REFCURSOR","result set","pointer","weak","strong","OPEN FOR","return","procedure",".NET","applications"]
    },
    11: {
        answer: "Old Oracle join syntax uses (+) in WHERE clause for outer joins: WHERE e.deptid = d.id(+) means LEFT JOIN (+ on right side). ANSI syntax (preferred): FROM emp e LEFT JOIN dept d ON e.deptid = d.id. ANSI is standard, more readable, supports FULL OUTER JOIN (impossible with +). Oracle still supports (+) but ANSI is recommended for new code.",
        keywords: ["(+)","old syntax","ANSI","LEFT JOIN","WHERE clause","ON","FULL OUTER","readable","standard","recommended","new code"]
    },
    12: {
        answer: "CONNECT BY is Oracle's hierarchical query syntax for tree structures (org charts, BOM). SELECT LEVEL, emp_name FROM emp START WITH manager_id IS NULL CONNECT BY PRIOR emp_id = manager_id. LEVEL: depth in tree. PRIOR: defines parent-child relationship. SYS_CONNECT_BY_PATH: shows full path. CONNECT_BY_ROOT: root value. Alternative: recursive CTE (WITH RECURSIVE) in modern SQL.",
        keywords: ["CONNECT BY","hierarchical","START WITH","PRIOR","LEVEL","tree","SYS_CONNECT_BY_PATH","CONNECT_BY_ROOT","org chart","recursive CTE"]
    },
    13: {
        answer: "Oracle Analytic (Window) Functions: perform calculations across related rows without GROUP BY collapse. Syntax: FUNCTION() OVER(PARTITION BY col ORDER BY col ROWS/RANGE). Common: ROW_NUMBER(), RANK(), DENSE_RANK(), LEAD(), LAG(), FIRST_VALUE(), LAST_VALUE(), SUM/AVG/COUNT as running aggregates, NTILE(). PARTITION BY = grouping, ORDER BY = sorting within group.",
        keywords: ["analytic","window","OVER","PARTITION BY","ROW_NUMBER","RANK","LEAD","LAG","FIRST_VALUE","running","NTILE","aggregate"]
    },
    14: {
        answer: "Oracle Index types: B-Tree (default, balanced tree, good for high cardinality, equality and range). Bitmap (for low cardinality like gender/status, stores bitmaps, great for data warehouse, bad for OLTP/high DML). Function-Based (index on expression: UPPER(name), allows index use with functions in WHERE). Also: Composite, Unique, Reverse Key, Index-Organized Table (IOT).",
        keywords: ["B-Tree","Bitmap","Function-Based","cardinality","OLTP","data warehouse","UPPER","expression","composite","reverse key","IOT"]
    },
    15: {
        answer: "PL/SQL Exception Handling in EXCEPTION block. Predefined: NO_DATA_FOUND, TOO_MANY_ROWS, ZERO_DIVIDE, DUP_VAL_ON_INDEX. User-defined: DECLARE exc EXCEPTION; RAISE exc. RAISE_APPLICATION_ERROR(-20001,'message') for custom error codes (-20000 to -20999). WHEN OTHERS catches all. SQLCODE and SQLERRM give error details. Exceptions propagate to outer blocks if unhandled.",
        keywords: ["EXCEPTION","NO_DATA_FOUND","TOO_MANY_ROWS","RAISE_APPLICATION_ERROR","-20001","WHEN OTHERS","SQLCODE","SQLERRM","predefined","user-defined","propagate"]
    },
    16: {
        answer: "Package groups related procedures, functions, variables, cursors into single unit. Has two parts: Specification (public interface - declarations visible to callers) and Body (private implementation). Benefits: encapsulation, modularity, overloading, session-persistent variables, better performance (entire package loaded on first call). CREATE PACKAGE spec, CREATE PACKAGE BODY.",
        keywords: ["package","specification","body","public","private","encapsulation","modularity","overloading","session","persistent","performance","loaded"]
    },
    17: {
        answer: "Oracle Triggers fire automatically on DML events. Types: BEFORE/AFTER (row or statement level), INSTEAD OF (on views). Row-level: FOR EACH ROW, access :NEW and :OLD values. Statement-level: fires once per statement. INSTEAD OF: replaces DML on view. Use for: auditing, validation, auto-populate columns. COMPOUND trigger: combines all timing points. Avoid complex logic in triggers.",
        keywords: ["trigger","BEFORE","AFTER","INSTEAD OF","FOR EACH ROW",":NEW",":OLD","statement-level","row-level","auditing","COMPOUND","automatic"]
    },
    18: {
        answer: "Implicit Cursor: automatically created for DML/SELECT INTO. Attributes: SQL%FOUND, SQL%NOTFOUND, SQL%ROWCOUNT. Explicit Cursor: declared, opened, fetched, closed manually. DECLARE CURSOR c IS SELECT...; OPEN c; FETCH c INTO var; CLOSE c. Cursor FOR Loop (simplest): FOR rec IN (SELECT...) LOOP ... END LOOP; - auto opens, fetches, closes. Prefer FOR loop for simplicity.",
        keywords: ["implicit","explicit","CURSOR","OPEN","FETCH","CLOSE","FOR loop","SQL%ROWCOUNT","SQL%FOUND","DECLARE","INTO","auto"]
    },
    19: {
        answer: "BULK COLLECT fetches multiple rows at once into collection (instead of row-by-row). FORALL executes DML for entire collection in one context switch. Both reduce context switches between SQL and PL/SQL engines (major performance gain). Example: SELECT col BULK COLLECT INTO v_arr FROM table; FORALL i IN v_arr.FIRST..v_arr.LAST INSERT... Use LIMIT clause for large datasets.",
        keywords: ["BULK COLLECT","FORALL","context switch","collection","performance","row-by-row","multiple rows","LIMIT","PL/SQL engine","SQL engine","batch"]
    },
    20: {
        answer: "COMMIT: permanently saves all changes in current transaction. ROLLBACK: undoes all changes since last COMMIT. SAVEPOINT: creates checkpoint within transaction to ROLLBACK TO. Oracle has implicit COMMIT on DDL statements and normal exit. SET TRANSACTION for isolation level. Autocommit off by default (unlike SQL Server). ROLLBACK TO SAVEPOINT sp1 undoes partial work.",
        keywords: ["COMMIT","ROLLBACK","SAVEPOINT","permanent","undo","DDL implicit","autocommit off","SET TRANSACTION","isolation","checkpoint","ROLLBACK TO"]
    },
    21: {
        answer: "TO_DATE('string','format'): converts string to DATE. Format: 'DD-MON-YYYY', 'YYYY-MM-DD HH24:MI:SS'. TO_CHAR(date,'format'): converts date/number to string for display. TO_NUMBER('string','format'): converts string to number. NLS settings affect default formats. Common issue: implicit conversion causing errors. Always use explicit conversion with format masks.",
        keywords: ["TO_DATE","TO_CHAR","TO_NUMBER","format","DD-MON-YYYY","HH24:MI:SS","convert","string","date","number","NLS","explicit"]
    },
    22: {
        answer: "Oracle Pagination approaches: 1) ROWNUM (pre-12c): SELECT * FROM (SELECT a.*, ROWNUM rn FROM (SELECT * FROM emp ORDER BY sal) a WHERE ROWNUM <= 20) WHERE rn > 10. 2) ROW_NUMBER() OVER(ORDER BY): more flexible. 3) OFFSET FETCH (12c+): ORDER BY sal OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY. OFFSET FETCH is cleanest and recommended for 12c+.",
        keywords: ["pagination","ROWNUM","ROW_NUMBER","OFFSET FETCH","12c","ROWS ONLY","nested","ORDER BY","OFFSET","FETCH NEXT"]
    },
    23: {
        answer: "Oracle Performance Tuning: 1) EXPLAIN PLAN / AUTOTRACE for execution plan. 2) Proper indexing (avoid full table scans). 3) Avoid SELECT * (fetch only needed columns). 4) Use bind variables (avoid hard parsing). 5) BULK COLLECT/FORALL for PL/SQL. 6) Optimizer hints (/*+ INDEX, PARALLEL */). 7) Update statistics (DBMS_STATS). 8) Avoid functions on indexed columns in WHERE. 9) Partitioning for large tables.",
        keywords: ["EXPLAIN PLAN","indexes","bind variables","BULK COLLECT","hints","DBMS_STATS","full table scan","hard parsing","partitioning","AUTOTRACE"]
    },
    24: {
        answer: "View: virtual table (SELECT stored as definition), doesn't store data, always shows current data. Materialized View (MView): stores query result physically (snapshot), must be refreshed. Refresh modes: ON DEMAND (manual), ON COMMIT (auto after DML), scheduled. MView improves read performance for complex queries/aggregations. Uses storage space. FAST refresh with materialized view log.",
        keywords: ["view","materialized view","virtual","stores data","refresh","ON DEMAND","ON COMMIT","snapshot","performance","aggregation","FAST refresh","log"]
    },
    25: {
        answer: "MERGE performs INSERT or UPDATE (upsert) in single statement based on condition. Syntax: MERGE INTO target USING source ON (condition) WHEN MATCHED THEN UPDATE SET... WHEN NOT MATCHED THEN INSERT... Can also include DELETE clause. Efficient for sync operations (ETL). Single pass through data. Also called UPSERT. Available in Oracle 9i+.",
        keywords: ["MERGE","UPSERT","INSERT","UPDATE","WHEN MATCHED","WHEN NOT MATCHED","USING","ON","single statement","ETL","sync","DELETE"]
    },
    26: {
        answer: "Partitioning divides large table into smaller physical segments (partitions) for performance and management. Types: Range (date ranges), List (specific values), Hash (even distribution), Composite (range-hash). Benefits: partition pruning (query only relevant partitions), parallel operations, easier maintenance (drop old partitions). Useful for tables with millions of rows.",
        keywords: ["partitioning","range","list","hash","composite","partition pruning","parallel","maintenance","large table","millions","physical segments"]
    },
    27: {
        answer: "Synonym: alias for database object (table, view, procedure). Public synonym: accessible to all users. Private: only to creator. Used to: hide object owner/schema, simplify names, provide location transparency. Database Link (DBLink): connection to remote database. Allows querying remote tables: SELECT * FROM emp@remote_db. CREATE DATABASE LINK name CONNECT TO user IDENTIFIED BY pwd USING 'tns'.",
        keywords: ["synonym","alias","public","private","database link","DBLink","remote","@","CREATE DATABASE LINK","CONNECT TO","transparency"]
    },
    28: {
        answer: "PL/SQL Collections: Associative Array (INDEX BY table): key-value pairs, sparse, no storage in DB, index by PLS_INTEGER or VARCHAR2. Nested Table: ordered, can be stored in DB column, can be sparse after deletes. VARRAY: fixed maximum size, ordered, dense, stored inline. Use Associative Array for lookup/cache in PL/SQL, Nested Table for DB storage, VARRAY when size is known.",
        keywords: ["associative array","nested table","VARRAY","INDEX BY","sparse","dense","PLS_INTEGER","collection","fixed size","DB storage","key-value"]
    },
    29: {
        answer: "Important DBMS packages: DBMS_OUTPUT (print/debug - PUT_LINE), DBMS_LOB (manipulate CLOB/BLOB), UTL_FILE (read/write OS files), DBMS_STATS (gather optimizer statistics), DBMS_SCHEDULER (job scheduling), DBMS_SQL (dynamic SQL), DBMS_CRYPTO (encryption), DBMS_METADATA (get DDL), DBMS_LOCK (custom locks), UTL_HTTP (HTTP calls), UTL_MAIL (send emails).",
        keywords: ["DBMS_OUTPUT","DBMS_LOB","UTL_FILE","DBMS_STATS","DBMS_SCHEDULER","DBMS_SQL","DBMS_CRYPTO","PUT_LINE","dynamic SQL","statistics","jobs"]
    },
    30: {
        answer: "ODP.NET (Oracle Data Provider for .NET): Oracle's official .NET driver. Two versions: Managed (pure .NET, NuGet: Oracle.ManagedDataAccess, no Oracle client needed, recommended) and Unmanaged (requires Oracle client installation). Connection: OracleConnection, OracleCommand, OracleDataReader. Connection string: Data Source=tns;User Id=user;Password=pwd. Supports EF Core via Oracle.EntityFrameworkCore. Also supports Dapper.",
        keywords: ["ODP.NET","Oracle.ManagedDataAccess","OracleConnection","OracleCommand","NuGet","managed","unmanaged","connection string","EF Core","Dapper","no client"]
    }
};

// ASP.NET Core Interview Answers
INTERVIEW_ANSWERS['asp.net_core_interview_questions'] = {
    1: {
        answer: "ASP.NET Core is a cross-platform, high-performance, open-source framework for building modern web apps and APIs. Differences from ASP.NET Framework: runs on Windows/Linux/Mac, modular (NuGet packages), built-in DI, uses Kestrel server, no System.Web dependency, unified MVC + Web API, supports minimal APIs. Framework was Windows-only, tied to IIS, and monolithic.",
        keywords: ["cross-platform","open-source","high-performance","Kestrel","modular","DI","Linux","NuGet","unified","minimal APIs","no System.Web"]
    },
    2: {
        answer: "Program.cs (in .NET 6+): single entry point combining host building, service registration, middleware configuration. Uses top-level statements. WebApplication.CreateBuilder() → builder.Services for DI → builder.Build() → app for middleware → app.Run(). Startup.cs (pre-.NET 6): separate class with ConfigureServices() for DI and Configure() for middleware pipeline. .NET 6+ merged both into Program.cs.",
        keywords: ["Program.cs","Startup.cs","ConfigureServices","Configure","WebApplication.CreateBuilder","builder.Services","middleware",".NET 6","merged","entry point"]
    },
    3: {
        answer: "Request pipeline: HTTP request → Kestrel → Middleware chain (each middleware can process and pass to next via next()). Middleware order: ExceptionHandler → HSTS → HTTPS Redirect → Static Files → Routing → CORS → Authentication → Authorization → Endpoint (Controller/Action). Each middleware can short-circuit (not call next). Response flows back through same chain in reverse.",
        keywords: ["pipeline","middleware","Kestrel","next()","order","short-circuit","reverse","Authentication","Authorization","Routing","Static Files"]
    },
    4: {
        answer: "Kestrel is ASP.NET Core's built-in, cross-platform, lightweight web server. It's the default server that processes HTTP requests. Can be used standalone (edge server) or behind reverse proxy (IIS, Nginx, Apache) for production. High-performance, supports HTTP/2, HTTPS, WebSockets. Configured in Program.cs via builder.WebHost.ConfigureKestrel().",
        keywords: ["Kestrel","built-in","cross-platform","lightweight","web server","reverse proxy","IIS","Nginx","HTTP/2","high-performance","edge server"]
    },
    5: {
        answer: "IServiceCollection: used in ConfigureServices to register DI services (AddScoped, AddSingleton). IApplicationBuilder: used in Configure to build middleware pipeline (UseRouting, UseAuth). IWebHostEnvironment: provides environment info (IsDevelopment(), ContentRootPath, WebRootPath, EnvironmentName). Injected where needed for environment-specific logic.",
        keywords: ["IServiceCollection","IApplicationBuilder","IWebHostEnvironment","register","middleware","AddScoped","UseRouting","IsDevelopment","ContentRootPath","environment"]
    },
    6: {
        answer: "wwwroot is the web root folder for static files (CSS, JS, images, libraries). Files in wwwroot are served directly by UseStaticFiles() middleware without going through controller. Accessible via URL: /css/site.css. Only wwwroot content is publicly accessible. Keep sensitive files outside wwwroot. Configure with app.UseStaticFiles().",
        keywords: ["wwwroot","static files","CSS","JS","images","UseStaticFiles","publicly accessible","URL","web root","sensitive outside"]
    },
    7: {
        answer: "appsettings.json stores app configuration (connection strings, logging, custom settings). Read via IConfiguration (injected). Methods: config[\"Key\"], config.GetSection(), config.GetConnectionString(). Environment-specific: appsettings.Development.json overrides base. Bind to class: services.Configure<MySettings>(config.GetSection(\"MySettings\")) then inject IOptions<MySettings>.",
        keywords: ["appsettings.json","IConfiguration","GetSection","GetConnectionString","environment-specific","Configure<T>","IOptions","bind","connection strings","override"]
    },
    8: {
        answer: "Environment variables override appsettings values (hierarchy: appsettings < appsettings.{Env} < env vars < command line). launchSettings.json: used only in DEVELOPMENT for VS/dotnet run. Defines profiles with environmentVariables, applicationUrl, ASPNETCORE_ENVIRONMENT. Not deployed to production. Set ASPNETCORE_ENVIRONMENT to control which appsettings.{Env}.json loads.",
        keywords: ["environment variables","launchSettings.json","ASPNETCORE_ENVIRONMENT","override","profiles","development","not deployed","hierarchy","applicationUrl"]
    },
    9: {
        answer: "Development: detailed errors, hot reload, no HTTPS enforcement, developer exception page. Staging: mirrors production, final testing, generic error pages. Production: optimized, minified, HTTPS, generic errors, caching enabled. Set via ASPNETCORE_ENVIRONMENT. Check: env.IsDevelopment(), env.IsProduction(). Different appsettings per environment.",
        keywords: ["Development","Staging","Production","ASPNETCORE_ENVIRONMENT","detailed errors","generic errors","HTTPS","caching","IsDevelopment","optimized"]
    },
    10: {
        answer: "Generic Host (IHost): general-purpose host for any .NET app (console, worker services, web). Manages DI, configuration, logging, hosted services. Web Host (IWebHost): specific to web apps, adds HTTP pipeline. In .NET 6+, WebApplication.CreateBuilder() uses Generic Host internally. Generic Host is the foundation, Web Host adds web capabilities on top.",
        keywords: ["Generic Host","Web Host","IHost","IWebHost","worker services","console","DI","configuration","WebApplication","foundation",".NET 6"]
    },
    11: {
        answer: "Dependency Injection is a design pattern where dependencies are provided (injected) to a class rather than created inside it. ASP.NET Core has built-in DI container. Benefits: loose coupling, testability (inject mocks), follows SOLID (DIP), swappable implementations, lifetime management. Register in services, resolve via constructor injection.",
        keywords: ["dependency injection","loose coupling","testability","mock","SOLID","DIP","built-in container","constructor","register","resolve","swappable"]
    },
    12: {
        answer: "Transient: new instance every time requested (AddTransient). Scoped: one instance per HTTP request (AddScoped) - shared within same request. Singleton: one instance for entire app lifetime (AddSingleton) - shared across all requests. Scoped is most common for DB contexts. Singleton for caching/configuration. Transient for lightweight stateless services.",
        keywords: ["Transient","Scoped","Singleton","every time","per request","entire lifetime","AddTransient","AddScoped","AddSingleton","shared","DbContext"]
    },
    13: {
        answer: "Transient: lightweight stateless services, no shared state needed. Scoped: DbContext, repositories, unit of work (per-request consistency), services that hold request-specific data. Singleton: caching, configuration, HttpClient factory, logging, services expensive to create. Rule: never inject Scoped into Singleton (causes captive dependency - scoped lives forever).",
        keywords: ["Transient","stateless","Scoped","DbContext","per-request","Singleton","caching","expensive","captive dependency","never inject scoped into singleton"]
    },
    14: {
        answer: "Register: builder.Services.AddScoped<IService, ServiceImpl>(). Resolve: via constructor injection (preferred) - class declares IService in constructor, DI auto-provides. Also: IServiceProvider.GetService<T>() for manual resolution (service locator - avoid). Multiple registrations: last wins. Can register with factory: AddScoped<IService>(sp => new Service(sp.GetRequired<IDep>())).",
        keywords: ["AddScoped","constructor injection","IServiceProvider","GetService","register","resolve","factory","last wins","IService","ServiceImpl"]
    },
    15: {
        answer: "Constructor Injection: dependencies declared in constructor parameters, provided by DI container at object creation. Preferred - explicit dependencies, immutable. Method Injection: dependency passed as method parameter using [FromServices] attribute in action methods. Used when dependency needed only in specific method, not entire class. Constructor injection is standard practice.",
        keywords: ["constructor injection","method injection","constructor parameters","[FromServices]","preferred","explicit","immutable","DI container","specific method","standard"]
    },
    16: {
        answer: "Injecting Scoped into Singleton creates 'captive dependency' - the scoped service lives as long as singleton (forever), never gets disposed/recreated per request. Causes: stale data, memory leaks, thread-safety issues. Framework throws InvalidOperationException if scope validation is enabled (default in Development). Fix: inject IServiceScopeFactory into singleton, create scope manually.",
        keywords: ["captive dependency","scoped into singleton","forever","stale data","InvalidOperationException","IServiceScopeFactory","scope validation","memory leak","thread-safety"]
    },
    17: {
        answer: "IServiceProvider provides manual service resolution: provider.GetService<T>() (returns null if not found) or GetRequiredService<T>() (throws). This is Service Locator anti-pattern - avoid when possible, prefer constructor injection. Valid use cases: factories, middleware (no constructor injection for scoped services), resolving in Singleton via IServiceScopeFactory.",
        keywords: ["IServiceProvider","GetService","GetRequiredService","service locator","anti-pattern","avoid","constructor injection","factory","middleware","IServiceScopeFactory"]
    },
    18: {
        answer: "AddSingleton: ONE instance for entire app lifetime, shared across all requests and threads (must be thread-safe). AddScoped: ONE instance per HTTP request/scope, different requests get different instances. AddTransient: NEW instance every time the service is requested from container. Same as question 12 - these ARE the 3 DI lifetimes.",
        keywords: ["AddSingleton","AddScoped","AddTransient","one instance","per request","every time","thread-safe","lifetime","shared","new instance"]
    },
    19: {
        answer: "Register multiple: services.AddScoped<INotification, EmailNotification>(); services.AddScoped<INotification, SmsNotification>(). Inject IEnumerable<INotification> to get ALL implementations. Last registration wins for single injection. Use named/keyed services (.NET 8): services.AddKeyedScoped<IService>(\"key\"). Or factory pattern to choose implementation at runtime.",
        keywords: ["multiple implementations","IEnumerable","last wins","keyed services","factory","runtime","AddKeyedScoped",".NET 8","all implementations","choose"]
    },
    20: {
        answer: "IOptions<T>: reads config once at startup, singleton, doesn't reflect changes. IOptionsSnapshot<T>: scoped, re-reads config per request (reflects changes without restart). IOptionsMonitor<T>: singleton but detects changes via OnChange callback (real-time updates). Use IOptions for static config, IOptionsSnapshot for request-scoped fresh values, IOptionsMonitor for singleton services needing live updates.",
        keywords: ["IOptions","IOptionsSnapshot","IOptionsMonitor","singleton","scoped","re-reads","OnChange","startup","per request","live updates","static config"]
    },
    21: {
        answer: "Middleware is software component in the request pipeline that handles requests/responses. Each middleware can: process request, pass to next middleware (await next()), process response on way back. Examples: authentication, logging, exception handling, CORS, static files, routing. Added via app.Use(), app.Run(), app.Map() in Program.cs. Order matters.",
        keywords: ["middleware","pipeline","request","response","next()","app.Use","app.Run","order matters","authentication","logging","exception","CORS"]
    },
    22: {
        answer: "Pipeline is a chain of middleware delegates. Request flows through each middleware IN ORDER. Each calls next() to pass to next middleware. Response flows BACK through same chain in reverse order. First middleware added = first to see request, last to see response. Like Russian nesting dolls. Terminal middleware (Run) doesn't call next - ends pipeline.",
        keywords: ["chain","in order","reverse","next()","first sees request","last sees response","terminal","Run","delegates","nesting","flows back"]
    },
    23: {
        answer: "app.Use(): adds middleware that can call next() (pass to next middleware) AND process response on return. app.Run(): terminal middleware - doesn't call next(), ends pipeline. Only one Run() should be last. app.Map(): branches pipeline based on request path (e.g., Map(\"/api\") creates separate branch). MapWhen() for conditional branching.",
        keywords: ["Use","Run","Map","next()","terminal","branches","path","ends pipeline","conditional","MapWhen","last"]
    },
    24: {
        answer: "Custom middleware: create class with Invoke/InvokeAsync(HttpContext context, RequestDelegate next) method. Constructor receives RequestDelegate. Call await next(context) to pass to next. Register: app.UseMiddleware<MyMiddleware>(). Or inline: app.Use(async (context, next) => { /* before */ await next(); /* after */ }). Can inject services via InvokeAsync parameters.",
        keywords: ["InvokeAsync","HttpContext","RequestDelegate","next","UseMiddleware","class","inline","app.Use","inject services","constructor","custom"]
    },
    25: {
        answer: "Middleware order (recommended): 1) ExceptionHandler, 2) HSTS, 3) HTTPS Redirection, 4) Static Files, 5) Routing, 6) CORS, 7) Authentication, 8) Authorization, 9) Custom middleware, 10) Endpoints (MapControllers). Authentication MUST come before Authorization. Routing before auth. Static files before routing (skip pipeline for static). Exception handler first to catch all.",
        keywords: ["order","ExceptionHandler first","Static Files","Routing","Authentication","Authorization","before","after","CORS","Endpoints","HTTPS"]
    },
    26: {
        answer: "Short-circuiting: middleware doesn't call next(), stopping the pipeline early. Response is sent without reaching remaining middleware or endpoint. Examples: static file middleware serves file directly, authorization returns 401/403, CORS preflight returns 204. Used for performance (skip unnecessary processing) and security (block unauthorized requests early).",
        keywords: ["short-circuit","doesn't call next","stops pipeline","early","401","403","static files","performance","security","remaining","skip"]
    },
    27: {
        answer: "Global exception handling: app.UseExceptionHandler(\"/Error\") catches all unhandled exceptions. Custom middleware: app.Use(async (ctx, next) => { try { await next(); } catch(Exception ex) { /* log, return error response */ } }). Place FIRST in pipeline. In Development: app.UseDeveloperExceptionPage() shows detailed errors. Production: show friendly error page.",
        keywords: ["UseExceptionHandler","try catch","global","unhandled","first in pipeline","DeveloperExceptionPage","friendly error","log","Production","Development"]
    },
    28: {
        answer: "UseRouting(): adds endpoint routing middleware that matches request URL to endpoints. UseEndpoints() / MapControllers(): maps matched endpoint to actual controller/action and executes it. UseRouting MUST come before UseAuthentication/UseAuthorization (so route info is available for auth decisions). In .NET 6+: app.MapControllers() replaces UseEndpoints block.",
        keywords: ["UseRouting","UseEndpoints","MapControllers","matches URL","executes","before auth","endpoint routing",".NET 6","route info","available"]
    },
    29: {
        answer: "Order MUST be: UseRouting() → UseAuthentication() → UseAuthorization() → MapControllers(). Authentication before Authorization because: you must identify WHO user is before checking WHAT they can access. If reversed: authorization runs without knowing user identity, always fails or always passes. Wrong order is a common bug causing auth to not work.",
        keywords: ["order","Authentication before Authorization","UseRouting","identity","WHO","WHAT","common bug","must be","fails","reversed"]
    },
    30: {
        answer: "Conditional middleware using environment checks: if(app.Environment.IsDevelopment()) app.UseDeveloperExceptionPage(); Using Map/MapWhen: app.MapWhen(context => context.Request.Path.StartsWithSegments(\"/api\"), branch => { branch.UseMiddleware<ApiMiddleware>(); }). UseWhen: similar but rejoins main pipeline. Allows different middleware for different routes/conditions.",
        keywords: ["conditional","IsDevelopment","MapWhen","UseWhen","StartsWithSegments","environment","branch","different routes","conditions","rejoins"]
    },
    31: {
        answer: "Conventional routing: defined centrally in Program.cs with route templates. Pattern: {controller}/{action}/{id?}. MapControllerRoute(). Good for MVC views. Attribute routing: defined on controllers/actions with [Route], [HttpGet(\"/api/products\")]. More control, explicit, self-documenting. Preferred for APIs. Can mix both. Attribute overrides conventional.",
        keywords: ["conventional","attribute routing","centrally","[Route]","[HttpGet]","MapControllerRoute","pattern","explicit","self-documenting","API","overrides"]
    },
    32: {
        answer: "Endpoint routing (introduced .NET Core 3.0): separates route matching from execution. UseRouting() matches URL to endpoint. Between routing and endpoint: authentication/authorization can inspect matched route metadata. MapControllers()/MapGet() registers endpoints. Benefits: middleware can know which endpoint will execute before it runs, enabling smart auth decisions.",
        keywords: ["endpoint routing","separates matching","execution","UseRouting","metadata","MapControllers","middleware knows","before runs","auth decisions",".NET Core 3.0"]
    },
    33: {
        answer: "Route constraints restrict parameter values: {id:int} (must be integer), {name:alpha} (letters only), {age:range(18,65)}, {slug:regex(pattern)}, {id:min(1)}, {name:minlength(3)}, {name:maxlength(50)}. Applied inline in route template. If constraint fails: route doesn't match (404). Custom constraints: implement IRouteConstraint.",
        keywords: ["route constraints","{id:int}","alpha","range","regex","min","minlength","maxlength","IRouteConstraint","fails","404","restrict"]
    },
    34: {
        answer: "[Route(\"api/[controller]\")] defines the URL template for controller/action - sets the path. [HttpGet(\"items/{id}\")] combines HTTP method restriction + route template. [Route] alone doesn't restrict HTTP method. [HttpGet/Post/Put/Delete] restrict AND can add path segment. [Route] on controller + [HttpGet] on action combine to form full route.",
        keywords: ["[Route]","[HttpGet]","URL template","HTTP method","restrict","combine","controller","action","path segment","[controller]"]
    },
    35: {
        answer: "Optional parameter: {id?} - the ? makes it optional (action works with or without). Default value: {page=1} - if not provided, defaults to 1. In attribute routing: [HttpGet(\"{id?}\")] or action parameter with default: GetProducts(int page = 1). Combine: {controller=Home}/{action=Index}/{id?} - Home/Index are defaults, id is optional.",
        keywords: ["optional","?","default","=1","with or without","controller=Home","action=Index","id?","not provided","combine"]
    },
    36: {
        answer: "MapControllerRoute: registers conventional route with name and pattern template. Used for MVC (views). Example: MapControllerRoute(\"default\", \"{controller=Home}/{action=Index}/{id?}\"). MapControllers: registers attribute-routed controllers (no template needed). Used for APIs. Must have [Route] attributes on controllers/actions. Can use both together.",
        keywords: ["MapControllerRoute","MapControllers","conventional","attribute","template","pattern","MVC","API","[Route]","name","both"]
    },
    37: {
        answer: "Area routes: organize large apps into sections. Configure: MapControllerRoute(\"areas\", \"{area:exists}/{controller=Home}/{action=Index}/{id?}\") placed BEFORE default route. Controllers decorated with [Area(\"Admin\")]. Views in Areas/Admin/Views/. Link between areas: asp-area=\"Admin\" in tag helpers. Area constraint ':exists' validates area name.",
        keywords: ["area","MapControllerRoute","area:exists","[Area]","before default","Areas/Admin/Views","asp-area","organize","large apps","sections"]
    },
    38: {
        answer: "IUrlHelper generates URLs from route names/values. Inject via Url property in controllers. Methods: Url.Action(\"Index\",\"Home\"), Url.RouteUrl(\"routeName\", values), Url.Content(\"~/css/style.css\"). LinkGenerator (injected) for generating URLs outside controllers (services, middleware). Both ensure URLs match actual routes.",
        keywords: ["IUrlHelper","Url.Action","Url.RouteUrl","Url.Content","LinkGenerator","generate URLs","route names","outside controllers","inject","match routes"]
    },
    39: {
        answer: "Route precedence: when multiple routes match, more specific wins. Order: literal segments > constrained parameters > unconstrained parameters > catch-all. Attribute routes evaluated before conventional. Routes with more segments preferred. Ambiguous routes cause AmbiguousMatchException. Use route constraints and specific templates to avoid conflicts.",
        keywords: ["precedence","specific wins","literal","constrained","unconstrained","catch-all","ambiguous","AmbiguousMatchException","conflicts","more segments"]
    },
    40: {
        answer: "Handle route conflicts: 1) Use route constraints to differentiate ({id:int} vs {slug:alpha}). 2) Use [Route] with specific paths. 3) Order routes (most specific first in conventional). 4) Use different HTTP methods. 5) Use [ActionName] to differentiate. AmbiguousMatchException thrown when framework can't decide. Be explicit with routes to avoid.",
        keywords: ["conflicts","constraints","specific paths","order","HTTP methods","AmbiguousMatchException","explicit","differentiate","int vs alpha","first"]
    }
};

INTERVIEW_ANSWERS['asp.net_core_interview_questions'][41] = {
    answer: "Authentication = WHO are you? Verifies identity (login credentials, JWT, cookies). Authorization = WHAT can you do? Checks permissions/access after identity confirmed. Auth flow: Authenticate first → then Authorize. UseAuthentication() before UseAuthorization(). 401 = not authenticated, 403 = authenticated but forbidden.",
    keywords: ["authentication","authorization","WHO","WHAT","identity","permissions","401","403","UseAuthentication","UseAuthorization","before"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][42] = {
    answer: "Cookie Authentication: server creates encrypted cookie after successful login, browser sends cookie with every request. Configure: AddAuthentication(CookieDefaults).AddCookie(options => { options.LoginPath, options.ExpireTimeSpan }). Sign in: HttpContext.SignInAsync(scheme, principal). Claims stored in cookie. Good for MVC apps. Stateful - server validates cookie each request.",
    keywords: ["cookie","encrypted","browser sends","AddCookie","LoginPath","SignInAsync","ClaimsPrincipal","MVC","stateful","ExpireTimeSpan"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][43] = {
    answer: "JWT (JSON Web Token): stateless token containing claims, signed with secret key. Three parts: Header.Payload.Signature (base64). Flow: login → server generates JWT → client stores in localStorage/cookie → sends in Authorization: Bearer header. Validate: AddAuthentication().AddJwtBearer(options => { TokenValidationParameters }). No server session needed. Good for APIs/SPAs.",
    keywords: ["JWT","stateless","token","claims","Bearer","header","signed","TokenValidationParameters","AddJwtBearer","no session","API","SPA"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][44] = {
    answer: "Claims-based authorization: decisions based on claims (key-value pairs) in user's identity. Claim examples: Role=Admin, Email=x@y.com, Department=IT. Policy checks claims: options.AddPolicy(\"AdminOnly\", p => p.RequireClaim(\"Role\",\"Admin\")). Apply: [Authorize(Policy=\"AdminOnly\")]. More flexible than role-based - can check any claim value.",
    keywords: ["claims","key-value","policy","RequireClaim","AddPolicy","[Authorize(Policy)]","flexible","identity","Role","Email"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][45] = {
    answer: "Role-based: [Authorize(Roles=\"Admin,Manager\")] - simple, checks if user has role claim. Limited to role membership checks. Policy-based: [Authorize(Policy=\"name\")] - flexible, can combine multiple requirements (claims, age, custom logic). Define in services: AddPolicy(\"name\", builder => builder.RequireRole/RequireClaim/AddRequirements). Policy is preferred - more expressive and testable.",
    keywords: ["role-based","policy-based","Roles","Policy","RequireRole","RequireClaim","AddRequirements","flexible","preferred","multiple requirements"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][46] = {
    answer: "[Authorize]: requires authenticated user to access action/controller. Can specify Roles or Policy. Applied at controller level (all actions) or action level. [AllowAnonymous]: overrides [Authorize] - allows unauthenticated access to specific action even if controller has [Authorize]. Useful for login/register endpoints on an otherwise secured controller.",
    keywords: ["[Authorize]","[AllowAnonymous]","authenticated","override","controller level","action level","Roles","Policy","login","register"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][47] = {
    answer: "Custom authorization policy: services.AddAuthorization(options => { options.AddPolicy(\"MinAge18\", policy => policy.Requirements.Add(new MinAgeRequirement(18))); }). Create requirement class (IAuthorizationRequirement) and handler class (AuthorizationHandler<T>) with HandleRequirementAsync. Register handler: services.AddScoped<IAuthorizationHandler, MinAgeHandler>(). Apply: [Authorize(Policy=\"MinAge18\")].",
    keywords: ["custom policy","AddPolicy","IAuthorizationRequirement","AuthorizationHandler","HandleRequirementAsync","Requirements.Add","register handler","[Authorize(Policy)]"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][48] = {
    answer: "IAuthorizationHandler processes authorization requirements. Implement AuthorizationHandler<TRequirement> and override HandleRequirementAsync(context, requirement). Call context.Succeed(requirement) if authorized, do nothing or context.Fail() if not. Can inject services (DbContext, HttpContext) via constructor. Register in DI. Multiple handlers can evaluate same requirement (any succeed = pass).",
    keywords: ["IAuthorizationHandler","AuthorizationHandler","HandleRequirementAsync","context.Succeed","context.Fail","inject","multiple handlers","requirement","DI"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][49] = {
    answer: "ASP.NET Core Identity: complete membership system for user management. Provides: user registration, login, password hashing, email confirmation, 2FA, roles, claims, account lockout, external login (Google, Facebook). Uses EF Core for storage. AddIdentity<User, Role>() or AddDefaultIdentity(). Includes UI pages (scaffolded). SignInManager, UserManager for operations.",
    keywords: ["Identity","membership","registration","login","password hashing","2FA","roles","claims","EF Core","UserManager","SignInManager","external login"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][50] = {
    answer: "OAuth 2.0: authorization framework - lets users grant third-party apps limited access to their resources without sharing credentials. Flows: Authorization Code, Client Credentials, PKCE. OpenID Connect: identity layer ON TOP of OAuth 2.0 - adds authentication (ID token with user info). OAuth = authorization (access token), OIDC = authentication + authorization (ID token + access token).",
    keywords: ["OAuth 2.0","OpenID Connect","authorization","authentication","access token","ID token","third-party","PKCE","Authorization Code","credentials","identity layer"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][51] = {
    answer: "Refresh tokens: long-lived token used to get new access tokens without re-login. Flow: login → get access token (short-lived, 15min) + refresh token (long-lived, days). When access expires → send refresh token → get new access+refresh pair. Store refresh token securely (httpOnly cookie/DB). Invalidate on logout. Rotate refresh tokens for security.",
    keywords: ["refresh token","long-lived","short-lived","new access token","without re-login","rotate","httpOnly","invalidate","logout","15 min","securely"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][52] = {
    answer: "AddAuthentication(): configures HOW to identify users (schemes: JWT, Cookies, OAuth). Sets default scheme. Adds authentication services. AddAuthorization(): configures WHAT users can access (policies, roles, requirements). Adds authorization services. Both needed: Authentication identifies, Authorization decides access. AddAuthentication(JwtBearerDefaults).AddJwtBearer(). AddAuthorization(opts => opts.AddPolicy(...)).",
    keywords: ["AddAuthentication","AddAuthorization","schemes","policies","HOW identify","WHAT access","JwtBearerDefaults","AddJwtBearer","AddPolicy","both needed"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][53] = {
    answer: "EF Core is a lightweight ORM (Object-Relational Mapper) for .NET. Maps C# classes to database tables. Code-First: write C# models → generate database via migrations. Database-First: existing DB → scaffold/generate C# models. Code-First preferred for new projects (version control migrations). Database-First for legacy DBs. Supports SQL Server, PostgreSQL, MySQL, SQLite.",
    keywords: ["EF Core","ORM","Code-First","Database-First","migrations","scaffold","maps","C# classes","tables","SQL Server","PostgreSQL"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][54] = {
    answer: "Migrations manage database schema changes as C# code (version control for DB). Commands: dotnet ef migrations add InitialCreate (creates migration file), dotnet ef database update (applies to DB), dotnet ef migrations remove (undo last). Each migration has Up() (apply changes) and Down() (revert). Stored in Migrations/ folder. Never edit applied migrations.",
    keywords: ["migrations","add","update","remove","Up()","Down()","schema changes","version control","dotnet ef","Migrations folder","never edit applied"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][55] = {
    answer: "DbContext: main class that coordinates EF Core. Represents database session. Contains DbSet<T> properties and configuration (OnModelCreating). Registered as Scoped in DI. Manages connections, change tracking, SaveChanges(). DbSet<T>: represents a table/collection. Used to query and save entities. db.Products.Where(), db.Products.Add(). Each entity type gets a DbSet.",
    keywords: ["DbContext","DbSet","session","OnModelCreating","Scoped","SaveChanges","change tracking","table","query","Add","Where","entity"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][56] = {
    answer: "Lazy Loading: related data loaded automatically when navigation property accessed (needs proxies/ILazyLoader). N+1 query problem. Eager Loading: related data loaded upfront with .Include(x => x.Orders) in same query (JOIN). Best for known needs. Explicit Loading: manually load later via context.Entry(entity).Collection(x => x.Orders).Load(). Control over when to load.",
    keywords: ["lazy loading","eager loading","explicit loading","Include","navigation property","N+1","JOIN","Load()","Entry","proxies","upfront","manually"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][57] = {
    answer: "Include() loads first-level related entity: db.Orders.Include(o => o.Customer). ThenInclude() loads nested related entity (child of child): db.Orders.Include(o => o.Items).ThenInclude(i => i.Product). Chain multiple Include() for multiple first-level relations. Both generate JOINs in SQL. Use for eager loading to avoid N+1 queries.",
    keywords: ["Include","ThenInclude","first-level","nested","child of child","JOINs","eager loading","chain","N+1","related entity"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][58] = {
    answer: "Change Tracking: EF Core tracks changes to entities retrieved from database. States: Unchanged, Modified, Added, Deleted, Detached. On SaveChanges(), generates appropriate INSERT/UPDATE/DELETE SQL. Automatic for tracked entities. DetectChanges() scans for modifications. Disable with AsNoTracking() for read-only queries (better performance). ChangeTracker.Entries() inspects tracked entities.",
    keywords: ["change tracking","Unchanged","Modified","Added","Deleted","Detached","SaveChanges","INSERT","UPDATE","DELETE","AsNoTracking","DetectChanges"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][59] = {
    answer: "Concurrency conflicts: two users edit same record simultaneously. EF Core uses optimistic concurrency with [ConcurrencyCheck] or [Timestamp]/rowversion column. On SaveChanges(), EF checks if data changed since read (WHERE includes original values). If changed: throws DbUpdateConcurrencyException. Handle: retry, merge changes, or show conflict to user. Pessimistic locking not built-in.",
    keywords: ["concurrency","optimistic","[Timestamp]","rowversion","DbUpdateConcurrencyException","[ConcurrencyCheck]","WHERE","retry","merge","two users"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][60] = {
    answer: "AsNoTracking(): tells EF Core not to track returned entities. Benefits: faster queries (no change tracking overhead), less memory. Use for: read-only operations, displaying data, reports, APIs returning data. Don't use when you need to update/delete entities later. Apply: db.Products.AsNoTracking().ToList(). Can set globally: context.ChangeTracker.QueryTrackingBehavior = NoTracking.",
    keywords: ["AsNoTracking","no tracking","faster","less memory","read-only","reports","overhead","don't update","globally","QueryTrackingBehavior"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][61] = {
    answer: "Shadow properties: properties that exist in EF model and database but NOT in the C# entity class. Defined in OnModelCreating: builder.Property<DateTime>(\"CreatedDate\"). Useful for: audit fields (CreatedDate, ModifiedBy), foreign keys without navigation. Access: context.Entry(entity).Property(\"CreatedDate\").CurrentValue. Keeps entity classes clean from infrastructure concerns.",
    keywords: ["shadow properties","not in entity","OnModelCreating","builder.Property","audit","CreatedDate","Entry","CurrentValue","clean","database only"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][62] = {
    answer: "Raw SQL in EF Core: db.Products.FromSqlRaw(\"SELECT * FROM Products WHERE Price > {0}\", price) - returns entities, tracked. db.Database.ExecuteSqlRaw(\"UPDATE...\") - for non-query DML commands. FromSqlInterpolated() for safe interpolation. Always parameterize to prevent SQL injection. Raw SQL results must map to entity or keyless entity type.",
    keywords: ["FromSqlRaw","ExecuteSqlRaw","FromSqlInterpolated","raw SQL","parameterize","SQL injection","tracked","non-query","entity","keyless"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][63] = {
    answer: "Repository Pattern: abstraction layer between business logic and data access. Generic interface: IRepository<T> with GetAll(), GetById(), Add(), Update(), Delete(). Implementation uses DbContext internally. Benefits: testability (mock repository), swappable data source, single responsibility. Debate: some argue EF Core IS the repository (DbSet). Still useful for complex queries and clean architecture.",
    keywords: ["repository pattern","IRepository","abstraction","GetAll","GetById","Add","Delete","mock","testability","DbContext","clean architecture"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][64] = {
    answer: "Unit of Work: coordinates multiple repositories to ensure all changes saved in single transaction. Groups related operations. In EF Core, DbContext IS the Unit of Work (SaveChanges commits all tracked changes atomically). Custom UoW: wraps DbContext, exposes repositories, single SaveChanges(). Benefits: data consistency, transaction management, fewer DB round trips.",
    keywords: ["unit of work","single transaction","multiple repositories","SaveChanges","DbContext","atomically","consistency","coordinates","custom UoW","round trips"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][65] = {
    answer: "Seed data in EF Core: OnModelCreating: modelBuilder.Entity<Role>().HasData(new Role{Id=1, Name=\"Admin\"}). Applied via migration. Alternative: custom initialization in Program.cs using scope: using var scope = app.Services.CreateScope(); var db = scope.ServiceProvider.GetService<AppDbContext>(); if(!db.Roles.Any()) db.Roles.Add(...); db.SaveChanges(). HasData is declarative, custom code is flexible.",
    keywords: ["seed data","HasData","OnModelCreating","migration","Program.cs","CreateScope","if not Any","SaveChanges","declarative","initialization"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][66] = {
    answer: "REST (Representational State Transfer): architectural style for APIs. Principles: stateless (no server session), resource-based URLs (/api/products/5), HTTP methods for actions (GET=read, POST=create, PUT=update, DELETE=remove), JSON responses, proper status codes (200,201,404,500), HATEOAS (links in response). Each URL represents a resource, not an action.",
    keywords: ["REST","stateless","resource-based","HTTP methods","GET","POST","PUT","DELETE","JSON","status codes","HATEOAS","URL"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][67] = {
    answer: "GET: retrieve resource (safe, idempotent, cacheable). POST: create new resource (not idempotent). PUT: update/replace entire resource (idempotent). PATCH: partial update (specific fields only). DELETE: remove resource (idempotent). HEAD: like GET but no body. OPTIONS: supported methods. Idempotent = same result if called multiple times.",
    keywords: ["GET","POST","PUT","PATCH","DELETE","retrieve","create","update","partial","remove","idempotent","safe","cacheable"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][68] = {
    answer: "PUT: replaces ENTIRE resource - must send all fields (missing fields set to null/default). Idempotent. PATCH: updates only SPECIFIED fields - send only what changed (smaller payload). Not necessarily idempotent. Use PUT when client has complete updated object. Use PATCH for partial updates (e.g., just changing status). PATCH uses JSON Patch or custom DTO.",
    keywords: ["PUT","PATCH","entire","partial","all fields","specified fields","idempotent","smaller payload","JSON Patch","replace","update"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][69] = {
    answer: "API Versioning approaches: 1) URL path: /api/v1/products (most common, clear). 2) Query string: /api/products?version=2. 3) Header: X-API-Version: 2. 4) Media type: Accept: application/vnd.myapi.v2+json. NuGet: Asp.Versioning.Mvc. Configure: AddApiVersioning(). Apply: [ApiVersion(\"1.0\")], [MapToApiVersion(\"2.0\")]. URL versioning is most recommended.",
    keywords: ["API versioning","URL path","/v1/","query string","header","media type","Asp.Versioning","[ApiVersion]","MapToApiVersion","recommended"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][70] = {
    answer: "Swagger (OpenAPI): auto-generates interactive API documentation. Shows endpoints, parameters, responses, models. Test APIs directly from browser. NuGet: Swashbuckle.AspNetCore. Configure: services.AddSwaggerGen(), app.UseSwagger(), app.UseSwaggerUI(). Access: /swagger. Add XML comments for descriptions. Supports authentication testing. Essential for API development and team collaboration.",
    keywords: ["Swagger","OpenAPI","documentation","interactive","Swashbuckle","AddSwaggerGen","UseSwagger","/swagger","test","XML comments","endpoints"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][71] = {
    answer: "CORS (Cross-Origin Resource Sharing): browser security preventing JS from calling API on different domain. Configure: services.AddCors(opts => opts.AddPolicy(\"name\", builder => builder.WithOrigins(\"http://localhost:3000\").AllowAnyMethod().AllowAnyHeader())). Apply: app.UseCors(\"name\") or [EnableCors(\"name\")]. Place UseCors after UseRouting, before UseAuthorization.",
    keywords: ["CORS","cross-origin","browser security","AddCors","WithOrigins","AllowAnyMethod","AllowAnyHeader","UseCors","[EnableCors]","different domain"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][72] = {
    answer: "File upload in Web API: action accepts IFormFile parameter. [HttpPost] with [FromForm]. Client sends multipart/form-data. Save: await file.CopyToAsync(stream). Validate: size (file.Length), content type, extension. For large files: use streaming (IFormFile buffers in memory). Multiple files: IFormFile[] or List<IFormFile>. Store in Azure Blob/local/database.",
    keywords: ["IFormFile","multipart/form-data","CopyToAsync","[FromForm]","validate","size","content type","streaming","multiple","Azure Blob"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][73] = {
    answer: "Pagination: Skip/Take with page parameters. Return: items + metadata (totalCount, totalPages, currentPage). Sorting: accept sortBy/sortDirection, use OrderBy dynamically. Filtering: accept filter params, build Where clauses. Return in response headers or wrapper object. Example: /api/products?page=2&pageSize=10&sortBy=price&category=electronics. Libraries: use LINQ dynamically.",
    keywords: ["pagination","Skip","Take","totalCount","sorting","OrderBy","filtering","Where","page","pageSize","sortBy","metadata","wrapper"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][74] = {
    answer: "HATEOAS (Hypermedia As The Engine Of Application State): REST principle where API responses include links to related actions/resources. Client navigates API via links, not hardcoded URLs. Example: GET /orders/1 returns order + links: {self: /orders/1, cancel: /orders/1/cancel, items: /orders/1/items}. Makes API self-discoverable. Rarely fully implemented in practice.",
    keywords: ["HATEOAS","hypermedia","links","self-discoverable","related actions","navigate","not hardcoded","REST principle","rarely implemented"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][75] = {
    answer: "Problem Details (RFC 7807): standard format for API error responses. Return: type, title, status, detail, instance. In .NET: return Problem(detail:\"msg\", statusCode:404) or BadRequest(new ProblemDetails{...}). Configure: services.AddProblemDetails(). Consistent error format across all endpoints. Client knows exact error structure. Better than custom error objects.",
    keywords: ["Problem Details","RFC 7807","type","title","status","detail","Problem()","consistent","standard","BadRequest","ProblemDetails"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][76] = {
    answer: "Response Caching: caches HTTP responses (browser/CDN), uses Cache-Control headers, [ResponseCache] attribute. In-Memory Caching: IMemoryCache, server-side, app-process specific, lost on restart, fast, good for single server. Distributed Caching: IDistributedCache, shared across servers (Redis, SQL Server), survives restarts, needed for load-balanced apps. Use distributed for production multi-server.",
    keywords: ["Response Caching","In-Memory","Distributed","IMemoryCache","IDistributedCache","Redis","Cache-Control","[ResponseCache]","multi-server","restart"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][77] = {
    answer: "Async/await for performance: use for I/O-bound operations (DB calls, HTTP calls, file I/O). Frees thread pool threads to handle other requests while waiting. DON'T use for CPU-bound work. Return Task<T>/Task. Don't use .Result/.Wait() (causes deadlocks). Use async all the way up (avoid sync-over-async). ConfigureAwait(false) in libraries. Improves scalability, not individual request speed.",
    keywords: ["async","await","I/O-bound","thread pool","frees threads","scalability","deadlock",".Result","all the way","ConfigureAwait","Task<T>"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][78] = {
    answer: "Connection Pooling: reuses database connections instead of creating/closing each time. Pool of open connections maintained. When code requests connection, pool provides idle one; when done, returns to pool (not actually closed). ADO.NET pools automatically via connection string (Max Pool Size, Min Pool Size). EF Core benefits from it. Reduces connection overhead dramatically.",
    keywords: ["connection pooling","reuse","pool","idle","returns","not closed","ADO.NET","connection string","Max Pool Size","overhead","EF Core"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][79] = {
    answer: "Built-in logging: ILogger<T> injected via DI. Log levels: Trace, Debug, Information, Warning, Error, Critical. Configure in appsettings.json (Logging section). Providers: Console, Debug, EventLog. Usage: _logger.LogInformation(\"msg {param}\", value). Structured logging with placeholders. Filter by category and level. Extensible - add Serilog/NLog as provider.",
    keywords: ["ILogger","log levels","Trace","Information","Warning","Error","Critical","appsettings","Console","structured","Serilog","providers"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][80] = {
    answer: "Serilog: popular structured logging library. Benefits over built-in: file sinks (rolling), Seq/Elasticsearch integration, structured JSON logs, enrichers (machine name, thread). Setup: builder.Host.UseSerilog((ctx,cfg) => cfg.ReadFrom.Configuration(ctx.Configuration)). Sinks: Console, File, Seq, SQL. Configure in appsettings. NuGet: Serilog.AspNetCore.",
    keywords: ["Serilog","structured","sinks","File","Seq","JSON","enrichers","UseSerilog","rolling","NuGet","appsettings","ReadFrom.Configuration"]
};

INTERVIEW_ANSWERS['asp.net_core_interview_questions'][81] = {
    answer: "Global exception handling: 1) Middleware: app.UseExceptionHandler() with custom handler lambda or error controller. 2) Custom middleware with try-catch wrapping next(). 3) Exception Filter: IExceptionFilter for MVC/API specific. 4) Problem Details: return consistent error format. Best practice: UseExceptionHandler first in pipeline, log exception, return ProblemDetails for APIs, error page for MVC.",
    keywords: ["global","UseExceptionHandler","middleware","try-catch","IExceptionFilter","ProblemDetails","log","first in pipeline","error page","consistent"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][82] = {
    answer: "XSS (Cross-Site Scripting): attacker injects malicious JavaScript into pages viewed by other users. Types: Stored, Reflected, DOM-based. Prevention in ASP.NET Core: Razor auto-encodes output by default (@Model.Name is HTML-encoded). Don't use @Html.Raw() with user input. Use Content Security Policy headers. Validate/sanitize input. AntiXSS library. Tag helpers auto-encode.",
    keywords: ["XSS","JavaScript","inject","HTML-encode","Razor","@Html.Raw","Content Security Policy","sanitize","stored","reflected","auto-encode"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][83] = {
    answer: "CSRF (Cross-Site Request Forgery): attacker tricks user's browser into making unwanted requests to authenticated site. Prevention: Anti-Forgery Token - server generates unique token, embedded in form, validated on POST. [ValidateAntiForgeryToken] on POST actions. Tag helpers auto-include token in forms. For APIs: not needed if using JWT (no cookies). SameSite cookie attribute helps.",
    keywords: ["CSRF","anti-forgery token","ValidateAntiForgeryToken","form","POST","tricks browser","JWT not needed","SameSite","auto-include","validated"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][84] = {
    answer: "SQL Injection: attacker inserts malicious SQL via user input to manipulate database. EF Core prevents by: always parameterizing queries (LINQ translates to parameterized SQL), FromSqlInterpolated() uses parameters. DON'T: concatenate user input in raw SQL, use FromSqlRaw with string concatenation. Use stored procedures with parameters. Always validate/sanitize input.",
    keywords: ["SQL injection","parameterized","EF Core","LINQ","FromSqlInterpolated","don't concatenate","validate","stored procedures","user input","malicious SQL"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][85] = {
    answer: "HTTPS enforcement: app.UseHttpsRedirection() redirects HTTP to HTTPS. HSTS (HTTP Strict Transport Security): tells browser to ALWAYS use HTTPS for this domain. app.UseHsts() adds Strict-Transport-Security header. Don't use HSTS in development. Configure: services.AddHsts(opts => { opts.MaxAge = TimeSpan.FromDays(365); }). Required for production security.",
    keywords: ["HTTPS","UseHttpsRedirection","HSTS","Strict-Transport-Security","always HTTPS","browser","UseHsts","MaxAge","production","redirect"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][86] = {
    answer: "Data Protection API: provides cryptographic services for protecting data (encrypting/decrypting). Used internally for: auth cookies, anti-forgery tokens, TempData encryption. Custom use: IDataProtector.Protect()/Unprotect(). Keys stored in file system/Azure/Redis. Key rotation automatic. services.AddDataProtection(). Purpose strings isolate protected data between components.",
    keywords: ["Data Protection","IDataProtector","Protect","Unprotect","encrypt","decrypt","cookies","anti-forgery","key rotation","purpose strings","AddDataProtection"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][87] = {
    answer: "Store secrets securely: 1) User Secrets (development): dotnet user-secrets set \"key\" \"value\" - stored outside project. 2) Environment variables (production). 3) Azure Key Vault (cloud). 4) AWS Secrets Manager. NEVER store in appsettings.json or source code. Access via IConfiguration (same as appsettings). .gitignore secrets.json.",
    keywords: ["User Secrets","Azure Key Vault","environment variables","never in source","dotnet user-secrets","IConfiguration","outside project",".gitignore","production","development"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][88] = {
    answer: "Unit Testing: tests individual units (methods/classes) in isolation. Mock dependencies. Fast, no external resources. Frameworks: xUnit, NUnit, MSTest. Integration Testing: tests multiple components working together (real DB, real pipeline). Slower. WebApplicationFactory creates test server. Unit for business logic, Integration for end-to-end API testing.",
    keywords: ["unit testing","integration testing","isolation","mock","xUnit","NUnit","WebApplicationFactory","real DB","fast","slow","end-to-end"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][89] = {
    answer: "Unit test controllers: create controller instance with mocked dependencies. Mock IService using Moq: var mock = new Mock<IService>(); mock.Setup(s => s.GetAll()).Returns(data). var controller = new ProductsController(mock.Object). Call action: var result = controller.Index(). Assert: Assert.IsType<ViewResult>(result). Verify mock calls: mock.Verify(). Test IActionResult type and model data.",
    keywords: ["unit test","controller","Mock","Moq","Setup","Returns","mock.Object","Assert","ViewResult","Verify","mocked dependencies"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][90] = {
    answer: "Moq: popular mocking library for creating fake implementations. Usage: var mock = new Mock<IRepository>(); mock.Setup(r => r.GetById(1)).ReturnsAsync(entity); Inject: new Service(mock.Object). Verify calls: mock.Verify(r => r.Save(), Times.Once). Supports: async methods (ReturnsAsync), exceptions (Throws), callbacks, property setup. NuGet: Moq.",
    keywords: ["Moq","Mock<T>","Setup","Returns","ReturnsAsync","Verify","Times.Once","mock.Object","Throws","callback","fake","NuGet"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][91] = {
    answer: "WebApplicationFactory<TStartup>: creates in-memory test server for integration tests. Provides HttpClient to call real API endpoints. Full pipeline (middleware, DI, routing) runs. Override services: WithWebHostBuilder(b => b.ConfigureServices(s => s.Replace(db))). Test: var client = factory.CreateClient(); var response = await client.GetAsync(\"/api/products\"). Assert response status and content.",
    keywords: ["WebApplicationFactory","in-memory","test server","HttpClient","integration","full pipeline","CreateClient","GetAsync","ConfigureServices","Replace"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][92] = {
    answer: "Repository Pattern: abstraction over data access layer. Interface defines data operations (GetAll, GetById, Add, Update, Delete). Implementation uses DbContext/EF Core. Benefits: testable (mock repo in tests), swappable data source, single responsibility, clean controllers. Generic repository: IRepository<T> works for any entity. Register: services.AddScoped(typeof(IRepository<>), typeof(Repository<>)).",
    keywords: ["repository","abstraction","IRepository","GetAll","GetById","mock","testable","swappable","generic","DbContext","services.AddScoped"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][93] = {
    answer: "CQRS (Command Query Responsibility Segregation): separate models for reading (Query) and writing (Command). Read model optimized for display (DTOs, denormalized). Write model optimized for business rules (domain entities). Benefits: scalability (scale reads/writes independently), simpler models, different storage for reads vs writes. Often combined with Event Sourcing. Overkill for simple CRUD.",
    keywords: ["CQRS","Command","Query","separate","read model","write model","scalability","independently","Event Sourcing","denormalized","overkill CRUD"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][94] = {
    answer: "Mediator Pattern (MediatR): reduces coupling by having objects communicate through a mediator instead of directly. In .NET: MediatR library. Send commands/queries via IMediator.Send(request). Handler processes: IRequestHandler<TRequest, TResponse>. Benefits: clean controllers (just send request), pipeline behaviors (logging, validation), CQRS support. NuGet: MediatR.",
    keywords: ["MediatR","mediator","IMediator.Send","IRequestHandler","pipeline behaviors","clean controllers","coupling","commands","queries","NuGet","validation"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][95] = {
    answer: "Clean Architecture (Onion): layers with dependencies pointing inward. Center: Domain (entities, interfaces). Application (use cases, DTOs). Infrastructure (EF Core, external services). Presentation (API/MVC). Inner layers don't reference outer. Benefits: testable, independent of frameworks/DB, maintainable. Dependency rule: outer depends on inner, never reverse. Interfaces in core, implementations in infra.",
    keywords: ["Clean Architecture","Onion","Domain","Application","Infrastructure","Presentation","inward","testable","interfaces","implementations","dependency rule"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][96] = {
    answer: "SOLID: S-Single Responsibility (class does one thing). O-Open/Closed (open for extension, closed for modification - use interfaces). L-Liskov Substitution (derived can replace base without breaking). I-Interface Segregation (small focused interfaces, not fat). D-Dependency Inversion (depend on abstractions, not concrete - use DI). All promote maintainable, testable, flexible code.",
    keywords: ["SOLID","Single Responsibility","Open/Closed","Liskov","Interface Segregation","Dependency Inversion","abstraction","DI","maintainable","testable","flexible"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][97] = {
    answer: "Monolithic: single deployable unit, all features in one codebase, simpler initially, harder to scale individual parts. Microservices: independent services, own database, communicate via API/messages, deploy independently, scale individually. Microservices: complex but scalable. Monolith: simpler but tightly coupled. Start monolith, split to microservices when needed.",
    keywords: ["monolithic","microservices","single unit","independent","own database","API","scale individually","deploy","complex","simpler","start monolith"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][98] = {
    answer: "Background services run long-running tasks in background. IHostedService: interface with StartAsync/StopAsync. BackgroundService: abstract class with ExecuteAsync (easier). Examples: queue processing, scheduled jobs, health monitoring. Register: services.AddHostedService<MyWorker>(). Runs alongside web app. Use for: polling, cleanup tasks, event processing. Supports cancellation via CancellationToken.",
    keywords: ["IHostedService","BackgroundService","ExecuteAsync","background","AddHostedService","long-running","queue","scheduled","CancellationToken","StartAsync"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][99] = {
    answer: "Health Checks: endpoint to monitor app status (dependencies alive?). Configure: services.AddHealthChecks().AddDbContextCheck<AppDbContext>().AddRedis(connStr). Map: app.MapHealthChecks(\"/health\"). Returns Healthy/Unhealthy/Degraded. Custom checks: implement IHealthCheck. Used by load balancers, Kubernetes, monitoring tools. NuGet: AspNetCore.HealthChecks.* for various providers.",
    keywords: ["Health Checks","MapHealthChecks","/health","Healthy","Unhealthy","IHealthCheck","AddHealthChecks","AddDbContextCheck","Kubernetes","monitoring","load balancer"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][100] = {
    answer: "Rate Limiting (.NET 7+): limits number of requests per time window. Built-in: services.AddRateLimiter(). Algorithms: Fixed Window, Sliding Window, Token Bucket, Concurrency. Configure: AddFixedWindowLimiter(\"policy\", opts => { opts.PermitLimit=10; opts.Window=TimeSpan.FromMinutes(1); }). Apply: [EnableRateLimiting(\"policy\")] or app.UseRateLimiter(). Returns 429 Too Many Requests.",
    keywords: ["rate limiting",".NET 7","AddRateLimiter","Fixed Window","Sliding Window","Token Bucket","429","PermitLimit","EnableRateLimiting","per time window"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][101] = {
    answer: "Minimal APIs (.NET 6+): lightweight alternative to controllers. No controller class needed. Define routes directly in Program.cs: app.MapGet(\"/api/products\", () => Results.Ok(products)). Less ceremony, fewer files. Good for: small APIs, microservices, prototypes. Controllers better for: large APIs, complex logic, filters, model binding features. Both can coexist.",
    keywords: ["Minimal APIs","MapGet","Program.cs","no controller","lightweight","Results.Ok",".NET 6","small APIs","microservices","coexist","less ceremony"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][102] = {
    answer: "HttpClient directly: issues with socket exhaustion (too many connections), DNS changes not reflected. IHttpClientFactory: manages HttpClient lifetime, pools handlers, configured clients. Register: services.AddHttpClient<MyService>(c => c.BaseAddress = new Uri(\"...\")). Named/typed clients. Use factory, never new HttpClient() in loop. Handles DNS rotation and connection reuse.",
    keywords: ["IHttpClientFactory","HttpClient","socket exhaustion","pools","DNS","AddHttpClient","named","typed","BaseAddress","never new","connection reuse"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][103] = {
    answer: "SignalR: real-time communication library for ASP.NET Core. Enables server-to-push client updates. Use cases: chat, live notifications, dashboards, gaming. Creates persistent connection. Hub class: defines methods clients can call and server can invoke on clients. Client: JavaScript signalr.js connects to hub. Configure: services.AddSignalR(), app.MapHub<ChatHub>(\"/chatHub\").",
    keywords: ["SignalR","real-time","push","Hub","persistent connection","chat","notifications","MapHub","AddSignalR","server-to-client","dashboard"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][104] = {
    answer: "SignalR transport methods (negotiates best): 1) WebSockets (preferred - full duplex, persistent, most efficient). 2) Server-Sent Events (SSE - server to client only, HTTP). 3) Long Polling (client repeatedly asks server, fallback). SignalR auto-negotiates best transport available. WebSocket requires server support. Falls back to SSE then Long Polling for older browsers/servers.",
    keywords: ["WebSockets","Server-Sent Events","Long Polling","transport","auto-negotiates","full duplex","fallback","persistent","SSE","preferred"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][105] = {
    answer: "Deploy to IIS: 1) Install .NET Hosting Bundle on server. 2) Publish app: dotnet publish -c Release. 3) Create IIS site pointing to publish folder. 4) Set App Pool to 'No Managed Code' (for out-of-process). 5) Configure web.config (auto-generated by publish). IIS acts as reverse proxy forwarding to Kestrel. Ensure proper permissions on folder.",
    keywords: ["IIS","Hosting Bundle","dotnet publish","App Pool","No Managed Code","reverse proxy","Kestrel","web.config","permissions","deploy"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][106] = {
    answer: "In-Process: app runs inside IIS worker process (w3wp.exe). Single process. Faster (no inter-process communication). Uses IIS HTTP server instead of Kestrel. Windows only. Out-of-Process: Kestrel runs as separate process, IIS/Nginx acts as reverse proxy forwarding requests. Cross-platform. Two processes. Slightly slower but more flexible. Default in .NET Core 2.2+: in-process.",
    keywords: ["in-process","out-of-process","w3wp.exe","Kestrel","reverse proxy","IIS","faster","two processes","cross-platform","default"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][107] = {
    answer: "Docker: containerizes app with all dependencies into portable image. Dockerfile: FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base, FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build, COPY/RUN dotnet publish, ENTRYPOINT [\"dotnet\",\"app.dll\"]. Benefits: consistent environments, easy scaling, CI/CD friendly. Docker Compose for multi-container (app + DB). Deploy to: Azure Container Apps, AWS ECS, Kubernetes.",
    keywords: ["Docker","container","Dockerfile","image","FROM","ENTRYPOINT","consistent","scaling","Docker Compose","Kubernetes","CI/CD","portable"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][108] = {
    answer: "Custom logging middleware: public class RequestLoggingMiddleware { RequestDelegate _next; ILogger _logger; constructor(next, logger). async Task InvokeAsync(HttpContext context) { _logger.LogInformation(\"Request: {method} {path}\", context.Request.Method, context.Request.Path); await _next(context); _logger.LogInformation(\"Response: {status}\", context.Response.StatusCode); } }. Register: app.UseMiddleware<RequestLoggingMiddleware>().",
    keywords: ["custom middleware","RequestLoggingMiddleware","InvokeAsync","Request.Method","Request.Path","Response.StatusCode","ILogger","UseMiddleware","before next","after next"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][109] = {
    answer: "JWT implementation: Generate: new JwtSecurityToken(issuer, audience, claims, expires, signingCredentials with SymmetricSecurityKey). Return token string via JwtSecurityTokenHandler().WriteToken(). Validate: services.AddAuthentication(JwtBearerDefaults).AddJwtBearer(opts => { opts.TokenValidationParameters = new { ValidateIssuer, ValidateAudience, IssuerSigningKey } }). Protect endpoints: [Authorize].",
    keywords: ["JWT","JwtSecurityToken","claims","expires","SymmetricSecurityKey","WriteToken","AddJwtBearer","TokenValidationParameters","ValidateIssuer","[Authorize]"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][110] = {
    answer: "Generic Repository: IRepository<T> where T : class { Task<IEnumerable<T>> GetAll(); Task<T> GetById(int id); Task Add(T entity); void Update(T entity); void Delete(T entity); }. Implementation uses DbContext: _context.Set<T>(). Unit of Work: IUnitOfWork { IRepository<Product> Products; IRepository<Order> Orders; Task<int> SaveAsync(); }. Register both in DI. Controllers use UoW.",
    keywords: ["generic repository","IRepository<T>","Set<T>","Unit of Work","IUnitOfWork","SaveAsync","GetAll","GetById","DbContext","DI","controllers"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][111] = {
    answer: "Middleware order matters because each middleware processes in sequence. Wrong order breaks functionality: Auth before Routing = route data unavailable for auth decisions. Static Files after Routing = unnecessary routing overhead. Exception Handler not first = some exceptions uncaught. CORS after Authorization = preflight fails. Always follow: ExceptionHandler → StaticFiles → Routing → Auth → Authorization → Endpoints.",
    keywords: ["order matters","sequence","breaks","Auth before Routing","Exception Handler first","CORS","Static Files","overhead","preflight fails","follow"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][112] = {
    answer: "IOptions pattern: binds configuration sections to strongly-typed classes. Define: class MySettings { public string ApiKey {get;set;} }. Register: services.Configure<MySettings>(config.GetSection(\"MySettings\")). Inject: IOptions<MySettings> options → options.Value.ApiKey. Benefits: type-safe, IntelliSense, testable, organized. IOptionsSnapshot for scoped re-read, IOptionsMonitor for singleton live updates.",
    keywords: ["IOptions","Configure<T>","GetSection","options.Value","strongly-typed","type-safe","IntelliSense","IOptionsSnapshot","IOptionsMonitor","bind"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][113] = {
    answer: "Exception handling: UseExceptionHandler middleware globally, try-catch in specific cases, return ProblemDetails for API errors. Logging: inject ILogger<T>, use Serilog for structured file/Seq logging, log at appropriate levels (Error for exceptions, Information for flow, Warning for recoverable issues). Combine: catch exception → log with full details → return friendly response to user.",
    keywords: ["UseExceptionHandler","ProblemDetails","ILogger","Serilog","structured","log levels","Error","Information","catch","friendly response","global"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][114] = {
    answer: "Health Checks: endpoints reporting app/dependency health status. services.AddHealthChecks().AddDbContextCheck<Db>().AddRedis(). app.MapHealthChecks(\"/health\"). Returns: Healthy/Degraded/Unhealthy with details. Custom: implement IHealthCheck with CheckHealthAsync(). Used by: load balancers (remove unhealthy instances), Kubernetes liveness/readiness probes, monitoring dashboards.",
    keywords: ["Health Checks","Healthy","Degraded","Unhealthy","IHealthCheck","CheckHealthAsync","load balancer","Kubernetes","liveness","readiness","MapHealthChecks"]
};
INTERVIEW_ANSWERS['asp.net_core_interview_questions'][115] = {
    answer: "In-Memory Cache (IMemoryCache): stored in app process memory, fast, lost on restart, single server only. Good for: small apps, frequently accessed data, single instance. Distributed Cache (IDistributedCache with Redis/SQL): shared across multiple servers, survives restarts, slower than memory but consistent. Required for: load-balanced apps, microservices. Redis is most popular distributed cache.",
    keywords: ["In-Memory","IMemoryCache","Distributed","IDistributedCache","Redis","process memory","shared","multiple servers","restart","load-balanced","fast"]
};

// Web API Interview Answers
INTERVIEW_ANSWERS['web_api_interview_questions'] = {
    1: {
        answer: "Web API is a framework for building HTTP-based RESTful services that return data (JSON/XML) to any client (mobile, SPA, other services). MVC returns Views (HTML) for browsers. Key differences: Web API uses ControllerBase, returns ObjectResult/JSON, content negotiation, stateless. MVC uses Controller, returns ViewResult/HTML, has ViewBag/TempData. In .NET Core both are unified but serve different purposes.",
        keywords: ["Web API","HTTP","RESTful","JSON","XML","any client","ControllerBase","MVC","ViewResult","stateless","unified","content negotiation"]
    },
    2: {
        answer: "REST (Representational State Transfer) is an architectural style. RESTful principles: 1) Stateless (no server session, each request has all info). 2) Resource-based URLs (/api/products/5, nouns not verbs). 3) HTTP methods for actions (GET=read, POST=create, PUT=update, DELETE=remove). 4) Proper status codes. 5) JSON/XML representation. 6) HATEOAS (links in responses). 7) Uniform interface.",
        keywords: ["REST","stateless","resource-based","HTTP methods","GET","POST","PUT","DELETE","status codes","JSON","nouns","HATEOAS","uniform"]
    },
    3: {
        answer: "HTTP Status Codes: 1xx Informational. 2xx Success: 200 OK, 201 Created, 204 No Content. 3xx Redirection: 301 Moved, 304 Not Modified. 4xx Client Error: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 405 Method Not Allowed, 409 Conflict, 422 Unprocessable. 5xx Server Error: 500 Internal Server Error, 503 Service Unavailable. Return appropriate codes for each scenario.",
        keywords: ["200","201","204","400","401","403","404","409","500","503","OK","Created","Bad Request","Unauthorized","Not Found"]
    },
    4: {
        answer: "JWT (JSON Web Token): stateless authentication token with 3 parts - Header (algorithm), Payload (claims: userId, role, expiry), Signature (verification). Flow: Client sends credentials → Server validates → Generates JWT signed with secret → Client stores token → Sends in Authorization: Bearer header → Server validates signature + expiry on each request. No server session needed. Self-contained.",
        keywords: ["JWT","Header","Payload","Signature","claims","Bearer","stateless","secret","validates","Authorization header","self-contained","expiry"]
    },
    5: {
        answer: "Middleware: components in request pipeline that process HTTP requests/responses. Pipeline flows: Request → Middleware1 → Middleware2 → ... → Endpoint → Response back through each. Each can short-circuit (not call next). Order: ExceptionHandler → HTTPS → Static Files → Routing → Auth → Authorization → Endpoints. Added via app.Use/Run/Map. Custom: class with InvokeAsync(HttpContext, next).",
        keywords: ["middleware","pipeline","request","response","short-circuit","order","next","Use","Run","InvokeAsync","ExceptionHandler","Routing"]
    },
    6: {
        answer: "API Versioning: managing multiple API versions for backward compatibility. Approaches: 1) URL path /api/v1/products (most common, clear). 2) Query string ?api-version=2.0. 3) Header X-Api-Version. 4) Media type versioning. NuGet: Asp.Versioning.Mvc. Setup: services.AddApiVersioning(). Apply: [ApiVersion(\"1.0\")], [ApiVersion(\"2.0\")], [MapToApiVersion(\"2.0\")]. Deprecated versions: [ApiVersion(\"1.0\", Deprecated=true)].",
        keywords: ["versioning","URL path","/v1/","query string","header","Asp.Versioning","ApiVersion","MapToApiVersion","backward compatibility","Deprecated"]
    },
    7: {
        answer: "Content Negotiation: server and client agree on response format. Client sends Accept header (application/json, application/xml). Server checks and returns appropriate format. ASP.NET Core defaults to JSON. Enable XML: services.AddControllers().AddXmlSerializerFormatters(). Custom formatters possible. If Accept not supported, returns default (JSON). Produces attribute: [Produces(\"application/json\")].",
        keywords: ["content negotiation","Accept header","JSON","XML","format","AddXmlSerializerFormatters","Produces","client","server","default","application/json"]
    },
    8: {
        answer: "CORS (Cross-Origin Resource Sharing): browser blocks JS calling API on different domain/port. Enable: services.AddCors(opts => opts.AddPolicy(\"MyPolicy\", b => b.WithOrigins(\"http://localhost:3000\").AllowAnyMethod().AllowAnyHeader())). Apply: app.UseCors(\"MyPolicy\") globally or [EnableCors(\"MyPolicy\")] per controller. Place UseCors after UseRouting, before UseAuthorization. [DisableCors] to exclude specific endpoints.",
        keywords: ["CORS","cross-origin","browser blocks","AddCors","WithOrigins","AllowAnyMethod","AllowAnyHeader","UseCors","EnableCors","DisableCors","different domain"]
    },
    9: {
        answer: "Global exception handling: 1) app.UseExceptionHandler() middleware - catches all unhandled exceptions, returns ProblemDetails. 2) Custom middleware with try-catch around next(). 3) IExceptionFilter - applies to MVC pipeline. Best approach: UseExceptionHandler + return ProblemDetails (RFC 7807) with proper status code. Log exception with ILogger. Show details in Development only, generic message in Production.",
        keywords: ["global","UseExceptionHandler","ProblemDetails","middleware","try-catch","IExceptionFilter","log","Production","Development","RFC 7807","status code"]
    },
    10: {
        answer: "[ApiController] attribute enables: 1) Automatic ModelState validation (returns 400 automatically if invalid, no manual check needed). 2) Binding source inference ([FromBody] for complex types, [FromQuery] for simple). 3) Problem Details for error responses. 4) Attribute routing required. Applied on controller class. Reduces boilerplate code. Automatic 400 for null/invalid model.",
        keywords: ["[ApiController]","automatic validation","400","ModelState","binding source inference","FromBody","FromQuery","ProblemDetails","attribute routing","boilerplate"]
    },
    11: {
        answer: "Rate Limiting: restricts number of API requests per time window to prevent abuse/DDoS. .NET 7+ built-in: services.AddRateLimiter(). Algorithms: Fixed Window (N requests per window), Sliding Window (smoother), Token Bucket (burst-friendly), Concurrency (simultaneous limit). Apply: [EnableRateLimiting(\"policy\")] or globally. Returns 429 Too Many Requests when exceeded. Configure: PermitLimit, Window, QueueLimit.",
        keywords: ["rate limiting","429","Fixed Window","Sliding Window","Token Bucket","Concurrency","AddRateLimiter","EnableRateLimiting","PermitLimit","abuse","DDoS"]
    },
    12: {
        answer: "Swagger (OpenAPI): auto-generates interactive API documentation from code. Shows all endpoints, parameters, request/response models, status codes. Test APIs directly in browser. NuGet: Swashbuckle.AspNetCore. Setup: services.AddSwaggerGen(), app.UseSwagger(), app.UseSwaggerUI(). Access at /swagger. Add XML comments (/// summary) for descriptions. Supports JWT auth testing. Essential for API development.",
        keywords: ["Swagger","OpenAPI","documentation","interactive","Swashbuckle","AddSwaggerGen","UseSwaggerUI","/swagger","test","XML comments","auto-generates"]
    },
    13: {
        answer: "GET: retrieve resource, safe, idempotent, cacheable, params in URL. POST: create resource, not idempotent, body contains data, returns 201+Location. PUT: replace entire resource, idempotent, send full object. PATCH: partial update, send only changed fields, JSON Patch format. DELETE: remove resource, idempotent, returns 204 No Content. HEAD: like GET without body. OPTIONS: discover supported methods.",
        keywords: ["GET","POST","PUT","PATCH","DELETE","retrieve","create","replace","partial","remove","idempotent","201","204","cacheable","safe"]
    },
    14: {
        answer: "[FromBody]: binds from request body (JSON), one per action, for complex objects. [FromQuery]: from URL query string (?name=value), for filtering/pagination. [FromRoute]: from URL route segment ({id}). [FromHeader]: from HTTP request headers (X-Custom-Header). [FromForm]: from form data (multipart). [ApiController] auto-infers: complex=FromBody, simple=FromQuery, route params=FromRoute.",
        keywords: ["FromBody","FromQuery","FromRoute","FromHeader","FromForm","body","query string","route segment","headers","auto-infers","complex","simple"]
    },
    15: {
        answer: "Async/await in Web API: frees thread pool threads during I/O operations (DB calls, HTTP calls, file I/O). Thread returns to pool while awaiting, handles other requests. Benefits: better scalability and throughput under high load. Does NOT make individual request faster. Use for ALL I/O-bound operations. Return Task<IActionResult>. Don't use .Result/.Wait() (deadlock). Async all the way up.",
        keywords: ["async","await","thread pool","I/O","frees thread","scalability","throughput","Task<IActionResult>","deadlock",".Result","all the way","high load"]
    }
};

// EF Core Interview Answers
INTERVIEW_ANSWERS['ef_core_interview_questions'] = {
    1: {
        answer: "Entity Framework Core is a lightweight, cross-platform ORM (Object-Relational Mapper) for .NET. Maps C# classes (entities) to database tables and LINQ queries to SQL. Eliminates manual ADO.NET/SQL writing. Supports: SQL Server, PostgreSQL, MySQL, SQLite. Features: change tracking, migrations, LINQ queries, relationships, lazy/eager loading. Part of ASP.NET Core ecosystem. NuGet: Microsoft.EntityFrameworkCore.",
        keywords: ["ORM","maps","C# classes","tables","LINQ","SQL","cross-platform","change tracking","migrations","relationships","NuGet","lightweight"]
    },
    2: {
        answer: "Code First: write C# entity classes first → EF generates database schema via migrations. Developer controls model in code. Preferred for new projects (version-controlled migrations). Database First: existing database → EF scaffolds/generates C# entity classes (Scaffold-DbContext command). Used for legacy databases. Code First gives more control. Both produce same runtime behavior.",
        keywords: ["Code First","Database First","migrations","scaffold","entity classes","generate","schema","existing database","new projects","version control","Scaffold-DbContext"]
    },
    3: {
        answer: "Migrations manage database schema changes as code. Workflow: change model → dotnet ef migrations add MigrationName (creates migration file with Up/Down methods) → dotnet ef database update (applies to DB). Commands: add, remove (undo last unapplied), list, script (generate SQL). Each migration is incremental change. Never edit applied migrations. Stored in Migrations/ folder.",
        keywords: ["migrations","dotnet ef","add","update","remove","Up","Down","schema changes","incremental","Migrations folder","script","never edit"]
    },
    4: {
        answer: "Lazy Loading: related data loaded automatically when navigation property accessed. Needs Microsoft.EntityFrameworkCore.Proxies. Causes N+1 problem. Eager Loading: related data loaded upfront with .Include(x => x.Orders).ThenInclude(o => o.Items). Single query (JOIN). Preferred when you know what you need. Explicit Loading: load manually later via context.Entry(entity).Collection(x => x.Orders).Load(). Control over timing.",
        keywords: ["lazy","eager","explicit","Include","ThenInclude","N+1","navigation property","automatically","upfront","Load()","manually","Proxies"]
    },
    5: {
        answer: "DbContext should be Scoped (one per HTTP request). Why: 1) Change tracking works correctly within request scope. 2) SaveChanges commits all changes in single transaction. 3) Prevents stale data across requests. 4) Thread-safe within single request. Singleton: dangerous (shared state, concurrency issues, stale tracking). Transient: loses tracking between operations in same request. Scoped = right balance.",
        keywords: ["Scoped","per request","change tracking","SaveChanges","transaction","Singleton dangerous","Transient loses","thread-safe","stale data","concurrency"]
    },
    6: {
        answer: "Data Annotations: attributes on model properties ([Required], [MaxLength], [Key], [Table]). Simple, visible on model. Limited for complex configs. Fluent API: configured in OnModelCreating using modelBuilder. More powerful: composite keys, shadow properties, complex relationships, table splitting. Fluent API overrides Data Annotations. Best practice: use Fluent API for relationships/complex config, annotations for simple validation.",
        keywords: ["Data Annotations","Fluent API","OnModelCreating","modelBuilder","[Required]","[MaxLength]","composite keys","shadow properties","overrides","powerful","relationships"]
    },
    7: {
        answer: "Change Tracking monitors entity states: Added, Modified, Deleted, Unchanged, Detached. When you query entities, EF tracks them. Modify property → state changes to Modified. On SaveChanges(): generates INSERT (Added), UPDATE (Modified), DELETE (Deleted) SQL. DetectChanges() scans tracked entities. Disable with AsNoTracking() for read-only queries (better performance). ChangeTracker.Entries() shows all tracked.",
        keywords: ["Change Tracking","Added","Modified","Deleted","Unchanged","Detached","SaveChanges","INSERT","UPDATE","DELETE","AsNoTracking","DetectChanges"]
    },
    8: {
        answer: "Repository Pattern: abstraction layer over EF Core. Interface: IRepository<T> { GetAll(), GetById(id), Add(entity), Update(entity), Delete(entity) }. Implementation uses DbContext internally. Benefits: testable (mock IRepository in tests), hides EF details from controllers, single responsibility. Combined with Unit of Work: IUnitOfWork with SaveAsync() coordinating multiple repositories in single transaction.",
        keywords: ["Repository","IRepository","abstraction","GetAll","GetById","mock","testable","Unit of Work","SaveAsync","DbContext","single transaction"]
    },
    9: {
        answer: "IQueryable: builds expression tree, translates to SQL, executes on database server (WHERE/filter at DB). Deferred execution. Best for EF Core queries. IEnumerable: executes query, loads ALL data into memory, then filters in C# (client-side). For EF Core: use IQueryable to push filtering to database (efficient), switch to IEnumerable only after all DB filtering is done (ToList/AsEnumerable).",
        keywords: ["IQueryable","IEnumerable","database server","memory","expression tree","SQL","client-side","deferred","efficient","push filtering","ToList"]
    },
    10: {
        answer: "N+1 Problem: 1 query loads N parent records, then N additional queries load related data for each parent (lazy loading). Example: load 100 orders = 1 query + 100 queries for order items = 101 total! Fix: Eager Loading with .Include() (single JOIN query), projection with .Select() (load only needed fields), or batching. Monitor with SQL logging. Always use Include for known related data.",
        keywords: ["N+1","lazy loading","101 queries","Include","eager","projection","Select","JOIN","single query","fix","monitor","batch"]
    },
    11: {
        answer: "Global Query Filters: automatically applied WHERE clause to all queries for an entity. Defined in OnModelCreating: modelBuilder.Entity<Post>().HasQueryFilter(p => !p.IsDeleted). Every query on Posts automatically excludes deleted records. Perfect for Soft Delete pattern. Bypass with .IgnoreQueryFilters() when needed (admin view). Also for multi-tenancy (filter by TenantId).",
        keywords: ["Global Query Filter","HasQueryFilter","IsDeleted","soft delete","automatically","OnModelCreating","IgnoreQueryFilters","multi-tenancy","WHERE","every query"]
    },
    12: {
        answer: "Transactions in EF Core: SaveChanges() auto-wraps in transaction (all-or-nothing). For multiple SaveChanges: use explicit transaction. using var transaction = await context.Database.BeginTransactionAsync(); try { /* operations */ await context.SaveChangesAsync(); await transaction.CommitAsync(); } catch { await transaction.RollbackAsync(); }. TransactionScope for cross-context/cross-database transactions.",
        keywords: ["transaction","SaveChanges","all-or-nothing","BeginTransactionAsync","CommitAsync","RollbackAsync","explicit","multiple operations","TransactionScope","try-catch"]
    }
};

// SOLID Principles Interview Answers
INTERVIEW_ANSWERS['solid_principles'] = {
    1: {
        answer: "SOLID is 5 design principles for maintainable, scalable OOP code. S - Single Responsibility: class does one thing. O - Open/Closed: open for extension, closed for modification. L - Liskov Substitution: derived can replace base without breaking. I - Interface Segregation: small focused interfaces. D - Dependency Inversion: depend on abstractions, not concrete. Together they reduce coupling, improve testability, and make code flexible.",
        keywords: ["SOLID","Single Responsibility","Open/Closed","Liskov","Interface Segregation","Dependency Inversion","maintainable","scalable","testability","coupling","flexible"]
    },
    2: {
        answer: "Single Responsibility Principle: a class should have only ONE reason to change — one job/responsibility. Bad: UserService that handles login, email sending, and logging. Good: separate into AuthService, EmailService, LogService. Benefits: easier testing, maintainability, less coupling, smaller classes. If describing class needs 'and' — it does too much. Each class = one actor it serves.",
        keywords: ["one reason to change","one job","separate","AuthService","EmailService","testing","maintainability","too much","smaller classes","coupling","actor"]
    },
    3: {
        answer: "Open/Closed Principle: classes should be open for extension but closed for modification. Don't modify existing working code — extend it. Achieve via: inheritance (override), interfaces (new implementation), abstractions. Bad: adding if/else for each new type. Good: interface IPayment with CreditCardPayment, PayPalPayment classes — add UPIPayment without touching existing code. Strategy pattern follows OCP.",
        keywords: ["open for extension","closed for modification","don't modify","interfaces","inheritance","new implementation","if/else bad","IPayment","Strategy pattern","extend"]
    },
    4: {
        answer: "Liskov Substitution Principle: derived class must be substitutable for base class without breaking behavior. If code works with base type, it should work with any derived type. Bad: Square extends Rectangle but setting width changes height (breaks expectations). Good: both implement IShape with Area(). Test: can I use Child everywhere Parent is used without errors/unexpected behavior?",
        keywords: ["substitutable","derived","base","without breaking","Square Rectangle","expectations","IShape","everywhere","behavior","child replaces parent"]
    },
    5: {
        answer: "Interface Segregation Principle: clients should not be forced to implement interfaces they don't use. Split fat interfaces into smaller, focused ones. Bad: IWorker with Work(), Eat(), Sleep() — Robot can't Eat/Sleep. Good: IWorkable, IFeedable, ISleepable — Robot implements only IWorkable. Many specific interfaces better than one general interface. Prevents empty/throwing implementations.",
        keywords: ["not forced","don't use","split","fat interface","small focused","IWorkable","IFeedable","Robot","specific","empty implementations","many interfaces"]
    },
    6: {
        answer: "Dependency Inversion Principle: high-level modules should not depend on low-level modules — both should depend on abstractions (interfaces). Abstractions should not depend on details. Bad: OrderService directly creates SqlRepository (tightly coupled). Good: OrderService depends on IRepository interface, actual implementation injected via DI. Enables: swapping implementations, unit testing with mocks, loose coupling.",
        keywords: ["abstractions","interfaces","high-level","low-level","not depend","DI","IRepository","inject","mocks","loose coupling","swapping"]
    },
    7: {
        answer: "Singleton Pattern: ensures a class has only ONE instance throughout application and provides global access point. Implementation: private constructor, private static instance, public static property/method. Thread-safe: use lock, Lazy<T>, or static readonly. Use cases: logging, configuration, connection pool, cache. In ASP.NET Core: services.AddSingleton<T>(). Be cautious: hard to test, global state.",
        keywords: ["one instance","private constructor","static","global access","Lazy<T>","lock","thread-safe","logging","AddSingleton","hard to test","global state"]
    },
    8: {
        answer: "Repository Pattern: abstraction over data access, provides collection-like interface for domain objects. IRepository<T>: GetAll(), GetById(id), Add(), Update(), Delete(), Find(predicate). Hides EF Core/ADO.NET details from business layer. Benefits: testable (mock repository), swappable data source, SRP for data access. Combine with Unit of Work for transaction management.",
        keywords: ["Repository","abstraction","data access","IRepository","GetAll","GetById","mock","testable","swappable","Unit of Work","hides EF Core"]
    },
    9: {
        answer: "Factory Pattern: creates objects without exposing creation logic. Client uses factory method instead of 'new'. Types: Simple Factory (static method), Factory Method (abstract/virtual in base class), Abstract Factory (family of related objects). Example: INotificationFactory.Create(type) returns EmailNotification or SmsNotification. Benefits: SRP, OCP (add new types without modifying client), encapsulates complex creation.",
        keywords: ["Factory","creates objects","without exposing","factory method","abstract factory","Create","INotificationFactory","SRP","OCP","new types","encapsulates"]
    },
    10: {
        answer: "Strategy Pattern: defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime. Context holds reference to IStrategy interface. Client selects strategy. Example: IPaymentStrategy with CreditCard, PayPal, UPI implementations. ShoppingCart uses IPaymentStrategy.Pay(). Switch strategy without modifying cart. Eliminates if/else for selecting behavior. Follows OCP.",
        keywords: ["Strategy","family of algorithms","interchangeable","runtime","IPaymentStrategy","CreditCard","PayPal","context","eliminates if/else","OCP","encapsulates"]
    },
    11: {
        answer: "Observer Pattern: one-to-many dependency — when subject changes state, all observers are notified automatically. Publisher-Subscriber model. Subject maintains list of observers, notifies them on change. In C#: events and delegates implement Observer pattern. Example: OrderService (subject) raises event → EmailService, InventoryService (observers) react independently. Loose coupling between publisher/subscribers.",
        keywords: ["Observer","one-to-many","subject","notify","publisher","subscriber","events","delegates","loose coupling","independently","automatically","list"]
    },
    12: {
        answer: "Unit of Work Pattern: maintains list of objects affected by business transaction, coordinates writing changes and resolving concurrency. Groups multiple repository operations into single transaction — either all succeed or all rollback. In EF Core: DbContext IS the Unit of Work (SaveChanges = commit). Custom: IUnitOfWork with repositories + SaveAsync(). Ensures data consistency across multiple operations.",
        keywords: ["Unit of Work","single transaction","all succeed","rollback","DbContext","SaveChanges","multiple repositories","consistency","coordinates","IUnitOfWork","SaveAsync"]
    }
};

// Dependency Injection Interview Answers
INTERVIEW_ANSWERS['dependency_injection'] = {
    1: {
        answer: "Dependency Injection is a design pattern where dependencies (objects a class needs) are provided from outside rather than created inside. Instead of class creating its own dependencies (new Service()), they are injected via constructor. Implements Inversion of Control (IoC). Benefits: loose coupling, testability (inject mocks), swappable implementations, follows SOLID (DIP). ASP.NET Core has built-in DI container.",
        keywords: ["design pattern","provided from outside","not created inside","constructor","IoC","loose coupling","testability","mocks","swappable","SOLID","DIP","built-in"]
    },
    2: {
        answer: "Transient (AddTransient): NEW instance every time requested. Use for: lightweight stateless services. Scoped (AddScoped): ONE instance per HTTP request, shared within that request. Use for: DbContext, repositories, per-request state. Singleton (AddSingleton): ONE instance for entire app lifetime, shared across all requests. Use for: caching, configuration, HttpClientFactory. Never inject Scoped into Singleton.",
        keywords: ["Transient","Scoped","Singleton","every time","per request","entire lifetime","DbContext","caching","stateless","shared","never inject scoped"]
    },
    3: {
        answer: "Types of DI: 1) Constructor Injection (most common, preferred): dependencies declared as constructor parameters. Explicit, immutable, validated at startup. 2) Method Injection: dependency passed as method parameter ([FromServices] in ASP.NET Core). For dependencies needed in single method only. 3) Property Injection: set via public property. Not preferred - hidden dependency, nullable issues. Always prefer constructor injection.",
        keywords: ["constructor injection","method injection","property injection","constructor parameters","[FromServices]","preferred","explicit","immutable","single method","hidden dependency"]
    },
    4: {
        answer: "DI Container (IoC Container): framework that manages object creation, lifetime, and dependency resolution. ASP.NET Core has built-in container (IServiceCollection/IServiceProvider). Responsibilities: register services (what interface maps to what class), resolve dependencies (create object graph automatically), manage lifetimes (transient/scoped/singleton). Third-party: Autofac, Ninject. Container replaces manual 'new' calls.",
        keywords: ["DI Container","IoC","IServiceCollection","IServiceProvider","register","resolve","lifetime","object graph","Autofac","built-in","manages creation"]
    },
    5: {
        answer: "Multiple implementations of same interface: services.AddScoped<INotification, EmailNotification>(); services.AddScoped<INotification, SmsNotification>(). Inject IEnumerable<INotification> to get ALL. Single injection: last registered wins. For selective resolution: .NET 8 keyed services (AddKeyedScoped), or factory pattern (IServiceProvider + condition), or custom resolver class that picks implementation based on logic.",
        keywords: ["multiple implementations","IEnumerable","last wins","keyed services","factory","IServiceProvider","AddKeyedScoped","selective","all implementations","condition"]
    },
    6: {
        answer: "Captive Dependency: injecting a shorter-lived service into a longer-lived one. Example: injecting Scoped service into Singleton — the scoped instance lives forever (trapped in singleton), never recreated per request. Causes: stale data, memory leaks, thread-safety bugs. ASP.NET Core throws InvalidOperationException in Development (scope validation). Fix: inject IServiceScopeFactory into singleton, create scope when needed.",
        keywords: ["captive dependency","scoped into singleton","shorter-lived","longer-lived","stale data","memory leak","InvalidOperationException","IServiceScopeFactory","forever","scope validation"]
    },
    7: {
        answer: "DI in ASP.NET Core: 1) Register in Program.cs: builder.Services.AddScoped<IProductService, ProductService>(). 2) Resolve via constructor: public ProductController(IProductService service) { _service = service; }. 3) Framework auto-creates controller with resolved dependencies. Also: AddDbContext<AppDbContext>(), AddHttpClient(), AddIdentity(). Container builds entire object graph recursively. No manual 'new' needed.",
        keywords: ["Program.cs","builder.Services","AddScoped","constructor","auto-creates","object graph","AddDbContext","no manual new","register","resolve","recursive"]
    },
    8: {
        answer: "DI enables unit testing by allowing mock/fake dependencies. Without DI: class creates own dependencies (untestable, hits real DB). With DI: inject interface → in tests inject mock. Example: var mock = new Mock<IProductRepo>(); mock.Setup(r => r.GetAll()).Returns(fakeProducts); var service = new ProductService(mock.Object). Test service logic without database. Verify interactions: mock.Verify(). Libraries: Moq, NSubstitute.",
        keywords: ["unit testing","mock","fake","interface","inject","Moq","Mock<T>","Setup","Returns","mock.Object","without database","Verify","testable"]
    }
};

// Git Interview Answers
INTERVIEW_ANSWERS['git_interview_questions'] = {
    1: {
        answer: "Merge: creates a merge commit combining two branches, preserves full history (non-linear), safe for shared branches. Command: git merge feature-branch. Rebase: moves/replays commits on top of another branch, creates linear history (cleaner log), rewrites commit hashes. Command: git rebase main. Rule: never rebase shared/public branches (rewrites history others depend on). Use merge for main/develop, rebase for local feature branches before PR.",
        keywords: ["merge","rebase","merge commit","linear history","preserves history","rewrites","never rebase shared","local feature","cleaner log","git merge","git rebase"]
    },
    2: {
        answer: "GitFlow strategy: main (production), develop (integration), feature/* (new features from develop), release/* (prep for release), hotfix/* (urgent prod fixes from main). Flow: create feature branch from develop → work → PR to develop → release branch → merge to main + tag. Simpler alternative: GitHub Flow (main + feature branches + PRs). We follow: feature branches from develop, PRs with code review, squash merge.",
        keywords: ["GitFlow","main","develop","feature","release","hotfix","PR","code review","GitHub Flow","squash merge","branch from develop","tag"]
    },
    3: {
        answer: "Resolve merge conflicts: 1) git pull/merge causes conflict. 2) Git marks conflicted files with <<<<<<<, =======, >>>>>>> markers. 3) Open file, manually choose correct code (keep ours, theirs, or combine). 4) Remove conflict markers. 5) git add resolved files. 6) git commit (completes merge). Tools: VS Code merge editor, git mergetool. Prevention: pull frequently, small PRs, communicate with team about shared files.",
        keywords: ["conflict","markers","<<<<<<<","=======",">>>>>>>","manually","git add","git commit","VS Code","mergetool","pull frequently","small PRs"]
    },
    4: {
        answer: "Pull Request (PR): request to merge your branch into target branch (develop/main). Process: 1) Create feature branch, commit changes. 2) Push branch to remote. 3) Create PR on GitHub/Azure DevOps. 4) Add description, link work items. 5) Reviewers review code (comments, approve/request changes). 6) Address feedback, push fixes. 7) Approved → squash merge → delete branch. Benefits: code quality, knowledge sharing, catch bugs early.",
        keywords: ["Pull Request","merge","review","approve","comments","squash merge","delete branch","code quality","knowledge sharing","GitHub","Azure DevOps","feedback"]
    }
};

// JavaScript Interview Answers
INTERVIEW_ANSWERS['javascript_interview_questions'] = {
    1: {
        answer: "var: function-scoped, hoisted (initialized as undefined), can be redeclared, no block scope (leaks out of if/for). let: block-scoped, hoisted but NOT initialized (temporal dead zone - ReferenceError if used before declaration), cannot be redeclared. const: block-scoped like let, must be initialized at declaration, cannot be reassigned (but object properties CAN be modified). Best practice: use const by default, let when reassignment needed, avoid var.",
        keywords: ["var","let","const","function-scoped","block-scoped","hoisted","temporal dead zone","redeclare","reassign","const default","avoid var"]
    },
    2: {
        answer: "Hoisting: JavaScript moves declarations (not initializations) to top of their scope before execution. var declarations hoisted and initialized as undefined. Function declarations fully hoisted (can call before definition). let/const hoisted but NOT initialized (temporal dead zone - ReferenceError). Function expressions (var f = function) only variable hoisted, not the function. Understanding hoisting prevents bugs.",
        keywords: ["hoisting","declarations","top of scope","undefined","var","function declarations","fully hoisted","temporal dead zone","let","const","ReferenceError","before execution"]
    },
    3: {
        answer: "Closure: a function that remembers and accesses variables from its outer (enclosing) scope even after the outer function has finished executing. The inner function 'closes over' the variables. Example: function counter() { let count = 0; return function() { return ++count; } }. Use cases: data privacy, module pattern, callbacks, event handlers, memoization. Variables are kept alive in memory.",
        keywords: ["closure","outer scope","remembers","after finished","inner function","closes over","data privacy","module pattern","count","memory","callbacks"]
    },
    4: {
        answer: "Callback: function passed to another function, called when operation completes. Problem: callback hell (nested callbacks). Promise: object representing future completion/failure of async operation. States: pending, fulfilled, rejected. .then()/.catch()/.finally(). async/await: syntactic sugar over Promises. async function returns Promise. await pauses execution until Promise resolves. Makes async code look synchronous. try/catch for errors.",
        keywords: ["Promise","async","await","callback","pending","fulfilled","rejected",".then",".catch","callback hell","syntactic sugar","try/catch","asynchronous"]
    },
    5: {
        answer: "== (loose equality): compares values with TYPE COERCION (converts types before comparing). '5' == 5 is true. null == undefined is true. [] == false is true. === (strict equality): compares value AND type, NO coercion. '5' === 5 is false. null === undefined is false. Always use === to avoid unexpected coercion bugs. Only exception: == null checks both null and undefined.",
        keywords: ["==","===","loose","strict","type coercion","no coercion","value and type","'5' == 5","always use ===","null == undefined","bugs"]
    },
    6: {
        answer: "'this' depends on HOW function is called, not where defined. Rules: 1) Global/default: window (browser) or undefined (strict mode). 2) Object method: the object calling it (obj.method() → this = obj). 3) Constructor (new): the new instance. 4) Explicit: call/apply/bind set this manually. 5) Arrow function: inherits 'this' from enclosing scope (lexical this, no own this). Common interview pitfall.",
        keywords: ["this","how called","global","window","object method","new","call","apply","bind","arrow function","lexical","enclosing scope","no own this"]
    },
    7: {
        answer: "Event Bubbling: event fires on target element, then bubbles UP through ancestors (child → parent → grandparent → document). Default behavior. Event Capturing: opposite, fires from top DOWN to target. Event Delegation: attach ONE listener to parent, handle events from children using event.target. Benefits: fewer listeners, works for dynamically added elements. Example: ul listener handles all li clicks. event.stopPropagation() stops bubbling.",
        keywords: ["bubbling","capturing","delegation","UP","DOWN","event.target","parent","fewer listeners","dynamic elements","stopPropagation","one listener","ancestors"]
    },
    8: {
        answer: "Arrow function: () => {}. Differences from regular: 1) No own 'this' (inherits from enclosing scope - lexical this). 2) No 'arguments' object. 3) Cannot be used as constructor (no new). 4) No prototype property. 5) Implicit return for single expression (no braces needed). 6) Shorter syntax. Use arrow for callbacks, array methods. Use regular for object methods, constructors, when 'this' binding needed.",
        keywords: ["arrow function","no own this","lexical","no arguments","no constructor","implicit return","shorter","callbacks","regular for methods","enclosing scope"]
    },
    9: {
        answer: "Spread (...): expands array/object into individual elements. Uses: copy array [...arr], merge objects {...obj1,...obj2}, function args Math.max(...nums). Rest (...): collects remaining elements into array. Uses: function parameters function sum(...nums), destructuring const [first, ...rest] = arr. Destructuring: extract values from objects/arrays into variables. const {name, age} = person; const [a, b] = [1, 2].",
        keywords: ["spread","rest","destructuring","...","expand","collect","copy","merge","remaining","extract","const {name}","[a, b]","function parameters"]
    },
    10: {
        answer: "map(): transforms each element, returns NEW array of same length. [1,2,3].map(x => x*2) → [2,4,6]. filter(): returns new array with elements passing condition. [1,2,3,4].filter(x => x>2) → [3,4]. reduce(): reduces array to single value using accumulator. [1,2,3].reduce((acc, x) => acc+x, 0) → 6. All are immutable (don't modify original). Chainable: arr.filter().map().reduce().",
        keywords: ["map","filter","reduce","new array","transform","condition","accumulator","single value","immutable","chainable","don't modify","returns"]
    },
    11: {
        answer: "Fetch API: modern way to make HTTP requests. Returns Promise. Syntax: fetch(url, options).then(res => res.json()).then(data => use data).catch(err => handle). Options: method, headers, body (JSON.stringify for POST). async/await version: const res = await fetch(url); const data = await res.json(). Note: fetch doesn't reject on 404/500 (check res.ok). Alternative: axios library (auto JSON, interceptors).",
        keywords: ["fetch","Promise","res.json()","async await","method","headers","body","JSON.stringify","res.ok","404","axios","HTTP request",".then"]
    },
    12: {
        answer: "null: intentional absence of value, explicitly assigned by developer. typeof null === 'object' (JS bug). undefined: variable declared but not assigned, or missing function parameter, or missing object property. typeof undefined === 'undefined'. NaN: Not a Number, result of invalid math operation ('abc' * 2). typeof NaN === 'number'. NaN !== NaN (use isNaN() or Number.isNaN()). null == undefined is true, null === undefined is false.",
        keywords: ["null","undefined","NaN","intentional","not assigned","invalid math","typeof","object","undefined","number","isNaN","null == undefined","explicitly"]
    }
};
