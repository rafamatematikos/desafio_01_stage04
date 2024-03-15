/* 
Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

- A soma dos dois números;
- A subtração dos dois números;
- A multiplicação dos dois números;
- A divisão dos dois números;
- O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par (ou ímpar);
- [ ]  Verifique se os dois números inseridos são iguais (ou diferentes).
*/

let numberOne = Number(prompt('Por favor, digite o primeiro número:'))
let numberTwo = Number(prompt('Por favor, digite o segundo número:'))

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo
let restDiv = numberOne % numberTwo

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto da divisão dos dois números é: ${restDiv}`)

if (sum % 2 == 0) {
  alert('A soma dos dois números é um número PAR')
} else {
  alert('A soma dos dois números é um número ÍMPAR')
}

if (numberOne == numberTwo) {
  alert('Os dois números inseridos são IGUAIS.')
} else {
  alert('Os dois números inseridos são DIFERENTES.')
}
