
// declare varibles 
const input_name = document.querySelector("#input-player");
const btn_submit = document.querySelector("#btn-submit");
const btn_clear = document.querySelector("#btn-clear");
const list = document.querySelector("#Team-list");
let numOfPeople = 1;

btn_submit.addEventListener("click", ()=>{

    if(input_name.value.length > 50 || input_name.value.length <1){
        alert("this text invalid! ")
        return;
    }

    if(numOfPeople<=10){
        const new_menber = input_name.value;
        const newItem = document.createElement("li");
        numOfPeople++;
    
        newItem.innerHTML = new_menber;
        list.appendChild(newItem);
    
        input_name.value= "";
    }else{
        alert("You reach the maximum, of the people for the team!")
    }
   
})

btn_clear.addEventListener("click" ,()=>{
    list.innerHTML = "";
    numOfPeople = 1;
});

