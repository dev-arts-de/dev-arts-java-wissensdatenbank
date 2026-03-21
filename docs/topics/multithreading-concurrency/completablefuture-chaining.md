---
outline: deep
---

# CompletableFuture – thenApply, thenCompose, thenCombine

<div class="meta">
  <span class="difficulty medium">🟡 Mittel</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">21.03.2026</span>
</div>

---

## Zusammenfassung

> **CompletableFuture** ist eine Abstraktion für asynchrone Operationen, die verkettbar sind. Mit `thenApply`, `thenCompose` und `thenCombine` lassen sich mehrere asynchrone Schritte elegant zusammensetzen, ohne explizit auf Threads zu warten.

## Kernkonzept

**`thenApply(Function)`**: Transformiert das Ergebnis einer CompletableFuture synchron in einen neuen Wert. Die Transformation läuft im gleichen (oder einem beliebigen) Thread ab. Das Ergebnis wird automatisch in eine neue CompletableFuture eingewickelt.

**`thenCompose(Function)`**: Verkettung von **abhängigen** asynchronen Operationen. Der Callback erhält das vorherige Ergebnis und gibt selbst eine neue CompletableFuture zurück. Es findet automatisches Flattening statt (keine verschachtelte CompletableFuture).

**`thenCombine(other, BiFunction)`**: Kombiniert zwei **unabhängige** CompletableFutures. Beide laufen parallel, dann wird die BiFunction mit beiden Ergebnissen aufgerufen. Wartet bis beide fertig sind.

## Code-Beispiel

```java
// thenApply: Einfache Transformation
CompletableFuture<Integer> cf1 = CompletableFuture
    .completedFuture(5)
    .thenApply(x -> x * 2)      // 5 → 10
    .thenApply(x -> x + 3);     // 10 → 13

// thenCompose: Abhängige asynchrone Operationen
CompletableFuture<String> cf2 = getUserById(1)
    .thenCompose(user -> getOrdersForUser(user.id()))
    .thenCompose(orders -> procesOrders(orders));

// thenCombine: Unabhängige Operationen parallel
CompletableFuture<String> user = fetchUser();
CompletableFuture<List<Order>> orders = fetchOrders();

CompletableFuture<String> result = user.thenCombine(orders, 
    (u, o) -> u.name() + " hat " + o.size() + " Bestellungen");

// thenAccept: Konsumiert Ergebnis, gibt Void zurück
cf1.thenAccept(value -> System.out.println("Wert: " + value));

// thenRun: Führt Code aus, ignoriert Ergebnis
cf1.thenRun(() -> System.out.println("Fertig!"));
```

## Wichtige Punkte

- **`thenApply`** ≈ `map()` bei Streams — 1:1 Transformation, synchron
- **`thenCompose`** ≈ `flatMap()` bei Streams — verhindert `CompletableFuture<CompletableFuture<T>>`
- **`thenCombine`** verbindet **zwei parallele Prozesse** erst am Ende
- **Async-Varianten** (`thenApplyAsync`, `thenComposeAsync`): Callback läuft in separatem Thread (ForkJoinPool)
- **Exception-Handling** mit `.exceptionally()` oder `.handle()` vor der nächsten Verkettung einfügen

## Klassische Fragen

### Wann nutze ich `thenCompose` statt `thenApply`?

Wenn die Transformation selbst eine **asynchrone Operation** ist (CompletableFuture zurückgibt). `thenApply` würde `CompletableFuture<CompletableFuture<T>>` erzeugen. `thenCompose` flacht das automatisch ab.

---

### Was ist der Unterschied zwischen `thenApply` und `thenApplyAsync`?

**`thenApply`**: Code läuft im **aufrufenden Thread** (oder dem Thread, der das Future vollendet). **`thenApplyAsync`**: Code läuft garantiert in einem **Pooled Worker Thread** (Default: ForkJoinPool). Async ist teurer, aber gibt Thread frei.

---

### Kann ich `thenCombine` mit mehr als 2 Futures nutzen?

Nein, direkt nicht. Entweder mehrfach verschachteln: `cf1.thenCombine(cf2, ...).thenCombine(cf3, ...)` oder `CompletableFuture.allOf()` für alle, dann manuell extrahieren.

---

### Warum gibt `thenCompose` nicht `CompletableFuture<CompletableFuture<T>>`?

Das Framework **unwrapped automatisch** (Monadic bind/flatMap-Semantik). Es würde sonst zu Verschachtelung und unbequemem Code führen.

---

## Wusstest du schon?

**CompletableFuture** war ursprünglich in Java 8 als "experimentelle Idee" gedacht — Entwickler wollten endlich ein elegantes Async-Pattern ohne Callback-Hölle. Heute ist es der Standard für viele REST-Clients und WebFrameworks. Fun Fact: Guava's `Futures` und Scala's `Future` existierten vorher, aber CompletableFuture hat sich durchgesetzt! 🚀

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
