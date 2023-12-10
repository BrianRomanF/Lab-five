class Logger {
    constructor(callerId) {
      this.callerId = callerId;
    }
  
    logMessage(result) {
      console.log(`[Caller ID: ${this.callerId}] - Result: ${result}`);
    }
  }
  
  module.exports = Logger;
  
  