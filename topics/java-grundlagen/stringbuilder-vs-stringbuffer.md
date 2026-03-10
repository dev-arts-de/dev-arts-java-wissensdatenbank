---
outline: deep
---

# StringBuilder vs. StringBuffer

<div class="meta">
  <span class="difficulty easy">🟢 Einfach</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">10.03.2026</span>
</div>

---

## Zusammenfassung

> StringBuilder und StringBuffer sind **veränderbare String-Objekte** (mutable), die Strings effizient manipulieren, ohne ständig neue Objekte zu erstellen. StringBuffer ist thread-safe, StringBuilder ist schneller.

## Kernkonzept

**String ist unveränderbar (immutable).** Bei jeder Änderung (z.B. `+` Operator) wird ein neues String-Objekt erstellt. Das ist ineffizient bei wiederholten Operationen.

**StringBuilder und StringBuffer lösen dieses Problem:** Sie speichern Zeichen in einem internen **char-Array**, das bei Bedarf vergrößert wird. Änderungen erfolgen auf diesem Array, nicht durch neue Objekte.

**Der Unterschied:** StringBuffer ist **synchronisiert** (thread-safe, aber langsamer). StringBuilder ist **nicht synchronisiert** (schneller, aber nicht thread-safe). In modernen Single-Thread-Szenarien ist StringBuilder die bessere Wahl.

## Code-Beispiel

```java
// ❌ Ineffizient: Neue String-Objekte in Schleife
String result = "";
for (int i = 0; i < 1000; i++) {
    result += "x";  // Erzeugt 1000 neue String-Objekte!
}

// ✅ Effizient: StringBuilder
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append("x");  // Nur 1 Objekt, interne Modifikation
}
String result = sb.toString();

// StringBuffer (selbe API, aber thread-safe)
StringBuffer buffer = new StringBuffer();
buffer.append("Hallo").append(" ").append("Welt");
System.out.println(buffer.toString());  // "Hallo Welt"
```

## Wichtige Punkte

- **StringBuilder:** Schneller, nicht thread-safe → nutze es in 99% der Fälle
- **StringBuffer:** Thread-safe durch Synchronisierung → nur bei Multi-Threading nötig
- **Kapazität:** Interne Größe wächst automatisch (Standard: doppelt + 2)
- **API identisch:** Beide haben `.append()`, `.insert()`, `.delete()`, `.reverse()`
- **Wichtige Methode:** `.toString()` konvertiert zurück zu immutablem String

## Klassische Fragen

### Wann sollte ich StringBuilder verwenden?
Immer dann, wenn du einen String mehrfach änderst — in Schleifen, beim Concatenate vieler Strings oder in Konvertierungsroutinen. Typische Performance-Verbesserung: 10-100x schneller als String-Konkatenation.

---

### Ist StringBuffer veraltet?
Nicht wirklich, aber es ist meist unnötig. StringBuffer war in frühen Java-Versionen notwendig, weil mehr Multi-Threading vorkam. Nutze es nur, wenn du garantiert mehrere Threads auf das Objekt zugreifst.

---

### Kann ich StringBuilder in Strings einfach nutzen?
Ja! Viele moderne APIs nutzen StringBuilder intern. Du kannst es auch explizit nutzen: `String result = new StringBuilder().append("a").append("b").toString();`

---

## Wusstest du schon?

Der **String-Pool** in Java optimiert identische Strings automatisch — aber nur bei Literals, nicht bei zur Laufzeit erstellten Strings. StringBuilder umgeht diese Optimierung bewusst, weil der Overhead der String-Pool-Verwaltung bei vielen Änderungen größer wäre als die Speicherersparnis.

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
