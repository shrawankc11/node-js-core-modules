const { EventEmitter } = require('events')

const myE = new EventEmitter()

const log = () => console.log('event one fired!')

myE.once('eventOne', log)
myE.on('eventOne', log)


myE.off('eventOne', log)
myE.off('eventOne', log)


myE.emit('eventOne')

console.log(myE.listenerCount('eventOne'))
console.log(myE.rawListeners('eventOne'))
