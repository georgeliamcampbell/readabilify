const express = require('express');
const jsdom = require('jsdom');


const server = express();
server.use(express.json())

const port = process.env.PORT || 3000;

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

server.get("/v1/fetch", (request, response, next) => {
    // jsdom.fromURL("https://example.com/", options).then(dom => {
    //     console.log(dom.serialize());
    // });


    response.json({
        "message": "It works!"
    });
});