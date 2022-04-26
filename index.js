//DOM elements
const taskSet = document.getElementById('taskSet')
const tasksContainer = document.getElementById('taskContainer')
const taskContainerDiv = document.getElementsByClassName('container')

//Variables
let task
let id = ''
let idOptions = '1234567890'

taskSet.addEventListener("keyup", function(event){
    if (event.code === 'Enter') {
        takeTask();
    }
});

function takeTask(){
    task = taskSet.value
    document.getElementById('taskSet').value = ''
    createItem(task)
}

const createItem = (task) => {
    generateId()
    const item = document.createElement('label')
    item.setAttribute("id", id)
    item.classList.add('container')
    item.innerHTML = `
    <div">
        <input class="taskCheckbox" type="checkbox">
        <div class=".container">${task}</div>
        <button class="taskButton" onclick="cleanScreen(${id})">X</button>
    </div>
    `
    tasksContainer.appendChild(item)
    id = ''
}

const cleanScreen = (id) => {
    document.getElementById(id).remove()
}

function generateId(){
    for (let i = 0; i < 4; i++){
        id += idOptions[Math.floor(Math.random()*10)]
    }
}
