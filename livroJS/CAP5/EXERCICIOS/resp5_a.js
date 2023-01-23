const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const fruta = frm.infruta.value
    const numero = frm.innum.value

    contador = ""
    for (let i = 1; i <= numero; i++) {
        if (i < numero) {
            contador += fruta + "*"
        } else {
            contador += fruta + ""
        }
    }
    resp.innerText = contador

})