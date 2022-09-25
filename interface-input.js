numbers.forEach((number) => {
  number.addEventListener('click', () => {
    focusDisplayCalc();
    inputHandler(number.innerText);
  })
})

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    setOperator(operator.innerText);
  })
})

equalBtn.addEventListener('click', () => {
  focusDisplayResult();
  nextCalc = true;
})

clearBtn.onclick = clearAll;