// Event-Driven Programming in Nodejs 
// same as onclick, onchange, etc js event 


const EventEmitter = require("events")

const myEvent = new EventEmitter;


myEvent.on("eventName",(name,age)=>{
    console.log(`I got response with name : ${name} and age :${age}`);
})





myEvent.emit("eventName", "Rifat",23)