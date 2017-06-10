var http = require('http');

function onRequest(request, response){
	console.log(request.url);
	response.writeHead(200, {'Context-Type': 'text/plain'});
	response.write('response');
	response.end();
}

http.createServer(onRequest).listen(888);
console.log('RUN');