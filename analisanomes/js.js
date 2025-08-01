let n = document.getElementById ("txtn")
let res = document.getElementById ("res")


function registrar(){
    if (n.value.length == 0){
        window.alert("Por favor digite o nome primeiro!")
    } else {
        res.innerHTML = `Olá ${n.value}. <br>`
        res.innerHTML += `Seu nome tem ${n.value.replaceAll(" ","").length} letras.`   
    }
}

//replaceAll(" ","") --> não vai contar os espaços em branco.