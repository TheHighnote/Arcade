let currentPlayer = ''
const gameArea = document.getElementById("board");
const playerName1 = document.getElementById("play1");
const playerName2 = document.getElementById("play2");
let cellArr = Array.from(document.getElementsByClassName("cell"))
let clickCount = 0
console.log(cellArr)

const getCurrentPlayer = () => {
    if (clickCount % 2 === 0) {
        currentPlayer = "X"
        console.log('Player 1 turn: ', currentPlayer)
        playerName2.classList.remove('selected')
        playerName1.classList.toggle('selected')
    } else {
        currentPlayer = "O"
        console.log('Player 2 turn: ', currentPlayer)
        playerName1.classList.remove('selected')
        playerName2.classList.toggle('selected')

    }
    return currentPlayer
}

function reset() {
    cellArr.forEach(cell => cell.innerHTML = '');
    clickCount = 0;
    currentPlayer = 'X';
}
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (let i = 0; i < winConditions.length; i++) {
        let winCondition = winConditions[i];
        let a = cellArr[winCondition[0]];
        let b = cellArr[winCondition[1]];
        let c = cellArr[winCondition[2]];
        if (a.innerHTML != "" && b.innerHTML != "" && c.innerHTML != "" && a.innerHTML == b.innerHTML && b.innerHTML == c.innerHTML) {
            setTimeout(() => {
                alert(`${a.innerHTML} is the winner!`);
                reset()
            }, 200)
        }

    }
}

function startGame() {
    gameArea.addEventListener("click", function(clickEvent) {
        if (clickEvent.target.matches(".cell")) {
            if (clickEvent.target.innerHTML == '') {
                getCurrentPlayer()
                clickEvent.target.innerHTML = currentPlayer
                checkWinner()
                clickCount++
            } else {
                alert("Can't do that!")
            }
        }

    })
}

function player1Select() {
    let person = prompt("Please enter your name", "Player 1");
    if (person != null) {
        document.getElementById("play1").innerHTML = person
    }
}

function player2Select() {
    let person = prompt("Please enter your name", "Player 2");
    if (person != "Player 2") {
        document.getElementById("play2").innerHTML = person
    } else {
        document.getElementById("play2").innerHTML = "Computer"
    }
}