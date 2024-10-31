const rs = require (`readline-sync`)
var i = 0
var lista = [`Jhennyfer`]
var remover = ""
var escolha 



do{
    escolha = parseInt(rs.question(`Escolha uma acao para realizar na lista: \n[1] Inserir \n[2] Deletar \n[3] Listar \n[4] Sair\n`));
    
    switch (escolha) {
    case 1: 
    lista.unshift(rs.question(`Digite o que deseja inserir: \n`));

    for (i; i < lista.length; i++) {
    console.log(`${i+1}º - ${lista[i]}`) }
    
    escolha = rs.question(`Deseja realizar mais alguma acao? \n[1] Inserir \n[2] Deletar \n[3] Listar \n[4] Sair\n `);
    console.clear();

   break;

    case 2:
        remover = parseInt(rs.question(`Voce deseja apagar o primeiro ou ultimo item da lista? \n[1] Primeiro \n[2] Ultimo \n`));

        switch (remover) {
            case 1:
                lista.shift()
                break;
        
            case 2:
                lista.pop()
                break;
        } 

        for (i; i <= lista.length; i++) {
        console.log(`${i+1}º - ${lista[i]}`)} 

       escolha = rs.question(`Deseja realizar mais alguma acao? \n[1] Inserir \n[2] Deletar \n[3] Listar \n[4] Sair\n `);
       console.clear;
        break;

    case 3:

        for (i; i <= lista.length; i++) {
        console.log(`${i+1}º - ${lista[i]}`)}

        escolha = rs.question(`Deseja realizar mais alguma acao? \n[1] Inserir \n[2] Deletar \n[3] Listar \n[4] Sair\n `);       
        break;

}}while(escolha != 4  );
