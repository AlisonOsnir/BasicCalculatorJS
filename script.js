const display = document.querySelector('.display')
const equalBtn = document.querySelector('.equal')
const inputs = document.querySelectorAll('.numbers div')
const operators = document.querySelectorAll('.operators div')
const auxiliar = document.querySelector('.auxiliar')               //Renomear

let num1
let num2
let setOperator
let result
let resetDisplayToNum2 = false

// Develope next feature: Executar operação precionando proximo operador
//      if numero de operador > num1 = equal()

// Add Keyboard use

//setNums
inputs.forEach((inputBtn) => {
    inputBtn.addEventListener('click', () => {
        if (display.innerText === '0' && inputBtn.innerText !== '.') display.innerText = '';
        //Clear for next setnum or calc
        if (resetDisplayToNum2 || result == display.innerText) {
            display.innerText = ''
            result = undefined
            resetDisplayToNum2 = false
        }

        if (!setOperator) {
            display.innerText += inputBtn.innerText
            num1 = parseFloat(display.innerText)        //Tratar das dizimas periodicas
            auxiliar.innerText = ''
            auxiliar.innerText += num1
        } else {
            //Add zero before dot
            if (display.innerText == '' && inputBtn.innerText == '.') {
                display.innerText = '0'
                auxiliar.innerText += '0'
            }

            display.innerText += inputBtn.innerText
            num2 = parseFloat(display.innerText)
            auxiliar.innerText += inputBtn.innerText
        }
        if (inputBtn.innerText === 'C') clear()         //SEPARAR LISTENER POR ID?
    })
})

//setOperators
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        //Show result of the last calc
        if (result) {
            auxiliar.innerText = result
        }
        if (num1) {
            setOperator = operator.innerText
            resetDisplayToNum2 = true
            auxiliar.innerText += setOperator
        }
    })
})

function soma() {
    return num1 + num2
}
function subtracao() {
    return num1 - num2
}
function multiplicacao() {
    return num1 * num2
}
function divisao() {
    return num1 / num2
}

function equal() {
    if (num1, num2) {
        if (setOperator == '+') result = soma()
        if (setOperator == '-') result = subtracao()
        if (setOperator == 'x') result = multiplicacao()
        if (setOperator == '/') result = divisao()
        num1 = result;
        num2 = undefined
        setOperator = undefined
        display.innerText = result
        auxiliar.innerText += ('=')
    }
}

function clear() {
    num1 = undefined
    num2 = undefined
    result = undefined
    display.innerText = 0
    auxiliar.innerText = ''
    resetDisplayToNum2 = false
}

equalBtn.addEventListener('click', () => equal())