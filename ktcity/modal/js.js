
// const modalJS = `<div id="modal">
// <div class="modal-content">
//     <span class="modal-close">&times;</span>
//     <div class="modal-desc">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima id labore. Rerum quam omnis nulla rem ea cupiditate, voluptas, tempora quos quod optio reprehenderit! Id error animi soluta molestias!
//     </div>
//     <div class="modal-action">
//         <button class="modal-submit">Comfirm</button>
//         <button class="modal-cancel">Cancel</button>

//     </div>
// </div>
// </div>`

// const body = document.body;
// body.insertAdjacentHTML("afterbegin", modalJS);



const toast = document.getElementById('modal');

const modalHTML = document.createElement('div');
modalHTML.classList.add('modal-content')
if (modalHTML) {
    modalHTML.innerHTML = `
            <span class="modal-close">&times;</span>
            <div class="modal-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima id labore. Rerum quam omnis nulla rem ea cupiditate, voluptas, tempora quos quod optio reprehenderit! Id error animi soluta molestias!
            </div>
            <div class="modal-action">
                <button class="modal-submit">Comfirm</button>
                <button class="modal-cancel">Cancel</button>
            </div>`
        toast.appendChild(modalHTML);
}

if (toast) {
    setTimeout(() => {
        toast.classList.add('is-show');
    }, 3000)
}