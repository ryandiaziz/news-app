require("dotenv").config();
const port = process.env.PORT || 3000
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./src/routes");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})

module.exports = app