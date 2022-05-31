function add(a, b) {
    oldStoreValue = a;
    oldDisplayValue = b;
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        alert('Error, cannot divide by 0');
    } else {
        return a / b;
    }
}

function operate(operator, a, b) {
    if (operator === '+') {
        add(a, b);
    } else if (operator === '-') {
        subtract(a, b);
    } else if (operator === '*') {
        multiply(a, b);
    } else {
        divide(a, b);
    }
} 

const lowerscreen = document.querySelector('#lowerscreen');
const upperscreen = document.querySelector('#upperscreen');

const one = document.querySelector('#one');
one.addEventListener('click', () => {
    if (lowerscreen.textContent === '0' || displayValue === 0) {
        lowerscreen.textContent = '1';
    } else {
        lowerscreen.textContent += '1';
    }
    displayValue = lowerscreen.textContent;
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    if (lowerscreen.textContent === '0' || displayValue === 0) {
        
        lowerscreen.textContent = '2';
    } else {
        lowerscreen.textContent += '2';
    }
    displayValue = lowerscreen.textContent;
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    if (lowerscreen.textContent === '0' || displayValue === 0) {
        lowerscreen.textContent = '3';
    } else {
        lowerscreen.textContent += '3';
    }
    displayValue = lowerscreen.textContent;
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    if (lowerscreen.textContent === '0' || displayValue === 0) {
        lowerscreen.textContent = '4';
    } else {
        lowerscreen.textContent += '4';
    }
    displayValue = lowerscreen.textContent;
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    if (lowerscreen.textContent === '0' || displayValue === 0) {
        lowerscreen.textContent = '5';
    } else {
        lowerscreen.textContent += '5';
    }
    displayValue = lowerscreen.textContent;
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    if (lowerscreen.textContent === '0' || displayValue === 0) {
        lowerscreen.textContent = '6';
    } else {
        lowerscreen.textContent += '6';
    }
    displayValue = lowerscreen.textContent;
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    if (lowerscreen.textContent === '0' || displayValue === 0) {
        lowerscreen.textContent = '7';
    } else {
        lowerscreen.textContent += '7';
    }
    displayValue = lowerscreen.textContent;
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    if (lowerscreen.textContent === '0' || displayValue === 0) {
        lowerscreen.textContent = '8';
    } else {
        lowerscreen.textContent += '8';
    }
    displayValue = lowerscreen.textContent;
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    if (lowerscreen.textContent === '0' || displayValue === 0) {
        lowerscreen.textContent = '9';
    } else {
        lowerscreen.textContent += '9';
    }
    displayValue = lowerscreen.textContent;
});

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    if (lowerscreen.textContent === '0' || displayValue === 0) {
        lowerscreen.textContent = '0';
    } else {
        lowerscreen.textContent += '0';
    }
    displayValue = lowerscreen.textContent;
});

let checkDot = () => {
    let checkArray = (lowerscreen.textContent).split('');
    let findArray = checkArray.includes('.');
    return findArray;
}

const dot = document.querySelector('#dot');
dot.addEventListener('click', () => {
    if (checkDot()) {
        return;
    } else {
        lowerscreen.textContent += '.';
        displayValue = lowerscreen.textContent;
    }
});

function clearValue() {
    lowerscreen.textContent = '0';
    upperscreen.textContent = '';
    displayValue = 0;
    storeValue = 0;
}

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearValue)

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => {
    if ((lowerscreen.textContent).length === 0) {
        lowerscreen.textContent = '0';
    } else if (displayValue === result) {
        clearValue()
        lowerscreen.textContent = '0';
    } else {
        lowerscreen.textContent = (lowerscreen.textContent).slice(0, -1);
        displayValue = lowerscreen.textContent;
    }
})

let storeValue = 0;
let displayValue = 0;
let oldDisplayValue = 0;
let oldStoreValue = 0;
let operator;
let result;

const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    if (storeValue === 0 || displayValue === result) {
        storeValue = displayValue;
        upperscreen.textContent = `${storeValue} +`;
        displayValue = 0;
    } else {
        equalBt();
        upperscreen.textContent = `${storeValue} +`;
        displayValue = 0;
    }
    operator = 'add';
})

const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    if (storeValue === 0 || displayValue === result) {
        storeValue = displayValue;
        upperscreen.textContent = `${storeValue} -`;
        displayValue = 0;
    } else {
        equalBt();
        upperscreen.textContent = `${storeValue} -`;
        displayValue = 0;
    }
    operator = 'subtract';
})

const multiplyBtn = document.querySelector('#multiplyBtn');
multiplyBtn.addEventListener('click', () => {
    if (storeValue === 0 || displayValue === result) {
        storeValue = displayValue;
        upperscreen.textContent = `${storeValue} ×`;
        displayValue = 0;
    } else {
        equalBt();
        upperscreen.textContent = `${storeValue} ×`;
        displayValue = 0;
    }
    operator = 'multiply';
})

const divideBtn = document.querySelector('#divideBtn');
divideBtn.addEventListener('click', () => {
    if (storeValue === 0 || displayValue === result) {
        storeValue = displayValue;
        upperscreen.textContent = `${storeValue} ÷`;
        displayValue = 0;
    } else {
        equalBt();
        upperscreen.textContent = `${storeValue} ÷`;
        displayValue = 0;
    }
    operator = 'divide';
})

const equal = document.querySelector('#equal');
equal.addEventListener('click', equalBt);

function equalBt() {
    if (operator === 'add') {
        result = (add(storeValue, displayValue)).toFixed(2);
        upperscreen.textContent = `${storeValue} + ${displayValue} =`;
        displayValue = result;
        lowerscreen.textContent = result
        storeValue = result;
        operator = '';
    } else if (operator === 'subtract') {
        result = (subtract(storeValue, displayValue)).toFixed(2);
        upperscreen.textContent = `${storeValue} - ${displayValue} =`;
        displayValue = result;
        lowerscreen.textContent = result;
        storeValue = result;
        operator = '';
    } else if (operator === 'multiply') {
        result = (multiply(storeValue, displayValue)).toFixed(2);
        upperscreen.textContent = `${storeValue} × ${displayValue} =`;
        displayValue = result;
        lowerscreen.textContent = result
        storeValue = result;
        operator = '';
    } else if (operator === 'divide'){
        result = (divide(storeValue, displayValue)).toFixed(2);
        if (result === undefined) {
            clearValue()
            result = 0;
        } else {
            upperscreen.textContent = `${storeValue} ÷ ${displayValue} =`;
            displayValue = result;
            lowerscreen.textContent = result
            storeValue = result;
            operator = '';
        }
    }
}

