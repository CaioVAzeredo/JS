class Controle {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }
    //metodo de instancia
    aumentar() {
        this.volume += 1
    }
    diminuir() {
        this.volume -= 1
    }
    //Metodo estatico
    static soma(x, y) {
        console.log(x + y)
    }
}

const control = new Controle('LG')

/* control.soma() */ //nao tenho acesso por ser static
Controle.soma(5, 6) //unico meio de ter acesso