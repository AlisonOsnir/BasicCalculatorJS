//  Recriar o funcionmamento da calculadora do celular
//      tratar precisão dos decimais
//      tratar repetiçao de dots

//  Add Keyboard use

const displayResult = document.querySelector('.displayResult')
const displayCalc = document.querySelector('.displayCalc')               
const operators = document.querySelectorAll('.operators div')
const numbers = document.querySelectorAll('.numbers div')
const equalBtn = document.querySelector('.equal')
const clearBtn = document.getElementById('clear')

let num1 = ''
let num2 = ''
let result = ''
let setOperator = ''
displayCalc.innerText = 0

//setNums
numbers.forEach((number) => {
    number.addEventListener('click', () => {

        displayCalc.classList.add('displayFocus')
        displayResult.classList.remove('displayFocus')

        if (!setOperator) {
            // dot handler
            if (num1 == '' && number.innerText == '.') {
                num1 = '0.'
                displayCalc.innerText = num1
                return num1
            } 
            if (num1 != '' && number.innerText == '.') {
                num1 += number.innerText
                displayCalc.innerText += number.innerText
                return num1
            }

            num1 += number.innerText
            num1 = parseFloat(num1)
            //displayCalc.innerText = '' 
            displayCalc.innerText = num1
            displayResult.innerText = ('=' + num1)
        } else {
            // dot handler
            if (num2 == '' && number.innerText == '.') {
                num2 = '0.'
                displayCalc.innerText += num2
                return num2
            } 
            if (num2 != '' && number.innerText == '.') {
                num2 += number.innerText
                displayCalc.innerText += number.innerText
                return num2
            }
            
            num2 += number.innerText
            num2 = parseFloat(num2)
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
        displayResult.innerText = ('=' + result)          //TRATAR PRECISAO DE DECIMAIS
    }
}

function clear() {
    num1 = ''
    num2 = ''
    result = ''
    setOperator = ''
    displayCalc.innerText = '0'
    displayResult.innerText = ''
}

equalBtn.addEventListener('click', () => {
    displayCalc.classList.remove('displayFocus')
    displayResult.classList.add('displayFocus')
})

clearBtn.addEventListener('click', () => clear())