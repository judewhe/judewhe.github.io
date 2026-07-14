function AnimateButton(){
    console.log("BIG RED BUTTON PRESSED");
    document.getElementById("circle").classList.add("animate");
    setTimeout(RemoveGrowAnimation,100);
}
function RemoveGrowAnimation(){
    console.log("animate removed should be")
    document.getElementById("circle").classList.remove("animate");
}