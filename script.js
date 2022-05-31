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

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    lowerscreen.textContent = '0';
    upperscreen.textContent = '';
    displayValue = 0;
    storeValue = 0;
})

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => {
    lowerscreen.textContent = (lowerscreen.textContent).slice(0, -1);
    if ((lowerscreen.textContent).length === 0) lowerscreen.textContent = '0';
})

let storeValue;
let displayValue = 0;
let operator;
let result;

const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    storeValue = displayValue;
    upperscreen.textContent = `${storeValue} +`;
    displayValue = 0;
    operator = 'add';
})

const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    storeValue = displayValue;
    upperscreen.textContent = `${storeValue} -`;
    displayValue = 0;
    operator = 'subtract';
})

const multiplyBtn = document.querySelector('#multiplyBtn');
multiplyBtn.addEventListener('click', () => {
    storeValue = displayValue;
    upperscreen.textContent = `${storeValue} ×`;
    displayValue = 0;
    operator = 'multiply';
})

const divideBtn = document.querySelector('#divideBtn');
divideBtn.addEventListener('click', () => {
    storeValue = displayValue;
    upperscreen.textContent = `${storeValue} ÷`;
    displayValue = 0;
    operator = 'divide';
})

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    if (operator === 'add') {
        result = add(storeValue, displayValue);
        displayValue = result;
        lowerscreen.textContent = result;
    } else if (operator === 'subtract') {
        result = subtract(storeValue, displayValue);
        displayValue = result;
        lowerscreen.textContent = result;
    } else if (operator === 'multiply') {
        result = multiply(storeValue, displayValue);
        displayValue = result;
        lowerscreen.textContent = result;
    } else {
        result = divide(storeValue, displayValue);
        displayValue = result;
        lowerscreen.textContent = result;
    }
})

