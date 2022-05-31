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

const one = document.querySelector('#one');
one.addEventListener('click', () => {
    if (lowerscreen.textContent === '0') {
        lowerscreen.textContent = '1';
    } else {
        lowerscreen.textContent += '1';
    }
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    if (lowerscreen.textContent === '0') {
        lowerscreen.textContent = '2';
    } else {
        lowerscreen.textContent += '2';
    }
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    if (lowerscreen.textContent === '0') {
        lowerscreen.textContent = '3';
    } else {
        lowerscreen.textContent += '3';
    }
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    if (lowerscreen.textContent === '0') {
        lowerscreen.textContent = '4';
    } else {
        lowerscreen.textContent += '4';
    }
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    if (lowerscreen.textContent === '0') {
        lowerscreen.textContent = '5';
    } else {
        lowerscreen.textContent += '5';
    }
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    if (lowerscreen.textContent === '0') {
        lowerscreen.textContent = '6';
    } else {
        lowerscreen.textContent += '6';
    }
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    if (lowerscreen.textContent === '0') {
        lowerscreen.textContent = '7';
    } else {
        lowerscreen.textContent += '7';
    }
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    if (lowerscreen.textContent === '0') {
        lowerscreen.textContent = '8';
    } else {
        lowerscreen.textContent += '8';
    }
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    if (lowerscreen.textContent === '0') {
        lowerscreen.textContent = '9';
    } else {
        lowerscreen.textContent += '9';
    }
});

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    if (lowerscreen.textContent === '0') {
        lowerscreen.textContent = '0';
    } else {
        lowerscreen.textContent += '0';
    }
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    lowerscreen.textContent = '0';
})

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => {
    lowerscreen.textContent = (lowerscreen.textContent).slice(0, -1);
    if ((lowerscreen.textContent).length === 0) lowerscreen.textContent = '0';
})

