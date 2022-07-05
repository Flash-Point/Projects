let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) { return x / yl }

function operate (operand1, operator, operand2) {
    switch (operator) {
        case '+' : add(operand1,operand2);
        break;
        case '-' : subtract(operand1,operand2);
        break;
        case '*' : multiply(operand1,operand2);
        break;
        case '/' : divide(operand1,operand2);
        break;
    }
}

function clearDisplay() {
    display.innerText = '';
}

function removeChar() {
    display.innerText = display.innerText.slice(0, -1);
}

function displayString(string) {
    display.innerText += string.target.innerText;
}

buttons.map( button => {
    button.addEventListener("click", (value) => {
        
        switch(value.target.innerText) {
            case 'C' : clearDisplay();
            break;
            case '←' : removeChar();
            break;
            default : displayString(value);
        }
    })
});




