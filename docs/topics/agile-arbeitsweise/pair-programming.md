---
outline: deep
---

# Pair Programming

<div class="meta">
  <span class="difficulty easy">🟢 Einfach</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">18.03.2026</span>
</div>

---

## Zusammenfassung

> Pair Programming ist eine agile Entwicklungspraktik, bei der zwei Entwickler gemeinsam an einer Aufgabe arbeiten. Eine Person schreibt Code (Driver), die andere überwacht und denkt kritisch mit (Navigator) — Rollen werden regelmäßig gewechselt.

## Kernkonzept

**Driver und Navigator**: Der Driver sitzt am Keyboard und schreibt Code. Der Navigator schaut über die Schulter, denkt strategisch, entdeckt Fehler und plant die nächsten Schritte. Diese Rollen sollten alle 15-30 Minuten wechseln.

**Gemeinsames Problem-Solving**: Zwei Gehirne sind besser als eins. Durch den ständigen Dialog entstehen bessere Lösungen, mehr Tests und weniger Bugs. Der ständige Austausch verhindert Tunnelblick.

**Wissenstransfer in Echtzeit**: Weniger erfahrene Entwickler lernen direkt vom Senior. Architektur-Wissen, Coding-Standards und Best Practices werden organisch weitergegeben — schneller als in Code Reviews.

## Code-Beispiel

```java
// Driver schreibt den Code
public class PaymentProcessor {
    
    // Navigator fragt: "Haben wir das auch für null-Werte getestet?"
    public boolean processPayment(Payment payment) {
        if (payment == null) {  // ← Driver fügt hinzu, weil Navigator es erwähnt
            throw new IllegalArgumentException("Payment darf nicht null sein");
        }
        
        // Driver und Navigator diskutieren gemeinsam über die beste Fehlerbehandlung
        try {
            return validateAndCharge(payment);
        } catch (PaymentException e) {
            // Navigator schlägt vor: "Lass uns das auch loggen"
            logger.error("Payment fehlgeschlagen für: " + payment.getId(), e);
            return false;
        }
    }
}
```

## Wichtige Punkte

- **Rollen aktiv wechseln** (15-30 Min): Beide lernen fahren & Navigation
- **Offene Kommunikation** ist essentiell — aktiv nachfragen statt nur zuschauen
- **Nicht zuschauen, sondern denken**: Navigator denkt einen Schritt voraus
- **Für komplexe Probleme ideal**: Bei trivialen Tasks kann es Zeit verschwenden
- **Reduziert Code-Review-Bottleneck**: Code ist bereits peer-reviewed während des Schreibens

## Klassische Fragen

### Ist Pair Programming nicht Zeitverschwendung?

Nein — zwar sitzt man zu zweit, aber die resultierende Code-Qualität ist höher, es entstehen weniger Bugs und weniger Zeit geht für Code Reviews drauf. Studien zeigen: Pair Programming dauert 15% länger, produziert aber 15% weniger Fehler.

---

### Wann sollte man Pair Programming **nicht** nutzen?

Bei simplen, strukturierten Aufgaben (z.B. Konfigurationsdateien ändern, einfache UI-Anpassungen). Sinnvoll ist Pair Programming bei: neuen Features, kritischen Bugfixes, Architektur-Entscheidungen und für Onboarding.

---

### Wie kann man Remote Pair Programming effektiv gestalten?

Nutze Screen Sharing + Video Call + gemeinsame IDE-Tools (VS Code Live Share, IntelliJ Code With Me). Die Latenz ist niedrig, Rollen sind trotzdem klar erkennbar. Voraussetzung: stabile Internetverbindung & psychologische Sicherheit.

---

## Wusstest du schon?

Pair Programming wurde populär durch **Extreme Programming (XP)**, entwickelt in den 1990ern. Kent Beck und sein Team bei Chrysler programmierte **die gesamte Codebasis zu zweit** — mit drastisch besseren Ergebnissen. Viele Entwickler dachten damals: „Das ist Wahnsinn!" 😄 Heute ein bewährter Standard in agilen Teams.

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
