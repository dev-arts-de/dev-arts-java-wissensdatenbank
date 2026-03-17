---
outline: deep
---

# Warum Kubernetes?

<div class="meta">
  <span class="difficulty medium">🟡 Mittel</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">17.03.2026</span>
</div>

---

## Zusammenfassung

> Kubernetes ist eine **Orchestrierungsplattform** für Container-Deployment, Skalierung und Verwaltung. Sie automatisiert Aufgaben wie Load-Balancing, Ressourcen-Allokation und Self-Healing in Produktionsumgebungen.

## Kernkonzept

**Kubernetes löst das Skalierungs- und Verwaltungsproblem** von Containern (Docker). Während Docker einen einzelnen Container verwaltet, orchestriert Kubernetes Tausende Container über mehrere Server verteilt.

**Automatisierung statt manuelle Verwaltung**: Statt Services manuell zu starten/stoppen, definierst du den **Desired State** (z.B. "5 Replicas laufen immer"). Kubernetes sorgt automatisch dafür, dass dieser Zustand erhalten bleibt.

**Kernkomponenten**: **Pods** (kleinste Einheit), **Services** (Netzwerk-Abstraktion), **Deployments** (deklarative Versionierung), **Namespaces** (logische Isolation), **ConfigMaps/Secrets** (Konfiguration & Geheimnisse).

## Code-Beispiel

```yaml
# Kubernetes Deployment - deklarativ definiert
apiVersion: apps/v1
kind: Deployment
metadata:
  name: java-app-deployment
spec:
  replicas: 3  # Kubernetes sorgt für 3 laufende Instanzen
  selector:
    matchLabels:
      app: java-app
  template:
    metadata:
      labels:
        app: java-app
    spec:
      containers:
      - name: java-container
        image: my-java-app:1.0
        ports:
        - containerPort: 8080
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:  # Self-Healing: Pod wird restartet, wenn unhealthy
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 10
          periodSeconds: 5
```

```java
// Java-App: Readiness/Liveness Endpoints für K8s
@RestController
public class HealthController {
    
    @GetMapping("/health")
    public ResponseEntity<?> health() {
        // Kubernetes prüft das regelmäßig
        return ResponseEntity.ok("{\"status\":\"UP\"}");
    }
    
    @GetMapping("/ready")
    public ResponseEntity<?> readiness() {
        // Ist die App bereit, Traffic zu verarbeiten?
        if (databaseConnected && cacheWarmed) {
            return ResponseEntity.ok("{\"ready\":true}");
        }
        return ResponseEntity.status(503).build();
    }
}
```

## Wichtige Punkte

- **Deklarativ statt imperativ**: Du beschreibst den Zielzustand, nicht die Schritte
- **Self-Healing & Redundanz**: Fehlerhafte Container werden automatisch ersetzt; Lastverteilung ist eingebaut
- **Multi-Cluster & Skalierbarkeit**: Kann über hunderte von Maschinen verteilt werden; horizontal skalierbar durch HPA (Horizontal Pod Autoscaler)
- **Konfiguration & Secrets trennen**: Umgebungsvariablen, API-Keys etc. werden externalisiert (ConfigMaps/Secrets) — nicht ins Docker-Image
- **Rolling Updates & Rollbacks**: Zero-Downtime-Deployments; einfaches Rollback bei Fehlern

## Klassische Fragen

### Warum nicht einfach Docker verwenden?
Docker verwaltet einen Container auf einer Maschine. Kubernetes orchestriert hunderte Container über mehrere Maschinen, mit Auto-Scaling, Load-Balancing, Self-Healing und deklarativer Verwaltung. Docker ist für **Entwicklung**, Kubernetes für **Produktion** gedacht.

---

### Was ist der Unterschied zwischen Deployment und Pod?
Ein **Pod** ist die kleinste Einheit (ein oder mehrere Container). Ein **Deployment** ist eine höhere Abstraktion, die sicherstellt, dass immer X Replicas eines Pods laufen, Updates verwaltet und bei Ausfällen automatisch neue Pods erstellt.

---

### Wann sollte man Kubernetes verwenden?
Kubernetes ist sinnvoll bei: **Microservices-Architektur**, **hohe Verfügbarkeitsanforderungen**, **Auto-Scaling-Bedarf**, **Multi-Tenant-Infrastruktur**. Für monolithische Apps mit stabiler Last ist K8s oft Overkill.

---

### Wie funktioniert Service-Discovery in Kubernetes?
Kubernetes bietet **internes DNS**: Jeder Service erhält einen DNS-Namen (z.B. `my-service.default.svc.cluster.local`). Pods können sich einfach über Hostnamen erreichen; K8s managed die IP-Adressen transparent.

---

### Was ist ein Namespace?
**Namespaces** sind logische Cluster-Partitionen zur Isolation (Entwicklung, Staging, Produktion in einem Cluster). Sie ermöglichen Multi-Tenancy und verhindern unbeabsichtigte Konflikte zwischen Teams.

---

## Wusstest du schon?

Kubernetes wurde von Google entwickelt und 2014 open-source freigegeben — basierend auf **Borg

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
