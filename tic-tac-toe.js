let currentPlayer = ''
const gameArea =  document.getElementById("board");
const playerName1 = document.getElementById("play1");
const playerName2 = document.getElementById("play2");
let cellArr = Array.from(document.getElementsByClassName("cell"))
console.log(cellArr)

const getCurrentPlayer = () => {
        if (clickCount % 2 === 0){
                currentPlayer = "X"
                console.log(gameArea)
                console.log('Player 1 turn: ', currentPlayer)
                playerName2.classList.remove('selected')
                playerName1.classList.toggle('selected')
        }else{
                currentPlayer = "O"
                console.log('Player 2 turn: ', currentPlayer)
                playerName1.classList.remove('selected')
                playerName2.classList.toggle('selected')

        }
        return currentPlayer
}

let clickCount = 0
gameArea.addEventListener("click", function(clickEvent){
        if (clickEvent.target.matches(".cell")){
                if (clickEvent.target.innerHTML == ''){
                        getCurrentPlayer()
                        clickEvent.target.innerHTML=currentPlayer
                        for (let index = 0; index < cellArr.length; index++) {
                                const cell = cellArr[index];
                                console.log(cell.innerHTML)
                        }
                        clickCount++}else{
                                alert("Can't do that!")
                        }                   
                } 
})  
//loop for if single player to select random place to place marker for player 2 with a time delay

//function to show the player if its player 1's or player 2's turn

//ability to name both player 1 and player 2, if player 2 is blank it auto selects CPU and names player "Computer"
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
        }else{
                document.getElementById("play2").innerHTML = "Computer"
        }   
}

// console.log(gameArea)
//win conditions (if player 1 wins, else player 2 wins)
    // cell 1, cell 4, cell 7
    // cell 2, cell 5, cell 8
    // cell 3, cell 6, cell 9
    // cell 1, cell 5, cell 9
    // cell 3, cell 5, cell 7
    // cell 1, cell 2, cell 3
    // cell 4, cell 5, cell 6
    // cell 7, cell 8, cell 9

//reset button to start a new game