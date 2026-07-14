var score = 0;

function AnimateButton(){
    document.getElementById("circle").classList.add("animategrow");
    score = score + 1;
    score_str = Integer.toString(score)
    document.getElementById("score").textContent="Score"+score_str
    setTimeout(RemoveGrowAnimation,100);

}
function RemoveGrowAnimation(){
    document.getElementById("circle").classList.remove("animategrow");
}