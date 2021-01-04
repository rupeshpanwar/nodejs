var eventConfig = require('./config');

var Emitter = require('events');

var emtr = new Emitter();

emtr.on(eventConfig.GREET,function(){
    console.log('first event occured');
})

emtr.on(eventConfig,function(){
    console.log('2nd event occured');
})


emtr.emit(eventConfig.GREET);


