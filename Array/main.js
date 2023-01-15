// //1. Khoi tao array
var name1 = [
    'no1',
    'no2',
    'no3',
]
console.log(name1)

var newName = new Array(
    'no1',
    'no2',
    'no3',
)
console.log(newName)

// //KIEM TRA CO PHAI array 
console.log(Array.isArray(name1))
//Kiem tra do dai 
console.log(name1.length)
//Lay ra vi tri cua array
console.log(name1[2])

// //LAM VIEC VOI array
var languages = [
    'JVS',
    'PHP',
    'C',
];
// //Doi sang kieu string cach nhau boi dau ','
console.log(languages.toString())
// //Chuyen doi array thanh 1 string
console.log(languages.join('_'))
// // Lay ra va xoa phan tu cuoi mang
console.log(languages.pop())
console.log(languages)
// //Them phan tu vao cuoi mang
console.log(languages.push('Ruby','Dart'))
console.log(languages)
// // Lay ra va xoa phan tu dau mang
console.log(languages.shift())
console.log(languages)
// //Them phan tu vao dau mang
console.log(languages.push('Python','C++'))
console.log(languages)
// //Xoa phan tu tu vi tri x so luong y va them phan tu z
languages.splice(2,2,'Huy')
console.log(languages)
// //Cach ket hop 2 array
var arr1 = [
    '1',
    '2',
    '3',
]

var arr2 = [
    'a',
    'b',
    'c',
]
console.log(arr1.concat(arr2))

// //Lay ra so luong phan tu cua array
console.log(languages.slice(1,4))
