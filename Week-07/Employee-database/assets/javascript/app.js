
var config = {
	apiKey: "AIzaSyCbjnHSVxCzb1WRxuOgsNmwczINn7mDjYs",
	authDomain: "employee-database-5c6c2.firebaseapp.com",
	databaseURL: "https://employee-database-5c6c2.firebaseio.com",
	projectId: "employee-database-5c6c2",
	storageBucket: "employee-database-5c6c2.appspot.com",
	messagingSenderId: "1090196258610"
};
firebase.initializeApp(config);

var database = firebase.database();


// when user enters data, capture info and push to Firebase database
function addEmployee() {
	event.preventDefault();

	var name = $("#employee-name").val().trim();
	var role = $("#employee-role").val().trim();
	var startDate = $("#employee-start-date").val().trim();
	var rate = $("#employee-monthly-rate").val().trim();

	$("#employee-name").val("");
	$("#employee-role").val("");
	$("#employee-start-date").val("");
	$("#employee-monthly-rate").val("");

	database.ref().push({
		name: name,
		role: role, 
		startDate: moment(startDate).format("x"),
		rate: rate
	});
}

// when data changes in Firebase, pull data and populate table
database.ref().on("value", function(snapshot) {
	var data = snapshot.val();

	console.log(data);

	$("#employee-table-body").empty();

	for(var key in data) {
		var name = data[key].name;
		var role = data[key].role;
		var startDate = parseInt(data[key].startDate);
		var rate = data[key].rate;

		var monthsWorked = findMonthsWorked(startDate);
		var totalBilled = findTotalBilled(rate, monthsWorked);

		var tRow = $("<tr>")

		var tD1 = $("<td>").text(name);
		var tD2 = $("<td>").text(role);
		var tD3 = $("<td>").text(moment(startDate).format("MM/DD/YYYY"));
		var tD4 = $("<td>").text(monthsWorked); //months worked
		var tD5 = $("<td>").text("$" + rate);
		var tD6 = $("<td>").text(totalBilled); // total billed

		$(tRow).append(tD1, tD2, tD3, tD4, tD5, tD6)
		$("#employee-table-body").append(tRow);
	}

});

function findMonthsWorked(date) {
	var months = moment(moment()).diff(date, 'months');
	return months;
}

function findTotalBilled(rate, monthsWorked) {
	return "$" + rate * monthsWorked;
}


$("#submit-employee").click(function(event) {
	event.preventDefault();
	addEmployee();
});

