
let firstNumber = null;
let secondNumber = null;
let currentOperator = "";
let newLine = false; // determines if the next number user types will reset the calculator display
let calculatorError = false; // error state of the calculator
let showingResult = false; // true when "=" is displayed

// =================== DIGIT BUTTON EVENT HANDLER ===================//
function digitBtnPressed(digit) {
    
    const calculatorDisplay = document.getElementById("calculator-display");
    const operatorDisplay = document.getElementById("operator-display")

    // Clear "=" only when user starts typing again
    if (showingResult) {
        operatorDisplay.innerHTML = "";
        showingResult = false;
    }

    if (newLine) {

        calculatorDisplay.value = digit;
        newLine = false;
        calculatorError = false;
        return;

    } else if (calculatorDisplay.value === "0") {

        calculatorDisplay.value = digit;

    } else {

        calculatorDisplay.value += digit;

    }

}


// =================== DECIMAL BUTTON EVENT HANDLER ===================//
function decimalBtnPressed() {
    
    const calculatorDisplay = document.getElementById("calculator-display");

    if (calculatorError) {

        return;

    }

    if (newLine) {

        calculatorDisplay.value = "0.";
        newLine = false;
        return;

    }

    if (!calculatorDisplay.value.includes(".")) {
        calculatorDisplay.value += ".";
    }
}

// =================== TOGGLE NEGATIVE SIGN BUTTON EVENT HANDLER ===================//
function toggleSignBtnPressed() {

    const calculatorDisplay = document.getElementById("calculator-display");

    if (calculatorError === true || calculatorDisplay.value === "0") {

        return;

    }
    
    calculatorDisplay.value = calculatorDisplay.value * -1;

}

// =================== OPERATOR BUTTON EVENT HANDLER ===================//
function operatorBtnPressed(operator) {

    const calculatorDisplay = document.getElementById("calculator-display");
    const operatorDisplay = document.getElementById("operator-display");

    if (calculatorError) {

        return;

    }

    // If "=" was showing, continue with result
    if (showingResult) {
        showingResult = false;
    }

    // Operator overwrite
    if (currentOperator !== "" && newLine) {
        currentOperator = operator;
        operatorDisplay.innerHTML = operator;
        return;
    }

    firstNumber = parseFloat(calculatorDisplay.value);
    currentOperator = operator;

    operatorDisplay.innerHTML = operator;

    newLine = true;
}

function buttonAcPressed() {

    document.getElementById("calculator-display").value = "0"
    document.getElementById("operator-display").innerHTML = ""
    firstNumber = null;
    secondNumber = null;
    currentOperator = "";
    newLine = false;
    calculatorError = false;
    showingResult = false;

}

// =================== EQUAL-SIGN BUTTON EVENT HANDLER ===================//
function equalBtnPressed() {

    const calculatorDisplay = document.getElementById("calculator-display");
    const operatorDisplay = document.getElementById("operator-display");

    if (calculatorError || currentOperator === "") {

        return;

    }

    secondNumber = parseFloat(calculatorDisplay.value)

    let result;

    switch (currentOperator) {

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
                newLine = true;
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
    currentOperator = "";
    newLine = true;
    showingResult = true;

}