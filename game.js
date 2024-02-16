function getComputerChoice(){
    const comp_choice = ["rock", "paper", "scissors"];
    let comp_index = Math.floor(Math.random() * comp_choice.length); //randomizes element selection
    return comp_choice[comp_index]; 
}

function playround(playerSelection, computerSelection){

    //tied option
    if(computerSelection == "rock" && playerSelection == "rock" || computerSelection == "paper" && playerSelection =="paper"|| computerSelection == "scissors" && playerSelection =="scissors"){
        return "Computer's selection: " + computerSelection + ".\nPlayer's selection: " + playerSelection + ".\nYou tied!";
    }

    //win option
    else if(computerSelection == "paper" && playerSelection == "scissors" || computerSelection == "scissors" && playerSelection == "rock" || playerSelection == "paper" && computerSelection == "rock"){
        return "Computer's selection: " + computerSelection + ".\nPlayer's selection: " + playerSelection + ".\nYou win!";
    }

    //lose option
    else if(computerSelection == "paper" && playerSelection == "rock" || computerSelection == "rock" && playerSelection == "scissors" || playerSelection == "paper" && computerSelection == "scissors"){
        return "Computer's selection: " + computerSelection + ".\nPlayer's selection: " + playerSelection + ".\nYou lose!";
    }
}

function playgame(){
    let computerSelection = getComputerChoice();
    return playround(prompt("Enter option: rock, paper, scissors"), computerSelection);
}


let comp_count = 0;
let player_count = 0;
console.log("Welcome to game of rock paper scissors!");
for(let i = 0; i < 5; i++){
    let result = playgame();

    if(result.includes("You win")){
        player_count += 1;
    }
    else if(result.includes("You lose")){
        comp_count += 1;
    }
    console.log(result + "\nScore: " + "\nComputer: " + comp_count + " Player:" + player_count);
}


