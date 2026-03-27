---
outline: deep
---

# IP-Adressen & Ports

<div class="meta">
  <span class="difficulty easy">🟢 Einfach</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">27.03.2026</span>
</div>

---

## Zusammenfassung

> IP-Adressen identifizieren Geräte im Netzwerk, Ports identifizieren spezifische Anwendungen auf einem Gerät. Zusammen ermöglichen sie gezielt Datenversand zu genau der richtigen Stelle.

## Kernkonzept

**IP-Adressen** sind eindeutige Nummern für Geräte (z.B. `192.168.1.5`). Sie funktionieren wie Hausnummern – ohne sie findet das Paket nicht zum richtigen Computer.

**Ports** sind Nummern zwischen 0–65.535, die auf einem Gerät verschiedene Anwendungen unterscheiden. Port 80 = HTTP, Port 443 = HTTPS, Port 3306 = MySQL. Es ist wie die Wohnungsnummer im Haus.

**Socket** = Kombination aus IP-Adresse + Port (z.B. `192.168.1.5:8080`). Das ist die komplette Adresse für Datenaustausch.

## Code-Beispiel

```java
import java.net.Socket;
import java.net.InetAddress;

public class NetworkExample {
    public static void main(String[] args) throws Exception {
        // IP-Adresse und Port definieren
        String host = "127.0.0.1";  // localhost
        int port = 8080;
        
        // Socket erstellen (Verbindung zur IP:Port)
        Socket socket = new Socket(host, port);
        
        // InetAddress für IP-Operationen
        InetAddress ip = InetAddress.getByName("google.com");
        System.out.println("Hostname: " + ip.getHostName());
        System.out.println("IP: " + ip.getHostAddress());
        
        socket.close();
    }
}
```

## Wichtige Punkte

- **IPv4**: 4 Dezimalblöcke (0–255), z.B. `192.168.1.1` — noch Standard, aber begrenzt
- **IPv6**: 8 Hexadezimal-Blöcke, z.B. `2001:0db8:85a3::8a2e:0370:7334` — zukunftssicher
- **Ports 0–1023**: reserviert für Standard-Dienste (well-known ports)
- **Ports 1024–49.151**: registrierte Ports für spezifische Anwendungen
- **Ports 49.152–65.535**: dynamisch/privat, frei nutzbar

## Klassische Fragen

### Wie unterscheidet sich IPv4 von IPv6?
IPv4 hat 32 Bit (4 Milliarden Adressen), IPv6 hat 128 Bit (praktisch unbegrenzt). IPv6 löst das Adressenproblem, wird aber noch nicht überall unterstützt. IPv4 ist noch dominant.

---

### Was ist der Unterschied zwischen localhost und 0.0.0.0?
`localhost` (127.0.0.1) ist deine eigene Maschine – nur du kannst darauf zugreifen. `0.0.0.0` ist ein Wildcard – Server auf 0.0.0.0:8080 hören auf **allen** verfügbaren Netzwerk-Interfaces.

---

### Warum ist Port 80 Standard für HTTP?
Port 80 wurde früh als HTTP-Standard definiert und ist seither konventionell. Port 443 wurde für HTTPS analog gewählt. Es ist reine Konvention – technisch könnten HTTP-Server auf jedem Port laufen.

---

## Wusstest du schon?

Die Ports 0–1023 heißen **Well-Known Ports** und benötigen auf Unix/Linux **Root-Rechte** – deshalb müssen sie mit `sudo` gestartet werden. Das ist ein Überbleibsel aus einer Zeit, als Sicherheit = „wichtige Dienste schützen" bedeutete! 🔐

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
