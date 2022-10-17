const mainDisplay = document.querySelector("#main-display"); // For updating the screen.
const digits = document.querySelectorAll(".digit"); // For capturing digits.
const operators = document.querySelectorAll(".operator"); // For capturing desired operator.
let displayedNumber = [];
let count = [];
let toBeCalculated = [];
let operator = [];
let result;
// Event Listener for number input.
// Sends the input number to the screen.
// Doesn't allow more than 9 digits.
digits.forEach((element) => {
  element.addEventListener("click", () => {
    displayedNumber.push(element.innerText);
    if (displayedNumber.length < 9) {
      mainDisplay.innerText = displayedNumber.join("");
      count += element.innerText;
    }
  });
});
// Event Listener for operation input.
// Sets the operator for desired operation.
// Runs main calculating functions.
// If statement allows chain calculation.
operators.forEach((element) => {
  element.addEventListener("click", () => {
    operator.push(element.innerText);
    if (operator.length > 2) {
      operator.shift();
    }
    calculate();
  });
});
// Resets the calculator.
const clearAll = () => {
  displayedNumber = [];
  count = [];
  toBeCalculated = [];
  operator = [];
  result;
  mainDisplay.innerText = "Cleared!";
};
// Main Calculating Function.
// Switch statement decides the operation based on operator
// If results are larger than display screen -
// shortens the result.
const calculate = () => {
  if (count.length != 0) {
    // Empty Array returns as "0". it may cause bug!!
    //When an operator is selected, the function grabs -
    //the value on the screen and resets the "count" variable -
    //so it can take another value.
    toBeCalculated.push(Number(count));
  }
  displayedNumber = [];
  count = [];
  //When there are 2 values in the toBeCalculated array-
  //switch statement does the calculation based on the selected -
  //operator.
  if (toBeCalculated.length > 1) {
    switch (operator[0]) {
      case "+":
        result = toBeCalculated.reduce((total, num) => (total += num));
        // First part of the IF statement is a precaution to prevent -
        // "longer than screen" numbers.
        if (result.toString().length > 8) {
          mainDisplay.innerText = result.toPrecision(6);
          toBeCalculated = [];
          toBeCalculated.push(Number(mainDisplay.innerText));
        } else {
          mainDisplay.innerText = result;
          toBeCalculated = [];
          toBeCalculated.push(Number(mainDisplay.innerText));
        }
        break;
      case "-":
        result = toBeCalculated.reduce((total, num) => (total -= num));
        if (result.toString().length > 8) {
          mainDisplay.innerText = result.toPrecision(6);
          toBeCalculated = [];
          toBeCalculated.push(Number(mainDisplay.innerText));
        } else {
          mainDisplay.innerText = result;
          toBeCalculated = [];
          toBeCalculated.push(Number(mainDisplay.innerText));
        }
        break;
      case "/":
        result = toBeCalculated.reduce((total, num) => (total /= num));
        if (result.toString().length > 6) {
          mainDisplay.innerText = result.toPrecision(3);
          toBeCalculated = [];
          toBeCalculated.push(Number(mainDisplay.innerText));
        } else {
          mainDisplay.innerText = result;
          toBeCalculated = [];
          toBeCalculated.push(Number(mainDisplay.innerText));
        }
        break;
      case "x":
        result = toBeCalculated.reduce((total, num) => (total *= num));
        if (result.toString().length > 8) {
          mainDisplay.innerText = result.toPrecision(5);
          toBeCalculated = [];
          toBeCalculated.push(Number(mainDisplay.innerText));
        } else {
          mainDisplay.innerText = result;
          toBeCalculated = [];
          toBeCalculated.push(Number(mainDisplay.innerText));
        }
        break;
      case "=":
        toBeCalculated = [];
        toBeCalculated.push(Number(mainDisplay.innerText));
        break;
    }
  }
};
