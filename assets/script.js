  //Setting up the date and appending to the HTML page
  var today = moment().format('MMMM Do YYYY');
  console.log(today)
  $(".todaysDate").append(today);

  var now = parseInt(moment().format('HH'));
  console.log(now)

  var $text9AM = $("#text9AM");
  var $text10AM = $("#text10AM");
  var $text11AM = $("#text11AM");
  var $text12AM = $("#text12AM");
  var $text1PM = $("#text1PM");
  var $text2PM = $("#text2PM");
  var $text3PM = $("#text3PM");
  var $text4PM = $("#text4PM");
  var $text5PM = $("#text5PM");