function sortear() {
    var nome = document.getElementById("nome").value
    var mes = parseInt(Math.random() * 15)
        switch (mes) {
            case 1:
                document.getElementById("resultado").innerHTML = ` <strong><br> ${nome} vai casar em Janeiro <br> </strong> <img src="img/aliancas.jpg">`
                break
                case 2:
                document.getElementById("resultado").innerHTML = ` <strong><br> ${nome} vai casar em Fevereiro <br> </strong> <img src="img/aliancas.jpg">`
                break
                case 3: 
                document.getElementById("resultado").innerHTML = ` <strong><br> ${nome} vai casar em Março <br> </strong> <img src="img/aliancas.jpg">`
                break
                case 4:
                document.getElementById("resultado").innerHTML = ` <strong><br> ${nome} vai casar em Abril <br> </strong> <img src="img/aliancas.jpg">`
                break
                case 5:
                document.getElementById("resultado").innerHTML = ` <strong><br> ${nome} vai casar em Maio <br> </strong> <img src="img/aliancas.jpg">`
                break
                case 6:
                document.getElementById("resultado").innerHTML = ` <strong><br> ${nome} vai casar em Junho <br> </strong> <img src="img/aliancas.jpg">`
                break
                case 7:
                document.getElementById("resultado").innerHTML = ` <strong><br> ${nome} vai casar em Julho <br> </strong> <img src="img/aliancas.jpg">`
                break
                case 8:
                document.getElementById("resultado").innerHTML = ` <strong><br> ${nome} vai casar em Agosto <br> </strong> <img src="img/aliancas.jpg">`
                break
                case 9:
                document.getElementById("resultado").innerHTML = ` <strong><br> ${nome} vai casar em Setembro <br> </strong> <img src="img/aliancas.jpg">`
                break
                case 10:
                document.getElementById("resultado").innerHTML = ` <strong><br> ${nome} vai casar em Outubro <br> </strong> <img src="img/aliancas.jpg">`
                break
                case 11:
                document.getElementById("resultado").innerHTML = ` <strong><br> ${nome} vai casar em Novembro <br> </strong> <img src="img/aliancas.jpg">`
                break
                case 12:
                document.getElementById("resultado").innerHTML = ` <strong><br> ${nome} vai casar em Dezembro <br> </strong> <img src="img/aliancas.jpg">`
                break

                default:
                
                document.getElementById("resultado").innerHTML = ` <strong><br> ${nome} NÃO vai casar  <br> </strong> <img src="img/festa.avif">`
            
                
    }
}