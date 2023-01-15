var h1element = document.querySelectorAll('h1')

// for(var i = 0 ;i < h1element.length; i++)
// {
//     h1element[i].onclick = function(e) {
//         console.log(e.target)
//     }
// }
for(var i = 0 ;i < h1element.length; i++)
{
    h1element[i].onclick = function(e) {
        console.log(this.innerText)
    }
}

var h2element = document.querySelector('h2')
console.log(h2element)


h2element.onclick = function(){
    this.style.color = 'red'
}

