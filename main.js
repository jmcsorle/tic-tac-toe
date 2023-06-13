// ~~~~~~~~~~~~~~ Query Selectors ~~~~~~~~~~~~~~
var playerMessage = document.querySelector('#playerTurn');
var player1 = document.querySelector('#troll1');
var player1Wins = document.querySelector('#troll1Wins');
var player2 = document.querySelector('#troll2');
var player2Wins = document.querySelector('#troll2Wins');
var gameBoard = document.querySelector('.game-board');

// ~~~~~~~~~~~~~~ Event Listeners ~~~~~~~~~~~~~~

// window.addEventListener('load', startNewMatch);
gameBoard.addEventListener('click', function(e){
        placeToken(e)
    // triggerWinDrawTurn(e)
});

var winOptions = [
    ["t1a", "t1b", "t1c"],
    ["t2a", "t2b", "t2c"],
    ["t3a", "t3b", "t3c"],
    ["t1a", "t2a", "t3a"],
    ["t1b", "t2b", "t3b"],
    ["t1c", "t2c", "t3c"],
    ["t1a", "t2b", "t3c"],
    ["t3a", "t2b", "t1c"]
]

// ~~~~~~~~~~~~~~ Data Model ~~~~~~~~~~~~~~

var players = [
    {
        name: 'Raucous Red',
        token: 'Raucous Red Circle',
        class: 'troll',
        color: 'red',
        moves: [],
        imgSrc:  'assets/Raucous-Red-Circle.png',
        wins: 0
    },
    {
        name: 'Blue Yaw',
        token: 'Blue Yaw Square',
        class: 'troll',
        color: 'blue',
        moves: [],
        imgSrc: 'assets/Blue-Yaw-Square.png',
        wins:0
    }
]

var firstPlayer = players[0];
var currentPlayer = players[0];
var secondPlayer = players[1];
var startingPlayer = players[0];
var winningGame = false;

// ~~~~~~~~~~~~~~ Player Interaction Functions ~~~~~~~~~~~~~~

function switchPlayer() {
    if (currentPlayer === firstPlayer) {
        currentPlayer = secondPlayer;
    }
    else {
        currentPlayer = firstPlayer;
       }
}

function takeTurn(){
    switchPlayer();
    changePlayerMessage();
}

function placeToken(e) {
    var cell = testCell(e);
    if (cell === 'full' && !checkWin(e)) {
        playerMessage.innerText = `Sorry, that cell is full. Please choose another cell.`;
    }
    else if (e.target.classList.contains('cell-area')) {
        currentPlayer.moves.push(e.target.id);
        e.target.classList.add('full');
        e.target.innerHTML = `
        <img class="${currentPlayer.class} ${currentPlayer.color}" src="${currentPlayer.imgSrc}" alt="${currentPlayer.name} ${e.target.ariaLabel}" height="90" width="90"/>
        `;
        if(checkWin(e)) {
            calculateWin(currentPlayer);
            displayWin(currentPlayer);
            setTimeout(delayReset, 5000);
        }  
        else {
            var isDraw = calculateDraw();
            if (isDraw) {
                playerMessage.innerText = `It's a Draw! A new game will start in 5 seconds.`;
                setTimeout(delayReset, 5000);
            }
            else {
                takeTurn();
            }
        }
    }
}

// function triggerWinDrawTurn(e) {
//     placeToken(e)
//     var isDraw = calculateDraw()
//     if(checkWin(e)) {
//         calculateWin(currentPlayer);
//         displayWin(currentPlayer);
//         setTimeout(delayReset, 5000);
//     }  
//     else if (isDraw) {
//         playerMessage.innerText = `It's a Draw! A new game will start in 5 seconds.`;
//             setTimeout(delayReset, 5000);
//         }
//     else {
//         takeTurn();
//     }
// }

// ~~~~~~~~~~~~~~ Win Logic Functions ~~~~~~~~~~~~~~

function testCell(e) {
    if (e.target.classList.contains('troll') || e.target.classList.contains('full')) {
        return 'full';
    }
    else if(!e.target.classList.contains('game-board')) {
        return 'empty';
    }
}

function checkWinOptions(e) {
    var matchWins = []
    for (var i = 0; i < winOptions.length; i++){
        if (winOptions[i].includes(e.target.id)) {
            matchWins.push(winOptions[i])
        }
    }
    return matchWins
}

function checkWin(e) {
    var filteredWins = checkWinOptions(e);
    for (var i = 0; i < filteredWins.length; i++) {
        var winCheck = findWinner(filteredWins[i]);
        if (winCheck === 3) {
            setAllCellsFull();
            winningGame = true;
            return currentPlayer;
        }
    }
}

function findWinner(selectedIds) {
    var playerMatch = 0
    for (var i = 0; i < selectedIds.length; i++) {
        var cellValue = document.querySelector(`#${selectedIds[i]}`)
        if( cellValue.classList.contains('full')) {
            var image = cellValue.querySelector('img');
            if (image.classList.contains(currentPlayer.color)) {
                playerMatch += 1;
            }
        }
    }
    return playerMatch;
}

function calculateWin(currentPlayer) {
    currentPlayer.wins += 1
    return currentPlayer
}

function calculateDraw() {
    allCells = document.querySelectorAll('.cell-area');
    fullCells = 0
    checkDraw = ''
    for (var i = 0; i < allCells.length; i++) {
     if (allCells[i].classList.contains('full')) {
         fullCells +=1;
     }
    }
    if (fullCells === 9) {
     checkDraw = true;
    }
    else {
     checkDraw = false;
    }
    return checkDraw
 }

 function setAllCellsFull() {
    allCells = document.querySelectorAll('.cell-area');
    for (i = 0; i < allCells.length; i++) {
        if (!allCells[i].classList.contains('full')) {
            allCells[i].classList.add('full');
        }
    }
    return allCells
}
 
 function startGamePlayer() {
    if (startingPlayer === players[0]) {
        startingPlayer = players[1];
    }
    else {
        startingPlayer = players[0];
       }
       currentPlayer = startingPlayer
       playerMessage.innerText = `It's a new game and it's ${currentPlayer.name}'s Turn!`
}

// ~~~~~~~~~~~~~~ DOM Manipulation Functions ~~~~~~~~~~~~~~

function changePlayerMessage() {
    playerMessage.innerText = `It's ${currentPlayer.name}'s Turn!`
}

function displayWin(currentPlayer){
    playerMessage.innerText = `${currentPlayer.name} is the winner! A new game will restart in 5 seconds.`;
    if (currentPlayer.name === 'Raucous Red') {
        player1Wins.innerText = `${currentPlayer.wins} Wins`
    }
    else if (currentPlayer.name === 'Blue Yaw') {
        player2Wins.innerText = `${currentPlayer.wins} Wins`
    }
}

function resetGameBoard() {
    players[0].moves = [];
    players[1].moves = [];
    var resetBoard = document.querySelectorAll('.cell-area');
    for (var i = 0; i < resetBoard.length; i++) {
        resetBoard[i].innerHTML = '';
        resetBoard[i].classList.remove('full');
        winningGame = false;
    }
    return resetBoard
}

function delayReset() {
    resetGameBoard();
    startGamePlayer();
}