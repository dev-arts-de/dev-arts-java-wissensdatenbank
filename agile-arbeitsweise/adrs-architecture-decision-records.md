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

Architecture Decision Records (ADRs) sind strukturierte Dokumente, die wichtige technische Entscheidungen in einem Projekt dokumentieren. Sie dienen dazu, den Grund, Kontext und Konsequenzen von Architekturentscheidungen festzuhalten. ADRs sind ein essentielles Werkzeug in agilen Teams, um Wissen zu bewahren und neue Teamkollegen schnell einzuarbeiten.

Ein ADR besteht typischerweise aus: Status (Proposed, Accepted, Deprecated), Kontext (Problemstellung und Einflussfaktoren), Entscheidung (die getroffene Lösung), Konsequenzen (Vor- und Nachteile) und manchmal Alternativen. Diese Struktur ermöglicht es, nachzuvollziehen, warum eine bestimmte technische Richtung gewählt wurde und nicht eine andere.

ADRs werden häufig im Repository abgelegt (z.B. im `/docs/adr` Verzeichnis) und mit Versionskontrolle verwaltet. Dies macht sie zu einem lebenden Dokument, das mit dem Projekt wächst. Sie sind besonders wertvoll für Teams, die remote arbeiten oder hohe Fluktuation haben, da sie institutionelles Wissen sichern und Diskussionen transparent dokumentieren.

## Code-Beispiele

```java
// ADR Template (als Markdown-Datei im Projekt)
// docs/adr/001-use-spring-boot-framework.md

# ADR 001: Spring Boot als Framework verwenden

## Status
Accepted

## Kontext
Das Team benötigt ein Java Web Framework mit hoher Produktivität 
und großem Ökosystem. Zu diesem Zeitpunkt gab es Diskussionen 
zwischen Spring Boot, Quarkus und traditionellem Spring.

## Entscheidung
Wir verwenden Spring Boot 3.x als primäres Framework für 
Microservices und REST-APIs.

## Konsequenzen
- Positive: Schnelle Entwicklung, große Community, umfangreiche 
  Dependencies, gute Dokumentation
- Negative: Größere JAR-Dateien, höherer Memory-Footprint bei 
  traditionellen JVMs (gelöst durch GraalVM)
- Risiko: Vendor-Lock-in minimiert durch standardisierte Interfaces

## Alternativen
- Quarkus: Zu dem Zeitpunkt weniger ausgereift, aber bessere 
  Cloud-Optimierung
- Micronaut: Kleineres Ökosystem, aber schneller startup-time
```

```java
// Praktisches Beispiel: Dokumentierung einer Spring-Konfigurationsentscheidung
public class ApplicationConfig {
    
    /**
     * ADR-002: Dependency Injection über Constructor Injection
     * 
     * Kontext: Team benötigte Klarheit über bevorzugte DI-Methode
     * Entscheidung: Constructor Injection statt Field Injection
     * Konsequenzen: Bessere Testbarkeit, explizite Dependencies, 
     *               unmögliche zirkuläre Dependencies
     */
    private final UserRepository userRepository;
    private final NotificationService notificationService;
    
    // Constructor Injection (empfohlen)
    public ApplicationConfig(UserRepository userRepository, 
                            NotificationService notificationService) {
        this.userRepository = userRepository;
        this.notificationService = notificationService;
    }
    
    // Nicht empfohlen: Field Injection
    // @Autowired private UserRepository userRepository;
}
```

## Wichtige Punkte

- ADRs dokumentieren das **Warum**, nicht nur das **Was** einer technischen Entscheidung
- ADRs sollten **kurz und prägnant** sein (eine bis zwei Seiten), um tatsächlich gelesen zu werden
- Der **Status** (Proposed, Accepted, Deprecated) ist crucial für die Verwaltung von technischen Schulden
- ADRs fördern **Transparenz** und ermöglichen asynchrone Diskussionen in verteilten Teams
- Regelmäßige **Review und Archivierung** alter ADRs halten das System wartbar und relevant

## Interview-Fragen

### Warum sind ADRs wichtiger in agilen Teams als in Wasserfall-Projekten?
In agilen Teams mit hoher Änderungshäufigkeit und möglicherweise verteilten Strukturen ist das schnelle Verständnis von Entscheidungen kritisch. ADRs ermöglichen asynchrone Kommunikation, reduzieren Wiederholungsdiskussionen und bewahren Kontext, wenn Sprints schnell voranschreiten. In Wasserfall-Projekten mit linearen Phasen ist dieser Bedarf geringer.

---

### Wie unterscheidet sich ein ADR von klassischer technischer Dokumentation?
ADRs dokumentieren **Entscheidungsprozesse** (Kontext, Alternativen, Konsequenzen), während technische Dokumentation das **aktuelle System** beschreibt. ADRs sind entscheidungsorientiert und bewahren historischen Kontext; Dokumentation ist deskriptiv und gegenwartsorientiert. Oft werden ADRs später in allgemeine Architektur-Dokumentation integriert.

---

### Wie behandelt man veraltete ADRs (deprecated Status)?
Veraltete ADRs sollten **nicht gelöscht**, sondern auf Status "Deprecated" oder "Superseded" gesetzt werden mit Referenz zur neuen ADR. Dies bewahrt die Entscheidungsgeschichte und erklärt, warum ursprüngliche Lösungen verlassen wurden. Dies ist wertvoll, um zu verhindern, dass alte Debatten erneut geführt werden.

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
