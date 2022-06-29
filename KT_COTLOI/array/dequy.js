// 1. Xác định điểm dừng
// 2. Logic handle -> Tạo ra điểm dừng


var array = ['a', 'b', 'c', 'a', 'b', 'c']

console.log(new Set(array))
console.log([...(new Set(array))])

function coutDown(num) {
    if (num > 0) {
        console.log(num);
        return coutDown(num - 1);
    }
    return num;
}

coutDown(3);


/////

function loop(start, end, cb) {
    if (start <= end) {
        cb(start)
        return loop(start + 1, end, cb);
    }
}


var array = ['Javasript', 'PHP', 'Ruby']

loop(0, array.length - 1, function(index) {
    console.log(array[index])
    // console.log('index: ', index)
});


function giaiThua(num) {
    if (num > 0) {
        return num * giaiThua(num - 1);
    }
    return 1;
}

console.log(giaiThua(6))