//Declaração da Tela(display)
const display = document.querySelector(".display");

//Declaração dos botões que são números
const keyNumbers = Array.from(document.querySelectorAll(".numbers"));

//Declaração do botões operadores 
const keyOperators = Array.from(document.querySelectorAll(".operators"));

let newNumber = true;
let operator;
let oldNumber;

const updateDisplay = (number) => {
    if (newNumber){
        display.textContent = number
        newNumber = false
    } else {
        display.textContent += number
    }
};

const insertNumber = (event) => {
    updateDisplay(event.target.value);
};

keyNumbers.forEach (number => {
    number.addEventListener('click', insertNumber)
});

const selectOperator = (event) => {
    if (!newNumber) {
        newNumber = true;
        operator = event.target.textContent;
        oldNumber = display.textContent;
    }
}

keyOperators.forEach (operator => {
    operator.addEventListener('click', selectOperator)
});

const clear = document.querySelector("#clear")
clear.addEventListener('click', function() {
    display.innerHTML = '0'
});

