programa {
  funcao inicio() {
    
    real numero, i, tabuada

    escreva("Digite um número positivo: ")
    leia(numero)
    limpa()

    enquanto(numero<0){
      escreva("Esse número é negativo, digite um número positivo: ")
      leia(numero)
      limpa()
    }

    para(i=0; i<=10; i++){
      tabuada=numero*i
      escreva(numero, "x",i, "=",tabuada, "\n")
    }

  }
}
