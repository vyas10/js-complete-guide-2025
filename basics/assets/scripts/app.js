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

// Adds the entered number to the current result
function add() {
    const enteredNumber = getUserInput();
    const initalResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput("+", initalResult, enteredNumber);
    writeToLog("ADD", initalResult, enteredNumber, currentResult);
    // The log entry is created in the writeToLog function
}

// Subtracts the entered number from the current result
function subtract() {
    const enteredNumber = getUserInput();
    const initalResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput("-", initalResult, enteredNumber);
    writeToLog("SUBTRACT", initalResult, enteredNumber, currentResult);
    // The log entry is created in the writeToLog function
}

// Multiplies the current result by the entered number
function multiply() {
    const enteredNumber = getUserInput();
    const initalResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput("*", initalResult, enteredNumber);
    writeToLog("MULTIPLY", initalResult, enteredNumber, currentResult);
    // The log entry is created in the writeToLog function
}

// Divides the current result by the entered number
function divide() {
    const enteredNumber = getUserInput();
    const initalResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput("/", initalResult, enteredNumber);
    writeToLog("DIVIDE", initalResult, enteredNumber, currentResult);
    // The log entry is created in the writeToLog function
}

// Attach event listeners to the calculator buttons
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);