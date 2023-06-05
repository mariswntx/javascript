function exibir(){
var filmes = ['Interestelar', 'Star Wars', 'Herry Potter', 'Mario World', 'Vingadores', 'Barbie']
for (var i=0; i< filmes.length; i++){
    document.getElementById("resultado").innerHTML += `Posiçao no vetor ${i} - Filme ${filmes[i]}<br>`
}
}