const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const asteriskBtn = document.getElementById('asterisk')
const slashBtn = document.getElementById('slash')
const submitBtn = document.getElementById('submit')

let action = '+'
let sum = 0;

plusBtn.onclick = function () {
  action = '+'
}

minusBtn.onclick = function () {
  action = '-'
}

asteriskBtn.onclick = function () {
  action = '*'
}

slashBtn.onclick = function () {
  action = '/'
}

function printResult(result) {
  if (result > 0) {
    resultElement.style.color = 'green'
  } else if (result == 0) {
    resultElement.style.color = 'gray'
  } else if (result < 0) {
    resultElement.style.color = 'red'
  }
  resultElement.textContent = result
}

function computeNumbersWithAction(val1, val2, actionSymbol) {
  const num1 = val1.value
  const num2 = val2.value

  if (actionSymbol == '+') {
    return Number(num1) + Number(num2)
  } else if (actionSymbol == '-') {
    return Number(num1) - Number(num2)
  } else if (actionSymbol == '*') {
    return Number(num1) * Number(num2)
  } else if (actionSymbol == '/') {
    return Number(num1) / Number(num2)
  }
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action)
  printResult(result)
}
