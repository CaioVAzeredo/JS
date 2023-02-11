function meuEscopo() {
    const form = document.querySelector('.form')
    const resp = document.querySelector('.h2')

    const pessoas = []

    function recebeForm(evento) {
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        pessoas.push({
            nome: nome.value,
            sobrenome:sobrenome.value,
            peso: Number(peso.value),
            altura:Number(altura.value),
        })
        
        resp.innerHTML += `<p>Nome: ${nome.value} Sobrenome: ${sobrenome.value} Peso: ${peso.value} Altura: ${altura.value}</p>`

        console.log(pessoas)
        evento.preventDefault()
    }
    form.addEventListener('submit', recebeForm)
}
meuEscopo()