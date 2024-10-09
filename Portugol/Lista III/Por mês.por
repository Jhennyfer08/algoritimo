programa {
  funcao inicio() {
    real saldo=0.0, soma=0.0, media=0.0
    inteiro i=1
    real porcento1,porcento2,porcento3,porcento5


    enquanto(i<=12){
    limpa()
    escreva("Qual foi seu saldo total do ",i, " mês? ")
    leia(saldo)

    soma = soma+saldo
    i = i+1
    }

    
    media = soma/12

    porcento1 = media * 0.1
    porcento2 = media * 0.2
    porcento3 = media * 0.35
    porcento5 = media * 0.55
    

    se(media>0 e media<=350.00){
      escreva("A média aritmética do seu saldo é equivalente a ",media," e seu percentual de empréstimo é igual á 10% do seu saldo médio, ou seja ",porcento1)
    }senao se(media<=600){
      escreva("A média aritmética do seu saldo é equivalente a ",media," e seu percentual de empréstimo é igual á 20% do seu saldo médio, ou seja ",porcento2)
    } senao se(media<=850){
      escreva("A média aritmética do seu saldo é equivalente a ",media," e seu percentual de empréstimo é igual á 35% do seu saldo médio, ou seja ",porcento3)
    } senao{
      escreva("A média aritmética do seu saldo é equivalente a ",media," e seu percentual de empréstimo é igual á 55% do seu saldo médio, ou seja ",porcento5)
    }
    }
  }

