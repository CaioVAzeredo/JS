const frm = document.querySelector("form")
const resp = document.querySelector("#saida")

frm.addEventListener("submit", (e) => {

    const valor = Number(frm.invalor.value)
    const tempo = Number(frm.intempo.value)

    const valor1 = Number(Math.ceil(tempo / 15)*valor)

    resp.innerText = `valor R$: ${valor1.toFixed(2)}`
    e.preventDefault()
})