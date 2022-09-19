//  Recriar o funcionmamento da calculadora do celular
//      equalBTN pressionar apenas muda o font-size e/ou weight)

//  Add Keyboard use

const displayResult = document.querySelector('.displayResult')
const displayCalc = document.querySelector('.displayCalc')               //Renomear
const operators = document.querySelectorAll('.operators div')
const numbers = document.querySelectorAll('.numbers div')
const equalBtn = document.querySelector('.equal')
const clearBtn = document.getElementById('clear')

let num1 = ''
let num2 = ''
let result = ''
let setOperator = ''
displayResult.innerText = 0

//setNums
numbers.forEach((number) => {
    number.addEventListener('click', () => {

        if (!setOperator) {
            num1 += number.innerText
            num1 = parseFloat(num1)
            //displayCalc.innerText = '' 
            displayCalc.innerText = num1
            displayResult.innerText = ('=' + num1)
        } else {
            num2 += number.innerText
            num2 = parseFloat(num2)
            console.log(num2)
            //displayCalc.innerText = ''
            displayCalc.innerText = (num1 + setOperator + num2)
            displayResult.innerText = ('=' + num2)
        }

        if (num1, num2) {
            equal()
        }
    })
})

//setOperators
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        //Show result of the last calc
        if (result) {
            displayCalc.innerText = result
            num1 = result
        }
        if (num1) {
            setOperator = operator.innerText
            num2 = ''
            displayCalc.innerText += setOperator
        }
    })
})

function soma() { return num1 + num2 }
function subtracao() { return num1 - num2 }
function multiplicacao() { return num1 * num2 }
function divisao() { return num1 / num2 }

function equal() {
    if (num1, num2) {
        if (setOperator == '+') result = soma()
        if (setOperator == '-') result = subtracao()
        if (setOperator == 'x') result = multiplicacao()
        if (setOperator == '/') result = divisao()
        displayResult.innerText = ('=' + result)
    }
}

function clear() {
    num1 = ''
    num2 = ''
    result = ''
    setOperator = ''
    displayResult.innerText = '0'
    displayCalc.innerText = ''
}

equalBtn.addEventListener('click', () => {
    //mudar font weight nos displays
})

clearBtn.addEventListener('click', () => clear())