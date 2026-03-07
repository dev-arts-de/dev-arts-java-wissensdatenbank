---
outline: deep
---

# JDK vs. JRE vs. JVM

<div class="meta">
  <span class="difficulty easy">🟢 Einstieg</span>
  <span class="status">Bearbeitet</span>
</div>

---

## Notizen

JDK (Java Development Kit) liefert Tools und Libraries um Java Applikationen zu entwickeln. JDK Funktioniert mit JRE und JVM.
JRE (Java Runtime Environment) liefert Libraries und JVM wir benötigt um Java Applikationen laufen zu lassen. JVM (Java Virtual Machine) führt den kompilierten Java Bytecode auf dem System aus.
Wichtig zu verstehen ist: Java ist mit unter eine sehr populäre Sprache da Sie eine Plattformunabhängige Sprache ist. Der Grund dafür ist das JVM. Java Bytecode kann auf jeder beliebigen JVM laufen, aber eine JVM ist plattformabhängig zu installieren.

### JDK (Java Development Kit)
JDK ist ein Software-Entwicklungskit, das zum Erstellen von Java-Anwendungen verwendet wird. Es enthält die JRE und eine Reihe von Entwicklungstools.

- Enthält einen Compiler (javac), einen Debugger und Dienstprogramme wie jar und javadoc.
- Stellt die JRE bereit, sodass auch Java-Programme ausgeführt werden können.
- Wird von Entwicklern zum Schreiben, Kompilieren und Debuggen von Code benötigt.

#### Komponenten des JDK:

- JRE (JVM + Bibliotheken)
- Entwicklungswerkzeuge (Compiler, jar, javadoc, Debugger)

#### Hinweis:

- Das JDK dient nur zur Entwicklung (es wird nicht zum Ausführen von Java-Programmen benötigt).
- Das JDK ist plattformabhängig (unterschiedliche Versionen für Windows, Linux, macOS).

### JRE (Java Runtime Environment)
JRE bietet eine Umgebung um Java programme laufen zu lassen, aber besitzt keine entwickler Tools. Der Sinn von Java Runtime Environments ist für End-User die Anwendungen ausführen müssen.

- Innerhalb der JRE ist die JVM zu finden und Standard Klassen Libraries
- Liefert Alle Bestandteile um eine Java Applikation zu laufen
- Ist kein Kompiler oder Debugger

#### Note:

- JRE dient nur zum Ausführen von Anwendungen, nicht zu deren Entwicklung.
- Es ist plattformabhängig (unterschiedliche Builds für unterschiedliche Betriebssysteme).

### JVM (Java Virtual Machine)
JVM ist das zentrale Ausführungssystem von Java. Es ist verantworting für die Konvertierung von Bytecode in maschinell lesbaren Code.

- Teil von JDK und JRE
- Benutzt Memory Management und Garbage Kollektion
- Bietet Plattformunabhägigkeit, da es den selben Bytecode auf verschiedenen Systemen ausführt

#### Note:

- JVM implementierungen sind Plattformabhängig
- Bytecode ist jedoch plattform Unabhängig und wird auf jeder JVM ausgeführt.
- Moderne (neue) JVMs sind abhängig von Just-In-Time (JIT) kompilierung für Performance

| Aspect | JDK | JRE | JVM |
|------|------|------|------|
| Purpose | Used to develop Java applications | Used to run Java applications | Executes Java bytecode |
| Platform Dependency | Platform-dependent (OS specific) | Platform-dependent (OS specific) | JVM is OS-specific, but bytecode is platform-independent |
| Includes | JRE + Development tools (`javac`, debugger, etc.) | JVM + Libraries (e.g., `rt.jar`) | ClassLoader, JIT Compiler, Garbage Collector |
| Use Case | Writing and compiling Java code | Running a Java application on a system | Convert bytecode into native machine code |

## Interview-Fragen

### Was ist der Unterschied zwischen JDK, JRE und JVM?

**Antwort:** Das JDK ist das komplette Entwicklungspaket – es enthält die JRE plus Entwicklungstools wie den Compiler `javac`, Debugger und Utilities wie `jar` und `javadoc`. Die JRE ist die Laufzeitumgebung, die man braucht um Java-Programme auszuführen – sie enthält die JVM und die Standard-Bibliotheken. Die JVM selbst ist die virtuelle Maschine, die den kompilierten Bytecode in nativen Maschinencode übersetzt und ausführt. Kurz gesagt: JDK ⊃ JRE ⊃ JVM.

