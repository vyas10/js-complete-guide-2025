// Initial result value for the calculator
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
// Get references to the input field and buttons

// Retrieves and parses the user's input from the input field
function getUserInput() {
    return parseInt(userInput.value);
}

// Generates a description of the calculation and displays the result
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor.js
}

// Writes a log entry for each operation performed
function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries); // Log the entries to the console
}

function calculateResult(calculationType) {
    const enteredNumber = getUserInput();
    if (
        calculationType !== "ADD"
        && calculationType !== "SUBTRACT"
        && calculationType !== "MULTIPLY"
        && calculationType !== "DIVIDE"
        || enteredNumber === 0) {
        return; // Exit if the calculation type is invalid
    }
    if (calculationType === "ADD"
        || calculationType === "SUBTRACT"
        || calculationType === "MULTIPLY"
        || calculationType === "DIVIDE") {
        const initalResult = currentResult;
        let mathOperator;
        if (calculationType === "ADD") {
            currentResult += enteredNumber;
            mathOperator = "+";
        } else if (calculationType === "SUBTRACT") {
            currentResult -= enteredNumber;
            mathOperator = "-";
        } else if (calculationType === "MULTIPLY") {
            currentResult *= enteredNumber;
            mathOperator = "*";
        } else if (calculationType === "DIVIDE") {
            currentResult /= enteredNumber;
            mathOperator = "/";
        }
        createAndWriteOutput(mathOperator, initalResult, enteredNumber);
        writeToLog(calculationType, initalResult, enteredNumber, currentResult);
    }
}
// Adds the entered number to the current result
function add() {
    calculateResult("ADD");
    // Call the generic function for addition
}

// Subtracts the entered number from the current result
function subtract() {
    calculateResult("SUBTRACT");
    // Call the generic function for subtraction
}

// Multiplies the current result by the entered number
function multiply() {
    calculateResult("MULTIPLY");
    // Call the generic function for multiplication
}

// Divides the current result by the entered number
function divide() {
    calculateResult("DIVIDE");
    // Call the generic function for division
}




// Attach event listeners to the calculator buttons
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);