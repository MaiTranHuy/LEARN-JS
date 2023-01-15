var aElements = document.links;
//Nếu không phải là đường link này thì không cho chuyển trang
for(var i = 0; i<aElements.length;i++){
    aElements[i].onclick = function(e){
        if(!e.target.href.startsWith('https://www.facebook.com/mth1709/')){
            e.preventDefault();
        }
    }
}

//Nếu không dùng defaul thì click ra ngoài sẽ mất lựa chọn
var ulElement = document.querySelector('ul')
ulElement.onmousedown = function(e){
    e.preventDefault()
}
ulElement.onclick = function(e){
    console.log(e.target)
}
