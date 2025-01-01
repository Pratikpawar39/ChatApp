const http = require('http');
const express = require('express');

const server = http.createServer((req, res ) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to the Node.js Tutorial');
});

server.listen( process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

