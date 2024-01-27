let userScore=0;
let compScore=0;
let msg=document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScorep=document.querySelector("#your-score");
const compScorep=document.querySelector("#comp-score")

const gencompchoice=()=>
{
    const option=["rock","paper","scissor"];
   const randidx= Math.floor(Math.random()*3);
   return option[randidx];
}
const showwiner=(userwin  )=>{
    if (userwin){
        userScore++;
        userScorep.innerText=userScore;
        console.log("youwin!");
        msg.innerText=`you win ! `
        msg.style.background="green";

    }else{
        compScore++;
        compScorep.innerText=compScore;

        console.log("youlose")
        msg.innerText="you lose !"
        msg.style.background="red";


    }
}
const draw=()=>{
    console.log("draw")
    msg.innerText="game was draw"
    msg.style.background="purple";
}
const playGame=(userchoice)=>
{
console.log("userchoice=",userchoice)
const compchoice=gencompchoice();
console.log("compchoice=",compchoice);
if(userchoice===compchoice){
draw();
}else{
    let userwin=true;
    if(userchoice==="rock"){

     userwin=   compchoice==="paper"?false:true;
    }else if(userchoice==="paper"){
      userwin =  compchoice==="scissors"?flase:true;
    }
    else{
        userwin=compchoice==="rock"?false:true;

    }
    showwiner(userwin)
}
};



choices.forEach((choice) =>  {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
console.log("choice was clicked",userchoice);
playGame(userchoice);
    });

});
