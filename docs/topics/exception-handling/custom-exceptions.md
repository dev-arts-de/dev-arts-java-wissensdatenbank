---
outline: deep
---

# Custom Exceptions

<div class="meta">
  <span class="difficulty easy">🟢 Einfach</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">22.03.2026</span>
</div>

---

## Zusammenfassung

> Custom Exceptions sind **selbst definierte Exception-Klassen**, die spezifische Fehler in deiner Anwendung abbilden. Sie ermöglichen **präzisere Fehlerbehandlung** und besseren Code.

## Kernkonzept

**Custom Exceptions erben von Exception oder RuntimeException** und ermöglichen es dir, domänenspezifische Fehler zu definieren. Statt generischer `Exception` kannst du aussagekräftige Exceptions wie `InsufficientFundsException` oder `UserNotFoundException` werfen.

Du erstellst eine neue Klasse, die von `Exception` (checked) oder `RuntimeException` (unchecked) erbt. Mit **konstruktoren für Nachricht und Cause** gibst du Kontext über den Fehler. Der Aufrufer kann dann gezielt auf bestimmte Exceptions reagieren.

**Naming-Konvention:** Enden immer auf `Exception`. Das macht sofort klar, dass es sich um eine Exception handelt.

## Code-Beispiel

```java
// 1. Custom Exception definieren
public class InsufficientFundsException extends Exception {
    private double requiredAmount;
    private double availableAmount;
    
    // Konstruktor mit Nachricht
    public InsufficientFundsException(String message) {
        super(message);
    }
    
    // Konstruktor mit Details
    public InsufficientFundsException(String message, 
                                     double required, 
                                     double available) {
        super(message);
        this.requiredAmount = required;
        this.availableAmount = available;
    }
    
    public double getShortfall() {
        return requiredAmount - availableAmount;
    }
}

// 2. Custom Exception werfen
class BankAccount {
    private double balance = 100.0;
    
    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException(
                "Nicht genug Deckung!", 
                amount, 
                balance
            );
        }
        balance -= amount;
    }
}

// 3. Custom Exception fangen
public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();
        
        try {
            account.withdraw(150.0);
        } catch (InsufficientFundsException e) {
            System.out.println("Fehler: " + e.getMessage());
            System.out.println("Fehlbetrag: " + e.getShortfall());
        }
    }
}
```

## Wichtige Punkte

- **Extends Exception** = Checked Exception → muss deklariert/gefangen werden
- **Extends RuntimeException** = Unchecked Exception → optional zu fangen
- Custom Exceptions sollten **aussagekräftige Namen** haben (endend auf "Exception")
- Immer **Konstruktoren** mit `String message` und optional `Throwable cause` bereitstellen
- Custom Exceptions ermöglichen **spezifische catch-Blöcke** statt generischer Error-Handling
- Verwende sie für **domänenspezifische Fehler**, nicht für technische Fehler

## Klassische Fragen

### Sollte ich Exception oder RuntimeException erweitern?

**Exception** für vorhersehbare Business-Fehler (z.B. `UserNotFoundException`), die der Aufrufer handhaben sollte. **RuntimeException** für Programmierungsfehler oder Fehler, die nicht sinnvoll abgefangen werden können. Die meisten Custom Exceptions sollten `Exception` erweitern.

---

### Wie unterscheidet sich Custom Exception vom Fehlercode?

Mit Exceptions wirfst du **sprechende Objekte** statt magischer Fehlernummern. Der Aufrufer sieht sofort, *welcher* Fehler auftrat, und kann mit gezielten catch-Blöcken reagieren. Fehlercodes sind 1990er-Jahre-Code.

---

### Kann ich mehrere Exceptions in einem catch-Block fangen?

Ja, seit Java 7 mit **Multi-Catch**: `catch (InsufficientFundsException | InvalidAccountException e)`. Das erspart Code-Duplikation.

---

## Wusstest du schon?

**Die beste Custom Exception ist diejenige, die du nie werfen musst!** Viele Senior-Entwickler bevorzugen **Null-Objects** oder **Optional** über Exceptions für nicht-kritische Fehler. Exceptions sollten *exceptional* sein, nicht dein Standard-Kontrollfluss. 💡

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
