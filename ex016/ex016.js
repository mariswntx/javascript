function gerar() {
    var numero = document.getElementById("numero").value
    
    document.getElementById("tabuada").innerHTML = `Tabuada do ${numero}`
    document.getElementById("resultado").innerHTML =""
    
    for (var conta = 1; conta <= 10; conta++) {
        var produto = Number(numero) * Number(conta) 
        document.getElementById("resultado").innerHTML += `${numero} X ${conta} = ${produto}<br>`
        
        
    }
    
}























