var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function(){
    console.log('someone somewhere said hello');
}
);


emtr.on('greet', function(){
    console.log('greetings occured');
}
);

emtr.emit('greet');