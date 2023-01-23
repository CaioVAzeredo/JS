const frm = document.querySelector("form")
const atendendo = document.querySelector("#atendendo")
const resplista = document.querySelector("#lista")

const pacientes = []

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const nome = frm.inPaciente.value

    pacientes.push(nome)
    let lista = ""

    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1} - ${pacientes[i]}\n`
    }

    resplista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})


frm.bturgencia.addEventListener("click", () => {

    if (!frm.checkValidity()) {
        alert("informe um nome de paciente em carater de urgencia")
        frm.inPaciente.focus()
        return
    }

    const urgencia = frm.inPaciente.value
    pacientes.unshift(urgencia)
    let lista = ""

    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1} - ${pacientes[i]} \n`
    }

    resplista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})


frm.btatender.addEventListener("click", () => {

    let retira = " "
    const atender = frm.inPaciente.value


    retira = pacientes.splice(0, 1)
    lista = ""

    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1} - ${pacientes[i]} \n`
    }

    atendendo.innerText = retira
    resplista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})