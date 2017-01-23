function Todo(item, date, priority, notes, counter){
  this.item = item;
  this.dueDate = date;
  this.priority = priority;
  this.notes = notes;
  this.unique = "item" + counter;
}
Todo.prototype.getDetails = function() {
  return [this.item, this.dueDate, this.priority, this.notes];
}

//UI logic

$(document).ready(function(){
  //local variable to UI logic to keep track of objects for use in checkbox creation
  var counter = 1;
  $("form#to-do").submit(function(event){
    event.preventDefault();
    var getItem = $("#new-item").val();
    var getDate = $("#date-due").val();
    var getImportance = $("input:radio[name=importance].checked").val();
    var getNotes = $("textarea").val();

    var newItem = new Todo(getItem, getDate, getImportance, getNotes, counter);

    $("ul#overdue-list").append("<li class='item'>" + newItem.item + "<input type='checkbox' id='" + newItem.unique + "'</li>");

    $(".item").last().click(function() {
      $("#details").text("");
      $("#show-details").show();
      var details = newItem.getDetails();
      details.forEach(function(detail){
        $("#details").append("<p>" + detail + "</p>");
      });

    });
    // increase counter for each submit click for internal tracking on each object created
    counter += 1;
  });
});
