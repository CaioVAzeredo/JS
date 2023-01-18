const frm = document.querySelector("form")
const resp = document.querySelector("#resposta")

frm.addEventListener("submit", (e) => {
    const horabr = Number(frm.inHora.value)

    let horafr = horabr + 5

    if (horafr > 24) {
        horafr = horafr - 24
    }

    resp.innerText = `horário na frança ${horafr.toFixed(2)}`

    e.preventDefault()
})


frm.addEventListener("reset", () => {
    resp.innerText = " "
})