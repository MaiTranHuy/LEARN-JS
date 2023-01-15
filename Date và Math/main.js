//Doi tuong Date
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDay(); 

console.log(date)
console.log(year)
console.log(month)
console.log(day)

console.log(`${day} ${month} ${year}`)

//Math object
//So PI
console.log(Math.PI)
//Lam tron so
console.log(Math.round(1.6))
//Gia tri tuyet doi
console.log(Math.abs(-4))
console.log(Math.abs(4))
//Lam tron tren
console.log(Math.ceil(4.1))
//Lam tron duoi
console.log(Math.floor(4.654))
//Tao random
console.log(Math.random())
var random = Math.floor(Math.random()*5)
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
]
console.log(bonus[random])

//Max va Min
console.log(Math.min(-423,342,12,4,2,4,5,3))
console.log(Math.max(-423,342,12,4,2,4,5,3))