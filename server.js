var http = require('http');
var fileSystem = require('fs');

function send404Response(response){
	response.writeHead(404, {'Content-Type': 'text/plain'});
	response.write('Error 404');
	response.end();
}


function onRequest(request, response){
	
	if(request.method == 'GET' && request.url == '/'){
		response.writeHead(200, {'Content-Type': 'text/html'});
		fileSystem.createReadStream(__dirname + '/index.php').pipe(response);
	
	}else{
		send404Response(response);
	}
}

http.createServer(onRequest).listen(888);
console.log('RUN');