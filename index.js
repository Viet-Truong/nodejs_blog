const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 4000;

app.use(morgan("combined"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
