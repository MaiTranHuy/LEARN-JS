//CAC CAU LENH BUILT-IN

//1. IN RA THONG BAO KHI VAO TRANG WEB
// alert(fullName);
// alert(age);

//2. HIEN THI DU LIEU TRONG CONSOLE
// console.log(123);
// console.error(456);

//3. HIEN RA XAC NHAN
// confirm('Xac nhan ban du tuoi!');

//4. HIEN RA O NHAP DU LIEU
// prompt('Xac nhan du tuoi!');

//5. SAU BAO NHIEU mls THI HIEN THI RA
// setTimeout(function() {
//     alert('Set timeout');
// }, 1000)

//6. CU SAU BAO NHIEU mls THI HIEN THI RA
// setInterval(function() {
//     console.log('set inter' + Math.random());
// },1000)

//TIEN TO VA HAU TO
// console.log('--- Hậu tố ---');
// var number1 = 1;
// console.log(number1++); // 1
// console.log(number1); // 2
// console.log(number1++); // 2
// console.log(number1); // 3

// console.log('--- Tiền tố ---');
// var number2 = 1;
// console.log(++number2); // 2
// console.log(number2); // 2
// console.log(++number2); // 3
// console.log(number2); // 3

//NHUNG GIA TRI NHAN false
// 0
// false
// '' or ""  //chuoi rong
// undefined
// NaN
// null 

//TOAN TU LOGIC
// && - and
// || - or
// ! - not

//KIEU DU LIEU
// 1. Number
// var a = 1;
// var b = 2;
// var c = 1.5;

// 2. String
// var fullName = 'Mai Tran Huy';

// 3. Boolean
// var isSuccess = true;

// 4. undefined 
// var age;

// 5. null
// var isNull = null,

// 6. Symbol
// var id = Symbol('id') //unique

// 7. Function 
// var myFunction = function(){
//     alert('Hi, Huy');
// };
// myFunction();

// 8. Object
// var myObject = {
//     name: 'Mai Tran Huy',
//     age: 18,
//     address: 'Thanh Hoa',
//     myFunction: function(){

//     }
// };
// console.log('myObject',myObject);

// 9. Array
// var myArray = [
//     'Mai',
//     'Tran',
//     'Huy'
// ];

//KIEM TRA KIEU DU LIEU cua bien n
//console.log(typeof n);

//SO SANH KIEU DU LIEU
// var a = 1;
// var b = '1';
// console.log(a == b) -> true
// console.log(a === b) -> false
// === or !== , == or !=

//CACH TAO HAM
// function showDialog() {
//     alert('hi xin chao');
// }

// showDialog();

// function writeLog(message){
//     console.log(message);
// }

// writeLog(3);
// writeLog('Huy');

// function useArguments(){
//     var str = '';
//     for(var param of arguments){
//         str += `${param} - `
//     }
//     console.log(str);
// }
// useArguments(1,2,4,'sa')

//CACH LAY GIA TRI TU HAM confirm
// var isConfirm = confirm('Ban ok k');
// console.log(isConfirm);

//HAM TRONG HAM
// function showMessage(){
//     function showMessage2(){
//         console.log("OKKK");
//     }
//     showMessage2();
// }
// showMessage();

//CAC LOAI function
// 1. Declareration function
//Co the goi function truoc khi khoi tao
// function showMessage(){
//    console.log("Declareration function");
// }

// 2. Expression function
//Phai khoi tao truoc roi moi goi duoc
// var showMessage2 = function(){
//    console.log("Expression function");
// }

//KIEN THUC VE STRING
// 1. Khoi tao String
// var name = 'Mai Tran Huy';
// hoac
// var name2 = new String('Mai Tran Huy');

// 2. In ra dau '' hoac "" - them dau \ vao truoc
// var name3 = 'Mai Tran \' Huy'

// 3. Do dai chuoi
// var name4 = 'MAI TRAN HUY'
// console.log(name4.length);

// 4. Template String
// var ho = 'Mai'
// var ten = 'Huy'
// console.log(`${ho} ${ten}`)

//LAM VIEC VOI String
// var myName = 'Mai Huy Tran Huy'
// //1. Length
// console.log(myName.length)
// //2. Find index
// console.log(myName.indexOf('Huy'))
// console.log(myName.indexOf('Huy',5))
// console.log(myName.lastIndexOf('Huy'))
// console.log(myName.lastIndexOf('Huy',5))
// console.log(myName.search('Huy'))
// //3. Cut String - bat dau -> ket thuc
// console.log(myName.slice(4))
// console.log(myName.slice(4,10))
// console.log(myName.slice(-2))

