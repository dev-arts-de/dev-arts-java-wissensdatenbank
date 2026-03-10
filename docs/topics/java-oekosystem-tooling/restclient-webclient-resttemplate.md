---
outline: deep
---

# RestClient, WebClient & RestTemplate

<div class="meta">
  <span class="difficulty medium">🟡 Mittel</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">10.03.2026</span>
</div>

---

## Zusammenfassung

> RestTemplate, WebClient und RestClient sind HTTP-Clients in Java zum Aufrufen von REST-APIs. Sie unterscheiden sich in ihrer **Architektur, Performance und Async-Unterstützung**.

## Kernkonzept

**RestTemplate** ist der klassische, synchrone HTTP-Client von Spring. Er blockiert den Thread bis die Antwort kommt und wurde lange Zeit als Standard verwendet. Einfach zu verstehen, aber nicht ideal für hochlastige Systeme.

**WebClient** ist der moderne, reactive Alternative basierend auf Project Reactor. Er nutzt **nicht-blockierende I/O**, verarbeitet mehrere Anfragen mit wenigen Threads und ist die Zukunft von Spring. Ideal für Microservices und asynchrone Szenarien.

**RestClient** (neu in Spring 6.1) ist ein synchroner Client mit modernem, fluent API-Design. Er kombiniert die Einfachheit von RestTemplate mit besserer Lesbarkeit – **keine Reactive Dependencies nötig**.

## Code-Beispiel

```java
// RestTemplate (klassisch, synchrone Blocking-API)
RestTemplate restTemplate = new RestTemplate();
String response = restTemplate.getForObject(
    "https://api.example.com/users/1", 
    String.class
);

// WebClient (modern, non-blocking, reactive)
WebClient webClient = WebClient.create("https://api.example.com");
Mono<String> response = webClient.get()
    .uri("/users/{id}", 1)
    .retrieve()
    .bodyToMono(String.class);

// RestClient (neu in Spring 6.1, synchron mit moderner API)
RestClient restClient = RestClient.create();
String response = restClient.get()
    .uri("https://api.example.com/users/{id}", 1)
    .retrieve()
    .body(String.class);
```

## Wichtige Punkte

- **RestTemplate**: Synchron, blockierend, deprecated für neue Projekte – nur noch Wartung
- **WebClient**: Asynchron/Reactive, non-blocking, benötigt Spring WebFlux, für hochlastige Systeme
- **RestClient**: Synchron mit modernem API-Design, seit Spring 6.1, **beste Wahl für neue synchrone APIs**
- **ThreadPool-Problem**: RestTemplate blockiert Threads; WebClient nutzt wenige Threads effizient
- **Error Handling**: Unterschiedliche Mechanismen – RestTemplate wirft Exceptions, WebClient/RestClient nutzen onError-Callbacks

## Klassische Fragen

### Wann sollte ich WebClient statt RestTemplate nehmen?

Immer, wenn du **nicht-blockierende I/O** brauchst oder mit Spring WebFlux arbeitest. WebClient ist die einzige Wahl für reactive Stacks, da RestTemplate blockiert und den Reactor-Thread würgt.

---

### Ist RestClient ein direkter RestTemplate-Ersatz?

Ja und nein. RestClient hat eine bessere API und ist moderner, bleibt aber **synchron und blockierend**. Wenn Blocking kein Problem ist, ist RestClient die bessere Wahl. Für Reactive-Stacks brauchst du trotzdem WebClient.

---

### Kann ich WebClient in einem synchronen Spring-Boot-Service nutzen?

Ja, aber es ist **kontraproduktiv**. WebClient ist für Reactive-Stacks optimiert. In synchronen Services verschwendest du dessen Vorteile. Nutze hier RestClient oder RestTemplate.

---

### Was kostet WebClient an Performance?

Die **non-blocking Architektur** ist deutlich performanter bei vielen gleichzeitigen Anfragen. Ein Thread kann 1000+ Requests verarbeiten, während RestTemplate 1 Thread = 1 aktive Request blockiert. Bei niedriger Last ist der Unterschied minimal.

---

### Kann ich Exception-Handling mit RestClient wie bei RestTemplate machen?

Nein. RestTemplate wirft Exceptions (z.B. HttpClientErrorException), RestClient nutzt `onStatus()` Callbacks. Das ist **bewusst andersartig** und fördert besseres Error-Handling.

---

## Wusstest du schon?

**RestTemplate wurde 2009 mit Spring 3.0 eingeführt** und war 15 Jahre lang der Standard. Spring hat es **offiziell 2022 als deprecated** markiert – nicht wegen Bugs, sondern weil die Reactive-Welt einfach besser ist. RestClient ist Springs Angebot an alle, die nicht reactive gehen wollen. Ein bisschen wie der letzte Ehrenrettungs-Vollzug für Blocking-APIs! 😄

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
