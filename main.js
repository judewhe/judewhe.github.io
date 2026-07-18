var score = 0;
var score_mult = 1;
var upgrade_req = 25;

function AnimateButton(){
    document.getElementById("circle").classList.add("animategrow");
    score = score + (1 * score_mult);
    document.getElementById("score").textContent="Score: "+String(score);
    if (score >= upgrade_req){
        document.getElementById("upgrade1").classList.remove("upgrade_locked");
        document.getElementById("upgrade1").classList.add("upgrade_available");
    }
    setTimeout(RemoveGrowAnimation,100);

}
function RemoveGrowAnimation(){
    document.getElementById("circle").classList.remove("animategrow");
}

function UpgradeClick(){
    if (score >= upgrade_req){
        score_mult = score_mult + 1;
        score = score - upgrade_req;
        document.getElementById("score").textContent="Score: "+String(score);
        upgrade_req = upgrade_req * 2;
        if (score < upgrade_req){
            document.getElementById("upgrade1").classList.remove("upgrade_available");
            document.getElementById("upgrade1").classList.add("upgrade_locked");
        }
    }
}


