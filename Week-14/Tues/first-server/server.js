const http = require(`http`);

const goodPort = 7000;
const badPort = 7500

const goodServer = http.createServer(handleGoodResponse);
const badServer = http.createServer(handleBadResponse);

goodServer.listen(goodPort);
badServer.listen(badPort);



function handleGoodResponse(req, res) {
    res.end("Good response");
}

function handleBadResponse(req, res) {
    res.end("Bad response");
}
