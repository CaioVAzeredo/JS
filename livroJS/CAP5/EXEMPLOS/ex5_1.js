const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    const num = Number(frm.inNumero.value)

    let resposta = ""
    for (let i = 1; i <= 10; i++) {
        resposta = `${resposta}${num} x ${i} = ${num * i}\n`
    }

    resp.innerText = `${resposta}`

    e.preventDefault()
})

frm.addEventListener("reset", ()=>{
    resp.innerText = " "
})

