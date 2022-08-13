const email = document.querySelector('input');

email.onkeydown = function(event) {
    const value = event.target.value;
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(regexEmail.test(value.trim())) {
        event.target.classList.add("valid")
        event.target.classList.remove("invalid")

    } else {
        event.target.classList.remove("valid")
        event.target.classList.add("invalid")
    }

    if(!value) {
        event.target.classList.remove("invalid")
    }
}