// Object constructor 

/*
    Object prototype - Basic

    1. Prototype là gì?
    2. SD khi nào?

*/


function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}
User.prototype.className = 'F8'; // Object prototype - Basic
User.prototype.getClassName = function() {
    return this.className;
}
 
var author = new User('Ba', 'Toi', 'Avatar');
var user = new User('Duy', 'Nam', 'Avatar');
var user2 = new User('Ha', 'Trung', 'Avatar');


author.title = "Chia se dao tai F8";
user.comment = "Hello"
 
console.log(author)
console.log(user)
console.log(user2.getClassName())


// DATE

var date = new Date()

console.log(date)

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
console.log(`${day}/${month}/${year}` )

// exercise 5
function getDifferentSeconds(time_1, time_2) {
    var timestamp_1 = Math.floor(+ new Date(`${time_1}`) / 1000);
    var timestamp_2 = Math.floor(+ new Date(`${time_2}`) / 1000);
    return timestamp_2 - timestamp_1;

}
console.log(getDifferentSeconds('2020/06/31 16:00:00', '2020/06/31 16:00:10')
)


// MATH OBJECT

    // - Math.PI
    // - Math.round()
    // - Math.abs()
    // - Math.ceil()
    // - Math.floor()
    // - Math.random()
    // - Math.min()
    // - Math.max()

console.log(Math.PI)
console.log(Math.round(3.8456))
console.log(Math.abs(4))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.floor(Math.random() * 10))

var random = Math.floor(Math.random() * 100);

if (random < 5){
    console.log("Cuong hoa thanh cong");
}

console.log(Math.min(-100, 20, 5, 90, -200))