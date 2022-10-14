const displayResult = document.querySelector('.displayResult');
const displayCalc = document.querySelector('.displayCalc');
const operators = document.querySelectorAll('.operators div');
const numbers = document.querySelectorAll('.numbers div');
const equalBtn = document.getElementById('equal');
const clearBtn = document.getElementById('clear');

let num1 = '';
let num2 = '';
let result = '';
let selectedOperator = '';
displayCalc.innerText = 0;
let nextCalc = false;
let num1DotCounter = 0;
let num2DotCounter = 0;

function inputHandler(inputValue) {
  if (nextCalc) {
    clearAll();
  }

  if (!selectedOperator) {
    if (num1 === '' && inputValue == '.') {
      num1DotCounter++
      num1 = '0.';
      displayCalc.innerText = num1;
      return
    }
    if (num1 !== '' && inputValue === '.'){
      num1DotCounter++
      if(num1DotCounter < 2){
        num1 += '.';
        displayCalc.innerText += '.';
      }
      return
    }
    num1 += inputValue;
    displayCalc.innerText = num1;
    displayResult.innerText = ('=' + num1);
  } else {
    if (num2 === '' && inputValue == '.') {
      num2DotCounter++
      num2 = '0.';
      displayCalc.innerText += num2;
      return
    }
    if (num2 !== '' && inputValue === '.'){
      num2DotCounter++
      if(num2DotCounter < 2){
        num2 += '.';
        displayCalc.innerText += '.';
      }
      return
    }
    if (inputValue === '0' && num2DotCounter >= 1){      
      num2 += '0';
      displayCalc.innerText += '0';
      return
    }
    num2 += inputValue;
    displayResult.innerText = ('=' + num2);
    displayCalc.innerText = (num1 + selectedOperator + num2);
  }

  if (num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    equal();
  }
}

function setOperator(operator) {
  focusDisplayCalc();
  if (result) {
    num1 = result;
    nextCalc = false;
  }
  if (num1) {
    selectedOperator = operator;
    num2 = '';
  }
  displayCalc.innerText = (num1 + selectedOperator)
}

function equal() {
  if (num1, num2) {
    if (selectedOperator == '+') result = soma();
    if (selectedOperator == '-') result = subtracao();
    if (selectedOperator == 'x') result = multiplicacao();
    if (selectedOperator == '/') result = divisao();
    displayResult.innerText = ('=' + +result.toFixed(15));
  }
}

function clearAll() {
  num1 = '';
  num2 = '';
  result = '';
  selectedOperator = '';
  displayCalc.innerText = '0';
  displayResult.innerText = '';
  nextCalc = false;
  num1DotCounter = 0;
  num2DotCounter = 0;
  focusDisplayCalc();
}

function focusDisplayCalc() {
  displayCalc.classList.add('displayFocus');
  displayResult.classList.remove('displayFocus');
}

function focusDisplayResult() {
  displayCalc.classList.remove('displayFocus');
  displayResult.classList.add('displayFocus');
}

function soma() { return num1 + num2 }
function subtracao() { return num1 - num2 }
function multiplicacao() { return num1 * num2 }
function divisao() { return num1 / num2 }