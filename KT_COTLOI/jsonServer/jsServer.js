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
            var courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) {
                courseItem.remove();
            }
        })
}

function handlePutCourse(id, data, callback) {
    fetch(courseApi + '/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function renderCourse(courses) {
    var listCourseBlock = document.querySelector('#list-course');
    var htmls = courses.map((course) => {
        return `
            <li class="course-item-${course.id}">

                <h4 class="course-item-${course.id}h4">${course.name}</h4>
                <p class="course-item-${course.id}p">${course.description}</p>

                <button onclick="handleDeleteCourse(${course.id})">Delete</button>
                <button onclick="handlePutForm(${course.id})">UPDATE</button>
                
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


function handlePutForm(id) {
    let name = document.querySelector('.course-item-' + id + ' h4').innerHTML;
    let description = document.querySelector('.course-item-' + id + ' p').innerHTML;

    console.log(name, description);

    document.querySelector('input[name="name"]').value = name;
    document.querySelector('input[name="description"]').value = description;

    let saveBtn = document.getElementById('create');
    saveBtn.innerHTML = 'Lưu';

    saveBtn.onclick = function () {
        let name = document.querySelector('input[name="name"]').value;
        let description = document.querySelector('input[name="description"]').value;
        let formData = {
            name: name,
            description: description
        };
        handlePutCourse(id, formData, function () {
            // document.querySelector('.course-item-' + id + ' h4').innerHTML = name
            // document.querySelector('.course-item-' + id + ' p').innerHTML = description;
            getCourse(renderCourse);

            document.querySelector('input[name="name"]').value = '';
            document.querySelector('input[name="description"]').value = '';
            saveBtn.innerHTML = 'Create';
        })
    }
}
