//escreva uma função que recebe 2 numeros e retorne o maior deles
const num1 = 10
const num2 = 15
 
    const Max = (num1, num2) => {
        if (num1 > num2) {
            return num1
        } else {
            return num2
        }
    }
    
console.log(Max(num1,num2))