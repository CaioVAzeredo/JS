function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome: nome,
        sobrenome: sobrenome,
        //GETTER
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}` 
        },
        //SETTER
        set nomeCompleto(valor){
            valor = valor.split(' ') //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.
            this.nome = valor.shift() //O método shift() remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array.
            console.log(valor)
        },
       
    }
}

const p1 = criaPessoa('Caio', 'Viana',1.8, 80)
p1.nomeCompleto = 'Lucas Viana'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.nomeCompleto)

