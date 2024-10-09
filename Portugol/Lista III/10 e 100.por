programa {
  funcao inicio() {
    
    inteiro i, resultado=0
    real numero, numero2

    escreva("Digite um número: ")
    leia(numero)

    escreva("Digite um outro número maior que o superior: ")
    leia(numero2)

    enquanto(numero>=numero2){
      escreva("O primeiro número deve ser menor que o segundo:")
      leia(numero2)
      limpa()
    }

    i=numero

   para(i; i<=numero2; i++){
    resultado = resultado+i
   } 

    escreva(resultado)
  
  }
}
