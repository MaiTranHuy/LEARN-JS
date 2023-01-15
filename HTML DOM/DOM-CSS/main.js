var boxElement = document.querySelector('.box')
boxElement.style.width = '100px'
//hoac
Object.assign(boxElement.style,{
    width: '200px',
    height: '100px',
    backgroundColor: 'red'
} )