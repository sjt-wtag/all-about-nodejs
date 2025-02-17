import EventEmitter from "events";
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
let m = 0;
myEmitter.on("event", () => {
  console.log(++m);
});
myEmitter.emit("event");
// Prints: 1
myEmitter.emit("event");
// Prints: 2

//----------------------------------------
// code for only once and then it will be rejected
myEmitter.once("event-once", () => {
  console.log(++m);
});
myEmitter.emit("event-once");
// Prints: 3
myEmitter.emit("event-once");

//-------------------------------------------

// The EventEmitter instance will emit its own 'newListener'
// event before a listener is added to its internal array of listeners.

myEmitter.once("newListener", (event, listener) => {
  if (event === "another-event") {
    // Insert a new listener in front
    myEmitter.on("another-event", () => {
      console.log("B");
    });
  }
});
myEmitter.on("another-event", () => {
  console.log("A");
});
myEmitter.emit("another-event");
// Prints:
//   B
//   A

//-------------------------------------------

//multiple listener

myEmitter.on("multiple-event", function firstListener() {
  console.log("Helloooo! first listener");
});
// Second listener
myEmitter.on("multiple-event", function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on("multiple-event", function thirdListener(...args) {
  const parameters = args.join(", ");
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners("multiple-event"));

myEmitter.emit("multiple-event", 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener

//-------------------------------------------

const myEE = new EventEmitter();
myEE.on("foo", () => {});
myEE.on("bar", () => {});

const sym = Symbol("symbol");
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]

//-------------------------------------------

//By default, event listeners are invoked in the order they are added.
// The emitter.prependListener() method can be used as an alternative
// to add the event listener to the beginning of the listeners array

myEE.on("foo", () => console.log("a"));
myEE.prependListener("foo", () => console.log("b"));
myEE.emit("foo");

// Prints:
//   b
//   a

//-------------------------------------------

//remove listener

const callbackA = () => {
  console.log("A");
  myEmitter.removeListener("event1", callbackB);
};

const callbackB = () => {
  console.log("B");
};

myEmitter.on("event1", callbackA);

myEmitter.on("event1", callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit("event1");
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit("event1");
// Prints:
//   A

//-------------------------------------------

//When a single function has been added as a handler multiple times for a
//  single event (as in the example below), removeListener() will remove
// the most recently added instance. In the example the once('ping') listener is removed:
const ee = new EventEmitter();

function pong() {
  console.log("pong");
}

ee.on("ping", pong);
ee.once("ping", pong);
ee.removeListener("ping", pong);

ee.emit("ping");
ee.emit("ping");
