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
        gameOver = false;
        
        players = [
            playerFactory(document.querySelector("#player1").value, "X"),
            playerFactory(document.querySelector("#player2").value, "O")
        ]

        currentPlayerIndex = 0;        
        message(players);
        gameBoardModule.render();
        
    }

    const message = players => {

        const playerMessage = document.querySelector("#message");

        playerMessage.innerHTML = `<p>It is ${players[currentPlayerIndex].playerName}'s turn</p>`;
    }

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const checkWin = () => {
        for (let i = 0; i < 8; i++) {
            const winCondition = winningConditions[i];
            let a = gameBoardModule.getBoard()[winCondition[0]];
            let b = gameBoardModule.getBoard()[winCondition[1]];
            let c = gameBoardModule.getBoard()[winCondition[2]];
            
            if (a === '' || b === '' || c === '') {
                continue;
            }

            if (a === b && b === c) {
                gameOver = true;
                endGame();
                document.querySelector("#message").innerHTML = `${players[currentPlayerIndex].playerName} Wins`;
                break
            }
        }
    }

    const checkTie = () => {
        for (let i = 0; i < gameBoardModule.getBoard().length; i++) {
            if (gameBoardModule.getBoard()[i] === '') {
                return;
            } 
        }

        gameOver = true;
        endGame();
        document.querySelector("#message").innerHTML = `<p>It's a tie</p>`;
    }

    const endGame = () => {
        const squares = document.querySelectorAll(".square");

        if (gameOver) {
            squares.forEach(square => {
                square.removeEventListener("click", Game.handleClick )
            })

            console.log("Game Over");
        }
    }

    const restart = () => {
        for (let i = 0; i < 9; i++) {
            gameBoardModule.update(i, '');
            gameBoardModule.render();
        }

        gameOver = false;
        document.querySelector("#player1").value = '';
        document.querySelector("#player2").value = '';
        document.querySelector("#message").innerHTML = '';
    }

    

    const handleClick = e => {
        let index = parseInt(e.target.id);

        if (gameBoardModule.getBoard()[index] !== '') {
            return;
        }        

        gameBoardModule.update(index, players[currentPlayerIndex].marker)

        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
        message(players);

        checkWin();

        checkTie();
        
    }

    const startButton = document.querySelector("#start-game");
    startButton.addEventListener("click", start );

    const restartButton = document.querySelector("#restart-game");
    restartButton.addEventListener("click", restart );

    return { start, handleClick }

})();

