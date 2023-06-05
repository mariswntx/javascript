function calcular() {
    var nome = document.getElementById("nome").value

    var idade = document.getElementById("idade").value

    if (idade < 18) {
        document.getElementById("resultado").innerHTML = `O ${nome} possui menos de 18 anos e nao pode tirar CNH (carteira de habilitação) e foi <strong>Reprovado</strong>`
    } else {
        document.getElementById("resultado").innerHTML = `O ${nome} possui mais de 18 anos e pode tirar CNH (carteira de habilitação) foi <strong>Aprovado</strong>`
    }



}