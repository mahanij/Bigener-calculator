let firstNumber = Number(prompt("input first number"));

let operations = prompt("what do you want to do");

let secondNumber = Number(prompt("input second number"));

let trueFalse = confirm("do you want to continue");





if (trueFalse == true) {
  let operations2 = prompt("what do you want to do");
  let thirdNumber = Number(prompt("input third number"));
  if ((operations == "+", operations2 == "+")) {
    alert(firstNumber + secondNumber + thirdNumber);
  }
}
if ((operations == "+", trueFalse == false)) {
  alert(firstNumber + secondNumber);
} else if (operations == "-") {
  alert(firstNumber - secondNumber);
} else if (operations == "/") {
  alert(firstNumber / secondNumber);
} else if (operations == "*") {
  alert(firstNumber * secondNumber);
} else {
  alert("please input one of  the operations");
}
