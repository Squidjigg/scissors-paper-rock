var playerNum1 = Math.floor(Math.random() * 3) + 1;
var playerNum2 = Math.floor(Math.random() * 3) + 1;

// var playerAudio1 = new Audio("sounds/horn-stabs-entrance.mp3");
// var playerAudio2 = new Audio("sounds/success-fanfare-trumpets.mp3");
// var playerAudio3 = new Audio("sounds/surprise-sound-effect.mp3");

// Random number assignment: 1-scissors, 2-paper, 3-rock

document.querySelector(".img1").setAttribute("src", "images/player1_" + playerNum1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/player2_" + playerNum2 + ".png");

function playerWinSound1() {
    var playerAudio1 = new Audio("sounds/horn-stabs-entrance.mp3");
    playerAudio1.play();
}

function playerWinSound2() {
    var playerAudio2 = new Audio("sounds/success-fanfare-trumpets.mp3");
    playerAudio2.play();
}

function playerDraw() {
    var playerAudio3 = new Audio("sounds/surprise-sound-effect.mp3");
    playerAudio3.play();
}

if (playerNum1 === 3 && playerNum2 === 1) {
    // rock beats scissors
    // player 1 wins 
    document.querySelector("h1").textContent = "🏆 Player 1 Wins!";
    playerWinSound1();
}
else if (playerNum1 === 3 && playerNum2 === 2) {
    // paper beats rock
    // player 2 wins
    document.querySelector("h1").textContent = "Player 2 Wins! 🏆";
    playerWinSound2();
}
else if (playerNum1 === 2 && playerNum2 == 1) {
    // scissors beats paper
    // player 2 wins
    document.querySelector("h1").textContent = "Player 2 Wins! 🏆";
    playerWinSound2();
}
else if (playerNum1 === 1 && playerNum2 === 2) {
    // scissors beats paper
    // player 1 wins
    document.querySelector("h1").textContent = "🏆 Player 1 Wins!";
    playerWinSound1();
}
else if (playerNum1 === 1 && playerNum2 === 3) {
    // rock beats scissors
    // player 2 wins
    document.querySelector("h1").textContent = "Player 2 Wins! 🏆";
    playerWinSound2();
}
else if (playerNum1 === 2 && playerNum2 === 3) {
    // paper beats rock
    // player 1 wins
    document.querySelector("h1").textContent = "🏆 Player 1 Wins!";
    playerWinSound1();
}
else if (playerNum1 === playerNum2) {
    // draw
    document.querySelector("h1").textContent = "😲 Draw! 😲";
    playerDraw();
}