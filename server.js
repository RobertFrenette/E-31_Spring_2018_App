// Simple Node HTTP Server - will be replace with Express later in the Semester
const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer( (request, response) => {
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
        '.png': 'image/png'
    };

    contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if(error.code == 'ENOENT') {
                // if request for dir, change contentType to html to serve 404
                if (contentType === 'application/octet-stream') {
                    contentType = 'text/html';
                }
                fs.readFile('./public/404.html', (error, content) => {
                    response.writeHead(404, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            } else {
                fs.readFile('./public/500.html', (error, content) => {
                    response.writeHead(500, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            }
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(8080);
console.log('Server running on port:8080');
