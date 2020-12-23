const express = require('express');
const cors = require("cors");
const calculator = require("./routes/calculator");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use("/", calculator);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
