const express = require("express");
const router = express.Router();

router.post("/calculate.json", (req, res) => {
    let {number1, number2, operation} = req.body;
    number1 = Number.parseFloat(number1);
    number2 = Number.parseFloat(number2);

    if(isNaN(number1) || isNaN(number2)){
        res.json(JSON.stringify("Please enter only numbers"));
    }else{
        let result = 0;

        switch(operation){
            case "+":
                result = number1 + number2;
                break;

            case "-":
                result = number1 - number2;
                break;

            case "*":
                result = number1 * number2;
                break;

            case "/":
                result = number1 / number2;
                break;
            default:
                result = "Operation should only be +,-,/ or *";
        }

        res.json(JSON.stringify(result));
    }
})

module.exports = router;