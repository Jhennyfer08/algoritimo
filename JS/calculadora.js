var operacao = prompt(`Qual operação tem interesse em fazer? \n[+] [-] [x] [/] \n`)
var num1 =  Number(prompt(`Digite um número: `))
var num2 =  Number(prompt(`Digite um outro número: `))
var resultado 


switch (operacao) {
    case "+" || "mais" || "adição" || "soma":
       resultado = num1 + num2
       window.document.body.innerHTML = prompt(`A adição dos números ${num1} e ${num2} é igual á ${resultado}`) 
    break;

    case "-" || "menos" || "subtração":
        resultado = num1 - num2
        window.document.body.innerHTML = prompt(`A subtração dos números ${num1} e ${num2} é igual á ${resultado}`) 
    break;

    case "x" || "X" || "*" || "multiplicação" || "vezes":
        resultado = num1 * num2
        window.document.body.innerHTML = prompt(`A multiplicação dos números ${num1} e ${num2} é igual á ${resultado}`) 
    break;

    case "/" || "divisão" || "fração":
        prompt(`A divisão com o número 0 é impossível pois sempre resulta em 0, portanto tenha o bom senso e não digite o 0 na divisão, ok? `)
        resultado = num1 / num2
        window.document.body.innerHTML = prompt(`A divisão dos números ${num1} e ${num2} é igual á ${resultado}`) 
    break;
}
