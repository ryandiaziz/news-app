require("dotenv").config();
const port = process.env.PORT || 5000
const express = require('express')
const app = express()
const cors = require("cors");
const routes = require("./routes");

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})