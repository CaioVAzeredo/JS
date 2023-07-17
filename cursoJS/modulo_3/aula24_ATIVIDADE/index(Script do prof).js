const frm = document.querySelector('form')

frm.addEventListener('submit', function (e) {
    e.preventDefault()
    const inputPeso = e.target.querySelector('#ipeso')
    const inputAltura = e.target.querySelector('#ialtura')

    const peso = Number(inputPeso.value)
    const alt = Number(inputAltura.value)

    const imc = getImc(peso, alt)
    const nivelImc = condicao(imc)

    if (!peso) {
        setResultado('PESO INVALIDO', false)
        return
    }
    if (!alt) {
        setResultado('ALTURA INVALIDA', false)
        return
    }
    const msg = `seu IMC é ${imc}. (${nivelImc})`
    setResultado(msg, true)

})
function condicao(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau ', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39) {
        return nivel[5]
    } 
     if (imc >= 34.9) {
        return nivel[4]
    } 
     if (imc >= 29.9) {
        return nivel[3]
    } 
     if (imc >= 24.9) {
        return nivel[2]
    } 
     if (imc >= 18.5) {
        return nivel[1]
    }
     if(imc < 18.5){
        return nivel[0]
    }

}
function getImc(peso, alt) {
    let imc = peso / (alt * alt)
    return imc.toFixed(2)
}
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resp')
    resultado.innerHTML = ''

    const p = criaP() //pegar informação da function criarP()
    resultado.appendChild(p) //inserir elemento dentro de resultado. Ficaria: <div><p></p></div>

    if(isValid){
        p.classList.add('bom')//adicionar class na tag
    }else{
        p.classList.add('mal')//adicionar class na tag
    }
    p.innerHTML = msg;
    
    frm.ipeso.focus()

}
function criaP() {
    const p = document.createElement('p') //elemento que eu quero criar, nesse caso um <p>
    /* p.classList.add('pResultado') //adicionar class na tag*/
    return p
}