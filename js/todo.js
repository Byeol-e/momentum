const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; // everytime there's newTodo, going to be painted and pushed texts into array

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // JSON.stringify() makes string
}

function deleteToDo(event) {
    const li = event.target.parentElement; // this is the one we want remove
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // toDo.id is number, li.id is string
    // we want to keep the toDo's id that have an id that is not equals to the id of the li that was just clicked 
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    
    const button = document.createElement("button");
    button.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = newTodo.text; // text of span becomes newTodo from handleToDoSubmit
    button.addEventListener("click", deleteToDo);
    
    li.appendChild(button);
    li.appendChild(span); // li has child of span
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; // copying current value to new value 
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now() // for identifying each of li items
    };
    toDos.push(newTodoObj); // before painted newTodo, take toDos array and push newTodo
    paintToDo(newTodoObj); // sending newTodo on the function of paintTodo
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) { // !== means not equal
    const parsedToDos = JSON.parse(savedToDos); // JSON.parse(savedToDos) is just string, but parsedToDos is array! 
    toDos = parsedToDos; // we want to restore previous toDos
    parsedToDos.forEach(paintToDo); // allows us to excute the function for each items on the array
}

