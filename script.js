const clearBtn = document.getElementById('clear')
const input = document.querySelector('.input')
const equalBtn = document.querySelector('.equal')
const numbers = document.querySelectorAll('.numbers div')
const operators = document.querySelectorAll('.operators div')

const auxiliar = document.querySelector('.auxiliar')

let setOperator
let n1
let n2

let reset = false

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        const num = number.innerText

        if (input.innerText === '0' && num !== '.') input.innerText = '';

        if (!setOperator) {
            input.innerText += num
            n1 = +input.innerText
            
            auxiliar.innerText = '' //Necessario???
            auxiliar.innerText += n1
        } else {
            if (reset) input.innerText = ''
            reset = false;

            input.innerText += num
            n2 = +input.innerText
            auxiliar.innerText += num
        }

        if (number.innerText === 'C') clear()

        console.log('first: ', n1)
        console.log('second: ', n2)
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        setOperator = operator.innerText
 
        reset = true
        auxiliar.innerText += setOperator //Teste 
        console.log('Operador: ', setOperator)
    })
})

equalBtn.addEventListener('click', () => equal())

function soma() {
    return n1 + n2
}
function subtracao() {
    return n1 - n2
}
function multiplicacao() {
    return n1 * n2
}
function divisao() {
    return n1 / n2
}

function clear() {
    n1 = undefined
    n2 = undefined
    input.innerText = 0
    auxiliar.innerText = ''
}

function equal() {
    let result

    if (n1 && n2){
        input.innerText = ''
        if (setOperator == '+') result = soma()
        if (setOperator == '-') result = subtracao()
        if (setOperator == 'x') result = multiplicacao()
        if (setOperator == '/') result = divisao()

        input.innerText = result
        n1 = result;
        setOperator = undefined
        auxiliar.innerText += ('=')

    }
}