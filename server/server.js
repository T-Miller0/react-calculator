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
}
