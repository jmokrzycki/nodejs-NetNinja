const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // res.setHeader("Content-Type", "text/plain");
  // res.write("hello, ninjas");
  // res.end();

  // res.setHeader("Content-Type", "text/html");
  // res.write("<head><link rel='stylesheed' href='#'></head>");
  // res.write("<p style='color:blue;'>hello, ninjas</p>");
  // res.write("<b><p>hello, again ninjas</p></b>");
  // res.end();

  res.setHeader("Content-Type", "text/html");
  // send an html file
  fs.readFile("./views/index.html", (err, data) => {
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
