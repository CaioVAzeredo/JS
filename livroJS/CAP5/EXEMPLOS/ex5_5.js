const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")


let resposta = ""
let numContas = 0
let valTotal = 0



frm.addEventListener("submit", (e) => {
e.preventDefault()

const desc = frm.inDesc.value
const valor = Number(frm.inNum.value)

numContas++

valTotal += valor
resposta = resposta + desc + "- RS " + valor.toFixed(2) + "\n"


resp1.innerText =`${resposta}-------------------------------`
resp2.innerText = `${numContas}  -   ${valTotal}`

frm.inDesc.value = ""
frm.inNum.value = ""
frm.inDesc.focus()
})