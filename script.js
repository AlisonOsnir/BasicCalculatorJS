const clearBtn = document.getElementById('clear')
const input = document.querySelector('.input')
const equalBtn = document.querySelector('.equal')
const numbers = document.querySelectorAll('.numbers div')
const operators = document.querySelectorAll('.operators div')

const auxiliar = document.querySelector('.auxiliar')

let setOperator
let num1
let num2

let reset = false

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        const num = number.innerText

        if (input.innerText === '0' && num !== '.') input.innerText = '';

        if (!setOperator) {
            input.innerText += num
            num1 = +input.innerText

            auxiliar.innerText = '' //Necessario???
            auxiliar.innerText += num1

            console.log('first: ', num1)
        } else {
            if (reset) input.innerText = ''
            reset = false;

            input.innerText += num
            num2 = +input.innerText
            auxiliar.innerText += num

            console.log('second: ', num2)
        }

        if (number.innerText === 'C') clear()
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        setOperator = operator.innerText

        reset = true
        auxiliar.innerText += setOperator
        console.log('Operador: ', setOperator)
    })
})

equalBtn.addEventListener('click', () => equal())

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

function clear() {
    num1 = undefined
    num2 = undefined
    input.innerText = 0
    auxiliar.innerText = ''
}

function equal() {
    let result

    if (setOperator == '+') result = soma()
    if (setOperator == '-') result = subtracao()
    if (setOperator == 'x') result = multiplicacao()
    if (setOperator == '/') result = divisao()

    input.innerText = result
    num1 = result;
    setOperator = undefined
    auxiliar.innerText += ('=')
}