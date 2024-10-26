const express = require("express");
const morgan = require('morgan');

// express app
const app = express();

app.set("view engine", "ejs");
// default folder is views, set to views_ejs
app.set("views", "views_ejs");

//listen for requests
app.listen(3000);

// dostepne w folderze pliki publicznie np styles.css (inaczej style z pliku sie nie laduja)
// <link rel="stylesheet" href="/styles.css">
// http://localhost:3000/styles.css
app.use(express.static('public'));

// external middleware
// log like: GET / 304 3.120 ms - -
// app.use(morgan('dev'));

// app.use((req, res, next) => {
//   console.log('new request made:');
//   console.log('host: ', req.hostname);
//   console.log('path: ', req.path);
//   console.log('method: ', req.method);
//   next();
// });

// app.use((req, res, next) => {
//   console.log('in the next middleware:');
//   next();
// });

app.get("/", (req, res) => {
  const blogs = [
    { title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet consectetur" },
    { title: "Mario finds stars", snippet: "Lorem ipsum dolor sit amet consectetur" },
    { title: "How to defeat bowser", snippet: "Lorem ipsum dolor sit amet consectetur" },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
