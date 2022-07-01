var playerNum1 = Math.floor(Math.random() * 3) + 1;
var playerNum2 = Math.floor(Math.random() * 3) + 1;

// Random number assignment: 1-scissors, 2-paper, 3-rock

document.querySelector(".img1").setAttribute("src", "images/player1_" + playerNum1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/player2_" + playerNum2 + ".png");

if(playerNum1 === 3 && playerNum2 === 1 ) {
    // rock beats scissors
    // player 1 wins 
    document.querySelector("h1").textContent = "🏆 Player 1 Wins!"
}
else if(playerNum1 === 3 && playerNum2 === 2) {
    // paper beats rock
    // player 2 wins
    document.querySelector("h1").textContent = "Player 2 Wins! 🏆"
}
else if(playerNum1 === 2 && playerNum2 == 1) {
    // scissors beats paper
    // player 2 wins
    document.querySelector("h1").textContent = "Player 2 Wins! 🏆"
}
else if(playerNum1 === 1 && playerNum2 === 2) {
    // scissors beats paper
    // player 1 wins
    document.querySelector("h1").textContent = "🏆 Player 1 Wins!"
}
else if(playerNum1 === 1 && playerNum2 === 3) {
    // rock beats scissors
    // player 2 wins
    document.querySelector("h1").textContent = "Player 2 Wins! 🏆"
}
else if(playerNum1 === 2 && playerNum2 === 3) {
    // paper beats rock
    // player 1 wins
    document.querySelector("h1").textContent = "🏆 Player 1 Wins!"
}
else if (playerNum1 === playerNum2) {
    // draw
    document.querySelector("h1").textContent = "😲 Draw! 😲"
}