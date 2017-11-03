// Initialize Firebase
var config = {
	apiKey: "AIzaSyCbjnHSVxCzb1WRxuOgsNmwczINn7mDjYs",
	authDomain: "employee-database-5c6c2.firebaseapp.com",
	databaseURL: "https://employee-database-5c6c2.firebaseio.com",
	projectId: "employee-database-5c6c2",
	storageBucket: "employee-database-5c6c2.appspot.com",
	messagingSenderId: "1090196258610"
};
firebase.initializeApp(config);

var db = firebase.database();
var currPlayer = "";
var otherPlayer = "";



$("#player1-btn").click(function(event) {
	event.preventDefault();

	currPlayer = "player1";
	otherPlayer = "player2";

	$("#textarea-1").addClass("active");
	$("#textarea-2").addClass("inactive");

	$("#textarea-1").prop("readonly", false);

	$(".join-btn").css("display", "none");

	listenForCodeUpdates();
	startInterval();
});

$("#player2-btn").click(function() {
	event.preventDefault();

	currPlayer = "player2";
	otherPlayer = "player1";

	$("#textarea-2").addClass("active");
	$("#textarea-1").addClass("inactive");

	$("#textarea-2").prop("readonly", false);

	$(".join-btn").css("display", "none");

	listenForCodeUpdates();
	startInterval();
});


function setPlayer(num, )

function listenForCodeUpdates() {
	db.ref(`curr/${otherPlayer}/code`).on("value", function(data) {
		updateOtherPlayer(data.val());
	});
}

function startInterval() {
	var pushInterval = setInterval(function() {
		var currStr = $(".active").val();
		pushChanges(currStr);
	}, 100);
}

function pushChanges(str) {
	db.ref(`/curr/${currPlayer}/code`).set(str);
}

function updateOtherPlayer(str) {
	$(".inactive").text(str);
}