// //4. Repalce 
// console.log(myName.replace('Huy','huy'))
// console.log(myName.replace(/Huy/g,'huy'))

// //5. Trim - xoa khoang trang thua 2 dau
// console.log(myName.trim())

// //6. Split
// var languages = 'JS,PHP,RUBY'
// console.log(languages.split(','))

// //7. Get a character by index
// const myString = 'Mai Tran Huy'
// console.log(myString[5])
// console.log(myString.charAt(10))

// //TAO KIEU number
// //1. Cac cach khoi tao
// var age = 20;
// var PI = 3.14;
// var other = new Number(15);

// var res = 20 / 'as';
// //Kieu tra xem so co hop le khong
// console.log(isNaN(res))

// //2. Lam viec voi number
// // Chuyen doi number thanh String
// var mystr = age.toString()
// console.log(mystr)
// // Dau so thap phan, lam tron va chuyen sang string
// console.log(PI.toFixed())

//HAM KIEM TRA SO CO HOP LE KHONG
// function isNumber(value) {
//     if(typeof value == 'number'){
//         if(isNaN(value))
//             return false
//             else
//             return true
//     }

//     else
//         return false
// }


// //CACH SU DUNG array
// //1. Khoi tao array
// var name1 = [
//     'no1',
//     'no2',
//     'no3',
// ]
// console.log(name1)

// var newName = new Array(
//     'no1',
//     'no2',
//     'no3',
// )
// console.log(newName)

// //KIEM TRA CO PHAI array 
// console.log(Array.isArray(name1))
// //Kiem tra do dai 
// console.log(name1.length)
// //Lay ra vi tri cua array
// console.log(name1[2])

// //LAM VIEC VOI array
// var languages = [
//     'JVS',
//     'PHP',
//     'C',
// ];
// //Doi sang kieu string cach nhau boi dau ','
// console.log(languages.toString())
// //Chuyen doi array thanh 1 string
// console.log(languages.join('_'))
// // Lay ra va xoa phan tu cuoi mang
// console.log(languages.pop())
// console.log(languages)
// //Them phan tu vao cuoi mang
// console.log(languages.push('Ruby','Dart'))
// console.log(languages)
// // Lay ra va xoa phan tu dau mang
// console.log(languages.shift())
// console.log(languages)
// //Them phan tu vao dau mang
// console.log(languages.push('Python','C++'))
// console.log(languages)
// //Xoa phan tu tu vi tri x so luong y va them phan tu z
// languages.splice(2,2,'Huy')
// console.log(languages)
// //Cach ket hop 2 array
// var arr1 = [
//     '1',
//     '2',
//     '3',
// ]

// var arr2 = [
//     'a',
//     'b',
//     'c',
// ]
// console.log(arr1.concat(arr2))

// //Lay ra so luong phan tu cua array
// console.log(languages.slice(1,4))

// //Object trong JVS
// var emailKey = 'email1'
// var myInfo = {
//     name: 'Mai Tran Huy',
//     age: 20,
//     address: 'Thanh Hoa',
//     [emailKey]: 'asd',
//     getName: function(){
//         return this.name;
//     }
// }
// //Them key moi
// myInfo.email = 'huymt@gmail.com'
// //hoac myInfo['email'] = 'huymt@gmail.com'
// console.log(myInfo.name)
// //hoac console.log(myInfo['name'])
// var myKey = 'age'
// console.log(myInfo[myKey])
// console.log(myInfo)
// //Xoa key
// delete myInfo.address
// console.log(myInfo)

// console.log(myInfo.getName())

// //Object constructor
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
    
//     this.getName = function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// var author = new User('Huy','Mai','AVT');
// var user = new User('Yuh','Iam','AVT');

// author.title = 'Chia se'
// user.comment = 'Ok khong'

// User.prototype.className = 'Hoc lop A'
// User.prototype.getClassName = function(){
//     return this.className;
// }

// console.log(author)
// console.log(user)

// console.log(author.getName())
// console.log(user.getName())

// console.log(user.className)
// console.log(user.getClassName())

// //Doi tuong Date
// var date = new Date();

// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDay(); 

// console.log(date)
// console.log(year)
// console.log(month)
// console.log(day)

// console.log(`${day} ${month} ${year}`)

