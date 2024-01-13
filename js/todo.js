const toDoForm = document.querySelector('#todo-form')
const toDoInput = toDoForm.querySelector('#todo-form input')
const toDoList = document.querySelector('#todo-list')

let toDos = []
const TODOS_KEY = 'todos'

function deleteToDo (e) {
    const li = e.target.parentElement
    li.remove()
    toDos = toDos.filter(e => e.id !== Number(li.id))
    saveTodos()
}

const savedTodos = localStorage.getItem(TODOS_KEY)
if(savedTodos !== null) {
    const parsedToDos = JSON.parse(savedTodos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo);
}


function saveTodos () {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function paintToDo (newTodo) {
    const li = document.createElement('li')
    li.id = newTodo.id
    const span = document.createElement('span')
    span.innerText = newTodo.text
    
    const button = document.createElement('button')
    button.innerText = '❌'
    button.addEventListener('click', deleteToDo)

    li.appendChild(span)
    li.appendChild(button)

    toDoList.appendChild(li)
}

function handleToDoSubmit (e) {
    e.preventDefault();
    const newTodo = toDoInput.value
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj)
    toDoInput.value = ''
    paintToDo(newTodoObj)
    saveTodos()
}

toDoForm.addEventListener('submit', handleToDoSubmit)