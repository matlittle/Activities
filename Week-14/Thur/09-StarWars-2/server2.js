// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Knight",
  age: 60,
  forcePoints: 1350
}];

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/:urlCharacter", function(req, res) {
  var chosen = req.params.urlCharacter;

  // get object from characters array with matching routeName
  var charObj = characters.find( (obj) => {return obj.routeName === chosen})

  // What does this log?
  console.log(chosen);
  
  // if character was found
  if (charObj) {
    // display name
    res.send(`
      <p>My character is ${charObj.name}.</p>
      <p>My role is ${charObj.role}.</p>
      <p>I'm ${charObj.age} years old.</p>
      <p>My Midiclorien count is ${charObj.forcePoints}.</p>`
    );
  } else {
    // display not found
    res.send("Character not found");
  }

  res.end();

});


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
