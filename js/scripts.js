function Todo(item, date, priority){
  this.item = item;
  this.dueDate = date;
  this.priority = priority;
}

//UI logic

$(document).ready(function(){
  $("form#to-do").submit(function(event){
    event.preventDefault();

    var getItem = $("#new-item").val();
    var getDate = $("#date-due").val();
    var getImportance = $("input:radio[name=importance].checked").val();

    var newItem = new Todo(getItem, getDate, getImportance);

    $("ul#todo-list").append("<li class='item'>" + newItem.item + "</li>");
  });
});
