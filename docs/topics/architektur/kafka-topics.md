---
outline: deep
---

# Kafka Topics

<div class="meta">
  <span class="difficulty medium">🟡 Mittel</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">10.03.2026</span>
</div>

---

## Zusammenfassung

> Ein **Kafka Topic** ist ein benannter, geordneter Stream von Events/Nachrichten. Es ist die zentrale Abstraktion in Apache Kafka – vergleichbar mit einer Warteschlange, aber mit Persistierung und mehreren Consumern.

## Kernkonzept

**Topics** sind logische Kanäle, über die Produzenten Nachrichten schreiben und Konsumenten diese lesen. Ein Topic besteht intern aus mehreren **Partitionen**, die auf verschiedene Broker verteilt sind.

Jede Nachricht erhält einen **Offset** (Position in der Partition) und einen optionalen **Key**. Der Key bestimmt, in welche Partition eine Nachricht geht – Nachrichten mit gleichem Key landen immer in der gleichen Partition (Ordering-Garantie).

**Replikation und Persistierung**: Partitionen werden über mehrere Broker repliziert. Messages bleiben im Topic (konfigurierbare Retention), nicht wie in klassischen Queues nach dem Lesen weg. Das ermöglicht Replay und mehrere unabhängige Consumer.

## Code-Beispiel

```java
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerRecord;
import java.util.Properties;

// Producer-Konfiguration
Properties props = new Properties();
props.put("bootstrap.servers", "localhost:9092");
props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

KafkaProducer<String, String> producer = new KafkaProducer<>(props);

// Nachricht in Topic "user-events" schreiben
// Key="user123" sorgt dafür, dass alle Events dieses Users in gleicher Partition landen
ProducerRecord<String, String> record = 
    new ProducerRecord<>("user-events", "user123", "{\"action\":\"login\"}");

producer.send(record, (metadata, exception) -> {
    if (exception == null) {
        System.out.println("Partition: " + metadata.partition() + 
                          ", Offset: " + metadata.offset());
    }
});

producer.close();
```

## Wichtige Punkte

- **Partition-Schlüssel**: Der `key` bestimmt die Partition – gleiche Keys bleiben in Ordnung (nur innerhalb einer Partition, nicht Topic-weit!)
- **Immutability**: Messages im Topic sind unveränderlich und persistent – kein klassisches Löschen nach Verarbeitung
- **Retention Policy**: Topics können nach Zeit (z.B. 7 Tage) oder Größe aufräumen, aber das ist konfigurierbar
- **Consumer Groups**: Mehrere Consumer können eine **Consumer Group** bilden – jede Partition wird von max. einem Consumer pro Gruppe verarbeitet
- **Skalierbarkeit durch Partitionen**: Mehr Partitionen = höherer Durchsatz, aber auch Komplexität bei Ordering

## Klassische Fragen

### Kann ich eine Nachricht aus einem Topic löschen?
Nein, das ist nicht vorgesehen. Eine Nachricht bleibt bis zur konfigurierten Retention-Zeit im Topic. Willst du einen Datensatz "löschen", schreib eine Tombstone-Message (null-Value mit gleich key).

---

### Was ist der Unterschied zwischen Topic und Partition?
Ein **Topic** ist die logische, benannte Entity. Eine **Partition** ist die physische Speichereinheit innerhalb eines Topics. Ein Topic mit 3 Partitionen bedeutet: Die Daten sind auf 3 physische Logs verteilt (möglicherweise auf verschiedenen Brokern).

---

### Kann ich die Partition-Anzahl eines Topics nachträglich ändern?
Ja, du kannst Partitionen hinzufügen (Scale-Out), aber nicht entfernen. Achtung: Bestehende Keys können nach Erweiterung in andere Partitionen wandern, was deine Consumer-Logik durcheinanderbringen kann.

---

## Wusstest du schon?

**Kafka Topics sind nicht "verzehrend"!** Das ist der Revolutionary-Part gegenüber klassischen Message Queues wie RabbitMQ. In Kafka liest ein Consumer eine Message, aber sie bleibt für andere Consumer da. Das führt zu Szenarien wie "Replay alle Events der letzten Woche" oder "neuer Microservice konsumiert komplette historische Daten" – ohne Producer-Nörgeleien. LinkedIn hat das so gebaut, um ihre riesigen Log-Datenmengen zu bewältigen. 🚀

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
