//KIEN THUC VE STRING
// 1. Khoi tao String
var name = 'Mai Tran Huy';
hoac
var name2 = new String('Mai Tran Huy');

// 2. In ra dau '' hoac "" - them dau \ vao truoc
var name3 = 'Mai Tran \' Huy'

// 3. Do dai chuoi
var name4 = 'MAI TRAN HUY'
console.log(name4.length);

// 4. Template String
var ho = 'Mai'
var ten = 'Huy'
console.log(`${ho} ${ten}`)

//LAM VIEC VOI String
var myName = 'Mai Huy Tran Huy'
//1. Length
console.log(myName.length)
//2. Find index
console.log(myName.indexOf('Huy'))
console.log(myName.indexOf('Huy',5))
console.log(myName.lastIndexOf('Huy'))
console.log(myName.lastIndexOf('Huy',5))
console.log(myName.search('Huy'))
//3. Cut String - bat dau -> ket thuc
console.log(myName.slice(4))
console.log(myName.slice(4,10))
console.log(myName.slice(-2))

// //4. Repalce 
console.log(myName.replace('Huy','huy'))
console.log(myName.replace(/Huy/g,'huy'))

// //5. Trim - xoa khoang trang thua 2 dau
console.log(myName.trim())

// //6. Split
var languages = 'JS,PHP,RUBY'
console.log(languages.split(','))

// //7. Get a character by index
const myString = 'Mai Tran Huy'
console.log(myString[5])
console.log(myString.charAt(10))