function Conta(agencia, conta, saldo = 0) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}
Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo.toFixed(2)}`)
        return
    }
    this.saldo -= valor
    this.verSaldo()
}
Conta.prototype.depositar = function (valor) {
    this.saldo += valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function () {
    console.log(`AG/C: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
}


const conta1 = new Conta(1000, 123456, 100)

/* CONTA CORRENTE */
function CC(agencia, conta, saldo = 0, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
//links dos prototypes de Conta para CC
CC.prototype = Object.create(Conta.prototype)
CC.prototype.constructor = CC

CC.prototype.sacar = function (valor) {
    if (valor < (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo.toFixed(2)}`)
        return
    }
    this.saldo -= valor
    this.verSaldo()

}

const conta2 = new CC(1001, 654321, 0, 100)
conta2.depositar(10)
conta2.sacar(110)
conta2.sacar(1)

/* CONTA POUPANÇA */
