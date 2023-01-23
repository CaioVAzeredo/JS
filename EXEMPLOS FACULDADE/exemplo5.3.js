let num

do {
    num = Number(prompt("Insira um número: "))
    if (num == 0 || isNaN(num)) {
        alert("Insira um número válido")
    }
} while (num == 0 || isNaN(num))
let dobro = ""
for (let i = 2; i <= num; i = i + 2){
    dobro += i+ ","
}
alert(dobro)


