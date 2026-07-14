function AnimateButton(){
    document.getElementById("circle").classList.add("animategrow");
    setTimeout(RemoveGrowAnimation,100);
}
function RemoveGrowAnimation(){
    document.getElementById("circle").classList.remove("animategrow");
}