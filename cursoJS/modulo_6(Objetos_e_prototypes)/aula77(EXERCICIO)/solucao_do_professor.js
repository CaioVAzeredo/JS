//705.484.450-52   070.987.720-03
/* 
7  0  5  4  8  4  4  5  0
x  x  x  x  x  x  x  x  x
10 9  8  7  6  5  4  3  2
70 9  40 28 48 20 16 15 0 = 237

(10 * 237) % 11 = 5 (Primeiro digito)
Se o número digito for maior que 9, consideramos 0
*/

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}
ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') {
        return false
    }
    if (this.cpfLimpo.length !== 11) {
        return false
    }
    if(this.isSequencia()){
        return false
    }

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)

    const novoCpf = cpfParcial + digito1 + digito2
    
    return novoCpf === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial) //transformar a string em um array
    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val))
        regressivo--
        return ac
    }, 0)

    const digito = 11 - (total % 11)
    if(digito > 9){
        return 0 
    }else{
        return String(digito)
    }
}
ValidaCPF.prototype.isSequencia = function(){
    const Sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return Sequencia === this.cpfLimpo
    
}
const cpf = new ValidaCPF('048.269.241-35')


if(cpf.valida()){
    console.log('CPF valido')
}else{
    console.log('CPF NAO é valido')

}
