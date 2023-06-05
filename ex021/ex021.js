var meuFilme = []
function gerar(){
    meuFilme.push ( document.getElementById("filme").value) 
    document.getElementById("resultado").innerHTML = ''
    for (var i=0; i< meuFilme.length; i++){
        document.getElementById("resultado").innerHTML += `${meuFilme [i]}<br>`
    }
}