---

### Warum gilt Java als plattformunabhängig, obwohl die JVM plattformabhängig ist?

**Antwort:** Java-Quellcode wird zu Bytecode kompiliert, und dieser Bytecode ist plattformunabhängig – er sieht auf jedem System gleich aus. Die JVM hingegen ist plattformspezifisch, es gibt also unterschiedliche JVM-Implementierungen für Windows, Linux, macOS etc. Das Prinzip ist „Write Once, Run Anywhere": Man schreibt den Code einmal, kompiliert ihn zu Bytecode, und dieser läuft dann auf jeder JVM, egal auf welchem Betriebssystem sie installiert ist.

---

### Braucht ein Endanwender das JDK um eine Java-Applikation auszuführen?

**Antwort:** Nein. Ein Endanwender braucht nur die JRE (bzw. ab Java 11+ ein JDK, da Oracle die separate JRE-Distribution eingestellt hat). Das JDK enthält zusätzlich Entwicklertools wie den Compiler, die ein reiner Anwender nicht benötigt. In der Praxis wird heute aber oft einfach das JDK installiert, weil es die JRE mit einschließt.

---

### Was passiert unter der Haube, wenn man `java MyApp` ausführt?

**Antwort:** Die JVM startet und der ClassLoader lädt die Klasse `MyApp.class` (den Bytecode). Dann verifiziert der Bytecode-Verifier, dass der Code valide und sicher ist. Anschließend interpretiert die JVM den Bytecode oder kompiliert ihn über den JIT-Compiler (Just-In-Time) in nativen Maschinencode für bessere Performance. Während der Ausführung kümmert sich die JVM außerdem um Memory Management und Garbage Collection.

---

### Was ist der JIT-Compiler und warum ist er wichtig?

**Antwort:** Der JIT-Compiler (Just-In-Time) ist ein Bestandteil der JVM, der zur Laufzeit häufig ausgeführten Bytecode („Hot Spots") in nativen Maschinencode übersetzt. Ohne JIT würde die JVM den Bytecode nur interpretieren, was langsamer wäre. Durch JIT-Kompilierung erreicht Java eine Performance, die nahe an nativ kompilierten Sprachen wie C++ liegt. Moderne JVMs wie HotSpot nutzen das aggressiv – Code der selten läuft wird interpretiert, Code der oft läuft wird kompiliert und optimiert.

---

### Was ist der Unterschied zwischen Bytecode und Maschinencode?

**Antwort:** Bytecode ist ein Zwischenformat, das der Java-Compiler (`javac`) aus dem Quellcode erzeugt. Er ist plattformunabhängig und wird in `.class`-Dateien gespeichert. Maschinencode hingegen ist der native Code, den die CPU direkt ausführen kann – er ist plattformspezifisch. Die JVM übernimmt die Übersetzung von Bytecode zu Maschinencode, entweder durch Interpretation oder JIT-Kompilierung.

---

### Können andere Sprachen auf der JVM laufen?

**Antwort:** Ja, die JVM ist nicht auf Java beschränkt. Jede Sprache, die zu JVM-kompatiblem Bytecode kompiliert werden kann, läuft auf der JVM. Bekannte Beispiele sind Kotlin, Scala, Groovy und Clojure. Das ist einer der großen Vorteile der JVM-Architektur – das gesamte Java-Ökosystem (Libraries, Tools, Performance-Optimierungen) steht auch diesen Sprachen zur Verfügung.

---

### Was macht der Garbage Collector in der JVM?

**Antwort:** Der Garbage Collector (GC) ist für automatisches Memory Management zuständig. Er identifiziert Objekte im Heap, die nicht mehr referenziert werden, und gibt deren Speicher wieder frei. Das bedeutet, Entwickler müssen sich nicht manuell um `malloc`/`free` kümmern wie in C. Es gibt verschiedene GC-Implementierungen in der JVM (z.B. G1, ZGC, Shenandoah), die jeweils unterschiedliche Trade-offs zwischen Durchsatz und Latenz bieten.

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
