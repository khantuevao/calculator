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

function operate(a, b) {
    if (operator === '+') {
        result = +(add(a, b)).toFixed(2);
    } else if (operator === '-') {
        result = +(subtract(a, b)).toFixed(2);
    } else if (operator === '×') {
        result = +(multiply(a, b)).toFixed(2);
    } else if (operator === '÷') {
        result = +(divide(a , b)).toFixed(2);
    } else {
        alert('Error, check operate function!');
    }
}

let lowerValue = document.querySelector('#lowerscreen');
let upperValue = document.querySelector('#upperscreen');

const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', function() {
        if (finalResult == true) {
            clearData();
            lowerValue.textContent = numberButton.textContent;
        } else if (lowerValue.textContent === '0') {
            lowerValue.textContent = numberButton.textContent;
        } else {
            lowerValue.textContent += numberButton.textContent;
        }
    });
});

function clearData() {
    upperValue.textContent = '';
    lowerValue.textContent = '0';
    storeValue = '';
    result = undefined;
    operator = '';
    finalResult = false;
}

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearData);

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => {
    if (finalResult) {
        clearData();
    } else {
        lowerValue.textContent = (lowerValue.textContent).slice(0, -1);
    }
    if (lowerValue.textContent === '' || lowerValue.textContent === '0') {
        lowerValue.textContent = '0';
    }
});

function checkDot() {
    let array = (lowerValue.textContent).split('');
    let checkArray = array.includes('.');
    return checkArray;
}

const dot = document.querySelector('#dot');
dot.addEventListener('click', () => {
    if (checkDot()) {
        return;
    } else if (finalResult == true) {
        clearData();
        lowerValue.textContent += dot.textContent;
    } else {
        lowerValue.textContent += dot.textContent;
    }
});

let result;
let operator;
let storeValue;
let finalResult = false;

// start here

const operatorAdd = document.querySelector('#operator-add');
operatorAdd.addEventListener('click', () => {
    
    finalResult = false;
});

const operatorSubtract = document.querySelector('#operator-subtract');
operatorSubtract.addEventListener('click', () => {
    
    finalResult = false;
});

const operatorMultiply = document.querySelector('#operator-multiply');
operatorMultiply.addEventListener('click', () => {
   
    finalResult = false;
});

const operatorDivide = document.querySelector('#operator-divide');
operatorDivide.addEventListener('click', () => {
   
    finalResult = false;
});

const operatorCount = document.querySelector('#operator-count');
operatorCount.addEventListener('click', () => {
    if (operator === '') return;
    operate(storeValue, lowerValue.textContent);
    if (result === '0') return;
    upperValue.textContent = `${storeValue} ${operator} ${lowerValue.textContent} =`;
    lowerValue.textContent = `${result}`;
    storeValue = result;
    operator = '';
    finalResult = true;
    
})