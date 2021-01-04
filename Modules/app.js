var greet = require('./greet1');

greet();

var greet2 = require('./greet2');

greet2.greet();

var greet3 = require('./greet3');

greet3.greet();

var Greet4 = require('./greet4');
var gtr = new Greet4();
gtr.greet();