document.write('Mai Tran Huy')

//Get by id trả về trực tiếp giá trị
var heading_id = document.getElementById('headingid')
console.log(heading_id)

//Get by class trả về 1 mảng
var heading_class = document.getElementsByClassName('headingclass')
console.log(heading_class)

for(var i = 0; i < heading_class.length;i++){
    console.log(heading_class[i])
}

//Get by tagname trả về các thẻ tag theo 1 mảng
var heading_tag = document.getElementsByTagName('h1')
console.log(heading_tag)

for(var i = 0; i < heading_tag.length;i++){
    console.log(heading_tag[i])
}

//querySlector chon ra 1 phan tu neu khong ghi rõ thì là phần từ đầu
var heading_node = document.querySelector('.box .heading-2')
console.log(heading_node)
var heading_node = document.querySelector('.box .heading-2:first-child')
console.log(heading_node)
var heading_node2 = document.querySelector('.box .heading-2:nth-child(2)')
console.log(heading_node2)

//querySlectorAll chon ra tat ca phan tu 
var heading_tag_All = document.querySelectorAll('.heading-2')
console.log(heading_tag_All)
console.log(heading_tag_All[1])

//form khong can select ma goi thang
console.log(document.forms)
console.log(document.forms[0])
console.log(document.forms['form2'])
console.log(document.forms.testform)

//anchors
console.log(document.anchors)







