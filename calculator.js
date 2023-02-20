const display = document.getElementById("display");
const calculator = document.getElementById("calculator");

let operand1 = "";
let operand2 = "";
let operator = "";
let result = "";
let displayValue = "";

function inputNumber(number) {
  displayValue += number;
}

function inputOperator(operatorValue) {
  if (result) {
    operand1 = result;
    result = "";
  }
  operand1 = displayValue;
  operator = operatorValue;
  displayValue = "";
}

function calculate() {
  operand2 = displayValue;
  result = operate(operator, operand1, operand2);
  displayValue = result;
  operand1 = "";
  operand2 = "";
  operator = "";
}

function clearDisplay() {
  displayValue = "";
  result = "";
}

function updateDisplay(displayValue, result) {
  display.textContent = displayValue + " = " + result;
}

function operate(operator, operand1, operand2) {
  operand1 = parseFloat(operand1);
  operand2 = parseFloat(operand2);
  if (operator === "+") {
    return operand1 + operand2;
  } else if (operator === "-") {
    return operand1 - operand2;
  } else if (operator === "*") {
    return operand1 * operand2;
  } else if (operator === "/") {
    return operand1 / operand2;
  }
}

const rows = document.querySelectorAll('.row');
let rowIndex = 0;

buttons.forEach(button => {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = button.value;
  buttonEl.dataset.type = button.type;
  buttonEl.addEventListener('click', () => {
    const { type, value } = button;
    if (type === 'number') {
      inputNumber(value);
      updateDisplay(displayValue, result);
    } else if (type === 'operator') {
      inputOperator(value);
    } else if (type === 'clear') {
      clearDisplay();
      updateDisplay(displayValue, result);
    } else if (type === 'calculate') {
      calculate();
      updateDisplay(displayValue, result);
    }
  });
  rows[rowIndex].appendChild(buttonEl);
  if ((rowIndex + 1) % 4 === 0) {
    rowIndex = 0;
  } else {
    rowIndex++;
  }
});




