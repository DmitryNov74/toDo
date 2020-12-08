
var input = document.querySelector(".block_form-input");
var btn = document.querySelector(".block_form-btn");
var blocklist = document.querySelector(".block_list");
var btnActive = document.getElementById('active');
var btnAll = document.getElementById('all');
var btnCompleted= document.getElementById('completed');

var todos = [];
var todosShown = [];

var elementId = 0;

function createElements(){
    var newElem = document.createElement("h3");
    newElem.id = elementId;
    elementId += 1;
    todos.push({element:newElem, status:'incomplete', show: 'true'});
    var deletSpan = document.createElement("span");
    var doneBox = document.createElement("input");
    doneBox.type = "checkbox";

    doneBox.className = "block_list-done";
    doneBox.id = newElem.id;
    doneBox.addEventListener("change",function(e){

        if(e.target.checked){
            alert('checked');
        }else{
            alert('not checked');
        }
        newElem.className = "block_list-elem.checked";
        var item = todos.find(function(todo) {
            return todo.element.id === e.target.id
        })
        item.status = 'complete';
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

btnCompleted.addEventListener('click',function(e){
    e.preventDefault();
    todos.forEach(function(todo){
        if (todo.status !== 'complete') {
            todo.element.classList.add('hide')
        }
    });
});

