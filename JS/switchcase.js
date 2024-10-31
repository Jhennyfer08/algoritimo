const rs = require(`readline-sync`)
var i = 0
var lista = [`Jhennyfer`]
var remover = ""
var escolha =


    escolha = parseInt(rs.question(`Escolha uma acao para realizar na lista: \n[1] Inserir \n[2] Deletar \n[3] Listar \n[4] Sair\n`))

do {

    if (escolha < 1 || escolha >4) {
        console.log(`Nao foi isso que foi pedido, gostaria de tentar novamente? `)
        continue;
    }

    switch (escolha) {
        case 1:
            var inserir = rs.question(`Digite o que deseja inserir: \n`)
            lista.push(inserir)

            for (i; i < lista.length; i++) {
                console.log(`${i + 1}º - ${lista[i]}`)
            }

            console.clear()
            break;

        case 2:
            inserir = parseInt(rs.question(`Qual item voce deseja apagar? `))

            lista.splice(inserir -1,1)


            for (i; i <= lista.length; i++) {
                console.log(`${i + 1}º - ${lista[i]}`)
            }
            break;

        case 3:

            for (i; i <= lista.length; i++) {
                console.log(`${i + 1}º - ${lista[i]}`)
            }
            break;
    }
} while (escolha != 4)