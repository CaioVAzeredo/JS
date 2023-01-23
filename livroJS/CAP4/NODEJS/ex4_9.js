const prompt = require("prompt-sync")()

let num = Number(prompt("Insira um número: "))

if (num < 100 || num >= 1000) {

    console.log("ERROR")
return
}
else {

    num1 = num % 10
    num2 = ((num%100) - num1)/10
    num3 = Math.floor(num/99)
    if(num3 == 10){
        num3 = num3 - 1
    }

 console.log(`O inverso do numero ${num} é: \n${num1}${num2}${num3}`)
}