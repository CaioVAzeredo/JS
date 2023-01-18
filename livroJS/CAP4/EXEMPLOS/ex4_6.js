const frm = document.querySelector("form")
const resp1 = document.querySelector("#resposta1")
const resp2 = document.querySelector("#resposta2")
const resp3 = document.querySelector("#resposta3")


frm.addEventListener("submit", (e) => {
    let valor = Number(frm.inValor.value)
    let valor100
    let valor50
    let valor10

    if (valor % 10 != 0) {
        alert("Esse valor nâo pode ser sacado")
        frm.inValor.focus()
        return
    }
    else {

        valor100 = Math.floor(valor / 100)
        valor50 = (valor % 100) / 50
        valor10 = ((valor % 100) % 50) / 10



        resp1.innerText = `notas de 100: ${valor100}`
        resp2.innerText = `notas de 50: ${Math.floor(valor50)}`
        resp3.innerText = `notas de 10: ${valor10}`


    }
    e.preventDefault()
})
