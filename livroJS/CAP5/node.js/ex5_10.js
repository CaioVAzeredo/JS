const prompt = require("prompt-sync")()

const conta = Number(prompt("conta: "))
const parcela = Number(prompt("parcelas: "))
const valor = Math.floor((conta / parcela).toFixed(2))

for (let i = 1; i < parcela; i++) {
    console.log(`${i}° Parcela: ${valor} reais`)
}
console.log(`${parcela}° Parcela: ${(valor+(conta % parcela)).toFixed(2)} reais`)

console.log(conta%parcela)
console.log(conta/parcela)