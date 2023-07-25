class CPF {
    constructor() {
        this.cpfLimpo

    }
    ValidaCPF(valor) {
        if (typeof valor === 'undefined') {
            console.log('Insira um valor real')
            return
        }
        if (typeof valor !== 'string') {
            console.log('Insira um valor real')
            return
        }
        if (valor.length !== 11) {
            console.log('Insira um valor real')
            return
        }
        this.cpfLimpo = valor
        if(this.isSequencia()){
            console.log('insira valores reais')
            return
        }
        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const digito1 = this.criadigito(cpfParcial)
        const digito2 = this.criadigito(cpfParcial + digito1)
        const newCPF = cpfParcial + digito1 + digito2


        if (newCPF === this.cpfLimpo) {
            console.log('CPF valido')
        } else {
            console.log('CPF NAO é valido')

        }

    }

    criadigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial)
        let regressivo = cpfArray.length + 1
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val))
            regressivo--
            return ac
        }, 0)

        const digito = 11 - (total % 11)

        if (digito > 9) {
            return 0
        } else {
            return String(digito)
        }

    }
    isSequencia(){
          return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    set cpf(valor) {
        this.ValidaCPF(valor.replace(/\D+/g, ''))
    }
    get cpf() {
        return this.cpfLimpo
    }


}

const cpf1 = new CPF()
cpf1.cpf = '048.269.241-35'
cpf1.ValidaCPF


