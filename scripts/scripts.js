/**
 * Created by skale on 12/13/15.
 */


function headerEffectIn(ref){
    ref.innerHTML="Draksha Grill - the sizzling way!!!";
}
function headerEffectOut(ref){
    ref.innerHTML="Draksha Grill";
}

$(document).ready(function () {
    $("#btnLogin").click(function(){
        window.location.href="reservationsList.html";
    });

});


//$("document").ready(function() {
//    alert("hjksd");
//    $('#mainDiv').load('menu.html');
//});
    function onLoad() {

        var input = document.getElementById("reserveDate");
        var today = new Date();

        var currentDay = new String(today.getDate());
        var currentMonth = new String(today.getMonth()+1); //January is 0!
        var currentYear = today.getFullYear();

        console.log(currentDay+' '+ currentDay.length);

        if(currentDay.length < 2) { currentDay = "0" + currentDay; }
        if(currentMonth.length < 2) { currentMonth = "0" + mon; }

        var minDate = new String( currentYear + '-' + currentMonth + '-' + currentDay );

        input.disabled = false;
        input.setAttribute('min', minDate);



    }
    window.addEventListener('load', onLoad, false);

    document.getElementById("createReservationA").onclick = function () {
        location.href = "createReservation.html";
    };

    document.getElementById("findReservationA").onclick = function () {
        location.href = "findReservation.html";
    };
    document.getElementById("reservationListA").onclick = function () {
        location.href = "reservationsList.html";
    };



    $("#findReservationBtn").click(function(){
        alert("df");
        console.dir(this);
        var parameter = $(this).val();
        window.location = "findReservation.html?reservationId=" + parameter;
    });



