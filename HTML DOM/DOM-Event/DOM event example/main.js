//1. Input/select
var inputValue
var inputElement = document.querySelector('input[type="text"]')
//Gõ chữ rồi click ra ngoài là nhận
inputElement.onchange = function(e){
    console.log(e.target.value)
}
//Gõ đến đâu nhận đến đó
inputElement.oninput = function(e){
    inputValue = e.target.value
}

var inputElement2 = document.querySelector('input[type="checkbox"]')
inputElement2.onchange = function(e){
    console.log(e.target.checked)
}

var inputElement3 = document.querySelector('select')
inputElement3.onchange = function(e){
    console.log(e.target.value)
}

//keydown
var inputElement4 = document.querySelector('input[type="text2"]')
inputElement4.onkeydown = function(e){
    console.log(e.target.value)
}

//keyup
var inputElement5 = document.querySelector('input[type="text3"]')
inputElement5.onkeyup = function(e){
    console.log(e.target.value)
}
//keyup là khi phím lên key down là phím xuống keypress là giữ(keypress không nhận esc)
//Nhần nút ESC vào khung số 4 là hiện ra Exit 
var inputElement6 = document.querySelector('input[type="text4"]')
inputElement6.onkeyup = function(e){
    console.log(e.which)
    switch(e.which){
        case 27:
            console.log('Exit')
            break
    }
}

document.onkeydown = function(e){
    console.log(e.which)
    switch(e.which){
        case 27:
            console.log('Exit')
            break
            case 13:
                console.log('Send chat')
                break    
    }
}