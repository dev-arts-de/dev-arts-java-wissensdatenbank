---
outline: deep
---

# Helm Charts Grundlagen

<div class="meta">
  <span class="difficulty easy">🟢 Einfach</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">10.03.2026</span>
</div>

---

## Zusammenfassung

> Helm Charts sind **Template-Pakete für Kubernetes**, die die Deployment-Komplexität abstrahieren. Sie ermöglichen es, komplexe Multi-Container-Anwendungen mit einer einzigen Konfigurationsdatei zu verwalten.

## Kernkonzept

Ein **Helm Chart** ist ein Paket mit vordefinierten Kubernetes-Manifesten (YAML-Dateien). Statt manuell für jede Umgebung verschiedene YAML-Dateien zu erstellen, nutzt man **Templates mit Variablen** (values).

**Struktur eines Charts:**
- `Chart.yaml` — Metadaten (Name, Version)
- `values.yaml` — Standard-Konfigurationswerte
- `templates/` — Kubernetes-Manifeste mit Platzhaltern
- `charts/` — Abhängigkeiten zu anderen Charts

**Workflow:** Helm interpoliert die `values.yaml` in die Templates und generiert finale Kubernetes-Manifeste, die dann deployed werden.

## Code-Beispiel

```yaml
# values.yaml
replicaCount: 3
image:
  repository: myapp
  tag: "1.0.0"
service:
  port: 8080

---

# templates/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ .Release.Name }}-app
spec:
  replicas: {{ .Values.replicaCount }}
  template:
    spec:
      containers:
      - name: app
        image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"
        ports:
        - containerPort: {{ .Values.service.port }}

---

# Installation via CLI
# helm install my-release ./mychart
# helm upgrade my-release ./mychart --values custom-values.yaml
```

## Wichtige Punkte

- **Template Engine:** Nutzt Go's `text/template` — `{{ .Values.schluessel }}` für Variablen-Interpolation
- **Release Management:** `helm install`, `upgrade`, `rollback` für Versionskontrolle
- **Abhängigkeiten:** `Chart.yaml` kann andere Charts als Dependencies deklarieren (`helm dependency update`)
- **Helm Repositories:** Zentrale Paketzentren (z.B. Bitnami, Stable) — installierbar via `helm repo add`
- **Dry-Run Testing:** `helm template` und `helm lint` überprüfen Charts vor dem Deployment

## Klassische Fragen

### Worin liegt der Unterschied zwischen Helm und kubectl?

`kubectl` deployed einzelne YAML-Manifeste direkt, `Helm` abstrahiert diese mit Templates und bietet Dependency Management, Versioning und Rollback. Helm = Paketmanager für Kubernetes (wie npm für Node).

---

### Was ist der Unterschied zwischen `Chart.yaml` und `values.yaml`?

`Chart.yaml` definiert **Metadaten des Pakets** (Name, Version, Beschreibung). `values.yaml` enthält die **konfigurierbaren Standardwerte**, die in Templates eingesetzt werden.

---

### Kann man Charts zu Helm Repositories veröffentlichen?

Ja, Charts werden als `.tgz`-Archive gepackt und in HTTP-basierten Repositories gehostet (z.B. GitHub Pages, ChartMuseum). Dann können andere via `helm repo add` und `helm install` darauf zugreifen.

---

## Wusstest du schon?

**Helm wird oft als "apt für Kubernetes" bezeichnet** — genau wie Linux-Paketmanager komplexe Abhängigkeiten löst, übernimmt Helm diese Aufgabe für Container-Orchestrierung. Ursprünglich 2015 von Deis entwickelt, ist es heute die De-facto-Standard-Lösung für Kubernetes-Package-Management!

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
