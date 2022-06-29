// 1. Event listener

// 1. Xử lý nhiều việc khi 1 even xảy ra
// 2. Lắng nghe / Huỷ bỏ lắng nghe

const btn = document.getElementById('btn');
console.log(btn);

function viec1() {
    console.log('Viec 1');
}
function viec2() {
    console.log('Viec 2');
}
btn.addEventListener('click', viec1);
setTimeout(function() {
    btn.removeEventListener('click', viec1);
}, 3000)


// 2. JSON

// 1. Là một định dạng dữ liệu (chuỗi)
// 2. JavacSript Object Notation
// 2. JSON: number, boolean, null, array, object, string

// Mã hoá / Giải mã
// Encode / Decode
// Stringify: Từ JS types -> JSON
// Parse: từ JSON -> JS types

var json = '1';
var json1 = 'null';
var json2 = '["JS", "Python"]'; 
var json3 = '{"name": "BaToi", "age": 21}';

const object = JSON.parse(json3);

////////

var myArray = [
    'JS',
    'PHP',
    'JAVA',
    'DART'
]

var myInfo = {
    name: "Ba Toi",
    age: 20,
    address: "Bac Giang"
}

console.log(JSON.stringify(myInfo));

// 3. Promise
//  - Sync
//  - Async


// 4. Fetch
// 5. DOM location
// 6. Local storage
// 7. Session storage
// 8. Coding convention
// 9. Best Practices 
// 10. Mistakes
// 11. Performance


// const cookRice = () => {
//     setTimeout(() => {
//       console.log('Getting rice... 1s');
  
//       setTimeout(() => {
//         console.log('Washing rice... 2s');
  
//         setTimeout(() => {
//           console.log('Adding water... 1s');
  
//           setTimeout(() => {
//             console.log('Putting in rice cooker... 1s');
  
//             setTimeout(() => {
//               console.log('Cooking rice... 10s');
//             }, 10000);
//           }, 1000);
//         }, 1000);
//       }, 2000);
//     }, 1000);
//   };
  
//   cookRice();


// 1. Pendding 
// 2. Fulfilled
// 3. Reject

var promise = new Promise(
    // Excutor
    function(resolve, reject) {
        // Logic
        // Thanh cong: resolve()
        // That bai: reject()
 
        resolve()
    }
)

// promise
//     .then(function() {
//         console.log(1);
//     })
//     .then(function() {
//         console.log(2);
//     })
//     .then(function() {
//         console.log(3);
//     })

//     .catch(function(reject) {
//         console.log(reject)
//     })

//     .finally(function() {
//         console.log("Done!")
//     })


// function sleep(ms) {
//     return new Promise((resolve)=> {
//         setTimeout(resolve, ms);
//     });
// }

// sleep(1000)
//     .then(() => {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(() => {
//         console.log(2);
//         return new Promise((resolve, reject) => {
//             reject("Co loi!");
//         })
//     })
//     .then(() => {
//         console.log(3);
//         return sleep(1000);
//     })
//     .then(() => {
//         console.log(4);
//         return sleep(1000);
//     })

//     .catch((error)=> {
//         console.log(error);
//     })

    // function hell(value, cb) {
    //     cb(value);
    // }
    
    // // Không sử dụng Promise dẫn đến tạo ra callback hell :<
    // hell(1, function (valueFromA) {
    //     hell(valueFromA + 1, function (valueFromB) {
    //         hell(valueFromB + 1, function (valueFromC) {
    //             hell(valueFromC + 1, function (valueFromD) {
    //                 console.log(valueFromD + 1);
    //             });
    //         });
    //     });
    // });

// function notHell(value) {
//     return new Promise((resolve)=> {
//         resolve(value);
//     })
// }

// notHell(1)
//     .then((value) => {
//         return value + 1; // 2
//     })
//     .then((value) => {
//         return value + 1; // 3
        
//     })
//     .then((value) => {
//         return value + 1; // 4
//     })
//     .then((value) => {
//         console.log(value + 1) // 5
//     })

// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all // Chay song song 2 promise

var pro = Promise.resolve("Thanh cong") // Luon luon thanh cong
var pro1 = Promise.reject("err"); // Luon luon that bai

pro1
    .then((result) => {
        console.log("Result: ", result)
    })
    .catch((err) => {
        console.log("Error: ", err)
    })


var allPromise1 = new Promise((resolve)=> {
    setTimeout(() => {
        resolve([1]);
    }, 1000)
})

var allPromise2 = new Promise((resolve)=> {
    setTimeout(() => {
        resolve([2, 3]);
    }, 2000)
})

var allPromise3 = Promise.reject("Err")


Promise.all([allPromise1, allPromise2, allPromise3])
    .then(([result1, result2])=> {
        console.log(result1.concat(result2))
    })
    .catch((err)=> {
        console.log(err)
    })


var users = [
    {
        id: 1,
        name: 'Ba Toi'
    },
    {
        id: 2,
        name: 'Tung Duong'
    },
    {
        id: 3,
        name: 'Hao Tran'
    },
];

var comments = [
    {
        id: 1,
        user_id: 2,
        content: 'Đang làm gì đấy?'
    },
    {
        id: 2,
        user_id: 1,
        content: 'Đang học bài thôi!'
    },
    {
        id: 2,
        user_id: 2,
        content: 'OK a'
    },
]

// Fake API

function getComments() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(comments), 500);
    })
}

function getUsersById() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(users), 500);
    });
}

const getData = async() => {
    let cmtData = await getComments();
    let userByIdData = await getUsersById();

    return {
        users: userByIdData,
        comments: cmtData
    }
}

getData()
    .then((data) => {
        let cmtBock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach((comment) => {
            var user = data.users.find((user) => {
                return user.id === comment.user_id;
            });
            html += `<li>${user.name} : ${comment.content}</li>`
        });
        cmtBock.innerHTML = html;
    });
