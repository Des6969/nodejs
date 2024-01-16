const events = require("events");
//event initialize
const eventEmitter = new events.EventEmitter();
//function define
const sayHello = () => {
  console.log("I am event");
};
//assign
eventEmitter.addListener("hello", sayHello); //defined event name as hello

//calling the event

eventEmitter.emit("hello");
