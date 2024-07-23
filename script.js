//Get button elements
const button0 = document.getElementById("button-0")
const button1 = document.getElementById("button-1")
const button2 = document.getElementById("button-2")
const button3 = document.getElementById("button-3")
const button4 = document.getElementById("button-4")
const button5 = document.getElementById("button-5")
const button6 = document.getElementById("button-6")
const button7 = document.getElementById("button-7")
const button8 = document.getElementById("button-8")
const button9 = document.getElementById("button-9")
const buttonAdd = document.getElementById("button-add")
const buttonSubstract = document.getElementById("button-substract")
const buttonMultiply = document.getElementById("button-multiply")
const buttonDivide = document.getElementById("button-divide")
const buttonPercentage = document.getElementById("button-percentage")
const buttonDecimal = document.getElementById("button-decimal")
const buttonEqual = document.getElementById("button-equal")
const buttonClear = document.getElementById("button-clear")
const displayText = document.getElementById("display-text")

//Declare essential variables
let firstNumber = 0;
let operator = 0;
let secondNumber = 0;
const MAX_DISPLAY_LENGTH = 10;

//Arrays where the numbers will be processed
const arrayOfFirstNumber = [];
const arrayOfCalculation = [];
const arrayOfSecondNumber = [];
const operation = firstNumber + operator + secondNumber

function addDisplay(event) {
    const getButton = event.target
    const getTextButton = getButton.textContent

    if (operator === 0) {
    arrayOfFirstNumber.push(getTextButton);
    const arrayJoin = arrayOfFirstNumber.join("");
    firstNumber = Number(arrayJoin);

    displayText.textContent = firstNumber

    } else {
    arrayOfSecondNumber.push(getTextButton);
    const arrayJoin = arrayOfSecondNumber.join("");
    secondNumber = Number(arrayJoin);
    displayText.textContent = firstNumber + operator + secondNumber
    }

}

function addOperator(event) {
    const getButton = event.target
    const getTextButton = getButton.textContent
    operator = getTextButton
    displayText.textContent = firstNumber + getTextButton
}

function clearDisplay() {
    arrayOfFirstNumber.splice(0, arrayOfFirstNumber.length);
    arrayOfSecondNumber.splice(0, arrayOfSecondNumber.length);
    operator = 0;
    displayText.textContent = 0;
}

function operate() {
    let result;
    switch(operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case 'x':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = secondNumber !== 0 ? firstNumber / secondNumber : 'Error';
            break;
        default:
            result = 'Error';
    }

    displayText.textContent = result
    firstNumber = result.toFixed(2);
    secondNumber = 0;
    operator = 0;
    arrayOfSecondNumber.splice(0, arrayOfSecondNumber.length);
}


//Event listeners for the buttons
button0.addEventListener("click", addDisplay)
button1.addEventListener("click", addDisplay)
button2.addEventListener("click", addDisplay)
button3.addEventListener("click", addDisplay)
button4.addEventListener("click", addDisplay)
button5.addEventListener("click", addDisplay)
button6.addEventListener("click", addDisplay)
button7.addEventListener("click", addDisplay)
button8.addEventListener("click", addDisplay)
button9.addEventListener("click", addDisplay)
buttonAdd.addEventListener("click", addOperator)
buttonSubstract.addEventListener("click", addOperator)
buttonMultiply.addEventListener("click", addOperator)
buttonDivide.addEventListener("click", addOperator)
buttonDecimal.addEventListener("click", addDisplay)
buttonEqual.addEventListener("click", operate)
buttonClear.addEventListener("click", clearDisplay)
displayText.addEventListener("click", addDisplay)