const Calculator = require('../libraries/Calculator');
let myCalc = new Calculator()


const addNumbers = (req, res) => {
    let { number1, number2 } = req.body;
    let sum = myCalc.add(number1,number2)
    res.status(200);
    res.json({ result: sum });
};

const subNumbers = (req, res) => {
    let { number1, number2 } = req.body;
    let subtract = myCalc.subtract(number1,number2)
    res.status(200);
    res.json({ result: subtract });
};

const multiNumbers = (req, res) => {
    let { number1, number2 } = req.body;
    let multiply = myCalc.multiply(number1,number2)
    res.status(200);
    res.json({ result: multiply });
};

const divNumbers = (req, res) => {
    let { number1, number2 } = req.body;
    let divide = number1 / number2;
    res.status(200);
    res.json({ result: divide });
};

module.exports = {
  addNumbers,subNumbers,multiNumbers,divNumbers, 
};
