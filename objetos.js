var listaCarros = [

]

//declarando um objeto e informando os atributos
//Todo objeto declarado com { }
var carro = {
    ano: '2020',
    modelo: 'Gol',
    marca: 'VW'
}
//Para exibir o atributo do objeto faço da seguinte forma objeto.atributo
    console.log (carro.ano + ' - ' + carro.modelo)
    console.log (`${carro.modelo} - ${carro.ano}`)

    //adicionando o objeto carro ao vetor listaCarro
    listaCarros.push(carro)
    console.log(listaCarros.length)

    //novo objeto - novo carro
    carro = {
        ano: '2022',
        modelo: 'onix',
        marca: 'GM'
    }
    listaCarros.push(carro)
    console.log(listaCarros)

    for (var andar in listaCarros){
        console.log ( listaCarros[andar].modelo )
    }