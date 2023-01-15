var boxElement = document.querySelector('.box')
console.log(boxElement)
//Thêm element và atribute
boxElement.innerHTML = '<h1 title="heading">Heading</h1>'
console.log(document.querySelector('h1').innerText)
console.log(boxElement.innerText)
console.log(boxElement.innerHTML)
console.log(boxElement.outerHTML)



