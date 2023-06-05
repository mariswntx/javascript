function calcular() {
    var nome = document.getElementById("nome").value

    var nota1 = document.getElementById("nota1").value
    if(Number(nota1) > 10){
        alert("Nota 1 nao pode ser maior que 10")
        exit
    }

    var nota2 = document.getElementById("nota2").value
    if(Number(nota2) > 10){
        alert("Nota 2 nao pode ser maior que 10")
        exit
    }














    var calcular = (Number(nota1) + Number(nota2)) / 2

    if (calcular >= 7) {
        document.getElementById("resultado").innerHTML = `O aluno ${nome} teve notas ${nota1} e ${nota2} com média ${calcular} e foi <strong>Aprovado</strong>`
    }
    else {
        document.getElementById("resultado").innerHTML = `O aluno ${nome} teve notas ${nota1} e ${nota2} com média ${calcular} e foi <strong>Reprovado</strong>`
    }


}


