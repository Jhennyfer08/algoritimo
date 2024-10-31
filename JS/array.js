var i = -1
var lixeira 
let nomes = ["jhennyfer", "josy", "karine"]

nomes.push("Nalysson")
console.log ("Tamanho do Array: ",nomes.length)
console.log (nomes)

for(i=0; i<= nomes.length; i++){
    console.log("\n", nomes[i])
}

nomes.unshift("kamilli")
console.log (nomes)

lixeira = nomes.pop(1)
console.log (nomes)