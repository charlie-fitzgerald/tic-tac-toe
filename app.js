//Setting up gameboard module
const gameBoardModule = (() => {
    const gameboard = ['','','','','','','','','',]

    //clicking start game button renders the board on screen
    //will also be used to refresh the game board with the 
    //latest game state after a player makes a move

    const render = () => {
        const boardDisplay = document.querySelector("#gameboard");
        boardDisplay.innerHTML = '';

        gameboard.forEach((el, index) => {
            const square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("id", `${index}`);
            square.innerHTML = `<h1>${el}</h1>`;
            boardDisplay.appendChild(square);   
            
        })
        
        const squares = document.querySelectorAll(".square");
        squares.forEach(square => {
            square.addEventListener("click", displayControllerModule.handleClick )
        } )
    }

    const getBoard = () => gameboard;

    return { getBoard, render };
})();

//setting up player factory function
const playerFactory = (playerName, playerId, marker) => {
    const sayName = () => console.log(`My name is ${playerName}`);

    return { playerName, playerId, marker, sayName };
};


//setting up displaycontroller module
const displayControllerModule = (() => {    

    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        players = [
            playerFactory(document.querySelector("#player1").value, "X"),
            playerFactory(document.querySelector("#player2").value, "O")
        ]

        currentPlayerIndex = 0;
        gameOver = false;
        console.log(players);
        gameBoardModule.render();
    }

    const handleClick = e => {
        console.log(e.target.id);
    }

    const startButton = document.querySelector("#start-game");
    startButton.addEventListener("click", start );

    return {
        start,
        handleClick
    }

})();









