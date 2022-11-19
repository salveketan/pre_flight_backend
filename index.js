const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" })
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
require("./configs/db")
app.use("", require("./controllers/userController"))

const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log(`listning on port ${PORT}`);
})