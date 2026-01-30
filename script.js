
let firstNumber = null;
let operatorChosen = "";
let shouldResetDisplay = false;

function digitBtnPressed(digit) {
    
    const display = document.getElementById("input-number");

    if (shouldResetDisplay) {

        display.value = digit;
        shouldResetDisplay = false;

    } else if (display.value === "0") {

        display.value = digit;

    } else {

        display.value +=digit

    }

}

function decimalBtnPressed() {

    const display = document.getElementById("input-number");

    if (shouldResetDisplay) {
        display.value = "0.";
        shouldResetDisplay = false;
        return;
    }

    if (!display.value.includes(".")) {
        display.value += ".";
    }
}

function operatorBtnPressed(operator) {

    firstNumber = document.getElementById("input-number").value;
    operatorChosen = operator;

    document.getElementById("operator-display").innerHTML = operator;

    shouldResetDisplay = true;
}

function buttonAcPressed() {
    document.getElementById("input-number").value = "0"
    firstNumber = null;
    operatorChosen = "";
    shouldResetDisplay = false;

}