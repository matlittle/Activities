log(name); // output: Undefined

var tinyize = function(name) {
  log(name); // output: Rick

  log(myName); // output: Undefined
  var myName = "Tiny " + name + "!";
  log(myName); // output: Tiny Rick!

  return myName;
};

var name = tinyize("Rick");
log(name); // output: Tiny Rick!
//log(myName); // output: Error

log(i); // output: undefined
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 0, 1, 2, 3, 4  -- 5
  }, 100);
}
log(i); // output: 4 -- 5

// helper function to log current line number and the passed in string
// e.g. "Line 24: Hello World"
function log(string) {
  var callerLine = new Error().stack.split("\n")[2];
  var lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}
