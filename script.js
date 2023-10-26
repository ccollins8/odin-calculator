function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

let num1;
let operator;
let num2;

function operate(operator,a,b) {
    a = Number(a)
    b = Number(b)
    if (operator == "+") return add(a,b)
    else if (operator == "-") return subtract(a,b);
    else if (operator == "*") return multiply(a,b);
    else return divide(a,b);
}

// step 4

const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        if (num1 == null && num2 == null &&
            button.classList.contains('digit')) {
            num1 = button.textContent;
            display.textContent = num1
        } else if (num1 != null && num2 == null &&
            button.classList.contains('digit') && operator == null) {
                num1 += button.textContent;
                display.textContent = num1
        } else if ( num1 != null &&
            button.classList.contains('operator') &&
            operator == null) {
                operator = button.textContent
                display.textContent = num1 + " " + operator
        } else if (num1 != null && 
            button.classList.contains('operator') &&
            operator != null) {
                operator = button.textContent
                display.textContent = num1 + operator
        } else if (num2 == null && operator != null &&
          button.classList.contains('digit')) {
                num2 = button.textContent;
                display.textContent = num1 + " " + operator + " " + num2
        } else if (num2 != null && operator != null &&
            button.classList.contains('digit')) {
                  num2 += button.textContent;
                  display.textContent = num1 + " " + operator + " " + num2
        } else if (button.classList.contains('equals')) {
            display.textContent += " = " + operate(operator,num1,num2)
            clear()
        } else if (button.classList.contains('clear')) {
            clear();
            display.textContent = ""
        }
    })

});

function clear() {
    num1 = null;
    num2 = null;
    operator = null;
}