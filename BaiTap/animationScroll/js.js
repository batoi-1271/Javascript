document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.container img');

    window.addEventListener('scroll', function() {

        const windowScroll = this.window.pageYOffset;

        [...images].forEach((image) => {
            const itemOffsetTop = image.offsetTop - (image.offsetHeight / 1.5);
            if (windowScroll > itemOffsetTop) {
                image.classList.add('active')
            }
        });
    })

})