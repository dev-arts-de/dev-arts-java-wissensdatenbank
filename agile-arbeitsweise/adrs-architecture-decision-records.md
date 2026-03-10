---
outline: deep
---

# ADRs – Architecture Decision Records

<div class="meta">
  <span class="difficulty medium">🟡 Mittel</span>
  <span class="status">Bearbeitet ☑️</span>
</div>

---

## Notizen

Architecture Decision Records (ADRs) sind strukturierte Dokumente, die architektonische Entscheidungen in Softwareprojekten festhalten. Sie dienen als Kommunikationsmittel zwischen Team-Mitgliedern und dokumentieren nicht nur die getroffene Entscheidung, sondern auch die Gründe, Alternativen und Konsequenzen dahinter. ADRs helfen dabei, Wissen zu bewahren und verhindern, dass bereits getroffene Entscheidungen später erneut hinterfragt werden.

Ein ADR besteht typischerweise aus Abschnitten wie Titel, Status, Kontext, Entscheidung, Begründung, Konsequenzen und eventuellen Alternativen. Diese Struktur ermöglicht es neuen Team-Mitgliedern, schnell die Hintergründe von Architekturentscheidungen zu verstehen. ADRs werden oft in einem Git-Repository versioniert und sind somit Teil der Projektgeschichte.

In agilen Projekten sind ADRs besonders wertvoll, da sie kontinuierliche Entscheidungen dokumentieren und gleichzeitig flexibel bleiben. Sie erlauben es Teams, Entscheidungen zu überprüfen (Status: Deprecated, Superseded) und neue Erkenntnisse einzuarbeiten. Dies fördert eine Kultur der transparenten Kommunikation und informed Decision Making.

## Code-Beispiele

```java
// ADR als Markdown-Datei: adr/0001-use-spring-boot.md

/*
# ADR 0001: Verwendung von Spring Boot für REST-APIs

## Status
Angenommen

## Kontext
Das Projekt benötigt ein Framework für die Entwicklung von REST-APIs.
Wir haben verschiedene Optionen evaluiert: Spring Boot, Quarkus und Micronaut.

## Entscheidung
Wir verwenden Spring Boot als Framework für unsere REST-APIs.

## Begründung
- Größte Community und beste Dokumentation
- Umfangreiches Ökosystem (Spring Data, Spring Security, etc.)
- Team verfügt über Erfahrung mit Spring Boot
- Hervorragende IDE-Unterstützung

## Konsequenzen
+ Schnellere Entwicklung durch bewährte Patterns
+ Gute Skalierbarkeit
- Größere JAR-Dateien im Vergleich zu Quarkus
- Längere Startup-Zeit in Serverless-Umgebungen

## Alternativen
- Quarkus: Bessere Performance, weniger etabliert
- Micronaut: Gute Kompilierungsoptimierung, kleineres Ökosystem
*/

// Beispiel: ADR im Projekt strukturieren
public class ADRRegistry {
    /*
    adr/
    ├── 0001-use-spring-boot.md
    ├── 0002-use-postgresql-for-persistence.md
    ├── 0003-implement-hexagonal-architecture.md
    └── 0004-use-docker-containerization.md
    */
}

// ADR dokumentieren im Java-Code durch Kommentare
public class PaymentService {
    /**
     * ADR 0002: Datenbankwahl PostgreSQL
     * 
     * Kontext: Persistent Layer für Zahlungsdaten
     * Entscheidung: Nutze PostgreSQL statt MongoDB
     * Begründung: ACID-Transaktionen, Datenintegrität kritisch
     * 
     * Siehe: adr/0002-use-postgresql-for-persistence.md
     */
    public void processPayment(Payment payment) {
        // Implementierung
    }
}
```

## Wichtige Punkte

- ADRs dokumentieren das "Warum" hinter Architekturentscheidungen, nicht nur das "Was"
- Format ist standardisiert (Kontext, Entscheidung, Begründung, Konsequenzen, Alternativen)
- ADRs werden versioniert und sind Teil der Git-History des Projekts
- Status-Verwaltung (Proposed, Accepted, Deprecated, Superseded) ermöglicht Nachverfolgung von Änderungen
- ADRs fördern informierte Entscheidungen und verhindern Wiederholung bereits bewerteter Optionen

## Interview-Fragen

### Warum sind ADRs in agilen Projekten wichtiger als in Wasserfallprojekten?
ADRs sind in agilen Projekten essentiell, weil kontinuierliche Architekturänderungen stattfinden. Sie dokumentieren den Entscheidungsprozess in Echtzeit und ermöglichen es dem Team, schnell auf neue Erkenntnisse zu reagieren. In Wasserfallprojekten wird die Architektur oft vorab festgelegt; in agilen Projekten entsteht sie evolutionär – ADRs halten diese Evolution nachvollziehbar.

---

### Wie unterscheidet sich ein ADR von einer User Story?
Ein ADR dokumentiert technische oder architektonische Entscheidungen mit Begründung und Konsequenzen, während eine User Story eine Anforderung aus Kundensicht beschreibt. ADRs sind langfristige Referenzdokumente für das Team; User Stories sind Aufgaben zur Erfüllung von Anforderungen. ADRs können sich auf mehrere User Stories auswirken.

---

### Wie sollte man alte, überwundene ADRs handhaben?
Alte ADRs sollten niemals gelöscht werden. Stattdessen markiert man sie als "Superseded" oder "Deprecated" und verlinkt die neue ADR, die sie ersetzt. Dies bewahrt die Projektgeschichte, hilft neuen Team-Mitgliedern zu verstehen, warum frühere Entscheidungen getroffen wurden, und verhindert, dass das Team dieselben Diskussionen erneut führt.

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
