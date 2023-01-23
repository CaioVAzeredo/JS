const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const chin = Number(frm.inNum.value)
    const ano = Number(frm.inAno.value)

    let contador = ""
    let soma = chin

    for (let i = 2; i <= ano; i++) {
        soma = soma * 3
        contador += `${i}° Ano(s): ` + `${soma} chinchilas` + "\n"
    }

    resp.innerText = `1° Ano(s): ${chin} chinchilas` + `\n` + contador
})