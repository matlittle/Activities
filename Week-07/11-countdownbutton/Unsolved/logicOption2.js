// Initialize Firebase (YOUR OWN APP)
// Initialize Firebase
var config = {
apiKey: "AIzaSyCamJUT00dSdHxmIiS2Cm7BqhaS0Aadr04",
authDomain: "my-awesome-project-a7d1d.firebaseapp.com",
databaseURL: "https://my-awesome-project-a7d1d.firebaseio.com",
projectId: "my-awesome-project-a7d1d",
storageBucket: "my-awesome-project-a7d1d.appspot.com",
messagingSenderId: "693735049722"
};
firebase.initializeApp(config);
var database = firebase.database();

// Set Initial Counter
var initialValue = 100;
var clickCounter = initialValue;
var currData;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot) {
	currData = snapshot.val().clickCount;

	// Print the initial data to the console.
	console.log(currData);

	// Change the html to reflect the initial value.
	$("#click-value").text(currData);

	// Change the clickCounter to match the data in the database
	clickCounter = currData;

	// Log the value of the clickCounter
	console.log(clickCounter)

	// Change the HTML Value
	$("#click-value").text(clickCounter);

}, function(error) {
	// If any errors are experienced, log them to console.
	console.log(error);
});
// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if(clickCounter === 0) {
  	alert("You made it...");

  	clickCounter = initialValue;
  }

  // Save new value to Firebase
  database.ref().set({
  	clickCount: clickCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue

  // Save new value to Firebase
  database.ref().set({
  	clickCount: clickCounter
  })

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").text(clickCounter);
});
