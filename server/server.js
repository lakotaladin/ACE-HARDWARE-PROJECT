const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs"); // give access to file sistem
require("dotenv").config();

// App
const app = express();

// Port
const port = process.env.PORT || 8000;

// Database

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    // search for more: mongoose config options
  })
  .then(() => console.log("DATABASE CONNECTED!"))
  .catch((err) => console.log("DATABASE CONNECTION ERROR", err));

// Middlewares
app.use(morgan("dev")); // This present server status in terminal to check status
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// Routes middlewares
// app.use("/api", authRoutes);
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r))); // auto import routes

// Route

app.listen(port, () => console.log(`Server is running on port ---> ${port}`));
