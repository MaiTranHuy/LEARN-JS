// //1. let, const

// var:
//toàn cục, khai báo lại được , gán giá trị mới được, luôn luôn được đưa lên đầu
//(vì khai báo lại được nên biến sau trùng tên biến trc bị ghi đè, code nhiều khó tìm bug, để fix nên mới tạo ra let, const.

//let: xử lý cục bộ, gán giá trị được, nhưng ko thể khai báo lại biến.

// const (nghĩa là hằng):
//khá giống let, khác let ở chỗ là ko thể gán giá trị ở kiểu dữ liệu nguyên thủy đc, nhưng dữ liệu phức tạp thì đc
// ( mảng, object, function - vì mấy cái này có thuộc tính riêng, thay đổi thuộc tính của biến chớ ko thay đổi giá trị toàn biến)

// //2. Template literals
// const courseName = 'Course';
// const description = 'ok' + courseName
// console.log(description);

// const Template = `Course name: ${courseName}`;
// console.log(template);
// console.log(`Chuoi noi suy voi \${}`);

// const line = 'Line1 \n Line2'
// console.log(line);

// const lines = `Line1
// line2
// line3`

// console.log(lines);

// //3. Arrow function
// const logger = function logger(log){
//     console.log(log);
// }
// logger('Mess')

// const logger1 = log =>{
//     console.log(log);
// }
// logger1('Mess')

// const sum = (a,b) => a+b
// console.log(sum(2,2))

// const sum1 = (a,b) => ({a:a,b:b})//object
// console.log(sum1(2,2));

// //4. Classes
// function Course(name, price) {
//   this.name = name;
//   this.price = price;

//   this.getName = function() {
//     return this.name;
//   }
//   const isSucceeded = false;
// }
// const phpCourse = new Course("PHP", 1000);
// const jsCourse = new Course("JS", 1000);
// console.log(phpCourse);
// console.log(jsCourse);

// class Course {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   getName(){
//     return this.name;
//   }
//   getPrice(){
//     return this.price;
//   }
// }
// const phpCourse1 = new Course("PHP", 1000);
// const jsCourse1 = new Course("JS", 1000);
// console.log(phpCourse1);
// console.log(jsCourse1);

// //5. Default parameter values

// function logger(log){
//     if(typeof log ==='undefined'){
//         console.log('gia tri mac dinh');
//     }
//     console.log(log);
// }
// logger();

// function logger1(log= 'gia tri mac dinh'){
//     console.log(log);
// }
// logger1()

// //6. Enhanced object literals
// //Định nghĩa key: value cho object
// //Định nghĩa method cho object
// //Định nghĩa key cho object

// var name = "JVS";
// var price = 1000;
// var cost = {
//   name: name,
//   price: price,
//   getName: function () {
//     return name;
//   },
// };
// console.log(cost);
// console.log(cost.getName());

// var cost1 = {
//   name,
//   price,
//   getName(){
//     return  name;
//   }
// };

// console.log(cost1);
// console.log(cost1.getName());

// var fieldName = 'name';
// var fieldPrice = 'price';
// const courseName = {
//     name: 'JVS',
//     [fieldName]: 'JVS',
//     [fieldPrice]: 10000
// }
// console.log(courseName);

// //7. Destructuring, Rest
// var array = ['JVS','PHP','C']
// var [a,b,c] = array;
// console.log(a,b,c);

// var [x,...rest] = array;
// console.log(x);
// console.log(rest);

// var course = {
//     name: 'JVS',
//     price: 1000,
//     image: 'img.png',
//     children: {
//         name: 'React'
//     }
// }
// var {name,price} = course;
// console.log(name,price);

// var {name,...rest1} = course
// console.log(name);
// console.log(rest1);

// var {name:parentName,children:{name}} = course
// console.log(parentName);
// console.log(name);

// function logger(...params){
//     console.log(params);
// }
// logger(1,2,3,4,5,6,7,6)

// function logger1(a,...params){
//     console.log(params);
// }
// logger1(1,2,3,4,5,6,7,6)

// function logger2({name,...rest}){
//     console.log(name);
//     console.log(rest);
// }
// logger2({
//     name: 'JVS',
//     price: 1000,
//     status: 'TRUE'
// })

// function logger3([a,b,...rest]){
//     console.log(a);
//     console.log(rest);
// }
// logger3([1,4,5,4,4,])

// //8. Spread
// var array1 = ["SO1", "SO2", "SO3", "SO4"];
// var array2 = ["SO5", "SO6", "SO7"];

// var array3 = [...array2, ...array1];

// console.log(array3);

// var object1 = {
//   name: "JVS",
// };

// var object2 = {
//   price: 1000,
// };

// var object3 = {
//   ...object1,
//   ...object2,
// };
// console.log(object3);

// var x = ["JVS", "PHP", "C"];

// function logger(...rest) {
//   for (var i = 0; i < rest.length; i++)
//    console.log(rest[i]);
// }
// logger(...x)

// //9. Tagged template literals
// function highlight([first,...strings], ...values){
//     return values.reduce(
//         (acc,curr) => [...acc,`<span>${curr}</span>`, strings.shift()],
//         [first]
//     )
// }

// var brand = 'MTH'
// var code = 'JVS'
// const html = highlight`Hoc lap trinh ${brand} tai ${code}!`

// console.log(html);

//10. Modules
import logger from "./logger.js";

// import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from "./constant.js";

import * as constant from "./constant.js";

logger("Message", TYPE_WARN);
