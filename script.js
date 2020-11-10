
var currentTime = moment().format("HH");
var currentDayParagraph = $("#currentDay");
var textArea = $("textarea");


//sets the current day and time 
currentDayParagraph.text(moment().format("LLLL"));


//changes text area color based on time of day
textArea.each(function () {

  var textAreaTime = $(this).attr("data-time");
  var formattedTime = moment(textAreaTime, "HH").format("HH");

  if (formattedTime < currentTime) {
    $(this).addClass("past");
  } else if (formattedTime > currentTime) {
    $(this).addClass("future");
  } else {
    $(this).addClass("present");

  }
})

