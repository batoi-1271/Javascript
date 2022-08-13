window.addEventListener('load', function(e) {

    function renderAlert() {
        const template = `<div class="sweet-alert">
        <i class="fa fa-check sweet-icon"></i>
        <p class="sweet-text">Congratulations on learning JS</p>
        </div>`;

        document.body.insertAdjacentHTML('afterbegin', template);
    }
    const button = document.querySelector('.button');
    button.onclick = function() {
        renderAlert();

        const sweetItem = document.querySelector('.sweet-alert');
        if (sweetItem) {
            setTimeout(() => {
                sweetItem.parentNode.removeChild(sweetItem);
            }, 2000)
        }
    };   
})