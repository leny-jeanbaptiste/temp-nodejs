
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.end("Welcome to the home page");
  } else if (url === "/secret") {
    res.end("Welcome 007");
  } else {
    res.end(
      `
    <h1>Oops !</h1>
    <p>The page you are looking for does not exist.</p>
    <a href="/">Back to homepage</a>
    `
    );
  }
});

server.listen(3300);



