const express = require("express");
const path = require("path");
const os = require("os");
const dotenv = require("dotenv");

dotenv.config();
console.log(process.env.PORT);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "..", "public/")));

app.get("/api/getUsername", (req, res, next) => {
  res.send({
    username: os.userInfo().username
  });
});

app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});
