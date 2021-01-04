var fs = require('fs');

var readable = fs.createReadStream(
    __dirname + '/input.txt',
    {encoding: 'utf-8', highWaterMark: 16*1024}
)

var writable = fs.createWriteStream(
    __dirname + '/outfile.txt'
)

readable.on(
    'data', function(chunk){
        console.log(chunk);
        writable.write(chunk);
    });
