var fullName = "Day la dau \\"
+
"loaaaaaaaaaaaaaaaaaaaaaaaaaaa" // xuong dong
;
console.log(fullName.length)

var firstName = 'Ba';
var lastName = 'Toi';

console.log('Toi la: ' + firstName + " " + lastName);
console.log(`Toi la: ${firstName} ${lastName}`);


// LÀM VIỆC VỚI CHUỖI

var myString = ' Hoc JS tai JS F8!  ';

// Keyword: Javascript string methods

// 1. Length
console.log(myString.length);

// 2. Find index 
console.log(myString.indexOf('JS', 6));
console.log(myString.lastIndexOf('JS'));
console.log(myString.search('JS'));

// 3. Cut string 
console.log(myString.slice(-3, -1));

// 4. 
console.log(myString.replace('JS', 'Javascript'));
console.log(myString.replace(/JS/g, 'Javascript'));

// 5. Convert to upper case 
console.log(myString.toUpperCase());

// 6. Convert to lower case 
console.log(myString.toLowerCase());

// 7. Trim 
console.log(myString.trim().length);

// 8. Split - Cat 1 chuoi thanh 1 Array
var languages = 'Javascript, PHP, Ruby';
console.log(languages.split(', '))

// 9. Get a character by index 
const myString1 = 'SonDang';
console.log(myString1.charAt(1));
console.log(typeof myString1.charAt(100));
console.log(myString1[2]);
 

//Tim cac chu trong chuoi
// if(title.includes('Javascript') && description.includes('Javascript')) {
//     result = true
// } else {
//     result = false
// }
// return result