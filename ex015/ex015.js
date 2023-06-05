function gerar() {
    var numero = document.getElementById("numero").value
    document.getElementById("tabuada").innerHTML = `Tabuada do ${numero}`
    document.getElementById("resultado").innerHTML =""
    var conta = 1 
    while (conta <= 10 ) {
        
        var produto = Number(numero) * Number(conta) 
        document.getElementById("resultado").innerHTML += `${numero} X ${conta} = ${produto}<br>`
        conta++
        
    }
    
}