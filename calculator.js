const display = document.getElementById('display');
const buttons = document.querySelectorAll('#calculator button');

let operand1 = null;
let operand2 = null;
let operator = null;

function clear() {
  operand1 = null;
  operand2 = null;
  operator = null;
  updateDisplay('');
}

function updateDisplay(value) {
  display.textContent = value;
}

function handleNumberClick(event) {
  const number = event.target.textContent;

  if (operator === null) {
    operand1 = (operand1 === null) ? number : operand1 + number;
    updateDisplay(operand1);
  } else {
    operand2 = (operand2 === null) ? number : operand2 + number;
    updateDisplay(operand2);
  }
}

function handleOperatorClick(event) {
  const newOperator = event.target.textContent;

  if (operand1 === null) {
    return;
  }

  if (operator !== null && operand2 !== null) {
    operand1 = calculate();
    operand2 = null;
    updateDisplay(operand1);
  }

  operator = newOperator;

  if (operand2 !== null) {
    updateDisplay(operand1 + operator + operand2);
  } else {
    updateDisplay(operand1 + operator);
  }
}


function calculate() {
  const a = parseFloat(operand1);
  const b = parseFloat(operand2);

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return null;
  }
}

function handleEqualsClick() {
  if (operand1 !== null && operator !== null && operand2 !== null) {
    const result = calculate();
    operand1 = result.toString();
    operand2 = null;
    operator = null;
    updateDisplay(result);
  }
}

buttons.forEach(button => {
  if (button.textContent === 'clear') {
    button.addEventListener('click', clear);
  } else if (/^\d+$/.test(button.textContent)) {
    button.addEventListener('click', handleNumberClick);
  } else if (/^[-+*/]$/.test(button.textContent)) {
    button.addEventListener('click', handleOperatorClick);
  } else if (button.textContent === '=') {
    button.addEventListener('click', handleEqualsClick);
  }
});
