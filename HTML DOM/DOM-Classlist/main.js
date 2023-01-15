var boxElement = document.querySelector('.box')

console.log(boxElement.classList)
console.log(boxElement.classList[0])
console.log(boxElement.classList[1])
console.log(boxElement.classList.value)

//add
//them nhieu class cach nhau boi day ,
boxElement.classList.add('red','blue')

//kiem tra xem 1 element co class nao hay khong
console.log(boxElement.classList.contains('red'))

//remove
// setTimeout(()=>{
//     boxElement.classList.remove('red')
// },3000)

//toggle
//có thì bỏ không có thì thêm
setInterval(()=>{
    boxElement.classList.toggle('red')
},1000)

