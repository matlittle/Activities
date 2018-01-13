
$(".submit").click(makeReservation);

function makeReservation() {
    let obj = {
        customerName: $("#reserve_name").val().trim(),
        phoneNumber: $("#reserve_phone").val().trim(),
        customerEmail: $("#reserve_email").val().trim()
    }

    $.ajax({
        type: "POST",
        data: obj,
        url: "http://localhost:8080/api/reserve",
        success: idk
    });
    
}

function idk() {

}