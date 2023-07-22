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
    }

    const getBoard = () => gameboard;

    const startButton = document.querySelector("#start-game");
    startButton.addEventListener("click", render);

    return { getBoard };
})();

//setting up displaycontroller module
const displayControllerModule = (() => {
        
})();

//setting up player factory function
const PlayerFactory = (playerName, playerId, marker) => {
    const sayName = () => console.log(`My name is ${playerName}`);

    return { playerName, playerId, marker, sayName };
}

let terry = PlayerFactory("Terry", 1, "X");
let larry = PlayerFactory("Larry", 2, "O");






