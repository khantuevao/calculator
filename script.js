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
let upperValue;

const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', function() {
        lowerValue.textContent += numberButton.textContent;
    });
});


