const clear = document.getElementById('clear')
const input = document.querySelector('.input')
const equal = document.querySelector('.equal')
const numbers = document.querySelectorAll('.numbers div')
const operators = document.querySelectorAll('.operators div')

let setOperator
let first
let second

input.innerText

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        
        if (!setOperator){
            input.innerText += number.innerText //error 
            console.log(number.innerText)
            first = +input.innerText
            console.log('first: ',first)
        } else {
            input.innerText += number.innerText //error 
            console.log(number.innerText)
            second = +input.innerText  
            console.log('second: ',second)
        }
        if(number.innerText == 'C') clearInputs()
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        setOperator = operator.innerText
        console.log('setOperator: ', setOperator)
    })
})

equal.addEventListener('click', () => {
    input.innerText = ''
    if( setOperator == '+') input.innerText = soma()
    console.log(soma)
    setOperator = undefined
})

function soma(){
    return first + second
}

function clearInputs() {
    console.log('clear')
    input.innerText = 0
    first = 0
    second = 0
}