// ~~~~~~~~~~ DOM Management ~~~~~~~~~~

// ~~~~~~~~~~~~~~ Query Selectors ~~~~~~~~~~~~~~
var playerMessage = document.querySelector('#playerTurn');
var player1 = document.querySelector('#troll1');
var player1Wins = document.querySelector('#troll1Wins');
var player2 = document.querySelector('#troll2');
var player2Wins = document.querySelector('#troll2Wins');
var gameBoard = document.querySelector('.game-board');
var topLeft = document.querySelector('#t1a');
var middleLeft = document.querySelector('#t1b');
var bottomLeft = document.querySelector('#t1c');
var topCenter = document.querySelector('#t2a');
var middleCenter = document.querySelector('#t2b');
var bottomCenter = document.querySelector('#t2c');
var topRight = document.querySelector('#t3a');
var middleRight = document.querySelector('#t3b');
var bottomRight = document.querySelector('#t3c');

// ~~~~~~~~~~~~~~ Event Listeners ~~~~~~~~~~~~~~

// window.addEventListener('load', startNewMatch);
gameBoard.addEventListener('click', function(e){
    placeToken(e)
});
// topLeft.addEventListener('click', gameBoard);
// topMiddle.addEventListener('click', gameBoard);
// topCenter.addEventListener('click', gameBoard);
// topCenter.addEventListener('click', gameBoard);
// middleCenter.addEventListener('click', gameBoard);
// bottomCenter.addEventListener('click', gameBoard);
// topRight.addEventListener('click', gameBoard);
// middleRight.addEventListener('click', gameBoard);
// bottomRight.addEventListener('click', gameBoard);

// ~~~~~~~~~~~~~~ Data Model ~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~ DOM Functions ~~~~~~~~~~~~~~

//Game Board
//User Data - must be able to save user data to local storage



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

var players = [
    {
        name: 'Raucous Red',
        token: 'Raucous Red Circle',
        class: 'troll',
        color: 'red',
        imgSrc:  'assets/Raucous-Red-Circle.png',
        wins: 0
    },
    {
        name: 'Blue Yaw',
        token: 'Blue Yaw Square',
        class: 'troll',
        color: 'blue',
        imgSrc: 'assets/Blue-Yaw-Square.png',
        wins:0
    }
]

var firstPlayer = players[0];
var currentPlayer = players[0];
var secondPlayer = players[1];

function switchPlayer() {
    if (currentPlayer === firstPlayer) {
        currentPlayer = secondPlayer;
    }
    else {
        currentPlayer = firstPlayer;
       }
}

function changePlayerMessage() {
    playerMessage.innerText = `It's ${currentPlayer.name}'s Turn!`
}

function takeTurn(){
    switchPlayer();
    changePlayerMessage();
}

//  function resetGame() {
//     if (currentPlayer === "player1") {
//         firstPlayer = "player2"
//        }
//        else {
//         firstPlayer = "player1"
//        }
//     return firstPlayer
/*

document.querySelectorAll('.cell-area');
Store it to a variable
iterate over the array and innerHTML for [i] to remove img
innerHTML = ""


*/

// }

function testCell(e) {
    if (e.target.classList.contains('troll') || e.target.classList.contains('full')) {
        return 'full'
    }
    else if(!e.target.classList.contains('game-board')) {
        return 'empty'
    }
}

function placeToken(e) {
    var cell = testCell(e)
    if (cell === 'full') {
        playerMessage.innerText = `Sorry, that cell is full. Please choose another cell.`
    }
    else if (e.target.classList.contains('cell-area')) {
        e.target.innerHTML = `
        <img class="${currentPlayer.class} ${currentPlayer.color}" src="${currentPlayer.imgSrc}" alt="${currentPlayer.name} ${e.target.ariaLabel}" height="90" width="90"/>
        `;
        e.target.classList.add('full')
        if(checkWin(e)) {
            calculateWin(currentPlayer);
            displayWin(currentPlayer);
        }  
        else {
            var isDraw = calculateDraw();
            console.log(isDraw);
            if (isDraw) {
                playerMessage.innerText = `It's a Draw! A new game will start in 5 seconds.`;
                console.log('place refresh function here')
            }
            else {
                takeTurn();
            }
        }
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
        var winCheck = compareID(filteredWins[i]);
        if (winCheck === 3) {
            return currentPlayer;
        }
    }
}

function compareID(selectedIds) {
    var classMatch = 0
    for (var i = 0; i < selectedIds.length; i++) {
        var cellValue = document.querySelector(`#${selectedIds[i]}`)
        if( cellValue.classList.contains('full')) {
            var image = cellValue.querySelector('img');
            if (image.classList.contains(currentPlayer.color)) {
                classMatch += 1;
            }
        }
    }
    return classMatch;
}

function calculateWin(currentPlayer) {
    currentPlayer.wins += 1
    return currentPlayer
}

function displayWin(currentPlayer){
    playerMessage.innerText = `${currentPlayer.name} is the winner!`;
    if (currentPlayer.name === 'Raucous Red') {
        player1Wins.innerText = `${currentPlayer.wins} Wins`
    }
    else if (currentPlayer.name === 'Blue Yaw') {
        player2Wins.innerText = `${currentPlayer.wins} Wins`
    }
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



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Show Hide Functions from Previous Project

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function hide(elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add('hidden');
    }
  }
  
  function show(elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('hidden');
    }
  }
======================================================= */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                Start New Match
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The following function should take in inforamtion from the opening modal and change the values of the global players variable, based on user inputs

function startNewMatch(player1, player2) {
  
}

Pseudoding StartNewMatch:

What I would like the startNewMatch function to do is take in information from a modal window that loads over the game board when the site first loads.

I would like the modal window to ask the following questions:
(1). First Player will have characters in circles / Second Player will have chacters in squares - both will choose a character with "Choose a Troll":
 - Choose a troll - would like for there to be four options for circles and four options for squares - all have the same color, character and name, but they are just either positioned in a square or a circle:
    - Raucous Red
    - Blue Yaw
    - Pouty Pink
    - Grumpy Green
 - if the first player chooses a character, that character will not be available for Player 2, even though player 2's characters will all be in squares

 - based on the character chosen, a new gradient colored background should appear for that player and the medallion player image should also appear in either the left or right column.
 (2). Do you want the game to restart automatically after 5 seconds when it is finished, or do you want to restart the game when you're ready? This could be a drop down with "Restart Automatically," and "Let us restart when we are ready" or just a radio button group.

 Once the players have made these selections, the modal should have a "Start Game" button.

 ?????I wonder if I should have a Game # of Match showing on the screen??????

 NOTE - if the user chooses "restart automatically," I need to use the "timeout" javascript feature to restart the game after 5 seconds.It might be nice to have a modal appear that announces the winner and tells the user that a new game will start in 5 seconds and ask them if they want to start a new match with new players.
 
 If the user chooses, restart the game themselves, then another modal needs to appear after the game. It should:
    - Announce the winner
    - Have a button that will restart the game witin the same match
    - allow them to start a new match with new players - if they choose this, then the startNewGame function should run and the 


 ===================================================== */
