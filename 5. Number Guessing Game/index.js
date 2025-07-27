//-----------------------
//Number Guessing Game

const minNum = 1;
const maxNum = 10;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// console.log(answer);

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a Number between 1 and 10`);
    guess = Number(guess);

    if (isNaN(guess)){
        window.alert(`Not a Valid Number`);
    }
    else if (guess>maxNum || guess < minNum){
        window.alert(`Please enter a number between ${maxNum} and ${minNum}`);
    }
    else{
        attempts ++;
        if (guess > answer){
            window.alert("Too High!!! Try again.");
        }
        else if (guess < answer){
            window.alert("Too Low!!! Try again.");
        }
        else{
            window.alert(`Congratulations!!! You have guessed the right Number. Total Attempts ${attempts}`);
            running = false;
        }
    }
}