// //Math object
// //So PI
// console.log(Math.PI)
// //Lam tron so
// console.log(Math.round(1.6))
// //Gia tri tuyet doi
// console.log(Math.abs(-4))
// console.log(Math.abs(4))
// //Lam tron tren
// console.log(Math.ceil(4.1))
// //Lam tron duoi
// console.log(Math.floor(4.654))
// //Tao random
// console.log(Math.random())
// var random = Math.floor(Math.random()*5)
// var bonus = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin',
// ]
// console.log(bonus[random])

// //Max va Min
// console.log(Math.min(-423,342,12,4,2,4,5,3))
// console.log(Math.max(-423,342,12,4,2,4,5,3))

// //Cau lenh if else
// var date =2
// if(date == 2)
//     console.log("Thu 2")
// else if(date == 3)
//     console.log("Thu 3")
// else if(date == 4)
//     console.log("Thu 4")

// //Cau lenh switch - case
// switch(date) {
//     case 2:
//         console.log("Thu 2")
//         break
//     case 3:
//         console.log("Thu 3")
//         break
//     case 4:
//         console.log("Thu 4")
//         break
//     default:
//         console.log('Khong biet')  
// }

// //So sanh tinh dung sai thi nen dung if else
// //Khi biet truoc gia tri roi thi nen su dung switch case
// //It hon 3 case thi nen su dung if else

// //Toan tu 3 ngoi
// var course = {
//     name: 'Huy',
//     coin: 19
// }

// if(course.coin > 0)
//     console.log(`${course.coin} Coins`)
// else
//     console.log(`Mien phi`)

// var result = course.coin > 0 ? `${course.coin} Coins` : `Mien phi`
// console.log(result)

// var a = 1
// var b = -4
// var c = a>0 ? a : b
// console.log(c)
// //Nen su dung toan tu 3 ngoi khi chi co 2 truong hop

//Vong lap
//1. for - lap voi dieu kien dung
// for (var i = 1; i <= 10; i++)
//     console.log(i)

//2. for/in - lap qua key cua doi tuong
// var languages = [
//     'JVS',
//     'PHP',
//     'C',
// ];

// var myInfo = {
//     name: 'Mai Tran Huy',
//     age: 20,
//     address: 'Thanh Hoa',   
// };

// var fullName = 'MaiTranHuy'

// for(var key in myInfo){
//     console.log(key)//lay ra ten cua key
//     console.log(myInfo[key])//lay ra gia tri cua key
// }

// for(var key in languages){
//     console.log(key)//lay ra ten cua key
//     console.log(languages[key])//lay ra gia tri cua key
// }

// for(var key in fullName){
//     console.log(key)//lay ra ten cua key
//     console.log(fullName[key])//lay ra gia tri cua key
// }
// function run(object) {
//     var arr = [];
//     var flag = 0;
//     for(var key in object){
//     arr[flag]='Thuộc tính ' + key + " có giá trị " + object[key];
//     flag++;
// }
// return arr
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// // Output:
// // [
// //     "Thuộc tính name có giá trị Nguyen Van A",
// //     "Thuộc tính age có giá trị 16"
// // ]

// //3. for/of - lap qua value cua doi tuong
// var languages = [
//     'JVS',
//     'PHP',
//     'C',
// ];

// for(var value of languages){
//     console.log(value)
// }

// var fullName = 'MaiTranHuy'
// for(var value of fullName){
//     console.log(value)
// }

// var myInfo = {
//     name: 'Mai Tran Huy',
//     age: 20,
//     address: 'Thanh Hoa',   
// };
// for(var value of Object.values(myInfo)){
//     console.log(value)
// }

//4. while - lap khi dieu kien dung
// var i = 1;
// while (i <= 10){
//     console.log(i);
//     i++;
// }

// var languages = [
//     'JVS',
//     'PHP',
//     'C',
// ];
// var j=0
// while(j < languages.length){
//     console.log(languages[j])
//     j++
// }

//5. do/while - lap it nhat 1 lan, sau do lap khi dieu kien dung
// var i = 0;
// var isSuccess = false;
// do {
//     i++
//     console.log('Nap the lan'+i)
//     if(false)
//         isSuccess = true;
    
// }while(!isSuccess && i < 3)

// //break  và continue in loop
// for (var i = 1; i <= 10; i++){
//     console.log(i)
//     if(i >= 5)
//     break;
// }

