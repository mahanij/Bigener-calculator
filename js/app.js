let firstNumber = Number(prompt("input first number"));

let operations = prompt("what do you want to do");

let secondNumber = Number(prompt("input second number"));

let trueFalse = confirm("do you want to continue");

if (trueFalse == true) {
  let operations2 = prompt("what do you want to do");
  let thirdNumber = Number(prompt("input third number"));
  if ((operations == "+", operations2 == "+")) {
    alert(firstNumber + secondNumber + thirdNumber);
  } else if ((operations == "-", operations2 == "-")) {
    alert(firstNumber - secondNumber - thirdNumber);
  } else if ((operations == "*", operations2 == "*")) {
    alert(firstNumber * secondNumber * thirdNumber);
  } else if ((operations == "/", operations2 == "/")) {
    alert(firstNumber / secondNumber / thirdNumber);
  } else if ((operations == "+", operations2 == "-")) {
    alert(firstNumber + secondNumber - thirdNumber);
  } else if ((operations == "-", operations2 == "+")) {
    alert(firstNumber - secondNumber + thirdNumber);
  } else if ((operations == "*", operations2 == "-")) {
    alert(firstNumber * secondNumber - thirdNumber);
  } else if ((operations == "-", operations2 == "*")) {
    alert(secondNumber * thirdNumber - firstNumber);
  } else if ((operations == "/", operations2 == "-")) {
    alert(firstNumber / secondNumber - thirdNumber);
  } else if ((operations == "-", operations2 == "/")) {
    alert(secondNumber / thirdNumber - firstNumber);
  } else if ((operations == "+", operations2 == "*")) {
    alert(thirdNumber * firstNumber + secondNumber);
  } else if ((operations == "*", operations2 == "+")) {
    alert(firstNumber * secondNumber + thirdNumber);
  } else if ((operations == "+", operations2 == "/")) {
    alert(thirdNumber / firstNumber + secondNumber);
  } else if ((operations == "/", operations2 == "+")) {
    alert(firstNumber / secondNumber + thirdNumber);
  } else if ((operations == "*", operations2 == "/")) {
    alert((firstNumber * secondNumber) / thirdNumber);
  } else if ((operations == "/", operations2 == "*")) {
    alert((firstNumber / secondNumber) * thirdNumber);
  } else {
    alert("please input on of the operations");
  }
}
if (trueFalse == false , operations == "+") {
  alert(firstNumber + secondNumber);
} else if (trueFalse == false , operations == "-") {
  alert(firstNumber - secondNumber);
} else if (trueFalse == false ,operations == "/") {
  alert(firstNumber / secondNumber);
} else if (trueFalse == false ,operations == "*") {
  alert(trueFalse == false ,firstNumber * secondNumber);
} else if (trueFalse == false , operations == "**") {
  alert(firstNumber ** secondNumber);
} else if(trueFalse == false){
  alert("please input operations")
}
