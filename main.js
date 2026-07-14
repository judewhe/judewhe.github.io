function AnimateButton(){
    document.getElementById("circle").classList.add("animategrow");
    setTimeout(RemoveGrowAnimation,50);
}
function RemoveGrowAnimation(){
    document.getElementById("circle").classList.remove("animategrow");
    document.getElementById("circle").classList.add("animateshrink");
    setTimeout(RemoveShrinkAnimatio,50);
}
function RemoveShrinkAnimatio(){
    document.getElementById("circle").classList.remove("animateshrink");
}