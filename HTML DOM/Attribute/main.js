//Cach 1
var listItem = document.querySelectorAll('.box-1 li')
console.log(listItem)

//Cach 2
//Công việc 1 dùng boxNode
var boxNode = document.querySelector('.box-1')
console.log(boxNode)

//Công việc 2 dùng các element li trong boxNode
console.log(boxNode.querySelector('li'))
console.log(boxNode.querySelectorAll('li'))
console.log(boxNode.getElementsByTagName('li'))
console.log(boxNode.querySelector('p'))

//Them atribute 
//setter Neu element khong co atribute hop le thi không được
var headingElement = document.querySelector('h3')
headingElement.title = 'name'
headingElement.id = 'name'
headingElement.className = 'name'
// C2 có thể thêm các atribute không hợp lệ
headingElement.setAttribute('class','head')
headingElement.setAttribute('date','newdate')

//Lấy giá trị 
var getAtr = headingElement.getAttribute('class')
console.log(getAtr)
var getAtr2 = headingElement.getAttribute('date')
console.log(getAtr2)








