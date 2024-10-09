programa {
  funcao inicio() {
    
    inteiro number, i, resultado=0

    escreva("Digite um número inteiro para receber sua tabuada: ")
    leia(number)
    limpa()

    para(i=0;i<=10;i++){
      resultado = number*i
      escreva(number,"x",i,"=",resultado,"\n")
    }
    
   

  }
}
