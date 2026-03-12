---
outline: deep
---

# Service-to-Service Communication – RestClient, WebClient, OpenFeign

<div class="meta">
  <span class="difficulty medium">🟡 Mittel</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">12.03.2026</span>
</div>

---

## Zusammenfassung

> Service-to-Service Communication ist die Inter-Prozess-Kommunikation zwischen Microservices. RestClient, WebClient und OpenFeign sind drei unterschiedliche Ansätze, um HTTP-Requests zu anderen Services zu tätigen.

## Kernkonzept

**RestClient** (ab Spring 6.1) ist der neueste, synchrone HTTP-Client von Spring. Er ersetzt teilweise RestTemplate und bietet eine fluent API mit besserer Typsicherheit.

**WebClient** ist der reaktive, nicht-blockierende HTTP-Client für Project Reactor. Er eignet sich für **asynchrone** Kommunikation und hohen Durchsatz. Basiert auf Mono/Flux.

**OpenFeign** ist ein deklaratives HTTP-Client-Framework. Man schreibt einfach eine Interface-Definition und Feign generiert die Implementierung automatisch. **Simpel und elegant**, aber weniger flexibel als WebClient.

## Code-Beispiel

```java
// 1. RestClient (synchron, neu)
@Service
public class UserServiceRestClient {
    private final RestClient restClient;
    
    public UserServiceRestClient(RestClient.Builder builder) {
        this.restClient = builder.baseUrl("http://user-service").build();
    }
    
    public User getUser(Long id) {
        return restClient.get()
            .uri("/users/{id}", id)
            .retrieve()
            .body(User.class);
    }
}

// 2. WebClient (reaktiv, asynchron)
@Service
public class UserServiceWebClient {
    private final WebClient webClient;
    
    public UserServiceWebClient(WebClient.Builder builder) {
        this.webClient = builder.baseUrl("http://user-service").build();
    }
    
    public Mono<User> getUser(Long id) {
        return webClient.get()
            .uri("/users/{id}", id)
            .retrieve()
            .bodyToMono(User.class);
    }
}

// 3. OpenFeign (deklarativ)
@FeignClient(name = "user-service", url = "http://user-service")
public interface UserServiceClient {
    
    @GetMapping("/users/{id}")
    User getUser(@PathVariable Long id);
    
    @PostMapping("/users")
    User createUser(@RequestBody User user);
}

// Verwendung in Service:
@Service
public class OrderService {
    @Autowired
    private UserServiceClient userClient; // Implementierung wird generiert
    
    public Order createOrder(Long userId, Order order) {
        User user = userClient.getUser(userId);
        order.setUser(user);
        return saveOrder(order);
    }
}
```

## Wichtige Punkte

- **RestClient** = Synchron, blockierend, moderner Ersatz für RestTemplate
- **WebClient** = Asynchron, nicht-blockierend, für reaktive Apps essentiell
- **OpenFeign** = Deklarativ, Interface-basiert, Boilerplate-Code wird generiert
- **RestTemplate** sollte vermieden werden (deprecated), nutze RestClient oder WebClient stattdessen
- **Feign-Client** benötigt `@EnableFeignClients` in der Application-Klasse

## Klassische Fragen

### Wann nutze ich WebClient statt RestClient?

WebClient ist die Wahl für **nicht-blockierende, reaktive Anwendungen** mit hohem Durchsatz. RestClient ist ideal für **klassische, synchrone Services** ohne Reactive-Stack. WebClient gibt Mono/Flux zurück, RestClient gibt direkt das Objekt zurück.

---

### Wie funktioniert OpenFeign automatisch?

OpenFeign nutzt **Proxy-Pattern und Reflection**. Die Annotation `@FeignClient` wird von Spring verarbeitet, eine Implementierung des Interfaces wird zur Laufzeit erzeugt. Diese Proxy-Implementierung führt die HTTP-Calls durch und serialisiert/deserialisiert automatisch JSON.

---

### Kann OpenFeign Fehlerbehandlung (Fallback) machen?

Ja, über die **`fallback`** oder **`fallbackFactory`** Property. `fallback` zeigt auf eine Implementierung des Feign-Interface für Fehlerfall, `fallbackFactory` ist flexibler (erlaubt Exception-Zugriff). Requires Hystrix oder Resilience4j.

---

### Welcher Client ist am performantesten?

**WebClient** bei asynchronem Workload (Non-Blocking-IO). **RestClient** bei synchronen, sequentiellen Requests. OpenFeign hat ähnliche Performance wie RestClient, aber etwas Overhead durch Proxy-Generierung. Im Fehlerfall: Alle drei sind nah beieinander.

---

## Wusstest du schon?

**RestTemplate war 20 Jahre lang der Standard** und wird seit Spring 6.1 offiziell zugunsten von RestClient verabschiedet. OpenFeign wurde ursprünglich von Netflix entwickelt und ist heute unabhängig. Es gibt Entwickler, die seit 2016 nur noch WebClient nutzen und behaupten, RestTemplate existiert gar nicht mehr — technisch haben sie recht! 😄

<style>
.meta {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
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
  background: #1e3a5f;
  color: #93c5fd;
}
.date {
  background: #2a2a2a;
  color: #aaa;
  font-size: 0.8em;
}
</style>
