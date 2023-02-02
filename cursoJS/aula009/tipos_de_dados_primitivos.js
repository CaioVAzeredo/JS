const nome = 'Caio' //Srting
const nome1 = "Caio" //Srting
const nome2 = `Caio` //Srting **** UTILIZAR ****
const num1 = 10 //number
const num2 = 10.52 //number
let nomeAluno; //undefined ---> Nao apronta para nenhum lugar da memória 
const sobrenomeAluno = null //Nulo ---> nao aponta para nenhum lugar da memória
const aprovado = false //Boolean = true, false (lógico)

let a = 2
const b = a
console.log('Antes da atribuição ' + a, b)

a = 3

console.log('Depois da atribuição ' + a, b)