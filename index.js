const express = require("express");

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
require("./configs/db")
app.use("", require("./controllers/userController"))

app.listen(5000, () => {
    console.log("listning on port 5000");
})