function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

}
function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            valor = valor.replace('coisa.', '')
            nome = valor
        }
    }
}

const p2 = criaProduto('Camiseta')
p2.nome = 'Qualquer coisa.'
console.log(p2.nome)

