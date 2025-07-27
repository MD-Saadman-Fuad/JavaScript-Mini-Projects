const choices = ["rock", "paper", "scissors"];
const choiceEmojis = {
    rock: "🪨",
    paper: "📄",
    scissors: "✂️"
};

const playerChoiceDisplay = document.getElementById('playerChoiceDisplay');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
const roundsDisplay = document.getElementById('roundsDisplay');

let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let isPlaying = false;

function playGame(playerChoice) {
    if (isPlaying) return;

    isPlaying = true;
    rounds++;
    roundsDisplay.textContent = rounds;

    // Highlight selected button
    document.querySelectorAll('.choice-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.dataset.choice === playerChoice) {
            btn.classList.add('selected');
        }
    });

    // Show player choice immediately
    playerChoiceDisplay.textContent = choiceEmojis[playerChoice];

    // Add thinking animation to computer
    computerChoiceDisplay.classList.add('computer-thinking');
    computerChoiceDisplay.textContent = "🤔";
    resultDisplay.textContent = "Computer is thinking...";
    resultDisplay.className = "result-display";

    // Simulate computer thinking time
    setTimeout(() => {
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        // Remove thinking animation
        computerChoiceDisplay.classList.remove('computer-thinking');
        computerChoiceDisplay.textContent = choiceEmojis[computerChoice];

        let result = "";
        let resultClass = "";

        if (playerChoice === computerChoice) {
            result = "It's a Tie! 🤝";
            resultClass = "result-tie";
        } else {
            switch (playerChoice) {
                case "rock":
                    if (computerChoice === "scissors") {
                        result = "You Win! 🎉";
                        resultClass = "result-win";
                        playerScore++;
                    } else {
                        result = "You Lose! 😔";
                        resultClass = "result-lose";
                        computerScore++;
                    }
                    break;
                case "paper":
                    if (computerChoice === "rock") {
                        result = "You Win! 🎉";
                        resultClass = "result-win";
                        playerScore++;
                    } else {
                        result = "You Lose! 😔";
                        resultClass = "result-lose";
                        computerScore++;
                    }
                    break;
                case "scissors":
                    if (computerChoice === "paper") {
                        result = "You Win! 🎉";
                        resultClass = "result-win";
                        playerScore++;
                    } else {
                        result = "You Lose! 😔";
                        resultClass = "result-lose";
                        computerScore++;
                    }
                    break;
            }
        }

        // Update displays
        resultDisplay.textContent = result;
        resultDisplay.className = `result-display ${resultClass}`;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;

        // Check for game milestone
        if (playerScore === 5 || computerScore === 5) {
            setTimeout(() => {
                const winner = playerScore === 5 ? "🎉 You reached 5 wins! Congratulations! 🎉" : "💻 Computer reached 5 wins! Better luck next time!";
                alert(winner);
            }, 1000);
        }

        // Reset playing state
        setTimeout(() => {
            isPlaying = false;
            document.querySelectorAll('.choice-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
        }, 500);
    }, 1500);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    rounds = 0;

    playerScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
    roundsDisplay.textContent = "0";

    playerChoiceDisplay.textContent = "❓";
    computerChoiceDisplay.textContent = "❓";
    resultDisplay.textContent = "Choose your weapon!";
    resultDisplay.className = "result-display";

    isPlaying = false;

    document.querySelectorAll('.choice-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
}

// Add keyboard support
document.addEventListener('keydown', function (event) {
    if (isPlaying) return;

    switch (event.key.toLowerCase()) {
        case 'r':
            playGame('rock');
            break;
        case 'p':
            playGame('paper');
            break;
        case 's':
            playGame('scissors');
            break;
        case ' ':
            event.preventDefault();
            resetGame();
            break;
    }
});

// Add subtle background animation
document.addEventListener('mousemove', function (e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    document.body.style.background = `linear-gradient(${135 + x * 30}deg, 
                hsl(${230 + y * 30}, 70%, 60%) 0%, 
                hsl(${280 + x * 30}, 60%, 50%) 100%)`;
});