let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
var startButton = document.createElement('button');
startButton.innerText = 'Click to start';
document.getElementById('game-over-lbl').appendChild(startButton);
startButton.addEventListener('click', (startEvent) =>{startEvent.target.hidden = true;})
// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for (let i = 0; i < 9; i++){
        let cell = 'c' + (i+1);
        var cellButton = document.createElement('button');
        document.getElementById(cell).appendChild(cellButton);
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    let btnClicked = event.target;
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
   btnClicked.textContent = '[' + nextPlayer + ']'

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    btnClicked.disabled = true;

    if (nextPlayer === 'X'){
        nextPlayer = 'O';
    }
    else {
        nextPlayer = 'X';
    }


    // Check if the game is over
    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let lbl = document.getElementById('game-over-lbl');
        var label = document.createElement('h1');
        label.innerText = 'The Game Is Over';
        lbl.appendChild(label);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let buttonCheck = true;
    for (let i = 0; i < btns.length; i++){
        if(!btns[i].disabled){
            buttonCheck = false;
        }
    }
   return buttonCheck;
}
