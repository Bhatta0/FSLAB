const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Greet event
myEmitter.on('greet', () => {
    console.log("Hello! Welcome to Node.js event emitter.");
});

// Login event
myEmitter.on('login', (username) => {
    console.log(`${username} has logged in`);
});

// Emit events
myEmitter.emit('greet');
myEmitter.emit('login', 'Himanshu');
