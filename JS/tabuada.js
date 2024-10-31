var i, resultado = 0
var numero = Number(prompt("Digite um número: "))
var numero2= Number(prompt("Digite outro número: "))

i=numero

for(i;i<=numero2;i++){
    resultado = resultado + i
}

alert("A soma dos intervalos dos números é equivalente a: "+resultado)