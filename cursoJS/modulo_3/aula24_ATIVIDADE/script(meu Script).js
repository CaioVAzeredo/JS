function calculoIMC() {
    const frm = document.querySelector("form")
    const resp = document.querySelector("#resp")

    function Calculo(e) {
        const peso = Number(document.querySelector("#ipeso").value)
        const alt = Number(document.querySelector("#ialtura").value)
       
        if (peso < 10 || peso > 595) {
            resp.innerText = `PESO INVÁLIDO`
            resp.style.color = "#500000"
            resp.style.background = "#ff0000"
        }
        if (alt < 0.54 || alt > 2.51) {
            resp.innerText = `ALTURA INVÁLIDA`
            resp.style.color = "#500000"
            resp.style.background = "#ff0000"
        }

        let imc = peso / (alt * alt)

        if (imc < 18.5) {
            resp.innerText = `ABAIXO DO PESO`
            resp.style.color = "rgb(1, 71, 1)"
            resp.style.background = "rgb(21, 223, 3)"
        } else if (imc > 18.5 && imc < 24.9) {
            resp.innerText = `PESO NORMAL`
            resp.style.color = "rgb(1, 71, 1)"
            resp.style.background = "rgb(21, 223, 3)"
        } else if (imc > 25 && imc < 29.9) {
            resp.innerText = `SOBREPESO`
            resp.style.color = "#500000"
            resp.style.background = "#ff0000"
        } else if (imc > 30 && imc < 34.9) {
            resp.innerText = `OBESIDADE GRAU 1`
            resp.style.color = "#500000"
            resp.style.background = "#ff0000"
        } else if (imc > 35 && imc < 39.9) {
            resp.innerText = `OBESIDADE GRAU 2`
            resp.style.color = "#500000"
            resp.style.background = "#ff0000"
        } else if (imc > 40) {
            resp.innerText = `OBESIDADE GRAU 3`
            resp.style.color = "#500000"
            resp.style.background = "#ff0000"
        }

        frm.ipeso.value = ''
        frm.ialtura.value = ''
        frm.ipeso.focus()

        e.preventDefault()
    }
    frm.addEventListener('submit', Calculo)
}
calculoIMC()