/*
Một số hàm built-in
    1. Alert
    2. Console
    3. Confirm
    4. Prompt
    5. Set timeout
    6. Set interval
*/

// 1. Alert 
// 2. Console
var fullName = 'NBT';
console.log(fullName)
console.warn(fullName)

// 3. Confirm
 confirm('Xac nhan ban du tuoi!');

// 4. Prompt
prompt('Nhap tuoi cua ban: ')

// 5. Set timeout
setTimeout(function() {
    alert('Thong bao')
}, 1000)

// 6. Set interval
// setInterval (function() {
//     console.log("Day la log")
    
// }, 1000)
