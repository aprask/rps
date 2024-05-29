let userScore = 0;
let computerScore = 0;

function playRPS(selection) {
    if (selection === null) {
        return
    }

    if (selection === 'Reset') {
        resetScores()
        return
    }

    let winningStatement = determineWinner(selection, generateComputerSelection());
    alert(winningStatement);
    updateScoreDisplay();

    if(userScore === 5) {
        alert("You won!");
        resetScores();
    } else if (computerScore === 5) {
        alert("You lost!");
        resetScores();
    }


    function resetScores() {
        userScore = 0;
        computerScore = 0;
        updateScoreDisplay();
    }

    function generateComputerSelection() {
        const selectionIndex = Math.floor(Math.random() * 3);
        if (selectionIndex === 0) {
            return 'Rock';
        } else if (selectionIndex === 1) {
            return 'Paper';
        } else if (selectionIndex === 2) {
            return 'Scissors';
        }
    }

    function determineWinner(user, computer) {
        switch (computer) {
            case 'Rock':
                if (user === 'Rock') {
                    return 'Computer Selects Rock\nTie!';
                } else if (user === 'Paper') {
                    userScore++;
                    return 'Computer Selects Rock\nUser Wins!'
                } else if (user === 'Scissors') {
                    computerScore++;
                    return 'Computer Selects Rock\nComputer Wins!'
                }
                break;
            case 'Paper':
                if (user === 'Rock') {
                    computerScore++;
                    return 'Computer Selects Paper\nComputer Wins!';
                } else if (user === 'Paper') {
                    return 'Computer Selects Paper\nTie!'
                } else if (user === 'Scissors') {
                    userScore++;
                    return 'Computer Selects Paper\nUser Wins!'
                }
                break;
            case 'Scissors':
                if (user === 'Rock') {
                    userScore++;
                    return 'Computer Selects Scissors\nUser Wins!';
                } else if (user === 'Paper') {
                    computerScore++;
                    return 'Computer Selects Scissors\nComputer Wins!'
                } else if (user === 'Scissors') {
                    return 'Computer Selects Scissors\nTie!'
                }
                break;
        }
    }

    function updateScoreDisplay() {
        document.getElementById('user-score').textContent = userScore;
        document.getElementById('computer-score').textContent = computerScore;
    }
}