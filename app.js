const port = process.env.PORT || 49152;

const express = require('express');
const server = express();

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger.js');
const swaggerSpecs = swaggerJsDoc(swaggerOptions);

const indexRouter = require('./routers/indexRouter');
const versionsRouter = require('./routers/versionsRouter');
const documentsRouter = require('./routers/documentsRouter');

server.use(express.json());

// server.get('/', (req, res) => {
//     res.redirect('/swagger');
// });

server.use(indexRouter);
server.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
server.use('/api', versionsRouter);
server.use('/api', documentsRouter);

server.listen(port, () => {
    console.log("Readabilify running on port:", port);
});