const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method);

  // res.setHeader("Content-Type", "text/plain");
  // res.write("hello, ninjas");
  // res.end();

  // res.setHeader("Content-Type", "text/html");
  // res.write("<head><link rel='stylesheed' href='#'></head>");
  // res.write("<p style='color:blue;'>hello, ninjas</p>");
  // res.write("<b><p>hello, again ninjas</p></b>");
  // res.end();

  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      // res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
