function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b)
            break
        case '-':
            return subtract(a, b)
            break
        case '*':
            return multiply(a, b)
            break
        case '/':
            return divide(a, b)
            break
    }
}

let displayValue = '0'

const numbers = document.querySelectorAll('.number')
numbers.forEach(number => {
    number.addEventListener('click', () => {
        displayValue += number.textContent
        showDisplayValue()
    })
})

function showDisplayValue() {
    const display = document.querySelector('.display')
    display.textContent = Number(displayValue)
}