
var numero  = parseFloat (prompt(`Digite um número: `))
var confirmacao = Number.isInteger(numero)
document.body.innerHTML += `O número digitado foi: ${numero} <br>`
soma = numero + 5
document.body.innerHTML += `A soma do número digitado mais 5 é igual á : <b>${soma}</b> <br>`
document.body.innerHTML += `A raiz quadrada do número digitado é igual á :<b> ${Math.sqrt(numero)}</b> <br>`
document.body.innerHTML += `O resultado do número arrendondado para menor é igual á : <b>${Math.round(numero)}</b> <br>`
document.body.innerHTML += `O resultado do número arrendondado para maior é igual á :<b> ${Math.floor(numero)}</b> <br>`
document.body.innerHTML += `O número com 2 casas decimais é : ${numero.toFixed(2)}`

if (confirmacao == true) {
    document.body.innerHTML += `<br> O tipo primitivo do número é inteiro`
} else {
        document.body.innerHTML += `<br> O tipo primitivo do número não é inteiro`
}
