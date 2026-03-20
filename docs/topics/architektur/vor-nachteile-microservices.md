---
outline: deep
---

# Vor- und Nachteile von Microservices

<div class="meta">
  <span class="difficulty medium">🟡 Mittel</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">20.03.2026</span>
</div>

---

## Zusammenfassung

> Microservices sind eine Architektur, bei der eine Anwendung in **kleine, unabhängige Services** aufgeteilt wird, die über APIs kommunizieren. Sie ermöglichen Skalierbarkeit, schnellere Deployment-Zyklen und flexible Technologie-Choices.

## Kernkonzept

**Microservices** teilen monolithische Anwendungen in **funktional spezialisierte Services** auf. Jeder Service ist:
- Eigenständig deploybar
- Mit eigener Datenbank
- Über REST/gRPC/Messaging kommunizierend

**Gegensatz zum Monolithen**: Ein großer Codebase vs. viele kleine, verteilte Systeme. Dadurch entstehen neue Herausforderungen (Netzwerk, Konsistenz), aber auch Flexibilität.

**Wichtig**: Microservices sind **kein Allheilmittel**. Sie passen zu großen Teams und komplexen Anforderungen, können aber Overhead verursachen.

## Code-Beispiel

```java
// UserService - unabhängiger Microservice
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserRepository userRepo;
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(userRepo.findById(id).orElse(null));
    }
}

// OrderService - kommuniziert mit UserService
@RestController
@RequestMapping("/api/orders")
public class OrderController {
    
    @Autowired
    private RestTemplate restTemplate;
    
    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        // Aufruf eines anderen Services
        User user = restTemplate.getForObject(
            "http://user-service:8080/api/users/" + order.getUserId(), 
            User.class
        );
        // Order erstellen, falls User existiert
        return ResponseEntity.ok(order);
    }
}
```

## Wichtige Punkte

- **✅ Vorteile**: Independent Deployment, Technology Diversity, Skalierbarkeit einzelner Services, schnellere Feedback-Zyklen
- **❌ Nachteile**: Distributed System Complexity, Netzwerk-Latenz, schwierigere Debugging, Daten-Konsistenz, Operational Overhead
- **DevOps-Anforderung**: Microservices brauchen solide CI/CD-Pipelines und Monitoring (Logs, Metrics, Traces)
- **Domain-Driven Design**: Services sollten an **Business Domains** orientiert sein, nicht technischen Layern
- **Fallstricke**: Nicht bei kleinen Projekten nutzen; zu viele synchrone Calls zwischen Services führen zu Performance-Problemen

## Klassische Fragen

### Wann sollte ich Microservices nutzen?

Bei **großen Teams** (>50 Entwickler), **unterschiedlichen Deployment-Rhythmen** pro Feature und **komplexen Domains** mit klaren Grenzen. Für Startups oder MVPs: zu much overhead.

---

### Wie handle ich Daten-Konsistenz zwischen Services?

Mit **Eventual Consistency**: Services sind nicht immer synchron. Nutze **Event-Sourcing** oder **Saga-Pattern** für verteilte Transaktionen statt ACID-Garantien.

---

### Ist REST die beste Kommunikation zwischen Services?

Nein. **gRPC** ist performanter (Binary, HTTP/2), **Message Queues** (RabbitMQ, Kafka) entkoppeln Services besser. REST ist einfacher, aber synchron und chatty.

---

### Wie teste ich Microservices?

**Unit-Tests** pro Service, **Contract Tests** (Pact) zwischen Services, **Integration Tests** mit Test-Container. Avoid End-to-End-Tests bei vielen Services — zu fragile.

---

## Wusstest du schon?

🎯 **Amazon's Two-Pizza Rule**: Jeff Bezos verfügte, dass jedes Team nur so groß sein sollte, dass man es mit zwei Pizzen füttern kann (~6-10 Leute). Das war die Geburtsstunde von Amazon's Microservice-Architektur — nicht aus technischen, sondern aus **organisatorischen Gründen**! Services als Organisationsstruktur-Abbild.

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
