function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome: nome,
        sobrenome: sobrenome,
        //GETTTER
        get NomeCompleto(){
            return `${this.nome} ${this.sobrenome}` 
        },
        fala(assunto = '****nao foi passado nada****'){
            return `${this.nome} está ${assunto}.`
        },
        altura: altura,
        peso: peso,
        //GETTER
        get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Caio', 'Viana',1.8, 80)
console.log(p1.nome)
console.log(p1.NomeCompleto)
console.log(p1.imc)
const p2 = criaPessoa('Lucas', 'Viana',1.7, 75)
console.log(p2.nome)
console.log(p2.imc)
console.log(p2.fala('falando sobre videogame'))
