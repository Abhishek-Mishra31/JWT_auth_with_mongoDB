require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./Db");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 1000;

app.use(bodyParser.json());
app.use(cors());

const userRoutes = require("./Routes/userRoutes");

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`listening on port number : ${port}`);
});
