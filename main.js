var score = 0;
var score_mult = 1

function AnimateButton(){
    document.getElementById("circle").classList.add("animategrow");
    score = score + (1 * score_mult);
    document.getElementById("score").textContent="Score: "+String(score);
    setTimeout(RemoveGrowAnimation,100);

}
function RemoveGrowAnimation(){
    document.getElementById("circle").classList.remove("animategrow");
}

function UpgradeClick(){
    score_mult += 1;
}
