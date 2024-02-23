let firstNumber = Number(prompt("input first number"));

let operator = prompt("what do you want to do");

let secondNumber = Number(prompt("input second number"));

if (operator == "+") {
  alert(firstNumber + secondNumber);
} else if (operator == "-") {
  alert(firstNumber - secondNumber);
} else if (operator == "/") {
  alert(firstNumber / secondNumber);
} else if (operator == "*") {
  alert(firstNumber * secondNumber);
} else if (operator == "**") {
  alert(firstNumber ** secondNumber);
} else {
  alert("please input one of the operator");
}
