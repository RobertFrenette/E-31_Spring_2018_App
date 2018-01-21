// Simple Node HTTP Server - will be replaced with Express later in the Semester
var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    //console.log('request ', request.url);

    var filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './public/index.html';
    } else {
        filePath = path.join(__dirname, 'public/', request.url);
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var contentType = 'text/html';
    var mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif'
    };

    contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT'){
                fs.readFile('./public/404.html', function(error, content) {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            } else {
                response.writeHead(500);
                response.end('Error: Please contact the site administrator.\n' + error.code + '\n');
                response.end();
            }
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(8080);
console.log('Server running on port:8080');
