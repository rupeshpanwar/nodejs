var fs = require('fs');

var zlib = require('zlib');

var readable = fs.createReadStream(
    __dirname + '/inputfile.txt',
    {encoding:'utf-8',highWaterMark: 12*1024}
)

var writable = fs.createWriteStream(
    __dirname + '/outfile.txt'
)

readable.pipe(writable);

var gzip = zlib.createGzip();

var compressed = fs.createWriteStream(
    __dirname + '/file.txt.gz'
)

readable.pipe(gzip).pipe(compressed);