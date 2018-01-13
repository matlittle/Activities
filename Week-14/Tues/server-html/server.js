const http = require(`http`);
const fs = require('fs');

const PORT = 8080;

const server = http.createServer(handleResponse).listen(PORT, () => {
    console.log("Listening at http://localhost:8080");
});




function handleResponse(request, response) {
    fs.readFile('index.html', (err, data) => {
        if(err) console.error(err);

        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.end(data);
    });
}
