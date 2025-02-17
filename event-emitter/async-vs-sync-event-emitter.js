import EventEmitter from 'events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
});
myEmitter.emit('event', 'a', 'b');

//The EventEmitter calls all listeners synchronously in the order
//  in which they were registered. This ensures the proper sequencing 
// of events and helps avoid race conditions and logic errors.
//  When appropriate, listener functions can switch to an asynchronous
//  mode of operation using the setImmediate() or process.nextTick() methods