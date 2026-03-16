---
outline: deep
---

# Alerting Grundlagen

<div class="meta">
  <span class="difficulty easy">🟢 Einfach</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">16.03.2026</span>
</div>

---

## Zusammenfassung

> Alerting ist ein Mechanismus, der automatisch Benachrichtigungen auslöst, wenn vordefinierte Bedingungen oder Schwellenwerte überschritten werden. Es ermöglicht proaktive Reaktionen auf Probleme, bevor sie kritisch werden.

## Kernkonzept

**Alert** = automatische Benachrichtigung bei Anomalien oder kritischen Ereignissen.

Alerting funktioniert nach dem **Condition-Action-Prinzip**: Wenn eine Bedingung erfüllt ist (z.B. CPU > 80%), wird eine Aktion ausgelöst (E-Mail, Slack, PagerDuty). Dies ersetzt manuelle Überwachung und reduziert **MTTR** (Mean Time To Recovery).

**Drei Komponenten**:
1. **Metriken/Logs** sammeln (Datenquellen)
2. **Rules evaluieren** (Bedingungen prüfen)
3. **Notifications senden** (Alerting-Kanäle)

## Code-Beispiel

```java
// Einfaches Alert-System
public class AlertingService {
    private final MetricsCollector metrics;
    private final NotificationService notifier;
    
    public void checkThresholds() {
        double cpuUsage = metrics.getCpuUsage();
        
        // Alert-Bedingung: Schwellenwert überschritten
        if (cpuUsage > 80.0) {
            notifier.sendAlert(new Alert(
                "HIGH_CPU",
                "CPU-Auslastung: " + cpuUsage + "%",
                Severity.CRITICAL
            ));
        }
    }
}

// Alert-Datenklasse
public record Alert(
    String name,
    String message,
    Severity severity,
    LocalDateTime timestamp
) {
    public Alert(String name, String message, Severity severity) {
        this(name, message, severity, LocalDateTime.now());
    }
}

// Notification-Interface
public interface NotificationService {
    void sendAlert(Alert alert);
}
```

## Wichtige Punkte

- **Schwellenwerte** sollten basierend auf historischen Daten und Business-Impact kalibriert werden
- **Alert-Fatigue** vermeiden: Zu viele False-Positives führen zu Ignorieren von echten Problemen
- **Skalierung**: Bei hohem Alert-Volumen **Grouping** und **Deduplication** einsetzen
- **Eskalation**: Mehrere Kanäle nutzen (Email → Slack → SMS → PagerDuty) je nach Severity
- **Context**: Alerts sollten immer Kontext enthalten (Host, Service, betroffene Benutzer)

## Klassische Fragen

### Wie unterscheiden sich Alerts von Logs?
Logs sind **passive Aufzeichnungen** von Ereignissen. Alerts sind **aktive Benachrichtigungen**, die auslösen, wenn definierte Bedingungen erfüllt sind. Ein Alert basiert oft auf Log-Daten oder Metriken.

---

### Was ist eine gute Alert-Regel?
Eine gute Alert-Regel ist **actionable** (der Empfänger kann reagieren), hat **wenige False-Positives**, ist **verständlich** (nicht zu technisch) und bezieht sich auf **User-Impact** statt nur auf technische Metriken.

---

### Wie verhindere ich Alert-Fatigue?
Mit **intelligenten Schwellenwerten**, **Deduplizierung**, **Smart Grouping** (z.B. alle Fehler eines Services zusammenfassen), und **Kontextualisierung**. Außerdem: regelmäßig ineffektive Alerts entfernen.

---

## Wusstest du schon?

Das Konzept "Alert Fatigue" wurde erstmals im Kontext von medizinischen Geräten untersucht: Ärzte begannen, echte Alarme zu ignorieren, nachdem sie zu viele False-Positives von Monitoren erlebt hatten. Dasselbe passiert in der IT — wenn ein Alert-System zu laut ist, wird es irrelevant! 🔔➡️🔇

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
