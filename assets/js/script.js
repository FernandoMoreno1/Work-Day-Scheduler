
//this is what will dispaly the real time date
var todaysDate = moment().format('dddd MMM Do YYYY');
$("#currentDay").html(todaysDate);


$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // gets nearby jquery selectors 
        var time = $(this).parent().attr("id");
        var textBox = $(this).siblings(".textarea").val();

        // anytying typed on the textare is going to be saved to local storage
        localStorage.setItem(time, textBox);
    })

   //function to get current hiour and color
    function timeline() {
        //gets the current hour
        var currentTime = moment().hour();
        //gives textarea the color depending on time
        $(".time-block").each(function () {
            var currentHour = parseInt($(this).attr("id"));

            if (currentHour > currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
            else if (currentHour === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");

            }
        })
    }

    // Get item from local storage if any
    $("#9 .textarea").val(localStorage.getItem("9"));
    $("#10 .textarea").val(localStorage.getItem("10"));
    $("#11 .textarea").val(localStorage.getItem("11"));
    $("#12 .textarea").val(localStorage.getItem("12"));
    $("#13 .textarea").val(localStorage.getItem("13"));
    $("#14 .textarea").val(localStorage.getItem("14"));
    $("#15 .textarea").val(localStorage.getItem("15"));
    $("#16 .textarea").val(localStorage.getItem("16"));
    $("#17 .textarea").val(localStorage.getItem("17"));

    timeline();
})