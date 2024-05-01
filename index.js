//express
const express = require("express");
const path = require("path");
const app = express();
const port = 80;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "main_page.html"));
});

app.get("/test_select", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "test_select_page.html"));
});

app.get("/test1-1", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "test_page1-1.html"));
});

app.get("/test1-2", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "test_page1-2.html"));
});

app.get("/test1-3", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "test_page1-3.html"));
});

app.get("/test2", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "test_page2.html"));
});

app.get("/result", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "result_page.html"));
});

app.get("/community", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "community_page.html"));
});

app.get("/others", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "others_page.html"));
});

app.use((req, res) => {
  res.status(404);
  res.send(`<h1>Error 404: Resource not found<h1>`);
});

app.listen(port, () => {
  console.log("App listening on port 80");
});
