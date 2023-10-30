var mxscore=0;


function setGame(){
function bubble(){
var circle = " ";

for(var i=1;i<=560;i++){
    var rd=Math.floor(Math.random()*10);
      circle+= `<div class="bubble">${rd}</div>`;
}
document.querySelector("#mainbottom").innerHTML=circle;
}
var time=15;
var settime;
// time interval 
var tar=0;
function timer(){
     settime= setInterval(function(){
        if(time>0){
        time--;
        
        document.querySelector("#timeprint").textContent=time;
        }

        else{
            clearInterval(settime);
            document.querySelector("#mainbottom").innerHTML=`<h3>GAME OVER : (  Your Score Is ${score}<h3>`;
          




            
        }
     
    },1000);
    
    
}

// hit
function hit(){
    tar=Math.floor(Math.random()*10);
    
    document.querySelector("#hitme").textContent=tar;
}


// raising a event 
document.querySelector("#mainbottom").addEventListener("click",function(details){
    var current= Number(details.target.textContent);
    if(current===tar){
        increaseScore();
        
        bubble();
        hit();
    }
    else{
         clearInterval(settime); // Stop the timer when the user input is not equal to tar
    document.querySelector("#mainbottom").innerHTML = `<h3>OOPS! YOU LOSE: Your Score Is ${score}</h3>`;
   
    }

});
// increase the score by 1
var score=0;
function increaseScore(){
    score += 1;
    document.querySelector("#incscore").textContent=score;
}

timer();
bubble();
hit();

}

setGame();

