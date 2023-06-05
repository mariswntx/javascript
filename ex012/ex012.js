

var nrSorteado = parseInt(Math.random() *100) 

function chutar() {

    var chutar = prompt ("Chute um numero de 0 a 100")
    if(chutar < nrSorteado) {
        document.getElementById("resultado").innerHTML += ` <strong><br> Você chutou ${chutar}, chute um numero MAIOR</strong>`
    }

    else if (chutar > nrSorteado){
        document.getElementById("resultado").innerHTML += ` <strong><br> Você chutou ${chutar}, chute um numero MENOR</strong>`
    }
    if (nrTentativas >= 5){
        alert("GAME OVER, n° de tentativas exedidas")
    }

    else if (chutar == nrSorteado){
        document.getElementById("resultado").innerHTML += ` <strong><br> Você acertou parabéns </strong>`
    }

}