var array1 = ['Javascript', 'PHP', 'Ruby'];
var array2 = ['ReactJS', 'Dart'];

var array3 = [...array1, ...array2];
console.log(array3)
 
////////////////////////////////

var obj1 = {
    name: 'ReactJS'
}
var obj2 = {
    price: 1000
}
var obj3 = {
    ...obj1, ...obj2
}

console.log(obj3)

////////////////////////////////////////////////////////////////

// var array = ['PHP', 'ReactJS', 'Dart'];

// function logger(a, ...rest) {
//     for (var i = 0; i< rest.length; i++) {
//         console.log(rest[i]);
//     }
// }

// logger(...array);

var array = ["JavaScript", "PHP", "Ruby", "RectJS"];

function logger(a, ...array) { // Đây là dùng toán tử rest khi là tham số
    for(var i = 0; i < array.length; ++i) {
        console.log(array[i]);
    }
}

logger(...array); // Đây là dùng toán tử Spread khi truyền vào đối số

// Mình đã cố tình đặt trung tên đối số và tham số cho bạn thấy

// Tagged template literals ==============//



function highLight([fisrt, ...strings], ...values) {
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
        [fisrt]
    )
    .join('')
}

var brand = 'F8';
var course = 'Javascript';

const html = highLight`Học lập trình ${course} tại ${brand} !`
console.log(html)
// console.group("Story 1");
// console.log("Story statr")
// console.log("Story content")
// console.log("Story end")
// console.groupEnd();