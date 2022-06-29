// // DOM attribute

var headingElement = document.querySelector('h1');
// var alli = document.getElementsByTagName("li");
for (var i = 0; i < headingElement.length; i++) {
  headingElement[i].setAttribute("class", "lite");
}
headingElement.title = "heading";
headingElement.id = 'heading';
// headingElement.className = "heading"

headingElement.setAttribute('href', 'heading')
headingElement.getAttribute('id')
headingElement.style.color = "red"
console.log(headingElement)

// // InnerText vs textContent Property
// console.log(headingElement.innerText)
// headingElement.innerText = "New heading"
// console.log(headingElement.textContent)

// //InnerHTML vs OuterHTML Property
// var boxElement = document.querySelector('.box')
// boxElement.innerHTML = '<h2 title= "hello">Hello</h2>';

// console.log(boxElement.innerHTML)
// // console.log(document.querySelector('h2').innerText)

// var boxElement1 = document.querySelector('.box1') 
// boxElement1.outerHTML = '<span>test</span>'
// console.log(boxElement1.innerHTML)

// // Node properties

// console.log(boxElement1)


// DOM CSS

var boxElement_css = document.querySelector('.box3');
// boxElement_css.style.width = '100px'
// boxElement_css.style.height = '200px'
// boxElement_css.style.backgroundColor = 'red'

Object.assign(boxElement_css.style, {
    width: '100px',
    height: '200px',
    backgroundColor: 'red'
})

console.log(boxElement_css.style.backgroundColor)

// ClassList property

// add
// contains
// remove 
// toggle có class thì bỏ, k có thì thêm

console.log(boxElement_css.classList.value)

boxElement_css.classList.add('box5', 'box6')

console.log(boxElement_css.classList.value)
console.log(boxElement_css.classList.contains("box2"))

setTimeout(() => {
    boxElement_css.classList.remove('red');
}, 3000);

setInterval(() => {
    boxElement_css.classList.toggle("green")
}, 1000)

var edit = document.querySelector('p')
edit.classList.replace('sub-title', 'content');  // thay đổi class của thẻ p từ sub-title -> content
console.log(edit)
// console.log(edit.classList.contains('rred'))
