/** 
 <div class="modal">
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <span class="modal-close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
        <div class="modal-main">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          maiores eligendi deleniti ipsa quae nam sunt quasi nisi, dignissimos
          eaque aliquam minus. Eius perferendis, voluptates totam iure minus
          consequuntur est?
        </div>
      </div>
    </div>
*/

const button = document.querySelector('.button');
const templateModal = `<div class="modal">
    <div class="modal-overlay"></div>
    <div class="modal-content">
    <div class="modal-close">
        <i class="fa fa-times close"></i>
    </div>
    <div class="modal-main">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        maiores eligendi deleniti ipsa quae nam sunt quasi nisi, dignissimos
        eaque aliquam minus. Eius perferendis, voluptates totam iure minus
        consequuntur est?
    </div>
    </div>
</div>`;

if(button) {
    button.addEventListener('click', () => {
        document.body.insertAdjacentHTML("beforeend", templateModal)
    })
}
document.body.addEventListener('click', function(event) {
    if (event.target.matches(".modal-close")) {

        const modal = event.target.parentNode.parentNode; // modal
        modal.parentNode.removeChild(modal);

    } else if (event.target.matches(".modal-overlay")) {
        const modal = event.target.parentNode; // modal
        modal.parentNode.removeChild(modal);
        
    }
})
// const modalClose = document.querySelector('.modal-close');
// if (modalClose) {
//     modalClose.addEventListener('click', (e) => {
//         document.body.removeChild(modalClose);
//     })
// }


const haha = document.getElementsByClassName('haha');
const hahaID = document.getElementById('haha');

haha.map((haha) => console.log(haha))
console.log(typeof hahaID)
