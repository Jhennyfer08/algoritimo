programa {
  funcao inicio() {
    
    inteiro i 
    inteiro resultado=0
    real numero, numero2

    escreva("Digite um número: ")
    leia(numero)

    escreva("Digite um outro número: ")
    leia(numero2)


    i=numero

   para(i; i<=numero2; i++){
    resultado = resultado+i
   } 

    escreva(resultado)
  
  }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 212; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */