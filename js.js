function computerChoice(){
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
}