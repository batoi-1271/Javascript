const endPoint = "http://localhost:3000/courses"
const courseList = document.querySelector('.course-list')
const formPost = document.querySelector('.form-post');
const formSubmit = document.querySelector('.form-submit');
const filter = document.querySelector('.filter');

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, 
        args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

filter.addEventListener('keydown', debounce(function (event) {
    let path = endPoint;
    if (event.target.value !== '') {
        path = `${endPoint}?title_like=${event.target.value}`;
    }
    getCourses(path);
}, 500))

let updateId = null;
async function addNewCourse({ image, title, author, rating, price, bestSeller, buyAmount }) {
    await fetch(endPoint, {
        method: 'POST',
        body: JSON.stringify({
            image, title, author, rating, price, bestSeller, buyAmount
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
    })
}

async function updateCourse({ id, image, title, author, rating, price, bestSeller, buyAmount }) {
    await fetch(`${endPoint}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            image, title, author, rating, price, bestSeller, buyAmount
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
    })
}


function deleteCourse(id) {
    fetch(`http://localhost:3000/courses/${id}`, {
        method: 'DELETE',
    })
}

async function getSingleCourse(id) {
    const response = await fetch(`${endPoint}/${id}`);
    const data = await response.json();
    return data;
}

function renderItem(item) {
    const template = `<div class="course-item" >
    <div class="course-image">
      <img src="${item.image}" alt="" />
      <button class="course-edit" data-id="${item.id}"><i class="fa fa-pencil" style = "pointer-events: none"></i></button>
      <button class="course-remove" data-id="${item.id}">X</button>
    </div>
    <div class="course-content">
      <h3 class="course-title">
        ${item.title}
      </h3>
      <div class="course-author">${item.author}</div>
      <div class="course-meta">
        <div class="course-rating">${item.rating}</div>
        <div class="course-enroll">${item.buyAmount}</div>
        <div class="course-price">${item.price}$</div>
      </div>
      ${item.bestSeller ? '<div class="course-best-seller">Best seller</div>' : ''}
      
    </div>
    </div>`

    courseList.insertAdjacentHTML("afterbegin", template);
}

async function getCourses(path = endPoint) {
    const response = await fetch(path);
    const data = await response.json();
    courseList.innerHTML = "";
    if (data.length > 0) {
        data.forEach((item) => {
            renderItem(item);
        })
    }
}

getCourses()

formPost.addEventListener('submit', async e => {
    e.preventDefault();
    const course = {
        image: e.target.elements['image'].value,
        title: e.target.elements['title'].value,
        author: e.target.elements['author'].value,
        rating: +e.target.elements['rating'].value,
        price: +e.target.elements['price'].value,
        bestSeller: e.target.elements['bestSeller'].checked,
        buyAmount: +e.target.elements['buyAmount'].value,
    };

    updateId ? await updateCourse({id: updateId, ...course}) : await addNewCourse(course);
    e.target.reset();
    await getCourses();
    updateId = null;

    formSubmit.textContent = "Add Course";
})

courseList.addEventListener('click', async (e) => {
    if (e.target.matches('.course-remove')) {
        const idPost = +e.target.dataset.id;
        await deleteCourse(idPost);
        await getCourses();
    } else if (e.target.matches('.course-edit')) {
        const idPost = +e.target.dataset.id;
        const data = await getSingleCourse(idPost);
        formPost.elements['image'].value = data.image;
        formPost.elements['title'].value = data.title;
        formPost.elements['author'].value = data.author;
        formPost.elements['rating'].value = data.rating;
        formPost.elements['price'].value = data.price;
        formPost.elements['buyAmount'].value = data.buyAmount;
        formPost.elements['bestSeller'].checked = data.bestSeller;

        formSubmit.textContent = "Update Course"

        updateId = idPost;
    }
})
