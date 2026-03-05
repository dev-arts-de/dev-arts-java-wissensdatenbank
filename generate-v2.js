const fs = require('fs');
const path = require('path');

const source = fs.readFileSync('/mnt/user-data/outputs/java-developer-wissensmap.md', 'utf-8');
const lines = source.split('\n');

const docsDir = path.join(__dirname, 'docs');
const topicsDir = path.join(docsDir, 'topics');

// Parse markdown
const groups = [];
let currentGroup = null;
let currentSubGroup = null;

for (const line of lines) {
  if (line.startsWith('## ')) {
    currentGroup = { name: line.replace('## ', '').trim(), subGroups: [], topics: [] };
    currentSubGroup = null;
    groups.push(currentGroup);
  } else if (line.startsWith('### ')) {
    currentSubGroup = { name: line.replace('### ', '').trim(), topics: [] };
    if (currentGroup) currentGroup.subGroups.push(currentSubGroup);
  } else if (line.startsWith('- ') && currentGroup) {
    const topic = line.replace('- ', '').trim();
    if (currentSubGroup) {
      currentSubGroup.topics.push(topic);
    } else {
      currentGroup.topics.push(topic);
    }
  }
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// ── Difficulty assignments ──
// 🟢 = Einstieg (Grundwissen, muss sitzen)
// 🟡 = Mittel (wichtig für Interviews, etwas Tiefe nötig)
// 🔴 = Fortgeschritten (tiefes Verständnis, Architektur, Internals)

const difficultyMap = {
  // ── Java Grundlagen ──
  'Primitive Datentypen vs. Referenztypen': '🟢',
  'Autoboxing / Unboxing': '🟢',
  'Type Casting (implicit / explicit)': '🟢',
  'String Pool & String Immutability': '🟡',
  'StringBuilder vs. StringBuffer': '🟢',
  'Arrays vs. ArrayList': '🟢',
  'Varargs': '🟢',
  'Enums': '🟢',
  'Annotations (Built-in & Custom)': '🟡',
  'Operators & Operator Precedence': '🟢',
  'Ternary Operator': '🟢',
  'Switch Expressions (Java 14+)': '🟡',
  'Pattern Matching (instanceof, switch)': '🟡',
  'Sealed Classes': '🟡',
  'Records': '🟡',
  'var (Local Variable Type Inference)': '🟢',
  'Text Blocks': '🟢',
  'Static Imports': '🟢',
  'Final Keyword (Variablen, Methoden, Klassen)': '🟢',
  'Transient Keyword': '🟡',
  'Volatile Keyword': '🔴',
  'Pass-by-Value vs. Pass-by-Reference in Java': '🟡',
  'Stack vs. Heap Memory': '🟡',
  'Garbage Collection Grundlagen': '🟡',
  'Garbage Collector Typen (G1, ZGC, Shenandoah)': '🔴',
  'Memory Leaks erkennen und vermeiden': '🔴',
  'ClassLoader-Hierarchie': '🔴',
  'Reflection API': '🔴',
  'Java Module System (JPMS)': '🔴',
  'JVM Architektur (JIT, Bytecode, Class Loading)': '🔴',
  'JDK vs. JRE vs. JVM': '🟢',

  // ── OOP ──
  'Klassen & Objekte': '🟢',
  'Konstruktoren (Default, Parameterized, Copy)': '🟢',
  'Constructor Chaining': '🟢',
  'this & super Keyword': '🟢',
  'Vererbung (Inheritance)': '🟢',
  'Einfachvererbung vs. Mehrfachvererbung': '🟢',
  'Method Overloading': '🟢',
  'Method Overriding': '🟢',
  'Polymorphismus (Compile-time vs. Runtime)': '🟡',
  'Abstrakte Klassen': '🟢',
  'Interfaces': '🟢',
  'Interface Default Methods': '🟡',
  'Interface Static Methods': '🟡',
  'Functional Interfaces': '🟡',
  'Abstrakte Klasse vs. Interface — Wann was?': '🟡',
  'Encapsulation / Kapselung': '🟢',
  'Access Modifiers (private, protected, public, package-private)': '🟢',
  'Komposition vs. Vererbung': '🟡',
  'Aggregation vs. Komposition': '🟡',
  'Kohäsion & Kopplung': '🟡',
  'Liskov Substitution Principle': '🟡',
  'SOLID-Prinzipien (einzeln)': '🟡',
  'DRY Principle': '🟢',
  'KISS Principle': '🟢',
  'YAGNI Principle': '🟢',
  'Law of Demeter': '🟡',
  'Tell, Don\'t Ask': '🟡',
  'Favor Composition over Inheritance': '🟡',
  'Dependency Inversion': '🟡',

  // ── Collections ──
  'List (ArrayList, LinkedList, Vector, Stack)': '🟢',
  'Set (HashSet, LinkedHashSet, TreeSet)': '🟢',
  'Queue (PriorityQueue, ArrayDeque)': '🟡',
  'Deque': '🟡',
  'Map (HashMap, LinkedHashMap, TreeMap, Hashtable)': '🟢',
  'ConcurrentHashMap': '🔴',
  'WeakHashMap': '🔴',
  'EnumSet / EnumMap': '🟡',
  'Collections.unmodifiableList / Map / Set': '🟡',
  'List.of(), Map.of(), Set.of() (Immutable Collections)': '🟢',
  'Iterator vs. ListIterator': '🟡',
  'Iterable Interface': '🟡',
  'Comparable vs. Comparator': '🟡',
  'HashMap Internals (Buckets, Hashing, Rehashing)': '🔴',
  'Hash Collisions & Collision Resolution': '🔴',
  'equals() und hashCode() Vertrag': '🟡',
  'fail-fast vs. fail-safe Iteratoren': '🔴',
  'NavigableMap / NavigableSet': '🔴',
  'Concurrent Collections (CopyOnWriteArrayList, BlockingQueue)': '🔴',

  // ── Generics ──
  'Generische Klassen': '🟡',
  'Generische Methoden': '🟡',
  'Bounded Type Parameters (extends, super)': '🟡',
  'Wildcards (?, extends, super)': '🟡',
  'PECS Prinzip (Producer Extends, Consumer Super)': '🔴',
  'Type Erasure': '🔴',
  'Generics vs. Raw Types': '🟡',
  'Diamond Operator': '🟢',

  // ── Exception Handling ──
  'Checked vs. Unchecked Exceptions': '🟢',
  'Error vs. Exception': '🟢',
  'try-catch-finally': '🟢',
  'try-with-resources': '🟢',
  'AutoCloseable Interface': '🟡',
  'Custom Exceptions': '🟡',
  'Exception Chaining': '🟡',
  'Multi-Catch': '🟢',
  'Best Practices (keine leeren Catch-Blöcke, spezifische Exceptions)': '🟡',
  'Warum keine Exceptions für Flow Control?': '🟡',
  'StackTrace lesen und verstehen': '🟢',

  // ── Functional Programming & Streams ──
  'Lambda Expressions': '🟢',
  'Functional Interfaces (Predicate, Function, Consumer, Supplier, BiFunction)': '🟡',
  'Method References': '🟡',
  'Stream API': '🟡',
  'Stream vs. Collection': '🟡',
  'Intermediate Operations (map, filter, flatMap, peek, sorted, distinct)': '🟡',
  'Terminal Operations (collect, forEach, reduce, count, findFirst, anyMatch)': '🟡',
  'Collectors (toList, toMap, toSet, groupingBy, partitioningBy, joining)': '🟡',
  'Parallel Streams': '🔴',
  'Parallel Streams — Gefahren & Wann sinnvoll': '🔴',
  'Optional': '🟡',
  'Optional Best Practices (nicht als Methodenparameter)': '🟡',
  'Stream.of() vs. Arrays.stream()': '🟡',
  'Lazy Evaluation in Streams': '🔴',
  'Short-Circuiting Operations': '🔴',

  // ── Multithreading & Concurrency ──
  'Thread vs. Runnable vs. Callable': '🟡',
  'Thread Lifecycle': '🟡',
  'start() vs. run()': '🟢',
  'synchronized Keyword': '🟡',
  'wait(), notify(), notifyAll()': '🔴',
  'Deadlock': '🟡',
  'Livelock': '🔴',
  'Starvation': '🔴',
  'Race Conditions': '🟡',
  'Thread Safety': '🟡',
  'Atomic Classes (AtomicInteger, AtomicReference)': '🔴',
  'ReentrantLock': '🔴',
  'ReadWriteLock': '🔴',
  'Semaphore': '🔴',
  'CountDownLatch': '🔴',
  'CyclicBarrier': '🔴',
  'ExecutorService': '🟡',
  'ThreadPool (FixedThreadPool, CachedThreadPool, ScheduledThreadPool)': '🟡',
  'Future & CompletableFuture': '🟡',
  'CompletableFuture Chaining (thenApply, thenCompose, thenCombine)': '🔴',
  'Fork/Join Framework': '🔴',
  'ThreadLocal': '🔴',
  'Virtual Threads (Project Loom, Java 21)': '🔴',
  'Structured Concurrency': '🔴',

  // ── Design Patterns ──
  'Singleton': '🟢',
  'Factory Method': '🟡',
  'Abstract Factory': '🟡',
  'Builder': '🟡',
  'Prototype': '🟡',
  'Adapter': '🟡',
  'Bridge': '🔴',
  'Composite': '🔴',
  'Decorator': '🟡',
  'Facade': '🟡',
  'Proxy': '🟡',
  'Flyweight': '🔴',
  'Observer': '🟡',
  'Strategy': '🟡',
  'Command': '🟡',
  'Template Method': '🟡',
  'Iterator': '🟡',
  'State': '🟡',
  'Chain of Responsibility': '🔴',
  'Mediator': '🔴',
  'Visitor': '🔴',
  'Repository Pattern': '🟢',
  'DTO Pattern (Data Transfer Object)': '🟢',
  'DAO Pattern (Data Access Object)': '🟢',
  'MVC Pattern': '🟢',
  'Service Layer Pattern': '🟡',
  'Dependency Injection Pattern': '🟡',
  'Event-Driven Pattern': '🔴',
  'Circuit Breaker Pattern': '🔴',
  'Saga Pattern': '🔴',
  'CQRS Pattern': '🔴',
  'Outbox Pattern': '🔴',
  'Retry Pattern': '🟡',
  'Bulkhead Pattern': '🔴',

  // ── Clean Code ──
  'Aussagekräftige Variablen- und Methodennamen': '🟢',
  'Methoden: Eine Aufgabe, eine Abstraktionsebene': '🟢',
  'Methoden kurz halten': '🟢',
  'Keine Magic Numbers / Magic Strings': '🟢',
  'Konstanten statt Hardcoded Values': '🟢',
  'Boy Scout Rule': '🟢',
  'Single Responsibility auf Methodenebene': '🟢',
  'Keine verschachtelten if-else-Kaskaden': '🟢',
  'Guard Clauses / Early Returns': '🟢',
  'Code Smells erkennen': '🟡',
  'Long Method': '🟢',
  'God Class': '🟡',
  'Feature Envy': '🟡',
  'Data Clumps': '🟡',
  'Primitive Obsession': '🟡',
  'Shotgun Surgery': '🟡',
  'Divergent Change': '🟡',
  'Dead Code entfernen': '🟢',
  'Kommentare: Warum, nicht Was': '🟢',
  'Keine auskommentierten Codeblöcke': '🟢',
  'Konsistente Formatierung': '🟢',
  'Immutability bevorzugen': '🟡',
  'Defensive Kopien': '🟡',
  'Null vermeiden (Optional nutzen)': '🟡',
  'Fail Fast Principle': '🟡',
  'Package-Struktur sinnvoll aufbauen': '🟡',

  // ── Refactoring ──
  'Extract Method': '🟢',
  'Extract Class': '🟡',
  'Rename Variable / Method / Class': '🟢',
  'Inline Variable / Method': '🟢',
  'Replace Magic Number with Constant': '🟢',
  'Replace Conditional with Polymorphism': '🟡',
  'Introduce Parameter Object': '🟡',
  'Replace Temp with Query': '🟡',
  'Move Method / Move Field': '🟡',
  'Replace Inheritance with Delegation': '🔴',
  'Decompose Conditional': '🟡',
  'Wann Refactoring? Wann nicht?': '🟡',

  // ── Testing ──
  'Unit Testing': '🟢',
  'Integration Testing': '🟡',
  'End-to-End Testing': '🟡',
  'Testpyramide': '🟢',
  'JUnit 5 Grundlagen': '🟢',
  'JUnit 5 Assertions': '🟢',
  'JUnit 5 Annotations (@Test, @BeforeEach, @AfterEach, @BeforeAll, @Nested, @ParameterizedTest)': '🟢',
  'Parameterized Tests': '🟡',
  'Mockito Grundlagen': '🟡',
  'Mocking vs. Stubbing vs. Spying': '🟡',
  '@Mock, @InjectMocks, @Spy': '🟡',
  'when().thenReturn() vs. doReturn().when()': '🟡',
  'verify() in Mockito': '🟡',
  'ArgumentCaptor': '🟡',
  'BDD-Style Testing (given/when/then)': '🟡',
  'AssertJ': '🟡',
  'Testcontainers': '🔴',
  'Testabdeckung (Code Coverage)': '🟡',
  'Was testen, was nicht?': '🟡',
  'Test Naming Conventions': '🟢',
  'AAA Pattern (Arrange, Act, Assert)': '🟢',
  'Testbare Klassen schreiben (Dependency Injection)': '🟡',
  'TDD (Test-Driven Development)': '🟡',
  'Mutation Testing (PIT)': '🔴',
  'Contract Testing': '🔴',
  'WireMock': '🔴',
  'MockMvc (Spring)': '🟡',
  '@SpringBootTest vs. @WebMvcTest vs. @DataJpaTest': '🟡',

  // ── Spring Core ──
  'Dependency Injection (Constructor, Setter, Field)': '🟢',
  'Warum Constructor Injection bevorzugt?': '🟡',
  'Inversion of Control (IoC)': '🟡',
  'Spring ApplicationContext': '🟡',
  'Bean Lifecycle': '🟡',
  'Bean Scopes (Singleton, Prototype, Request, Session)': '🟡',
  '@Component, @Service, @Repository, @Controller': '🟢',
  '@Configuration & @Bean': '🟡',
  '@Autowired': '🟢',
  '@Qualifier': '🟡',
  '@Primary': '🟡',
  '@Value': '🟢',
  '@Profile': '🟡',
  '@Conditional': '🔴',
  'Spring Expression Language (SpEL)': '🔴',
  'Spring Events (ApplicationEvent)': '🔴',
  '@Scheduled & Scheduling': '🟡',

  // ── Spring Boot ──
  'Spring Boot Auto-Configuration': '🟡',
  'application.properties vs. application.yml': '🟢',
  'Spring Boot Starter': '🟡',
  'Spring Boot Actuator': '🟡',
  'Health Checks & Readiness/Liveness Probes': '🟡',
  'Externalized Configuration': '🟡',
  'Spring Boot DevTools': '🟢',
  'Embedded Server (Tomcat, Undertow)': '🟡',
  'Spring Boot Profiles': '🟡',
  'CommandLineRunner / ApplicationRunner': '🟡',
  'Custom Banner (naja, nice to know)': '🟢',
  'Spring Boot Logging (SLF4J, Logback)': '🟡',
  'Structured Logging': '🟡',

  // ── Spring Web / REST ──
  '@RestController vs. @Controller': '🟢',
  '@RequestMapping, @GetMapping, @PostMapping, @PutMapping, @DeleteMapping, @PatchMapping': '🟢',
  '@PathVariable, @RequestParam, @RequestBody, @RequestHeader': '🟢',
  'ResponseEntity': '🟡',
  '@ResponseStatus': '🟡',
  'Content Negotiation': '🔴',
  'REST Best Practices': '🟡',
  'RESTful API Design (Ressourcen, HTTP-Verben, Statuscodes)': '🟡',
  'HATEOAS': '🔴',
  'API Versioning Strategien': '🟡',
  'Pagination & Sorting': '🟡',
  'Request Validation (@Valid, @NotNull, @Size, Custom Validators)': '🟡',
  'Global Exception Handling (@ControllerAdvice, @ExceptionHandler)': '🟡',
  'Problem Detail (RFC 7807)': '🔴',
  'CORS Konfiguration': '🟡',
  'Swagger / OpenAPI (springdoc-openapi)': '🟡',

  // ── Spring Data / JPA / Hibernate ──
  'JPA vs. Hibernate vs. Spring Data JPA': '🟡',
  'Entity Mapping (@Entity, @Table, @Column, @Id)': '🟢',
  'Primary Key Generation Strategien (AUTO, IDENTITY, SEQUENCE, TABLE)': '🟡',
  'Beziehungen (@OneToOne, @OneToMany, @ManyToOne, @ManyToMany)': '🟡',
  'FetchType LAZY vs. EAGER': '🟡',
  'N+1 Problem': '🟡',
  'N+1 Lösungen (JOIN FETCH, EntityGraph, Batch Size)': '🔴',
  'Cascade Types': '🟡',
  'Orphan Removal': '🟡',
  'JPA Repository (CrudRepository, JpaRepository, PagingAndSortingRepository)': '🟢',
  'Derived Query Methods': '🟡',
  '@Query (JPQL & Native)': '🟡',
  'Specifications & Criteria API': '🔴',
  'Projections (Interface-based, Class-based)': '🔴',
  'Auditing (@CreatedDate, @LastModifiedDate)': '🟡',
  'Optimistic Locking (@Version)': '🔴',
  'Pessimistic Locking': '🔴',
  'Second-Level Cache (Ehcache, Hazelcast)': '🔴',
  'Flyway / Liquibase (Database Migrations)': '🟡',
  'Spring Data JDBC vs. Spring Data JPA': '🔴',
  'Transaction Management (@Transactional)': '🟡',
  'Propagation Levels (REQUIRED, REQUIRES_NEW, NESTED, usw.)': '🔴',
  'Isolation Levels (READ_UNCOMMITTED, READ_COMMITTED, REPEATABLE_READ, SERIALIZABLE)': '🔴',
  'Dirty Read, Non-Repeatable Read, Phantom Read': '🔴',

  // ── Spring Security ──
  'Authentication vs. Authorization': '🟢',
  'SecurityFilterChain': '🟡',
  'UserDetailsService': '🟡',
  'PasswordEncoder (BCrypt)': '🟡',
  'Role-based Access Control': '🟡',
  'Method Security (@PreAuthorize, @Secured)': '🟡',
  'JWT Authentication': '🟡',
  'OAuth2 / OpenID Connect Grundlagen': '🔴',
  'CSRF Protection': '🟡',
  'CORS & Security': '🟡',
  'Spring Security mit Spring Boot 3.x Konfiguration': '🟡',

  // ── Spring Cloud ──
  'Service Discovery (Eureka)': '🔴',
  'API Gateway (Spring Cloud Gateway)': '🔴',
  'Config Server': '🔴',
  'Circuit Breaker (Resilience4j)': '🔴',
  'Load Balancing': '🔴',
  'Distributed Tracing (Micrometer Tracing, Zipkin)': '🔴',
  'Service-to-Service Communication (RestClient, WebClient, OpenFeign)': '🟡',

  // ── Datenbanken & SQL ──
  'SQL Grundlagen (SELECT, INSERT, UPDATE, DELETE)': '🟢',
  'JOINs (INNER, LEFT, RIGHT, FULL, CROSS)': '🟢',
  'GROUP BY & HAVING': '🟡',
  'Subqueries': '🟡',
  'Aggregatfunktionen (COUNT, SUM, AVG, MIN, MAX)': '🟢',
  'UNION vs. UNION ALL': '🟡',
  'Indizes (B-Tree, Hash)': '🟡',
  'Composite Indizes': '🔴',
  'Wann Indizes sinnvoll sind und wann nicht': '🟡',
  'Query Execution Plan lesen (EXPLAIN)': '🔴',
  'Normalisierung (1NF, 2NF, 3NF)': '🟡',
  'Denormalisierung — Wann sinnvoll?': '🔴',
  'ACID-Prinzipien': '🟡',
  'Transactions': '🟡',
  'Isolation Levels in der Datenbank': '🔴',
  'Views': '🟡',
  'Stored Procedures': '🟡',
  'Triggers': '🟡',
  'PostgreSQL-spezifische Features (JSONB, CTEs, Window Functions)': '🔴',
  'Connection Pooling (HikariCP)': '🟡',
  'NoSQL Grundlagen (Document, Key-Value, Column-Family, Graph)': '🟡',
  'SQL vs. NoSQL — Wann was?': '🟡',
  'Redis (Caching, Session Store)': '🟡',
  'MongoDB Grundlagen (optional)': '🟡',

  // ── Architektur ──
  'Monolith vs. Microservices': '🟡',
  'Vor- und Nachteile von Microservices': '🟡',
  'Wann Monolith, wann Microservices?': '🟡',
  'Modularer Monolith': '🔴',
  'Hexagonale Architektur (Ports & Adapters)': '🔴',
  'Clean Architecture': '🔴',
  'Onion Architecture': '🔴',
  'Layered Architecture (Controller → Service → Repository)': '🟢',
  'Domain-Driven Design (DDD) Grundlagen': '🔴',
  'Bounded Context': '🔴',
  'Aggregate': '🔴',
  'Entity vs. Value Object': '🔴',
  'Domain Events': '🔴',
  'Ubiquitous Language': '🟡',
  'Event-Driven Architecture': '🔴',
  'Event Sourcing': '🔴',
  'CQRS (Command Query Responsibility Segregation)': '🔴',
  'Synchrone vs. Asynchrone Kommunikation': '🟡',
  'REST vs. gRPC vs. GraphQL': '🟡',
  'API Gateway Pattern': '🔴',
  'Backend for Frontend (BFF) Pattern': '🔴',
  'Strangler Fig Pattern (Migration)': '🔴',
  'Sidecar Pattern': '🔴',
  '12-Factor App': '🟡',

  // ── Kafka ──
  'Warum Message Broker?': '🟡',
  'Kafka Grundlagen': '🟡',
  'Kafka Topics': '🟡',
  'Kafka Partitions': '🟡',
  'Kafka Consumer Groups': '🟡',
  'Kafka Producers': '🟡',
  'Kafka Offset Management': '🔴',
  'At-least-once vs. At-most-once vs. Exactly-once Delivery': '🔴',
  'Kafka vs. RabbitMQ': '🟡',
  'Dead Letter Queue': '🔴',
  'Event Schema Evolution (Avro, Schema Registry)': '🔴',
  'Kafka Connect': '🔴',
  'Kafka Streams Grundlagen': '🔴',
  'Idempotenz bei Message Processing': '🔴',
  'Ordering Guarantees in Kafka': '🔴',
  'Spring Kafka (@KafkaListener, KafkaTemplate)': '🟡',
  'Backpressure': '🔴',

  // ── Caching ──
  'Warum Caching?': '🟢',
  'Cache Strategien (Cache-Aside, Write-Through, Write-Behind)': '🟡',
  'Cache Invalidation': '🔴',
  'TTL (Time to Live)': '🟡',
  'Spring Cache Abstraction (@Cacheable, @CacheEvict)': '🟡',
  'Redis als Cache': '🟡',
  'Distributed Caching': '🔴',
  'Cache Stampede / Thundering Herd': '🔴',

  // ── API Design ──
  'REST Prinzipien (Stateless, Uniform Interface, usw.)': '🟡',
  'HTTP Methoden & Idempotenz': '🟡',
  'HTTP Statuscodes (2xx, 3xx, 4xx, 5xx) — Die wichtigsten kennen': '🟢',
  'Request/Response Body Design': '🟡',
  'Error Response Design': '🟡',
  'API Dokumentation (OpenAPI / Swagger)': '🟡',
  'API Rate Limiting': '🟡',
  'API Authentication (API Keys, OAuth2, JWT)': '🟡',
  'GraphQL Grundlagen': '🟡',
  'gRPC Grundlagen': '🔴',
  'WebSockets': '🟡',
  'Server-Sent Events (SSE)': '🟡',
  'Webhooks': '🟡',
  'Idempotency Keys': '🔴',
  'API Backward Compatibility': '🔴',
  'Semantic Versioning': '🟢',

  // ── Build Tools ──
  'Maven Grundlagen': '🟢',
  'Maven Lifecycle (clean, compile, test, package, install, deploy)': '🟡',
  'pom.xml Struktur': '🟢',
  'Maven Dependency Scopes (compile, test, runtime, provided)': '🟡',
  'Maven Profiles': '🟡',
  'Maven Multi-Module Projects': '🔴',
  'Gradle Grundlagen': '🟡',
  'Gradle vs. Maven': '🟡',
  'Dependency Conflicts lösen': '🔴',
  'BOM (Bill of Materials)': '🟡',
  'Maven Wrapper / Gradle Wrapper': '🟢',

  // ── Git ──
  'git init, clone, add, commit, push, pull': '🟢',
  'Branching & Merging': '🟢',
  'Merge vs. Rebase': '🟡',
  'Git Flow vs. Trunk-Based Development': '🟡',
  'Feature Branches': '🟢',
  'Pull Requests / Merge Requests': '🟢',
  'Code Review Best Practices': '🟡',
  'Cherry-Pick': '🟡',
  'Stash': '🟢',
  'Interactive Rebase': '🟡',
  'Git Bisect': '🔴',
  '.gitignore': '🟢',
  'Conventional Commits': '🟡',
  'Semantic Versioning mit Git Tags': '🟡',
  'Merge Conflicts lösen': '🟡',
  'Squash Commits': '🟡',

  // ── CI/CD ──
  'Was ist CI/CD?': '🟢',
  'Build Pipeline Grundlagen': '🟡',
  'GitHub Actions Grundlagen': '🟡',
  'GitLab CI Grundlagen': '🟡',
  'Jenkins Grundlagen (optional)': '🟡',
  'Pipeline Stages (Build, Test, Lint, Deploy)': '🟡',
  'Automatisierte Tests in der Pipeline': '🟡',
  'Static Code Analysis (SonarQube, Checkstyle, SpotBugs)': '🟡',
  'Code Quality Gates': '🟡',
  'Deployment Strategien (Blue-Green, Canary, Rolling)': '🔴',
  'Infrastructure as Code Grundlagen': '🔴',
  'Environment Variables & Secrets Management': '🟡',

  // ── Docker ──
  'Docker Grundlagen': '🟢',
  'Dockerfile schreiben': '🟡',
  'Docker Images (Base Image, Layer, Cache)': '🟡',
  'Multi-Stage Builds': '🟡',
  'Docker Compose': '🟡',
  'Docker Networking': '🔴',
  'Docker Volumes': '🟡',
  'Container vs. VM': '🟢',
  'Docker Best Practices (kleine Images, non-root User)': '🟡',
  'Container Registries (Docker Hub, GHCR)': '🟡',
  'Health Checks in Docker': '🟡',
  '.dockerignore': '🟢',

  // ── Kubernetes ──
  'Warum Kubernetes?': '🟡',
  'Pods': '🟡',
  'Deployments': '🟡',
  'Services (ClusterIP, NodePort, LoadBalancer)': '🔴',
  'ConfigMaps & Secrets': '🟡',
  'Namespaces': '🟡',
  'Ingress': '🔴',
  'Liveness & Readiness Probes': '🟡',
  'Horizontal Pod Autoscaler': '🔴',
  'Helm Charts Grundlagen': '🔴',
  'kubectl Grundbefehle': '🟡',

  // ── Logging / Monitoring ──
  'Logging Best Practices': '🟡',
  'Log Levels (TRACE, DEBUG, INFO, WARN, ERROR)': '🟢',
  'Structured Logging (JSON Logs)': '🟡',
  'SLF4J & Logback Konfiguration': '🟡',
  'MDC (Mapped Diagnostic Context)': '🔴',
  'Correlation IDs': '🔴',
  'ELK Stack (Elasticsearch, Logstash, Kibana)': '🔴',
  'Prometheus & Grafana': '🔴',
  'Micrometer Metrics': '🔴',
  'Spring Boot Actuator Endpoints': '🟡',
  'Distributed Tracing (Zipkin, Jaeger)': '🔴',
  'Alerting Grundlagen': '🟡',
  'SLIs, SLOs, SLAs': '🟡',

  // ── Security ──
  'OWASP Top 10': '🟡',
  'SQL Injection': '🟡',
  'Cross-Site Scripting (XSS)': '🟡',
  'Cross-Site Request Forgery (CSRF)': '🟡',
  'Hashing vs. Encryption': '🟡',
  'Symmetric vs. Asymmetric Encryption': '🟡',
  'HTTPS / TLS': '🟡',
  'JWT Aufbau & Validierung': '🟡',
  'OAuth2 Flows (Authorization Code, Client Credentials)': '🔴',
  'API Security Best Practices': '🟡',
  'Secrets Management': '🟡',
  'Principle of Least Privilege': '🟡',
  'Input Validation & Sanitization': '🟡',
  'Dependency Vulnerability Scanning (OWASP Dependency Check, Snyk)': '🟡',
  'Rate Limiting & Throttling': '🟡',

  // ── Netzwerk ──
  'HTTP/1.1 vs. HTTP/2 vs. HTTP/3': '🟡',
  'TCP vs. UDP': '🟡',
  'DNS Grundlagen': '🟢',
  'IP-Adressen & Ports': '🟢',
  'Request/Response Modell': '🟢',
  'Cookies & Sessions': '🟡',
  'Headers (Content-Type, Authorization, Cache-Control)': '🟡',
  'Status Codes verstehen (200, 201, 204, 301, 400, 401, 403, 404, 409, 500, 502, 503)': '🟢',
  'SSL/TLS Handshake Grundlagen': '🔴',
  'Load Balancer Grundlagen': '🟡',
  'Reverse Proxy (Nginx)': '🟡',
  'CDN Grundlagen': '🟡',

  // ── Agile ──
  'Scrum Grundlagen': '🟢',
  'Sprint, Sprint Planning, Daily, Retro, Review': '🟢',
  'User Stories & Acceptance Criteria': '🟢',
  'Story Points & Estimation': '🟡',
  'Kanban Grundlagen': '🟢',
  'Definition of Done': '🟢',
  'Definition of Ready': '🟡',
  'Backlog Refinement': '🟡',
  'Pair Programming': '🟢',
  'Code Reviews — Worauf achten?': '🟡',
  'Technische Schuld (Tech Debt)': '🟡',
  'ADRs (Architecture Decision Records)': '🔴',
  'Trunk-Based Development vs. Git Flow': '🟡',
  'Feature Flags': '🟡',
  'Timeboxing': '🟢',

  // ── Interview Soft Topics ──
  'Warum OOP?': '🟢',
  'Warum Java?': '🟢',
  'Java vs. Kotlin': '🟡',
  'Java vs. C#': '🟡',
  'Java vs. Python — Wann was?': '🟡',
  'Warum Spring Boot?': '🟢',
  'Warum Microservices?': '🟡',
  'Warum REST?': '🟢',
  'Warum Kafka?': '🟡',
  'Warum Docker?': '🟢',
  'Warum Kubernetes?': '🟡',
  'Warum CI/CD?': '🟢',
  'Warum Testen?': '🟢',
  'Warum Clean Code?': '🟢',
  'Trade-offs erklären können': '🟡',
  '"Es kommt drauf an" — Und dann erklären worauf': '🟡',
  'Eigene Projekte und Entscheidungen erklären können': '🟡',
  'Technische Entscheidungen begründen können': '🟡',
  'Komplexe Themen einfach erklären können': '🟡',

  // ── Algorithmen ──
  'Big-O Notation': '🟡',
  'Arrays': '🟢',
  'Linked Lists': '🟡',
  'Stacks & Queues': '🟡',
  'HashMaps / HashSets intern': '🟡',
  'Trees (Binary Tree, BST)': '🟡',
  'Graphs Grundlagen': '🔴',
  'Sorting (Bubble, Quick, Merge, Insertion)': '🟡',
  'Searching (Linear, Binary Search)': '🟡',
  'Recursion': '🟡',
  'Two Pointer Technik': '🟡',
  'Sliding Window': '🟡',
  'DFS / BFS': '🔴',
  'Wann welche Datenstruktur?': '🟡',

  // ── Java Ökosystem & Tooling ──
  'IntelliJ IDEA Shortcuts & Productivity': '🟢',
  'Debugging in IntelliJ': '🟢',
  'Remote Debugging': '🟡',
  'Profiling (VisualVM, JFR, async-profiler)': '🔴',
  'Thread Dumps lesen': '🔴',
  'Heap Dumps analysieren': '🔴',
  'Lombok': '🟢',
  'MapStruct': '🟡',
  'Jackson (JSON Serialization/Deserialization)': '🟡',
  '@JsonProperty, @JsonIgnore, @JsonFormat': '🟡',
  'RestClient / WebClient / RestTemplate': '🟡',
  'Feign Client': '🟡',
  'Micrometer': '🔴',
  'Testcontainers': '🔴',
  'WireMock': '🔴',
  'ArchUnit': '🔴',
  'Checkstyle / PMD / SpotBugs': '🟡',
  'SonarQube': '🟡',
};

function getDifficulty(topic) {
  return difficultyMap[topic] || '🟡';
}

function getDifficultyLabel(emoji) {
  if (emoji === '🟢') return 'Einstieg';
  if (emoji === '🟡') return 'Mittel';
  return 'Fortgeschritten';
}

function getDifficultyClass(emoji) {
  if (emoji === '🟢') return 'easy';
  if (emoji === '🟡') return 'medium';
  return 'hard';
}

// Clean old topics
fs.rmSync(topicsDir, { recursive: true, force: true });
fs.mkdirSync(topicsDir, { recursive: true });

// Generate topic pages with difficulty
const sidebar = [];
let totalTopics = 0;
let countEasy = 0, countMedium = 0, countHard = 0;

for (const group of groups) {
  const groupSlug = slugify(group.name);
  const groupDir = path.join(topicsDir, groupSlug);
  fs.mkdirSync(groupDir, { recursive: true });

  const sidebarGroup = { text: group.name, collapsed: true, items: [] };

  function generatePage(topic) {
    const slug = slugify(topic);
    const diff = getDifficulty(topic);
    const diffLabel = getDifficultyLabel(diff);
    const diffClass = getDifficultyClass(diff);

    if (diff === '🟢') countEasy++;
    else if (diff === '🟡') countMedium++;
    else countHard++;

    const filePath = path.join(groupDir, `${slug}.md`);
    const content = `---
outline: deep
---

# ${topic}

<div class="meta">
  <span class="difficulty ${diffClass}">${diff} ${diffLabel}</span>
  <span class="status">📝 Noch nicht bearbeitet</span>
</div>

---

## Notizen

*Hier deine Notizen eintragen...*

## Code-Beispiele

\`\`\`java
// Dein Code hier...
\`\`\`

## Wichtige Punkte

- ...

## Interview-Fragen

- ...

<style>
.meta {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}
.meta span {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.85em;
}
.difficulty {
  font-weight: 600;
}
.difficulty.easy {
  background: #064e3b;
  color: #6ee7b7;
}
.difficulty.medium {
  background: #78350f;
  color: #fcd34d;
}
.difficulty.hard {
  background: #7f1d1d;
  color: #fca5a5;
}
.status {
  background: #2a2a2a;
  color: #aaa;
}
</style>
`;
    fs.writeFileSync(filePath, content);
    totalTopics++;
    return { text: `${diff} ${topic}`, link: `/topics/${groupSlug}/${slug}` };
  }

  for (const topic of group.topics) {
    sidebarGroup.items.push(generatePage(topic));
  }

  for (const sub of group.subGroups) {
    const subItems = [];
    for (const topic of sub.topics) {
      subItems.push(generatePage(topic));
    }
    sidebarGroup.items.push({ text: sub.name, collapsed: true, items: subItems });
  }

  sidebar.push(sidebarGroup);
}

console.log(`Generated ${totalTopics} pages: 🟢 ${countEasy} Einstieg | 🟡 ${countMedium} Mittel | 🔴 ${countHard} Fortgeschritten`);

// Generate config
const configContent = `import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Java Wissensmap',
  description: 'Mein persönliches Java-Interview Lernportal',
  lang: 'de-DE',
  themeConfig: {
    nav: [
      { text: 'Übersicht', link: '/' },
    ],
    sidebar: ${JSON.stringify(sidebar, null, 6)},
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Suchen', buttonAriaLabel: 'Suchen' },
          modal: {
            noResultsText: 'Keine Ergebnisse für',
            resetButtonTitle: 'Suche zurücksetzen',
            footer: { selectText: 'Auswählen', navigateText: 'Navigieren', closeText: 'Schließen' }
          }
        }
      }
    },
    outline: { label: 'Auf dieser Seite' },
    docFooter: { prev: 'Zurück', next: 'Weiter' },
  }
})
`;
fs.writeFileSync(path.join(docsDir, '.vitepress', 'config.mjs'), configContent);

// Generate index page with difficulty badges
let indexContent = `---
layout: home
hero:
  name: Java Wissensmap
  text: Interview-Vorbereitung
  tagline: "${totalTopics} Themen — Jeden Tag ein Stück besser werden."
---

<div class="overview">

# Themenübersicht

<div class="legend">
  <span class="badge easy">🟢 Einstieg — ${countEasy}</span>
  <span class="badge medium">🟡 Mittel — ${countMedium}</span>
  <span class="badge hard">🔴 Fortgeschritten — ${countHard}</span>
</div>

`;

for (const group of groups) {
  const groupSlug = slugify(group.name);
  indexContent += `\n## ${group.name}\n\n`;

  if (group.topics.length > 0) {
    for (const topic of group.topics) {
      const slug = slugify(topic);
      const diff = getDifficulty(topic);
      const diffClass = getDifficultyClass(diff);
      indexContent += `- [<span class="d ${diffClass}">${diff}</span> ${topic}](/topics/${groupSlug}/${slug})\n`;
    }
  }

  for (const sub of group.subGroups) {
    indexContent += `\n### ${sub.name}\n\n`;
    for (const topic of sub.topics) {
      const slug = slugify(topic);
      const diff = getDifficulty(topic);
      const diffClass = getDifficultyClass(diff);
      indexContent += `- [<span class="d ${diffClass}">${diff}</span> ${topic}](/topics/${groupSlug}/${slug})\n`;
    }
  }
}

indexContent += `
</div>

<style>
.overview {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}
.legend {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
}
.badge {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.9em;
  font-weight: 600;
}
.badge.easy, .difficulty.easy { background: #064e3b; color: #6ee7b7; }
.badge.medium, .difficulty.medium { background: #78350f; color: #fcd34d; }
.badge.hard, .difficulty.hard { background: #7f1d1d; color: #fca5a5; }

.overview h2 {
  margin-top: 2.5rem;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid var(--vp-c-divider);
}
.overview h3 {
  margin-top: 1.5rem;
  color: var(--vp-c-text-2);
}
.overview ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 0.6rem;
}
.overview li {
  flex: 0 0 auto;
}
.overview li a {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 4px 10px;
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 0.85em;
  text-decoration: none;
  transition: all 0.2s;
}
.overview li a:hover {
  background: var(--vp-c-brand-1);
  color: white;
}
.overview li a:hover .d {
  opacity: 0.9;
}
.d {
  font-size: 0.85em;
  flex-shrink: 0;
}
</style>
`;

fs.writeFileSync(path.join(docsDir, 'index.md'), indexContent);
console.log('Done!');
