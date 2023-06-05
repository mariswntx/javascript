function gerar() {
    document.getElementById("tabuada").innerHTML = `Relação de N° impares ate o 20`
    document.getElementById("resultado").innerHTML =""
    for (var contador = 1; contador <= 20; contador++) 
        if (contador % 2 == 1) { 
            document.getElementById("resultado").innerHTML +=` ${contador}<br> `
            
        } 
        
}