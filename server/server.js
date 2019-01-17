import http from 'http';
import fs from 'fs';
import url from 'url';
import path from 'path';


function requestHandler(request, response) {
  let requestedResource = path.join(
    __dirname,
    '../public',
    url.parse(request.url).pathname
  );

  fs.exists(requestedResource, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }

    if (fs.statSync(requestedResource).isDirectory()) {
      requestedResource += '/index.html';
    }

}
