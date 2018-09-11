var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

app.get("/:operation/:firstNum/:secondNum", function(req, res) {
    var operation = req.params.operation;

    var firstNum = parseInt(req.params.firstNum);
    var secondNum = parseInt(req.params.secondNum);

    var result;

    switch (operation) {

        case "add":
        case "+":
            result = firstNum + secondNum;
            break;
        case "minus":
        case "-":
            result = firstNum - secondNum;
            break;
        case "multiply":
        case "*":
            result = firstNum * secondNum;
            break;
        case "divide":
        case "/":
            result = firstNum / secondNum
            break;
        default:
        result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


