const frm = document.querySelector("form")
const resp = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")



frm.addEventListener("submit", (e) => {

    let aprovado = 0
    let reprovado = 0

    let num1 = Number(frm.inNum1.value)
    let num2 = Number(frm.inNum2.value)
    let num3 = Number(frm.inNum3.value)

    let media = (num1 + num2 + num3) / 3
    if (media > 7) {
        aprovado++
        resp.innerText = " APROVADO"

    } else {
        reprovado++
        resp.innerText = "REPROVADO"

    }

    resp2.innerText = `APROVADOS: ${aprovado} \nREPROVADOS: ${reprovado}`

    frm.num1.value = ""
    frm.num2.value = ""
    frm.num3.value = ""
    frm.num1.focus()



    e.preventDefault()
})