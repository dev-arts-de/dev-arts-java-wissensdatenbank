---
outline: deep
---

# Keine Magic Numbers & Magic Strings

<div class="meta">
  <span class="difficulty easy">🟢 Einfach</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">26.03.2026</span>
</div>

---

## Zusammenfassung

> Magic Numbers und Magic Strings sind Literalwerte direkt im Code, deren Bedeutung nicht sofort klar ist. Named Constants machen den Code wartbar, verständlich und fehlerresistent.

## Kernkonzept

**Magic Numbers/Strings** sind hardcodierte Werte wie `42`, `"admin"` oder `0.15`, deren Zweck aus dem Kontext nicht ersichtlich ist. Sie führen zu Verwirrung und machen Refactoring zur Fehlerquelle.

**Named Constants** ersetzen diese Werte durch aussagekräftige Konstanten-Namen. Das verbessert die **Lesbarkeit**, reduziert **Fehlerquellen** bei Änderungen und dokumentiert die Intention des Codes selbst.

Die Faustregel: Wenn du dich fragst "Warum diese Zahl?", ist es ein Magic Value und gehört in eine Konstante.

## Code-Beispiel

```java
// ❌ SCHLECHT: Magic Numbers und Strings
public class UserValidator {
    public boolean validateAge(int age) {
        return age >= 18; // Warum 18? Rechtliche Anforderung?
    }
    
    public double applyDiscount(double price) {
        return price * 0.85; // 15% Rabatt? Wieso?
    }
    
    public String getUserRole(int level) {
        if (level == 3) return "admin"; // Was bedeutet 3?
        if (level == 1) return "user";
        return "guest";
    }
}

// ✅ GUT: Named Constants
public class UserValidator {
    // Geschäftslogik-Konstanten
    private static final int LEGAL_ADULT_AGE = 18;
    private static final int ADMIN_ROLE_LEVEL = 3;
    private static final int USER_ROLE_LEVEL = 1;
    
    // Finanzielle Konstanten
    private static final double SEASONAL_DISCOUNT_RATE = 0.15; // 15%
    
    public boolean validateAge(int age) {
        return age >= LEGAL_ADULT_AGE;
    }
    
    public double applyDiscount(double price) {
        return price * (1 - SEASONAL_DISCOUNT_RATE);
    }
    
    public String getUserRole(int level) {
        if (level == ADMIN_ROLE_LEVEL) return "admin";
        if (level == USER_ROLE_LEVEL) return "user";
        return "guest";
    }
}
```

## Wichtige Punkte

- **Aussagekräftige Namen** sind wichtiger als die Konstante selbst — `LEGAL_ADULT_AGE` statt `MIN_AGE`
- **Zentralisierung** ermöglicht One-Point-of-Change: Ändere die Konstante an einer Stelle
- **Enums verwenden** für zusammenhängende Werte: Status-Codes, Rollen, Zuständlichkeiten
- **Kategorisieren** in separate Klassen: `PaymentConstants`, `ValidationConstants`, `ErrorCodes`
- **Dokumentation** hinzufügen, wenn die Intention nicht offensichtlich ist (z.B. warum dieser Schwellenwert?)

## Klassische Fragen

### Wann ist etwas eine Magic Number?
Wenn du die Bedeutung oder den Grund für den Wert nicht unmittelbar aus dem Namen der Variable erkennen kannst. Auch `2` ist magic, wenn nicht klar ist, ob es "Anzahl der Versuche" oder "Index" ist.

---

### Sind 0 und 1 auch Magic Numbers?
Ja, in den meisten Fällen! Außnahmen: Loop-Indikatoren (`for (int i = 0; i < list.size(); i++)`) oder offensichtliche Operationen. Aber auch hier kann ein konstanter Index besser sein: `int FIRST_INDEX = 0`.

---

### Sollte jede Konstante in einer Klasse sein?
Nicht unbedingt. Nutze **Package-private** oder **private static final** für lokale Konstanten. Nur globale, geschäftskritische Werte gehören in zentrale Konstanten-Klassen (z.B. `Config`, `Constants`).

---

## Wusstest du schon?

In der Raumfahrt führte eine **Magic Number** zum Crash: Die **Mars Climate Orbiter** (1999) verglühte, weil eine Softwarekomponente Newtonmeter, eine andere Pfund-Kräfte erwartete — alles hardcoded ohne aussagekräftige Konstanten! Ein 327-Millionen-Dollar-Fehler durch fehlende **Named Constants**. 🚀

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
