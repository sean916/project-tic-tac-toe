//Global Variables
var board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
var playerOne = {};
var playerTwo = {};
var turn = 0;

//Query Selectors
var tableDiv = document.querySelector('#table');
var display = document.querySelector('#display');


//Functions
const alert = function() {
    display.textContent = "";
    if ((turn % 2) == 0) {
        var headDisplay = document.createElement('h1');
        headDisplay.innerHTML = `${playerOne.name}, it is your turn! Your marker is ${playerOne.marker}`;
        display.appendChild(headDisplay);
    } else {
        var headDisplay = document.createElement('h1');
        headDisplay.innerHTML = `${playerTwo.name}, it is your turn! Your marker is ${playerTwo.marker}`;
        display.appendChild(headDisplay);
}};

var gameInit = () => {
    render();
    playerOne.name = prompt("Player 1, please enter your name", "");
    playerOne.marker = prompt("Please enter 'X' or 'O' as your marker", "");
    markerCheckOne();
    playerTwo.name = prompt("Player 2, Please enter your name", "");
    playerTwo.marker = prompt("Please enter 'X' or 'O' as your marker", "");
    markerCheckTwo();
    alert();
    return { playerOne, playerTwo };
};
function markerCheckOne() {
    if(playerOne.marker == " " || playerOne.marker == "") {
        playerOne.marker = prompt("That marker is unavailable, please enter a different symbol as your marker", "");
        markerCheckOne();
    }
};
function markerCheckTwo() {
    if(playerOne.marker == playerTwo.marker || playerTwo.marker == " " || playerTwo.marker == "") {
        playerTwo.marker = prompt("That marker is unavailable, please enter a different symbol as your marker", "");
        markerCheckTwo();
    }
};


var nextTurn = function() {
    turn += 1;
    console.log(turn);
    return turn;
};

function addMarker() {
    if (this.textContent !== ' ') {
        return;
    
} else if ((turn % 2) == 0) {
        board[this.dataset.indexNumber] = playerOne.marker;

    } else {
        board[this.dataset.indexNumber] = playerTwo.marker;
    }
    render();

    nextTurn();
    alert();
    checkForWin();
};

var render = function() {
    tableDiv.textContent = '';
    for (var i = 0; i < board.length; i++) {
        if (i % 3 == 0) {
            var tr = document.createElement('tr');
            tableDiv.appendChild(tr);
            for (var j = i; j < (i + 3); j++) {
                var td = document.createElement("td");
                td.innerHTML = board[j];
                td.setAttribute('data-index-number', j);
                td.addEventListener("click", addMarker);
                tr.appendChild(td);
            }}}
    return render;
  };

  var renderWin = function() {
    tableDiv.textContent = '';
    for (var i = 0; i < board.length; i++) {
        if (i % 3 == 0) {
            var tr = document.createElement('tr');
            tableDiv.appendChild(tr);
            for (var j = i; j < (i + 3); j++) {
                var td = document.createElement("td");
                td.innerHTML = board[j];
                td.setAttribute('data-index-number', j);
                tr.appendChild(td);
            }}}
    return render;
  };

  var checkForWin = function() {
      if ((board[0] == board[1] && board[1] == board[2] && board[0] !== ' ') ||
       (board[3] == board[4] && board[4] == board[5] && board[5] !== " ") ||
       (board[6] == board[7] && board[7] == board[8] && board[8] !== " ") ||
       (board[0] == board[4] && board[4] == board[8] && board[8] !== " ") ||
       (board[2] == board[4] && board[4] == board[6] && board[6] !== " ") ||
       (board[0] == board[3] && board[3] == board[6] && board[6] !== " ") ||
       (board[1] == board[4] && board[4] == board[7] && board[7] !== " ") ||
       (board[2] == board[5] && board[5] == board[8] && board[8] !== " ")) {
          win()
      }
  };

  var win = function() {
    display.textContent = "";
    if ((turn % 2) !== 0) {
        var headDisplay = document.createElement('h1');
        headDisplay.innerHTML = `Congratulations ${playerOne.name}, you have won!`;
        display.appendChild(headDisplay);
        renderWin();
        
    } else {
        var headDisplay = document.createElement('h1');
        headDisplay.innerHTML = `Congratulations ${playerTwo.name}, you have won!`;
        display.appendChild(headDisplay);
        renderWin();
    }};
    
//Run the function
gameInit();