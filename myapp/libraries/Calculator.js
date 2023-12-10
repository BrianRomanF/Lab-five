const Logger = require("../libraries/Logger");

class Calculator {
  constructor() {
    this.id = Math.floor(Math.random(1, 100) * 100);
  }
  #log = (value) => {
    const newLog = new Logger(this.id);
    newLog.logMessage(value);
  };
  add(num1, num2) {
    const value = num1 + num2;
    this.#log(value);
    return value;
  }
  subtract(num1, num2) {
    const value = num1 - num2;
    this.#log(value);
    return value;
  }
  multiply(num1, num2) {
    const value = num1 * num2;
    this.#log(value);
    return value;
  }
  divide(num1, num2) {
    const value = num1 / num2;
    this.#log(value);
    return value;
  }
}
module.exports = Calculator;
