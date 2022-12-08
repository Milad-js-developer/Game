const choises = ["rock", "paper", "scissors"];

// computer choise
const computerChoose = choises[Math.floor(Math.random() * choises.length)];

// user choise
const getChoise = prompt("rock, paper, scissors ?");
let userChoose = getChoise;
if(userChoose != null && userChoose !== "" ) {
    userChoose = userChoose.toLowerCase();
}



if(choises.includes(userChoose)) {
    console.log(`You choose : ${userChoose}`);
    console.log(`Computer choose : ${computerChoose}`);
}
else {
    console.log("You cheated !");
}



if(userChoose == computerChoose) {
    console.log(" You tie .");
}
else if(userChoose == "rock") {
    if(computerChoose == "paper") {
        console.log("You lose !");
    }
    else {
        console.log("You win .");
    }
}
else if(userChoose == "paper") {
    if(computerChoose == "scissors") {
        console.log("You lose !");
    }
    else {
        console.log("You win .");
    }
}
else if(userChoose == "scissors") {
    if(computerChoose == "rock") {
        console.log("You lose !");
    }
    else {
        console.log("You win .");
    }
}



