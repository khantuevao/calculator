function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === 'plus') {
        add(a, b);
    } else if (operator === 'subtract') {
        subtract(a, b);
    } else if (operator === 'multiply') {
        multiply(a, b);
    } else if (operator === 'divide') {
        divide(a ,b);
    } else {
        alert('Error, check operate function!');
    }
}

let operator = '';
let lowerValue = document.querySelector('#lowerscreen');
let upperValue = document.querySelector('#upperscreen');

const numberButtons = document.querySelectorAll('.number-button');

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', function() {
        if (lowerValue.textContent === '0') {
            lowerValue.textContent = numberButton.textContent;
        } else {
            lowerValue.textContent += numberButton.textContent;
        }
    });
});

const operatorAdd = document.querySelector('#operator-add');
operatorAdd.addEventListener('click', () => {
    operator = 'add';
});

const operatorSubtract = document.querySelector('#operator-subtract');
operatorAdd.addEventListener('click', () => {
    operator = 'subtract';
});

const operatorMultiply = document.querySelector('#operator-multiply');
operatorAdd.addEventListener('click', () => {
    operator = 'multiply';
});

const operatorDivide = document.querySelector('#operator-divide');
operatorAdd.addEventListener('click', () => {
    operator = 'divide';
});

