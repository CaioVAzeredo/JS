const prompt = require("prompt-sync")()
let pessoas = Number(prompt("insira a quantidade de pessoas: "))
let peixe = Number(prompt("quantidades de peixes: "))
let valor = pessoas * 20
let valortotal

if (peixe != 0) {
    valortotal = valor + (12 * (peixe - pessoas))
}
else{
    valortotal = valor
}

console.log(`Pagar R$ ${valortotal.toFixed(2)}`)


