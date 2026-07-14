var score = 0;

function AnimateButton(){
    document.getElementById("circle").classList.add("animategrow");
    score = score + 1;
    document.getElementById("score").textContent="Score" + String.valueOf(score)
    setTimeout(RemoveGrowAnimation,100);

}
function RemoveGrowAnimation(){
    document.getElementById("circle").classList.remove("animategrow");
}