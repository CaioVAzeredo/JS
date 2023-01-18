const frm = document.querySelector("form")
const resp = document.querySelector("h2")
const resp2 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    const nomefilme = frm.infilme.value
    const tempofilme = Number(frm.intempo.value)

    const horafilme = Math.floor((tempofilme / 60))
    const minfilme = tempofilme % 60

    resp.innerText = nomefilme
    resp2.innerText = `${horafilme} h(s) e ${minfilme} min(s)`

    e.preventDefault()
})