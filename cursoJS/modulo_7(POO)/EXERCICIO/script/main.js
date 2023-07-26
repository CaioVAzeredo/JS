class ValidaFormulario {
    constructor() {
        this.frm = document.querySelector('.form')
        this.eventos()
    }
    eventos() {
        this.frm.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        const camposValidos = this.camposSaoValidos()
    }
    camposSaoValidos() {
        let valid = true
        for (let errorText of this.frm.querySelectorAll('.error-text')) {
            errorText.remove()
        }
        for (let campo of this.frm.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerHTML //.previousElementSibling pega o elemento anterior (o principal nesse caso é o input e o anterior é o label)
            if (!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar em branco`)
                valid = false
            }
        }
    }

    criaErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario()