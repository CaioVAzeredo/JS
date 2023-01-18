const frm = document.querySelector("form")
const resp1 = document.querySelector("#lado")
const resp2 = document.querySelector("#triangulo")

frm.addEventListener("submit", (e) => {
    const ladoA = frm.inNum1.value
    const ladoB = frm.inNum2.value
    const ladoC = frm.inNum3.value

    let triangulo
    let resposta
    if (ladoA == ladoB && ladoB == ladoC) {
        triangulo = "Triângulo equilátero"
        resposta = " Lados podem formar um triângulo"
    }
    else{
        triangulo = "Triângulo escaleno "
        resposta = " Lados podem formar um triângulo"
    }
    if(ladoA == ladoB && ladoB != ladoC){
        triangulo = "Triangulo isósceles"
        resposta = " Lados podem formar um triângulo"
    }
    if(ladoA == 0 || ladoB == 0 || ladoC == 0){
        resposta = "NAO PODE SER FORMADO UM TRIÂNGULO"
    }

    resp1.innerText = `${resposta}`
    resp2.innerText = `${triangulo}`
    e.preventDefault()
})

frm.addEventListener("reset", () => {
    resp1.innerText = " "
    resp2.innerText = " "

})