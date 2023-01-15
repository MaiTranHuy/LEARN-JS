//Ngăn chặn nổi bọt
document.querySelector('div').onclick = function(e){
    console.log('Div')
}

document.querySelector('button').onclick = function(e){
    e.stopPropagation()
    console.log('Click me')

}

