exports.getAllVersions = (request, response) => {
    response.json({
        "readability": "0.5.0",
        "express": "4.21.2"
    });
};