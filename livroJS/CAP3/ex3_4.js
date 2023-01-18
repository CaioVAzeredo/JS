const prompt = require("prompt-sync")()

const peso = Number(prompt("Peso da ração em kg: ") * 1000)
const consumo = Number(prompt("Consumo diario em grama: "))

const duracao = peso / consumo
const sobra = peso % consumo
console.log(`Duração: ${Math.floor(duracao)} dias  \nSobra: ${sobra}g`)