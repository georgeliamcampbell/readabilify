const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const readability = require('@mozilla/readability');
const { Readability } = readability;

exports.fetch = (request, response) => {
    console.log(`${request.method} ${request.originalUrl} ${request.body.url}`);
    
    JSDOM.fromURL(request.body.url).then(dom => {
        var reader = new Readability(dom.window.document);
        var response_body = reader.parse();

        console.log(`200 ${request.originalUrl} ${request.body.url}`);
        response.json(response_body);
    }, error => {
        statusCodeMatch = error.message.match(/Status: (\d+)/);
        if (statusCodeMatch) {
            statusCode = parseInt(statusCodeMatch[1], 10);
        } else {
            statusCode = 500;
        };
        
        console.log(`${statusCode} ${request.originalUrl} ${request.body.url}`);
        response.sendStatus(statusCode);
    });
};