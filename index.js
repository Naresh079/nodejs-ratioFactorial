let ratio = require("../ratio/index");
let factorial = require("../factorial/index");

function CalRatioFactorial(num1, num2, num3) {
  console.log(ratio(num1, num2));
  console.log(factorial(num3));
}

CalRatioFactorial(5, 2, 3);
