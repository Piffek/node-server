var http = require('http');

function onRequest(request, response){
	console.log(request.url);
}

http.createServer(onRequest).listen(8888);
console.log('RUN');