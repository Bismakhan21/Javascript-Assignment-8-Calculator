var display = document.getElementById("display");
var operatorPressed = false;

function appendToDisplay(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        if (!operatorPressed) {
            display.value += value;
            operatorPressed = true;
        }
    } else {
        display.value += value;
        operatorPressed = false;
    }
}

function clearDisplay() {
    display.value = "";
    operatorPressed = false;
}

function deleteLastCharacter() {
    var currentValue = display.value;
    display.value = currentValue.slice(0, -1);
    operatorPressed = false;
}

function appendDecimal() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
    operatorPressed = false;
}
