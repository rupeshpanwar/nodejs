var http = require('http');

http.createServer(
    function(req,res){
        res.writeHead(
            200,
            {'Content-Type':'Application/json'}
        );

        var obj = {
            firstname : 'John',
            lastname : 'Doe'
        }

        res.end(
            JSON.stringify(obj)
        );
    }
).listen(8080,'127.0.0.1');