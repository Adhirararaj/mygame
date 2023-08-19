var timer=60;
var score=0;
var b;
function newhit(){
    b = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = b;
}
function makebubble(){
    var clutter = "";


    for (var i=1; i<=152; i++){
        var a = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${a}</div>`;
    }
    document.querySelector("#pbot").innerHTML = clutter;
}
function runtimer(){
    var timer1 = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#Timer").textContent=timer;
        }
        else{
            clearInterval(timer1);
            document.querySelector("#pbot").innerHTML = `<h1>GAME OVER. To play again. RELOAD</h1>`;
        }
        
    },1000)

}
function incsscore(){
    score += 10
    document.querySelector("#score").textContent=score;
}
document.querySelector("#pbot").addEventListener("click", function (dets){
    var num = (Number(dets.target.textContent));
    if(num === b){
        incsscore();
        makebubble();
        newhit();
    }
})

runtimer();
makebubble();
newhit();