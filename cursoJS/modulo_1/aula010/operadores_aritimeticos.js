/*
  Aritméticos
  ()
  + Adição/Concatenação;
  -; /; *; **;
  %
 */
const num1 = 10
const num2 = 5
console.log(num1 % num2)

/*
Incremento = ++
Decremento + --
*/
let contador = 1
contador++
console.log('Adicionando: ' + contador)
contador--
console.log('Subtraindo ' + contador)

/* 
Operadores de atribuição
*/
let somador = 2
somador += 2 //é a mesma coisa que: somador = somador + 2
console.log(somador)

//NaN - Not a number
const num3 = 10
const num4 = "Caio"
console.log(num3 + num4) //Error NaN

//converter uma STRING para NUMBER
const num5 = 10
const num6 = parseFloat('5.2') //parseFloat() ou parseInt()
console.log(num5 + num6)

//Number()
const num7 = Number(5.2)
console.log(num7 += 2)