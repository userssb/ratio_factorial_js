const factorialOfNumber = require("../factorial/index");
const ratioOfTwoNumbers = require("../ratio/index");
const ratioAndFactorial = (a, b, c) => {
  return {
    ratio: ratioOfTwoNumbers(a, b),
    factorial: factorialOfNumber(c),
  };
};
module.exports = ratioAndFactorial;
