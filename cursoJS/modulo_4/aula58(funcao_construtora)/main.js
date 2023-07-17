// Função construtora -> objetos
// Construtora -> Pessoa (new)

// Função fabrica -> objetos

function Pessoa(nome, sobrenome){
    //Atributos ou metodos privados
    const ID = 123456
    const metodoInterno = function(){
        
    }
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log(this.nome + ': sou um metodo')
    }
}

const p1 = new Pessoa('Caio', 'Viana')
const p2 = new Pessoa('Maria', 'Oliveira')
p2.metodo()