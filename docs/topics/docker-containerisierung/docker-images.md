---
outline: deep
---

# Docker Images – Base Image & Layer Cache

<div class="meta">
  <span class="difficulty medium">🟡 Mittel</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">25.03.2026</span>
</div>

---

## Zusammenfassung

> Ein **Base Image** ist die Grundlage jedes Docker Images (z.B. ubuntu, alpine, openjdk). Der **Layer Cache** ist Dockers Mechanismus, um bereits erstellte Image-Layer wiederzuverwenden und damit Builds zu beschleunigen.

## Kernkonzept

**Base Image** = Startpunkt für dein Dockerfile. Es enthält das Betriebssystem und grundlegende Tools. Du wählst bewusst, welche OS/Runtime du benötigst (alpine = minimal, ubuntu = vollwertig, distroless = nur App).

**Layer Cache** = Jede Zeile im Dockerfile erstellt einen neuen Layer. Docker speichert diese Layer zwischen. Wenn sich nichts ändert, nutzt Docker den gecachten Layer wieder — statt alles neu zu bauen. Das spart Zeit und Bandbreite.

**Praktische Folge**: Layer-Reihenfolge im Dockerfile ist **kritisch**. Häufig ändernde Befehle (z.B. `COPY .`) sollten am Ende stehen, damit frühere Layer (z.B. Dependencies installieren) gecacht bleiben.

## Code-Beispiel

```dockerfile
# Base Image wählen — klein und schnell
FROM openjdk:17-slim

# Dependency Layer — ändert sich selten, wird gecacht
RUN apt-get update && apt-get install -y curl

# Application Layer — ändert sich oft, bricht Cache
COPY target/myapp.jar /app/
WORKDIR /app
CMD ["java", "-jar", "myapp.jar"]
```

```bash
# Ersten Build: Alle Layer werden erstellt
docker build -t myapp:1.0 .

# Zweiter Build (JAR unverändert): Docker nutzt gecachte Layer
docker build -t myapp:1.0 .  # ⚡ Viel schneller!

# JAR-Datei geändert: Layer-Cache wird ab COPY invalidiert
docker build -t myapp:1.1 .  # Nur COPY und CMD neu, apt-Layer gecacht
```

## Wichtige Punkte

- **Base Image-Wahl**: alpine (~5MB) vs. ubuntu (~77MB) — Trade-off zwischen Größe und Vollständigkeit
- **Layer Cache bricht**, wenn Befehlinput sich ändert — auch nur 1 Byte unterschied invalidiert alles danach
- **Multistage Builds** nutzen mehrere Base Images (Build-Stage + Runtime-Stage) für kleinere finale Images
- **`--no-cache` Flag**: `docker build --no-cache .` ignoriert den Cache komplett — seltener, aber manchmal nötig
- **Order matters**: Befehle, die sich ändern, gehören nach hinten (COPY vor RUN, nicht andersherum)

## Klassische Fragen

### Warum sollte ich alpine statt ubuntu als Base Image nutzen?

Alpine ist 15x kleiner (~5MB vs. 77MB), startet schneller und reduziert Attack-Surface. Nachteil: Minimale Standard-Tools, manchmal Kompatibilitätsprobleme mit glibc-abhängigen Libraries. Für Java ideal mit `openjdk:17-alpine`.

---

### Mein Docker Build ist immer langsam — warum wird der Cache nicht genutzt?

Der Cache bricht, sobald sich eine Zeile im Dockerfile ändert. Häufiger Grund: `COPY .` oder `ADD .` — jede Änderung im Projekt-Ordner invalidiert diesen Layer und alle folgenden. **Lösung**: Spezifisch kopieren (`COPY pom.xml .`, dann `COPY src/ src/`), Dependencies zuerst installieren, App zuletzt kopieren.

---

### Was ist der Unterschied zwischen distroless und alpine?

**Alpine**: Minimales Linux OS mit ash-Shell (~5MB). **Distroless**: Nur die App + Runtime, keine Shell oder Package Manager (~20MB für Java). Distroless ist sicherer (keine Tools für Attacken), aber weniger flexibel zum Debuggen.

---

## Wusstest du schon?

🎯 **Layer Cache ist eine der größten Performance-Geheimwaffen in Docker** — aber auch eine der meistversäumten! Manche Teams brauchen 10 Minuten pro Build, weil sie `COPY . .` an den Anfang setzen. Mit korrekter Layer-Ordnung dasselbe Projekt in 2 Sekunden. Der Cache ist nicht magisch — er ist Planung.

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
