const frm = document.querySelector("form")
const resp = document.querySelector("#resposta")

frm.addEventListener("submit", (e) => {

    let num1 = Number(Math.sqrt(frm.inNumero.value))

    if (num1 % 1 == 0) {
        resp.innerText = `a raiz quadrada é: ${num1}`
    }
    else {
        resp.innerText = `Não tem raiz quadrada exata`
    }

    e.preventDefault()
})

frm.addEventListener("reset", () => {
    resp.innerText = ""
})
