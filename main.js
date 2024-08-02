let input = "";

// Allows input to be added to the expression
function ShowValue(value) {
  // Append the clicked button's value to the input
  input += value;

  // Display the current input in the output element
  document.getElementById("output").innerHTML = input;
}

// Performs the calculation and displays the result
function quickMath() {
  try {
    // Evaluate the mathematical expression and display the result
    const result = eval(input);
    document.getElementById("output").innerHTML = result;
    // Reset the input to the result for successive calculations
    input = result;
  } catch (e) {
    // Display an error message in case of evaluation error
    document.getElementById("output").innerHTML = "Error";
  }
}

// Resets the calculator to default state
function Reset() {
  document.getElementById("output").innerHTML = "0";
  input = "";
}

// Removes the last character from the input
function rem1() {
  // Remove the last character from the input
  input = input.slice(0, -1);
  // Display the updated input
  document.getElementById("output").innerHTML = input;
}
