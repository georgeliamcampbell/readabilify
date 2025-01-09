const port = process.env.PORT || 49152;

const express = require('express');
const server = express();

const versionsRouter = require('./routers/versionsRouter');
const documentsRouter = require('./routers/documentsRouter');

server.use(express.json());
server.use(versionsRouter);
server.use(documentsRouter);

server.listen(port, () => {
    console.log("Readabilify running on port:", port);
});