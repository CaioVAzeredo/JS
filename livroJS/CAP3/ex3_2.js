const prompt = require("prompt-sync")()
const veiculo = prompt("veiculo: ")
const preco = Number(prompt("preço do veiculo: "))
const entrada = preco * 0.50
const parcela = entrada/12
console.log(`Promoção: ${veiculo}`)
console.log(`Entrada de: ${entrada.toFixed(2)}`)
console.log(`12x de ${parcela.toFixed(2)}`) 