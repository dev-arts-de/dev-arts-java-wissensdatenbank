---
outline: deep
---

# Autoboxing / Unboxing

<div class="meta">
  <span class="difficulty easy">🟢 Einstieg</span>
  <span class="status">bearbeitet</span>
</div>

---

## Notizen

Autoboxing ist die automatische Konvertierung eines primitiven Typs in sein Wrapper-Objekt.
Unboxing ist das Gegenteil: ein Wrapper-Objekt wird automatisch in den primitiven Typ zurückgewandelt.

In Java gibt es 8 primitive Datentypen und jeder dieser Typen hat eine zugehörige Wrapper-Klasse:

| Primitiv  | Wrapper     |
|-----------|-------------|
| `byte`    | `Byte`      |
| `short`   | `Short`     |
| `int`     | `Integer`   |
| `long`    | `Long`      |
| `float`   | `Float`     |
| `double`  | `Double`    |
| `boolean` | `Boolean`   |
| `char`    | `Character` |

Wrapper werden gebraucht, weil Collections wie `List<Integer>` keine primitiven Typen akzeptieren (Generics funktionieren nur mit Objekten).

#### **Autoboxing**: primitiv → Objekt
```java
int zahl = 42;
Integer boxed = zahl; // Autoboxing: int → Integer

List<Integer> liste = new ArrayList<>();
liste.add(5); // Autoboxing: int 5 → Integer.valueOf(5)
```
Der Compiler wandelt das intern zu `Integer.valueOf(42)` um.

#### **Unboxing**: Objekt → primitiv
```java
Integer boxed = Integer.valueOf(100);
int unboxed = boxed; // Unboxing: Integer → int

Integer a = 10;
int summe = a + 5; // Unboxing: a wird zu int für die Addition
```
Der Compiler wandelt das intern zu `boxed.intValue()` um.

---

### Wichtige Fallstricke

#### NullPointerException beim Unboxing
```java
Integer x = null;
int y = x; // NullPointerException! null.intValue() schlägt fehl
```
Wrapper-Klassen können `null` enthalten, primitive Typen jedoch nicht.
Deshalb immer auf `null` prüfen, bevor ein Wrapper-Objekt in einen primitiven Typ umgewandelt wird.

#### `==` vs `equals()` bei Wrapper-Objekten
```java
Integer a = 200;
Integer b = 200;
System.out.println(a == b);      // false! (verschiedene Objekte)
System.out.println(a.equals(b)); // true  (gleicher Wert)
```

`==` vergleicht bei Objekten die Referenz (Speicheradresse), nicht den Wert.
Deshalb immer `equals()` verwenden, wenn Wrapper-Werte verglichen werden sollen.

> **Achtung – Integer Cache:** `Integer.valueOf()` cached Werte von -128 bis 127.
> In diesem Bereich liefert `==` zufällig `true`, weil beide Variablen
> auf dasselbe gecachte Objekt zeigen — außerhalb davon nicht mehr.
```java
Integer a = 127;
Integer b = 127;
System.out.println(a == b); // true  (Cache!)

Integer c = 128;
Integer d = 128;
System.out.println(c == d); // false (verschiedene Objekte)
```

#### Performance
```java
Long summe = 0L;
for (int i = 0; i < 1_000_000; i++) {
    summe += i; // Ständiges Boxing/Unboxing → langsam!
}
```
In performance-kritischen Loops lieber `long` statt `Long` verwenden.
Jedes Boxing erzeugt ein neues Objekt auf dem Heap — bei Millionen von Iterationen ist das spürbar.

---

## Interview-Fragen

### Was ist Autoboxing und Unboxing?

**Antwort:** Autoboxing ist die automatische Umwandlung eines primitiven Typs in die entsprechende Wrapper-Klasse (`int` → `Integer`). Unboxing ist das Gegenteil: die Wrapper-Klasse wird automatisch in den primitiven Typ zurückgewandelt (`Integer` → `int`). Beides erledigt der Compiler im Hintergrund – aus `Integer i = 42` wird intern `Integer.valueOf(42)`, aus `int x = i` wird `i.intValue()`.

---

### Warum existieren Wrapper-Klassen überhaupt?

**Antwort:** Generics in Java funktionieren nur mit Objekten, nicht mit primitiven Typen. Deshalb braucht man z. B. `List<Integer>` statt `List<int>`. Außerdem bieten Wrapper-Klassen nützliche Hilfsmethoden wie `Integer.parseInt()`, `Integer.MAX_VALUE` oder `Integer.toBinaryString()`, die bei primitiven Typen nicht verfügbar sind.

---

### Was passiert, wenn ein `null`-Wrapper ungeboxed wird?

**Antwort:** Es wird eine `NullPointerException` geworfen. Der Compiler wandelt z. B. `int y = x` intern in `x.intValue()` um — wenn `x` null ist, schlägt das fehl. Deshalb immer auf `null` prüfen, wenn Wrapper-Objekte aus Collections oder Methoden-Rückgaben kommen.

---

### Was ist der Integer Cache und welche Werte sind betroffen?

**Antwort:** `Integer.valueOf()` cached Objekte im Bereich **-128 bis 127**. In diesem Bereich zeigen zwei `Integer`-Variablen mit demselben Wert auf dasselbe Objekt im Speicher, weshalb `==` dort `true` liefert. Außerhalb dieses Bereichs werden neue Objekte erstellt, und `==` liefert `false` — auch wenn der Wert gleich ist. Das ist ein klassischer Interview-Stolperstein.

---

### Warum sollte man bei Wrapper-Objekten `equals()` statt `==` verwenden?

**Antwort:** `==` vergleicht Referenzen (Speicheradressen), nicht Werte. Zwei `Integer`-Objekte mit demselben Wert können unterschiedliche Objekte im Heap sein, weshalb `==` dann `false` liefert. `equals()` vergleicht den tatsächlichen Wert und ist daher die sichere Wahl. Im Cache-Bereich (-128 bis 127) wäre `==` zufällig korrekt — aber darauf sollte man sich nie verlassen.

---

### Welche Performance-Probleme kann Autoboxing verursachen?

**Antwort:** Jedes Boxing erzeugt ein neues Objekt auf dem Heap, was Garbage-Collection-Druck erzeugt. In Loops mit vielen Iterationen kann das erheblich langsamer sein als die Verwendung primitiver Typen. Faustregel: In performance-kritischem Code `int`, `long`, `double` bevorzugen und Wrapper nur dort einsetzen, wo sie wirklich nötig sind (Collections, Generics).

---

### Wo genau passiert Autoboxing — im Compiler oder zur Laufzeit?

**Antwort:** Der Compiler fügt die Boxing- und Unboxing-Aufrufe bereits beim Kompilieren ein (`Integer.valueOf()` bzw. `.intValue()`). Zur Laufzeit gibt es kein "Autoboxing" mehr — im Bytecode sind es ganz normale Methodenaufrufe. Man kann das mit `javap -c` im dekompilierten Bytecode sehen.

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