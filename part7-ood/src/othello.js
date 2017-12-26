class Othello {
    constructor() {

    }

    startNewGame(gameSettings) {
        console.log('start new game');
        this.board = this.createBoard(gameSettings.fieldSize);
        if (player.length === 2) {
            this.startGame();
        }
    }

    addPlayer(player) {
        console.log('add player: ', player);
        if (this.players < 2) {
            this.players.push(player);
            if (player.length === 2) {
                this.startGame();
            }
        }
    }

    makeStep(player, stepInfo) {
        if (this.players[this.playerId] === player) {
            this.addStep(stepInfo);
            if (this.board.isFullFilled()) {
                this.finishGame();
            } else {
                this.startNextRound();
            }
        }
    }

    addStep(stepInfo) {
        let piece = new Piece(this.playerId, stepInfo);
        this.board.addPiece(piece);
    }

    finishGame() {
        let firstPlayerPoints = this.board.getPiecesNumber(0),
            secondPlayerPoints = this.board.getPiecesNumber(1),
            winnerId = firstPlayerPoints > secondPlayerPoints ? 0 : 1;
        this.stopRoundTimer();
        this.showWinnerInfo(this.players[winnerId]);
    }

    startGame() {
        this.playerId = -1;
        this.startNextRound();
    }

    startNextRound() {
        this.playerId = this.playerId + 1 % 2;
        this.stopRoundTimer();
        this.startRoundTimer();
    }

    stopRoundTimer() {
        clearTimeout(this.roundTimeout);
    }

    startRoundTimer() {
        this.roundTimeout = setTimeout(this.startNextRound, 30000);
    }

    createBoard(size) {
        console.log('create board: ', size);
    }
}

class Board {
    constructor(size) {
        this.size = size;
        this.totalAvailablePieces = size * size;
    }

    addPiece(piece) {
        this.pieces.push(piece);
    }

    isFullFilled() {
        return this.pieces.length === this.totalAvailablePieces;
    }

    getPiecesNumber(type) {
        return this.pieces.filter(item => item.type === type).length;
    }
}

class Piece {
    constructor(type, stepInfo) {
        this.type = type;
        this.stepInfo = stepInfo;
    }
}

class GameSettings {
    constructor(fieldSize = 8) {
        this.fieldSize = fieldSize;
    }
}

class Player {
    constructor(name) {
        this.name = name;
    }
}

class StepInfo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}