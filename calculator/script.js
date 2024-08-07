let input = document.querySelector('.container .input-box input');
let result = document.querySelector('.container .input-box .result');

function appendValue(value) {
    input.value += value;
    calculate();
}

function appendOperator(operator) {
    input.value += ` ${operator} `;
    calculate();
}

function backSpace() {
    input.value = input.value.slice(0, -1);
    calculate();
}

function clearInput() {
    input.value = '';
    result.textContent = '0';
}

function calculate() {
    try {
        let expression = input.value.replace(/×/g, '*').replace(/÷/g, '/');
        let output = eval(expression);
        if (isNaN(output) || output === Infinity || output === -Infinity) {
            result.textContent = 'Error';
        } else {
            result.textContent = output;
        }
    } catch (error) {
        result.textContent = 'Error';
    }
}