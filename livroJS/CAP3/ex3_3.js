const prompt = require("prompt-sync")()

const salario = Number(prompt("salário: "))
const tempo = Number(prompt("tempo em anos: "))

const tempo1 = Math.floor(tempo / 4)
const salario1 = salario + (salario * (tempo1 * 0.01))

console.log(` ${tempo1} quadriênio(s)\n Salário final ${salario1}`)