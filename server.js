var http = require('http');
var fs = require('fs');

var requestHandler = function(req, res){
	console.log(req.url);
	var data = '';
	if(req.url == '/')
		data = fs.readFileSync('index.html');
	else if(req.url != '/favicon.ico')
		var data = fs.readFileSync('.' + req.url);
	res.end(data);
}
var server = http.createServer(requestHandler);
server.listen(3000);

