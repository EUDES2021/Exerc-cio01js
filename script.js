let numberOne = Number(prompt(`Digite o primeiro número: `))
let numberTwo = Number(prompt(`Digite o Segundo número: `))

function sum(a, b) {
  return a + b}

let sumTwo = sum(numberOne,numberTwo)

alert(`A soma dos dois números é: ${sumTwo}`)

function sub(a, b) {
  return a - b}

let subTwo = sub(numberOne,numberTwo)

alert(`A subtração dos dois números é: ${subTwo}`)

function mult(a, b) {
  return a * b}

let multTwo = mult(numberOne,numberTwo)

alert(`A multiplicação dos dois números é: ${multTwo}`)

function div(a, b) {
  return a / b}

let divTwo = div(numberOne,numberTwo)

alert(`A divisão dos dois números é: ${divTwo}`)

function rest(a, b) {
  return a % b}

let restTwo = rest(numberOne,numberTwo)

alert(`O resto da divisão dos dois números é: ${restTwo}`)

if(sumTwo % 2 === 0){
  alert (`A soma dos dois números é par: ${sumTwo}`)
}else{
  alert(`A soma dos dois números é ímpar: ${sumTwo}`)
}

if(numberOne == numberTwo){
  alert(`Os números são iguais!`)
}else{
  alert(`Os números são diferentes!`)
}


