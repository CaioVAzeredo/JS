const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) => {
    
    const produto = frm.inproduto.value
    const preco = Number(frm.inpreco.value)
    const preco1 = preco/2
    const preco2 = preco + preco + preco1

    resp1.innerText = `${produto} - Promoção leve 3 por ${preco2.toFixed(2)}`
    resp2.innerText = `O terceiro produto custa apenas ${preco1.toFixed(2)}`

    e.preventDefault()
})