// for (var i = 0; i < 10; i++){
//     if(i%2!=0){
//     continue
// }
//     console.log(i)
// }

// //2 vong lap long nhau
// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6],
// ]
// for(var i = 0; i < myArray.length; i++){
//     for(j = 0 ; j < myArray[i].length; j++)
//         console.log(myArray[i][j])
// }

// //Cac loai loop khac
// for(var i = 100; i>0; i--)
// console.log(i)

// for(var i = 0; i<100; i+=5)
// console.log(i)

// //De quy
// var array = ['a','b','c','a','b','c']
// console.log(new Set(array))

// function countDown(num){
//     if(num > 0 ){
//         console.log(num)
//         return countDown(num-1)
//     }
//     return num
// }
// countDown(5)

// //LAM VIEC VOI MANG P2
// var courses = [
//     {
//         id:1,
//         name: 'JVS',
//         coin: 250
//     },
//     {
//         id:2,
//         name: 'PHP',
//         coin: 300
//     },
//     {
//         id:3,
//         name: 'C',
//         coin: 140
//     },  
//     {
//         id:4,
//         name: 'Python',
//         coin: 0
//     },
//     {
//         id:5,
//         name: 'Ruby',
//         coin: 100
//     },
//     {
//         id:6,
//         name: 'Ruby',
//         coin: 12
//     },
// ]
// //duyet qua tung phan tu
// courses.forEach(function (course){
//     console.log(course)
// })

// //Tat ca dieu kien trong mang thoa man gi do dung every
// //kiem tra xem tat ca coin co free hay khong
// var isFree = courses.every(function (course){
//     return course.coin === 0
// })
// console.log(isFree)

// //1 dieu kien trong mang thoa man gi do dung some
// //kiem tra xem tat ca coin co free hay khong
// var isFree = courses.some(function (course){
//     return course.coin === 0
// })
// console.log(isFree)

// //dung find
// //tim trong array co name = ruby khong tra ve 1 phan tu dau tien
// var course = courses.find(function (course){
//     return course.name === 'Ruby'
// })
// console.log(course)

// //dung filter
// //tim trong array co name = ruby khong tra ve tatca phan tu dau tien
// var listCourse = courses.filter(function (course){
//     return course.name === 'Ruby'
// })
// console.log(listCourse)

// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]

// function getMostFavoriteSport (array){
//     var most = array.filter(function (sp){
//         return sp.like > 5
//     })
//     return most

// }


// // Kỳ vọng
// console.log(getMostFavoriteSport(sports)) 
// // Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

// //Cach su dung map
// var courses = [
//     {
//         id:1,
//         name: 'JVS',
//         coin: 250
//     },
//     {
//         id:2,
//         name: 'PHP',
//         coin: 300
//     },
//     {
//         id:3,
//         name: 'C',
//         coin: 140
//     },  
//     {
//         id:4,
//         name: 'Python',
//         coin: 0
//     },
//     {
//         id:5,
//         name: 'Ruby',
//         coin: 100
//     },
//     {
//         id:6,
//         name: 'Ruby',
//         coin: 12
//     },
// ]

// function courseHandler(course) {
//     // console.log(course)
//     return{
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`,
//     }
// }
// var newCourse = courses.map(courseHandler)
// console.log(newCourse)

//Cach su dung reduce
var courses = [
    {
        id:1,
        name: 'JVS',
        coin: 250
    },
    {
        id:2,
        name: 'PHP',
        coin: 300
    },
    {
        id:3,
        name: 'C',
        coin: 140
    },  
    {
        id:4,
        name: 'Python',
        coin: 0
    },
    {
        id:5,
        name: 'Ruby',
        coin: 100
    },
    {
        id:6,
        name: 'Ruby',
        coin: 12
    },
]
var i = 0
function coinHandeler(accumulator, currentValue, currentIndex, originArray){
    i++;
    var total = accumulator + currentValue.coin
    console.table({
        'Luot chay: ':i,
        'Bien luu tru': accumulator,
        'Gia khoa hoc': currentValue.coin,
        'Tich tru duoc': total

    })
    return total
}
var totalCoin = courses.reduce(coinHandeler, 0);

console.log(totalCoin)


var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]

function getTotalGold(sports) {
    var totalGold = sports.reduce(function(start, sport) {
    return start + sport.gold;
    }, 0);
    return totalGold;
}


// Expected results:
console.log(getTotalGold(sports)) // Output: 23
































