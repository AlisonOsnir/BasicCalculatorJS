//  tratar precisão dos decimais
//  Add Keyboard input

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
let nextCalc = false


//setNums
numbers.forEach((number) => {
  number.addEventListener('click', () => {

    displayCalc.classList.add('displayFocus')
    displayResult.classList.remove('displayFocus')

    if (nextCalc) clear()

    if (!setOperator) {
      // dot handler
      if (num1 !== '' && number.innerText == '.') {
        num1 += number.innerText
        displayCalc.innerText += number.innerText
        return
      }
      if (num1 === '' && number.innerText == '.') {
        num1 = '0.'
        displayCalc.innerText = num1
        return
      }
      num1 += number.innerText
      num1 = parseFloat(num1)
      displayCalc.innerText = num1
      displayResult.innerText = ('=' + num1)
    } else {
      // dot handler
      if (num2 !== '' && number.innerText == '.') {
        num2 += number.innerText
        displayCalc.innerText += number.innerText
        return num2
      }
      if (num2 === '' && number.innerText == '.') {
        num2 = '0.'
        displayCalc.innerText += num2
        return num2
      }
      num2 += number.innerText
      num2 = parseFloat(num2)
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
    //Use result to next calc
    if (result) {
      displayCalc.innerText = result
      num1 = result
      nextCalc = false
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
    displayResult.innerText = ('=' + result.toPrecision())          //TRATAR PRECISAO DE DIZIMAS 
  }
}

function clear() {
  num1 = ''
  num2 = ''
  result = ''
  setOperator = ''
  displayCalc.innerText = '0'
  displayResult.innerText = ''
  nextCalc = false
}

equalBtn.addEventListener('click', () => {
  displayCalc.classList.remove('displayFocus')
  displayResult.classList.add('displayFocus')
  nextCalc = true
})

clearBtn.onclick = clear


function keyboardInput(key) {
    if ((key.which < 0 || key.which > 57) && (key.which !== 13 && key.which !== 99)) {
        return false;
    } else {
        key.preventDefault();
        if (key.which === 48) {
            display.value += "0";
        } else if (key.which === 49) {
            display.value += "1";
        } else if (key.which === 50) {
            display.value += "2";
        } else if (key.which === 51) {
            display.value += "3";
        } else if (key.which === 52) {
            display.value += "4";
        } else if (key.which === 53) {
            display.value += "5";
        } else if (key.which === 54) {
            display.value += "6";
        } else if (key.which === 55) {
            display.value += "7";
        } else if (key.which === 56) {
            display.value += "8";
        } else if (key.which === 57) {
            display.value += "9";
        } else if (key.which === 46) {
            display.value += ".";
        } else if (key.which === 40) {
            display.value += "(";
        } else if (key.which === 41) {
            display.value += ")";
        } else if (key.which === 42) {
            display.value += "*";
        } else if (key.which === 47) {
            display.value += "/";
        } else if (key.which === 43) {
            display.value += "+";
        } else if (key.which === 45) {
            display.value += "-";
        } else if (key.which === 13) {
            displayResult();
        } else if (key.which === 99) {
            clearAll();
        } else {
            display.value = display.value;
        }
        return true;
    }
}

// for deleting value using backspace
function backspaceKeyEvent (event) {
    if (event.which === 8) {
        deleteSingle();
    }
}
