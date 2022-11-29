const factorialOfNumber = require("../factorial/index");
const ratioOfTwoNumbers = require("../ratio/index");
const ratioAndFactorial = (num1, num2, num) => {
  const factorial = factorialOfNumber(num);
  const ratio = ratioOfTwoNumbers(num1, num2);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
