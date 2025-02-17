import EventEmitter from 'events';
const emitter = new EventEmitter();
//register a listner
emitter.on('messageLogged', function(){
    console.log('listner called');
})
// raise an event
emitter.emit('messageLogged');
// emit means making a noise, produce signal

