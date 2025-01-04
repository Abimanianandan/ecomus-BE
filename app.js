const express = require("express");
const cors = require("cors");
const morgan = require("morgan")
const UserRouter=require("./routes/UserRouter");
const app = express();

app.use(express.json())
app.use(cors());
app.use(morgan("dev"));

app.use("/api/user",UserRouter);

module.exports = app;

