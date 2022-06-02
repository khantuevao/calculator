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
    if (storeObject.operator === '+') {
        result = +(add(a, b)).toFixed(2);
    } else if (storeObject.operator === '-') {
        result = +(subtract(a, b)).toFixed(2);
    } else if (storeObject.operator === '×') {
        result = +(multiply(a, b)).toFixed(2);
    } else if (storeObject.operator === '÷') {
        result = +(divide(a , b)).toFixed(2);
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

let result;
let operator;
let isOoperator = false;
let storeValue;
let finalResult = false;
let storeObject = {};

const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', function() {
        if (storeObject.numberOne === undefined) {
            if (lowerValue.textContent === '0') return;
            storeObject.numberOne = lowerValue.textContent;
            storeObject.operator = operatorButton.textContent;
            upperValue.textContent = `${lowerValue.textContent} ${operatorButton.textContent}`;
            lowerValue.textContent = '0';
        } else if (storeObject.numberTwo === undefined) {
            if (lowerValue.textContent === '0') return;
            if (operatorButton.textContent === '=') {
                if (storeObject.operator === undefined) return;
                storeObject.numberTwo = lowerValue.textContent;
                operate(storeObject.numberOne, storeObject.numberTwo)
                upperValue.textContent = `${storeObject.numberOne} ${storeObject.operator} ${storeObject.numberTwo} ${operatorButton.textContent}`;
                lowerValue.textContent = result;
                storeObject.operator = undefined;
                storeObject.numberOne = result;
                storeObject.numberTwo = undefined;
            } else {
                storeObject.numberTwo = lowerValue.textContent;
                operate(storeObject.numberOne, storeObject.numberTwo);
                storeObject.operator = operatorButton.textContent;
                upperValue.textContent = `${result} ${operatorButton.textContent}`;            
                lowerValue.textContent = '0';
                storeObject.numberOne = result;
                storeObject.numberTwo = undefined;
            }
        }
    })
});

function clearData() {
    upperValue.textContent = '';
    lowerValue.textContent = '0';
    storeValue = '';
    result = undefined;
    operator = '';
    finalResult = false;
    storeObject = {};
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