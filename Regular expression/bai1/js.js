// // Regular expression: Biểu thức chính quy
// // 1. 2 cách khai báo với Regex

// const re1 = /Hello/;
// const re2 = new RegExp("Hello");

// // Hello world
// // regex.test(value) -> true || false

// console.log(re1.test("Hello world"));

// // 2. Anchor ^ $
// // ^ string bắt đầu với từ nào đó
// // $ string kết thúc với từ nào đó

// /hi/.test("hi"); // true
// /hi$/.test("Welcome to hi") // true
// /hi$/.test("Welcome to hello") // false

// /^hi/.test("hi Welcome to hi") // true
// /^hi/.test("Welcome to hi") // false

// // 3. ranges []
// // [a-z]: các kí tự từ a -> z in thường
// // [A-Z]: các kí tự từ A -> Z in HOA
// // [0-9]: các số từ 0-9
// // [a-z]: các kí tự từ a -> z in thường
// // [a-z0-9A-Z]: các số từ 0-9 || a-z || A-Z

// // dấu ^ trong dấu [] sẽ trở thành phủ định
 
// /[^a-z]/.test("A") // false

// // 4. meta characters
// // \d: khớp với số nó sẽ tương đương với [0-9]
// /\d/.test("1234"); // true
// // \D: ngược lại với \d tương đương với [^0-9]
// /\D/.test("1234"); // false
// // \w: khớp với các ký tự và dấu gạch dưới và số, nó sẽ tương đương [a-zA-Z0-9]
// /\w/.test("_") // true
// // \W: ngược lại với \w, nó sẽ tương đương [^a-zA-Z0-9]
// /\W/.test("_"); // false
// // \s: khớp với khoảng trắng: space, tab, newline
// /\s/.test(" ") // true
// // \S: không phải khoảng trắng
// /\S/.test(" ") // false
// // \n: khớp với newline (xuống hàng)
// // \t: khớp với tab
// // .: khớp với tất cả TRỪ newline(\n)
// //[^]: khớp với tất cả

// // 5. Quantifiers: {n} {n,m} + ? *
// // string.math(regex) "abc".math(/\w/) -> []
// {n}: số lượng nhất định
// {n,m}: số lượng trong khoảng n - m
// +: Lấy ra 1 hoặc nhiều ký tự thoả điều kiện
// ?: kiểm tra xem ký tự có thể có hoặc không trước nó
const str1 = "Welcome welcoe to 20221224"
console.log(str1.match(/\d{4}/)[0])
console.log(str1.match(/\d{4,7}/)[0])
console.log(str1.match(/\d+/)[0])

console.log(str1.match(/Welcom?e/gi))

// flag
// g: global (lấy ra nhiều giá trị)
// i: case insensitive (không phân biệt HOA - thường)
// m: multiple line

// *: không có hoặc là nhiều 
const str3 = "12344321"
console.log(str3.match(/\d*/g))

// 6. Group ()
/(\d{3})(\w+)/ .test("123") // false

// 7. Escaping \ / [ ] ( ) { } ? + * | . ^ $
// 8. Boudaries \d \B 


