function verificar() {
    var nome = document.getElementById("nome").value

    var idade = document.getElementById("idade").value

    if (idade >= 18 && idade <= 65) {
        document.getElementById("resultado").innerHTML = ` <strong class="certo"> ${nome}, você é obrigado a votar</strong>`
    }

    else if (idade <= 16) {
        document.getElementById("resultado").innerHTML = `<strong class="errado"> ${nome}, Voce não pode votar </strong>`

    }
    else if ((idade >= 16 && idade < 18) || idade > 65) {
        document.getElementById("resultado").innerHTML += `<strong class="errado"> ${nome}, você nao é obrigado a votar </strong>`
        
    }
}