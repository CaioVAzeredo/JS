import { nome, sobrenome, idade, soma, Pessoa as outraCoisa } from './ex1'

const p1 = new outraCoisa('Caio', 'Viana')
console.log(p1)

/* ------------------------ */
import * as MeuModulo from './ex2'
console.log(MeuModulo)

/* ----------------------- */
/* import soma from './ex3' //sem chave é mandando sempre o default
console.log(soma(2, 5)) */

/* ----------------------- */
/* import mult, {nome, sobrenome, idade, soma} from './ex4'
console.log(mult(5, 6))
console.log(nome, sobrenome, idade, soma(4, 5)) */