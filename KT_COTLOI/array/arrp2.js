/*
    Array methods:
        forEach() // Duyệt qua từng phần tử của mảng
        every() // Thoa man 1 dieu kien nao do
        some() // Chi can 1 cai dung thi tra ve true
        find()
        filter()
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

courses.forEach(function(course, index) {
    console.log(index, course)
});

var isFree = courses.every(function(course, index) {
    return course.coin === 0; 
});
console.log(isFree)

var isFree = courses.some(function(course, index) {
    return course.coin === 0; 
});
console.log(isFree)

var course = courses.find(function(course, index) {
    return course.name === 'Ruby';  
});
console.log(course)

var listCourse = courses.filter(function(course, index) {
    return course.name === 'Ruby';  
});
console.log(listCourse)


//Bài 1
function getRequestBodyFromValues(formValues) {
    var obj={};
    formValues.forEach(function(c){
        obj[c.field] = c.value;
    })
    return obj;
}
//Bài 2
function checkPositiveNumbers(numbers) {
    var positive = numbers.every(function(num) {
        return num>0;
    })
    return positive;
}
//Bài 3
function hasFreeCourses(courses) {
    var vnd0 = courses.some(function(courses){
       return courses.vnd === 0;
   })
   return vnd0;
}
//Bài 4
function findAMonsterByAttack(monsters) {
    var attEqual150 = monsters.find(function(mst){
        if(mst.attack===150) return mst;
    })
    if(attEqual150)
        return attEqual150;
    else
        return null;
}
//Bài 5
function findStringsInArrayByKeyword(keyword, strings) {
    var res=[];
    for(var val of strings){
        if(val.search(keyword)!=-1)
            res.push(val);
    }
    return res;
}
//Bài 6
var res=[];

function findEqualValues(array1, array2) {
    for(var vala of array1)
        for(var valb of array2)
            if(vala === valb)
                res.push(vala);
    return res;
}
