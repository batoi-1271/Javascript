const noti = document.createElement('div');
noti.classList.add('noti');

function createNotification(title = "Welcome to notification") {
    const contentNoti = `<img src="https://source.unsplash.com/random" alt="" class="noti-img">
    <div class="noti-content">
        <h3 class="noti-title">${title}</h3>
        <p class="noti-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quo at 
        </p>
    </div>`
    if (noti) {
        noti.style.animation = `noTi linear 4s 1 forwards`;
        noti.innerHTML = contentNoti;
        document.body.appendChild(noti);
    }
}

const randomData = [
    "Welcome to my profile",
    "Welcome to this tutorial",
    "Today is a good day",
    "My name is ToiBa",
    "I'm frontend developer"
]

let lastTitle;

const timer = setInterval(() => {
    const item = document.querySelector('noti');
    if (item) {
        item.parentNode.removeChild(item);
    }
    const title = randomData[Math.floor(Math.random() * randomData.length)];
    if(lastTitle !== title) {
        createNotification(title);
    }
    lastTitle = title;
}, 4000)


function changeIcon() {
    const iconNew = document.createElement('i')
    iconNew.className = 'fa-solid fa-xmark';

    const oldIcon = document.querySelector('.icon');

    oldIcon.onclick = ()=> {
        document.body.replaceChild(iconNew, oldIcon)
    }
}

changeIcon()