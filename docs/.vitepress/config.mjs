import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Java Wissensmap',
  description: 'Mein persönliches Java-Interview Lernportal',
  lang: 'de-DE',
  themeConfig: {
    nav: [
      { text: 'Übersicht', link: '/' },
    ],
    sidebar: [
      {
            "text": "Java Grundlagen",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟢 Primitive Datentypen vs. Referenztypen",
                        "link": "/topics/java-grundlagen/primitive-datentypen-vs-referenztypen"
                  },
                  {
                        "text": "🟢 Autoboxing / Unboxing",
                        "link": "/topics/java-grundlagen/autoboxing-unboxing"
                  },
                  {
                        "text": "🟢 Type Casting (implicit / explicit)",
                        "link": "/topics/java-grundlagen/type-casting-implicit-explicit"
                  },
                  {
                        "text": "🟡 String Pool & String Immutability",
                        "link": "/topics/java-grundlagen/string-pool-string-immutability"
                  },
                  {
                        "text": "🟢 StringBuilder vs. StringBuffer",
                        "link": "/topics/java-grundlagen/stringbuilder-vs-stringbuffer"
                  },
                  {
                        "text": "🟢 Arrays vs. ArrayList",
                        "link": "/topics/java-grundlagen/arrays-vs-arraylist"
                  },
                  {
                        "text": "🟢 Varargs",
                        "link": "/topics/java-grundlagen/varargs"
                  },
                  {
                        "text": "🟢 Enums",
                        "link": "/topics/java-grundlagen/enums"
                  },
                  {
                        "text": "🟡 Annotations (Built-in & Custom)",
                        "link": "/topics/java-grundlagen/annotations-built-in-custom"
                  },
                  {
                        "text": "🟢 Operators & Operator Precedence",
                        "link": "/topics/java-grundlagen/operators-operator-precedence"
                  },
                  {
                        "text": "🟢 Ternary Operator",
                        "link": "/topics/java-grundlagen/ternary-operator"
                  },
                  {
                        "text": "🟡 Switch Expressions (Java 14+)",
                        "link": "/topics/java-grundlagen/switch-expressions-java-14"
                  },
                  {
                        "text": "🟡 Pattern Matching (instanceof, switch)",
                        "link": "/topics/java-grundlagen/pattern-matching-instanceof-switch"
                  },
                  {
                        "text": "🟡 Sealed Classes",
                        "link": "/topics/java-grundlagen/sealed-classes"
                  },
                  {
                        "text": "🟡 Records",
                        "link": "/topics/java-grundlagen/records"
                  },
                  {
                        "text": "🟢 var (Local Variable Type Inference)",
                        "link": "/topics/java-grundlagen/var-local-variable-type-inference"
                  },
                  {
                        "text": "🟢 Text Blocks",
                        "link": "/topics/java-grundlagen/text-blocks"
                  },
                  {
                        "text": "🟢 Static Imports",
                        "link": "/topics/java-grundlagen/static-imports"
                  },
                  {
                        "text": "🟢 Final Keyword (Variablen, Methoden, Klassen)",
                        "link": "/topics/java-grundlagen/final-keyword-variablen-methoden-klassen"
                  },
                  {
                        "text": "🟡 Transient Keyword",
                        "link": "/topics/java-grundlagen/transient-keyword"
                  },
                  {
                        "text": "🔴 Volatile Keyword",
                        "link": "/topics/java-grundlagen/volatile-keyword"
                  },
                  {
                        "text": "🟡 Pass-by-Value vs. Pass-by-Reference in Java",
                        "link": "/topics/java-grundlagen/pass-by-value-vs-pass-by-reference-in-java"
                  },
                  {
                        "text": "🟡 Stack vs. Heap Memory",
                        "link": "/topics/java-grundlagen/stack-vs-heap-memory"
                  },
                  {
                        "text": "🟡 Garbage Collection Grundlagen",
                        "link": "/topics/java-grundlagen/garbage-collection-grundlagen"
                  },
                  {
                        "text": "🔴 Garbage Collector Typen (G1, ZGC, Shenandoah)",
                        "link": "/topics/java-grundlagen/garbage-collector-typen-g1-zgc-shenandoah"
                  },
                  {
                        "text": "🔴 Memory Leaks erkennen und vermeiden",
                        "link": "/topics/java-grundlagen/memory-leaks-erkennen-und-vermeiden"
                  },
                  {
                        "text": "🔴 ClassLoader-Hierarchie",
                        "link": "/topics/java-grundlagen/classloader-hierarchie"
                  },
                  {
                        "text": "🔴 Reflection API",
                        "link": "/topics/java-grundlagen/reflection-api"
                  },
                  {
                        "text": "🔴 Java Module System (JPMS)",
                        "link": "/topics/java-grundlagen/java-module-system-jpms"
                  },
                  {
                        "text": "🔴 JVM Architektur (JIT, Bytecode, Class Loading)",
                        "link": "/topics/java-grundlagen/jvm-architektur-jit-bytecode-class-loading"
                  },
                  {
                        "text": "🟢 JDK vs. JRE vs. JVM",
                        "link": "/topics/java-grundlagen/jdk-vs-jre-vs-jvm"
                  }
            ]
      },
      {
            "text": "OOP — Objektorientierte Programmierung",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟢 Klassen & Objekte",
                        "link": "/topics/oop-objektorientierte-programmierung/klassen-objekte"
                  },
                  {
                        "text": "🟢 Konstruktoren (Default, Parameterized, Copy)",
                        "link": "/topics/oop-objektorientierte-programmierung/konstruktoren-default-parameterized-copy"
                  },
                  {
                        "text": "🟢 Constructor Chaining",
                        "link": "/topics/oop-objektorientierte-programmierung/constructor-chaining"
                  },
                  {
                        "text": "🟢 this & super Keyword",
                        "link": "/topics/oop-objektorientierte-programmierung/this-super-keyword"
                  },
                  {
                        "text": "🟢 Vererbung (Inheritance)",
                        "link": "/topics/oop-objektorientierte-programmierung/vererbung-inheritance"
                  },
                  {
                        "text": "🟢 Einfachvererbung vs. Mehrfachvererbung",
                        "link": "/topics/oop-objektorientierte-programmierung/einfachvererbung-vs-mehrfachvererbung"
                  },
                  {
                        "text": "🟢 Method Overloading",
                        "link": "/topics/oop-objektorientierte-programmierung/method-overloading"
                  },
                  {
                        "text": "🟢 Method Overriding",
                        "link": "/topics/oop-objektorientierte-programmierung/method-overriding"
                  },
                  {
                        "text": "🟡 Polymorphismus (Compile-time vs. Runtime)",
                        "link": "/topics/oop-objektorientierte-programmierung/polymorphismus-compile-time-vs-runtime"
                  },
                  {
                        "text": "🟢 Abstrakte Klassen",
                        "link": "/topics/oop-objektorientierte-programmierung/abstrakte-klassen"
                  },
                  {
                        "text": "🟢 Interfaces",
                        "link": "/topics/oop-objektorientierte-programmierung/interfaces"
                  },
                  {
                        "text": "🟡 Interface Default Methods",
                        "link": "/topics/oop-objektorientierte-programmierung/interface-default-methods"
                  },
                  {
                        "text": "🟡 Interface Static Methods",
                        "link": "/topics/oop-objektorientierte-programmierung/interface-static-methods"
                  },
                  {
                        "text": "🟡 Functional Interfaces",
                        "link": "/topics/oop-objektorientierte-programmierung/functional-interfaces"
                  },
                  {
                        "text": "🟡 Abstrakte Klasse vs. Interface — Wann was?",
                        "link": "/topics/oop-objektorientierte-programmierung/abstrakte-klasse-vs-interface-wann-was"
                  },
                  {
                        "text": "🟢 Encapsulation / Kapselung",
                        "link": "/topics/oop-objektorientierte-programmierung/encapsulation-kapselung"
                  },
                  {
                        "text": "🟢 Access Modifiers (private, protected, public, package-private)",
                        "link": "/topics/oop-objektorientierte-programmierung/access-modifiers-private-protected-public-package-private"
                  },
                  {
                        "text": "🟡 Komposition vs. Vererbung",
                        "link": "/topics/oop-objektorientierte-programmierung/komposition-vs-vererbung"
                  },
                  {
                        "text": "🟡 Aggregation vs. Komposition",
                        "link": "/topics/oop-objektorientierte-programmierung/aggregation-vs-komposition"
                  },
                  {
                        "text": "🟡 Kohäsion & Kopplung",
                        "link": "/topics/oop-objektorientierte-programmierung/kohaesion-kopplung"
                  },
                  {
                        "text": "🟡 Liskov Substitution Principle",
                        "link": "/topics/oop-objektorientierte-programmierung/liskov-substitution-principle"
                  },
                  {
                        "text": "🟡 SOLID-Prinzipien (einzeln)",
                        "link": "/topics/oop-objektorientierte-programmierung/solid-prinzipien-einzeln"
                  },
                  {
                        "text": "🟢 DRY Principle",
                        "link": "/topics/oop-objektorientierte-programmierung/dry-principle"
                  },
                  {
                        "text": "🟢 KISS Principle",
                        "link": "/topics/oop-objektorientierte-programmierung/kiss-principle"
                  },
                  {
                        "text": "🟢 YAGNI Principle",
                        "link": "/topics/oop-objektorientierte-programmierung/yagni-principle"
                  },
                  {
                        "text": "🟡 Law of Demeter",
                        "link": "/topics/oop-objektorientierte-programmierung/law-of-demeter"
                  },
                  {
                        "text": "🟡 Tell, Don't Ask",
                        "link": "/topics/oop-objektorientierte-programmierung/tell-don-t-ask"
                  },
                  {
                        "text": "🟡 Favor Composition over Inheritance",
                        "link": "/topics/oop-objektorientierte-programmierung/favor-composition-over-inheritance"
                  },
                  {
                        "text": "🟡 Dependency Inversion",
                        "link": "/topics/oop-objektorientierte-programmierung/dependency-inversion"
                  }
            ]
      },
      {
            "text": "Collections Framework",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟢 List (ArrayList, LinkedList, Vector, Stack)",
                        "link": "/topics/collections-framework/list-arraylist-linkedlist-vector-stack"
                  },
                  {
                        "text": "🟢 Set (HashSet, LinkedHashSet, TreeSet)",
                        "link": "/topics/collections-framework/set-hashset-linkedhashset-treeset"
                  },
                  {
                        "text": "🟡 Queue (PriorityQueue, ArrayDeque)",
                        "link": "/topics/collections-framework/queue-priorityqueue-arraydeque"
                  },
                  {
                        "text": "🟡 Deque",
                        "link": "/topics/collections-framework/deque"
                  },
                  {
                        "text": "🟢 Map (HashMap, LinkedHashMap, TreeMap, Hashtable)",
                        "link": "/topics/collections-framework/map-hashmap-linkedhashmap-treemap-hashtable"
                  },
                  {
                        "text": "🔴 ConcurrentHashMap",
                        "link": "/topics/collections-framework/concurrenthashmap"
                  },
                  {
                        "text": "🔴 WeakHashMap",
                        "link": "/topics/collections-framework/weakhashmap"
                  },
                  {
                        "text": "🟡 EnumSet / EnumMap",
                        "link": "/topics/collections-framework/enumset-enummap"
                  },
                  {
                        "text": "🟡 Collections.unmodifiableList / Map / Set",
                        "link": "/topics/collections-framework/collections-unmodifiablelist-map-set"
                  },
                  {
                        "text": "🟢 List.of(), Map.of(), Set.of() (Immutable Collections)",
                        "link": "/topics/collections-framework/list-of-map-of-set-of-immutable-collections"
                  },
                  {
                        "text": "🟡 Iterator vs. ListIterator",
                        "link": "/topics/collections-framework/iterator-vs-listiterator"
                  },
                  {
                        "text": "🟡 Iterable Interface",
                        "link": "/topics/collections-framework/iterable-interface"
                  },
                  {
                        "text": "🟡 Comparable vs. Comparator",
                        "link": "/topics/collections-framework/comparable-vs-comparator"
                  },
                  {
                        "text": "🔴 HashMap Internals (Buckets, Hashing, Rehashing)",
                        "link": "/topics/collections-framework/hashmap-internals-buckets-hashing-rehashing"
                  },
                  {
                        "text": "🔴 Hash Collisions & Collision Resolution",
                        "link": "/topics/collections-framework/hash-collisions-collision-resolution"
                  },
                  {
                        "text": "🟡 equals() und hashCode() Vertrag",
                        "link": "/topics/collections-framework/equals-und-hashcode-vertrag"
                  },
                  {
                        "text": "🔴 fail-fast vs. fail-safe Iteratoren",
                        "link": "/topics/collections-framework/fail-fast-vs-fail-safe-iteratoren"
                  },
                  {
                        "text": "🔴 NavigableMap / NavigableSet",
                        "link": "/topics/collections-framework/navigablemap-navigableset"
                  },
                  {
                        "text": "🔴 Concurrent Collections (CopyOnWriteArrayList, BlockingQueue)",
                        "link": "/topics/collections-framework/concurrent-collections-copyonwritearraylist-blockingqueue"
                  }
            ]
      },
      {
            "text": "Generics",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟡 Generische Klassen",
                        "link": "/topics/generics/generische-klassen"
                  },
                  {
                        "text": "🟡 Generische Methoden",
                        "link": "/topics/generics/generische-methoden"
                  },
                  {
                        "text": "🟡 Bounded Type Parameters (extends, super)",
                        "link": "/topics/generics/bounded-type-parameters-extends-super"
                  },
                  {
                        "text": "🟡 Wildcards (?, extends, super)",
                        "link": "/topics/generics/wildcards-extends-super"
                  },
                  {
                        "text": "🔴 PECS Prinzip (Producer Extends, Consumer Super)",
                        "link": "/topics/generics/pecs-prinzip-producer-extends-consumer-super"
                  },
                  {
                        "text": "🔴 Type Erasure",
                        "link": "/topics/generics/type-erasure"
                  },
                  {
                        "text": "🟡 Generics vs. Raw Types",
                        "link": "/topics/generics/generics-vs-raw-types"
                  },
                  {
                        "text": "🟢 Diamond Operator",
                        "link": "/topics/generics/diamond-operator"
                  }
            ]
      },
      {
            "text": "Exception Handling",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟢 Checked vs. Unchecked Exceptions",
                        "link": "/topics/exception-handling/checked-vs-unchecked-exceptions"
                  },
                  {
                        "text": "🟢 Error vs. Exception",
                        "link": "/topics/exception-handling/error-vs-exception"
                  },
                  {
                        "text": "🟢 try-catch-finally",
                        "link": "/topics/exception-handling/try-catch-finally"
                  },
                  {
                        "text": "🟢 try-with-resources",
                        "link": "/topics/exception-handling/try-with-resources"
                  },
                  {
                        "text": "🟡 AutoCloseable Interface",
                        "link": "/topics/exception-handling/autocloseable-interface"
                  },
                  {
                        "text": "🟡 Custom Exceptions",
                        "link": "/topics/exception-handling/custom-exceptions"
                  },
                  {
                        "text": "🟡 Exception Chaining",
                        "link": "/topics/exception-handling/exception-chaining"
                  },
                  {
                        "text": "🟢 Multi-Catch",
                        "link": "/topics/exception-handling/multi-catch"
                  },
                  {
                        "text": "🟡 Best Practices (keine leeren Catch-Blöcke, spezifische Exceptions)",
                        "link": "/topics/exception-handling/best-practices-keine-leeren-catch-bloecke-spezifische-exceptions"
                  },
                  {
                        "text": "🟡 Warum keine Exceptions für Flow Control?",
                        "link": "/topics/exception-handling/warum-keine-exceptions-fuer-flow-control"
                  },
                  {
                        "text": "🟢 StackTrace lesen und verstehen",
                        "link": "/topics/exception-handling/stacktrace-lesen-und-verstehen"
                  }
            ]
      },
      {
            "text": "Functional Programming & Streams",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟢 Lambda Expressions",
                        "link": "/topics/functional-programming-streams/lambda-expressions"
                  },
                  {
                        "text": "🟡 Functional Interfaces (Predicate, Function, Consumer, Supplier, BiFunction)",
                        "link": "/topics/functional-programming-streams/functional-interfaces-predicate-function-consumer-supplier-bifunction"
                  },
                  {
                        "text": "🟡 Method References",
                        "link": "/topics/functional-programming-streams/method-references"
                  },
                  {
                        "text": "🟡 Stream API",
                        "link": "/topics/functional-programming-streams/stream-api"
                  },
                  {
                        "text": "🟡 Stream vs. Collection",
                        "link": "/topics/functional-programming-streams/stream-vs-collection"
                  },
                  {
                        "text": "🟡 Intermediate Operations (map, filter, flatMap, peek, sorted, distinct)",
                        "link": "/topics/functional-programming-streams/intermediate-operations-map-filter-flatmap-peek-sorted-distinct"
                  },
                  {
                        "text": "🟡 Terminal Operations (collect, forEach, reduce, count, findFirst, anyMatch)",
                        "link": "/topics/functional-programming-streams/terminal-operations-collect-foreach-reduce-count-findfirst-anymatch"
                  },
                  {
                        "text": "🟡 Collectors (toList, toMap, toSet, groupingBy, partitioningBy, joining)",
                        "link": "/topics/functional-programming-streams/collectors-tolist-tomap-toset-groupingby-partitioningby-joining"
                  },
                  {
                        "text": "🔴 Parallel Streams",
                        "link": "/topics/functional-programming-streams/parallel-streams"
                  },
                  {
                        "text": "🔴 Parallel Streams — Gefahren & Wann sinnvoll",
                        "link": "/topics/functional-programming-streams/parallel-streams-gefahren-wann-sinnvoll"
                  },
                  {
                        "text": "🟡 Optional",
                        "link": "/topics/functional-programming-streams/optional"
                  },
                  {
                        "text": "🟡 Optional Best Practices (nicht als Methodenparameter)",
                        "link": "/topics/functional-programming-streams/optional-best-practices-nicht-als-methodenparameter"
                  },
                  {
                        "text": "🟡 Stream.of() vs. Arrays.stream()",
                        "link": "/topics/functional-programming-streams/stream-of-vs-arrays-stream"
                  },
                  {
                        "text": "🔴 Lazy Evaluation in Streams",
                        "link": "/topics/functional-programming-streams/lazy-evaluation-in-streams"
                  },
                  {
                        "text": "🔴 Short-Circuiting Operations",
                        "link": "/topics/functional-programming-streams/short-circuiting-operations"
                  }
            ]
      },
      {
            "text": "Multithreading & Concurrency",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟡 Thread vs. Runnable vs. Callable",
                        "link": "/topics/multithreading-concurrency/thread-vs-runnable-vs-callable"
                  },
                  {
                        "text": "🟡 Thread Lifecycle",
                        "link": "/topics/multithreading-concurrency/thread-lifecycle"
                  },
                  {
                        "text": "🟢 start() vs. run()",
                        "link": "/topics/multithreading-concurrency/start-vs-run"
                  },
                  {
                        "text": "🟡 synchronized Keyword",
                        "link": "/topics/multithreading-concurrency/synchronized-keyword"
                  },
                  {
                        "text": "🔴 wait(), notify(), notifyAll()",
                        "link": "/topics/multithreading-concurrency/wait-notify-notifyall"
                  },
                  {
                        "text": "🟡 Deadlock",
                        "link": "/topics/multithreading-concurrency/deadlock"
                  },
                  {
                        "text": "🔴 Livelock",
                        "link": "/topics/multithreading-concurrency/livelock"
                  },
                  {
                        "text": "🔴 Starvation",
                        "link": "/topics/multithreading-concurrency/starvation"
                  },
                  {
                        "text": "🟡 Race Conditions",
                        "link": "/topics/multithreading-concurrency/race-conditions"
                  },
                  {
                        "text": "🟡 Thread Safety",
                        "link": "/topics/multithreading-concurrency/thread-safety"
                  },
                  {
                        "text": "🔴 Volatile Keyword",
                        "link": "/topics/multithreading-concurrency/volatile-keyword"
                  },
                  {
                        "text": "🔴 Atomic Classes (AtomicInteger, AtomicReference)",
                        "link": "/topics/multithreading-concurrency/atomic-classes-atomicinteger-atomicreference"
                  },
                  {
                        "text": "🔴 ReentrantLock",
                        "link": "/topics/multithreading-concurrency/reentrantlock"
                  },
                  {
                        "text": "🔴 ReadWriteLock",
                        "link": "/topics/multithreading-concurrency/readwritelock"
                  },
                  {
                        "text": "🔴 Semaphore",
                        "link": "/topics/multithreading-concurrency/semaphore"
                  },
                  {
                        "text": "🔴 CountDownLatch",
                        "link": "/topics/multithreading-concurrency/countdownlatch"
                  },
                  {
                        "text": "🔴 CyclicBarrier",
                        "link": "/topics/multithreading-concurrency/cyclicbarrier"
                  },
                  {
                        "text": "🟡 ExecutorService",
                        "link": "/topics/multithreading-concurrency/executorservice"
                  },
                  {
                        "text": "🟡 ThreadPool (FixedThreadPool, CachedThreadPool, ScheduledThreadPool)",
                        "link": "/topics/multithreading-concurrency/threadpool-fixedthreadpool-cachedthreadpool-scheduledthreadpool"
                  },
                  {
                        "text": "🟡 Future & CompletableFuture",
                        "link": "/topics/multithreading-concurrency/future-completablefuture"
                  },
                  {
                        "text": "🔴 CompletableFuture Chaining (thenApply, thenCompose, thenCombine)",
                        "link": "/topics/multithreading-concurrency/completablefuture-chaining-thenapply-thencompose-thencombine"
                  },
                  {
                        "text": "🔴 Fork/Join Framework",
                        "link": "/topics/multithreading-concurrency/fork-join-framework"
                  },
                  {
                        "text": "🔴 ThreadLocal",
                        "link": "/topics/multithreading-concurrency/threadlocal"
                  },
                  {
                        "text": "🔴 Virtual Threads (Project Loom, Java 21)",
                        "link": "/topics/multithreading-concurrency/virtual-threads-project-loom-java-21"
                  },
                  {
                        "text": "🔴 Structured Concurrency",
                        "link": "/topics/multithreading-concurrency/structured-concurrency"
                  }
            ]
      },
      {
            "text": "Design Patterns",
            "collapsed": true,
            "items": [
                  {
                        "text": "Creational Patterns",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "🟢 Singleton",
                                    "link": "/topics/design-patterns/singleton"
                              },
                              {
                                    "text": "🟡 Factory Method",
                                    "link": "/topics/design-patterns/factory-method"
                              },
                              {
                                    "text": "🟡 Abstract Factory",
                                    "link": "/topics/design-patterns/abstract-factory"
                              },
                              {
                                    "text": "🟡 Builder",
                                    "link": "/topics/design-patterns/builder"
                              },
                              {
                                    "text": "🟡 Prototype",
                                    "link": "/topics/design-patterns/prototype"
                              }
                        ]
                  },
                  {
                        "text": "Structural Patterns",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "🟡 Adapter",
                                    "link": "/topics/design-patterns/adapter"
                              },
                              {
                                    "text": "🔴 Bridge",
                                    "link": "/topics/design-patterns/bridge"
                              },
                              {
                                    "text": "🔴 Composite",
                                    "link": "/topics/design-patterns/composite"
                              },
                              {
                                    "text": "🟡 Decorator",
                                    "link": "/topics/design-patterns/decorator"
                              },
                              {
                                    "text": "🟡 Facade",
                                    "link": "/topics/design-patterns/facade"
                              },
                              {
                                    "text": "🟡 Proxy",
                                    "link": "/topics/design-patterns/proxy"
                              },
                              {
                                    "text": "🔴 Flyweight",
                                    "link": "/topics/design-patterns/flyweight"
                              }
                        ]
                  },
                  {
                        "text": "Behavioral Patterns",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "🟡 Observer",
                                    "link": "/topics/design-patterns/observer"
                              },
                              {
                                    "text": "🟡 Strategy",
                                    "link": "/topics/design-patterns/strategy"
                              },
                              {
                                    "text": "🟡 Command",
                                    "link": "/topics/design-patterns/command"
                              },
                              {
                                    "text": "🟡 Template Method",
                                    "link": "/topics/design-patterns/template-method"
                              },
                              {
                                    "text": "🟡 Iterator",
                                    "link": "/topics/design-patterns/iterator"
                              },
                              {
                                    "text": "🟡 State",
                                    "link": "/topics/design-patterns/state"
                              },
                              {
                                    "text": "🔴 Chain of Responsibility",
                                    "link": "/topics/design-patterns/chain-of-responsibility"
                              },
                              {
                                    "text": "🔴 Mediator",
                                    "link": "/topics/design-patterns/mediator"
                              },
                              {
                                    "text": "🔴 Visitor",
                                    "link": "/topics/design-patterns/visitor"
                              }
                        ]
                  },
                  {
                        "text": "Weitere Patterns",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "🟢 Repository Pattern",
                                    "link": "/topics/design-patterns/repository-pattern"
                              },
                              {
                                    "text": "🟢 DTO Pattern (Data Transfer Object)",
                                    "link": "/topics/design-patterns/dto-pattern-data-transfer-object"
                              },
                              {
                                    "text": "🟢 DAO Pattern (Data Access Object)",
                                    "link": "/topics/design-patterns/dao-pattern-data-access-object"
                              },
                              {
                                    "text": "🟢 MVC Pattern",
                                    "link": "/topics/design-patterns/mvc-pattern"
                              },
                              {
                                    "text": "🟡 Service Layer Pattern",
                                    "link": "/topics/design-patterns/service-layer-pattern"
                              },
                              {
                                    "text": "🟡 Dependency Injection Pattern",
                                    "link": "/topics/design-patterns/dependency-injection-pattern"
                              },
                              {
                                    "text": "🔴 Event-Driven Pattern",
                                    "link": "/topics/design-patterns/event-driven-pattern"
                              },
                              {
                                    "text": "🔴 Circuit Breaker Pattern",
                                    "link": "/topics/design-patterns/circuit-breaker-pattern"
                              },
                              {
                                    "text": "🔴 Saga Pattern",
                                    "link": "/topics/design-patterns/saga-pattern"
                              },
                              {
                                    "text": "🔴 CQRS Pattern",
                                    "link": "/topics/design-patterns/cqrs-pattern"
                              },
                              {
                                    "text": "🔴 Outbox Pattern",
                                    "link": "/topics/design-patterns/outbox-pattern"
                              },
                              {
                                    "text": "🟡 Retry Pattern",
                                    "link": "/topics/design-patterns/retry-pattern"
                              },
                              {
                                    "text": "🔴 Bulkhead Pattern",
                                    "link": "/topics/design-patterns/bulkhead-pattern"
                              }
                        ]
                  }
            ]
      },
      {
            "text": "Clean Code",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟢 Aussagekräftige Variablen- und Methodennamen",
                        "link": "/topics/clean-code/aussagekraeftige-variablen-und-methodennamen"
                  },
                  {
                        "text": "🟢 Methoden: Eine Aufgabe, eine Abstraktionsebene",
                        "link": "/topics/clean-code/methoden-eine-aufgabe-eine-abstraktionsebene"
                  },
                  {
                        "text": "🟢 Methoden kurz halten",
                        "link": "/topics/clean-code/methoden-kurz-halten"
                  },
                  {
                        "text": "🟢 Keine Magic Numbers / Magic Strings",
                        "link": "/topics/clean-code/keine-magic-numbers-magic-strings"
                  },
                  {
                        "text": "🟢 Konstanten statt Hardcoded Values",
                        "link": "/topics/clean-code/konstanten-statt-hardcoded-values"
                  },
                  {
                        "text": "🟢 Boy Scout Rule",
                        "link": "/topics/clean-code/boy-scout-rule"
                  },
                  {
                        "text": "🟢 Single Responsibility auf Methodenebene",
                        "link": "/topics/clean-code/single-responsibility-auf-methodenebene"
                  },
                  {
                        "text": "🟢 Keine verschachtelten if-else-Kaskaden",
                        "link": "/topics/clean-code/keine-verschachtelten-if-else-kaskaden"
                  },
                  {
                        "text": "🟢 Guard Clauses / Early Returns",
                        "link": "/topics/clean-code/guard-clauses-early-returns"
                  },
                  {
                        "text": "🟡 Code Smells erkennen",
                        "link": "/topics/clean-code/code-smells-erkennen"
                  },
                  {
                        "text": "🟢 Long Method",
                        "link": "/topics/clean-code/long-method"
                  },
                  {
                        "text": "🟡 God Class",
                        "link": "/topics/clean-code/god-class"
                  },
                  {
                        "text": "🟡 Feature Envy",
                        "link": "/topics/clean-code/feature-envy"
                  },
                  {
                        "text": "🟡 Data Clumps",
                        "link": "/topics/clean-code/data-clumps"
                  },
                  {
                        "text": "🟡 Primitive Obsession",
                        "link": "/topics/clean-code/primitive-obsession"
                  },
                  {
                        "text": "🟡 Shotgun Surgery",
                        "link": "/topics/clean-code/shotgun-surgery"
                  },
                  {
                        "text": "🟡 Divergent Change",
                        "link": "/topics/clean-code/divergent-change"
                  },
                  {
                        "text": "🟢 Dead Code entfernen",
                        "link": "/topics/clean-code/dead-code-entfernen"
                  },
                  {
                        "text": "🟢 Kommentare: Warum, nicht Was",
                        "link": "/topics/clean-code/kommentare-warum-nicht-was"
                  },
                  {
                        "text": "🟢 Keine auskommentierten Codeblöcke",
                        "link": "/topics/clean-code/keine-auskommentierten-codebloecke"
                  },
                  {
                        "text": "🟢 Konsistente Formatierung",
                        "link": "/topics/clean-code/konsistente-formatierung"
                  },
                  {
                        "text": "🟡 Immutability bevorzugen",
                        "link": "/topics/clean-code/immutability-bevorzugen"
                  },
                  {
                        "text": "🟡 Defensive Kopien",
                        "link": "/topics/clean-code/defensive-kopien"
                  },
                  {
                        "text": "🟡 Null vermeiden (Optional nutzen)",
                        "link": "/topics/clean-code/null-vermeiden-optional-nutzen"
                  },
                  {
                        "text": "🟡 Fail Fast Principle",
                        "link": "/topics/clean-code/fail-fast-principle"
                  },
                  {
                        "text": "🟡 Package-Struktur sinnvoll aufbauen",
                        "link": "/topics/clean-code/package-struktur-sinnvoll-aufbauen"
                  }
            ]
      },
      {
            "text": "Refactoring",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟢 Extract Method",
                        "link": "/topics/refactoring/extract-method"
                  },
                  {
                        "text": "🟡 Extract Class",
                        "link": "/topics/refactoring/extract-class"
                  },
                  {
                        "text": "🟢 Rename Variable / Method / Class",
                        "link": "/topics/refactoring/rename-variable-method-class"
                  },
                  {
                        "text": "🟢 Inline Variable / Method",
                        "link": "/topics/refactoring/inline-variable-method"
                  },
                  {
                        "text": "🟢 Replace Magic Number with Constant",
                        "link": "/topics/refactoring/replace-magic-number-with-constant"
                  },
                  {
                        "text": "🟡 Replace Conditional with Polymorphism",
                        "link": "/topics/refactoring/replace-conditional-with-polymorphism"
                  },
                  {
                        "text": "🟡 Introduce Parameter Object",
                        "link": "/topics/refactoring/introduce-parameter-object"
                  },
                  {
                        "text": "🟡 Replace Temp with Query",
                        "link": "/topics/refactoring/replace-temp-with-query"
                  },
                  {
                        "text": "🟡 Move Method / Move Field",
                        "link": "/topics/refactoring/move-method-move-field"
                  },
                  {
                        "text": "🔴 Replace Inheritance with Delegation",
                        "link": "/topics/refactoring/replace-inheritance-with-delegation"
                  },
                  {
                        "text": "🟡 Decompose Conditional",
                        "link": "/topics/refactoring/decompose-conditional"
                  },
                  {
                        "text": "🟡 Wann Refactoring? Wann nicht?",
                        "link": "/topics/refactoring/wann-refactoring-wann-nicht"
                  }
            ]
      },
      {
            "text": "Testing",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟢 Unit Testing",
                        "link": "/topics/testing/unit-testing"
                  },
                  {
                        "text": "🟡 Integration Testing",
                        "link": "/topics/testing/integration-testing"
                  },
                  {
                        "text": "🟡 End-to-End Testing",
                        "link": "/topics/testing/end-to-end-testing"
                  },
                  {
                        "text": "🟢 Testpyramide",
                        "link": "/topics/testing/testpyramide"
                  },
                  {
                        "text": "🟢 JUnit 5 Grundlagen",
                        "link": "/topics/testing/junit-5-grundlagen"
                  },
                  {
                        "text": "🟢 JUnit 5 Assertions",
                        "link": "/topics/testing/junit-5-assertions"
                  },
                  {
                        "text": "🟢 JUnit 5 Annotations (@Test, @BeforeEach, @AfterEach, @BeforeAll, @Nested, @ParameterizedTest)",
                        "link": "/topics/testing/junit-5-annotations-test-beforeeach-aftereach-beforeall-nested-parameterizedtest"
                  },
                  {
                        "text": "🟡 Parameterized Tests",
                        "link": "/topics/testing/parameterized-tests"
                  },
                  {
                        "text": "🟡 Mockito Grundlagen",
                        "link": "/topics/testing/mockito-grundlagen"
                  },
                  {
                        "text": "🟡 Mocking vs. Stubbing vs. Spying",
                        "link": "/topics/testing/mocking-vs-stubbing-vs-spying"
                  },
                  {
                        "text": "🟡 @Mock, @InjectMocks, @Spy",
                        "link": "/topics/testing/mock-injectmocks-spy"
                  },
                  {
                        "text": "🟡 when().thenReturn() vs. doReturn().when()",
                        "link": "/topics/testing/when-thenreturn-vs-doreturn-when"
                  },
                  {
                        "text": "🟡 verify() in Mockito",
                        "link": "/topics/testing/verify-in-mockito"
                  },
                  {
                        "text": "🟡 ArgumentCaptor",
                        "link": "/topics/testing/argumentcaptor"
                  },
                  {
                        "text": "🟡 BDD-Style Testing (given/when/then)",
                        "link": "/topics/testing/bdd-style-testing-given-when-then"
                  },
                  {
                        "text": "🟡 AssertJ",
                        "link": "/topics/testing/assertj"
                  },
                  {
                        "text": "🔴 Testcontainers",
                        "link": "/topics/testing/testcontainers"
                  },
                  {
                        "text": "🟡 Testabdeckung (Code Coverage)",
                        "link": "/topics/testing/testabdeckung-code-coverage"
                  },
                  {
                        "text": "🟡 Was testen, was nicht?",
                        "link": "/topics/testing/was-testen-was-nicht"
                  },
                  {
                        "text": "🟢 Test Naming Conventions",
                        "link": "/topics/testing/test-naming-conventions"
                  },
                  {
                        "text": "🟢 AAA Pattern (Arrange, Act, Assert)",
                        "link": "/topics/testing/aaa-pattern-arrange-act-assert"
                  },
                  {
                        "text": "🟡 Testbare Klassen schreiben (Dependency Injection)",
                        "link": "/topics/testing/testbare-klassen-schreiben-dependency-injection"
                  },
                  {
                        "text": "🟡 TDD (Test-Driven Development)",
                        "link": "/topics/testing/tdd-test-driven-development"
                  },
                  {
                        "text": "🔴 Mutation Testing (PIT)",
                        "link": "/topics/testing/mutation-testing-pit"
                  },
                  {
                        "text": "🔴 Contract Testing",
                        "link": "/topics/testing/contract-testing"
                  },
                  {
                        "text": "🔴 WireMock",
                        "link": "/topics/testing/wiremock"
                  },
                  {
                        "text": "🟡 MockMvc (Spring)",
                        "link": "/topics/testing/mockmvc-spring"
                  },
                  {
                        "text": "🟡 @SpringBootTest vs. @WebMvcTest vs. @DataJpaTest",
                        "link": "/topics/testing/springboottest-vs-webmvctest-vs-datajpatest"
                  }
            ]
      },
      {
            "text": "Spring Framework & Spring Boot",
            "collapsed": true,
            "items": [
                  {
                        "text": "Spring Core",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "🟢 Dependency Injection (Constructor, Setter, Field)",
                                    "link": "/topics/spring-framework-spring-boot/dependency-injection-constructor-setter-field"
                              },
                              {
                                    "text": "🟡 Warum Constructor Injection bevorzugt?",
                                    "link": "/topics/spring-framework-spring-boot/warum-constructor-injection-bevorzugt"
                              },
                              {
                                    "text": "🟡 Inversion of Control (IoC)",
                                    "link": "/topics/spring-framework-spring-boot/inversion-of-control-ioc"
                              },
                              {
                                    "text": "🟡 Spring ApplicationContext",
                                    "link": "/topics/spring-framework-spring-boot/spring-applicationcontext"
                              },
                              {
                                    "text": "🟡 Bean Lifecycle",
                                    "link": "/topics/spring-framework-spring-boot/bean-lifecycle"
                              },
                              {
                                    "text": "🟡 Bean Scopes (Singleton, Prototype, Request, Session)",
                                    "link": "/topics/spring-framework-spring-boot/bean-scopes-singleton-prototype-request-session"
                              },
                              {
                                    "text": "🟢 @Component, @Service, @Repository, @Controller",
                                    "link": "/topics/spring-framework-spring-boot/component-service-repository-controller"
                              },
                              {
                                    "text": "🟡 @Configuration & @Bean",
                                    "link": "/topics/spring-framework-spring-boot/configuration-bean"
                              },
                              {
                                    "text": "🟢 @Autowired",
                                    "link": "/topics/spring-framework-spring-boot/autowired"
                              },
                              {
                                    "text": "🟡 @Qualifier",
                                    "link": "/topics/spring-framework-spring-boot/qualifier"
                              },
                              {
                                    "text": "🟡 @Primary",
                                    "link": "/topics/spring-framework-spring-boot/primary"
                              },
                              {
                                    "text": "🟢 @Value",
                                    "link": "/topics/spring-framework-spring-boot/value"
                              },
                              {
                                    "text": "🟡 @Profile",
                                    "link": "/topics/spring-framework-spring-boot/profile"
                              },
                              {
                                    "text": "🔴 @Conditional",
                                    "link": "/topics/spring-framework-spring-boot/conditional"
                              },
                              {
                                    "text": "🔴 Spring Expression Language (SpEL)",
                                    "link": "/topics/spring-framework-spring-boot/spring-expression-language-spel"
                              },
                              {
                                    "text": "🔴 Spring Events (ApplicationEvent)",
                                    "link": "/topics/spring-framework-spring-boot/spring-events-applicationevent"
                              },
                              {
                                    "text": "🟡 @Scheduled & Scheduling",
                                    "link": "/topics/spring-framework-spring-boot/scheduled-scheduling"
                              }
                        ]
                  },
                  {
                        "text": "Spring Boot",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "🟡 Spring Boot Auto-Configuration",
                                    "link": "/topics/spring-framework-spring-boot/spring-boot-auto-configuration"
                              },
                              {
                                    "text": "🟢 application.properties vs. application.yml",
                                    "link": "/topics/spring-framework-spring-boot/application-properties-vs-application-yml"
                              },
                              {
                                    "text": "🟡 Spring Boot Starter",
                                    "link": "/topics/spring-framework-spring-boot/spring-boot-starter"
                              },
                              {
                                    "text": "🟡 Spring Boot Actuator",
                                    "link": "/topics/spring-framework-spring-boot/spring-boot-actuator"
                              },
                              {
                                    "text": "🟡 Health Checks & Readiness/Liveness Probes",
                                    "link": "/topics/spring-framework-spring-boot/health-checks-readiness-liveness-probes"
                              },
                              {
                                    "text": "🟡 Externalized Configuration",
                                    "link": "/topics/spring-framework-spring-boot/externalized-configuration"
                              },
                              {
                                    "text": "🟢 Spring Boot DevTools",
                                    "link": "/topics/spring-framework-spring-boot/spring-boot-devtools"
                              },
                              {
                                    "text": "🟡 Embedded Server (Tomcat, Undertow)",
                                    "link": "/topics/spring-framework-spring-boot/embedded-server-tomcat-undertow"
                              },
                              {
                                    "text": "🟡 Spring Boot Profiles",
                                    "link": "/topics/spring-framework-spring-boot/spring-boot-profiles"
                              },
                              {
                                    "text": "🟡 CommandLineRunner / ApplicationRunner",
                                    "link": "/topics/spring-framework-spring-boot/commandlinerunner-applicationrunner"
                              },
                              {
                                    "text": "🟢 Custom Banner (naja, nice to know)",
                                    "link": "/topics/spring-framework-spring-boot/custom-banner-naja-nice-to-know"
                              },
                              {
                                    "text": "🟡 Spring Boot Logging (SLF4J, Logback)",
                                    "link": "/topics/spring-framework-spring-boot/spring-boot-logging-slf4j-logback"
                              },
                              {
                                    "text": "🟡 Structured Logging",
                                    "link": "/topics/spring-framework-spring-boot/structured-logging"
                              }
                        ]
                  },
                  {
                        "text": "Spring Web / REST",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "🟢 @RestController vs. @Controller",
                                    "link": "/topics/spring-framework-spring-boot/restcontroller-vs-controller"
                              },
                              {
                                    "text": "🟢 @RequestMapping, @GetMapping, @PostMapping, @PutMapping, @DeleteMapping, @PatchMapping",
                                    "link": "/topics/spring-framework-spring-boot/requestmapping-getmapping-postmapping-putmapping-deletemapping-patchmapping"
                              },
                              {
                                    "text": "🟢 @PathVariable, @RequestParam, @RequestBody, @RequestHeader",
                                    "link": "/topics/spring-framework-spring-boot/pathvariable-requestparam-requestbody-requestheader"
                              },
                              {
                                    "text": "🟡 ResponseEntity",
                                    "link": "/topics/spring-framework-spring-boot/responseentity"
                              },
                              {
                                    "text": "🟡 @ResponseStatus",
                                    "link": "/topics/spring-framework-spring-boot/responsestatus"
                              },
                              {
                                    "text": "🔴 Content Negotiation",
                                    "link": "/topics/spring-framework-spring-boot/content-negotiation"
                              },
                              {
                                    "text": "🟡 REST Best Practices",
                                    "link": "/topics/spring-framework-spring-boot/rest-best-practices"
                              },
                              {
                                    "text": "🟡 RESTful API Design (Ressourcen, HTTP-Verben, Statuscodes)",
                                    "link": "/topics/spring-framework-spring-boot/restful-api-design-ressourcen-http-verben-statuscodes"
                              },
                              {
                                    "text": "🔴 HATEOAS",
                                    "link": "/topics/spring-framework-spring-boot/hateoas"
                              },
                              {
                                    "text": "🟡 API Versioning Strategien",
                                    "link": "/topics/spring-framework-spring-boot/api-versioning-strategien"
                              },
                              {
                                    "text": "🟡 Pagination & Sorting",
                                    "link": "/topics/spring-framework-spring-boot/pagination-sorting"
                              },
                              {
                                    "text": "🟡 Request Validation (@Valid, @NotNull, @Size, Custom Validators)",
                                    "link": "/topics/spring-framework-spring-boot/request-validation-valid-notnull-size-custom-validators"
                              },
                              {
                                    "text": "🟡 Global Exception Handling (@ControllerAdvice, @ExceptionHandler)",
                                    "link": "/topics/spring-framework-spring-boot/global-exception-handling-controlleradvice-exceptionhandler"
                              },
                              {
                                    "text": "🔴 Problem Detail (RFC 7807)",
                                    "link": "/topics/spring-framework-spring-boot/problem-detail-rfc-7807"
                              },
                              {
                                    "text": "🟡 CORS Konfiguration",
                                    "link": "/topics/spring-framework-spring-boot/cors-konfiguration"
                              },
                              {
                                    "text": "🟡 Swagger / OpenAPI (springdoc-openapi)",
                                    "link": "/topics/spring-framework-spring-boot/swagger-openapi-springdoc-openapi"
                              }
                        ]
                  },
                  {
                        "text": "Spring Data / JPA / Hibernate",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "🟡 JPA vs. Hibernate vs. Spring Data JPA",
                                    "link": "/topics/spring-framework-spring-boot/jpa-vs-hibernate-vs-spring-data-jpa"
                              },
                              {
                                    "text": "🟢 Entity Mapping (@Entity, @Table, @Column, @Id)",
                                    "link": "/topics/spring-framework-spring-boot/entity-mapping-entity-table-column-id"
                              },
                              {
                                    "text": "🟡 Primary Key Generation Strategien (AUTO, IDENTITY, SEQUENCE, TABLE)",
                                    "link": "/topics/spring-framework-spring-boot/primary-key-generation-strategien-auto-identity-sequence-table"
                              },
                              {
                                    "text": "🟡 Beziehungen (@OneToOne, @OneToMany, @ManyToOne, @ManyToMany)",
                                    "link": "/topics/spring-framework-spring-boot/beziehungen-onetoone-onetomany-manytoone-manytomany"
                              },
                              {
                                    "text": "🟡 FetchType LAZY vs. EAGER",
                                    "link": "/topics/spring-framework-spring-boot/fetchtype-lazy-vs-eager"
                              },
                              {
                                    "text": "🟡 N+1 Problem",
                                    "link": "/topics/spring-framework-spring-boot/n-1-problem"
                              },
                              {
                                    "text": "🔴 N+1 Lösungen (JOIN FETCH, EntityGraph, Batch Size)",
                                    "link": "/topics/spring-framework-spring-boot/n-1-loesungen-join-fetch-entitygraph-batch-size"
                              },
                              {
                                    "text": "🟡 Cascade Types",
                                    "link": "/topics/spring-framework-spring-boot/cascade-types"
                              },
                              {
                                    "text": "🟡 Orphan Removal",
                                    "link": "/topics/spring-framework-spring-boot/orphan-removal"
                              },
                              {
                                    "text": "🟢 JPA Repository (CrudRepository, JpaRepository, PagingAndSortingRepository)",
                                    "link": "/topics/spring-framework-spring-boot/jpa-repository-crudrepository-jparepository-pagingandsortingrepository"
                              },
                              {
                                    "text": "🟡 Derived Query Methods",
                                    "link": "/topics/spring-framework-spring-boot/derived-query-methods"
                              },
                              {
                                    "text": "🟡 @Query (JPQL & Native)",
                                    "link": "/topics/spring-framework-spring-boot/query-jpql-native"
                              },
                              {
                                    "text": "🔴 Specifications & Criteria API",
                                    "link": "/topics/spring-framework-spring-boot/specifications-criteria-api"
                              },
                              {
                                    "text": "🔴 Projections (Interface-based, Class-based)",
                                    "link": "/topics/spring-framework-spring-boot/projections-interface-based-class-based"
                              },
                              {
                                    "text": "🟡 Auditing (@CreatedDate, @LastModifiedDate)",
                                    "link": "/topics/spring-framework-spring-boot/auditing-createddate-lastmodifieddate"
                              },
                              {
                                    "text": "🔴 Optimistic Locking (@Version)",
                                    "link": "/topics/spring-framework-spring-boot/optimistic-locking-version"
                              },
                              {
                                    "text": "🔴 Pessimistic Locking",
                                    "link": "/topics/spring-framework-spring-boot/pessimistic-locking"
                              },
                              {
                                    "text": "🔴 Second-Level Cache (Ehcache, Hazelcast)",
                                    "link": "/topics/spring-framework-spring-boot/second-level-cache-ehcache-hazelcast"
                              },
                              {
                                    "text": "🟡 Flyway / Liquibase (Database Migrations)",
                                    "link": "/topics/spring-framework-spring-boot/flyway-liquibase-database-migrations"
                              },
                              {
                                    "text": "🔴 Spring Data JDBC vs. Spring Data JPA",
                                    "link": "/topics/spring-framework-spring-boot/spring-data-jdbc-vs-spring-data-jpa"
                              },
                              {
                                    "text": "🟡 Transaction Management (@Transactional)",
                                    "link": "/topics/spring-framework-spring-boot/transaction-management-transactional"
                              },
                              {
                                    "text": "🔴 Propagation Levels (REQUIRED, REQUIRES_NEW, NESTED, usw.)",
                                    "link": "/topics/spring-framework-spring-boot/propagation-levels-required-requires-new-nested-usw"
                              },
                              {
                                    "text": "🔴 Isolation Levels (READ_UNCOMMITTED, READ_COMMITTED, REPEATABLE_READ, SERIALIZABLE)",
                                    "link": "/topics/spring-framework-spring-boot/isolation-levels-read-uncommitted-read-committed-repeatable-read-serializable"
                              },
                              {
                                    "text": "🔴 Dirty Read, Non-Repeatable Read, Phantom Read",
                                    "link": "/topics/spring-framework-spring-boot/dirty-read-non-repeatable-read-phantom-read"
                              }
                        ]
                  },
                  {
                        "text": "Spring Security",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "🟢 Authentication vs. Authorization",
                                    "link": "/topics/spring-framework-spring-boot/authentication-vs-authorization"
                              },
                              {
                                    "text": "🟡 SecurityFilterChain",
                                    "link": "/topics/spring-framework-spring-boot/securityfilterchain"
                              },
                              {
                                    "text": "🟡 UserDetailsService",
                                    "link": "/topics/spring-framework-spring-boot/userdetailsservice"
                              },
                              {
                                    "text": "🟡 PasswordEncoder (BCrypt)",
                                    "link": "/topics/spring-framework-spring-boot/passwordencoder-bcrypt"
                              },
                              {
                                    "text": "🟡 Role-based Access Control",
                                    "link": "/topics/spring-framework-spring-boot/role-based-access-control"
                              },
                              {
                                    "text": "🟡 Method Security (@PreAuthorize, @Secured)",
                                    "link": "/topics/spring-framework-spring-boot/method-security-preauthorize-secured"
                              },
                              {
                                    "text": "🟡 JWT Authentication",
                                    "link": "/topics/spring-framework-spring-boot/jwt-authentication"
                              },
                              {
                                    "text": "🔴 OAuth2 / OpenID Connect Grundlagen",
                                    "link": "/topics/spring-framework-spring-boot/oauth2-openid-connect-grundlagen"
                              },
                              {
                                    "text": "🟡 CSRF Protection",
                                    "link": "/topics/spring-framework-spring-boot/csrf-protection"
                              },
                              {
                                    "text": "🟡 CORS & Security",
                                    "link": "/topics/spring-framework-spring-boot/cors-security"
                              },
                              {
                                    "text": "🟡 Spring Security mit Spring Boot 3.x Konfiguration",
                                    "link": "/topics/spring-framework-spring-boot/spring-security-mit-spring-boot-3-x-konfiguration"
                              }
                        ]
                  },
                  {
                        "text": "Spring Cloud / Microservices (Überblick)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "🔴 Service Discovery (Eureka)",
                                    "link": "/topics/spring-framework-spring-boot/service-discovery-eureka"
                              },
                              {
                                    "text": "🔴 API Gateway (Spring Cloud Gateway)",
                                    "link": "/topics/spring-framework-spring-boot/api-gateway-spring-cloud-gateway"
                              },
                              {
                                    "text": "🔴 Config Server",
                                    "link": "/topics/spring-framework-spring-boot/config-server"
                              },
                              {
                                    "text": "🔴 Circuit Breaker (Resilience4j)",
                                    "link": "/topics/spring-framework-spring-boot/circuit-breaker-resilience4j"
                              },
                              {
                                    "text": "🔴 Load Balancing",
                                    "link": "/topics/spring-framework-spring-boot/load-balancing"
                              },
                              {
                                    "text": "🔴 Distributed Tracing (Micrometer Tracing, Zipkin)",
                                    "link": "/topics/spring-framework-spring-boot/distributed-tracing-micrometer-tracing-zipkin"
                              },
                              {
                                    "text": "🟡 Service-to-Service Communication (RestClient, WebClient, OpenFeign)",
                                    "link": "/topics/spring-framework-spring-boot/service-to-service-communication-restclient-webclient-openfeign"
                              }
                        ]
                  }
            ]
      },
      {
            "text": "Datenbanken & SQL",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟢 SQL Grundlagen (SELECT, INSERT, UPDATE, DELETE)",
                        "link": "/topics/datenbanken-sql/sql-grundlagen-select-insert-update-delete"
                  },
                  {
                        "text": "🟢 JOINs (INNER, LEFT, RIGHT, FULL, CROSS)",
                        "link": "/topics/datenbanken-sql/joins-inner-left-right-full-cross"
                  },
                  {
                        "text": "🟡 GROUP BY & HAVING",
                        "link": "/topics/datenbanken-sql/group-by-having"
                  },
                  {
                        "text": "🟡 Subqueries",
                        "link": "/topics/datenbanken-sql/subqueries"
                  },
                  {
                        "text": "🟢 Aggregatfunktionen (COUNT, SUM, AVG, MIN, MAX)",
                        "link": "/topics/datenbanken-sql/aggregatfunktionen-count-sum-avg-min-max"
                  },
                  {
                        "text": "🟡 UNION vs. UNION ALL",
                        "link": "/topics/datenbanken-sql/union-vs-union-all"
                  },
                  {
                        "text": "🟡 Indizes (B-Tree, Hash)",
                        "link": "/topics/datenbanken-sql/indizes-b-tree-hash"
                  },
                  {
                        "text": "🔴 Composite Indizes",
                        "link": "/topics/datenbanken-sql/composite-indizes"
                  },
                  {
                        "text": "🟡 Wann Indizes sinnvoll sind und wann nicht",
                        "link": "/topics/datenbanken-sql/wann-indizes-sinnvoll-sind-und-wann-nicht"
                  },
                  {
                        "text": "🔴 Query Execution Plan lesen (EXPLAIN)",
                        "link": "/topics/datenbanken-sql/query-execution-plan-lesen-explain"
                  },
                  {
                        "text": "🟡 Normalisierung (1NF, 2NF, 3NF)",
                        "link": "/topics/datenbanken-sql/normalisierung-1nf-2nf-3nf"
                  },
                  {
                        "text": "🔴 Denormalisierung — Wann sinnvoll?",
                        "link": "/topics/datenbanken-sql/denormalisierung-wann-sinnvoll"
                  },
                  {
                        "text": "🟡 ACID-Prinzipien",
                        "link": "/topics/datenbanken-sql/acid-prinzipien"
                  },
                  {
                        "text": "🟡 Transactions",
                        "link": "/topics/datenbanken-sql/transactions"
                  },
                  {
                        "text": "🔴 Isolation Levels in der Datenbank",
                        "link": "/topics/datenbanken-sql/isolation-levels-in-der-datenbank"
                  },
                  {
                        "text": "🟡 Views",
                        "link": "/topics/datenbanken-sql/views"
                  },
                  {
                        "text": "🟡 Stored Procedures",
                        "link": "/topics/datenbanken-sql/stored-procedures"
                  },
                  {
                        "text": "🟡 Triggers",
                        "link": "/topics/datenbanken-sql/triggers"
                  },
                  {
                        "text": "🔴 PostgreSQL-spezifische Features (JSONB, CTEs, Window Functions)",
                        "link": "/topics/datenbanken-sql/postgresql-spezifische-features-jsonb-ctes-window-functions"
                  },
                  {
                        "text": "🟡 Connection Pooling (HikariCP)",
                        "link": "/topics/datenbanken-sql/connection-pooling-hikaricp"
                  },
                  {
                        "text": "🟡 NoSQL Grundlagen (Document, Key-Value, Column-Family, Graph)",
                        "link": "/topics/datenbanken-sql/nosql-grundlagen-document-key-value-column-family-graph"
                  },
                  {
                        "text": "🟡 SQL vs. NoSQL — Wann was?",
                        "link": "/topics/datenbanken-sql/sql-vs-nosql-wann-was"
                  },
                  {
                        "text": "🟡 Redis (Caching, Session Store)",
                        "link": "/topics/datenbanken-sql/redis-caching-session-store"
                  },
                  {
                        "text": "🟡 MongoDB Grundlagen (optional)",
                        "link": "/topics/datenbanken-sql/mongodb-grundlagen-optional"
                  }
            ]
      },
      {
            "text": "Architektur",
            "collapsed": true,
            "items": [
                  {
                        "text": "Software-Architektur Grundlagen",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "🟡 Monolith vs. Microservices",
                                    "link": "/topics/architektur/monolith-vs-microservices"
                              },
                              {
                                    "text": "🟡 Vor- und Nachteile von Microservices",
                                    "link": "/topics/architektur/vor-und-nachteile-von-microservices"
                              },
                              {
                                    "text": "🟡 Wann Monolith, wann Microservices?",
                                    "link": "/topics/architektur/wann-monolith-wann-microservices"
                              },
                              {
                                    "text": "🔴 Modularer Monolith",
                                    "link": "/topics/architektur/modularer-monolith"
                              },
                              {
                                    "text": "🔴 Hexagonale Architektur (Ports & Adapters)",
                                    "link": "/topics/architektur/hexagonale-architektur-ports-adapters"
                              },
                              {
                                    "text": "🔴 Clean Architecture",
                                    "link": "/topics/architektur/clean-architecture"
                              },
                              {
                                    "text": "🔴 Onion Architecture",
                                    "link": "/topics/architektur/onion-architecture"
                              },
                              {
                                    "text": "🟢 Layered Architecture (Controller → Service → Repository)",
                                    "link": "/topics/architektur/layered-architecture-controller-service-repository"
                              },
                              {
                                    "text": "🔴 Domain-Driven Design (DDD) Grundlagen",
                                    "link": "/topics/architektur/domain-driven-design-ddd-grundlagen"
                              },
                              {
                                    "text": "🔴 Bounded Context",
                                    "link": "/topics/architektur/bounded-context"
                              },
                              {
                                    "text": "🔴 Aggregate",
                                    "link": "/topics/architektur/aggregate"
                              },
                              {
                                    "text": "🔴 Entity vs. Value Object",
                                    "link": "/topics/architektur/entity-vs-value-object"
                              },
                              {
                                    "text": "🔴 Domain Events",
                                    "link": "/topics/architektur/domain-events"
                              },
                              {
                                    "text": "🟡 Ubiquitous Language",
                                    "link": "/topics/architektur/ubiquitous-language"
                              },
                              {
                                    "text": "🔴 Event-Driven Architecture",
                                    "link": "/topics/architektur/event-driven-architecture"
                              },
                              {
                                    "text": "🔴 Event Sourcing",
                                    "link": "/topics/architektur/event-sourcing"
                              },
                              {
                                    "text": "🔴 CQRS (Command Query Responsibility Segregation)",
                                    "link": "/topics/architektur/cqrs-command-query-responsibility-segregation"
                              },
                              {
                                    "text": "🟡 Synchrone vs. Asynchrone Kommunikation",
                                    "link": "/topics/architektur/synchrone-vs-asynchrone-kommunikation"
                              },
                              {
                                    "text": "🟡 REST vs. gRPC vs. GraphQL",
                                    "link": "/topics/architektur/rest-vs-grpc-vs-graphql"
                              },
                              {
                                    "text": "🔴 API Gateway Pattern",
                                    "link": "/topics/architektur/api-gateway-pattern"
                              },
                              {
                                    "text": "🔴 Backend for Frontend (BFF) Pattern",
                                    "link": "/topics/architektur/backend-for-frontend-bff-pattern"
                              },
                              {
                                    "text": "🔴 Strangler Fig Pattern (Migration)",
                                    "link": "/topics/architektur/strangler-fig-pattern-migration"
                              },
                              {
                                    "text": "🔴 Sidecar Pattern",
                                    "link": "/topics/architektur/sidecar-pattern"
                              },
                              {
                                    "text": "🟡 12-Factor App",
                                    "link": "/topics/architektur/12-factor-app"
                              }
                        ]
                  },
                  {
                        "text": "Message Broker / Kafka",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "🟡 Warum Message Broker?",
                                    "link": "/topics/architektur/warum-message-broker"
                              },
                              {
                                    "text": "🟡 Kafka Grundlagen",
                                    "link": "/topics/architektur/kafka-grundlagen"
                              },
                              {
                                    "text": "🟡 Kafka Topics",
                                    "link": "/topics/architektur/kafka-topics"
                              },
                              {
                                    "text": "🟡 Kafka Partitions",
                                    "link": "/topics/architektur/kafka-partitions"
                              },
                              {
                                    "text": "🟡 Kafka Consumer Groups",
                                    "link": "/topics/architektur/kafka-consumer-groups"
                              },
                              {
                                    "text": "🟡 Kafka Producers",
                                    "link": "/topics/architektur/kafka-producers"
                              },
                              {
                                    "text": "🔴 Kafka Offset Management",
                                    "link": "/topics/architektur/kafka-offset-management"
                              },
                              {
                                    "text": "🔴 At-least-once vs. At-most-once vs. Exactly-once Delivery",
                                    "link": "/topics/architektur/at-least-once-vs-at-most-once-vs-exactly-once-delivery"
                              },
                              {
                                    "text": "🟡 Kafka vs. RabbitMQ",
                                    "link": "/topics/architektur/kafka-vs-rabbitmq"
                              },
                              {
                                    "text": "🔴 Dead Letter Queue",
                                    "link": "/topics/architektur/dead-letter-queue"
                              },
                              {
                                    "text": "🔴 Event Schema Evolution (Avro, Schema Registry)",
                                    "link": "/topics/architektur/event-schema-evolution-avro-schema-registry"
                              },
                              {
                                    "text": "🔴 Kafka Connect",
                                    "link": "/topics/architektur/kafka-connect"
                              },
                              {
                                    "text": "🔴 Kafka Streams Grundlagen",
                                    "link": "/topics/architektur/kafka-streams-grundlagen"
                              },
                              {
                                    "text": "🔴 Idempotenz bei Message Processing",
                                    "link": "/topics/architektur/idempotenz-bei-message-processing"
                              },
                              {
                                    "text": "🔴 Ordering Guarantees in Kafka",
                                    "link": "/topics/architektur/ordering-guarantees-in-kafka"
                              },
                              {
                                    "text": "🟡 Spring Kafka (@KafkaListener, KafkaTemplate)",
                                    "link": "/topics/architektur/spring-kafka-kafkalistener-kafkatemplate"
                              },
                              {
                                    "text": "🔴 Backpressure",
                                    "link": "/topics/architektur/backpressure"
                              }
                        ]
                  },
                  {
                        "text": "Caching",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "🟢 Warum Caching?",
                                    "link": "/topics/architektur/warum-caching"
                              },
                              {
                                    "text": "🟡 Cache Strategien (Cache-Aside, Write-Through, Write-Behind)",
                                    "link": "/topics/architektur/cache-strategien-cache-aside-write-through-write-behind"
                              },
                              {
                                    "text": "🔴 Cache Invalidation",
                                    "link": "/topics/architektur/cache-invalidation"
                              },
                              {
                                    "text": "🟡 TTL (Time to Live)",
                                    "link": "/topics/architektur/ttl-time-to-live"
                              },
                              {
                                    "text": "🟡 Spring Cache Abstraction (@Cacheable, @CacheEvict)",
                                    "link": "/topics/architektur/spring-cache-abstraction-cacheable-cacheevict"
                              },
                              {
                                    "text": "🟡 Redis als Cache",
                                    "link": "/topics/architektur/redis-als-cache"
                              },
                              {
                                    "text": "🔴 Distributed Caching",
                                    "link": "/topics/architektur/distributed-caching"
                              },
                              {
                                    "text": "🔴 Cache Stampede / Thundering Herd",
                                    "link": "/topics/architektur/cache-stampede-thundering-herd"
                              }
                        ]
                  }
            ]
      },
      {
            "text": "API Design & Kommunikation",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟡 REST Prinzipien (Stateless, Uniform Interface, usw.)",
                        "link": "/topics/api-design-kommunikation/rest-prinzipien-stateless-uniform-interface-usw"
                  },
                  {
                        "text": "🟡 HTTP Methoden & Idempotenz",
                        "link": "/topics/api-design-kommunikation/http-methoden-idempotenz"
                  },
                  {
                        "text": "🟢 HTTP Statuscodes (2xx, 3xx, 4xx, 5xx) — Die wichtigsten kennen",
                        "link": "/topics/api-design-kommunikation/http-statuscodes-2xx-3xx-4xx-5xx-die-wichtigsten-kennen"
                  },
                  {
                        "text": "🟡 Request/Response Body Design",
                        "link": "/topics/api-design-kommunikation/request-response-body-design"
                  },
                  {
                        "text": "🟡 Error Response Design",
                        "link": "/topics/api-design-kommunikation/error-response-design"
                  },
                  {
                        "text": "🟡 API Dokumentation (OpenAPI / Swagger)",
                        "link": "/topics/api-design-kommunikation/api-dokumentation-openapi-swagger"
                  },
                  {
                        "text": "🟡 API Rate Limiting",
                        "link": "/topics/api-design-kommunikation/api-rate-limiting"
                  },
                  {
                        "text": "🟡 API Authentication (API Keys, OAuth2, JWT)",
                        "link": "/topics/api-design-kommunikation/api-authentication-api-keys-oauth2-jwt"
                  },
                  {
                        "text": "🟡 GraphQL Grundlagen",
                        "link": "/topics/api-design-kommunikation/graphql-grundlagen"
                  },
                  {
                        "text": "🔴 gRPC Grundlagen",
                        "link": "/topics/api-design-kommunikation/grpc-grundlagen"
                  },
                  {
                        "text": "🟡 WebSockets",
                        "link": "/topics/api-design-kommunikation/websockets"
                  },
                  {
                        "text": "🟡 Server-Sent Events (SSE)",
                        "link": "/topics/api-design-kommunikation/server-sent-events-sse"
                  },
                  {
                        "text": "🟡 Webhooks",
                        "link": "/topics/api-design-kommunikation/webhooks"
                  },
                  {
                        "text": "🔴 Idempotency Keys",
                        "link": "/topics/api-design-kommunikation/idempotency-keys"
                  },
                  {
                        "text": "🔴 API Backward Compatibility",
                        "link": "/topics/api-design-kommunikation/api-backward-compatibility"
                  },
                  {
                        "text": "🟢 Semantic Versioning",
                        "link": "/topics/api-design-kommunikation/semantic-versioning"
                  }
            ]
      },
      {
            "text": "Build Tools & Dependency Management",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟢 Maven Grundlagen",
                        "link": "/topics/build-tools-dependency-management/maven-grundlagen"
                  },
                  {
                        "text": "🟡 Maven Lifecycle (clean, compile, test, package, install, deploy)",
                        "link": "/topics/build-tools-dependency-management/maven-lifecycle-clean-compile-test-package-install-deploy"
                  },
                  {
                        "text": "🟢 pom.xml Struktur",
                        "link": "/topics/build-tools-dependency-management/pom-xml-struktur"
                  },
                  {
                        "text": "🟡 Maven Dependency Scopes (compile, test, runtime, provided)",
                        "link": "/topics/build-tools-dependency-management/maven-dependency-scopes-compile-test-runtime-provided"
                  },
                  {
                        "text": "🟡 Maven Profiles",
                        "link": "/topics/build-tools-dependency-management/maven-profiles"
                  },
                  {
                        "text": "🔴 Maven Multi-Module Projects",
                        "link": "/topics/build-tools-dependency-management/maven-multi-module-projects"
                  },
                  {
                        "text": "🟡 Gradle Grundlagen",
                        "link": "/topics/build-tools-dependency-management/gradle-grundlagen"
                  },
                  {
                        "text": "🟡 Gradle vs. Maven",
                        "link": "/topics/build-tools-dependency-management/gradle-vs-maven"
                  },
                  {
                        "text": "🔴 Dependency Conflicts lösen",
                        "link": "/topics/build-tools-dependency-management/dependency-conflicts-loesen"
                  },
                  {
                        "text": "🟡 BOM (Bill of Materials)",
                        "link": "/topics/build-tools-dependency-management/bom-bill-of-materials"
                  },
                  {
                        "text": "🟢 Maven Wrapper / Gradle Wrapper",
                        "link": "/topics/build-tools-dependency-management/maven-wrapper-gradle-wrapper"
                  }
            ]
      },
      {
            "text": "Versionskontrolle — Git",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟢 git init, clone, add, commit, push, pull",
                        "link": "/topics/versionskontrolle-git/git-init-clone-add-commit-push-pull"
                  },
                  {
                        "text": "🟢 Branching & Merging",
                        "link": "/topics/versionskontrolle-git/branching-merging"
                  },
                  {
                        "text": "🟡 Merge vs. Rebase",
                        "link": "/topics/versionskontrolle-git/merge-vs-rebase"
                  },
                  {
                        "text": "🟡 Git Flow vs. Trunk-Based Development",
                        "link": "/topics/versionskontrolle-git/git-flow-vs-trunk-based-development"
                  },
                  {
                        "text": "🟢 Feature Branches",
                        "link": "/topics/versionskontrolle-git/feature-branches"
                  },
                  {
                        "text": "🟢 Pull Requests / Merge Requests",
                        "link": "/topics/versionskontrolle-git/pull-requests-merge-requests"
                  },
                  {
                        "text": "🟡 Code Review Best Practices",
                        "link": "/topics/versionskontrolle-git/code-review-best-practices"
                  },
                  {
                        "text": "🟡 Cherry-Pick",
                        "link": "/topics/versionskontrolle-git/cherry-pick"
                  },
                  {
                        "text": "🟢 Stash",
                        "link": "/topics/versionskontrolle-git/stash"
                  },
                  {
                        "text": "🟡 Interactive Rebase",
                        "link": "/topics/versionskontrolle-git/interactive-rebase"
                  },
                  {
                        "text": "🔴 Git Bisect",
                        "link": "/topics/versionskontrolle-git/git-bisect"
                  },
                  {
                        "text": "🟢 .gitignore",
                        "link": "/topics/versionskontrolle-git/gitignore"
                  },
                  {
                        "text": "🟡 Conventional Commits",
                        "link": "/topics/versionskontrolle-git/conventional-commits"
                  },
                  {
                        "text": "🟡 Semantic Versioning mit Git Tags",
                        "link": "/topics/versionskontrolle-git/semantic-versioning-mit-git-tags"
                  },
                  {
                        "text": "🟡 Merge Conflicts lösen",
                        "link": "/topics/versionskontrolle-git/merge-conflicts-loesen"
                  },
                  {
                        "text": "🟡 Squash Commits",
                        "link": "/topics/versionskontrolle-git/squash-commits"
                  }
            ]
      },
      {
            "text": "CI/CD & DevOps",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟢 Was ist CI/CD?",
                        "link": "/topics/ci-cd-devops/was-ist-ci-cd"
                  },
                  {
                        "text": "🟡 Build Pipeline Grundlagen",
                        "link": "/topics/ci-cd-devops/build-pipeline-grundlagen"
                  },
                  {
                        "text": "🟡 GitHub Actions Grundlagen",
                        "link": "/topics/ci-cd-devops/github-actions-grundlagen"
                  },
                  {
                        "text": "🟡 GitLab CI Grundlagen",
                        "link": "/topics/ci-cd-devops/gitlab-ci-grundlagen"
                  },
                  {
                        "text": "🟡 Jenkins Grundlagen (optional)",
                        "link": "/topics/ci-cd-devops/jenkins-grundlagen-optional"
                  },
                  {
                        "text": "🟡 Pipeline Stages (Build, Test, Lint, Deploy)",
                        "link": "/topics/ci-cd-devops/pipeline-stages-build-test-lint-deploy"
                  },
                  {
                        "text": "🟡 Automatisierte Tests in der Pipeline",
                        "link": "/topics/ci-cd-devops/automatisierte-tests-in-der-pipeline"
                  },
                  {
                        "text": "🟡 Static Code Analysis (SonarQube, Checkstyle, SpotBugs)",
                        "link": "/topics/ci-cd-devops/static-code-analysis-sonarqube-checkstyle-spotbugs"
                  },
                  {
                        "text": "🟡 Code Quality Gates",
                        "link": "/topics/ci-cd-devops/code-quality-gates"
                  },
                  {
                        "text": "🔴 Deployment Strategien (Blue-Green, Canary, Rolling)",
                        "link": "/topics/ci-cd-devops/deployment-strategien-blue-green-canary-rolling"
                  },
                  {
                        "text": "🔴 Infrastructure as Code Grundlagen",
                        "link": "/topics/ci-cd-devops/infrastructure-as-code-grundlagen"
                  },
                  {
                        "text": "🟡 Environment Variables & Secrets Management",
                        "link": "/topics/ci-cd-devops/environment-variables-secrets-management"
                  }
            ]
      },
      {
            "text": "Docker & Containerisierung",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟢 Docker Grundlagen",
                        "link": "/topics/docker-containerisierung/docker-grundlagen"
                  },
                  {
                        "text": "🟡 Dockerfile schreiben",
                        "link": "/topics/docker-containerisierung/dockerfile-schreiben"
                  },
                  {
                        "text": "🟡 Docker Images (Base Image, Layer, Cache)",
                        "link": "/topics/docker-containerisierung/docker-images-base-image-layer-cache"
                  },
                  {
                        "text": "🟡 Multi-Stage Builds",
                        "link": "/topics/docker-containerisierung/multi-stage-builds"
                  },
                  {
                        "text": "🟡 Docker Compose",
                        "link": "/topics/docker-containerisierung/docker-compose"
                  },
                  {
                        "text": "🔴 Docker Networking",
                        "link": "/topics/docker-containerisierung/docker-networking"
                  },
                  {
                        "text": "🟡 Docker Volumes",
                        "link": "/topics/docker-containerisierung/docker-volumes"
                  },
                  {
                        "text": "🟢 Container vs. VM",
                        "link": "/topics/docker-containerisierung/container-vs-vm"
                  },
                  {
                        "text": "🟡 Docker Best Practices (kleine Images, non-root User)",
                        "link": "/topics/docker-containerisierung/docker-best-practices-kleine-images-non-root-user"
                  },
                  {
                        "text": "🟡 Container Registries (Docker Hub, GHCR)",
                        "link": "/topics/docker-containerisierung/container-registries-docker-hub-ghcr"
                  },
                  {
                        "text": "🟡 Health Checks in Docker",
                        "link": "/topics/docker-containerisierung/health-checks-in-docker"
                  },
                  {
                        "text": "🟢 .dockerignore",
                        "link": "/topics/docker-containerisierung/dockerignore"
                  }
            ]
      },
      {
            "text": "Kubernetes (Grundlagen)",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟡 Warum Kubernetes?",
                        "link": "/topics/kubernetes-grundlagen/warum-kubernetes"
                  },
                  {
                        "text": "🟡 Pods",
                        "link": "/topics/kubernetes-grundlagen/pods"
                  },
                  {
                        "text": "🟡 Deployments",
                        "link": "/topics/kubernetes-grundlagen/deployments"
                  },
                  {
                        "text": "🔴 Services (ClusterIP, NodePort, LoadBalancer)",
                        "link": "/topics/kubernetes-grundlagen/services-clusterip-nodeport-loadbalancer"
                  },
                  {
                        "text": "🟡 ConfigMaps & Secrets",
                        "link": "/topics/kubernetes-grundlagen/configmaps-secrets"
                  },
                  {
                        "text": "🟡 Namespaces",
                        "link": "/topics/kubernetes-grundlagen/namespaces"
                  },
                  {
                        "text": "🔴 Ingress",
                        "link": "/topics/kubernetes-grundlagen/ingress"
                  },
                  {
                        "text": "🟡 Liveness & Readiness Probes",
                        "link": "/topics/kubernetes-grundlagen/liveness-readiness-probes"
                  },
                  {
                        "text": "🔴 Horizontal Pod Autoscaler",
                        "link": "/topics/kubernetes-grundlagen/horizontal-pod-autoscaler"
                  },
                  {
                        "text": "🔴 Helm Charts Grundlagen",
                        "link": "/topics/kubernetes-grundlagen/helm-charts-grundlagen"
                  },
                  {
                        "text": "🟡 kubectl Grundbefehle",
                        "link": "/topics/kubernetes-grundlagen/kubectl-grundbefehle"
                  }
            ]
      },
      {
            "text": "Logging, Monitoring & Observability",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟡 Logging Best Practices",
                        "link": "/topics/logging-monitoring-observability/logging-best-practices"
                  },
                  {
                        "text": "🟢 Log Levels (TRACE, DEBUG, INFO, WARN, ERROR)",
                        "link": "/topics/logging-monitoring-observability/log-levels-trace-debug-info-warn-error"
                  },
                  {
                        "text": "🟡 Structured Logging (JSON Logs)",
                        "link": "/topics/logging-monitoring-observability/structured-logging-json-logs"
                  },
                  {
                        "text": "🟡 SLF4J & Logback Konfiguration",
                        "link": "/topics/logging-monitoring-observability/slf4j-logback-konfiguration"
                  },
                  {
                        "text": "🔴 MDC (Mapped Diagnostic Context)",
                        "link": "/topics/logging-monitoring-observability/mdc-mapped-diagnostic-context"
                  },
                  {
                        "text": "🔴 Correlation IDs",
                        "link": "/topics/logging-monitoring-observability/correlation-ids"
                  },
                  {
                        "text": "🔴 ELK Stack (Elasticsearch, Logstash, Kibana)",
                        "link": "/topics/logging-monitoring-observability/elk-stack-elasticsearch-logstash-kibana"
                  },
                  {
                        "text": "🔴 Prometheus & Grafana",
                        "link": "/topics/logging-monitoring-observability/prometheus-grafana"
                  },
                  {
                        "text": "🔴 Micrometer Metrics",
                        "link": "/topics/logging-monitoring-observability/micrometer-metrics"
                  },
                  {
                        "text": "🟡 Spring Boot Actuator Endpoints",
                        "link": "/topics/logging-monitoring-observability/spring-boot-actuator-endpoints"
                  },
                  {
                        "text": "🔴 Distributed Tracing (Zipkin, Jaeger)",
                        "link": "/topics/logging-monitoring-observability/distributed-tracing-zipkin-jaeger"
                  },
                  {
                        "text": "🟡 Alerting Grundlagen",
                        "link": "/topics/logging-monitoring-observability/alerting-grundlagen"
                  },
                  {
                        "text": "🟡 SLIs, SLOs, SLAs",
                        "link": "/topics/logging-monitoring-observability/slis-slos-slas"
                  }
            ]
      },
      {
            "text": "Security",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟡 OWASP Top 10",
                        "link": "/topics/security/owasp-top-10"
                  },
                  {
                        "text": "🟡 SQL Injection",
                        "link": "/topics/security/sql-injection"
                  },
                  {
                        "text": "🟡 Cross-Site Scripting (XSS)",
                        "link": "/topics/security/cross-site-scripting-xss"
                  },
                  {
                        "text": "🟡 Cross-Site Request Forgery (CSRF)",
                        "link": "/topics/security/cross-site-request-forgery-csrf"
                  },
                  {
                        "text": "🟢 Authentication vs. Authorization",
                        "link": "/topics/security/authentication-vs-authorization"
                  },
                  {
                        "text": "🟡 Hashing vs. Encryption",
                        "link": "/topics/security/hashing-vs-encryption"
                  },
                  {
                        "text": "🟡 Symmetric vs. Asymmetric Encryption",
                        "link": "/topics/security/symmetric-vs-asymmetric-encryption"
                  },
                  {
                        "text": "🟡 HTTPS / TLS",
                        "link": "/topics/security/https-tls"
                  },
                  {
                        "text": "🟡 JWT Aufbau & Validierung",
                        "link": "/topics/security/jwt-aufbau-validierung"
                  },
                  {
                        "text": "🔴 OAuth2 Flows (Authorization Code, Client Credentials)",
                        "link": "/topics/security/oauth2-flows-authorization-code-client-credentials"
                  },
                  {
                        "text": "🟡 API Security Best Practices",
                        "link": "/topics/security/api-security-best-practices"
                  },
                  {
                        "text": "🟡 Secrets Management",
                        "link": "/topics/security/secrets-management"
                  },
                  {
                        "text": "🟡 Principle of Least Privilege",
                        "link": "/topics/security/principle-of-least-privilege"
                  },
                  {
                        "text": "🟡 Input Validation & Sanitization",
                        "link": "/topics/security/input-validation-sanitization"
                  },
                  {
                        "text": "🟡 Dependency Vulnerability Scanning (OWASP Dependency Check, Snyk)",
                        "link": "/topics/security/dependency-vulnerability-scanning-owasp-dependency-check-snyk"
                  },
                  {
                        "text": "🟡 Rate Limiting & Throttling",
                        "link": "/topics/security/rate-limiting-throttling"
                  }
            ]
      },
      {
            "text": "Netzwerk & Protokolle (Grundlagen)",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟡 HTTP/1.1 vs. HTTP/2 vs. HTTP/3",
                        "link": "/topics/netzwerk-protokolle-grundlagen/http-1-1-vs-http-2-vs-http-3"
                  },
                  {
                        "text": "🟡 TCP vs. UDP",
                        "link": "/topics/netzwerk-protokolle-grundlagen/tcp-vs-udp"
                  },
                  {
                        "text": "🟢 DNS Grundlagen",
                        "link": "/topics/netzwerk-protokolle-grundlagen/dns-grundlagen"
                  },
                  {
                        "text": "🟢 IP-Adressen & Ports",
                        "link": "/topics/netzwerk-protokolle-grundlagen/ip-adressen-ports"
                  },
                  {
                        "text": "🟢 Request/Response Modell",
                        "link": "/topics/netzwerk-protokolle-grundlagen/request-response-modell"
                  },
                  {
                        "text": "🟡 Cookies & Sessions",
                        "link": "/topics/netzwerk-protokolle-grundlagen/cookies-sessions"
                  },
                  {
                        "text": "🟡 Headers (Content-Type, Authorization, Cache-Control)",
                        "link": "/topics/netzwerk-protokolle-grundlagen/headers-content-type-authorization-cache-control"
                  },
                  {
                        "text": "🟢 Status Codes verstehen (200, 201, 204, 301, 400, 401, 403, 404, 409, 500, 502, 503)",
                        "link": "/topics/netzwerk-protokolle-grundlagen/status-codes-verstehen-200-201-204-301-400-401-403-404-409-500-502-503"
                  },
                  {
                        "text": "🔴 SSL/TLS Handshake Grundlagen",
                        "link": "/topics/netzwerk-protokolle-grundlagen/ssl-tls-handshake-grundlagen"
                  },
                  {
                        "text": "🟡 Load Balancer Grundlagen",
                        "link": "/topics/netzwerk-protokolle-grundlagen/load-balancer-grundlagen"
                  },
                  {
                        "text": "🟡 Reverse Proxy (Nginx)",
                        "link": "/topics/netzwerk-protokolle-grundlagen/reverse-proxy-nginx"
                  },
                  {
                        "text": "🟡 CDN Grundlagen",
                        "link": "/topics/netzwerk-protokolle-grundlagen/cdn-grundlagen"
                  }
            ]
      },
      {
            "text": "Agile & Arbeitsweise",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟢 Scrum Grundlagen",
                        "link": "/topics/agile-arbeitsweise/scrum-grundlagen"
                  },
                  {
                        "text": "🟢 Sprint, Sprint Planning, Daily, Retro, Review",
                        "link": "/topics/agile-arbeitsweise/sprint-sprint-planning-daily-retro-review"
                  },
                  {
                        "text": "🟢 User Stories & Acceptance Criteria",
                        "link": "/topics/agile-arbeitsweise/user-stories-acceptance-criteria"
                  },
                  {
                        "text": "🟡 Story Points & Estimation",
                        "link": "/topics/agile-arbeitsweise/story-points-estimation"
                  },
                  {
                        "text": "🟢 Kanban Grundlagen",
                        "link": "/topics/agile-arbeitsweise/kanban-grundlagen"
                  },
                  {
                        "text": "🟢 Definition of Done",
                        "link": "/topics/agile-arbeitsweise/definition-of-done"
                  },
                  {
                        "text": "🟡 Definition of Ready",
                        "link": "/topics/agile-arbeitsweise/definition-of-ready"
                  },
                  {
                        "text": "🟡 Backlog Refinement",
                        "link": "/topics/agile-arbeitsweise/backlog-refinement"
                  },
                  {
                        "text": "🟢 Pair Programming",
                        "link": "/topics/agile-arbeitsweise/pair-programming"
                  },
                  {
                        "text": "🟡 Code Reviews — Worauf achten?",
                        "link": "/topics/agile-arbeitsweise/code-reviews-worauf-achten"
                  },
                  {
                        "text": "🟡 Technische Schuld (Tech Debt)",
                        "link": "/topics/agile-arbeitsweise/technische-schuld-tech-debt"
                  },
                  {
                        "text": "🔴 ADRs (Architecture Decision Records)",
                        "link": "/topics/agile-arbeitsweise/adrs-architecture-decision-records"
                  },
                  {
                        "text": "🟡 Trunk-Based Development vs. Git Flow",
                        "link": "/topics/agile-arbeitsweise/trunk-based-development-vs-git-flow"
                  },
                  {
                        "text": "🟡 Feature Flags",
                        "link": "/topics/agile-arbeitsweise/feature-flags"
                  },
                  {
                        "text": "🟢 Timeboxing",
                        "link": "/topics/agile-arbeitsweise/timeboxing"
                  }
            ]
      },
      {
            "text": "Interview-spezifische Soft Topics",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟢 Warum OOP?",
                        "link": "/topics/interview-spezifische-soft-topics/warum-oop"
                  },
                  {
                        "text": "🟢 Warum Java?",
                        "link": "/topics/interview-spezifische-soft-topics/warum-java"
                  },
                  {
                        "text": "🟡 Java vs. Kotlin",
                        "link": "/topics/interview-spezifische-soft-topics/java-vs-kotlin"
                  },
                  {
                        "text": "🟡 Java vs. C#",
                        "link": "/topics/interview-spezifische-soft-topics/java-vs-c"
                  },
                  {
                        "text": "🟡 Java vs. Python — Wann was?",
                        "link": "/topics/interview-spezifische-soft-topics/java-vs-python-wann-was"
                  },
                  {
                        "text": "🟢 Warum Spring Boot?",
                        "link": "/topics/interview-spezifische-soft-topics/warum-spring-boot"
                  },
                  {
                        "text": "🟡 Warum Microservices?",
                        "link": "/topics/interview-spezifische-soft-topics/warum-microservices"
                  },
                  {
                        "text": "🟢 Warum REST?",
                        "link": "/topics/interview-spezifische-soft-topics/warum-rest"
                  },
                  {
                        "text": "🟡 Warum Kafka?",
                        "link": "/topics/interview-spezifische-soft-topics/warum-kafka"
                  },
                  {
                        "text": "🟢 Warum Docker?",
                        "link": "/topics/interview-spezifische-soft-topics/warum-docker"
                  },
                  {
                        "text": "🟡 Warum Kubernetes?",
                        "link": "/topics/interview-spezifische-soft-topics/warum-kubernetes"
                  },
                  {
                        "text": "🟢 Warum CI/CD?",
                        "link": "/topics/interview-spezifische-soft-topics/warum-ci-cd"
                  },
                  {
                        "text": "🟢 Warum Testen?",
                        "link": "/topics/interview-spezifische-soft-topics/warum-testen"
                  },
                  {
                        "text": "🟢 Warum Clean Code?",
                        "link": "/topics/interview-spezifische-soft-topics/warum-clean-code"
                  },
                  {
                        "text": "🟡 Trade-offs erklären können",
                        "link": "/topics/interview-spezifische-soft-topics/trade-offs-erklaeren-koennen"
                  },
                  {
                        "text": "🟡 \"Es kommt drauf an\" — Und dann erklären worauf",
                        "link": "/topics/interview-spezifische-soft-topics/es-kommt-drauf-an-und-dann-erklaeren-worauf"
                  },
                  {
                        "text": "🟡 Eigene Projekte und Entscheidungen erklären können",
                        "link": "/topics/interview-spezifische-soft-topics/eigene-projekte-und-entscheidungen-erklaeren-koennen"
                  },
                  {
                        "text": "🟡 Technische Entscheidungen begründen können",
                        "link": "/topics/interview-spezifische-soft-topics/technische-entscheidungen-begruenden-koennen"
                  },
                  {
                        "text": "🟡 Komplexe Themen einfach erklären können",
                        "link": "/topics/interview-spezifische-soft-topics/komplexe-themen-einfach-erklaeren-koennen"
                  }
            ]
      },
      {
            "text": "Algorithmen & Datenstrukturen (Grundlagen)",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟡 Big-O Notation",
                        "link": "/topics/algorithmen-datenstrukturen-grundlagen/big-o-notation"
                  },
                  {
                        "text": "🟢 Arrays",
                        "link": "/topics/algorithmen-datenstrukturen-grundlagen/arrays"
                  },
                  {
                        "text": "🟡 Linked Lists",
                        "link": "/topics/algorithmen-datenstrukturen-grundlagen/linked-lists"
                  },
                  {
                        "text": "🟡 Stacks & Queues",
                        "link": "/topics/algorithmen-datenstrukturen-grundlagen/stacks-queues"
                  },
                  {
                        "text": "🟡 HashMaps / HashSets intern",
                        "link": "/topics/algorithmen-datenstrukturen-grundlagen/hashmaps-hashsets-intern"
                  },
                  {
                        "text": "🟡 Trees (Binary Tree, BST)",
                        "link": "/topics/algorithmen-datenstrukturen-grundlagen/trees-binary-tree-bst"
                  },
                  {
                        "text": "🔴 Graphs Grundlagen",
                        "link": "/topics/algorithmen-datenstrukturen-grundlagen/graphs-grundlagen"
                  },
                  {
                        "text": "🟡 Sorting (Bubble, Quick, Merge, Insertion)",
                        "link": "/topics/algorithmen-datenstrukturen-grundlagen/sorting-bubble-quick-merge-insertion"
                  },
                  {
                        "text": "🟡 Searching (Linear, Binary Search)",
                        "link": "/topics/algorithmen-datenstrukturen-grundlagen/searching-linear-binary-search"
                  },
                  {
                        "text": "🟡 Recursion",
                        "link": "/topics/algorithmen-datenstrukturen-grundlagen/recursion"
                  },
                  {
                        "text": "🟡 Two Pointer Technik",
                        "link": "/topics/algorithmen-datenstrukturen-grundlagen/two-pointer-technik"
                  },
                  {
                        "text": "🟡 Sliding Window",
                        "link": "/topics/algorithmen-datenstrukturen-grundlagen/sliding-window"
                  },
                  {
                        "text": "🔴 DFS / BFS",
                        "link": "/topics/algorithmen-datenstrukturen-grundlagen/dfs-bfs"
                  },
                  {
                        "text": "🟡 Wann welche Datenstruktur?",
                        "link": "/topics/algorithmen-datenstrukturen-grundlagen/wann-welche-datenstruktur"
                  }
            ]
      },
      {
            "text": "Java Ökosystem & Tooling",
            "collapsed": true,
            "items": [
                  {
                        "text": "🟢 IntelliJ IDEA Shortcuts & Productivity",
                        "link": "/topics/java-oekosystem-tooling/intellij-idea-shortcuts-productivity"
                  },
                  {
                        "text": "🟢 Debugging in IntelliJ",
                        "link": "/topics/java-oekosystem-tooling/debugging-in-intellij"
                  },
                  {
                        "text": "🟡 Remote Debugging",
                        "link": "/topics/java-oekosystem-tooling/remote-debugging"
                  },
                  {
                        "text": "🔴 Profiling (VisualVM, JFR, async-profiler)",
                        "link": "/topics/java-oekosystem-tooling/profiling-visualvm-jfr-async-profiler"
                  },
                  {
                        "text": "🔴 Thread Dumps lesen",
                        "link": "/topics/java-oekosystem-tooling/thread-dumps-lesen"
                  },
                  {
                        "text": "🔴 Heap Dumps analysieren",
                        "link": "/topics/java-oekosystem-tooling/heap-dumps-analysieren"
                  },
                  {
                        "text": "🟢 Lombok",
                        "link": "/topics/java-oekosystem-tooling/lombok"
                  },
                  {
                        "text": "🟡 MapStruct",
                        "link": "/topics/java-oekosystem-tooling/mapstruct"
                  },
                  {
                        "text": "🟡 Jackson (JSON Serialization/Deserialization)",
                        "link": "/topics/java-oekosystem-tooling/jackson-json-serialization-deserialization"
                  },
                  {
                        "text": "🟡 @JsonProperty, @JsonIgnore, @JsonFormat",
                        "link": "/topics/java-oekosystem-tooling/jsonproperty-jsonignore-jsonformat"
                  },
                  {
                        "text": "🟡 RestClient / WebClient / RestTemplate",
                        "link": "/topics/java-oekosystem-tooling/restclient-webclient-resttemplate"
                  },
                  {
                        "text": "🟡 Feign Client",
                        "link": "/topics/java-oekosystem-tooling/feign-client"
                  },
                  {
                        "text": "🔴 Micrometer",
                        "link": "/topics/java-oekosystem-tooling/micrometer"
                  },
                  {
                        "text": "🔴 Testcontainers",
                        "link": "/topics/java-oekosystem-tooling/testcontainers"
                  },
                  {
                        "text": "🔴 WireMock",
                        "link": "/topics/java-oekosystem-tooling/wiremock"
                  },
                  {
                        "text": "🔴 ArchUnit",
                        "link": "/topics/java-oekosystem-tooling/archunit"
                  },
                  {
                        "text": "🟡 Checkstyle / PMD / SpotBugs",
                        "link": "/topics/java-oekosystem-tooling/checkstyle-pmd-spotbugs"
                  },
                  {
                        "text": "🟡 SonarQube",
                        "link": "/topics/java-oekosystem-tooling/sonarqube"
                  }
            ]
      }
],
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
