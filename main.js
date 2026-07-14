var score = 0;

function AnimateButton(){
    document.getElementById("circle").classList.add("animategrow");
    IncreaseScore()
    setTimeout(RemoveGrowAnimation,100);
}
function RemoveGrowAnimation(){
    document.getElementById("circle").classList.remove("animategrow");
}

function IncreaseScore(){
    score = score + 1;
    document.getElementById("score").textContent="Score" + String.valueOf(score)
}