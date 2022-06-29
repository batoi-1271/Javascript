// reduce()
// Trả về 1 giá trị duy nhất sau khi tính toán


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

var totalCoin = 0;

for (const course of courses) {
    totalCoin += course.coin;
}

// console.log(totalCoin)

// var i = 0;
// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//     i++
//     var total = accumulator + currentValue.coin;
//     console.table({
//         "Luot chay: ": i,
//         "Bien tich tru: ": accumulator,
//         "Gia kho hoc: ": currentValue.coin,
//         "Tich tru duoc: ": total
//     });
//     // return accumulator + currentValue.coin;
//     return total;
// }
// var totalCoins = courses.reduce(coinHandler, 0);


// console.log(totalCoins);



// var totalCoins = courses.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.coin;
// }, 0);


// console.log(totalCoins);


var totalCoin = courses.reduce(function(total, course) {
    return total + course.coin;
}, 0); //intial value
console.log(totalCoin)

var number = [100, 200, 220, 200, 480];

var totalNum = number.reduce(function(total, number){
    return total+number;
}, 0);
console.log(totalNum);


// FLat - lam phang mang tu Depth array - "Mang sau"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);

console.log(flatArray)

var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            }, 
            {
                id: 2,
                title: "Javascript"
            }
        ]
    }, 
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP"
            }, 
            {
                id: 2,
                title: "Node js"
            }
        ]
    }
]

var newCoures = topics.reduce(function (course, topic) {
    return course.concat(topic.courses);
}, [])

console.log(newCoures)

var html = newCoures.map(function(course) {
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `;
});

console.log(html.join(''))