const express = require("express");
const path = require("path");
const os = require("os");
const dotenv = require("dotenv");
const router = require("./routes/router");
const morgan = require("morgan");

dotenv.config();
console.log(process.env.PORT);

const app = express();
const PORT = process.env.PORT || 4002;

app.use(express.static(path.join(__dirname, "..", "public/")));

app.use("/", router);
app.use(morgan("combined"));

app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});
