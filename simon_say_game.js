let gameSeq=[];
let userSeq=[];

let colors=["pink","orange","green","blue"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //random no
    let randomIdx=Math.floor(Math.random()*4);
    let btnColor=colors[randomIdx];
    let randBtn=document.querySelector(`.${btnColor}`);
    gameSeq.push(btnColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}

function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);


}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function checkAns(idx){
    
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),1000);
        }
        else{
            console.log("Level not same");
        }
      
    }
    else{
        h2.innerHTML=`Game over ! Your score was <u>${level}</u> <br><Press any key to start`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="#958e85";
        },250);
        reset();
    }

}

function reset(){
    userSeq=[];
    gameSeq=[]; 
    started=false;
    level=0;
}
