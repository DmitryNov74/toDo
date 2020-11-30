
var input = document.querySelector(".block_form-input");
var btn = document.querySelector(".block_form-btn");
var blocklist = document.querySelector(".block_list");

function createElements(){
    var newElem = document.createElement("h3");
    var deletSpan = document.createElement("span");
    var doneBox = document.createElement("input");
    doneBox.type = "checkbox";

    doneBox.className = "block_list-done";
    doneBox.addEventListener("onclick",function(){
        newElem.className = "block_list-elem.checked";
        
           
    });
    
    
    deletSpan.className = "block_list-delete";
    deletSpan.textContent = "X";
    deletSpan.addEventListener("click",function(){
        blocklist.removeChild(newElem);
    });

    newElem.className = "block_list-elem";
    newElem.textContent = input.value;
    newElem.appendChild(deletSpan);
    newElem.appendChild(doneBox);

    blocklist.appendChild(newElem);

}

btn.addEventListener("click",function(e){
    e.preventDefault();
    if(!(input.value === "enter:" || input.value === "" )){
        createElements(input.value);
        input.value = "";
    }else{
        alert("Please write your task!");
    }
});
