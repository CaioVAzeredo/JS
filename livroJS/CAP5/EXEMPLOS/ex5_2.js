const frm = document.querySelector("form")
const resp = document.querySelector("#resp")


frm.addEventListener("submit", (e) => {
    const num = Number(frm.inNum.value)

    let resposta = " "
    
    for (let i = num; i >= 1; i = i - 1) {
        if (i != 1) {
            resposta += i + ", "
        }
        else {

            resposta += i + "."
        }
    }

    resp.innerText = `de ${num} até 1 temos:\n${resposta}`
    frm.inNum.value = ""
    
    frm.inNum.focus()
    e.preventDefault()
})