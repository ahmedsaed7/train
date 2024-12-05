class Calculator {

  /** 
   * @param {number} value
   */
  constructor(value) {
    this.result = value;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    let newRes = this.getResult() + value;
    return new Calculator(newRes);
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    let newRes = this.getResult() - value;
    return new Calculator(newRes);
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    let newRes = this.getResult() * value;
    return new Calculator(newRes);
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) {
      throw Error("Division by zero is not allowed");
    } else {
      let newRes = this.getResult() / value;
      return new Calculator(newRes);
    }
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    let newRes = this.getResult() ** value;
    return new Calculator(newRes);
  }

  /** 
   * @return {number}
   */
  getResult() {
    return this.result;
  }
}