// var number = 10

// var a = ++number * 3 - number-- * 2
// var b = number++ * 2 - --number * 3

// console.log(a + b) // ???


/**
* Toán tử chuỗi - String operator
*/

var fisrtName = 'Ba';
// var lastName = 'Toi';
fisrtName += " Toi";

// console.log(fisrtName + " " +lastName)
console.log(fisrtName)

var result = '3' + 2 + 1

console.log(result) // ???

/**
* Toán tử so sánh
*/

function run(number) {
    let result
    if(number % 15 == 0)
        result = 'f8';
    else if(number % 5 == 0)
        result = 8;
    else 
        result = 'f';        
    return result
}

function run(number) {
    let result
    if(number % 3 == 0)
        result = 'f';
    else if(number % 5 == 0)
        result = 8;
    else if (number % 15 == 0)
        result = 'f8'       
    return result
}
