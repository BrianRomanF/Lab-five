const express = require("express");
const calculatorRoutes = require("./routes/calculatorRoutes");
const userRoutes = require("./routes/userRoutes");
const testRoutes = require("./routes/myTestRoutes");
const bodyParser = require("body-parser");

const Calculator = require("./libraries/Calculator");

const app = express();
const ports = [3000, 4000, 5000, 6000];

app.use(bodyParser.json());
app.use("/mytest", testRoutes);
app.use("/calculator", calculatorRoutes);
app.use("/users", userRoutes);

app.use("/", express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World XD");
});

//Create a new Calculator object
//let myCalc = new Calculator()
//myCalc.add(3,4)

ports.forEach((port) => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});
