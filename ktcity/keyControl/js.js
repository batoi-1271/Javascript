// Thứ tự ưu tiên: Keydown -> Keypress -> keyUp 

// KeyDown event
// Hoạt động khi nhấn bàn phím xuống
const input = document.querySelector('.input');

input.onkeydown = (e) => {
    // e.key: kí tự nhập vào (key)
    // console.log(e.key)
    // console.log(e.keyCode)

    // if(e.key === "Enter") {
    //     alert('Enter key: Enter');
    // } else {
    //     alert('Enter key: ' + e.key);
    // }
}

// Keyup event
// Hoạt động khi thả phím ra

input.onkeyup = (e) => {
    // e.key: kí tự nhập vào (key)
    // console.log(e.key)
    // console.log(e.keyCode)

}

// KeyPress event
// Xảy ra khi nhấn phím

/**  Keypress – fires when you press a character keyboard 
like a,b, or c, not the left arrow key, home, or end 
keyboard, … The keypress also fires repeatedly while 
you hold down the key on the keyboard.*/

input.onkeypress = (e) => {
    // e.key: kí tự nhập vào (key)
    // console.log(e.key)
    // console.log(e.keyCode)
}

// Change event

input.onchange = (e) => {
    // console.log("onchange: " + e.target.value)
}

// Focused event
input.onfocus = (e) => {
    // console.log("onfocus")
}

// Blur event
input.onblur = (e) => {
    // console.log("onblur")
}


// submit form 

// const form = document.querySelector('.form');
// form.onsubmit = function formSubmit(e) {
//     e.preventDefault();
//     const username = this.elements['username'].value;

//     const hobby = this.querySelectorAll('input[name="hobby"]:checked');
//     let hobbyValues = [];
//     [...hobby].forEach((item) => hobbyValues.push(item.value));

//     const gender = this.elements['gender'].value;

//     console.log("User name: " + username)
//     console.log("Hobby: " + hobbyValues)
//     console.log("Gnder: " + gender)
// }


// Validation
// Regular expression for validation
const form = document.querySelector('.form');
form.onsubmit = function formSubmit(e) {
    e.preventDefault();
    const username = this.elements['username'].value;
    const password = this.elements['password'].value;
    if (!username) {
        alert("Please enter a username")
        return;
    }

    if (!password) {
        alert("Please enter a password")
        return;
    }

}
