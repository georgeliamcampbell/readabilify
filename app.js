const express = require('express');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const readability = require('@mozilla/readability');
const { Readability } = readability;


const server = express();
server.use(express.json());

const port = process.env.PORT || 49152;

server.listen(port, () => {
    console.log("Readabilify running on port:", port);
});

// Return version info
server.get("/v1/versions", (request, response, next) => {
    response.json({
        "readability": "0.5.0",
        "express": "4.21.2"
    });
});

server.post("/v1/fetch", (request, response, next) => {
    JSDOM.fromURL(request.body.url).then(dom => {
        var reader = new Readability(dom.window.document);
        var response_body = reader.parse();
        response.json(response_body);
    });
});