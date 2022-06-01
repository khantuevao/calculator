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
    return a / b;
}

let result;
function operate(a, b) {
    if (operator === '+') {
        result = add(a, b);
    } else if (operator === '-') {
        result = subtract(a, b);
    } else if (operator === '*') {
        result = multiply(a, b);
    } else if (operator === '/') {
        result = divide(a ,b);
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
    operator = '+';
    storeValue = lowerValue.textContent;
    upperValue.textContent = `${storeValue} ${operator}`;
    lowerValue.textContent = '0';
});

const operatorSubtract = document.querySelector('#operator-subtract');
operatorSubtract.addEventListener('click', () => {
    operator = '-';
    storeValue = lowerValue.textContent;
    upperValue.textContent = `${storeValue} ${operator}`;
    lowerValue.textContent = '0';
});

const operatorMultiply = document.querySelector('#operator-multiply');
operatorMultiply.addEventListener('click', () => {
    operator = '*';
    storeValue = lowerValue.textContent;
    upperValue.textContent = `${storeValue} ${operator}`;
    lowerValue.textContent = '0';
});

const operatorDivide = document.querySelector('#operator-divide');
operatorDivide.addEventListener('click', () => {
    operator = '/';
    storeValue = lowerValue.textContent;
    upperValue.textContent = `${storeValue} ${operator}`;
    lowerValue.textContent = '0';
});

const operatorCount = document.querySelector('#operator-count');
operatorCount.addEventListener('click', () => {
    if (operator === '') return;
    operate(storeValue, lowerValue.textContent);
    upperValue.textContent = `${storeValue} ${operator} ${lowerValue.textContent} =`
    lowerValue.textContent = `${result}`;
    storeValue = result;
    operator = '';
})