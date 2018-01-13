
$(document).ready(callTables);

function callTables() {
    $.get("http://localhost:8080/api/tables", (response) => {
        populateTables(response);
    });
}

function populateTables(obj) {

    $("#current-table").empty();
    $("#waiting-table").empty();

    var current = obj.current;
    var waiting = obj.waiting;

    console.log(current);
    console.log(waiting);
    
    if(current.length === 0) {return;}

    makeCurrent(current);

    if(waiting.length === 0) {return;}

    makeWaiting(waiting);
    
}

function makeCurrent(current) {
    var headers = ["#", "Reservation Name", "Phone #", "Email", "Remove"];

    var tHead = $("<tHead>")
    var tRow = $("<tr>");
    headers.forEach((head) => {
        let td = $("<td>").text(head);
        $(tRow).append(td);
    });

    $(tHead).append(tRow);
    $("#current-table").append(tHead);

    var tBody = $("<tBody>");

    for(let r of current) {
        console.log(r);
        let num = $("<td>").text(r.customerID);
        let name = $("<td>").text(r.customerName);
        let phone = $("<td>").text(r.phoneNumber);
        let email = $("<td>").text(r.customerEmail);

        let remove = $("<td>");
        let rBtn = $(`<button class="btn btn-danger rmvBtn">`);
        $(rBtn).attr("data-id", r.customerID);
        $(remove).append(rBtn);

        let row = $("<tr>");

        $(row).append(num, name, phone, email, remove);
        $(tBody).append(row);
    }

    $("#current-table").append(tBody);
}

function makeWaiting(waiting) {
    var headers = ["#", "Reservation Name", "Phone #", "Email", "Remove"];
    var tHead = $("<tHead>")
    var tRow = $("<tr>");

    headers.forEach((head) => {
        let td = $("<td>").text(head);
        $(tRow).append(td);
    });

    $(tHead).append(tRow);
    $("#waiting-table").append(tHead);

    var tBody = $("<tBody>");

    for(let r of waiting) {
        let num = $("<td>").text(r.customerID);
        let name = $("<td>").text(r.customerName);
        let phone = $("<td>").text(r.phoneNumber);
        let email = $("<td>").text(r.customerEmail);

        let row = $("<tr>");

        $(row).append(num, name, phone, email);
        $(tBody).append(row);
    }

    $("#waiting-table").append(tBody);
}

function deleteRow(num) {
    $.ajax({
        type:"DELETE",
        url: `http://localhost:8080/api/delete/${num}`,
        success: callTables
    });
}

$(document).on("click", ".rmvBtn", function(e) {
    console.log("button clicked");
    var id = $(this).attr("data-id");
    console.log(`Captured id: ${id}`);
    deleteRow(id);
});
