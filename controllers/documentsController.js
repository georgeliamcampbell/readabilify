const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const readability = require('@mozilla/readability');
const { Readability } = readability;

exports.fetch = (request, response) => {
    JSDOM.fromURL(request.body.url).then(dom => {
        var reader = new Readability(dom.window.document);
        var response_body = reader.parse();
        response.json(response_body);
    });
};