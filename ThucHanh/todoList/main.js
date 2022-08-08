window.addEventListener('load', function() {

    const todoList = document.querySelector('.todo-list');
    const form = document.querySelector('form');
    const todoItems = JSON.parse(localStorage.getItem("list task")) || [];

    if (Array.isArray(todoItems) && todoItems.length > 0) {
        [...todoItems].forEach(item => createTodoList(item));
    }

    function createTodoList(item) {
        const  todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
            <span class="todo-text">${item}</span>
            <i class="fa fa-trash todo-remove"></i>`
        todoList.appendChild(todoItem);
    }

    form.onsubmit = function(e) {
        e.preventDefault();
        const todoValue = this.elements["todo"].value;
        if(!todoValue) return;
        createTodoList(todoValue);

        todoItems.push(todoValue);
        // Save to local storage
        localStorage.setItem('list task', JSON.stringify(todoItems));

        this.elements["todo"].value = "";
    }

    // Handel remove todo
    todoList.onclick = function(e) {
        if (e.target.matches(".todo-remove")) {

            // remove todo in DOM 
            const todo = e.target.parentNode;
            todo.parentNode.removeChild(todo);

            // remove todo in LocalStorage
            const text = e.target.previousElementSibling.textContent;
            const newTodos = todoItems.filter(item => item !== text)

            localStorage.setItem('list task', JSON.stringify(newTodos));
        }
    }
})