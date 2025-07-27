

function rollDice(){
    const numofDice  = document.getElementById('numofdice').value;
    const diceResult  = document.getElementById('diceResult');
    const diceImages  = document.getElementById('diceImages');
    const result  = [];
    const image  = [];
    
    for (let i = 0; i<numofDice; i++){
        const value = Math.floor(Math.random()*6)+1
        result.push(value);
        image.push(`<img src="images/${value}.png" alt "Dice ${result}">`)
    }

    diceResult.textContent = `dice: ${result.join(', ')}`;
    diceImages.innerHTML = image.join('');
}    