---
outline: deep
---

# Pessimistic Locking

<div class="meta">
  <span class="difficulty medium">🟡 Mittel</span>
  <span class="status">Bearbeitet ☑️</span>
  <span class="date">10.03.2026</span>
</div>

---

## Zusammenfassung

> Pessimistic Locking sperrt eine Datenbankzeile sofort beim Lesen, um Race Conditions zu verhindern. Es garantiert, dass nur ein Thread/Request die Daten modifizieren kann.

## Kernkonzept

**Pessimistic Locking** geht davon aus, dass **Konflikte häufig vorkommen** und sperrt Ressourcen präventiv.

Die Sperre wird beim `SELECT`-Statement gesetzt (z.B. mit `FOR UPDATE`). Andere Transaktionen warten, bis die Sperre freigegeben wird. Dies verhindert Dirty Reads und Lost Updates vollständig.

In Spring Data JPA wird es über `@Lock`-Annotation und `LockModeType` gesteuert. Die Datenbank handhält die technische Sperrung, nicht die Applikation.

## Code-Beispiel

```java
@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
  
  // Pessimistic Read Lock – andere können lesen, aber nicht schreiben
  @Lock(LockModeType.PESSIMISTIC_READ)
  @Query("SELECT a FROM Account a WHERE a.id = :id")
  Optional<Account> findByIdWithReadLock(@Param("id") Long id);
  
  // Pessimistic Write Lock – exklusive Sperre
  @Lock(LockModeType.PESSIMISTIC_WRITE)
  Account findByIdForUpdate(Long id);
}

// Service-Nutzung
@Service
public class TransferService {
  
  @Transactional
  public void transferMoney(Long fromId, Long toId, BigDecimal amount) {
    // Sperre wird sofort gesetzt – andere Threads warten
    Account from = accountRepo.findByIdForUpdate(fromId);
    Account to = accountRepo.findByIdForUpdate(toId);
    
    from.withdraw(amount);
    to.deposit(amount);
    
    // Sperre wird beim Commit/Ende der Transaktion freigegeben
  }
}
```

## Wichtige Punkte

- **LockModeType.PESSIMISTIC_WRITE**: Exklusive Sperre, niemand darf lesen/schreiben
- **LockModeType.PESSIMISTIC_READ**: Shared Lock, mehrere dürfen lesen, aber keiner schreiben
- **Timeout-Handling**: `javax.persistence.lock.timeout` Property für Lock-Wartezeit setzen
- **Transaktion erforderlich**: Funktioniert nur innerhalb einer aktiven `@Transactional`-Methode
- **Performance-Tradeoff**: Sperren führen zu Wartezeiten und können Deadlocks verursachen

## Klassische Fragen

### Wann sollte man Pessimistic statt Optimistic Locking nutzen?
Bei hohen Konfliktraten (viele parallele Schreibzugriffe auf gleiche Daten) und kritischen Operationen (Geldtransfers, Inventory-Management). Optimistic ist besser bei niedriger Konfliktrate.

---

### Was ist der Unterschied zu Optimistic Locking?
Optimistic Locking nutzt Versionsnummern und erkennt Konflikte erst beim Update. Pessimistic sperrt sofort präventiv. Pessimistic ist sicherer, aber langsamer.

---

### Kann ein Deadlock entstehen?
Ja! Wenn Thread A Zeile 1 sperrt und auf Zeile 2 wartet, während Thread B Zeile 2 sperrt und auf Zeile 1 wartet. Vermeidung: Konsistente Sperr-Reihenfolge oder Timeout.

---

### Funktioniert Pessimistic Locking über mehrere Datenbanken?
Nein, die Sperre ist auf eine DB-Instanz begrenzt. Für verteilte Systeme brauchst du externe Lock-Manager (Redis, Consul, Zookeeper).

---

## Wusstest du schon?

Die `FOR UPDATE`-Klausel stammt aus ANSI-SQL und ist in PostgreSQL, MySQL und Oracle identisch implementiert – aber DB2 nutzt `FOR UPDATE WITH RS` und SQLite unterstützt es gar nicht! 🎯

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
