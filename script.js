let result;

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) return 0;
    return a / b;
}

function operate(a, b) {
    if (operator === '+') {
        result = +(add(a, b)).toFixed(2);
    } else if (operator === '-') {
        result = +(subtract(a, b)).toFixed(2);
    } else if (operator === '×') {
        result = +(multiply(a, b)).toFixed(2);
    } else if (operator === '÷') {
        result = +(divide(a ,b)).toFixed(2);
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

// operator functions (+-*/) are almost identical, need to figure how to
// combine them to take less space

const operatorAdd = document.querySelector('#operator-add');
operatorAdd.addEventListener('click', () => {
    if (operator === '') {
        operator = '+';
        storeValue = lowerValue.textContent;
        upperValue.textContent = `${storeValue} ${operator}`;
        lowerValue.textContent = 0;
    } else if (!(operator === '+')) { 
        operate(storeValue, lowerValue.textContent);
        operator = '+';
        upperValue.textContent = `${result} ${operator}`;
        lowerValue.textContent = 0;
        storeValue = result;
    } else {
        operate(storeValue, lowerValue.textContent);
        upperValue.textContent = `${result} ${operator}`;
        lowerValue.textContent = 0;
        storeValue = result;
    }
});

const operatorSubtract = document.querySelector('#operator-subtract');
operatorSubtract.addEventListener('click', () => {
    if (operator === '') {
        operator = '-';
        storeValue = lowerValue.textContent;
        upperValue.textContent = `${storeValue} ${operator}`;
        lowerValue.textContent = 0;
    } else if (!(operator === '-')) { 
        operate(storeValue, lowerValue.textContent);
        operator = '-';
        upperValue.textContent = `${result} ${operator}`;
        lowerValue.textContent = 0;
        storeValue = result;
    } else {
        operate(storeValue, lowerValue.textContent);
        upperValue.textContent = `${result} ${operator}`;
        lowerValue.textContent = 0;
        storeValue = result;
    }
});

const operatorMultiply = document.querySelector('#operator-multiply');
operatorMultiply.addEventListener('click', () => {
    if (operator === '') {
        operator = '×';
        storeValue = lowerValue.textContent;
        upperValue.textContent = `${storeValue} ${operator}`;
        lowerValue.textContent = 0;
    } else if (!(operator === '×')) { 
        operate(storeValue, lowerValue.textContent);
        operator = '×';
        upperValue.textContent = `${result} ${operator}`;
        lowerValue.textContent = 0;
        storeValue = result;
    } else {
        operate(storeValue, lowerValue.textContent);
        upperValue.textContent = `${result} ${operator}`;
        lowerValue.textContent = 0;
        storeValue = result;
    }
});

const operatorDivide = document.querySelector('#operator-divide');
operatorDivide.addEventListener('click', () => {
    if (operator === '') {
        operator = '÷';
        storeValue = lowerValue.textContent;
        upperValue.textContent = `${storeValue} ${operator}`;
        lowerValue.textContent = 0;
    } else if (!(operator === '÷')) { 
        operate(storeValue, lowerValue.textContent);
        operator = '÷';
        upperValue.textContent = `${result} ${operator}`;
        lowerValue.textContent = 0;
        storeValue = result;
    } else {
        operate(storeValue, lowerValue.textContent);
        upperValue.textContent = `${result} ${operator}`;
        lowerValue.textContent = 0;
        storeValue = result;
    }
});

const operatorCount = document.querySelector('#operator-count');
operatorCount.addEventListener('click', () => {
    if (operator === '') return;
    operate(storeValue, lowerValue.textContent);
    upperValue.textContent = `${storeValue} ${operator} ${lowerValue.textContent} =`;
    lowerValue.textContent = `${result}`;
    storeValue = result;
    operator = '';
})