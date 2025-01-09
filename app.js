const express = require('express');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const readability = require('@mozilla/readability')


const server = express();
server.use(express.json())

const port = process.env.PORT || 49152;

server.listen(port, () => {
    console.log("Readabilify running on port:", port);
});

// Return version info
server.get("/v1/versions", (request, response, next) => {
    response.json({
        "readabilify": "1.0.0",
        "readability": "0.5.0",
        "express": "4.21.2"
    });
});

server.post("/v1/fetch", (request, response, next) => {
    var request_body = request.body;
    console.log(request.url);
    //dom = new JSDOM.fromURL("https://example.com", options).then(dom => {
    //    console.log(dom.serialize());
    //});


    response.json({
        "message": "It works!"
    });
});