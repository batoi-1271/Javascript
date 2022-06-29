var date = 2;
if (date === 2) {
    console.log("Hom nay la thu 2")
} else if (date === 3) {
    console.log("Hom nay la thu 3")
} else if (date === 4) {
    console.log("Hom nay la thu 4")
}

// SWITCH - CASE

switch(date) {
    case 1:
        console.log("Hello");
        break;
    case 2:
        console.log("Hihi");
        break;
    case 3 :
        console.log("Haha");
    default:
        console.log("Vu long nhap so");
        break;
} 

// Toan tu 3 ngoi - Ternary operator

var course = {
    name: 'JS',
    coin: 250
}

// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`)
// } else {
//     console.log("Free")
// }

var result = course.coin > 0 ? `${course.coin} Coins` : "Free";
console.log(result)