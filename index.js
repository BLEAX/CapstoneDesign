//express
const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const url = require("url");
const qs = require("querystring");

//XSS방지용 모듈
const sanitizeHTML = require("sanitize-html");

const port = 3000;

//var _url = request.url;
//var queryData = url.parse(_url, true).query;
//var pathname = url.parse(_url, true).pathname;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // 폼 데이터 처리를 위해 필요

//글 데이터를 저장할 파일 경로
const dataFilePath = path.join(__dirname, "public", "data", "posts.json");

//초기화: 데이터 파일이 존재하지 않으면 생성하는 코드
if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, JSON.stringify([]));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "main_page.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "login.html"));
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
  res.sendFile(
    path.join(__dirname, "public", "html", "result_select_page.html")
  );
});

app.get("/result1", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "result_page1.html"));
});

app.get("/result2", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "result_page2.html"));
});

app.get("/community", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "community_page.html"));
});

app.get("/write", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "write.html"));
});

app.get("/others", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "others_page.html"));
});

//글 목록을 반환하는 엔드포인트
app.get("/posts", (req, res) => {
  fs.readFile(dataFilePath, (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// POST 요청 처리 - 글 작성
app.post("/submit_post", (req, res) => {
  const title = sanitizeHTML(req.body.title);
  const content = sanitizeHTML(req.body.content);

  const newPost = {
    title: title,
    content: content,
    date: new Date().toISOString(),
  };

  fs.readFile(dataFilePath, (err, data) => {
    if (err) throw err;
    const posts = JSON.parse(data);
    posts.push(newPost);
    fs.writeFile(dataFilePath, JSON.stringify(posts), (err) => {
      if (err) throw err;
      res.redirect("/community");
    });
  });
});

app.use((req, res) => {
  res.status(404);
  res.send(`<h1>Error 404: Resource not found<h1>`);
});

app.listen(port, () => {
  console.log("App listening on port 3000");
});
