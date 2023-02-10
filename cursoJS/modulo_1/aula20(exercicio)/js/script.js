function meuEscopo(){
const form = document.querySelector('.form')
const resp = document.querySelector('.h2')

const pessoas = []

function recebeForm(evento){
    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    evento.preventDefault()
    console.log(nome.value, sobrenome.value, peso.value, altura.value)
}
form.addEventListener('submit', recebeForm)
}
meuEscopo()