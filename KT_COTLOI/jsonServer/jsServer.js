var courseApi = 'http://localhost:3000/course';


function start() {
    getCourse(renderCourse);
    handleCreate();
}

// START APP
start();

function getCourse(callBack) {
    fetch(courseApi)
    
    .then((response) => {
        return response.json();
    })
    .then(callBack);
}

function createCourse(data, callBack) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
    .then(response => response.json())
    .then(callBack)
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(courseApi + '/' + id, options)
    .then(response => response.json())
    .then(() => {
        var courseItem = document.querySelector('.course-item-' +id);
        if (courseItem) {
            courseItem.remove();
        }
    })
}


function renderCourse(courses) {
    var listCourseBlock = document.querySelector('#list-course');
    var htmls = courses.map((course) => {
        return `
            <li class="course-item-${course.id}">
                <h4 class="course-item-${course.id}h4">${course.name}</h4>
                <p class="course-item-${course.id}p">${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Delete</button>
                <button onclick="handleEditCourse(${course.id})">Edit</button>
            </li>
        `
    });
    listCourseBlock.innerHTML = htmls.join('');
}

function handleCreate() {
    const createBtn = document.querySelector('#create');
    createBtn.onclick = () => {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description
        }
        createCourse(formData, () => {
            getCourse(renderCourse);
        });
    }
}
