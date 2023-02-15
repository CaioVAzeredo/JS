const frm = document.querySelector('form')

frm.addEventListener('submit', function(e){
    e.preventDefault()
    const inputPeso = e.target.querySelector('#ipeso')
    const inputAltura = e.target.querySelector('#ialtura')

    const peso = Number(inputPeso.value)
    const alt = Number(inputAltura.value)

    if(!peso){
        setResultado('PESO INVALIDO', false)
        return
    }
    if(!alt){
        setResultado('ALTURA INVALIDA', false)
        return
    }
    setResultado(getImc(peso, alt))

})







function getImc(peso, alt){
    let imc = peso / (alt * alt)
    return imc
}





function setResultado(msg, isValid){
    const resultado = document.querySelector('#resp')
    resultado.innerHTML = ''

    const p = criaP() //pegar informação da function criarP()
    resultado.appendChild(p) //inserir elemento dentro de resultado. Ficaria: <div><p></p></div>
    p.innerHTML = msg ;

}





function criaP(){
    const p = document.createElement('p') //elemento que eu quero criar, nesse caso um <p>
   /* p.classList.add('pResultado') //adicionar class na tag*/
    return p
}