function gerar(){
    document.getElementById("resultado").innerHTML =""
    var numero = document.getElementById("numero").value
    for (var contador = 1; contador <= numero; contador++) {
        document.getElementById("resultado").innerHTML += `<img src="img/Coracao-pixelizado-Png.png">`
    }
}