/* 1. Hàm là gì
             - Một khối code
             - Chỉ làm một việc
        
         2. Loại hàm
             - Built - in (xây dựng sẵn)
             - Tự định nghĩa
        
         3. Tính chất
             - không được thực thi khi định nghĩa
             - sẽ thực thi khi được gọi
             - có thể nhận tham số
             - có thể nhận về một giá trị

         4. Tạo hàm
             - function [tên hàm]() {
                 viết các dòng code trong ngoặc kép này
             }

         5. Gọi hàm
             - [tên hàm]()
             - để chạy được các dòng code trong ngoặc kép cần phải gọi hàm

*/

function showHello() {
    console.log("Hello everyone!!!")
}

showHello()

// Tham số hàm 

/* 
1. Tham số
    - Định nghĩa
    // Giá trị có thể truyền vào khi gọi tới function
    - Kiểu DL 
    // Khong gioi han
    // Bat cu kieu DL nao
    - Tính private
    - 1 tham số
    - Nhiều tham số 

2. Truyền tham số
    - 1 tham số
    - Nhiều tham số

3. Arguments?
    - Đối tượng Arguments
    - For of
*/

// function writeLog(message, message2) {
//     console.log(message, message2)
// }

// writeLog("TEST", "TEST_2")

// function writeLog() {
//     console.log(arguments)
// }

// writeLog('Test', 'Test_2', 'Test_3')


function writeLog() {
    var myString = '';

    for (var param of arguments) {
        // console.log("- ", param)
        myString += `${param} - `
    }
    console.log(myString)
}

writeLog('Test', 'Test_2', 'Test_3')


// Return trong Function

// var isConfirm = confirm("Hello!");
// console.log(isConfirm)

function sum(a, b) {
    // return a + b;
    // return [a, b];
    return a.toString() + b.toString();
}

var result = sum(2, 8);

console.log(result);

/*
Một số điều cần biết về Function

1. Khi function trùng tên?
2. Khai báo biến trong hàm?
3. Định nghĩa hàm trong hàm?

*/

function showMessage() {
    function showMessage2() {
        console.log('Message 2');
    }

    showMessage2();
}

function showMessage() {
    var fullName = 'Ba Toi';
    console.log(fullName );
}

showMessage()

// Các loại Function

    // 1. Declaration function
    declaration()

    function declaration() {
        console.log("Declaration function");
    }

    // 2. Expresstion function
    var expresstion = function() {
        console.log("Expresstion function");
    }

    setTimeout(function() {

    });

    var myObject = {
        myFuntion: function() {

        }
    }
    // 3. Arrow function