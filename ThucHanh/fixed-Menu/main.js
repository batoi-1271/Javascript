const header = document.querySelector('.header');


window.addEventListener('scroll', function(e) {
    const scrollY = window.pageYOffset;
    const headerHeight = header && header.offsetHeight;

    console.log(headerHeight)
    if (scrollY >= headerHeight) {
        header && header.classList.add('is-fixed');
        document.body.style.paddingTop = `${headerHeight}px`
    } else {
        header.classList.remove('is-fixed');
        document.body.style.paddingTop = 0


    }
});


