function gameBoard() {
    const array = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]

    const getBoard = () => array;

    const setToken = (player, row, column) => {
        if (array[row][column] !== null) {
            console.log('Zelle ist belegt');
            return false;
        }
        else if (array[row][column] === null) {
            array[row][column] = player;
            return true;
        }
    }

    const printBoard = () => console.log(array);

    const checkWinner = () => {

        for (let i = 0; i < 3; i++) {
            if ((array[i][0] && array[i][0] === array[i][1] && array[i][1] === array[i][2]) ||
                (array[0][i] && array[0][i] === array[1][i] && array[1][i] === array[2][i])) {
                console.log(`${array[i][0]} gewinnt`)
                return array[i][0];
            }
        }

        if (array[0][0] && array[0][0] === array[1][1] && array[1][1] === array[2][2]) {
            console.log(`${array[0][0]} gewinnt`);
            return array[0][0];
        }
        
        if (array[0][2] && array[0][2] === array[1][1] && array[1][1] === array[2][0]) {
            console.log(`${array[0][2]} gewinnt`);
            return array[0][2];
        }

        const isDraw = array.flat().every(cell => cell !== null);
        if (isDraw) {
            console.log('Unentschieden');
            return 'draw';
        }

        return null;
    }

    return {
        getBoard,
        setToken,
        printBoard,
        checkWinner
    }
}

function players() {
    const players = [
        {
            playerName: 'Player-1',
            token: 'X'
        },
        {
            playerName: 'Player-2',
            token: 'O'
        }
    ]

    let activePlayer = players[0];

    const getActivePlayer = () => activePlayer;

    const switchActivePlayer = () => activePlayer = activePlayer === players[0] ? players[1] : players[0];

    return {
        getActivePlayer,
        switchActivePlayer
    }
}

function gameController() {
    const game = gameBoard();
    const player = players();
    game.getBoard();

    let gameOver = false;

    const playRound = (row, column) => {
        if (gameOver) {
            console.log('Das Spiel ist bereits zu Ende.')
            return;
        }

        let current = player.getActivePlayer();
        const success = game.setToken(current.token, row, column);

        if (!success) return;

        game.printBoard();

        const result = game.checkWinner();

        if (result === current.token) {
            console.log(`${current.playerName} hat gewonnen`);
            gameOver = true;
        }
        else if (result === 'draw') {
            console.log('Das Spiel ist unentschieden.')
            gameOver = true;
        }
        else {
            player.switchActivePlayer();
        }
    }

    return {
        playRound
    }
}

const playGame = gameController();