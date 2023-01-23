const prompt = require("prompt-sync")()

const produto = prompt(`Insira o nome do produto: `)
const etiqueta = Number(prompt("Quantas etiquetas a serem impressas: "))



for (let i = 1; i <= etiqueta/2; i++) {
    console.log( `${produto.padEnd(30)}${produto.padEnd(30)}`)
}
if(etiqueta % 2==1){
    console.log(produto)
}
