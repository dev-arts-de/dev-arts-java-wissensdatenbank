---
outline: deep
---

# ADRs (Architecture Decision Records)

<div class="meta">
  <span class="difficulty hard">🔴 Fortgeschritten</span>
  <span class="status">Bearbeitet ☑️</span>
</div>

---

## Notizen

Ein Architekturentscheidungseintrag (Architecture Decision Record, ADR) ist einer der wichtigsten Lieferumfang eines Lösungsarchitekten.
Dieser Datensatz dokumentiert Architekturentscheidungen, die Sie während des gesamten Entwurfsprozesses treffen. Sie enthält auch kontextspezifische Begründungen und Auswirkungen für jede Entscheidung.
Der ADR dokumentiert alle wichtigen Entscheidungen, einschließlich Alternativen, die Sie ausgeschlossen haben, für architektonisch signifikante Anforderungen. Das Protokoll enthält Anforderungen und Einschränkungen in die dokumentierten Auswirkungen einer Entscheidung.

Ich verstehe ADR's als Tool für Softwarearchitekten in Projekten oder Projekt-übergreifend entscheidungen und Richtlinien zu etablieren.

ADR'S erstrecken sich über mehrere Datensätze. Diese Form kann ein einfaches Markdown Dokument sein oder ein Word Dokument. Etwas um geschriebenes zu verarbeiten.
Empfohlen für ADRS wird eine konsistente, Dateiübergreifende Vorlage, welcher folgende Elemente enthält:
- Problem-Anweisung mit Kontext
- In Betracht gezogene Optionen
- Entscheidungsergebnise
  - Darunter auch Kompromisse die mit dieser Entscheidung kommen
  - Konfidenzniveau: Wie sicher sind sie sich mit der Entscheidung: Das könnte für Rückwirkende Analysen hilfreich sein.

Eine Entscheidung sollte in mehrere Phasen unterschieden werden: kurzfristige, mittelfristige und langfristige Ansätze.
Es sollte vermieden werden das Folgen von Entscheidungen absichtlich oder versehentlich ausgeblendet werden:
Beispiel:

Schlecht dokumentiert
- Entscheidung: Wir nutzen Framework X
- Konsequenzen: Schnellere Entwicklung

Ausgeblendete Realität
- Framework X ist schwer zu warten
- starke Vendor-Lock-in Abhängigkeit
- höhere Infrastrukturkosten

ADRs sollten kurz, klar, themenbezogen und faktenbasiert formuliert sein, sodass Entscheidungen und ihre Begründungen schnell verständlich und nachvollziehbar bleiben.

Entscheidungen für ADR'S sollten selbstständig getroffen werden. Material kann genutzt und sollte verlinkt werden um bei Entscheidungen unterstützend zu wirken,
aber eine Entscheidung sollte nicht basierend auf Anderer Quellen gemacht werden. 

Workloaddokumentations-Repository: Ein Workloaddokumentations-Repository ist ein zentrales Ablage-Repository (meist in Git), in dem die Dokumentation zu Workloads eines Systems gesammelt und versioniert wird.

Workload
Bezeichnet in der IT die Arbeitslast eines Systems, also z. B.:
- Anwendungen oder Services
- Datenverarbeitung
- Jobs oder Prozesse
- Container / Microservices
- Datenbankoperationen

## Interview-Fragen

### Was ist ein Architecture Decision Record (ADR)?
Ein ADR ist ein Dokument, das eine wichtige Architekturentscheidung, den Kontext der Entscheidung, die betrachteten Alternativen sowie die Konsequenzen dieser Entscheidung festhält. Ziel ist es, Entscheidungen langfristig nachvollziehbar zu dokumentieren.

---

### Warum sind ADRs wichtig?
ADRs schaffen Transparenz über Architekturentscheidungen und deren Begründungen. Sie helfen neuen Teammitgliedern, Entscheidungen nachzuvollziehen, verhindern wiederholte Diskussionen über bereits getroffene Entscheidungen und dienen als historische Dokumentation der Architekturentwicklung.

---

### Wann sollte ein ADR geschrieben werden?
Ein ADR sollte erstellt werden, wenn eine architektonisch signifikante Entscheidung getroffen wird, zum Beispiel bei:
- Auswahl einer zentralen Technologie
- Architekturänderungen
- Einführung neuer Frameworks oder Plattformen
- Änderungen an Systemgrenzen oder Integrationsmustern

---

### Welche typischen Bestandteile hat ein ADR?
Typischerweise enthält ein ADR folgende Elemente:

- **Kontext / Problemstellung**
- **In Betracht gezogene Optionen**
- **Entscheidung**
- **Begründung**
- **Konsequenzen (positiv und negativ)**

Optional können auch das **Konfidenzniveau**, das **Datum** oder der **Status** (Proposed, Accepted, Deprecated) enthalten sein.

---

### Was sind typische Fehler bei ADRs?
Typische Fehler sind:

- Entscheidungen werden zu spät dokumentiert
- Konsequenzen werden nicht vollständig beschrieben
- nur Vorteile werden genannt
- Dokumente werden zu lang oder zu technisch
- ADRs werden nicht aktualisiert, wenn sich Entscheidungen ändern

---

### Wie detailliert sollte ein ADR sein?
Ein ADR sollte prägnant und fokussiert sein. Es soll genug Kontext liefern, damit die Entscheidung nachvollziehbar bleibt, aber nicht so umfangreich sein, dass es schwer zu lesen ist.

---

### Wo werden ADRs normalerweise gespeichert?
ADRs werden häufig in einem versionskontrollierten Repository gespeichert, zum Beispiel in einem Git-Repository zusammen mit der Projektdokumentation. Oft werden sie als Markdown-Dateien verwaltet.

---

### Wie unterscheidet sich ein ADR von normaler Dokumentation?
Ein ADR dokumentiert **konkrete Entscheidungen und deren Begründung**, während allgemeine Dokumentation eher beschreibt **wie ein System funktioniert**.

---

### Wie geht man mit veralteten ADRs um?
ADRs werden normalerweise nicht gelöscht. Stattdessen wird ihr Status angepasst, zum Beispiel:
- Proposed
- Accepted
- Superseded
- Deprecated

So bleibt die Entscheidungs-Historie erhalten.

<style>
.meta {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
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
  background: #2a2a2a;
  color: #aaa;
}
</style>
