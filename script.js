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

let operator = '';
let storeValue;

const operatorAdd = document.querySelector('#operator-add');
operatorAdd.addEventListener('click', () => {
    operator = 'add';
    storeValue = lowerValue.textContent;
    upperValue.textContent = `${storeValue} +`;
    lowerValue.textContent = '0';
});

const operatorSubtract = document.querySelector('#operator-subtract');
operatorSubtract.addEventListener('click', () => {
    operator = 'subtract';
    storeValue = lowerValue.textContent;
    upperValue.textContent = `${storeValue} -`;
    lowerValue.textContent = '0';
});

const operatorMultiply = document.querySelector('#operator-multiply');
operatorMultiply.addEventListener('click', () => {
    operator = 'multiply';
    storeValue = lowerValue.textContent;
    upperValue.textContent = `${storeValue} ×`;
    lowerValue.textContent = '0';
});

const operatorDivide = document.querySelector('#operator-divide');
operatorDivide.addEventListener('click', () => {
    operator = 'divide';
    storeValue = lowerValue.textContent;
    upperValue.textContent = `${storeValue} ÷`;
    lowerValue.textContent = '0';
});

