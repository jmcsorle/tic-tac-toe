// ~~~~~~~~~~ DOM Management ~~~~~~~~~~

// ~~~~~~~~~~~~~~ Query Selectors ~~~~~~~~~~~~~~
var player1 = document.querySelector('#troll1');
var player1Wins = document.querySelector('#troll1Wins');
var player1Token = document.querySelector('#player1Img');
var player2 = document.querySelector('#troll2');
var player2Wins = document.querySelector('#troll2Wins');
var player2Token = document.querySelector('#player2Img')
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
    testCell(e)
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




// ~~~~~~~~~~~~~~ Game Logic ~~~~~~~~~~~~~~

// A function that creates the objects that store each players’ informations - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)


var players = [
    {
        name: 'player1',
        token: 'Raucous Red Circle',
        class: 'troll',
        imgSrc:  'assets/Raucous-Red-Circle.png',
        wins: 0
    },
    {
        name: "player2",
        token: 'Blue Yaw Square',
        class: 'troll',
        imgSrc: 'assets/Blue-Yaw-Square.png',
        wins:0
    }
]

var firstPlayer = players[0];
var currentPlayer = players[0];
var secondPlayer = players[1];

 //Write this out to a cookie
 //Check to see if there's a cookie - if so, update the player data - if not, leave it at the defaults and start the game.
 //research how to write a cookie and how to read a cookie and add that functionality in

 /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  Starting Player
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

 /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  takeTurns
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function takeTurns(thisPlayer) {
    if (thisPlayer === "player1") {
        thisPlayer = "player2"
    }
    else {
        thisPlayer = "player1"
       }
    return thisPlayer
}

 /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  newGame
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

 function resetGame() {
    if (currentPlayer === "player1") {
        firstPlayer = "player2"
       }
       else {
        firstPlayer = "player1"
       }
    return firstPlayer
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                 gameBoard Function
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// function gameBoard(e) {
//     testCell(e);
//     if (cellEmpty) {
        
        // 		placeToken(e, currentPlayer);
        // 		if (testWin(currentPlayer)) {
        // 			increaseWins(currentPlayer);
        // 			currentPlayer = takeTurns(currentPlayer);
        // 			resetGame();
        // 		}
        // 	} else {
        // 		/* change message to tell currentPlayer to choose a different square

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
    if (currentPlayer === player1){
        e.target.classList(id).innerHTML = `
        <img id="player1Img" src="assets/Raucous-Red-Circle.png" alt="Racus Red" height="90" width="90" />
        `;
    }
    else {
        e.target.classList(id).innerHTML = `
        <img id="player2Img" src="assets/Blue-Yaw-Square.png" alt=""Blue Yaw" height="90" width="90"/>
        `
    }
}





// function gameboard(e) {
// 	var validMove = testSquare(e);
// 	if (validMove) {
// 		placeToken(e, currentPlayer);
// 		if (testWin(currentPlayer)) {
// 			increaseWins(currentPlayer);
// 			currentPlayer = takeTurns(currentPlayer);
// 			resetGame();
// 		}
// 	} else {
// 		/* change message to tell currentPlayer to choose a different square */
// 	}
// }

// function testWin(currentPlayer) {
// 	let playerToken = players[currentPlayer].token;
// 	if ((t1a === playerToken && t2a === playerToken && t3a === playerToken) ||
// 		(t1b === playerToken && t2b === playerToken && t3b === playerToken) || 
// 		(t1c === playerToken && t2c === playerToken && t3c === playerToken) || 
// 		(t1a === playerToken && t2b === playerToken && t3c === playerToken) || 
// 		(t3a === playerToken && t2b === playerToken && t1c === playerToken)) {
// 			console.log 'player wins';
// 		}
// 	}
// }
// t1a.addEventListener('click', gameBoard);

// function gameboard(e) {
// 	let validMove = testSquare(e);
// 	if (validMove) {
// 		placeToken(e, currentPlayer);
// 		if (testWin(currentPlayer)) {
// 			increaseWins(currentPlayer);
// 			currentPlayer = takeTurns(currentPlayer);
// 			resetGame();
// 		} if isDraw() {
// 			currentPlayer = takeTurns(currentPlayer);
// 			resetGame();
// 		} else {
// 			currentPlayer = takeTurns(currentPlayer);
// 		}
// 	} else {
// 		/* change message to tell currentPlayer to choose a different square */
// 	}
// }

// function testWin(currentPlayer) {
// 	var pToken = players[currentPlayer].token;
// 	if ((t1a === pToken && t2a === pToken && t3a === pToken) ||
// 		(t1b === pToken && t2b === pToken && t3b === pToken) || 
// 		(t1c === pToken && t2c === pToken && t3c === pToken) || 
// 		(t1a === pToken && t2b === pToken && t3c === pToken) || 
// 		(t3a === pToken && t2b === pToken && t1c === pToken)) {
// 			console.log('player wins');
// 		}
// }


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                  checkWin

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function checkWin() {
    var winner = ""


}

function isDraw() {



}


function isDraw() {
	if (t1a !== '' && t1b !== '' && t1c !== '' &&
			t2a !== '' && t2b !== '' && t2c !== '' &&
			t3a !== '' && t3b !== '' && t3c !== '') {
		return true;
	} else {
		return false;
	} 
}



========================================================== */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                Increase Wins
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function increaseWins(winner) {
    players[winner].wins +=1;
}


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  Restart Game / Match
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function restart() {

}

=========================================================== */

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
