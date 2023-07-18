//Factory functions
function criarPessoa(nome, sobrenome){
    let pessoa = {
        nome,
        sobrenome,
        get nomeCompleto(){
            let nomecompleto = `${this.nome} ${this.sobrenome}`
            return nomecompleto 
        }
    }
    return pessoa
}

const p1 = criarPessoa('Caio', 'Viana')
console.log(p1.nomeCompleto)