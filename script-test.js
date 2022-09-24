//  tratar precisão dos decimais

const displayResult = document.querySelector('.displayResult')
const displayCalc = document.querySelector('.displayCalc')
const operators = document.querySelectorAll('.operators div')
const numbers = document.querySelectorAll('.numbers div')
const equalBtn = document.querySelector('.equal')
const clearBtn = document.getElementById('clear')

let num1 = ''
let num2 = ''
let result = ''
let selectedOperator = ''
displayCalc.innerText = 0
let nextCalc = false

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        focusDisplayCalc()
        inputHandler(number.innerText)
    })
})

function inputHandler(inputValue) {
    if (nextCalc) {
        clearAll()
    }
    if (!selectedOperator) {
        // dot handler
        if (num1 !== '' && inputValue == '.') {
            num1 += inputValue
            displayCalc.innerText += inputValue
            return
        }
        if (num1 === '' && inputValue == '.') {
            num1 = '0.'
            displayCalc.innerText = num1
            return
        }
        num1 += inputValue
        num1 = parseFloat(num1)
        displayCalc.innerText = num1
        displayResult.innerText = ('=' + num1)
    } else {
        // dot handler
        if (num2 !== '' && inputValue == '.') {
            num2 += inputValue
            displayCalc.innerText += inputValue
            return num2
        }
        if (num2 === '' && inputValue == '.') {
            num2 = '0.'
            displayCalc.innerText += num2
            return num2
        }
        num2 += inputValue
        num2 = parseFloat(num2)
        displayCalc.innerText = (num1 + selectedOperator + num2)
        displayResult.innerText = ('=' + num2)
    }
    if (num1, num2) {
        equal()
    }
}

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        setOperator(operator.innerText)
    })
})

function soma() { return num1 + num2 }
function subtracao() { return num1 - num2 }
function multiplicacao() { return num1 * num2 }
function divisao() { return num1 / num2 }

function equal() {
    if (num1, num2) {
        if (selectedOperator == '+') result = soma()
        if (selectedOperator == '-') result = subtracao()
        if (selectedOperator == 'x') result = multiplicacao()
        if (selectedOperator == '/') result = divisao()
        displayResult.innerText = ('=' + result)          //TRATAR PRECISAO DE DIZIMAS 
    }
}

function clearAll() {
    num1 = ''
    num2 = ''
    result = ''
    selectedOperator = ''
    displayCalc.innerText = '0'
    displayResult.innerText = ''
    nextCalc = false
    focusDisplayCalc()
}

equalBtn.addEventListener('click', () => {
    focusDisplayResult()
    nextCalc = true
})

clearBtn.onclick = clearAll

window.onload = function () {
    document.onkeydown = keyboardInput;
}

function keyboardInput(key) {
    let numValue
    key.preventDefault();
    if (key.which === 48) {
        numValue = "0";
    } else if (key.which === 49) {
        numValue = "1";
    } else if (key.which === 50) {
        numValue = "2";
    } else if (key.which === 51) {
        numValue = "3";
    } else if (key.which === 52) {
        numValue = "4";
    } else if (key.which === 53) {
        numValue = "5"; 1
    } else if (key.which === 54) {
        numValue = "6";
    } else if (key.which === 55) {
        numValue = "7";
    } else if (key.which === 56 && !key.shiftKey) {
        numValue = "8";
    } else if (key.which === 57) {
        numValue = "9";
    } else if (key.which === 190) {
        numValue = ".";
    } else if (key.which === 56 && key.shiftKey) {
        return setOperator('x');
    } else if (key.which === 193) {
        return setOperator('/');
    } else if (key.which === 187 && key.shiftKey) {
        return setOperator('+');
    } else if (key.which === 189) {
        return setOperator('-');
    }
    else if (key.which === 13 || (key.which === 187 && !key.shiftKey)) {
        focusDisplayResult()
        return nextCalc = true;
    } else if (key.which === 46) {
        return clearAll();
    } else {
        return
    }
    inputHandler(numValue)
}

function setOperator(operator) {
    focusDisplayCalc()
    if (result) {
        displayCalc.innerText = result
        num1 = result
        nextCalc = false
    }
    if (num1) {
        selectedOperator = operator
        num2 = ''
        displayCalc.innerText += selectedOperator
    }
}

function focusDisplayCalc() {
    displayCalc.classList.add('displayFocus')
    displayResult.classList.remove('displayFocus')
}

function focusDisplayResult() {
    displayCalc.classList.remove('displayFocus')
    displayResult.classList.add('displayFocus')
}