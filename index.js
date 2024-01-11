const http = require("http");
const greeting = require("./library");
const calculator = require("./math");

//node js feature
// server create garcha
// node bata node ko feature jhikna require garne
// create garne method .createServer

http
  .createServer((request, response) => {
    greeting.getHello();
    greeting.getNamaste("tufan");
    greeting.getKonichiwa("hello");
    const sum = calculator.getSum(10, 5);
    const mul = calculator.getMul(5, 3);
    const sub = calculator.getSub(4, 2);
    console.log(sum);
    console.log(mul);
    console.log(sub);

    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("HEllo DES");
  })
  .listen(3001);
console.log("Server is running");
