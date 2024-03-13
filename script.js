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

/*const keyNumbers = Array.from(document.querySelector("#numbers"))

keyNumbers.map((item) => {
    item.addEventListener('click', function (event) {
        let number = item
        return number
    })
})*/









/*const seven = document.querySelector("#seven")
seven.addEventListener('click', function(display) {
    if (display.textContent == 0) {
        display.innerHTML = seven.textContent
    }
}) 

const eight = document.querySelector("#eight")
eight.addEventListener('click', function() {
    display.innerHTML = eight.textContent
}) 

const nine = document.querySelector("#nine")
nine.addEventListener('click', function() {
    display.innerHTML = nine.textContent
}) 

const four = document.querySelector("#four")
four.addEventListener('click', function() {
    display.innerHTML = four.textContent
}) 

const five = document.querySelector("#five")
five.addEventListener('click', function() {
    display.innerHTML = five.textContent
}) 

const six = document.querySelector("#six")
six.addEventListener('click', function() {
    display.innerHTML = six.textContent
}) 

const one = document.querySelector("#one")
one.addEventListener('click', function() {
    display.innerHTML = one.textContent
})

const two = document.querySelector("#two")
two.addEventListener('click', function() {
    display.innerHTML = two.textContent
}) 

const three = document.querySelector("#three")
three.addEventListener('click', function() {
    display.innerHTML = three.textContent
}) 

const zero = document.querySelector("#zero")
zero.addEventListener('click', function() {
    display.innerHTML = zero.textContent
}) 

const clear = document.querySelector("#clear")
clear.addEventListener('click', function() {
    display.innerHTML = '0'
}) */