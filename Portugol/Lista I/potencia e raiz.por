programa {

  inclua biblioteca Matematica --> mat
  funcao inicio() {

    real numero, potencia, raiz

     escreva( "Escreva um número: ")
     leia(numero)

      potencia = numero*numero
      raiz = mat.raiz(numero, 2.0) 
      limpa()

     escreva( "o número informado foi ",numero, " a raiz do número é ",raiz, " e sua potência é ",potencia)

  }
}
