// Basic functions

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

// Function that evaluates the operator and calls a basic function

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

// Some variables

let lowerValue = document.querySelector('#lowerscreen');
let upperValue = document.querySelector('#upperscreen');

let result;
let storeValue;
let finalResult = false;
let storeObject = {};

// Number buttons logic

const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', function() {
        if (finalResult == true) {
            clearData();
            lowerValue.textContent = numberButton.textContent;
        } else if (lowerValue.textContent === '0') {
            lowerValue.textContent = numberButton.textContent;
        } else {
            if ((lowerValue.textContent).length === 12) return;
            lowerValue.textContent += numberButton.textContent;
        }
    });
});

// Operator buttons logic

const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', function() {
        if (storeObject.numberOne === undefined) {
            if (lowerValue.textContent === '0') return;
            if (operatorButton.textContent === '=') return;
            storeObject.numberOne = lowerValue.textContent;
            storeObject.operator = operatorButton.textContent;
            upperValue.textContent = `${lowerValue.textContent} ${operatorButton.textContent}`;
            lowerValue.textContent = '0';
        } else if (storeObject.numberTwo === undefined) {
            if (lowerValue.textContent === '0') {
                if (operatorButton.textContent === '=') {
                    storeObject.numberTwo = lowerValue.textContent;
                    if (storeObject.numberTwo === '0' && storeObject.operator === '÷') {
                        storeObject.numberTwo = undefined;
                        upperValue.textContent = `${storeObject.numberOne} ${storeObject.operator}`;
                        alert('Can\'t divide by 0');
                        return;
                    }
                    operate(storeObject.numberOne, storeObject.numberTwo)
                    upperValue.textContent = `${storeObject.numberOne} ${storeObject.operator} ${storeObject.numberTwo} ${operatorButton.textContent}`;
                    lowerValue.textContent = result;
                    storeObject.operator = undefined;
                    storeObject.numberOne = result;
                    storeObject.numberTwo = undefined;
                    finalResult = true;
                } else {
                    storeObject.operator = operatorButton.textContent;
                    upperValue.textContent = `${storeObject.numberOne} ${operatorButton.textContent}`;
                }
            } else if (operatorButton.textContent === '=') {
                if (storeObject.operator === undefined) return;
                storeObject.numberTwo = lowerValue.textContent;
                operate(storeObject.numberOne, storeObject.numberTwo)
                upperValue.textContent = `${storeObject.numberOne} ${storeObject.operator} ${storeObject.numberTwo} ${operatorButton.textContent}`;
                lowerValue.textContent = result;
                storeObject.operator = undefined;
                storeObject.numberOne = result;
                storeObject.numberTwo = undefined;
                finalResult = true;
            } else {
                storeObject.numberTwo = lowerValue.textContent;
                operate(storeObject.numberOne, storeObject.numberTwo);
                storeObject.operator = operatorButton.textContent;
                upperValue.textContent = `${result} ${operatorButton.textContent}`;            
                lowerValue.textContent = '0';
                storeObject.numberOne = result;
                storeObject.numberTwo = undefined;
                finalResult = false;
            }
        }
    })
});

// Clear button

function clearData() {
    upperValue.textContent = '';
    lowerValue.textContent = '0';
    storeValue = '';
    result = undefined;
    finalResult = false;
    storeObject = {};
}

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearData);

// Backspace button

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

// Dot button

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

// Keyboard support

window.addEventListener('keydown', function(e) {
    const buttonKey = document.querySelector(`button[data-code='${e.key}']`);
    buttonKey.click();
})