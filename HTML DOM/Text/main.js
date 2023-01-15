//innerText trả về những gì trong trình duyệt thấy
//textContent trả về nội dung gốc
var headingElement = document.querySelector('h1')
console.log(headingElement.innerText)
console.log(headingElement.textContent)

//Chỉnh sửa nội dung
headingElement.innerText = 'New heading'
console.log(headingElement.innerText)
//Không được hiểu là atribute
headingElement.innerText = '<i>New heading</i>'
console.log(headingElement.innerText)









