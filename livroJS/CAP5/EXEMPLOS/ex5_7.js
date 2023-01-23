const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNum.value)
    let estrelas = ""

    for (let i = 1; i <= num; i++) {
        if (i % 2 == 1) {
            estrelas += "*"
        } else {
            estrelas += "-"
        }
    }
    resp.innerText = estrelas
})