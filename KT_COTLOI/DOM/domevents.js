// DOM events
// 1. Attribute events
// 2. Assign event using the element node

const h1Element = document.querySelectorAll('h1');

for(var i = 0; i<h1Element.length; ++i) {
    h1Element[i].onclick = function(e) {
        console.log(e.target);
    }
}


// 1. Input / select

var inputValue;

const inputElement = document.querySelector('input[type="text"');

inputElement.oninput = function(e) {
    inputValue = e.target.value;
    console.log(inputValue);
}

// CHECKBOX
var checkValue;

const checkElement = document.querySelector('input[type="checkbox"');

checkElement.onchange = function(e) {
    checkValue = e.target.checked;
    console.log(checkValue);
}

// SELECT
var selectValue;

const selectElement = document.querySelector('select');

selectElement.onchange = function(e) {
    selectValue = e.target.value;
    console.log(selectValue);
}

// 2. Key up / down

var upValue;

const upElement = document.querySelector('input[type="text"');

upElement.onkeyup = function(e) {
    console.log(e.which);
    switch(e.which) {
        case 27:
            console.log("Exit");
            break;
    }
}
document.onkeydown = function(e) {
    switch(e.which) {
        case 27:
            console.log('EXIT');
            break;
        case 13:
            console.log('SEND')
            break;
    }
}

// 1. preventDefault
var aElements = document.links;
console.log(aElements);

for (var i = 0; i<aElements.length; ++i) {
    aElements[i].onclick = function(e) {
        // console.log(e.target.href);
        if(!e.target.href.startsWith('https://f8.edu.vn')) {
            e.preventDefault();
        }
    }
}

//// UL
ulElement = document.querySelector('ul');

ulElement.onmousedown = function(e) {
    e.preventDefault();
}

ulElement.onclick = 
function(e){
    console.log(e.target);
}

// 2. stopPropagation

// document.querySelector('section').onclick = function(e) {
//     console.log('SECTION');
// }

// document.querySelector('button').onclick = function(e) {
//     e.stopPropagation();
//     console.log('BUTTON');
// }

const button = document.querySelector('.button');
const span = document.querySelector('.button span');

function handleClick() {
    console.log("Click Button")
}

button.addEventListener('click', handleClick);

span.addEventListener('click', function(e){
    e.stopPropagation();
    console.log("CLick span");
});
document.body.addEventListener('click', function() {
    console.log("BODY clicked");
});