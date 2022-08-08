const form = document.querySelector('form');
const todoList = document.querySelector('.todo-list');
const items = JSON.parse(localStorage.getItem('todo')) || [];

if (items.length > 0) {
    items.forEach(element => createTodoList(element)); //
}

function createTodoList(item) {
    const todoItems = document.createElement('div');
    todoItems.classList.add('todo-item');

    todoItems.innerHTML = `<span class="todo-text">${item}</span>
    <i class="fa fa-trash todo-remove"></i>`;

    todoList.appendChild(todoItems);
}

form.onsubmit = function(evt) {
    evt.preventDefault();
    const todoValue = this.elements['todo'].value;

    if (!todoValue) return;
    createTodoList(todoValue);

    items.push(todoValue);
    localStorage.setItem('todo', JSON.stringify(items));
    this.elements['todo'].value = "";
}

todoList.onclick = function(evt) {
    if (evt.target.matches('.todo-remove')) {
        const todoDOM = evt.target.parentNode;
        todoDOM.parentNode.removeChild(todoDOM);

        const textDOM = evt.target.previousElementSibling.textContent;
        const newTodos = items.filter(item => item !== textDOM)

        localStorage.setItem('todo', JSON.stringify(newTodos));
    }
}