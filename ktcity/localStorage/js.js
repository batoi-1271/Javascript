// 1. localStorage.setItem('key', 'value');
localStorage.setItem('name', 'Ba Toi');

// 2. localStorage.getItem('key');
console.log(localStorage.getItem('name'))

// 3. localStorage.removeItem('key');

// 4. localStorage.clear();

// 5

let arr = [1, 2, 3, 4];

localStorage.setItem('list', JSON.stringify(arr));

const newArr = JSON.parse(localStorage.getItem('list'));

console.log(newArr)