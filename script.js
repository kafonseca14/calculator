//Declaração da Tela(display)
const display = document.querySelector(".display");

//Declaração dos botões que são números
const keyNumbers = Array.from(document.querySelectorAll(".numbers"));

//Declaração do botões operadores 
const keyOperators = Array.from(document.querySelectorAll(".operators"));

//Declaração do botão de igual
const equalSign = document.querySelector('#equal-sign');

//Declaração de variáveis para guardar valores para soma
let newNumber = true;
let operator;
let oldNumber;

//Função do cálculo
const calculate = () => {

    let actualNumber = parseFloat(display.textContent)
    newNumber = true

    switch (operator) {
        case '+':
            updateDisplay(oldNumber + actualNumber);
            break;
        case '-':
            updateDisplay(oldNumber - actualNumber);
            break;
        case 'x':
            updateDisplay(oldNumber * actualNumber);
            break;
        case '÷':
            updateDisplay(oldNumber / actualNumber);
            break;
    }
}

//Função que recebe o valor captado no evento para mostrar na tela
const updateDisplay = (number) => {
    //Verificação se é um novo número (que não seja zero)
    if (newNumber) {
        display.textContent = number
        newNumber = false
    } else {
        display.textContent += number
    }
};

//Função que recebe o evento 'click' como parâmetro e chama outra função passando o valor captado no evento
const insertNumber = (event) => {
    updateDisplay(event.target.value);
};

//Evento de click para as teclas numéricas
keyNumbers.forEach(number => {
    number.addEventListener('click', insertNumber)
});

//Função para armazenar alguns valores para o cálculo
const selectOperator = (event) => {
    if (!newNumber) {
        newNumber = true;
        operator = event.target.textContent;
        oldNumber = parseFloat(display.textContent);
    }
};

//Evento de click para as teclas operadores
keyOperators.forEach(operator => {
    operator.addEventListener('click', selectOperator)
})

//Evento de click para a tecla igual
equalSign.addEventListener('click', calculate)

//Declaração da tecla AC e Função para limpar o dígito da tela
const clear = document.querySelector("#clear")
clear.addEventListener('click', function () {
    display.innerHTML = '0'
    newNumber = true
});

