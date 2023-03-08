// const hi = require("./function")   // ./ path specify garya
// hi()

const http = require('http');
const hi = require("./function");

const server = http.createServer((req, res) => {       //request and response
    if(req.url == "/")
    res.write("Hello World");
    else if(req.url == "/home")
    res.write("Welcome to homepage");
    else(req.url == "/ok")
    res.write(" 404 error ");
})

server.listen(3000, () => {
    console.log("ok");
});