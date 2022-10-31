const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

// routes
app.use(bodyParser.json());
app.use("/api/tasks", require("./routes/Task"));
app.use("/api", require("./routes/Not_found_page"));

mongoose.connect(process.env.DB_URL, () => {
  console.log("connected successfuly");
});

app.listen(port, () =>
  console.log(`Server Listen At: http://localhost:${port}`)
);
