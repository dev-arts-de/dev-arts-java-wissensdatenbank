---
outline: deep
---

# Docker Compose

<div class="meta">
  <span class="difficulty easy">🟢 Einfach</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">28.03.2026</span>
</div>

---

## Zusammenfassung

> Docker Compose ist ein Tool zum Definieren und Ausführen von **Multi-Container-Docker-Anwendungen**. Mit einer YAML-Datei orchestrierst du mehrere Services (z.B. App + Datenbank + Cache) als eine Einheit.

## Kernkonzept

**Docker Compose** vereinfacht die Verwaltung von mehreren zusammenhängenden Containern durch eine einzige `docker-compose.yml`-Datei.

Statt jeden Container manuell zu starten, definierst du alle Services, Netzwerke und Volumes deklarativ. Ein einziger Befehl (`docker-compose up`) startet die gesamte Anwendungs-Stack.

**Typische Anwendungsszenarien:**
- **Lokale Entwicklung**: Schnelle Umgebung ohne Installation
- **Testing**: Reproduzierbare Testumgebungen
- **Microservices**: Mehrere Services orchestrieren

## Code-Beispiel

```yaml
# docker-compose.yml
version: '3.8'

services:
  # Java-Anwendung
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      DB_HOST: postgres
      DB_PORT: 5432
    depends_on:
      - postgres
    networks:
      - app-network

  # PostgreSQL Datenbank
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: myapp_db
    volumes:
      - db-data:/var/lib/postgresql/data
    networks:
      - app-network

  # Redis Cache
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    networks:
      - app-network

volumes:
  db-data:

networks:
  app-network:
    driver: bridge
```

**Java-Code zum Verbinden mit Services:**

```java
// Verbindung zur Datenbank (Hostname = Service-Name!)
String dbUrl = "jdbc:postgresql://postgres:5432/myapp_db";
String user = "admin";
String password = "secret";

// Verbindung zu Redis
Jedis jedis = new Jedis("redis", 6379);
jedis.set("key", "value");
```

## Wichtige Punkte

- **Service-Namen als Hostnames**: Container erreichen sich gegenseitig via Service-Namen (z.B. `postgres` statt IP)
- **Automatisches Netzwerk**: Compose erstellt automatisch ein internes Netzwerk für Service-Kommunikation
- **Build vs. Image**: `build: .` erstellt Image lokal, `image: postgres:15` nutzt vorgefertigtes Image
- **Environment-Variablen**: Mit `environment:` werden Konfigurationen direkt in Container injiziert
- **Volumes**: Persistente Daten bleiben auch nach Container-Neustart erhalten (`db-data:/path`)

## Klassische Fragen

### Wie starte ich alle Services?
```bash
docker-compose up -d
# -d = Detached Mode (Hintergrund)
```
Alle Container starten in korrekter Reihenfolge (beachte `depends_on`).

---

### Wie verbinde ich meine Java-App mit PostgreSQL in Compose?
Nutze den **Service-Namen** als Hostname statt `localhost`. Compose löst `postgres` → interne IP auf. Beispiel: `jdbc:postgresql://postgres:5432/myapp_db`

---

### Was ist der Unterschied zwischen `docker-compose up` und `docker-compose run`?
`up` startet **alle definierten Services** dauerhaft. `run` führt einen **einmaligen Befehl** in einem Service aus (z.B. `docker-compose run app java -jar app.jar`).

---

### Wie debugge ich einen laufenden Container?
```bash
docker-compose logs app           # Logs des Services "app"
docker-compose exec app /bin/sh   # Shell im laufenden Container
docker-compose ps                 # Status aller Services
```

---

## Wusstest du schon?

**Docker Compose war ursprünglich "Fig"** — ein separates Tool von Orchard, das Docker akquirierte. Deshalb heißt das Binary immer noch `docker-compose` und nicht `docker compose` (obwohl `docker compose` inzwischen auch funktioniert). Eine Rebranding-Geschichte der besonderen Art! 🚀

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
