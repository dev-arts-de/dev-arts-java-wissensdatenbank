---
outline: deep
---

# Headers – Content-Type, Authorization, Cache-Control

<div class="meta">
  <span class="difficulty easy">🟢 Einfach</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">30.03.2026</span>
</div>

---

## Zusammenfassung

> HTTP-Header sind Metadaten in Requests/Responses, die zusätzliche Informationen über die Kommunikation transportieren. Sie ermöglichen Authentifizierung, Content-Handling und Performance-Optimierung.

## Kernkonzept

**HTTP-Header** sind Key-Value-Paare, die vor dem Response-Body versendet werden. Sie teilen dem Client/Server mit, wie die Daten zu interpretieren und zu handhaben sind.

**Content-Type** definiert das **Format** der Payload (z.B. `application/json`, `text/html`). Ohne korrekten Content-Type weiß der Browser nicht, wie er Daten rendern soll.

**Authorization** transportiert **Authentifizierungsdaten** wie JWT-Token oder Basic Auth. Sie validiert die Identität des Requestors und entscheidet über Zugriff.

**Cache-Control** steuert **Caching-Verhalten**: Darf der Browser/Proxy cachen? Wie lange? Diese Header sparen Bandbreite und verbessern Performance.

## Code-Beispiel

```java
// GET-Request mit verschiedenen Headers
HttpURLConnection conn = (HttpURLConnection) new URL("https://api.example.com/data").openConnection();

// Content-Type: sagt, welches Format wir erwarten
conn.setRequestProperty("Content-Type", "application/json; charset=UTF-8");

// Authorization: JWT-Token für Authentifizierung
conn.setRequestProperty("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...");

// Cache-Control: 1 Stunde cachen, aber validieren
conn.setRequestProperty("Cache-Control", "public, max-age=3600, must-revalidate");

int statusCode = conn.getResponseCode();
```

```java
// Response-Header auslesen mit Spring Boot
@GetMapping("/api/data")
public ResponseEntity<Data> getData() {
    return ResponseEntity.ok()
        .header("Content-Type", "application/json")
        .header("Cache-Control", "public, max-age=300")
        .header("X-Custom-Header", "value")
        .body(new Data());
}
```

## Wichtige Punkte

- **Content-Type** ist **PFLICHT** bei POST/PUT mit Body — sonst Parsing-Fehler
- **Authorization** Header folgt Standard-Formaten: `Bearer <token>`, `Basic <base64>`, `ApiKey <key>`
- **Cache-Control** hat viele Direktiven: `no-cache`, `no-store`, `private`, `public`, `max-age`, `must-revalidate`
- Headers sind **Case-Insensitive**, aber Werte sind **Case-Sensitive** (besonders bei Token!)
- Der Server **ignoriert unbekannte Header** — keine Fehler, aber auch keine Wirkung

## Klassische Fragen

### Wann nutze ich Content-Type und wann Accept?

**Content-Type** beschreibt die **Daten, die ich sende**. **Accept** ist eine Anfrage: "Ich möchte eine Response in diesem Format". Content-Type ist beim Request für POST/PUT nötig, Accept ist optional aber höflich.

---

### Was ist der Unterschied zwischen no-cache und no-store?

**no-cache** heißt: Du darfst cachen, aber frag vorher beim Server nach, ob die Kopie noch aktuell ist. **no-store** bedeutet: Gar nicht erst speichern, immer frisch vom Server holen (sicherheitskritische Daten).

---

### Kann ich mehrere Authentifizierungsmethoden kombinieren?

Technisch ja, aber es ist **schlechte Praxis**. Pick one: JWT ist modern, OAuth2 ist Standard für Delegierung, Basic Auth nur über HTTPS. Mehrere Header verwirren Client und Server.

---

## Wusstest du schon?

Der HTTP **Accept-Language**-Header wurde erfunden, um Webseiten in verschiedenen Sprachen auszuliefern — aber Entwickler ignorieren ihn oft und setzen stattdessen Cookies oder URL-Parameter. Der ursprüngliche Plan war elegant, die Realität ist chaotischer! 😄

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
