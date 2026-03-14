---
outline: deep
---

# Wildcards – extends & super

<div class="meta">
  <span class="difficulty medium">🟡 Mittel</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">14.03.2026</span>
</div>

---

## Zusammenfassung

> Wildcards sind Platzhalter in Generics, die **obere** (`extends`) und **untere** (`super`) Grenzen setzen. Sie ermöglichen flexible, typsichere APIs, wenn du nicht mit einem konkreten Typ arbeiten kannst oder willst.

## Kernkonzept

**`? extends T`** (obere Schranke / Upper Bound)
Akzeptiert `T` und alle **Subtypen** von `T`. Du kannst **nur lesen**, nicht schreiben. Die Methode weiß nicht, welcher konkrete Subtyp kommt.

**`? super T`** (untere Schranke / Lower Bound)
Akzeptiert `T` und alle **Supertypen** von `T`. Du kannst **schreiben**, aber nur `T` (oder `null`). Beim Lesen erhältst du `Object`.

**Merkhilfe: PECS**
- **Producer** → `extends` (nur Lesend)
- **Consumer** → `super` (nur Schreibend)

## Code-Beispiel

```java
// Upper Bound: Nur Lesen
void printAnimals(List<? extends Animal> animals) {
    for (Animal a : animals) {  // ✓ sicher zu lesen
        System.out.println(a);
    }
    // animals.add(new Dog()); // ✗ Kompilierungsfehler!
}

// Lower Bound: Schreiben & Lesen
void addDogs(List<? super Dog> list) {
    list.add(new Dog()); // ✓ sicher zu schreiben
    Object obj = list.get(0); // ✓ Rückgabe ist Object
    // Dog dog = list.get(0); // ✗ Unsicher!
}

// Beispielaufrufe
List<Dog> dogs = new ArrayList<>();
List<Animal> animals = new ArrayList<>();

printAnimals(dogs);    // ✓ Dog ist Subtyp von Animal
addDogs(list);         // ✓ Dog ist Subtyp von Dog
```

## Wichtige Punkte

- **`extends`** = **obere Grenze** → nur lesbar (Datenquelle)
- **`super`** = **untere Grenze** → nur schreibbar (Datenziel)
- **Unbegrenzter Wildcard** `<?>`  = `? extends Object` (praktisch nutzlos)
- **Wildcards gelten nur beim Aufruf**, nicht in der Klasse selbst
- **PECS-Regel** hilft dir, die richtige Variante zu wählen
- Bei **gemischtem Zugriff** brauchst du den **konkreten Typ** (keine Wildcards)

## Klassische Fragen

### Warum kann ich nicht schreiben, wenn ich `? extends Animal` nutze?

Der Compiler weiß nicht, ob die Liste `Dog`, `Cat` oder etwas anderes enthält. Wenn du versuchst, ein `Animal` hinzuzufügen, könnte es ein Typ-Fehler sein (z.B. ein `Dog` in eine `Cat`-Liste).

---

### Wann nutze ich `? extends` und wann `? super`?

**`extends`:** Wenn du aus einer Datenstruktur **liest** (z.B. `List` mit Daten abholen).
**`super`:** Wenn du in eine Datenstruktur **schreibst** (z.B. `List` mit Daten füllen).

---

### Kann ich `? extends Dog` in einer Schleife iterieren?

Ja, die **Schleife** nutzt die **Superklasse** (`Animal`). Die Iteration selbst ist sicher, da jedes Element garantiert mindestens ein `Animal` ist.

---

## Wusstest du schon?

🎯 **PECS stammt aus Joshua Blochs "Effective Java"** und ist DAS Mantra für Wildcard-Anfänger — merke dir einfach **"Producer extends, Consumer super"** und du schreibst automatisch typsicheren Code!

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
