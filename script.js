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
let temp;
let sign;


const numbers = document.querySelectorAll('.number')
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if ((!!temp)) {
            displayValue = 0
            displayValue += number.textContent
            showDisplayValue()
        } else {
            displayValue += number.textContent
            showDisplayValue()
        }
        
    })
})

function showDisplayValue() {
    const display = document.querySelector('.display')
    display.textContent = Number(displayValue)
}

const clear = document.querySelector('.clear')
clear.addEventListener('click', clearValue)
function clearValue() {
    resetValues()
    displayValue = '0'
    showDisplayValue()
}

function resetValues() {
    temp = undefined
    sign = undefined
}

const operators = document.querySelectorAll('.operator')
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        sign = operator.textContent
        //if 'other' & no temp - store temp & store sign & clear display
        if ((sign === '+' || sign === '-' || sign === '*' || sign === '/') && !temp) {
            temp = Number(displayValue)
            displayValue = '0'
            showDisplayValue()
        }
        //if 'other' & yes temp - calculate result & store in temp & clear display
        else if ((sign === '+' || sign === '-' || sign === '*' || sign === '/') && !!temp) {
            if ((sign === '/') && (Number(displayValue) === 0)) {
                alert('Cannot divide by 0')
                clearValue()
            }
            temp = operate(sign, temp, Number(displayValue))
            displayValue = temp
            showDisplayValue()
        }
    })
})

const equal = document.querySelector('.equal')
equal.addEventListener('click', () => {
    //if '=' & no temp & no sign - return
    if (!temp) {
        return
    }
    //if '=' & yes temp & yes sign - calculate the result & show on display
    else {
        if ((sign === '/') && (Number(displayValue) === 0)) {
            alert('Cannot divide by 0')
            clearValue()
        }
        const result = operate(sign, temp, Number(displayValue))
        displayValue = result
        showDisplayValue()
        resetValues()
    }
})