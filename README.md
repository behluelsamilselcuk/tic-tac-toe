## 📄 Tic-Tac-Toe (Konsole-Version)

### 🎮 Beschreibung

Dies ist ein einfaches Tic-Tac-Toe-Spiel, das vollständig in
**JavaScript** mit **Factory Functions** umgesetzt wurde. Es läuft in
der Konsole und erlaubt zwei Spielern, abwechselnd Züge zu machen, bis
ein Spieler gewinnt oder das Spiel unentschieden endet.

------------------------------------------------------------------------

### 🧱 Projektstruktur

Das Spiel besteht aus drei Hauptmodulen:

1.  **`gameBoard()`** -- verwaltet das Spielfeld.
2.  **`players()`** -- verwaltet die Spieler und den aktiven Spieler.
3.  **`gameController()`** -- steuert den Spielablauf und die Logik.

------------------------------------------------------------------------

### ⚙️ Funktionen

#### `gameBoard()`

-   `getBoard()` -- gibt das aktuelle Spielfeld zurück.
-   `setToken(player, row, column)` -- setzt das Symbol des Spielers auf
    das Feld, wenn es frei ist. Gibt `true` zurück bei Erfolg, `false`
    wenn das Feld belegt ist.
-   `printBoard()` -- gibt das Spielfeld in der Konsole aus.
-   `checkWinner()` -- prüft, ob ein Spieler gewonnen hat oder ob das
    Spiel unentschieden ist.

#### `players()`

-   `getActivePlayer()` -- gibt den aktuellen Spieler zurück.
-   `switchActivePlayer()` -- wechselt den aktiven Spieler.

#### `gameController()`

-   `playRound(row, column)` -- führt einen Spielzug aus:
    -   Prüft, ob das Spiel vorbei ist.
    -   Versucht, den Zug zu setzen.
    -   Gibt das Spielfeld aus.
    -   Prüft auf Sieg oder Unentschieden.
    -   Wechselt den Spieler, wenn das Spiel weitergeht.

------------------------------------------------------------------------

### 🕹️ Spiel starten

``` javascript
const playGame = gameController();
```

Dann kannst du Spielzüge in der Konsole ausführen:

``` javascript
playGame.playRound(0, 0); // Spieler 1 setzt auf Feld oben links
playGame.playRound(1, 1); // Spieler 2 setzt auf Mitte
```

------------------------------------------------------------------------

### 📌 Hinweise

-   Das Spiel prüft automatisch auf Sieg oder Unentschieden nach jedem
    Zug.
-   Ungültige Züge (z. B. auf belegte Felder) werden ignoriert.
-   Das Spiel endet automatisch, wenn ein Spieler gewinnt oder das
    Spielfeld voll ist.

------------------------------------------------------------------------

### ✅ Beispielausgabe

``` text
Player-1 hat gewonnen
[
  ['X', 'X', 'X'],
  ['O', 'O', null],
  [null, null, null]
]
```