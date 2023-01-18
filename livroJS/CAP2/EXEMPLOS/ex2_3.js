const frm = document.querySelector("form")
const resp1 = document.querySelector("#outresp1")
const resp2 = document.querySelector("#outresp2")
const resp3 = document.querySelector("#outresp3")

frm.addEventListener("submit", (e) => {
    const veiculo = frm.inveiculo.value
    const preco = Number(frm.inpreco.value)

    const entrada = preco*0.50
    const parcela = entrada/12
    
    resp1.innerText = `Promoção: ${veiculo}`
    resp2.innerText = `Entrada de RS: ${entrada.toFixed(2)}`
    resp3.innerText = `+12x de RS: ${parcela.toFixed(2)}`
    
    e.preventDefault()
})