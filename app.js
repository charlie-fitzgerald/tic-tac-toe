//Setting up gameboard module
const gameBoardModule = (() => {
    const gameboard = ['','','','','','','','','',]

    const render = () => {
        const boardDisplay = document.querySelector("#gameboard");
        boardDisplay.innerHTML = '';
        boardDisplay.style.visibility = 'visible';

        gameboard.forEach((el, index) => {
            const square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("id", `${index}`);
            square.innerHTML = `<h1>${el}</h1>`;
            boardDisplay.appendChild(square);   
            
        })

        const squares = document.querySelectorAll(".square");
        squares.forEach(square => {
            square.addEventListener("click", Game.handleClick )
        });
        
        
    }

    const getBoard = () => gameboard;

    const update = (index, value) => {
        gameboard[index] = value;
        render();
    }

    return { getBoard, render, update };
})();

//setting up player factory function
const playerFactory = (playerName, marker) => {
    const sayName = () => console.log(`My name is ${playerName}`);

    return { playerName, marker, sayName };
};


//setting up Game display module
const Game = (() => {    

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
        gameBoardModule.render();
        
    }

    const restart = () => {
        for (let i = 0; i < 9; i++) {
            gameBoardModule.update(i, '');
            gameBoardModule.render();
        }

        document.querySelector("#player1").value = '';
        document.querySelector("#player2").value = '';
    }

    const handleClick = e => {
        let index = parseInt(e.target.id);

        if (gameBoardModule.getBoard()[index] !== '') {
            return;
        }
        

        gameBoardModule.update(index, players[currentPlayerIndex].marker)

        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;

        
    }

    const startButton = document.querySelector("#start-game");
    startButton.addEventListener("click", start );

    const restartButton = document.querySelector("#restart-game");
    restartButton.addEventListener("click", restart );

    return { start, handleClick }

})();

