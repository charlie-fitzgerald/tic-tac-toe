//Setting up gameboard module
const gameboardModule = (() => {
    const gameboard = ['','','','','','','','','',]

    return {};
})();

//setting up displaycontroller module
const displayControllerModule = (() => {
    const testDisplay = () => console.log("Test works");

    return { testDisplay };
})();

//setting up player factory function
const PlayerFactory = (playerName, marker) => {
    const sayName = () => console.log(`My name is ${playerName}`);

    return { playerName, marker, sayName };
}

const test = displayControllerModule;

test.testDisplay();











// const render = () => {
    //     const boardDisplay = document.querySelector("#gameboard");
    //     boardDisplay.innerHTML = '';

    //     gameboard.forEach((el, index) => {
    //         const square = document.createElement("div");
    //         square.classList.add("square");
    //         square.setAttribute("id", `${index}`);
    //         square.innerHTML = `<h1>${el}</h1>`;
    //         boardDisplay.appendChild(square);
            
    //     })        
    // }

    // const startButton = document.querySelector("#start-game");
    // startButton.addEventListener("click", render);
