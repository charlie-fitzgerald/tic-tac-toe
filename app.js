const Gameboard = (() => {
    let gameboard = ['','','','','','','','','']
    
    let render = () => {
        
    }
})();

const PlayerFactory = (playerName, marker) => {
    const sayName = () => console.log(`My name is ${playerName}`);

    return { playerName, marker, sayName };
}