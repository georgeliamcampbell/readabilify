const port = process.env.PORT || 49152;

const express = require('express');
const server = express();

const versionsRouter = require('./routers/versionsRouter');
const fetchRouter = require('./routers/fetchRouter');

server.use(express.json());
server.use(versionsRouter);
server.use(fetchRouter);

server.listen(port, () => {
    console.log("Readabilify running on port:", port);
});