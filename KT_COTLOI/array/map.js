/*
    Array methods:
        map()
        reduce()
*/ 

var courses = [
    {
        id: 1,
        name: 'JS',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    }, 
    {
        id: 6,
        name: 'Ruby',
        coin: 200
    }
]


var newCourses = courses.map((course, index) => {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        price: "hihih"
    }
});

console.log(newCourses)

// //cách 2
// //câu 1
// function convertToBoolean(inputs) {
//     var result = inputs.map(function(input){
//         return Boolean(input);
//     });
//         return result;
// }

// //câu 2
// function run(inputs) {
//     return inputs.map(function(input){
//         return input*3;
//     });
// }

// //câu 3
// function convertToNumber(inputs) {
//     var arrayNumber = inputs.map(function(input){
//         return Number(input);
//     });
//     return arrayNumber;
// }

// //câu 4
// function convertToString(numbers) {
//     return numbers.map(function(number){
//         return number.toString();
//     })
// }

// //câu 5
// function getHTMLfromArray(strings){
//     var result = strings.map(function(string){
//         return '<li>'+ string + '</li>'
//     });
//     return result;
// }

// //câu 6
// function getHTMLfromArray(datas){
//     return datas.map(function(data){
//         return `<li>${data.name}</li>`
//     });
// }
