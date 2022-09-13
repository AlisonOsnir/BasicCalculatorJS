const clear = document.getElementById('clear')
const input = document.querySelector('.input')
const equal = document.querySelector('.equal')
const numbers = document.querySelectorAll('.numbers div')
const operators = document.querySelectorAll('.operators div')

let setOperator = false
let first = 0 
let second = 0

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        input.innerText += number.innerText //error 
        if (!setOperator){
            console.log('first: ',first)
            first = +input.innerText
        } else {
            console.log('second: ',second)
            second = +input.innerText
            setOperator = false
        }
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        console.log(operator.innerText)
        setOperator = true
        input.innerText = ''
    })
})

clear.addEventListener('click', () => {
    input.innerText = ''
    first = 0
    second = 0
})

equal.addEventListener('click', () => {
    input.innerText = soma()
})

function soma(){
    return first + second
}