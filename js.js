function getComputerChoice(){
    const ran = Math.floor((Math.random()) * 3) + 1;
    let move;
    switch(ran){
        case 1:
            move = "paper";
            break;
        case 2:
            move = "rock";
            break;
        default:
            move = "scissor";
    }

    return move;
}

function getHumanChoice(){
    const humanMove = prompt("rock, paper, scissor: ");
    return humanMove;
}




function playGame(){
    let humanScore = 0;
    let computerScore = 0;  
    
    
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        let announcement;
        switch(humanChoice){
            case "paper":
                switch(computerChoice){
                    case "paper":
                        announcement = "Draw";
                        break;
                    case "rock":
                        announcement = "You win! paper beats rock";
                        humanScore++;
                        break;
                    case "scissor":
                        announcement = "You lose! scissor beats paper";
                        computerScore++;
                        break;
                    default:
                        announcement = "something went wrong";
                }
                break;
            case "rock":
                switch(computerChoice){
                    case "paper":
                        announcement = "You lose! paper beats rock";
                        computerScore++;
                        break;
                    case "rock":
                        announcement = "Draw";
                        break;
                    case "scissor":
                        announcement = "You win! rock beats scissor";
                        humanScore++;
                        break;
                    default:
                        announcement = "something went wrong";
                }
                break;
            case "scissor":
                switch(computerChoice){
                    case "paper":
                        announcement = "You win! scissor beats paper";
                        humanScore++;
                        break;
                    case "rock":
                        announcement = "You lose! rock beats scissor";
                        computerScore++;
                        break;
                    case "scissor":
                        announcement = "Draw";
                        break;
                    default:
                        announcement = "something went wrong";
                    }
                break;
            default:
                announcement = "please either put rock, paper or scissor";
        }
        
        console.log("your move " + humanChoice + "\n" + "computer move " + computerChoice + "\n");
        console.log(announcement);
    }




    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    let announcement = "your score: " + humanScore + "\n" + "computer score: " + computerScore;

    if (humanScore > computerScore){
        console.log(announcement + "\n" + "humanity won!");
    }
    else {
        console.log(announcement + "\n" + "computer won!");
    }
}