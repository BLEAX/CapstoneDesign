//express
const express = require("express");
const app = express();
const port = 80;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/depressionTest", (req, res) => {
  res.sendFile(
    __dirname + "/other_pages/depressionTestResult_page/depressionTest.html"
  );
});

app.get("/depressionTestResult", (req, res) => {
  res.sendFile(
    __dirname +
      "/other_pages/depressionTestResult_page/depressionTestResult.html"
  );
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/other_pages/login_page/login.html");
});

app.listen(port, () => {});
