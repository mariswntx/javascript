function logar(){
    var usuario = document.getElementById("usuario").value

    var senha = document.getElementById("senha").value

    if ( usuario == "adm" && senha == "123"){
        document.getElementById("resultado").innerHTML = ` <strong class="certo"> Bem vindo adm </strong>`
    }

    else{
        document.getElementById("resultado").innerHTML = `<strong class="errado"> Usuario ou senha errado </strong>`

    }

}