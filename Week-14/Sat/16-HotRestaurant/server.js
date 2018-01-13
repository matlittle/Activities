// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'html')));


var tables = {
    current: [
        {
            "customerName": "asdf",
            "phoneNumber": "asdf",
            "customerEmail": "asdf",
            "customerID": 1
        }, {
            "customerName": "sjkfla;s",
            "phoneNumber": "qjfkldas;",
            "customerEmail": "qjkl;dfsj",
            "customerID": 2
        }
    ],
    waiting: []
}


// Homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "html/index.html"));
});

// Make a reservation
app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "html/reserve.html"));
});

// Show current tables
app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "html/tables.html"));
});

// get tables obj
app.get("/api/tables", (req, res) => {
    res.json(tables);
});

// Listen for reservation post
app.post("/api/reserve", (req, res) => {
    var reservation = req.body;

    if(tables.current.length <= 4) {
        reservation.customerID = (tables.current.length + 1);
        tables.current.push(reservation);
    } else {
        reservation.customerID = (tables.waiting.length + 1);
        tables.waiting.push(reservation);
    }

    //res.writeHead(200, {"Content-Type":"application/json"});
    res.json({"success":true});
});

// clear current tables
app.delete("/api/delete/:id", (req, res) => {
    var id = parseInt(req.params.id);

    tables.current.splice(id-1, 1);

    reorderTables(id-1);

    //res.writeHead(200, {"Content-Type":"application/json"});
    res.json({"success":true});
});


function reorderTables(el) {
    console.log(`reordering from element: ${el}`);
    
    for(let i = el; i < tables.current.length; i++) {
        tables.current[i].customerID = tables.current[i].customerID - 1;
    }

    if(tables.waiting.length > 0) {
        tables.current.push(tables.waiting[0]);
        tables.current[4].customerID = 5;
        tables.waiting.shift();
    }

    for(let i = 0; i < tables.waiting.length; i++) {
        tables.waiting[i].customerID = tables.waiting[i].customerID - 1;
    }
}

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

