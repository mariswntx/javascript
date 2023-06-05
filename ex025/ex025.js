var listausuario = []

listausuario = JSON.parse(localStorage.getItem('bdusuario'))
if (listausuario == null) {
    listausuario = []
}
exibirusuario()

console.log(listausuario)


function validarCadastro(senha, senha2) {
    if (senha2 != '' && senha != '') {
        return false
    } else {
        return true
    }
}

function cadastrar() {
    var nome = document.getElementById("nome").value

    var usuario = document.getElementById("usuario").value

    var senha = document.getElementById("senha").value

    var senha2 = document.getElementById("senha2").value


    if (nome == "" && senha == "" && senha2 == '') {
        alert('preencha todas as partes')


    }
    else {
        if (senha2 != senha) {
            alert('as senhas tem que estar iguais')
        }

        if (validarCadastro(senha, senha2)) {
            alert('senha invalida')
        }


    }
    var usuario = {
        nome: nome,
        senha: senha,
        usuario: usuario
    }
    listausuario.push(usuario)

    localStorage.setItem('bdusuario', JSON.stringify(listausuario))

    exibirusuario()

    document.getElementById("nome").value = ''
    document.getElementById("senha").value = ''
    document.getElementById("nome").focus()
    document.getElementById("senha2").value = ''
}


function exibirusuario() {
    
    document.getElementById('resultado').innerHTML = ''
    listausuario.forEach((item, pos) => {
        
        document.getElementById('resultado').innerHTML +=
            `<div
        <p><b>Nome:</b> ${item.nome} - <b>Login:</b>${item.usuario}
        <img src='excluir.svg' class='tirar' onclick='excluirUsuario(${pos})'>
        </div>`
    })

    //for (var i in listausuario) {
       // document.getElementById('resultado').innerHTML +=
           // ` Nome:${listausuario[i].nome} - login:${listausuario[i].usuario}<br>`
   // }
}

function excluirUsuario(pos){
    if(confirm('deseja realmente excluir este usuario?'))
    {
        listausuario.splice(pos, 1)
        localStorage.setItem('bdusuario', JSON.stringify(listausuario))
        exibirusuario()
    }
   
}