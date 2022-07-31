console.log("----------ARRAY MAP----------")
// Duyệt qua từng phần tử trong mảng và trả ra một mảng mới không thay đổi mảng ban đầu
const listNumber = [1, 2, 3, 4, 5,];
const result = listNumber.map(item => item * 2);
console.log(result)


console.log("----------ARRAY FOREACH----------")
// Duyệt qua từng phần tử trong mảng
const result1 = listNumber.forEach(item => (item * 3))
console.log(result1)

console.log("----------ARRAY REDUCE----------")
// Gom các phần tử trong mảng về một giá trị
const result2 = listNumber.reduce((a, b) => {
    return a + b;
}, 0)
console.log(result2)