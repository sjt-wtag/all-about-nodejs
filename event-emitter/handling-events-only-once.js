import EventEmitter from 'events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
let m = 0;
myEmitter.on('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Prints: 2


// code for only once and then it will be rejected
myEmitter.once('event-once', () => {
  console.log(++m);
});
myEmitter.emit('event-once');
// Prints: 3
myEmitter.emit('event-once');