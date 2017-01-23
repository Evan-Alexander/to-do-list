function Place(location, landmark, time, notes) {
  this.loc = location;
  this.landmark = landmark;
  this.time = time;
  this.notes = notes;
}

// Place.prototype.destination = function() {
//   return.this.local + " " + this.
// }

//UI logic

$(document).ready(function() {
  $("form#new-trip").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-destination").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedNotes = $("input#new-notes").val();

    var newTrip = new Place(inputtedLocation, inputtedLandmark, inputtedTime, inputtedNotes);

    $("ul#trips").append("<li class='trip'>" + newTrip.loc + "</li>");

    $(".trip").last().click(function() {
      $("#show-trip").show();
      $("#trip-name").text(newTrip.loc);
      $(".dates-insert").text(newTrip.time);
      $(".landmark-insert").text(newTrip.landmark);
      $(".notes-insert").text(newTrip.notes);
    });
  });
});
