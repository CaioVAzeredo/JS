const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {

    const nome = frm.inNome.value
    const altura = Number(frm.inAltura.value)

    const masculino = frm.inM.checked

    const peso = masculino ? 22 * Math.pow(altura, 2) : 22 * Math.pow(altura, 2)

    resp.innerText = `${nome}: seu peso ideal é ${peso.toFixed(2)}`

    e.preventDefault()
})

frm.addEventListener("reset", () => {
    resp.innerText = ""
})