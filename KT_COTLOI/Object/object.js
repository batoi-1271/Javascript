
//Object trong Javascript

var myInfo = {
    name: "Ba Toi",
    age: 20,
    sex: "Male",
    address: "Bac Giang"
};

myInfo.email = 'batoi1271.doe@gmail.com';
console.log(myInfo)

console.log(myInfo.name)
console.log(myInfo['age'])

var hihi = "address";
console.log(myInfo[hihi])

delete myInfo.sex
console.log(myInfo)


var emailKey = 'email';

var myInfo_1 = {
    name: "Ba Toi",
    age: 20,
    sex: "Male",
    address: "Bac Giang",
    [emailKey]: 'batoi1271.doe@gmail.com',
    getName: function() {
        return this.name;
    }
};

// Function --> Phương thức / method
// Others --> Thuộc tính / property

console.log(myInfo_1.getName())
console.log(myInfo_1)