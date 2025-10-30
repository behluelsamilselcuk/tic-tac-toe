## 📄 Tic-Tac-Toe (Browser-Version)

### 🎮 Beschreibung

Dies ist ein interaktives Tic-Tac-Toe-Spiel für zwei Spieler, das vollständig mit **HTML**, **CSS** und **JavaScript** umgesetzt wurde.  
Es läuft im Browser und bietet eine einfache, intuitive Benutzeroberfläche mit visuellem Feedback, Spieleranzeige und einem Neustart-Button.

***

### 🧱 Projektstruktur

Das Spiel besteht aus folgenden Modulen:

1.  **`gameBoard()`** – verwaltet das Spielfeld.
2.  **`players()`** – verwaltet die Spieler und den aktiven Spieler.
3.  **`gameController()`** – steuert den Spielablauf und die Logik.
4.  **`ScreenController()`** – verbindet die Logik mit dem DOM und aktualisiert die Anzeige.

***

### ⚙️ Funktionen

#### `gameBoard()`

*   `getBoard()` – gibt das aktuelle Spielfeld zurück.
*   `setToken(player, row, column)` – setzt das Symbol des Spielers auf das Feld, wenn es frei ist.
*   `printBoard()` – gibt das Spielfeld in der Konsole aus.
*   `checkWinner()` – prüft, ob ein Spieler gewonnen hat oder ob das Spiel unentschieden ist.

#### `players()`

*   `getActivePlayer()` – gibt den aktuellen Spieler zurück.
*   `switchActivePlayer()` – wechselt den aktiven Spieler.

#### `gameController()`

*   `playRound(row, column)` – führt einen Spielzug aus:
    *   Prüft, ob das Spiel vorbei ist.
    *   Versucht, den Zug zu setzen.
    *   Gibt das Spielfeld aus.
    *   Prüft auf Sieg oder Unentschieden.
    *   Wechselt den Spieler, wenn das Spiel weitergeht.

#### `ScreenController()`

*   Verbindet die Spiellogik mit dem HTML.
*   Zeigt an, welcher Spieler gerade am Zug ist.
*   Zeigt den Gewinner oder ein Unentschieden an.
*   Verhindert weitere Züge nach Spielende.
*   Ermöglicht Neustart über einen Button.

***

### 🖥️ Benutzeroberfläche

*   **Spieleranzeige**: Zeigt, wer gerade am Zug ist oder wer gewonnen hat.
*   **Spielfeld**: 3×3 Raster mit Buttons.
*   **Neustart-Button**: Setzt das Spiel zurück durch Neuladen der Seite.
*   **Responsives Design**: Funktioniert auch auf kleineren Bildschirmen.

***

### 🕹️ Spiel starten

Öffne die `index.html` im Browser.  
Klicke auf die Felder, um abwechselnd zu spielen.  
Nach einem Sieg oder Unentschieden erscheint eine Nachricht.  
Mit dem Button **„Spiel neu starten“** kannst du das Spiel zurücksetzen.

***

### ✅ Beispielanzeige im Browser

```text
Player-1 ist dran.
Player-2 hat gewonnen!
Das Spiel ist unentschieden.
```

***

### 📌 Hinweise

*   Das Spiel prüft automatisch nach jedem Zug auf Sieg oder Unentschieden.
*   Belegte Felder können nicht erneut gewählt werden.
*   Nach Spielende sind keine weiteren Züge möglich.
*   Der Neustart erfolgt durch Neuladen der Seite.