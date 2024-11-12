console.log("hello");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    const url = req.url;

    if (url === "/") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
} else if (url === "/info") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h2 style="ccolor: blue">Hola</h2>');
    res.write('<h3 style="ccolor: pink">Senorita</h3>');
    res.end();
} else if (url === "/form") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h2 style="color: blue">Happy Happy</h2>');
    res.write('<h3 style="color: pink">Joy Joy</h3>');
    res.end();
}

  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

//   const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1 style="color: red">Hello World!</h1>');
//     res.write('<p>I wonder what else we can send...</p>');
//     res.end();
//   });