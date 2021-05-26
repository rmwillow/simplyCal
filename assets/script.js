$(document).ready(function() {

    //Setting up the date and appending to the HTML page
    var today = moment().format('MMMM Do YYYY');
    console.log(today)
    $(".todaysDate").append(today);


    // hh is 24 hours time
    //parse integer from moment string
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


    // setting each items in the local storage
    $("button").on("click", function() {

        localStorage.setItem("6AM", (timeSlot6.val()))
        localStorage.setItem("7AM", (timeSlot7.val()))
        localStorage.setItem("8AM", (timeSlot8.val()))
        localStorage.setItem("9AM", (timeSlot9.val()))
        localStorage.setItem("10AM", (timeSlot10.val()))
        localStorage.setItem("11AM", (timeSlot11.val()))
        localStorage.setItem("12AM", (timeSlot12.val()))
        localStorage.setItem("1PM", (timeSlot1.val()))
        localStorage.setItem("2PM", (timeSlot2.val()))
        localStorage.setItem("3PM", (timeSlot3.val()))
        localStorage.setItem("4PM", (timeSlot4.val()))
        localStorage.setItem("5PM", (timeSlot5.val()))
    })
})