const frm = document.querySelector("form")
const resp1 = document.querySelector("#promocao")
const resp2 = document.querySelector("#preco1")

frm.addEventListener("submit", (e) => {
 const medicamento = frm.inmedicamento.value
 const valor = Number(Math.floor(2*(frm.inpreco.value)))

 resp1.innerText = `Promoção do medicamento: ${medicamento}`
 resp2.innerText = `Leve dois por apenas R$: ${valor.toFixed(2)}`

    e.preventDefault()
})