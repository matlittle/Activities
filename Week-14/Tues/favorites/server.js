const http = require(`http`);
const fs = require('fs');

const PORT = 8080;

const server = http.createServer(handleResponse).listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});

function handleResponse(request, response) {
    var path = request.url;
    if(path === "/") path = "index";

    servePage(path, 200, request, response);
}

function servePage(path, code, request, response) {
    fs.readFile(`./${path}.html`, (err, data) => {
        if(err) {
            if(err.code === 'ENOENT') {
                servePage("404", 404, request, response);
                return;
            }
        } else {
            response.writeHead( code, {
                "Content-Type": "text/html"
            });
            response.end(data);
        }
    });
}

