const express = require('express');
const path = require('path');
const mime = require('mime');
// import {GLTFLoader} from "https://cdn.rawgit.com/mrdoob/three.js/master/examples/jsm/loaders/GLTFLoader.js" 

const server = express();

server.use(express.static(path.join(__dirname, 'src')));

server.get('/src/*.js', (req, res) => {
  const filePath = path.join(__dirname, req.url);
  const mimeType = mime.getType(filePath);
  res.setHeader('Content-Type', mimeType);
  if (mimeType === 'video/mp2t') {
    res.setHeader('Content-Type', 'application/typescript');
  }
  res.setHeader('Content-Type', 'application/typescript');
  res.setHeader('Content-Type', 'text/javascript');
  res.sendFile(filePath);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
