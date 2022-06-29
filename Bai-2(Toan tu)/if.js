// Cau lenh dieu kien
// Phep so sanh

// Cac gia tri convert sang Boolean la False
/*

    0
    ''
    null
    undefined
    NaN
    false

*/


// var a = 1;
// var b = 2;


var result = null && 'B' && 'C' && 'D';

console.log(result)

if (result) {
    console.log('DIEU KIEN DUNG');
} else {
    console.log('DIEU KIEN SAI');
}

var result1 = 'A' || 'B' || undefined || 'D';

console.log("result: ", result1)

if (result1) {
    console.log('DIEU KIEN DUNG');
} else {
    console.log('DIEU KIEN SAI');
}

const a = 1 && NaN || 'Hi' && null && 100
const b = 1 || NaN && 'Hi' || null && 100

console.log(a, b)
if (a) {
    console.log('DIEU KIEN DUNG');
} else {
    console.log('DIEU KIEN SAI');
}