const password = document.querySelector('.input');

password.oninput = (e) => {
    const value = e.target.value;

    const checkLength = e.target.parentNode.querySelector('.check-length')
    const checkItems = e.target.parentNode.querySelectorAll('.check-item')
    const checkUpper = e.target.parentNode.querySelector('.check-upper')
    const checkNumber = e.target.parentNode.querySelector('.check-number')
    const checkSpecial = e.target.parentNode.querySelector('.check-special')


    if (!value) {
        [...checkItems].forEach(item => {
            item.classList.remove('active')
            item.classList.remove('unactive')
        });
        return;
    };

    // Check 8 ki tu
    if (value.length < 8){
        checkLength.classList.add('unactive');
        checkLength.classList.remove('active');
    } else {
        checkLength.classList.add('active');
        checkLength.classList.remove('unactive');
    }
    
    // Check 1 ky tu viet HOA
    // if (!/[A-Z]/.test(value)) {
    //     checkUpper.classList.add('unactive');
    //     checkUpper.classList.remove('active');
    // } else {
    //     checkUpper.classList.add('active');
    //     checkUpper.classList.remove('unactive');
    // }
    addClassCheck(checkUpper, value, /[A-Z]/)

    // Check 1 SO - NUMBER
    // if (!/[0-9]/.test(value)) {
    //     checkNumber.classList.add('unactive');
    //     checkNumber.classList.remove('active');
    // } else {
    //     checkNumber.classList.add('active');
    //     checkNumber.classList.remove('unactive');
    // }
    addClassCheck(checkNumber, value, /[0-9]/)


    // Check 1 ky tu Dac biet
    // var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    // if (!format.test(value)) {
    //     checkSpecial.classList.add('unactive');
    //     checkSpecial.classList.remove('active');
    // } else {
    //     checkSpecial.classList.add('active');
    //     checkSpecial.classList.remove('unactive');
    // }

    var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    addClassCheck(checkSpecial, value, format)
}

function addClassCheck (selector, input, regex) {
    if (!regex.test(input)) {
        selector.classList.add('unactive');
        selector.classList.remove('active');
    } else {
        selector.classList.add('active');
        selector.classList.remove('unactive');
    }
}

