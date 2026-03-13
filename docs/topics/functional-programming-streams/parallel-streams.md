---
outline: deep
---

# Parallel Streams

<div class="meta">
  <span class="difficulty medium">🟡 Mittel</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">13.03.2026</span>
</div>

---

## Zusammenfassung

> Parallel Streams verarbeiten Daten **gleichzeitig auf mehreren CPU-Kernen** statt sequenziell. Sie nutzen automatisch das Fork/Join-Framework, um große Datenmengen schneller zu verarbeiten.

## Kernkonzept

**Parallel Streams** teilen die Datenverarbeitung in mehrere Aufgaben auf und verteilen diese auf verfügbare Prozessorkerne. Das funktioniert transparent — du nutzt die gleiche API wie bei normalen Streams, musst aber `.parallel()` aufrufen.

Das **Fork/Join-Framework** kümmert sich um die Verwaltung von Threads und Task-Verteilung. Es teilt Daten rekursiv auf (Fork), verarbeitet sie parallel und kombiniert die Ergebnisse wieder (Join).

**Achtung**: Parallel Streams haben Overhead durch Thread-Management. Sie lohnen sich nur bei **großen Datenmengen** (typisch > 10.000 Elemente) oder **aufwändigen Operationen**.

## Code-Beispiel

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8);

// Sequenziell (Standard)
int sum = numbers.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * n)
    .reduce(0, Integer::sum);

// Parallel
int parallelSum = numbers.parallelStream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * n)
    .reduce(0, Integer::sum);

// Oder mit .parallel()
int sum2 = numbers.stream()
    .parallel()
    .filter(n -> n % 2 == 0)
    .map(n -> n * n)
    .reduce(0, Integer::sum);
```

## Wichtige Punkte

- **Thread-Pool**: Nutzt den gemeinsamen `ForkJoinPool.commonPool()` — nicht zu viele parallele Streams gleichzeitig!
- **Reihenfolge**: `.parallel()` kann die **Verarbeitungsreihenfolge ändern** — nicht geeignet, wenn Order wichtig ist
- **Stateless Operations**: Verwende nur **stateless Operationen** (keine Abhängigkeiten zwischen Elementen)
- **Overhead vs. Gewinn**: Bei kleinen Listen ist parallel **langsamer** als sequenziell
- **Seiteneffekte vermeiden**: Keine `.forEach()` mit Shared State — nutze stattdessen `.collect()`

## Klassische Fragen

### Wann sollte ich parallel Streams verwenden?

Bei **großen Datenmengen** (Richtlinie: > 10.000 Elemente) mit **teuren Operationen** und einer Verarbeitungslogik, die **thread-safe und unabhängig** für jedes Element ist. Bei kleinen Listen oder I/O-Operationen ist der Overhead größer als der Nutzen.

---

### Warum ist my `.forEach()` mit parallel Streams unsicher?

`.forEach()` auf parallelen Streams kann zu **Race Conditions** führen, wenn die Lambda externe State modifiziert. Nutze stattdessen **`.collect()`** mit einem thread-sicheren Collector, z.B. `toList()` oder `toMap()`.

---

### Kann ich die Parallelität kontrollieren?

Nicht direkt über Streams. Du kannst aber ein **eigenes `ForkJoinPool`** mit spezifischer Parallelität erstellen und `.execute()` nutzen. Für die meisten Fälle reicht der `commonPool()`.

---

## Wusstest du schon?

Das Fork/Join-Framework wurde ursprünglich von **Doug Lea** entwickelt und ist eine Meisterleistung der Concurrent Programming. Ein Parallel Stream auf einem Single-Core-System kann **langsamer sein als der sequenzielle** — aber die JVM wird nicht crashen. Parallelität ist kein Allheilmittel, sondern erfordert **sorgfältige Messung mit JMH** (Java Microbenchmark Harness)!

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
