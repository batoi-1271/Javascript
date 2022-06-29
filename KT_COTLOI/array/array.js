/*
    Mang trong JS - Array

1.  Tạo mảng
    - Cách tạo
    - SD cách nào? Tại sao?
    - Kiểm tra data type
2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
*/

var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'C#',
    null,
    undefined, 
    Object
];
console.log(languages)

console.log(Array.isArray(languages)) // Ktra array

console.log(languages.length)

console.log(languages[3])


/*
Lam viec voi Array

    1. To string
    2. Join
    3. Pop
    4. Push
    5, Shift
    6. Unshift
    7. Splicing
    8. Concat
    9. Slicing
*/

var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'C#'
];

var languages2 = [
    'Dart',
    'Ruby'
]

console.log(languages.toString())
console.log(languages.join(", "))

console.log(languages.pop()) // Xoá element cuối mảng và trả về ptu đã xoá
console.log(languages)

console.log(languages.push('Dart', 'Java')) // Thêm ptu vào cuối mảng và trả về số ptu trong mảng
console.log(languages)

console.log(languages.shift()) // Nguoc voi POP
console.log(languages)

console.log(languages.unshift('ABC')) // Them ptu vao dau mang
console.log(languages)

languages.splice(1, 1, 'XXX') // Xoa va chen
console.log(languages)

console.log(languages.concat(languages2)) // Noi Array

console.log(languages.slice(1, 3)) // Cut 1 vai element cua mang