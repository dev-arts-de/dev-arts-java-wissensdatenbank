---
outline: deep
---

# Primitive Datentypen vs. Referenztypen

<div class="meta">
  <span class="difficulty easy">🟢 Einstieg</span>
  <span class="status">📝 Noch nicht bearbeitet</span>
</div>

---

## Notizen

Java Datentypen sind ein Mechanismus, der bestimmt, welche Art von Wert eine Variable speichern kann.
Java legt großen Wert auf Typsicherheit. Aber was ist Typsicherheit eigentlich?

Typsicherheit ist ein Design, das ungültige Typoperationen zur Kompilierzeit verhindert. Daher muss jede Variable einen deklarierten Typ haben.

```java
int number = 10;
double price = 19.8;
String name = "Java";
```

Durch explizite Angabe von Typen erhalten Sie Vorteile wie:
- Verhindert ungültige Zuweisungen
- Optimiert den Speicherverbrauch
- Erfasst Fehler zur Kompilierzeit

Es gibt zwei Kategorien von Java Datentypen
- **Primitive Typen**
- **Referenztypen**

### Was sind Primitive Typen?
Das sind Typen die den tatsächlichen Wert direkit speichern:
- `int`
- `double`
- `boolean`

Sie sind schnell, Speichereffizient und können **null nicht enthalten**

### Was sind Referenztypen?

Typen die den Wert selbst nicht speichern, sondern eine "Referenz" darauf, wo der Wert gespeichert ist.
```java
String text = "Hello World";
```
String ist ein Klassentyp (ein Referenztyp), zu erkennen an der Großschreibung.
Sie haben folgende Eigenschaften:
- Basierend auf Klassen erstellt
- Können null zugewiesen werden
- Haben Methoden (Verhalten)

### Häufige Stolpersteine
- Missverständnis von String als primitiven Typ
- Annehmen, dass das Kopieren eines Referenztyps den Wert selbst kopiert
- Nicht verstehen, wie null funktioniert

### Primitive Typen
| Category | Type | Size | Typical Use |
|----------|------|------|-------------|
| Integer | byte | 8 bit | Small integers |
| Integer | short | 16 bit | Smaller integers |
| Integer | int | 32 bit | Standard integers |
| Integer | long | 64 bit | Large integers |
| Decimal | float | 32 bit | Single-precision floating point |
| Decimal | double | 64 bit | Double-precision floating point (standard) |
| Character | char | 16 bit | A single character |
| Boolean | boolean | – | true / false |


### Wichtiger Hinweis bei der Verwendung von long
`long value = 10000000000L;  // L is required`

Ohne das L wird der Literal als int behandelt und kann einen Kompilierungsfehler aufgrund von Out-of-Range verursachen.

### Gleitkommatypen (float / double)
```java
double price = 19.99;
float rate = 0.5f;
```
#### Grundregeln
- In der Regel double verwenden
- float erfordert ein nachgestelltes f

`float value = 3.14f;`

#### Unterschiedliche Genauigkeiten
- float: etwa 7 Stellen Genauigkeit
- double: etwa 15 Stellen Genauigkeit

#### Wichtiger Hinweis (Rundungs-/Genauigkeitsprobleme)
`System.out.println(0.1 + 0.2);`

Das Ergebnis ist möglicherweise nicht exakt 0,3.
Dies liegt an der binären Gleitkommadarstellung.

#### Geldberechnungen
Für Geldberechnungen wird double im Allgemeinen nicht empfohlen.
Die Verwendung von `BigDecimal` ist sicherer.

### Zeichentyp (char)
`char letter = 'A';`
- Verwendet einfache Anführungszeichen
- Verwaltet mit Unicode (ein Zeichenkodierungsstandard)
- Kann nur ein einzelnes Zeichen speichern

`char kanji = '日';`

#### Häufige Fehler
- Doppelte Anführungszeichen verwenden (das ist `String`)
- Versuch, mehrere Zeichen zu speichern


## Interview-Fragen

### 1. Was ist der Unterschied zwischen primitiven Datentypen und Referenztypen in Java?

**Antwort:**  
Primitive Datentypen speichern den tatsächlichen Wert direkt in der Variable (z. B. `int`, `double`, `boolean`).  
Referenztypen speichern dagegen eine Referenz (Adresse) zu einem Objekt im Speicher, z. B. `String` oder andere Klassen.

---

### 2. Wie viele primitive Datentypen gibt es in Java?

**Antwort:**  
Java hat **8 primitive Datentypen**:

- `byte`
- `short`
- `int`
- `long`
- `float`
- `double`
- `char`
- `boolean`

---

### 3. Warum ist Java typsicher?

**Antwort:**  
Java verlangt, dass jede Variable einen festen Typ hat.  
Der Compiler prüft, ob nur gültige Operationen mit kompatiblen Typen durchgeführt werden.  
Fehler werden dadurch bereits **zur Kompilierzeit** erkannt.

---

### 4. Kann ein primitiver Datentyp `null` sein?

**Antwort:**  
Nein. Primitive Datentypen speichern immer einen konkreten Wert und können daher **kein `null` enthalten**.  
Nur Referenztypen können `null` sein.

---

### 5. Ist `String` ein primitiver Datentyp?

**Antwort:**  
Nein. `String` ist ein **Referenztyp**, weil er eine Klasse (`java.lang.String`) ist.  
Die Variable speichert daher eine Referenz auf ein Objekt.

---

### 6. Was passiert, wenn man eine Refernenzvariable kopiert?

```java
String a = "Hello";
String b = a;
```

**Antwort**:

Es wird nur die Referenz kopiert, nicht das Objekt selbst.
Beide Variablen zeigen auf dasselbe Objekt im Speicher.

### 7. Welche Vorteile haben primitive Datentypen?

**Antwort**:
- schneller Zugriff
- geringerer Speicherverbrauch
- kein Objekt-Overhead

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
