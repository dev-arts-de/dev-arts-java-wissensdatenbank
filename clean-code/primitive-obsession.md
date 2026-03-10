---
outline: deep
---

# Primitive Obsession

<div class="meta">
  <span class="difficulty medium">🟡 Mittel</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">10.03.2026</span>
</div>

---

## Zusammenfassung

> **Primitive Obsession** ist das übermäßige Verwenden von Primitiven Datentypen statt aussagekräftiger Objekte. Das führt zu Code, der schwer zu verstehen ist und häufig zu Bugs neigt, weil Validierung und geschäftliche Logik fehlen.

## Kernkonzept

**Primitive Typen wie `int`, `String`, `double` sind zu generisch.** Sie sagen nichts über die *Bedeutung* der Daten aus. Eine `int`-Variable kann Alter, Kontostand, Anzahl oder völlig unerwartete Werte sein.

**Die Lösung: Value Objects (kleine Wrapper-Klassen) erstellen,** die primitive Werte mit Kontext versehen. Diese Objekte können Validierung und Business-Logik enthalten. Der Code wird selbstdokumentierend und sicherer.

**Vorteil:** Compiler hilft dir, Verwechslungen zu vermeiden. Eine `UserId` kann nicht versehentlich mit `CustomerId` verwechselt werden.

## Code-Beispiel

```java
// ❌ ANTI-PATTERN: Primitive Obsession
public class User {
    public int id;              // Was ist das? Bereich? Nullable?
    public String email;        // Validiert? Format?
    public int age;             // Negativ möglich? Max-Wert?
    public double balance;      // Währung? Precision-Problem?
}

// ✅ BESSER: Value Objects verwenden
public class User {
    private final UserId id;
    private final Email email;
    private final Age age;
    private final Balance balance;
    
    public User(UserId id, Email email, Age age, Balance balance) {
        this.id = id;           // UserId validiert bereits
        this.email = email;     // Email-Format geprüft
        this.age = age;         // Age garantiert 0-150
        this.balance = balance; // Balance hat Währung & Precision
    }
}

// Value Object Beispiel
public final class Email {
    private final String value;
    
    public Email(String value) {
        if (value == null || !value.contains("@")) {
            throw new IllegalArgumentException("Invalid email");
        }
        this.value = value;
    }
    
    public String getValue() { return value; }
    
    @Override
    public boolean equals(Object o) {
        return o instanceof Email && value.equals(((Email)o).value);
    }
}
```

## Wichtige Punkte

- **Primitive Typen sind zu simpel** — sie tragen keine Geschäftsinformation
- **Value Objects sind unveränderlich (immutable)** — thread-safe und einfacher zu verstehen
- **Validierung gehört ins Objekt** — nicht in die aufrufende Methode verteilt
- **Selbstdokumentierender Code** — `Email email` ist klarer als `String email`
- **Compiler-Schutz** — `UserId` und `CustomerId` sind unterschiedliche Typen, nicht beide `int`

## Klassische Fragen

### Ist das nicht overengineering für einfache Daten?

Nein. Selbst einfache Daten wie IDs haben spezifische Regeln (Bereich, Format, Bedeutung). Die minimale Investition in Value Objects zahlt sich in Sicherheit und Lesbarkeit aus. Bei 100+ Zeilen Code wird es schnell wirtschaftlich.

---

### Kostet das nicht Performance?

Marginal. Moderne JVMs optimieren kleine Objekte sehr gut (Stack-Allocation, Scalar Replacement). Ein paar `Email`-Objekte bremsen nichts. Bei Millionen von Objekten ist die *Correctness* sowieso wichtiger als Microseconds.

---

### Kann ich das mit Records vereinfachen?

**Ja!** Java Records (ab Java 14/16) sind ideal für Value Objects:

```java
public record Email(String value) {
    public Email {
        if (value == null || !value.contains("@"))
            throw new IllegalArgumentException("Invalid email");
    }
}
```

Das ist boilerplate-frei und gleichzeitig präzise.

---

## Wusstest du schon?

**Domain-Driven Design nennt es "Value Objects" — und es ist eine der ältesten, unterschätztesten Techniken.** Entwickler schreiben lieber 100 Zeilen `String`-Manipulation, als 5 Zeilen eine kleine Klasse zu bauen. Das Ironie: Die kleine Klasse hätte das Problem in Minute 1 gelöst! 😄

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
