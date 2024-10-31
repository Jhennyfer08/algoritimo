var resposta = ""
const rS = require ('readline-sync')
var i = 1
var lista = ["samuel"]
var remover = ""

var escolha = rS.question(`Escolha uma das opcoes abaixo: \n[1] Inserir \n[2] Apagar \n[3] Listar \n[4] Sair\n`)
do {
    
    if (escolha == 1) {   
       resposta = rS.question(`Digite o que deseja inserir:\n `)
       lista.unshift(resposta)
       
       for ( i; i <= lista.lenght; i++) {
        console.log(`${i}º - ${lista[i-1]}`)}
        console.clear()
        
        var escolha = rS.question(`O que voce deseja fazer agora? \n[1] Inserir \n[2] Apagar \n[3] Listar \n[4] Sair\n`)          
    }

     else{
        if(escolha ==  2){
            remover = rS.question(`Deseja deletar o primeiro ou ultimo item? \n[1] Primeiro \n[2] Ultimo\n`)

           
            if (remover == 1) {
                lista.shift (remover)
            } else{
                if(remover == 2){
                    lista.pop(remover)
                }          
            } 

            for(i;i<= lista.length; i++){
                console.log(`${i}º - ${lista[i-1]}`)
            }

            var escolha = rS.question(`Deseja realizar mais alguma acao? \n[1] Inserir \n[2] Apagar \n[3] Listar \n[4] Sair\n`)
            console.clear() 
        }  

            else{
                if(escolha == 3){
                    console.log(`Sua lista esta assim no momento: `)
                    for(i;i <= lista.length; i++){
                        console.log(`${i}º - ${lista[i-1]}`)
                    }
                
                        var escolha = rS.question(`Deseja realizar mais alguma acao? \n[1] Inserir \n[2] Apagar \n[3] Listar \n[4] Sair\n`)
                        console.clear()
                }
                else{if(escolha == 4){
                    console.log(`Muito obrigada. Tenha um bom dia!  `)
                    }
                }
            }  
        }           
    } while (escolha == 1 || escolha == 2 || escolha == 3)