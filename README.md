(method) Application.listen(port: number, hostname: string, backlog: number, callback?: (...args: any[]) => void): Server (+5 overloads)

Listen for connections.

A node http.Server is returned, with this application (which is a Function) as its callback. If you wish to create both an HTTP and HTTPS server you may do so with the "http" and "https" modules as shown here:

var http = require('http')
  , https = require('https')
  , express = require('express')
  , app = express();

http.createServer(app).listen(80);
https.createServer({ ... }, app).listen(443);


