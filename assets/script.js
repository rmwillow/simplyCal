$(document).ready(function() {


    //Setting up the date and appending to the HTML page
    var today = moment().format('MMMM Do YYYY');
    console.log(today)
    $(".todaysDate").append(today);


    // hh is 12 hours time

    var currentTime = parseInt(moment().format('HH'));
    console.log(currentTime)



    //set variable to equal id name from html

    var timeSlot6 = $("#time6AM");
    var timeSlot7 = $("#time7AM");
    var timeSlot8 = $("#time8AM");
    var timeSlot9 = $("#time9AM");
    var timeSlot10 = $("#time10AM");
    var timeSlot11 = $("#time11AM");
    var timeSlot12 = $("#time12AM");
    var timeSlot1 = $("#time1PM");
    var timeSlot2 = $("#time2PM");
    var timeSlot3 = $("#time3PM");
    var timeSlot4 = $("#time4PM");
    var timeSlot5 = $("#time5PM");


    // selects all time area sections 
    //.each call back iterates over each time area section
    $("textarea").each(function() {
        //converts string into integer
        //returns attr value of name
        var name = parseInt($(this).attr("name"));
        //if less than the current time make gray for not time yet
        if (name < currentTime) {
            $(this).addClass("bg-gray");
        }

        //if time is greater than the current time make green meaning you have more time
        if (name > currentTime) {
            $(this).addClass("bg-green")
        }

        // if time is equal to the current time make red because it is now urgent
        if (name === currentTime) {
            $(this).addClass("bg-red")
        }

    })


    // setting each items in the local storage with new labels to more clear in local storage output

    $("button").on("click", function() {
            localStorage.setItem("6 AM Task", (timeSlot6.val()))
            localStorage.setItem("7 AM Task", (timeSlot7.val()))
            localStorage.setItem(" AM Task", (timeSlot8.val()))
            localStorage.setItem("9 AM Task", (timeSlot9.val()))
            localStorage.setItem("10 AM Task", (timeSlot10.val()))
            localStorage.setItem("11 AM Task", (timeSlot11.val()))
            localStorage.setItem("12 AM Task", (timeSlot12.val()))
            localStorage.setItem("1 PM Task", (timeSlot1.val()))
            localStorage.setItem("2 PM Task", (timeSlot2.val()))
            localStorage.setItem("3 PM Task", (timeSlot3.val()))
            localStorage.setItem("4 PM Task", (timeSlot4.val()))
            localStorage.setItem("5 PM Task", (timeSlot5.val()))
        })
        //getting the content stored and sending to the screen. When page is refreshed content will stay
    $("#time6AM").append(localStorage.getItem("6 AM Task"));
    $("#time7AM").append(localStorage.getItem("7 AM Task"));
    $("#time8AM").append(localStorage.getItem("8 AM Task"));
    $("#time9AM").append(localStorage.getItem("9 AM Task"));
    $("#time10AM").append(localStorage.getItem("10 AM Task"));
    $("#time11AM").append(localStorage.getItem("11 AM Task"));
    $("#time12AM").append(localStorage.getItem("12 AM Task"));
    $("#time1PM").append(localStorage.getItem("1 PM Task"));
    $("#time2PM").append(localStorage.getItem("2 PM Task"));
    $("#time3PM").append(localStorage.getItem("3 PM Task"));
    $("#time4PM").append(localStorage.getItem("4 PM Task"));
    $("#time5PM").append(localStorage.getItem("5 PM Task"));

})