const prompt = require("prompt-sync")()
let pessoa = Number(prompt("quantidade de pessoas: "))
let peixe1 = Number(prompt("peixes extras: "))
let valor = pessoa * 20
let final

if (peixe1 != 0) {
    final = (peixe1 * 12) + valor
}
else {
    final = valor
}

console.log(`valor final ${final.toFixed(2)}`)