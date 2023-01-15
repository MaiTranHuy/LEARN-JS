//Xu ly nhieu viec khi 1 su kien dien ra
//lang nghe hay huy bo su kien nao do
var btn = document.getElementById('btn')


// btn.onclick = function(){

//     console.log('VIEC 1')

//     console.log('VIEC 2')
    
//     alert('VIEC 3')
// }

// setTimeout(function(){
//     btn.onclick = function(){}
    
// },3000)

function viec1(){
    console.log('viec 1')
}

function viec2(){
    console.log('viec 2')
}

btn.addEventListener('click',viec1)
btn.addEventListener('click',viec2)

setTimeout(function(){
    btn.removeEventListener('click',viec1)
},3000)


// btn.addEventListener('click',function(e){
//     console.log('Event 1')
// })
// btn.addEventListener('click',function(e){
//     console.log('Event 2')
// })
// btn.addEventListener('click',function(e){
//     console.log('Event 3')
// })