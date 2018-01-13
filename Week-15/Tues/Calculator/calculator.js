const express = require("express");
const app = express();
const PORT = 8080;

app.get("/:op/:p1/:p2", (req, res) => {
    const operator = req.params.op;
    const op1 = parseFloat(req.params.p1);
    const op2 = parseFloat(req.params.p2);

    let result;

    switch(operator) {
        case "add": 
            result = op1 + op2;
            break;
        case "subtract": 
            result = op1 - op2;
            break;
        case "multiply": 
            result = op1 * op2;
            break;
        case "divide": 
            result = op1 / op2;
            break;
        default: 
            result = "Unrecognized command!";
    }

    res.status(200).send(result);
});

app.get("/", (req, res) => {
    res.status(200).send("Homepage");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
