function Todo(item, date, priority, notes){
  this.item = item;
  this.dueDate = date;
  this.priority = priority;
  this.notes = notes;
}
Todo.prototype.getDetails = function() {
  return [this.item, this.dueDate, this.priority, this.notes];
}

//UI logic

$(document).ready(function(){
  $("form#to-do").submit(function(event){
    event.preventDefault();

    var getItem = $("#new-item").val();
    var getDate = $("#date-due").val();
    var getImportance = $("input:radio[name=importance].checked").val();
    var getNotes = $("textarea").val();

    var newItem = new Todo(getItem, getDate, getImportance, getNotes);

    $("ul#todo-list").append("<li class='item'>" + newItem.item + "</li>");

    var details = newItem.getDetails();
    details.forEach(function(detail){
      $("#details").append("<p>" + detail + "</p>");
    });
  });
});
