---
outline: deep
---

# Type Casting (implicit / explicit)

<div class="meta">
  <span class="difficulty easy">🟢 Einstieg</span>
  <span class="status">bearbeitet</span>
</div>

---

## Notizen

Type Casting ist ein Weg, Daten von einem Typ in einen anderen zu konvertieren. Dabei gibt es zwei konkrete Verfahren:
`Implicit Type Casting` funktioniert automatisch und `Explicit Type Casting` benötigt manuelles Vorgehen.

### Implicit Type Casting

Beim `Implicit Type Casting` konvertiert Java automatisch von einem kleineren in einen größeren Datentyp – ohne dass du eingreifen musst. Das nennt sich auch **Widening Conversion**.

**Reihenfolge (klein → groß):**
```
byte → short → int → long → float → double
```

```java
int myInt = 42;
double myDouble = myInt; // automatisch, kein Cast nötig
System.out.println(myDouble); // 42.0
```

**Vorteile:**
- Kein manueller Aufwand – Java übernimmt die Konvertierung
- Kein Datenverlust möglich
- Reduziert Fehlerquellen

**Nachteile:**
- Kann zu unerwarteten Nebeneffekten führen, wenn man die automatische Konvertierung nicht im Blick hat
- Bei numerischen Berechnungen können ungewollte Typwechsel das Ergebnis beeinflussen

---

### Explicit Type Casting

`Explicit Type Casting` (auch **Narrowing Conversion** oder **Type Coercion**) ist die manuelle Umwandlung von einem größeren in einen kleineren Datentyp. Du musst den Zieltyp explizit in Klammern angeben.

```java
double myDouble = 9.99;
int myInt = (int) myDouble; // explizit notwendig
System.out.println(myInt); // 9 → Nachkommastellen werden abgeschnitten!
```

```java
int big = 300;
byte b = (byte) big; // 300 passt nicht in byte (max 127)
System.out.println(b); // 44 → Overflow!
```

**Vorteile:**
- Volle Kontrolle über die Konvertierung

**Nachteile:**
- Datenverlust möglich (z. B. abgeschnittene Nachkommastellen)
- Overflow bei zu großen Werten – Java warnt dich **nicht** davor
- Du trägst die Verantwortung für korrekte Ergebnisse

---

### Casting bei Objekten (Referenztypen)

Auch bei Klassen und Vererbung gibt es implizites und explizites Casting:

```java
// Implicit (Upcasting) – automatisch
Animal animal = new Dog(); // Dog ist ein Animal ✅

// Explicit (Downcasting) – manuell
Dog dog = (Dog) animal;

// Sicher prüfen mit instanceof
if (animal instanceof Dog) {
    Dog d = (Dog) animal;
}

// Ab Java 16: Pattern Matching
if (animal instanceof Dog d) {
    d.bark(); // d direkt verfügbar, kein extra Cast nötig
}
```

---

### Zusammenfassung

| | Implicit | Explicit |
|---|---|---|
| Syntax | automatisch | `(Zieltyp) wert` |
| Richtung | klein → groß | groß → klein |
| Datenverlust | ❌ nein | ⚠️ möglich |
| Beispiel | `double d = myInt` | `int i = (int) myDouble` |

---

## Interview-Fragen

### Was ist der Unterschied zwischen Implicit und Explicit Type Casting?

**Antwort:** Beim Implicit Casting konvertiert Java automatisch von einem kleineren in einen größeren Datentyp (Widening) – kein Datenverlust möglich, kein Eingriff nötig. Beim Explicit Casting muss man den Zieltyp manuell angeben, z. B. `(int) myDouble`. Das ist nötig, wenn man von einem größeren in einen kleineren Typ konvertiert (Narrowing), weil dabei Datenverlust entstehen kann. Java erzwingt das explizite Vorgehen als Warnsignal: du weißt, was du tust.

---

### Was bedeutet Widening und Narrowing Conversion?

**Antwort:** Widening bedeutet, einen Typ in einen "breiteren" umzuwandeln, der mehr Werte fassen kann – z. B. `int` → `double`. Das passiert implizit. Narrowing ist das Gegenteil: von einem größeren in einen kleineren Typ, z. B. `double` → `int`. Dabei können Daten verloren gehen (Nachkommastellen, Overflow), weshalb Java einen expliziten Cast verlangt.

---

### Was passiert bei einem Overflow durch Explicit Casting?

**Antwort:** Wenn der Wert nicht in den Zieltyp passt, kommt es zu einem Overflow – Java wirft dabei **keine** Exception, sondern gibt einfach einen falschen Wert zurück. Beispiel: `(byte) 300` ergibt `44`, weil `byte` nur Werte von -128 bis 127 fassen kann und der Wert "umschlägt". Java warnt nicht davor – die Verantwortung liegt beim Entwickler.

---

### Was ist Upcasting und Downcasting bei Objekten?

**Antwort:** Upcasting ist die implizite Konvertierung einer Subklasse in ihre Superklasse – z. B. `Animal a = new Dog()`. Das ist immer sicher. Downcasting ist das Gegenteil: eine Superklasse-Referenz wird explizit in eine Subklasse gecastet, z. B. `Dog d = (Dog) a`. Das kann zur Laufzeit mit einer `ClassCastException` fehlschlagen, wenn das Objekt kein echter `Dog` ist. Deshalb vorher mit `instanceof` prüfen.

---

### Wie funktioniert Pattern Matching mit `instanceof` ab Java 16?

**Antwort:** Vor Java 16 musste man nach einem `instanceof`-Check noch manuell casten. Ab Java 16 geht das in einem Schritt: `if (animal instanceof Dog d)` – `d` ist direkt als `Dog` verfügbar, ohne extra Cast-Zeile. Das ist sicherer, kürzer und vermeidet doppelten Code. Der Compiler stellt sicher, dass `d` nur im true-Zweig des `if` genutzt werden kann.


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