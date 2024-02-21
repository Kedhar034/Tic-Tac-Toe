let boxes = document.querySelectorAll(".box");
let reset  = document.querySelector("#reset");
let newbutton =document.querySelector("#newbutton");
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");

let turnO= true;
let count = 0;

const WinPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],[6,7,8]

];

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO===true){
            box.innerText="O";
            box.classList.add("player1");
            turnO=false;
        } else{
            box.innerText="X";
            box.classList.add("player2");
            turnO=true;
        }
        box.disabled=true;
        count++;

        let isWin= checkwinner();

        if (count ===9 && !isWin){
            gameDraw();
        }
    });

});

const gameDraw = ()=> {
    msg.innerText ="Game is Draw.";
    msgcontainer.classList.remove("hide");
    disableboxes();

};



const enableboxes=()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    
};

const resetGame = () => {
    turnO=true;
    count = 0;
    enableboxes(); 
    msgcontainer.classList.add("hide"); 
}

const disableboxes = ()=> {
    for (let box of boxes){
        box.disabled = true;
    }
}

const showWinner =(winner)=>{
    msg.innerText= `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner =()=> {
    for(let pattern of WinPattern) {
        let val1= boxes[pattern[0]].innerText;
        let val2= boxes[pattern[1]].innerText;
        let val3= boxes[pattern[2]].innerText;
        
        
        if(val1 !="" && val2 !="" &&val3 !="" ){
            if(val1===val2 &&  val2===val3){
                console.log("winner",val1);
                showWinner(val1);
            }
        }
    }
};

newbutton.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);