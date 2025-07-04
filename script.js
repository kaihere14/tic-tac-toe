let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msg =document.querySelector(".msg");
let cont = document.querySelector(".container")
let main = document.querySelector("body")
let turnO = false;
let winner =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]]

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if(turnO){ 
            box.innerText = "O";  // or "X" 
            turnO = false;
        }else{
            box.innerText = "X";  // or "X"
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
    reset.addEventListener('click',()=>{
    box.innerText = "";
    box.disabled = false;
    msg.classList.add("hide")
    turnO =false;
    cont.classList.remove("hide")
    main.classList.remove("center")
    reset.innerText ="Reset"
    });
});
const checkwinner =()=>{
    for(let paterns of winner){
    let value1 = boxes[paterns[0]].innerText;
    let value2 = boxes[paterns[1]].innerText;
    let value3 = boxes[paterns[2]].innerText;
    if(value1 !="" && value2 !="" && value3 !=""){
        if(value1==value2 &&value3==value2){
          if(turnO){
            alert("Winner is X")
            msg.classList.remove("hide")
            msg.innerText =  "Winner is : X";
            cont.classList.add("hide")
            main.classList.add("center")
            reset.innerText ="New Game"
          }else{
            alert("Winner is O")
            msg.classList.remove("hide")
            msg.innerText = "Winner is : O";
            main.classList.add("center")
            cont.classList.add("hide")
            reset.innerText ="New Game"
          }
        }
    }
}
}
