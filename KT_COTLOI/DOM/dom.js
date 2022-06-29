// HTML DOM - Document Object Model

// Có 3 thành phần

/*
    1. Element
    2. Attribute
    3. Text
 */

// Get element methods: ID, class, tag name, CSS selector, HTMOL collection

// var headingNode = document.getElementById("heading");
// console.log(headingNode)

// var titleNodes = document.getElementsByClassName("title")
// console.log(titleNodes)

// var tagName = document.getElementsByTagName('p')
// console.log(tagName)

// var titleQuery = document.querySelectorAll(".title")
// console.log(titleQuery)

// var headingNode1 = document.querySelector(".box .heading-2")
// console.log(headingNode1)

// console.log(document.forms.formTest)
// console.log(document.anchors)

var boxNode = document.querySelector('.box-1');

// CV1: SD toi 'boxNode'
// CV2: SD toi cac li Elements la con cua '.box-1'
console.log(boxNode);
console.log(boxNode.getElementsByTagName('li'));


// Attribute node & Text node

