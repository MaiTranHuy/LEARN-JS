//Cau lenh if else
var date =2
if(date == 2)
    console.log("Thu 2")
else if(date == 3)
    console.log("Thu 3")
else if(date == 4)
    console.log("Thu 4")

//Cau lenh switch - case
switch(date) {
    case 2:
        console.log("Thu 2")
        break
    case 3:
        console.log("Thu 3")
        break
    case 4:
        console.log("Thu 4")
        break
    default:
        console.log('Khong biet')  
}

//So sanh tinh dung sai thi nen dung if else
//Khi biet truoc gia tri roi thi nen su dung switch case
//It hon 3 case thi nen su dung if else

//Toan tu 3 ngoi
var course = {
    name: 'Huy',
    coin: 19
}

if(course.coin > 0)
    console.log(`${course.coin} Coins`)
else
    console.log(`Mien phi`)

var result = course.coin > 0 ? `${course.coin} Coins` : `Mien phi`
console.log(result)

var a = 1
var b = -4
var c = a>0 ? a : b
console.log(c)
//Nen su dung toan tu 3 ngoi khi chi co 2 truong hop