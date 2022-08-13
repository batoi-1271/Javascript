const form = document.querySelector('form');
const todoList = document.querySelector('.todo-list');

const handleCreateTodo = function (item) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    todoItem.innerHTML = `<span class="todo-text">${item}</span>
                          <i class="fa fa-trash todo-remove"></i>`
    todoList.appendChild(todoItem);
}

const items = JSON.parse(localStorage.getItem("batoi")) || [];

if (Array.isArray(items) && items.length > 0) {
    [...items].forEach(item => handleCreateTodo(item));
}

form.onsubmit = function (e) {
    e.preventDefault();
    const textValue = e.target.elements['todo'].value;
    handleCreateTodo(textValue);
    items.push(textValue);

    localStorage.setItem('batoi', JSON.stringify(items));

    e.target.elements['todo'].value = "";
}

todoList.onclick = function (e) {
    if (e.target.matches('.todo-remove')) {
        const todo = e.target.parentNode;
        todo.parentNode.removeChild(todo);

        const textContent = e.target.previousElementSibling.textContent;
        const newTodo = items.filter(item => item !== textContent);

        localStorage.setItem('batoi', JSON.stringify(newTodo));
    }
}
