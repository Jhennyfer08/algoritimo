var nome = prompt("Digite seu nome: ")

window.document.body.innerHTML=`O nome informado foi <strong> ${nome} </strong>. <br> O nome ${nome} possui <strong> ${nome.length}</strong> letras`
window.document.body.innerHTML+= `<br> A segunda letra do nome é ${nome.charAt(1)}`
window.document.body.innerHTML+= `<br> A primeira letra "a" está ${nome.indexOf("a")+1}`
window.document.body.innerHTML +=  `<br>A última letra "a" está ${nome.lastIndexOf("a")+1}`


