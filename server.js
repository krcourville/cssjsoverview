var connect = require('connect');
var port = 4000;
connect.createServer(
    connect.static(__dirname)    
).listen(port);

console.log('Server started on port:' + port);