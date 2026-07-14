function AnimateButton(){
    console.log("BIG RED BUTTON PRESSED")
    document.getElementById("circle").classList.add("animate");
    setTimeout(RemoveGrowAnimation,100)
}
function RemoveGrowAnimation(){
    document.getElementById("circle").classList.remove("animate")
}