var meuFilme = []
var link = []
function gerar() {
    meuFilme.push(document.getElementById("filme").value)
    link.push(document.getElementById("link").value)
    document.getElementById("resultado").innerHTML = ''
    for (var i = 0; i < meuFilme.length; i++) {
        document.getElementById("resultado").innerHTML += `${meuFilme[i]}<br> <img src="${link[i]}"><br>`
    }
    
    
}


function sortear(){
    var sorteando = parseInt(Math.random()* meuFilme.length)
    document.getElementById("resultado").innerHTML += `${meuFilme[sorteando]} <br> <img src="${link[sorteando]}"><br> `
}
        
       