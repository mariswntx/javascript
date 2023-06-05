var listaCadastro = []
listaCadastro = JSON.parse(localStorage.getItem('bdusuario'))
if (listaCadastro == null) {
    listaCadastro = []
}
console.log(listaCadastro);

function botaoEntrar() {
    var usuario = document.getElementById("nome").value
    var senha = document.getElementById("senha").value

    var encontrado = false
    listaCadastro.forEach((item, i) => {
        if (usuario == item.usuario && senha == item.senha) {
            alert('achei')
            encontrado = true
        }
    })

    if (encontrado == false) {
        alert ('Usuário não encontrado')
    }
}
    //for (var i in listaCadastro) {
    //    if(usuario == listaCadastro[i].usuario && senha == listaCadastro[i].senha){
     //       alert ('achei')
     //       return true
    //    }
   // }
   // alert('não')

