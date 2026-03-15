---
outline: deep
---

# CSRF Protection (Spring)

<div class="meta">
  <span class="difficulty medium">🟡 Mittel</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">15.03.2026</span>
</div>

---

## Zusammenfassung

> CSRF (Cross-Site Request Forgery) Protection verhindert, dass Angreifer unbefugte Aktionen im Namen eines authentifizierten Benutzers ausführen. Spring bietet dafür integrierte Mechanismen basierend auf Token-Validierung.

## Kernkonzept

**CSRF-Angriff**: Ein Angreifer trickst einen authentifizierten Benutzer dazu, eine unerwünschte Aktion auf einer anderen Website auszulösen (z.B. Geldtransfer, Passwortänderung). Der Browser sendet dabei automatisch die Session-Cookies mit.

**Spring's Lösung**: Spring Security generiert für jede Session einen eindeutigen **CSRF-Token**. Bei state-verändernden Requests (POST, PUT, DELETE) muss dieser Token mitgesendet werden. Stimmt der Token nicht überein, wird die Anfrage abgelehnt.

**Token-Flow**: 
1. Server generiert Token und sendet es zum Client
2. Client inkludiert Token in HTML-Form oder Request-Header
3. Bei Submit validiert Server den Token
4. Ungültige/fehlende Tokens → 403 Forbidden

## Code-Beispiel

```java
// 1. Security-Konfiguration (Standard - CSRF ist enabled)
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())  // NUR für APIs ohne Browser!
            // ODER: .csrf(Customizer.withDefaults())  // Standard: enabled
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/public/**").permitAll()
                .anyRequest().authenticated()
            )
            .formLogin(Customizer.withDefaults());
        
        return http.build();
    }
}

// 2. HTML-Form (Thymeleaf - Token wird automatisch eingefügt)
<form method="post" action="/transfer">
    <input type="hidden" name="_csrf" th:value="${_csrf.token}"/>
    <input type="text" name="amount" placeholder="Betrag"/>
    <button type="submit">Überweisen</button>
</form>

// 3. Manual Token in Header (z.B. für AJAX)
fetch('/api/transfer', {
    method: 'POST',
    headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="_csrf"]').content,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ amount: 100 })
});

// 4. REST-Controller
@PostMapping("/transfer")
public ResponseEntity<?> transfer(@RequestParam int amount) {
    // Token wird automatisch validiert - kein zusätzlicher Code nötig
    return ResponseEntity.ok("Transfer erfolgreich");
}
```

## Wichtige Punkte

- **CSRF ist standardmäßig in Spring Security enabled** — muss bewusst deaktiviert werden
- **Nur bei Browser-basierten Anfragen notwendig** — APIs ohne Cookies können CSRF ignorieren
- **Token-Namen**: `_csrf` (Thymeleaf), `X-CSRF-TOKEN` (Header-Standard)
- **Stateless APIs sollten CSRF deaktivieren** — z.B. Token-basierte Auth (JWT) ist nicht anfällig
- **SameSite Cookie-Attribute verstärken den Schutz** — verhindert automatisches Mitsenken von Cookies

## Klassische Fragen

### Warum CSRF deaktivieren bei REST APIs?
REST-APIs mit Token-Auth (JWT, OAuth) sind nicht anfällig für CSRF, da der Token nicht automatisch mitgesendet wird. CSRF ist nur ein Problem bei Cookie-basierter Session-Auth. Unnötiges Deaktivieren erhöht aber das Risiko — besser: gezielt nur für `/api/**` deaktivieren.

---

### Wo bekomme ich den CSRF-Token in der HTML-Seite her?
Spring injiziert den Token automatisch ins Modell als `_csrf`-Objekt. In Thymeleaf: `th:value="${_csrf.token}"`. Alternativ in einem `<meta>`-Tag speichern und per JavaScript auslesen für AJAX-Requests.

---

### Was passiert, wenn der Token falsch oder fehlend ist?
Spring antwortet mit **HTTP 403 Forbidden** und loggt die fehlgeschlagene Validierung. Der Request wird nicht verarbeitet. Das ist das gewünschte Verhalten — es schützt vor unbefugten Requests.

---

## Wusstest du schon?

Der Begriff **CSRF** wurde 2001 von Peter W geprägt, aber das Problem existierte schon länger. Lustig: Viele Entwickler deaktivieren CSRF aus "Performance-Gründen", obwohl ein Token nur ein paar Bytes kostet. Das ist oft nur Faulheit 😄

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
