// FOR LOOP

var myArray = [
    'JS',
    'PHP',
    'JAVA',
    'DART'
]

var arrayLength = myArray.length;
for (let i = 0; i < arrayLength; i++) {
    console.log(myArray[i])
}

// FOR/IN LOOP

var myInfo = {
    name: "Ba Toi",
    age: 20,
    address: "Bac Giang"
}

var myName = 'BaToi';
for (var key in myInfo) {
    console.log(myInfo[key])
}

for (const key in myName) {
    if (Object.hasOwnProperty.call(myName, key)) {
        const element = myName[key];
        console.log(element)
    }
}

// FOR/OF LOOP

var languages = [
    'JS',
    'Php',
    'Java',
    'C#'
]

for (const value of languages) {
    console.log(value)
}

for (const iterator of myName) {
    console.log(iterator)
}

for (const inf of Object.values(myInfo)) {
    console.log(inf);
}

// WHILE LOOP

var i = 0;

// while (i <= 1000) {
//     console.log("hhi");
//     i++;
// }

while (i < languages.length) {
    console.log(myArray[i]);
    i++;
}

// DO WHILE

var i = 0;
var isSuccess = false;

do {
    i++;
    console.log('Nap the lan: ' + i);

    if (false) {
        isSuccess = true;
    }

} while (!isSuccess && i <= 3)

// BREAK - CONTINUTE

for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);

}

// Vòng lặp lồng nhau - NESTED LOOP

let myArray_1 = [
    [1, 2],
    [3, 4],
    [5, 6]
]
for (let i = 0; i < myArray_1.length; i++) {
    for (let j = 0; j < myArray_1[i].length; j++) {
        console.log(myArray_1[i][j])

    }

}

for (var i = 10; i > 0; i--) {
    console.log(i)
}

for (let i = 0; i <= 20; i += 5) {
    console.log(i)    
}

for (var i = 20; i > 0; i -= 5 ){
    console.log(i)
}