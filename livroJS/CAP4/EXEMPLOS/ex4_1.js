const frm = document.querySelector("form")
const resp1 = document.querySelector("#primeiraResp")
const resp2 = document.querySelector("#segundaResp")
frm.addEventListener("submit", (e) => {

    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = (nota1 + nota2) / 2


    if (media >= 7) {
        resp2.innerText = `Parabens, ${nome}. Aprovado`
        resp2.style.color = "blue"
    }
    else {
        resp2.innerText = `Poxa, ${nome}. Reprovado`
        resp2.style.color = "red"
    }
    resp1.innerText = `media ${media}`

    e.preventDefault()
})