// Event-Driven Programming in Nodejs
// same as onclick, onchange, etc js event

// const EventEmitter = require("events")

// const myEvent = new EventEmitter;

// myEvent.on("eventName",(name,age)=>{
//     console.log(`I got response with name : ${name} and age :${age}`);
// })

// myEvent.emit("eventName", "Rifat",23)

const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer();
// emits request event
// subcribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
