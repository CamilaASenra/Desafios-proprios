
var a1 = window.document.getElementById("a")
var b1 = window.document.getElementById("b")
var c1 = window.document.getElementById("c")
var res = document.getElementById("res")



function calcular(){
    if (a1.value.length == 0 || b1.value.length == 0 || c1.value.length == 0){
        alert("Há algum campo em branco, favor preencher todos os dados!")
    } else{
        var a = (a1.value)
        var b = (b1.value)
        var c = (c1.value)
        var delta = (b**2)-(4*a*c)
        var x1 = ((-b + Math.sqrt(delta))/(2*a))
        var x2 = ((-b - Math.sqrt(delta))/(2*a))
        res.innerHTML = (`X1 = ${(x1)} e X2 = ${(x2)}.`)
    }
}
