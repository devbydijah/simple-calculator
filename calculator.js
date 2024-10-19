let calculation = "";

// Function to update the calculation string
function updateCalculation(value) {
  calculation += value;
  document.querySelector('.js-calculation').textContent = calculation;
}

// Function to clear the calculation
function allClearCalculation() {
  calculation = "";
  document.querySelector('.js-calculation').textContent = calculation;
}

// Function to toggle the sign of the current number
function toggleSign() {
  if (calculation) {
    if (calculation.startsWith("-")) {
      calculation = calculation.substring(1);
    } else {
      calculation = "-" + calculation;
    }
    document.querySelector('.js-calculation').textContent = calculation;
  }
}

// Function to calculate the result
function calculateResult() {
  try {
    calculation = eval(calculation).toString();
  } catch (e) {
    calculation = "Error";
  }
  document.querySelector('.js-calculation').textContent = calculation;
}