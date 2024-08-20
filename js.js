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

function incrementHumanScore(){
    humanScore.textContent = parseInt(humanScore.textContent) + 1;
}

function incrementComputerScore(){
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
}

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
                    break;
                case "scissor":
                    announcement = "You lose! scissor beats paper";
                    break;
                default:
                    announcement = "something went wrong";
            }
            break;
        case "rock":
            switch(computerChoice){
                case "paper":
                    announcement = "You lose! paper beats rock";
                    break;
                case "rock":
                    announcement = "Draw";
                    break;
                case "scissor":
                    announcement = "You win! rock beats scissor";
                    break;
                default:
                    announcement = "something went wrong";
            }
            break;
        case "scissor":
            switch(computerChoice){
                case "paper":
                    announcement = "You win! scissor beats paper";
                    break;
                case "rock":
                    announcement = "You lose! rock beats scissor";
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
    alert(announcement);
    const check = announcement.split("!");

    if(check[0] === "You win"){
        incrementHumanScore();
    }
    else if(check[0] === "You lose"){
        incrementComputerScore();
    }

    const hScore = parseInt(humanScore.textContent);
    const cScore = parseInt(computerScore.textContent);
    if(hScore === 5 || cScore === 5){
        if(hScore === 5){
            alert("HUMANITY BEATS COMPUTER!!!");
        }
        else {
            alert("COMPUTER BEATS HUMANITY!!");
        }
        
        
        humanScore.textContent = 0;
        computerScore.textContent = 0;
        
    }
}    



const humanScore = document.querySelector("#humanScore");
const computerScore = document.querySelector("#computerScore");

const textDisplay = document.querySelector("span");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.id === "playRound"){
            if(textDisplay.textContent === "none"){
                alert("please select a move first!")
            }
            else {
                playRound(textDisplay.textContent, getComputerChoice())
                textDisplay.textContent = "none";
            }
        }
        else{
            textDisplay.textContent = button.id;
        }
        }
    )
}
)



