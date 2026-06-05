const SPEAK_DATA = [
// Q1 - What is Web API? How different from MVC?
`Web API is a framework for building HTTP-based services that return data — typically JSON — instead of HTML pages. Any client can consume it — browsers, mobile apps, desktop applications, other servers, IoT devices.

The key difference from MVC is what they return. MVC controllers inherit from Controller and return Views — rendered HTML pages for browser consumption. Web API controllers inherit from ControllerBase, use the [ApiController] attribute, and return data objects that get serialized to JSON or XML.

In ASP.NET Core, both MVC and Web API use the same underlying framework — same routing, same DI, same middleware. The difference is in how you use them. MVC is for server-rendered web applications where the server generates HTML. Web API is for data services where the client handles rendering.

Other differences — MVC uses cookie-based authentication which works with browsers. Web API typically uses token-based authentication like JWT because cookies don't work well across domains or with non-browser clients. MVC returns HTML error pages. Web API returns JSON error responses with proper status codes.

[ApiController] attribute gives automatic model validation (returns 400 without manual checks), automatic [FromBody] inference for complex types, and Problem Details format for errors.

In my project, we have both — MVC controllers serve the web portal with Razor views, and our Private API serves data as JSON to the MVC frontend for AJAX operations. The mobile inspection app consumes our Public API endpoints.`,

// Q2 - What is REST?
`REST stands for Representational State Transfer. It's an architectural style — not a protocol or standard — that defines how web services should be designed for scalability, simplicity, and consistency.

The six RESTful principles are: First, Client-Server separation — the client handles UI, the server handles data and logic. They evolve independently. Second, Stateless — each request contains ALL information needed to process it. The server doesn't store session state between requests. This enables scaling because any server can handle any request.

Third, Cacheable — responses should indicate whether they can be cached. This reduces server load and improves client performance. Fourth, Uniform Interface — consistent URL patterns and HTTP methods across all resources. This makes APIs predictable and learnable.

Fifth, Layered System — the client doesn't know if it's talking directly to the server or through a load balancer, cache, or proxy. Sixth, Resource-Based — everything is a resource with a unique URI. You interact with resources using standard HTTP methods.

RESTful URL design uses nouns not verbs — /api/products not /api/getProducts. Plural names — /api/products not /api/product. HTTP methods define the action — GET to read, POST to create, PUT to update, DELETE to remove. Query parameters for filtering — /api/products?category=electronics&sort=price.

In my project, our API follows REST conventions. Resources like audits, observations, and users each have their own endpoints with proper HTTP method usage and meaningful status codes.`,

// Q3 - HTTP Status Codes
`HTTP Status Codes tell the client what happened with their request. They're grouped by category — 2xx for success, 3xx for redirection, 4xx for client errors, and 5xx for server errors.

2xx Success — 200 OK is the general success response for GET and PUT. 201 Created is for successful POST that created a new resource — should include a Location header pointing to the new resource. 204 No Content is for successful operations that return no body — typically DELETE.

4xx Client Errors — 400 Bad Request means the client sent invalid data — failed validation, malformed JSON. 401 Unauthorized means the client is NOT authenticated — missing or invalid token. 403 Forbidden means the client IS authenticated but doesn't have permission. 404 Not Found means the resource doesn't exist. 409 Conflict for duplicate entries or conflicting operations. 422 Unprocessable Entity for semantic validation errors.

5xx Server Errors — 500 Internal Server Error means something went wrong on the server — unhandled exception. 503 Service Unavailable means the server is temporarily down for maintenance.

The distinction between 401 and 403 is important. 401 says "I don't know who you are — provide credentials." 403 says "I know who you are, but you're not allowed."

In ASP.NET Core, helper methods map directly: Ok() returns 200, Created() returns 201, NoContent() returns 204, BadRequest() returns 400, Unauthorized() returns 401, NotFound() returns 404.

In my project, we return 200 for successful reads, 201 for created records, 400 for validation failures, 401 for missing tokens, 403 for role violations, and 404 for missing resources. We never return 500 intentionally — those indicate bugs.`,

// Q4 - JWT Authentication
`JWT — JSON Web Token — is a compact, self-contained token for securely transmitting user identity between client and server. It's the standard for API authentication.

The token has three parts separated by dots. The Header specifies the algorithm (typically HS256) and token type. The Payload contains claims — user ID, name, roles, expiration time, and any custom data. The Signature is a cryptographic hash of header plus payload using a secret key — it guarantees the token hasn't been tampered with.

The authentication flow: client sends username and password to the login endpoint. Server validates credentials against the database. If valid, server generates a JWT containing user claims and signs it with a secret key. Client receives the token and stores it. For every subsequent request, client sends the token in the Authorization header as "Bearer <token>." Server middleware validates the signature and expiration, extracts claims into HttpContext.User.

Why JWT works for APIs — it's stateless. The server doesn't store sessions. All user info is IN the token itself. Any server instance can validate it independently. This enables horizontal scaling with load balancers.

Setup in ASP.NET Core: AddAuthentication with JwtBearer scheme, configure TokenValidationParameters with your secret key, issuer, and audience. The middleware automatically validates incoming tokens and populates User claims.

In my project, our login API validates credentials against Oracle, generates a JWT with UserId, UserName, and Role claims, and returns it. Every API call includes this token. The middleware validates it before the request reaches the controller. [Authorize] and [Authorize(Roles = "Admin")] protect endpoints.`,

// Q5 - Middleware and Request Pipeline
`Middleware components form a pipeline that processes every HTTP request and response. Each middleware does a specific job — logging, authentication, routing, error handling — and passes the request to the next one.

The pipeline is like a series of layers. A request enters from the outside, passes through each layer sequentially. Each middleware can do work before the next one (request processing), call next() to pass it along, and do work after next returns (response processing). It's bidirectional.

The order is critical and follows a specific pattern: Exception Handler first so it catches everything. HTTPS Redirection. Static Files which short-circuits for CSS/JS. Routing which matches URLs to endpoints. CORS for cross-origin headers. Authentication to identify the user. Authorization to check permissions. Finally, the endpoint executes.

Any middleware can short-circuit — return a response without calling next(). Static Files does this for file requests. Authorization does this with 403 for denied access. This prevents unnecessary processing.

Custom middleware lets you add cross-cutting concerns — request logging with timing, rate limiting, request transformation, custom headers. Create a class with InvokeAsync, do your work, call await next(context), do post-processing.

In my project, our pipeline includes exception handling middleware that catches all errors and returns safe JSON responses, authentication middleware for JWT validation, and the standard routing and authorization. If we added a custom logging middleware, it would record every API call with user, endpoint, and duration for audit purposes.`,

// Q6 - API Versioning
`API versioning lets you maintain multiple versions simultaneously so existing clients don't break when you make changes. It's essential when you have external consumers who can't update immediately.

There are three common approaches. URL Path versioning puts the version in the URL — /api/v1/products and /api/v2/products. This is the most visible and widely used because it's explicit and easy to document. Query String versioning uses a parameter — /api/products?api-version=1.0. Keeps URLs clean but less discoverable. Header versioning uses a custom header — X-Api-Version: 1.0. Completely hides version from the URL but requires documentation.

Implementation in ASP.NET Core uses the versioning package. Configure AddApiVersioning with default version, reader strategy, and reporting options. Then create separate controllers for each version with [ApiVersion("1.0")] and [ApiVersion("2.0")] attributes and matching route templates.

When to version — breaking changes like removing or renaming fields, changing response structure, altering business logic significantly. Non-breaking changes like adding new fields or new endpoints don't require a new version.

Deprecation marks old versions with [ApiVersion("1.0", Deprecated = true)]. The response header tells clients the version is sunset and they should migrate.

In my project, if we versioned our API, we'd use URL path versioning for clarity. When we need breaking changes to response structures, we'd create v2 endpoints while maintaining v1 for existing consumers until they migrate.`,

// Q7 - Content Negotiation
`Content Negotiation is the process where the server selects the response format based on what the client requests through the Accept header.

When a client sends Accept: application/json, the server returns JSON. Accept: application/xml returns XML. This lets the same endpoint serve different formats without different URLs or parameters.

In ASP.NET Core, JSON is the default format using System.Text.Json. To add XML support, call AddXmlSerializerFormatters() on the controllers configuration. You can also add custom formatters for CSV, PDF, or any other format.

Configuration options: RespectBrowserAcceptHeader makes the server honor the Accept header strictly. ReturnHttpNotAcceptable returns 406 Not Acceptable if the requested format isn't supported instead of defaulting to JSON.

In practice, most modern APIs only support JSON. XML is rarely needed unless you're integrating with legacy systems that require it. Content negotiation is more of a REST principle to know for interviews than something you implement complex formatters for.

The [Produces("application/json")] attribute on a controller or action restricts the output format regardless of the Accept header. This is useful when your API only supports JSON and you want to be explicit about it.

In my project, we only return JSON from our APIs. All clients — the MVC frontend and any mobile apps — work with JSON. We don't need XML or other formats.`,

// Q8 - CORS
`CORS — Cross-Origin Resource Sharing — is a browser security mechanism that controls which domains can call your API. By default, browsers block JavaScript requests to a different domain than the page was loaded from.

The problem: if your frontend is at http://localhost:3000 and your API is at http://localhost:5000, the browser blocks the API call because the origins are different. The server must explicitly allow it.

The solution: the server sends Access-Control-Allow-Origin headers telling the browser which domains are permitted. In ASP.NET Core, you configure CORS policies with AddCors specifying allowed origins, methods, and headers.

Configuration: create a named policy with WithOrigins listing your frontend URLs, AllowAnyHeader for request headers, AllowAnyMethod for HTTP methods, and optionally AllowCredentials if cookies need to cross domains. Apply globally with UseCors("policyName") or per-controller with [EnableCors("policyName")].

For development, AllowAnyOrigin is convenient but NEVER use it in production with AllowCredentials — it's a security vulnerability. Always specify exact origins in production.

Preflight requests — for non-simple requests (PUT, DELETE, custom headers), the browser sends an OPTIONS request first to check if the actual request is allowed. The CORS middleware handles this automatically.

Important: CORS is a BROWSER-only security feature. Server-to-server calls, Postman, and cURL are not affected by CORS. It only restricts JavaScript running in browsers.

In my project, CORS is configured to allow our MVC frontend domain to call the API. The specific origins are listed — not AllowAnyOrigin — for security.`,

// Q9 - Global Exception Handling
`Global exception handling ensures no unhandled exception returns a raw stack trace or crashes the API. Every error should produce a consistent, safe JSON response with appropriate status code.

There are three approaches. The Exception Middleware approach wraps the entire pipeline in try-catch within a custom middleware class. Catch different exception types and return appropriate responses — NotFoundException returns 404, ValidationException returns 400, generic Exception returns 500. Log full details server-side, return safe messages to the client.

The built-in UseExceptionHandler approach uses framework middleware. Configure it with a lambda that accesses the exception through IExceptionHandlerFeature and writes a JSON response. Simpler but less flexible for type-specific handling.

The Exception Filter approach uses IExceptionFilter registered globally with AddControllers options. It catches exceptions specifically from controller actions and filters (not from other middleware). Good for MVC/API-specific error handling but doesn't cover middleware exceptions.

The middleware approach is most comprehensive because it catches errors from the ENTIRE pipeline — not just controllers. Register it FIRST so it wraps everything.

Security rule: never expose stack traces, internal paths, or database errors in responses. Log everything server-side for debugging. Return generic messages to clients. VAPT testing specifically checks for information disclosure through error responses.

In my project, our exception handling logs detailed errors to Oracle (stack trace, user, request details, timestamp) and returns only a generic JSON response with a reference number. Users see "An error occurred. Reference: ERR-12345" while developers can look up the full details by that reference.`,

// Q10 - [ApiController] attribute
`The [ApiController] attribute adds several API-specific behaviors automatically, reducing boilerplate code.

First, automatic model validation. Without [ApiController], you must manually check if(!ModelState.IsValid) return BadRequest(ModelState) in every POST/PUT action. With it, the framework automatically returns 400 Bad Request with validation errors if the model fails Data Annotation validation. You never write that check again.

Second, binding source inference. Complex types are automatically [FromBody] — no need to specify the attribute. Simple types in route segments are [FromRoute]. Other simple types are [FromQuery]. This reduces attribute noise on parameters.

Third, Problem Details format. Error responses follow RFC 7807 standard — structured JSON with type, title, status, and errors fields. Consistent, machine-readable error format.

Fourth, attribute routing is required. You must use [Route] attributes — conventional routing doesn't work with [ApiController]. This enforces explicit URL design for APIs.

The practical impact — your controller actions become much cleaner. A POST action is just the business logic — no validation checks, no binding attributes, no manual error formatting. The framework handles all of it.

In my project, all our API controllers use [ApiController]. It eliminates repetitive validation code and ensures consistent error responses. The automatic 400 response for invalid models means we only write the happy path in most actions.`,

// Q11 - Rate Limiting
`Rate Limiting restricts how many requests a client can make within a time window. It prevents abuse, ensures fair usage, and protects your API from being overwhelmed.

In .NET 7+, it's built-in. Fixed Window allows N requests per time window — 100 requests per minute, resets every minute. Simple but allows bursts at window boundaries. Sliding Window distributes the limit more smoothly across time segments. Token Bucket allows bursts up to a capacity while refilling at a steady rate — good for APIs that should handle occasional spikes. Concurrency limits simultaneous active requests.

Configuration: AddRateLimiter in services with limiter options (window, permit limit, queue size). Apply with [EnableRateLimiting("policyName")] on controllers or actions. When limits are exceeded, returns 429 Too Many Requests.

Rate limiting can be per-client (using IP or API key), per-endpoint, or global. Per-client prevents one user from monopolizing resources. Per-endpoint protects expensive operations.

Before .NET 7, third-party packages like AspNetCoreRateLimit were used. Now the built-in solution handles most scenarios.

Common settings for an enterprise API: 100 requests per minute for regular endpoints, 10 per minute for expensive report generation, 5 per minute for login attempts to prevent brute force.

In my project, rate limiting would protect our API from excessive calls — particularly the login endpoint where brute force prevention is a VAPT requirement.`,

// Q12 - Swagger/OpenAPI
`Swagger, now officially OpenAPI, generates interactive API documentation automatically from your code. Developers can see all endpoints, their parameters, request/response formats, and test them directly in the browser.

Setup is simple — AddEndpointsApiExplorer and AddSwaggerGen in services, UseSwagger and UseSwaggerUI in middleware. It scans your controllers and generates a specification document describing every endpoint.

The Swagger UI provides a web page where you can expand each endpoint, see required parameters, example request bodies, and hit "Try it out" to actually call the API. It's invaluable during development and for API consumers to understand your endpoints.

XML comments on your action methods appear in Swagger documentation. Triple-slash comments for summary, parameter descriptions, and response types make the documentation comprehensive without maintaining separate docs.

For authenticated APIs, add a security definition for Bearer token. This adds an "Authorize" button in Swagger UI where you can paste a JWT, and all subsequent test calls include it automatically.

[ProducesResponseType] attributes tell Swagger what responses are possible — 200 with ProductDto, 404 for not found, 400 for validation error. This makes the documentation accurate and complete.

Best practice — enable Swagger only in Development. It exposes your entire API surface which could be a security concern in Production.

In my project, Swagger is our primary tool for API testing during development. We configure it with JWT authentication support so we can test protected endpoints directly from the browser.`,

// Q13 - HTTP Methods detailed
`HTTP methods define what action to perform on a resource. Each has specific semantics, and using them correctly is fundamental to RESTful design.

GET retrieves a resource without modifying it. It's safe (no side effects) and idempotent (calling multiple times gives same result). No request body. Response contains the requested data. Use for all read operations.

POST creates a new resource. NOT idempotent — calling twice creates two resources. Request body contains the new resource data. Response should be 201 Created with a Location header pointing to the new resource. Use for creation and operations that don't fit other methods.

PUT replaces an entire resource. Idempotent — calling multiple times with same data has same effect. Request body contains the COMPLETE updated resource. All fields must be present — missing ones become null. Response is 200 OK or 204 No Content.

PATCH partially updates a resource. Request body contains ONLY the changed fields. Other fields remain untouched. More efficient than PUT when changing one field of a large object.

DELETE removes a resource. Idempotent — deleting an already-deleted resource should not error (return 204 or 404, both acceptable). Usually no request body. Response is 204 No Content.

Idempotent means the same request multiple times produces the same server state. GET, PUT, DELETE are idempotent. POST is not — each POST creates a new resource.

In my project, our API follows these conventions strictly. GET for loading audit data, POST for creating observations, PUT for updating full records, DELETE for removing items.`,

// Q14 - [FromBody], [FromQuery], [FromRoute], [FromHeader]
`These attributes tell the Model Binder exactly WHERE to look for parameter values in the HTTP request.

[FromRoute] extracts values from the URL path. For /api/products/5 with route template {id}, [FromRoute] int id gives you 5. Used for resource identifiers that are part of the URL structure.

[FromQuery] extracts values from the query string. For /api/products?page=2&size=10, [FromQuery] int page gives you 2. Used for filtering, pagination, sorting, and optional parameters that don't identify a specific resource.

[FromBody] reads the request body and deserializes it — typically from JSON. For POST/PUT requests with a JSON body, [FromBody] ProductDto dto deserializes the JSON into your object. Only ONE parameter per action can use [FromBody]. With [ApiController], complex types default to [FromBody] automatically.

[FromHeader] reads from HTTP request headers. For custom headers like API keys or correlation IDs: [FromHeader(Name = "X-Api-Key")] string apiKey. Used for metadata that doesn't belong in the URL or body.

[FromForm] reads from form data — used for file uploads with multipart/form-data encoding.

The rules with [ApiController]: complex types automatically use [FromBody], simple types in route segments use [FromRoute], other simple types use [FromQuery]. You only need explicit attributes when overriding these defaults or reading from headers/forms.

In my project, our API actions use [FromRoute] for IDs in the URL path, [FromBody] for request DTOs in POST/PUT operations, and [FromQuery] for search and pagination parameters.`,

// Q15 - Why async/await in Web API
`Async/await makes your API handle more concurrent requests by not wasting threads on I/O waits. It's about scalability, not speed of individual requests.

The problem with synchronous code: when your action calls the database, the thread BLOCKS — sits idle waiting for the response. With a thread pool of 100 threads and 100 concurrent database calls, all threads are blocked. Request 101 must wait in queue. The server appears frozen even though it's just waiting.

With async/await: when the action awaits a database call, the thread is RELEASED back to the pool immediately. It can serve other requests while the database works. When the database responds, any available thread picks up where it left off. Those same 100 threads can handle thousands of concurrent requests because they're never idle.

Use async for ALL I/O operations — database queries (ToListAsync, SaveChangesAsync), HTTP calls (HttpClient.GetAsync), file operations (ReadAllTextAsync). These are operations where the CPU has nothing to do but wait.

Do NOT use Task.Run for CPU-bound work in web APIs — it just moves work from one thread to another with overhead. Don't use .Result or .Wait() — they block the thread defeating the purpose, and can cause deadlocks. Don't use async void — exceptions are swallowed.

The pattern is: controller action is async Task<IActionResult>, calls await on service methods which are also async, which await database operations. Async flows through the entire call chain.

In my project, all controller actions are async, BLL methods are async, and DAL methods use async Oracle operations. This ensures our server handles concurrent users efficiently without thread starvation.`
];
