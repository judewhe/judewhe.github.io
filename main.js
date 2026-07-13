function sleep(time){
    return new Promise(resolve => setTimeout(resolve,time));
}


function AnimateButton(){
    document.getElementsByClassName("circle").classList.add("animate");
    sleep(0.1);
    document.getElementsByClassName("circle").classList.remove("animate");
}