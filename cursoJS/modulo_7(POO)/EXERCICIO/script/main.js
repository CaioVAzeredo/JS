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
        const senhasValidas = this.senhasValidas()
        
        
        if(camposValidos && senhasValidas){
            alert('formulário enviado')
            this.frm.submit()
        }
    }
    senhasValidas() {
        let valid = true

        const senha = this.frm.querySelector('.senha')
        const repSenha = this.frm.querySelector('.repSenha')

        if (senha.value !== repSenha.value) {
            valid = false
            this.criaErro(senha, 'Campo senha e repetir senha precisam ser iguais')
            this.criaErro(repSenha, 'Campo senha e repetir senha precisam ser iguais')

        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false
            this.criaErro(senha, 'Sua senha precisa ser entre 6 e 12 caracteres')
        }
        return valid
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
            
            if (campo.classList.contains('cpf')) { //conotains verifica se tem um class com nome de cpf dentro do campo
                if (!this.validaCPF(campo)) {
                    valid = false
                }
            }
            
            if (campo.classList.contains('usuario')) { //conotains verifica se tem um class com nome de cpf dentro do campo
                if (!this.validaUsuario(campo)) {
                    valid = false
                }
                
            }
            
        }
        return valid
    }
    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value)
        let valid = true
        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválida')
            valid = false 
            return valid
        }
        return valid
    }

    validaUsuario(campo) {
        const usuario = campo.value
        let valid = true
        if (usuario.length <= 1 || usuario.length >= 13) {
            this.criaErro(campo, 'Seu nome de usuário deve ter entre 2 e 12 caracteres')
            valid = false
        }
        if (!usuario.match(/[a-zA-Z0-9]+$/g)) { //match() é usado para encontrar todas as ocorrências de uma substring em uma string. Ele retorna um array com todas as ocorrências encontradas.
            this.criaErro(campo, 'Seu nome de usuário não pode ter simbolo(!@#$%¨&*()), aceitando somente números(0-9) e letras(a-z ou A-Z)')
            valid = false
        }
        return valid
    }

    criaErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div) //é um método do objeto Element que insere um elemento(div) no DOM relativo ao elemento em que o método é chamado(). afterend: insere o elemento após o último filho do elemento que invoca o método. 
    }
}

const valida = new ValidaFormulario()