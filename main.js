function sleep(time){
    return new Promise(resolve => setTimeout(resolve,time));
}


function AnimateButton(){
    console.log("BIG RED BUTTON PRESSED")
    document.getElementById("circle").classList.add("animate");
}