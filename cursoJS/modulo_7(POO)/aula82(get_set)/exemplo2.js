class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    set nomeCompleto(valor) {
        valor = valor.split(' ')//criar uma array ["Caio" "Viana" "de" "Azeredo"]
        this.nome = valor.shift() //this.nome recebe "Caio" (shift() tira o primeiro elemento de uma array portanto, a array fica ["Viana" "de" "Azeredo"])
        this.sobrenome = valor.join(' ') /* junta o que sobrou da array tornando uma string ["Viana" "de" "Azeredo"] = Viana de Azeredo */
        
    }
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome
    }
}

const p1 = new Pessoa()
p1.nomeCompleto = 'Caio Viana de Azeredo'
console.log(p1.nomeCompleto + '\n' + p1.nome + '\n' + p1.sobrenome)
