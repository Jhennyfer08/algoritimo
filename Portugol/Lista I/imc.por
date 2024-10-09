programa {
  funcao inicio() {
    
    real imc,peso,altura

    escreva( "Calcule seu IMC ")

    escreva( "Escreva seu peso: ")
    leia(peso)
    
    escreva( "Escreva sua altura: ")
    leia(altura)

    imc= peso/(altura*altura)
    limpa()

    se(imc <= 18.5){
    escreva( "Magreza, obesidade grau 0 ")
    }senao se(imc <= 24.9){
      escreva( "Normal, obesidade grau 0 ")
    }senao se(imc <= 29.9){
      escreva( "Sobrepeso, obesidade grau 1 ") 
    }senao se(imc <= 39.9){
      escreva( "Obesidade, grau 2 ")
    }senao{
      escreva( "Obesidade grave, grau 3 ")
    }
  }
}
