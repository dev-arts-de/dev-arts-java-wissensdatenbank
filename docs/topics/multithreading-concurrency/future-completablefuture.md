---
outline: deep
---

# Future & CompletableFuture

<div class="meta">
  <span class="difficulty medium">🟡 Mittel</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">23.03.2026</span>
</div>

---

## Zusammenfassung

> **Future** und **CompletableFuture** sind Abstraktionen für asynchrone Berechnungen. Sie ermöglichen es, ein Ergebnis zu repräsentieren, das erst in der Zukunft verfügbar ist, ohne den aktuellen Thread zu blockieren.

## Kernkonzept

**Future** ist eine ältere API, die ein Ergebnis einer asynchronen Berechnung repräsentiert. Man kann damit abfragen, ob die Berechnung fertig ist (`isDone()`), oder blockierend auf das Ergebnis warten (`get()`). Das Problem: **Futures sind passiv** — man kann damit wenig anfangen außer warten.

**CompletableFuture** (seit Java 8) ist die moderne Alternative. Sie ist ein **Promise**, das aktiv gestaltet werden kann: Man kann Callbacks registrieren (`thenApply()`, `thenAccept()`), Futures verketten, Fehlerbehandlung hinzufügen und die Berechnung aktiv abschließen. **CompletableFuture ist kombinierbar und komponierbar** — ideal für komplexe asynchrone Workflows.

**Der Hauptunterschied**: Future = "Warte auf Ergebnis", CompletableFuture = "Gestalte den Ablauf aktiv".

## Code-Beispiel

```java
// ❌ Future (alt, passiv)
ExecutorService executor = Executors.newFixedThreadPool(2);
Future<String> future = executor.submit(() -> {
    Thread.sleep(2000);
    return "Ergebnis";
});
// Blockierend warten
String result = future.get(); // Blockiert bis zu 2 Sekunden

// ✅ CompletableFuture (modern, aktiv)
CompletableFuture<String> cf = CompletableFuture.supplyAsync(() -> {
    try { Thread.sleep(2000); } catch (InterruptedException e) {}
    return "Ergebnis";
});

// Non-blocking mit Callback
cf.thenApply(result -> result.toUpperCase())
  .thenAccept(upper -> System.out.println(upper)) // "ERGEBNIS"
  .exceptionally(ex -> {
      System.out.println("Fehler: " + ex.getMessage());
      return null;
  });

// Mehrere Futures kombinieren
CompletableFuture<String> cf1 = CompletableFuture.supplyAsync(() -> "Hello");
CompletableFuture<String> cf2 = CompletableFuture.supplyAsync(() -> "World");

CompletableFuture.allOf(cf1, cf2) // Alle müssen fertig sein
  .thenRun(() -> System.out.println("Alle fertig!"));
```

## Wichtige Punkte

- **Future**: Passiv, blockierend mit `get()`, begrenzte Kombinierbarkeit
- **CompletableFuture**: Aktiv gestaltbar, non-blocking Callbacks, stark kombinierbar
- **Threat Pool**: `supplyAsync()` und `thenApply()` nutzen standardmäßig `ForkJoinPool.commonPool()`
- **Verkettung**: `thenApply()` (Transformation), `thenAccept()` (Seiteneffekt), `thenCompose()` (verschachtelte Futures)
- **Fehlerbehandlung**: `exceptionally()`, `handle()`, `whenComplete()` sind wichtig, um Exceptions abzufangen

## Klassische Fragen

### Was ist der Unterschied zwischen `thenApply()` und `thenCompose()`?

`thenApply()` transformiert das Ergebnis (T → U), `thenCompose()` ist für verschachtelte CompletableFutures (T → CompletableFuture<U>). `thenCompose()` flacht automatisch ab, `thenApply()` würde `CompletableFuture<CompletableFuture<U>>` erzeugen.

---

### Warum ist `future.get()` problematisch?

`get()` ist **blockierend** — der Thread wartet aktiv und kann andere Aufgaben nicht ausführen. Das widerspricht dem Sinn von Async-Programmierung. Besser: Callbacks mit `thenAccept()` verwenden.

---

### Was passiert, wenn eine CompletableFuture mehrere Exceptions hat?

Nur die **erste Exception** wird propagiert. Die anderen gehen verloren. Mit `exceptionally()` oder `handle()` kann man alle Fehler individuell behandeln.

---

## Wusstest du schon?

Die `ForkJoinPool.commonPool()` (Default für `supplyAsync()`) teilt sich **über die ganze JVM**. Wenn CPU-intensive Tasks dort rumhängen, blockieren sie andere async-Operationen. Für **lange laufende oder I/O-Operationen** sollte man einen **eigenen ExecutorService** übergeben: `supplyAsync(() -> {...}, myExecutor)` — ansonsten kann die ganze App lahmlegen! 🚀

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
