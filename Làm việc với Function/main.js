// CACH TAO HAM
function showDialog() {
    alert('hi xin chao');
}

showDialog();

function writeLog(message){
    console.log(message);
}

writeLog(3);
writeLog('Huy');

function useArguments(){
    var str = '';
    for(var param of arguments){
        str += `${param} - `
    }
    console.log(str);
}
useArguments(1,2,4,'sa')

// CACH LAY GIA TRI TU HAM confirm
var isConfirm = confirm('Ban ok k');
console.log(isConfirm);

// HAM TRONG HAM
function showMessage(){
    function showMessage2(){
        console.log("OKKK");
    }
    showMessage2();
}
showMessage();

// CAC LOAI function
// 1. Declareration function
// Co the goi function truoc khi khoi tao
function showMessage(){
   console.log("Declareration function");
}

// 2. Expression function
// Phai khoi tao truoc roi moi goi duoc
var showMessage2 = function(){
   console.log("Expression function");
}