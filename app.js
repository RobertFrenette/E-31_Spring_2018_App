// Simple Node Connect HTTP Server - will be replace with Express later in the Semester
// Node Modules
const url = require('url');
const path = require('path');
const fs = require('fs');

// Third-Party Modules
const connect = require('connect');
const log = require('log-util');

var app = connect();

// Middleware
app.use((request, response) => {
    const { pathname } = url.parse(request.url);
    const public = '/public/';
    const index = 'index.html';
    const not_found = '404.html';
    const server_err = '500.html';

    let filePath = request.url;
    if (filePath == '/') {
        filePath = path.join(process.cwd(), public, index);
    } else {
        filePath = path.join(process.cwd(), public, request.url);
    }
    //log.ingo(`FilePath: ${filePath}`);

    let extname = String(path.extname(filePath)).toLowerCase();
    let contentType = 'text/html';
    const mimeTypes = {
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
                fs.readFile(path.join(process.cwd(), public, not_found), (error, content) => {
                    response.writeHead(404, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            } else {
                fs.readFile(path.join(process.cwd(), public, server_err), (error, content) => {
                    response.writeHead(500, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            }
        } else {
            response.end(content, 'utf-8');
        }
    });
});
module.exports = app;
