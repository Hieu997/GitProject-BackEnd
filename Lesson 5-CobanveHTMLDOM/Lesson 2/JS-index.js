function addition() {
  let first = document.getElementById("firstNumber").value;
  let second = document.getElementById("secondNumber").value;
  let resultAddition = parseFloat(first) + parseFloat(second);
  document.getElementById("result").innerHTML =
    "Result Addition: " + resultAddition;
}
function subtraction() {
  let first = document.getElementById("firstNumber").value;
  let second = document.getElementById("secondNumber").value;
  let resultSubtracttion = parseFloat(first) - parseFloat(second);
  document.getElementById("result").innerHTML =
    "Result Subtracttion: " + resultSubtracttion;
}
function multiplication() {
  let first = document.getElementById("firstNumber").value;
  let second = document.getElementById("secondNumber").value;
  let resultMultiplicatiption = parseFloat(first) * parseFloat(second);
  document.getElementById("result").innerHTML =
    "Result Multiplication: " + resultMultiplicatiption;
}
function division() {
  let first = document.getElementById("firstNumber").value;
  let second = document.getElementById("secondNumber").value;
  let resultDivision = parseFloat(first) / parseFloat(second);
  document.getElementById("result").innerHTML =
    "Result Division: " + resultDivision;
}
