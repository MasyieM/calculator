
let firstNumber = null;
let secondNumber = null;
let operatorChosen = "";
let shouldResetDisplay = false;
let calculatorError = false;

function digitBtnPressed(digit) {
    
    const calculatorDisplay = document.getElementById("calculator-display");
    const operatorDisplay = document.getElementById("operator-display")

    if (shouldResetDisplay) {

        operatorDisplay.innerHTML = "";
        calculatorDisplay.value = digit;
        shouldResetDisplay = false;
        calculatorError = false;
        return;

    } else if (calculatorDisplay.value === "0") {

        calculatorDisplay.value = digit;

    } else {

        calculatorDisplay.value += digit

    }

}

function decimalBtnPressed() {
    
    const calculatorDisplay = document.getElementById("calculator-display");

    if (calculatorError) {

        return;

    }

    if (shouldResetDisplay) {

        calculatorDisplay.value = "0.";
        shouldResetDisplay = false;
        return;

    }

    if (!calculatorDisplay.value.includes(".")) {
        calculatorDisplay.value += ".";
    }
}

function toggleSignBtnPressed() {

    const calculatorDisplay = document.getElementById("calculator-display");

    if (calculatorError === true || calculatorDisplay.value === "0") {

        return;

    }
    
    calculatorDisplay.value = calculatorDisplay.value * -1;

}

function operatorBtnPressed(operator) {

    const calculatorDisplay = document.getElementById("calculator-display");
    const operatorDisplay = document.getElementById("operator-display");

    if (calculatorError || (operatorChosen !== "" && shouldResetDisplay)) {

        return;

    }

    firstNumber = parseFloat(calculatorDisplay.value);
    operatorChosen = operator;

    operatorDisplay.innerHTML = operator;

    shouldResetDisplay = true;
}

function buttonAcPressed() {

    document.getElementById("calculator-display").value = "0"
    document.getElementById("operator-display").innerHTML = ""
    firstNumber = null;
    secondNumber = null;
    operatorChosen = "";
    shouldResetDisplay = false;
    calculatorError = false;

}

function equalBtnPressed() {

    const calculatorDisplay = document.getElementById("calculator-display");
    const operatorDisplay = document.getElementById("operator-display");

    if (calculatorError || operatorChosen === "") {

        return;

    }

    secondNumber = parseFloat(calculatorDisplay.value)

    let result;

    switch (operatorChosen) {

        case "+":

            result = firstNumber + secondNumber;
            break;

        case "-":

            result = firstNumber - secondNumber;
            break;

        case "x":

            result = firstNumber * secondNumber;
            break;

        case "÷":

            if (secondNumber === 0) {

                result = "Error";
                calculatorError = true;
                shouldResetDisplay = true;
                break;

            } else {

                result = firstNumber / secondNumber;
                break;

            }

    }

    calculatorDisplay.value = result;
    firstNumber = null;
    secondNumber = null;
    operatorDisplay.innerHTML = "=";
    operatorChosen = "";
    shouldResetDisplay = true;

}