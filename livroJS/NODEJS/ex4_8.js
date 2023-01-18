const prompt = require("prompt-sync")()
let total = Number(prompt("insira o total: "))
let a = Math.floor(total / 20)
let valorfinal

if (a <= 6) {
    valorfinal = 20 + ((total % 20) / a)
}
else {
    a = 6
    valorfinal = total / 6
}
console.log(`parcelas de ${a}x com o valor de: ${valorfinal.toFixed(2)}`)