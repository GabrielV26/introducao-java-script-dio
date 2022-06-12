document.getElementById("btn-set").addEventListener("click", function(){
    document.getElementById("title").setAttribute("class", 'estiloRed')
})

document.getElementById("btn-remove").addEventListener("click", function(){
    document.getElementById("title").removeAttribute("class")
})

document.getElementById("btn-get").addEventListener("click", function(){
    var value = document.getElementById("title").getAttribute("class")
    document.getElementById("class").innerHTML = value
})

