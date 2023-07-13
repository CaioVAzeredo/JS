/* function criarCalculadora() {
    return {
        
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        btnDel: document.querySelector('.btn-del'),
        btnEq: document.querySelector('.btn-eq'),
        
        inicia() {
            this.clickBotoes()
            this.apertaEnter()
        },
        
        apertaEnter(){
            this.display.addEventListener('keyup', (e)=>{
                if(e.keyCode === 13){
                    this.btnEqDisplay()
            }})
        },
       
        clickBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target
                console.log(this)
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }
                if (el.classList.contains('btn-del')) {
                    this.btnDelDisplay(el.innerText)
                }
                if (el.classList.contains('btn-clear')) {
                    this.btnClearDisplay()
                }
                if (el.classList.contains('btn-eq')) {
                    this.btnEqDisplay()
                }
            })
        },
        
        btnParaDisplay(valor) {
            this.display.value += valor
        },
        btnClearDisplay() {
            this.display.value = ''
        },
        btnDelDisplay() {
            this.display.value = this.display.value.slice(0, -1) //O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é incluído) de um array original
        },
        btnEqDisplay() {
            let conta = this.display.value
            try {
                conta = eval(conta) //A função eval() computa um código JavaScript representado como uma string. NAO É RECOMENDADO SEM TRATAR O DADO EM UM eval() POR ACEITAR QUALQUER CODIGO EM JS, PODENDO TER CODIGO MALICIOSO POR UMA QUESTAO DE SEGURANÇA 

                if (!conta) {
                    alert('CONTA INVALIDA')
                    return
                }
                this.display.value = String(conta)
            } catch (e) {
                alert('CONTA INVALIDA')
                return
            }

        },
    }
}

const calculadora = criarCalculadora()
calculadora.inicia() */

function Calculadora() {
    this.display = document.querySelector('.display')
    this.btnClear = document.querySelector('.btn-clear')
    this.btnDel = document.querySelector('.btn-del')
    this.btnEq = document.querySelector('.btn-eq')

    this.inicia = function () {
        this.clickBotoes()
        this.apertaEnter()
    }

    this.clickBotoes = function () {
        document.addEventListener('click', (e) => {
            const el = e.target
            console.log(this)
            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText)
            }
            if (el.classList.contains('btn-del')) {
                this.btnDelDisplay(el.innerText)
            }
            if (el.classList.contains('btn-clear')) {
                this.btnClearDisplay()
            }
            if (el.classList.contains('btn-eq')) {
                this.btnEqDisplay()
            }
        })
    }
    this.apertaEnter = function () {
        document.addEventListener('keyup', (e) => {
            if (e.keyCode !== 13) {
                return
            }
            this.btnEqDisplay()
        })
    }

    this.btnParaDisplay = function (valor) {
        this.display.value += valor
    }

    this.btnClearDisplay = function () {
        this.display.value = ''
    }

    this.btnDelDisplay = function () {
        this.display.value = this.display.value.slice(0, -1) //O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é incluído) de um array original
    }

    this.btnEqDisplay = function () {
        let conta = this.display.value
        try {
            conta = eval(conta) //A função eval() computa um código JavaScript representado como uma string. NAO É RECOMENDADO SEM TRATAR O DADO EM UM eval() POR ACEITAR QUALQUER CODIGO EM JS, PODENDO TER CODIGO MALICIOSO POR UMA QUESTAO DE SEGURANÇA 

            if (!conta) {
                alert('CONTA INVALIDA')
                return
            }
            this.display.value = String(conta)
        } catch (e) {
            alert('CONTA INVALIDA')
            return
        }

    }

}

const calcular = new Calculadora()
calcular.inicia()