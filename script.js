
//global variables
var currentTime = moment().format("HH");
var currentDayParagraph = $("#currentDay");
var textArea = $("textarea");
var buttons = $("button");
buttonId = "";


//sets the current day and time 
currentDayParagraph.text(moment().format("LLLL"));

//sets function for all textarea elements
textArea.each(function () {

  var textAreaTime = $(this).attr("data-time");
  var formattedTime = moment(textAreaTime, "HH").format("HH");

  //changes text area color based on time of day
  if (formattedTime < currentTime) {
    $(this).addClass("past");
  } else if (formattedTime > currentTime) {
    $(this).addClass("future");
  } else {
    $(this).addClass("present");

  }

  //Sets textarea to locally stored values
  if (!localStorage.getItem(textAreaTime)) {
    return;
  } else {
    $(this).val(localStorage.getItem(textAreaTime));
  }

})

//submit button click event
buttons.each(function (event) {

  $(this).on("click", function () {

    //sets the inputted text as a variable
    buttonId = $(this).attr("id");
    selectedTextArea = $("." + buttonId);
    inputText = selectedTextArea.val();
    //inputText = $(this).prev("textarea").val();

    //locall stores the input text
    localStorage.setItem(buttonId, inputText);

  })
})


