---
outline: deep
---

# Unit Testing

<div class="meta">
  <span class="difficulty easy">🟢 Einfach</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">19.03.2026</span>
</div>

---

## Zusammenfassung

> Unit Testing ist das automatisierte Testen von **einzelnen, isolierten Code-Einheiten** (meist Methoden/Klassen). Es ist die Grundlage für zuverlässige Software und ermöglicht schnelle Refactorings ohne Angst vor Regressions.

## Kernkonzept

**Unit Tests** prüfen das Verhalten **einer einzelnen Methode oder Klasse** unabhängig von anderen Komponenten.

Sie basieren auf dem **AAA-Pattern**:
- **Arrange**: Testdaten und Zustand vorbereiten
- **Act**: Die zu testende Methode aufrufen
- **Assert**: Ergebnis überprüfen

**Isolation ist zentral**: Tests sollten voneinander unabhängig sein und keine externen Abhängigkeiten (DB, APIs, File-System) haben. Dafür nutzt man **Mocks** und **Stubs**.

## Code-Beispiel

```java
// Klasse unter Test
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}

// Unit Test mit JUnit 5
@Test
void testAddPositiveNumbers() {
    // Arrange
    Calculator calc = new Calculator();
    
    // Act
    int result = calc.add(5, 3);
    
    // Assert
    assertEquals(8, result, "5 + 3 sollte 8 ergeben");
}

@Test
void testAddNegativeNumbers() {
    Calculator calc = new Calculator();
    int result = calc.add(-5, -3);
    assertEquals(-8, result);
}
```

## Wichtige Punkte

- **Schnell**: Unit Tests dauern Millisekunden, nicht Sekunden
- **Wiederholbar**: Jeder Test liefert immer das gleiche Ergebnis
- **Unabhängig**: Tests beeinflussen sich gegenseitig nicht
- **Aussagekräftig**: Der Test-Name beschreibt klar, was geprüft wird
- **Wartbar**: Ein Test = eine Verantwortung; komplexe Tests sind ein Code-Smell

## Klassische Fragen

### Wann schreibe ich Unit Tests?
**Vor oder nach dem Code?** Idealerweise **vorher (TDD)**, praktisch meist parallel oder direkt danach. Die wichtigsten Faustregel: Je kritischer der Code, desto wichtiger der Test.

---

### Muss ich jede Methode testen?
Nein. Triviale Getter/Setter brauchst du nicht zu testen. **Fokussiere auf Business-Logik**, Fehlerbehandlung und Edge Cases. Eine **Code-Coverage von 70-80%** ist realistisch und sinnvoll.

---

### Unit Test vs. Integrations Test?
**Unit Tests** isolieren eine Einheit (Mock-Abhängigkeiten). **Integrations Tests** prüfen mehrere Komponenten zusammen (echte DB, APIs). Unit Tests sind schneller, Integrations Tests liefern höhere Gewissheit.

---

### Wie mock ich Abhängigkeiten richtig?
Nutze **Mockito** (`when().thenReturn()`), **Spy** für Partial-Mocks oder **Test-Doubles**. Mocks simulieren echte Objekte, aber **zu viele Mocks = zu viel Isolation** = unrealistische Tests.

---

### Was ist ein guter Test-Name?
**Pattern**: `testMethodeName_WhenCondition_ThenExpectation`
Beispiel: `testCalculatePrice_WhenDiscountApplied_ThenReturnReducedPrice`

---

## Wusstest du schon?

🎯 **TDD-Paradoxon**: Entwickler, die **zuerst Tests schreiben (TDD)**, benötigen am Ende **20-40% weniger Debug-Zeit**, schreiben aber **10-15% mehr Code**. Das zahlt sich langfristig massiv aus!

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
