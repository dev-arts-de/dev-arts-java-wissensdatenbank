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

Architecture Decision Records (ADRs) sind strukturierte Dokumente, die wichtige architektonische Entscheidungen in Softwareprojekten festhalten. Sie dienen als Kommunikationsmittel zwischen Entwicklern, um zu dokumentieren, warum eine bestimmte technische Entscheidung getroffen wurde, welche Alternativen es gab und welche Konsequenzen diese Entscheidung mit sich bringt. ADRs sind besonders wertvoll in agilen Teams, da sie das implizite Wissen explizit machen und neuen Teamkollegen helfen, die Projektgeschichte zu verstehen.

Ein ADR besteht typischerweise aus folgenden Abschnitten: Status (Proposed, Accepted, Deprecated), Kontext (warum die Entscheidung notwendig war), Entscheidung (was wurde beschlossen), Konsequenzen (Vor- und Nachteile) und manchmal Alternativen. Die Nummernierung (ADR-001, ADR-002, etc.) ermöglicht einfache Referenzierung und Versionskontrolle im Repository. ADRs sind bewusst knapp gehalten, um die Adoption zu fördern und schnelle Entscheidungsfindung nicht zu behindern.

Im Kontext agiler Entwicklung ermöglichen ADRs eine bessere Zusammenarbeit und Wissensmanagement. Sie unterstützen die Diskussion vor der Entscheidung, dokumentieren Rationale und ermöglichen es Teams, frühere Entscheidungen zu überdenken, wenn sich die Anforderungen ändern. ADRs fördern auch die Transparenz und Nachvollziehbarkeit technischer Entscheidungen, was besonders in verteilten Teams wichtig ist.

## Code-Beispiele

```java
// ADR-001: Use Spring Boot for REST API Development
/*
Status: Accepted
Date: 2024-01-15

Context:
Das Projekt benötigt ein robustes Framework für die REST-API-Entwicklung.
Die Anforderungen umfassen schnelle Entwicklung, gute Community-Unterstützung 
und einfache Konfiguration.

Decision:
Wir werden Spring Boot als Framework für die REST-API-Entwicklung nutzen.

Consequences:
+ Positive: Schnelle Entwicklung, große Ecosystem, wenig Boilerplate-Code
+ Positive: Einfache Integration mit Datenbanken und anderen Services
- Negative: Zusätzliche Abhängigkeit in der Deployment-Pipeline
- Negative: Learning Curve für neue Teamkollegen

Alternatives:
1. Quarkus: Bessere Performance, weniger Memory-Footprint
2. Micronaut: Ähnliche Vorteile wie Quarkus, weniger etabliert
*/

// Beispiel-Implementierung der Entscheidung:
@SpringBootApplication
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.findById(id));
    }
    
    @PostMapping
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(userService.save(userDTO));
    }
}
```

## Wichtige Punkte

- ADRs dokumentieren das **Warum** hinter technischen Entscheidungen, nicht nur das **Was**
- Ein ADR sollte kurz und prägnant sein (1-2 Seiten) um tatsächlich gelesen zu werden
- ADRs sollten im Versionskontrollsystem (Git) zusammen mit dem Code gespeichert werden (z.B. `docs/adr/`)
- Status-Felder ermöglichen es, Entscheidungen zu überdenken und zu deprecaten, wenn sich Bedingungen ändern
- ADRs fördern asynchrone Kommunikation und Wissensmanagement in agilen Teams

## Interview-Fragen

### Was ist der Hauptzweck eines Architecture Decision Records?
Der Hauptzweck ist, wichtige technische Entscheidungen und deren Rationale zu dokumentieren, damit das implizite Wissen des Teams explizit wird. ADRs helfen neuen Teamkollegen, die Projektgeschichte zu verstehen und ermöglichen es, frühere Entscheidungen nachzuvollziehen und zu hinterfragen.

---

### Welche Abschnitte sollte ein ADR mindestens enthalten?
Ein ADR sollte folgende Abschnitte enthalten: **Status** (Proposed/Accepted/Deprecated), **Kontext** (Hintergrund und Anforderungen), **Entscheidung** (was wurde beschlossen), **Konsequenzen** (Vor- und Nachteile) und idealerweise **Alternativen** (was wurde nicht gewählt und warum).

---

### Wie unterstützen ADRs agile Arbeitsweise?
ADRs unterstützen Agilität durch asynchrone Kommunikation, bessere Wissensverteilung im Team und dokumentierte Entscheidungsfindung. Sie ermöglichen es Teams, schneller Entscheidungen zu treffen, diese zu kommunizieren und später zu überdenken, wenn neue Informationen verfügbar sind oder sich Anforderungen ändern.

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
