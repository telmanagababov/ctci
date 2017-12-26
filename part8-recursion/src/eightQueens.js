function printAllWays(board = createBoard(), queens = 8, y = 0) {
    if (!queens) log(board);
    else {
        board[y].forEach((item, x) => {
            if (canPutQueen(board, y, x)) {
                let newBoard = copyBoard(board);
                putQueen(newBoard, y, x);
                printAllWays(newBoard, queens - 1, y + 1);
            }
        });
    }
}

function canPutQueen(board, y, x) {
    return board.slice(0, y).every((row, i) => {
        return row[x] !== 'x' &&
            row[x - (y - i)] !== 'x' &&
            row[x + (y - i)] !== 'x'
    });
}

function putQueen(board, y, x) {
    board[y][x] = 'x';
}

function copyBoard(board) {
    return board.map(row => {
        return row.concat();
    });
}

function createBoard() {
    return [
        ['0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0']
    ];
}

function log(board) {
    console.group('desk');
    console.log(board);
    console.groupEnd();
}

module.exports = printAllWays;