---
outline: deep
---

# ADRs – Architecture Decision Records

<div class="meta">
  <span class="difficulty easy">🟢 Einfach</span>
  <span class="status">Bearbeitet ☑️</span>
</div>

---

## Notizen

Architecture Decision Records (ADRs) sind strukturierte Dokumente, die wichtige architektonische Entscheidungen in einem Softwareprojekt festhalten. Sie dienen als Kommunikationsmittel zwischen Entwicklern und dokumentieren das "Warum" hinter technischen Entscheidungen, nicht nur das "Was". ADRs sind besonders wertvoll in agilen Teams, da sie schnell erstellt und aktualisiert werden können, ohne aufwändige Prozesse zu erfordern.

Ein typisches ADR enthält: Titel, Status (Proposed/Accepted/Deprecated), Kontext (warum die Entscheidung nötig war), Decision (was entschieden wurde), Consequences (Auswirkungen), und oft auch Alternativen, die berücksichtigt wurden. Diese minimale Struktur ermöglicht schnelle Dokumentation, während sie dennoch alle wichtigen Informationen erfasst.

ADRs ermöglichen es neuen Team-Mitgliedern, die Architektur-Geschichte des Projekts zu verstehen, ohne erfahrene Entwickler fragen zu müssen. Sie verhindern auch, dass frühere Entscheidungen vergessen werden und später irrtümlich rückgängig gemacht werden. In verteilten agilen Teams sind ADRs ein asynchrones Kommunikationsmittel, das Wissen bewahrt.

Die Verwendung von ADRs fördert eine Kultur der bewussten Entscheidungsfindung. Sie zwingen Teams, ihre Entscheidungen zu überdenken und zu dokumentieren, bevor sie implementiert werden. Dies führt oft zu besseren Entscheidungen und einer klareren Kommunikation von Anfang an.

## Code-Beispiele

```java
/**
 * ADR-001: Verwendung von Dependency Injection für Service-Management
 * 
 * Status: Accepted
 * 
 * Context:
 * Das Projekt wächst und hat mehrere Services mit komplexen Abhängigkeiten.
 * Die manuelle Verwaltung von Abhängigkeiten wird zunehmend fehleranfällig.
 * 
 * Decision:
 * Wir nutzen Spring Dependency Injection Container für die Verwaltung
 * aller Services und ihre Abhängigkeiten.
 * 
 * Consequences:
 * + Reduzierter Boilerplate-Code
 * + Einfacheres Unit-Testing durch Mocking
 * - Zusätzliche Spring-Abhängigkeit
 * - Steile Lernkurve für neue Team-Mitglieder
 */

@Configuration
public class ServiceConfiguration {
    
    @Bean
    public UserRepository userRepository() {
        return new JpaUserRepository();
    }
    
    @Bean
    public UserService userService(UserRepository repository) {
        return new UserService(repository);
    }
}

/**
 * ADR-002: Verwendung von JPA für Data Access
 * 
 * Status: Accepted
 * 
 * Context:
 * Wir benötigen eine Datenschicht, die verschiedene Datenbanken unterstützt.
 * 
 * Decision:
 * JPA mit Hibernate als Standard ORM-Framework.
 * 
 * Consequences:
 * + DB-Unabhängigkeit
 * + Automatisches Mapping zwischen Objekten und Tabellen
 * - Performance-Overhead durch ORM
 * - N+1 Query Problem muss beachtet werden
 */

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "email", unique = true)
    private String email;
    
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Order> orders;
}
```

## Wichtige Punkte

- ADRs dokumentieren architektonische Entscheidungen mit Kontext, Entscheidung und Konsequenzen
- Sie bewahren das Wissen über "Warum"-Entscheidungen und verhindern Wissens-Verlust
- ADRs sollten kurz, prägnant und zeitnah erstellt werden (idealerweise max. 1-2 Seiten)
- Sie dienen als Kommunikationsmittel für verteilte und asynchrone Teams in agilen Projekten
- Alte oder überholte ADRs sollten als "Deprecated" markiert werden, nicht gelöscht, um die Geschichte zu bewahren

## Interview-Fragen

### Wann sollte ein Team ein ADR erstellen?

Ein ADR sollte erstellt werden, wenn eine Entscheidung architektonischer Natur ist, die Auswirkungen auf mehrere Team-Mitglieder hat, langfristig relevant bleibt oder zukünftige Entscheidungen beeinflusst. Beispiele: Wahl des Web-Frameworks, Datenbanktyp, API-Design-Ansatz, oder Sicherheitsarchitektur. Kleine, kurzfristige technische Entscheidungen benötigen keine ADRs.

---

### Wie unterscheiden sich ADRs von klassischer Architekturdokumentation?

ADRs sind leichter und agiler als klassische Architekturdokumentation. Sie dokumentieren einzelne Entscheidungen inkl. des Kontexts und der Alternativen, während klassische Dokumentation die Gesamtarchitektur beschreibt. ADRs können schnell gepflegt werden und wachsen organisch mit dem Projekt, während klassische Dokumentation oft veraltet.

---

### Wie behandelt man ein ADR, das sich später als falsch herausstellt?

Man markiert das ADR als "Deprecated" und erstellt ein neues ADR, das die Änderung dokumentiert. Das neue ADR sollte auf das alte referenzieren und begründen, warum die ursprüngliche Entscheidung revidiert wurde. Dies bewahrt die Projekt-Historie und erklärt zukünftigen Entwicklern, warum die frühere Entscheidung nicht mehr gültig ist.

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
