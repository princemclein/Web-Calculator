const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const delButton = document.querySelector(".del");
const percentButton = document.querySelector(".percent");
const parenthesisButton = document.querySelector(".parenthesis");
const equalButton = document.querySelector(".equals");
const decimalButton = document.querySelector(".decimal");
let firstNumber = "";
let operatorUsed = "";
let result = 0;
let justCalculated = false;

// Display the numbers when clicked
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (justCalculated === true) {
      display.textContent = button.textContent;
      justCalculated = false;
    } else if (display.textContent === "0") {
      display.textContent = button.textContent;
    } else {
      display.textContent = display.textContent + button.textContent;
    }
  });
});

// Reset calculator display
clearButton.addEventListener("click", () => {
  display.textContent = "0";
});

// Operators function
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operatorUsed !== "") {
      let secondNumber = display.textContent;

      if (operatorUsed === "+") {
        result = Number(firstNumber) + Number(secondNumber);
      } else if (operatorUsed === "-") {
        result = Number(firstNumber) - Number(secondNumber);
      } else if (operatorUsed === "x") {
        result = Number(firstNumber) * Number(secondNumber);
      } else if (operatorUsed === "/") {
        result = Number(firstNumber) / Number(secondNumber);
      }

      firstNumber = result;
    } else {
      firstNumber = display.textContent;
    }

    operatorUsed = button.textContent;
    display.textContent = "0";
  });
});

// Equal function
equalButton.addEventListener("click", () => {
  let secondNumber = display.textContent;
  justCalculated = true;

  console.log("first:", firstNumber);
  console.log("operator:", operatorUsed);
  console.log("second:", secondNumber);

  if (operatorUsed === "+") {
    result = Number(firstNumber) + Number(secondNumber);
    display.textContent = result;
  } else if (operatorUsed === "-") {
    result = Number(firstNumber) - Number(secondNumber);
    display.textContent = result;
  } else if (operatorUsed === "x") {
    result = Number(firstNumber) * Number(secondNumber);
    display.textContent = result;
  } else if (operatorUsed === "/") {
    result = Number(firstNumber) / Number(secondNumber);

    if (Number(secondNumber) === 0) {
      display.textContent = "Error";
    } else {
      display.textContent = result;
    }
  }

  firstNumber = "";
  operatorUsed = "";
  justCalculated = true;
});

// Delete function;
delButton.addEventListener("click", () => {
  if (display.textContent.length === 1) {
    display.textContent = "0";
  } else {
    display.textContent = display.textContent.slice(0, -1);
  }
});

// Decimal function;
decimalButton.addEventListener("click", () => {
  if (!display.textContent.includes(".")) {
    display.textContent += decimalButton.textContent;
  }
});

// Track if the calculator has just displayed a result
