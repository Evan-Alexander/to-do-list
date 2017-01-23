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

var sortTime = function(date) {
  var sort = "";
  var todayDate = new Date();
  var todayDay = todayDate.getDate();
  var todayMonth = todayDate.getMonth();
  var todayYear = todayDate.getFullYear();
  // parse date into variables to use in conditionals
  var userYear = parseInt(date.substr(0, 4));
  var userMonth = parseInt(date.substr(5, 2));
  var userDay = parseInt(date.substr(8, 2));


  if ((todayYear === userYear) && (todayMonth === (userMonth - 1)) && (todayDay === userDay)){
    sort = "today";
  } else if ((todayYear === userYear) && (todayMonth === (userMonth - 1)) && ((todayDay + 7) > userDay)  && (todayDay < userDay)){
    sort = "week";
  } else if ((todayYear > userYear) || ((todayYear === userYear) && todayMonth > (userMonth - 1)) || ((todayYear === userYear) && (todayMonth === (userMonth - 1) && (todayDay > userDay)))) {
    sort = "overdue";
  }

  return sort;
}

var sortImportance = function(importance){
  var sortImport = "none";
  if(importance === "high"){
    sortImport = "high-important";
  } else if (importance === "medium"){
    sortImport = "mid-important";
  } else if (importance === "low"){
    sortImport = "low-important";
  }
  return sortImport;
}




//UI logic

$(document).ready(function(){
  //local variable to UI logic to keep track of objects for use in checkbox creation
  var counter = 1;
  $("form#to-do").submit(function(event){
    event.preventDefault();
    var getItem = $("#new-item").val();
    var getDate = $("#date-due").val();
    var getImportance = $("input:radio[name=importance]:checked").val();
    var getNotes = $("textarea").val();

    var newItem = new Todo(getItem, getDate, getImportance, getNotes, counter);

    var test = sortTime(newItem.dueDate);
    console.log(getImportance);
    var importance = sortImportance(getImportance);

    if (test === "today"){
      $("ul#today-list ." + importance).append("<li class='item'>" + newItem.item + "<input type='checkbox' id='" + newItem.unique + "'</li>");
    } else if (test === "week"){
      $("ul#week-list ." + importance).append("<li class='item'>" + newItem.item + "<input type='checkbox' id='" + newItem.unique + "'</li>");
    } else if (test === "overdue"){
      $("ul#overdue-list ." + importance).append("<li class='item'>" + newItem.item + "<input type='checkbox' id='" + newItem.unique + "'</li>");
    }

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
