var tela = window.document.getElementById("display")
var n1 = 0
var n2 = 0
var se = 0

var ce = window.document.getElementById("apagar")
ce.addEventListener("click", clicarce);
ce.addEventListener("mouseenter", entrarce);
ce.addEventListener("mouseout", sairce);
function clicarce(){
    tela.innerHTML = ""
    n1 = ""
    n2 = ""
    se = ""
}
function entrarce(){
    ce.style.background = "gray"
}
function sairce(){
    ce.style.background = "aliceblue"
}

var um = window.document.getElementById("um")
um.addEventListener("click", clicar1);
um.addEventListener("mouseenter", entrar1);
um.addEventListener("mouseout", sair1);
function clicar1(){
    tela.innerHTML += "1"
    um.style.color = "white"
    if (se == ""){
        n1 += "1"
    } else {
        n2 += "1"
    }
}
function entrar1(){
    um.style.background = "gray"
}
function sair1(){
    um.style.background = "aliceblue"
    um.style.color = "black"
}

var dois = window.document.getElementById("dois")
dois.addEventListener("click", clicar2);
dois.addEventListener("mouseenter", entrar2);
dois.addEventListener("mouseout", sair2);
function clicar2(){
    tela.innerHTML += "2"
    dois.style.color = "white"
    if (se == ""){
        n1 += "2"
    } else {
        n2 += "2"
    }    
}
function entrar2(){
    dois.style.background = "gray"
}
function sair2(){
    dois.style.background = "aliceblue"
    dois.style.color = "black"
}

var tres = window.document.getElementById("tres")
tres.addEventListener("click", clicar3);
tres.addEventListener("mouseenter", entrar3);
tres.addEventListener("mouseout", sair3);
function clicar3(){
    tela.innerHTML += "3"
    tres.style.color = "white"
    if (se == ""){
        n1 += "3"
    } else {
        n2 += "3"
    }    
}
function entrar3(){
    tres.style.background = "gray"
}
function sair3(){
    tres.style.background = "aliceblue"
    tres.style.color = "black"
}

var quatro = window.document.getElementById("quatro")
quatro.addEventListener("click", clicar4);
quatro.addEventListener("mouseenter", entrar4);
quatro.addEventListener("mouseout", sair4);
function clicar4(){
    tela.innerHTML += "4"
    quatro.style.color = "white"
    if (se == ""){
        n1 += "4"
    } else {
        n2 += "4"
    }    
}
function entrar4(){
    quatro.style.background = "gray"
}
function sair4(){
    quatro.style.background = "aliceblue"
    quatro.style.color = "black"
}

var cinco = window.document.getElementById("cinco")
cinco.addEventListener("click", clicar5);
cinco.addEventListener("mouseenter", entrar5);
cinco.addEventListener("mouseout", sair5);
function clicar5(){
    tela.innerHTML += "5"
    cinco.style.color = "white"
    if (se == ""){
        n1 += "5"
    } else {
        n2 += "5"
    }    
}
function entrar5(){
    cinco.style.background = "gray"
}
function sair5(){
    cinco.style.background = "aliceblue"
    cinco.style.color = "black"
}

var seis = window.document.getElementById("seis")
seis.addEventListener("click", clicar6);
seis.addEventListener("mouseenter", entrar6);
seis.addEventListener("mouseout", sair6);
function clicar6(){
    tela.innerHTML += "6"
    seis.style.color = "white"
    if (se == ""){
        n1 += "6"
    } else {
        n2 += "6"
    }    
}
function entrar6(){
    seis.style.background = "gray"
}
function sair6(){
    seis.style.background = "aliceblue"
    seis.style.color = "black"
}

var sete = window.document.getElementById("sete")
sete.addEventListener("click", clicar7);
sete.addEventListener("mouseenter", entrar7);
sete.addEventListener("mouseout", sair7);
function clicar7(){
    tela.innerHTML += "7"
    sete.style.color = "white"
    if (se == ""){
        n1 += "7"
    } else {
        n2 += "7"
    }    
}
function entrar7(){
    sete.style.background = "gray"
}
function sair7(){
    sete.style.background = "aliceblue"
    sete.style.color = "black"
}

var oito = window.document.getElementById("oito")
oito.addEventListener("click", clicar8);
oito.addEventListener("mouseenter", entrar8);
oito.addEventListener("mouseout", sair8);
function clicar8(){
    tela.innerHTML += "8"
    oito.style.color = "white"
    if (se == ""){
        n1 += "8"
    } else {
        n2 += "8"
    }    
}
function entrar8(){
    oito.style.background = "gray"
}
function sair8(){
    oito.style.background = "aliceblue"
    oito.style.color = "black"
}

