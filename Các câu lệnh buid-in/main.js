
//1. IN RA THONG BAO KHI VAO TRANG WEB
alert(fullName);
alert(age);

//2. HIEN THI DU LIEU TRONG CONSOLE
console.log(123);
console.error(456);

//3. HIEN RA XAC NHAN
confirm('Xac nhan ban du tuoi!');

//4. HIEN RA O NHAP DU LIEU
prompt('Xac nhan du tuoi!');

//5. SAU BAO NHIEU mls THI HIEN THI RA
setTimeout(function() {
    alert('Set timeout');
}, 1000)

//6. CU SAU BAO NHIEU mls THI HIEN THI RA
setInterval(function() {
    console.log('set inter' + Math.random());
},1000)
