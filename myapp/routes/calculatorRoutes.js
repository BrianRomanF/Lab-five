const express = require("express");
const router = express.Router();
const calculatorController =
require('../controllers/calculatorController')

router.post("/add", (req, res) => {

  calculatorController.addNumbers(req,res)
});

router.get('/add', (req, res) => {
  calculatorController.addNumbers(req,res)
  })

router.post("/subtract", (req, res) => {
  calculatorController.subNumbers(req,res)
});

router.post("/multiply", (req, res) => {
  calculatorController.multiNumbers(req,res)
  });

router.post("/divide", (req, res) => {
  calculatorController.divNumbers(req,res)
  });
module.exports = router;