var nove = window.document.getElementById("nove")
nove.addEventListener("click", clicar9);
nove.addEventListener("mouseenter", entrar9);
nove.addEventListener("mouseout", sair9);
function clicar9(){
    tela.innerHTML += "9"
    nove.style.color = "white"
    if (se == ""){
        n1 += "9"
    } else {
        n2 += "9"
    }    
}
function entrar9(){
    nove.style.background = "gray"
}
function sair9(){
    nove.style.background = "aliceblue"
    nove.style.color = "black"
}

var zero = window.document.getElementById("zero")
zero.addEventListener("click", clicar0);
zero.addEventListener("mouseenter", entrar0);
zero.addEventListener("mouseout", sair0);
function clicar0(){
    tela.innerHTML += "0"
    zero.style.color = "white"
    if (se == ""){
        n1 += "0"
    } else {
        n2 += "0"
    }    
}
function entrar0(){
    zero.style.background = "gray"
}
function sair0(){
    zero.style.background = "aliceblue"
    zero.style.color = "black"
}

var virg = window.document.getElementById("virg")
virg.addEventListener("click", clicarv);
virg.addEventListener("mouseenter", entrarv);
virg.addEventListener("mouseout", sairv);
function clicarv(){
    tela.innerHTML += "."
    virg.style.color = "white"
    if (se == ""){
        n1 += "."
    } else {
        n2 += "."
    }    
}
function entrarv(){
    virg.style.background = "gray"
}
function sairv(){
    virg.style.background = "aliceblue"
    virg.style.color = "black"
}

var soma = window.document.getElementById("soma")
soma.addEventListener("click", clicars)
soma.addEventListener("mouseenter", entrars)
soma.addEventListener("mouseout", sairs)
function clicars(){
    se = "somar"
    tela.innerHTML += "+"
    soma.style.color = "white"
}
function entrars(){
    soma.style.background = "gray"
}
function sairs(){
    soma.style.background = "aliceblue"
    soma.style.color = "black"
}

var multi = window.document.getElementById("mult")
multi.addEventListener("click", clicarm)
multi.addEventListener("mouseenter", entrarm)
multi.addEventListener("mouseout", sairm)
function clicarm(){
    se = "multiplicar"
    tela.innerHTML += "*"
    multi.style.color = "white"
}
function entrarm(){
    multi.style.background = "gray"
}
function sairm(){
    multi.style.background = "aliceblue"
    multi.style.color = "black"
}

var div = window.document.getElementById("div")
div.addEventListener("click", clicard)
div.addEventListener("mouseenter", entrard)
div.addEventListener("mouseout", saird)
function clicard(){
    se = "dividir"
    tela.innerHTML += "/"
    div.style.color = "white"
}
function entrard(){
    div.style.background = "gray"
}
function saird(){
    div.style.background = "aliceblue"
    div.style.color = "black"
}

var sub = window.document.getElementById("sub")
sub.addEventListener("click", clicarsub)
sub.addEventListener("mouseenter", entrarsub)
sub.addEventListener("mouseout", sairsub)
function clicarsub(){
    tela.innerHTML += "-"
    sub.style.color = "white"
    se = "subtracao"            
}
function entrarsub(){
    sub.style.background = "gray"
}
function sairsub(){
    sub.style.background = "aliceblue"
    sub.style.color = "black"
}

var igual = window.document.getElementById("igual")
igual.addEventListener("click", clicari)
igual.addEventListener("mouseenter", entrari)
igual.addEventListener("mouseout", sairi)
function clicari(){
    igual.style.color = "white"
    if (se == "somar"){
        var res = Number(n1) + Number(n2)
        tela.innerHTML = res
        n1 = res
        n2 = ""
        se = ""
    } else if (se == "multiplicar"){
        var res = Number(n1) * Number(n2)
        tela.innerHTML = res
        n1 = res
        n2 = ""
        se = ""
    } else if (se == "dividir"){
        var res = Number(n1) / Number(n2)
        tela.innerHTML = res
        n1 = res
        n2 = ""
        se = ""
    } else if (se == "subtracao"){
        var res = Number(n1) - Number(n2)
        tela.innerHTML = res
        n1 = res
        n2 = ""
        se = ""
    }
}
function entrari(){
    igual.style.background = "gray"
}
function sairi(){
    igual.style.background = "aliceblue"
    igual.style.color = "black"
}