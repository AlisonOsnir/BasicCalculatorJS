//  Develope next feature: 
//    Recriar o funcionmamento da calculadora do celular
//      Sempre mostrar '='+result no display ( pressionar apenas muda o font-size e weight)

// Add Keyboard use

const displayResult = document.querySelector('.displayResult')
const displayCalc = document.querySelector('.displayCalc')               //Renomear
const numbers = document.querySelectorAll('.numbers div')
const operators = document.querySelectorAll('.operators div')
const equalBtn = document.querySelector('.equal')
//const clear = document.getElementById('clear')

let num1
let num2
let setOperator
let result
let resetDisplayToNum2 = false

//setNums
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (displayResult.innerText === '0' && number.innerText !== '.') {
            displayResult.innerText = '=';
        }
        //Clear for next setnum or calc
        if (resetDisplayToNum2 || result == displayResult.innerText) {
            displayResult.innerText = '='
            result = undefined
            resetDisplayToNum2 = false
        }

        if (!setOperator) {
            displayResult.innerText += number.innerText
            num1 = parseFloat(displayResult.innerText.slice(1))        //Tratar das dizimas periodicas
            displayCalc.innerText = ''
            displayCalc.innerText += num1
        } else {
            //Add zero before dot
            if (displayResult.innerText == '' && number.innerText == '.') {
                displayResult.innerText = '=0'
                displayCalc.innerText += '0'
            }

            displayResult.innerText += number.innerText
            num2 = parseFloat(displayResult.innerText)
            displayCalc.innerText += number.innerText
        }
        if (number.innerText === 'C') clear()         //SEPARAR LISTENER POR ID?
    })
})

//setOperators
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        //Show result of the last calc
        if (result) {
            displayCalc.innerText = result
        }
        if (num1) {
            setOperator = operator.innerText
            resetDisplayToNum2 = true
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
        num1 = result;
        num2 = undefined
        setOperator = undefined
        displayResult.innerText = result
        displayCalc.innerText += ('=')
    }
}

function clear() {
    num1 = undefined
    num2 = undefined
    result = undefined
    displayResult.innerText = 0
    displayCalc.innerText = ''
    resetDisplayToNum2 = false
}

equalBtn.addEventListener('click', () => equal())