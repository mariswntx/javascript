var listaFilmes = []

//Buscando as informaçoes do localStorage gravadas no navegador 
//utilizo o metodo getItem com o nome exatamente que utilizamos no setItem
listaFilmes = JSON.parse(localStorage.getItem('bdFilmes'))
if (listaFilmes == null) {
    listaFilmes = []
}

function gerar() {
    var filmes = {
        nome: document.getElementById("filme").value,
        link: document.getElementById("link").value
    }
    listaFilmes.push(filmes)
    /*Utilizando o localStorage que ira gravar o nosso vetor de filme no metodo
    setItem, precso passar como parametro o nome do espaço que o navegador ira reservar 
    e passo tambem o vetor de filmes convertido em formato de JSON*/
    localStorage.setItem('bdFilmes', JSON.stringify(listaFilmes))

    exibirFilmes()

    document.getElementById("nome").value = ''
    document.getElementById("imagem").value = ''
    document.getElementById("nome").focus() = ''

    document.getElementById("resultado").innerHTML = ''
    for (var i in listaFilmes) {
        document.getElementById("resultado").innerHTML += `${listaFilmes[i].nome}<br> - <img src="${listaFilmes[i].link}"><br>`
    }


}


function sortear() {
    var sorteando = parseInt(Math.random() * listaFilmes.length)
    document.getElementById("resultado").innerHTML += `${listaFilmes[sorteando].nome} <br> <img src="${listaFilmes[sorteando].link}"><br> `
}

function exibirFilmes(){
    document.getElementById('resultado').innerHTML = ''
    document.getElementById('indicado').innerHTML = ''
    console.log(listaFilmes)
    debugger
    for (var i in listaFilmes) {
        document.getElementById('resultado').innerHTML +=
            `<div>
                <img src='${listaFilmes[i].link}' class='img'> 
                <p>${listaFilmes[i].nome}</p>
            </div>`
    }
}

function botaoLimpar(){
    listaFilmes = []
    localStorage.setItem( 'bdFilmes', JSON.stringify(listaFilmes) )
    exibirFilmes()
}