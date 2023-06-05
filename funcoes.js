//chamando a funçao e passando o n° com PARAMETRO que desejo ver a tabuada 
ricardoCalculeTabuada(3) //Douglas
ricardoCalculeTabuada(9) //MAria F.
ricardoCalculeTabuada(240) //lima

//funçao com entrada de parâmetro e sem retorno (sem saida de dados)
//Criando a funçao para gerar no console a tabuada do nr desejado
function ricardoCalculeTabuada(nr) {
    for (var i = 1; i <= 20; i++) {
        console.log ( `${nr} x ${i} = ${nr*i} `)
    }
}

//chamando a funçao para calcular o dobro e receber o resultado na variavel
var resultado 
resultado = calcularDobro(544075)
console.log (resultado)

//declarando a funçao e recebendo o parametro e retornando um valor 
function calcularDobro(nr){ //Ricardo
    var dobro = nr * 2 
    return dobro //com comando return "devolver" o valor calculado para a chamada 
}

function calcularMedia(nota1, nota2) {
    var soma = nota1 + nota2 
    var media = soma / 2 
    return media 
}

var mediaAluno1 = calcularMedia(9, 7)
console.log (`Média do aluno 1 é ${mediaAluno1}`)
var mediaAluno2 = calcularMedia(5, 3)
console.log (`Média do aluno 2 é ${mediaAluno2}`)

var login = 'admin'
var senha = '123'
var possoAcessar = validarLogin(login, senha)
if (possoAcessar = true) {
    console.log (`voce pode acessar o sistema`)
}
else {
    console.log(`voce nao pode acessar o sistema`)
}

function validarLogin(login, senha) {
    if (login == '' || senha == ''){
        return false
    }
    if (login == 'admin' && senha =='123'){
        return true 
    }
    else {
        return false
    }
}

