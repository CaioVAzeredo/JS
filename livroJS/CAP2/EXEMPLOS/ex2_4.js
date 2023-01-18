const frm = document.querySelector("form")
const resp1 = document.querySelector("#Resp1")

frm.addEventListener("submit", (e) => {

    const preco = Number(frm.inpreco.value)
    const cliente = Number(frm.incliente.value)
    const gramas = (cliente/1000)*preco


    resp1.innerText = `preço do cliente ${gramas.toFixed(2)}`

    e.preventDefault()
})