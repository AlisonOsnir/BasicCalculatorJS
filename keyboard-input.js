
document.onkeydown = keyboardInput;

function keyboardInput(key) {
  let numValue;
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
    focusDisplayResult();
    return nextCalc = true;
  } else if (key.which === 46) {
    return clearAll();
  } else {
    return
  }
  inputHandler(numValue);
}