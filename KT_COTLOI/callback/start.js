
// Callback - phần 2

// 1. Là hàm
// 2. Truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)

// Array.prototype.map2 = function(callBack) {
//     var output = [];
//     var arrayLength = this.length;

//     for (var i = 0; i < arrayLength; ++i) {
//         var result = callBack(this[i], i)
//         output.push(result)
//     }
//     return output;
// }

// var courses = ["Javascript", "PHP", "Ruby"]


// var htmls = courses.map2(function(course) {
//     return `<h2>${course}</h2>`;
// });


// var htmls = courses.map2(function(course) {
//     return `<h2>${course}</h2>`;
// })


// console.log(htmls.join(" "))



// forEach, find, filter, some, every, reduce
// courses1.length = 20

// for (var i in courses1) {
//     console.log(courses1[i])
    
// }

var courses1 = ["Javascript", "PHP", "Ruby"]

// forEach
Array.prototype.forEach2 = function(callBack) {
    for (var index in this) {
        if ( this.hasOwnProperty(index))
        callBack(this[index], index, this)
    }
}

console.log(courses1)

courses1.forEach2(function (course, index, array) {
    console.log(course, index, array)
})

// Filter
Array.prototype.filter2 = function(callBack) {
    var outPut = [];

    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callBack(this[index], index, this)
            if (result) {
                outPut.push(this[index])
            }
        }
    }
    return outPut;
}
var courses2 = [
    {
        name: 'Javascript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name: 'Ruby',
        coin: 980
    }
]

var filterCoures = courses2.filter2(function(course, index, array) {
    return course.coin > 700
})

console.log(filterCoures)

//Some: True / False

Array.prototype.some2 = function (callBack) {
    var output = false;
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            if(callBack(this[index], index, this)) {
                output = true;
                break;
            };
        }
    }
    return output;
}

var courseSome = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false,
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false,
    }
];

var isResult = courseSome.some2(function(course, index, array) {
    return course.isFinish;
});

console.log(isResult)

// Every: true/ false

Array.prototype.every2 = function(callBack) {
    var resultE = true;
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callBack(this[index], index, this) 
            if (!result) {
                resultE = false;
                break;
            }
            
        }
    }
    return resultE;
}

var resultEvery = courseSome.every2(function (course, index, array) {
    return course.coin > 500;
})

console.log(resultEvery)