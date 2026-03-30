---
outline: deep
---

# Autoboxing & Unboxing

<div class="meta">
  <span class="difficulty easy">🟢 Einfach</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">31.03.2026</span>
</div>

---

## Zusammenfassung

> **Autoboxing** ist die automatische Konvertierung von primitiven Datentypen in ihre Wrapper-Objekte (z.B. `int` → `Integer`). **Unboxing** ist der umgekehrte Prozess. Dies vereinfacht die Arbeit mit Collections und generischen Typen erheblich.

## Kernkonzept

**Autoboxing** findet statt, wenn ein primitiver Wert an eine Stelle kommt, wo ein Objekt erwartet wird. Der Compiler wandelt den Wert automatisch in die entsprechende Wrapper-Klasse um.

**Unboxing** ist der umgekehrte Prozess: Ein Wrapper-Objekt wird automatisch in seinen primitiven Wert umgewandelt. Dies geschieht z.B. bei Zuweisungen oder arithmetischen Operationen.

Verfügbare Wrapper-Klassen: `Integer`, `Long`, `Double`, `Float`, `Boolean`, `Byte`, `Short`, `Character`

## Code-Beispiel

```java
// Autoboxing: primitiv → Objekt
int primitive = 42;
Integer boxed = primitive;  // Automatisch in Integer konvertiert

// Unboxing: Objekt → primitiv
Integer wrapped = 100;
int unboxed = wrapped;      // Automatisch ausgepackt

// In Collections
List<Integer> numbers = new ArrayList<>();
numbers.add(5);             // Autoboxing: 5 wird zu Integer(5)

Integer first = numbers.get(0);  // Unboxing nicht nötig (bleibt Integer)
int value = numbers.get(0);      // Unboxing: Integer wird zu int

// Arithmetische Operationen
Integer a = 10;
Integer b = 20;
int sum = a + b;            // Beide werden ungeboxed, dann addiert
```

## Wichtige Punkte

- Autoboxing/Unboxing wurde ab **Java 5** eingeführt (vorher manuelle Konvertierung nötig)
- Der Compiler führt die Konvertierung durch — zur Laufzeit erfolgt der Aufruf von `Integer.valueOf()` oder `intValue()`
- **NullPointerException-Risiko**: Unboxing von `null` wirft sofort eine NPE
- Performance-Impact: Wrapper-Objekte verbrauchen mehr Speicher als primitive Typen
- Autoboxing funktioniert auch in **Methodenaufrufen** und **Zuweisungen** automatisch

## Klassische Fragen

### Warum brauchen wir Autoboxing überhaupt?

Collections wie `ArrayList<Integer>` können nur Objekte speichern, keine primitiven Typen. Autoboxing ermöglicht eine nahtlose Übergabe primitiver Werte, ohne manuell `new Integer(42)` schreiben zu müssen.

---

### Was passiert beim Unboxing von `null`?

Es wird eine `NullPointerException` geworfen. Das ist ein häufiger Bug: `Integer x = null; int y = x;` crasht zur Laufzeit.

---

### Sollte ich Wrapper-Klassen für Performance-kritische Code-Teile nutzen?

Nein. Primitive Typen sind deutlich schneller und speichereffizienter. Wrapper-Klassen nutzen nur bei Collections oder wenn die API es verlangt.

---

### Sind `Integer a = 5;` und `int a = 5;` identisch?

Nein. Das erste ist ein Objekt (mit Overhead), das zweite ist ein primitiver Wert im Stack. Funktional ähnlich, aber unterschiedliche Performance und Memory-Footprint.

---

## Wusstest du schon?

Die **Integer-Cache**: Java cached Integer-Objekte von `-128` bis `127`. Deshalb ist `Integer.valueOf(5) == Integer.valueOf(5)` `true`, aber `Integer.valueOf(200) == Integer.valueOf(200)` `false`! Das ist kein Autoboxing-Bug, sondern Feature zur Performance-Optimierung.

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
