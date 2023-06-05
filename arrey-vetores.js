//Declarando um array vazio
var meuVetor = []

//Criando vetores com dados 
var numeros = [4, 1, 18, 2, 7]
var nomes = ['Silvia', 'Marcos', 'Sandra']
var novoVetor = [ 20, 'SESI', true]

//Acessando os dados de um vetor 
console.log ( nomes[1] )
console.log ( novoVetor [0])

//Verificando o tamanho de um vetor 
console.log ( numeros.length )

//Indice        0         1         2         3       4
var frutas = ['Maçã', 'Laranja', 'Pera', 'Morango', 'Uva']
for (var i=0; i< frutas.length; i++) {
    //Coloco o i no indice da futra para pegar o valor de cada indice no vetor
    console.log(frutas[i])
}
// Adicionando meu novo valor no FINAL do vetor 
frutas.push('Abacaxi')
console.log(frutas.length)
console.log(frutas)

var novaListaFrutas = []
novaListaFrutas.push ('Limão')
console.log (novaListaFruta)
novaListaFrutas.push ('Melância')
console.log (novaListaFrutas)

//for in -> nao preciso realizar uma variavel de contador do loop
for (var indice in novaListaFrutas){
    console.log (indice + ' - ' + novaListaFrutas[indice])
}

//metodo forEach de um vetor percorre e retorna todos os elementos do vetor
novaListaFrutas.forEach( fruta => {
    console.log(fruta)
})

//o metodo forEach - significa para cada item do vetor
//dentro do parenteses colocamos a variavel que ira 
//receber o conteudo de cada linha do vetor
//e com => {} informamos que ira execultar para
//cada linha
frutas.forEach( item => { 
    console.log ('item pelo forEach', item)
 } )

 //quando precisamos 
 frutas.forEach( (item, pos) => { 
    console.log ('item pelo forEach com posiçao', pos, item)
 } )