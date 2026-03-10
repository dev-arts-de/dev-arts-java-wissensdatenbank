---
outline: deep
---

# Template Method Pattern

<div class="meta">
  <span class="difficulty easy">🟢 Einfach</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">10.03.2026</span>
</div>

---

## Zusammenfassung

> Das Template Method Pattern definiert das Skelett eines Algorithmus in einer Basisklasse und überlässt einzelne Schritte den Subklassen. Es verhindert Code-Duplikation und erzwingt eine einheitliche Abfolge.

## Kernkonzept

**Abstrakte Basisklasse** enthält die `templateMethod()`, die den Ablauf festlegt. Diese ruft abstrakte Methoden auf, die Subklassen implementieren müssen.

Der **Kontrollfluss** bleibt in der Basisklasse — Subklassen füllen nur ihre spezifischen Teile aus ("Hollywood Principle": Don't call us, we call you).

Ideal für Szenarien mit **gemeinsamen Prozessschritten**, aber unterschiedlichen Implementierungsdetails pro Subklasse.

## Code-Beispiel

```java
// Abstrakte Basisklasse definiert Algorithmus-Struktur
abstract class Getränk {
    // Template Method — Struktur ist final!
    public final void zubereiten() {
        wasserKochen();
        getränkZubereiten();      // Abstrakt
        inTasseGießen();
        würzungenHinzufügen();    // Abstrakt
    }
    
    private void wasserKochen() {
        System.out.println("Wasser wird gekocht...");
    }
    
    private void inTasseGießen() {
        System.out.println("In Tasse gießen...");
    }
    
    // Hook-Methoden (abstrakt)
    protected abstract void getränkZubereiten();
    protected abstract void würzungenHinzufügen();
}

// Konkrete Implementierungen
class Kaffee extends Getränk {
    @Override
    protected void getränkZubereiten() {
        System.out.println("Kaffee wird gebrüht...");
    }
    
    @Override
    protected void würzungenHinzufügen() {
        System.out.println("Zucker und Milch hinzufügen");
    }
}

class Tee extends Getränk {
    @Override
    protected void getränkZubereiten() {
        System.out.println("Teebeutel in Wasser legen...");
    }
    
    @Override
    protected void würzungenHinzufügen() {
        System.out.println("Honig hinzufügen");
    }
}
```

## Wichtige Punkte

- **`final` Modifier** für `templateMethod()` — verhindert Überschreiben der Struktur
- **Hook-Methoden** sind die Erweiterungspunkte — meist `abstract` oder mit Default-Implementierung
- **Umgekehrte Abhängigkeit** — Framework/Basisklasse ruft Code der Subklasse auf
- **Single Responsibility** — jede Subklasse kümmert sich nur um ihre Teile
- **Inversion of Control** — Kontrollfluss liegt nicht bei der Subklasse

## Klassische Fragen

### Was ist der Unterschied zu Strategy Pattern?
**Template Method** definiert die Struktur in einer Vererbungshierarchie (Compile-Zeit), während **Strategy** Algorithmen als austauschbare Objekte zur Laufzeit injiziert. Template Method ist für enge Verwandtschaften, Strategy für flexible Austauschbarkeit.

---

### Kann ich Hook-Methoden optional machen?
Ja! Mit **konkreten Hook-Methoden** (nicht abstract) mit Default-Implementierung. Subklassen können sie überschreiben, müssen aber nicht. Ideal für seltene Erweiterungen.

---

### Warum `final` für templateMethod()?
Weil **die Struktur des Algorithmus nicht verändert werden darf** — nur einzelne Schritte. Ohne `final` könnte eine Subklasse den ganzen Ablauf zerstören.

---

## Wusstest du schon?

Das Template Method Pattern steckt überall in Java-APIs — z.B. in `AbstractList` (wo `add()`, `get()`, `remove()` abstrakt sind) oder in `Servlet.service()` → `doGet()`, `doPost()`. Du nutzt es also längst, ohne es zu merken! 🎯

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
