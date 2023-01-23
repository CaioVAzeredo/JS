const prompt = require("prompt-sync")()

const conta = Number(prompt("conta: "))
const parcela = Number(prompt("parcelas: "))

divisao = " "
for(let i = 1; i<= parcela; i++){
    conta = conta/parcela
}