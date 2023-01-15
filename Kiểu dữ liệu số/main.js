// //1. Cac cach khoi tao
var age = 20;
var PI = 3.14;
var other = new Number(15);

var res = 20 / 'as';
//Kieu tra xem so co hop le khong
console.log(isNaN(res))

// //2. Lam viec voi number
// Chuyen doi number thanh String
var mystr = age.toString()
console.log(mystr)
// Dau so thap phan, lam tron va chuyen sang string
console.log(PI.toFixed())

//HAM KIEM TRA SO CO HOP LE KHONG
function isNumber(value) {
    if(typeof value == 'number'){
        if(isNaN(value))
            return false
            else
            return true
    }

    else
        return false
}