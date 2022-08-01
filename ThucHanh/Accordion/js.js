const accHeaders = document.querySelectorAll('.accordion-header');
const contentT = document.querySelectorAll('.accordion-content');

function Accordion() {
    [...accHeaders].forEach((accHeader) => {

        accHeader.onclick = (e) => {

            const content = e.target.nextElementSibling;
            const icon = e.target.querySelector('.icon');

            content.style.height = `${content.scrollHeight}px`;
            content.classList.toggle('active');

            if (!content.classList.contains('active')) {
                content.style.height = "0px"
            }

            if (icon) {
                icon.classList.toggle("fa-angle-down");
                icon.classList.toggle("fa-angle-up");
            }


        }
    })
}
Accordion()