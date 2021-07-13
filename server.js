const express = require("express");
const app = express();
const api = require("./server/routes/api");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", api);

const PORT = 8080;
app.listen(PORT, function () {
  console.log(`Running on port ${PORT}`);
});