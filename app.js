const express = require('express');

const server = express();
server.use(express.json())

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log("Readabilify running on port:", port);
});

// Endpoint returning version info
server.get("/v1/versions", (request, response, next) => {
    response.json({
        "readabilify": "1.0.0",
        "readability": "0.5.0",
        "express": "4.21.2"
    });
});

