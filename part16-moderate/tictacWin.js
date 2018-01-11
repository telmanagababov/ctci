/* a solution based on finding determinants */
function hasWinner(game) {
    let winLines = [
        [game[0][0], game[0][1], game[0][2]],
        [game[1][0], game[1][1], game[1][2]],
        [game[2][0], game[2][1], game[2][2]],
        
        [game[0][0], game[1][0], game[2][0]],
        [game[0][1], game[1][1], game[2][1]],
        [game[0][2], game[1][2], game[2][2]],
        
        [game[0][0], game[1][1], game[2][2]],
        [game[2][0], game[1][1], game[0][2]]
    ];

    for(let i = 0; i < winLines.length; i++) {
        let line = winLines[i],
            player = line[0];
        if(line.every(item => item === player)) {
            return 'winner is: ' + player;
        }
    }

    return 'no winner';
}



let games = [
    [['0', 'x', '0'],
     ['x', '0', 'x'],
     ['x', '0', 'x']],
    
    [['0', '0', 'x'],
     ['0', 'x', '0'],
     ['0', 'x', 'x']],
    
     [['0', '0', 'x'],
      ['0', 'x', '0'],
      ['x', '0', 'x']]
];
console.log('Winner',
    '\n', hasWinner(games[0]),
    '\n', hasWinner(games[1]),
    '\n', hasWinner(games[2]))