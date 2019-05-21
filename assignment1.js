function clearForm() {
  todo.value = "";
}

var data = '[{"Todo":"Finish Assignment"}, {"Todo":"Finish other assignment"}]'

var dataObject = JSON.parse(data);
var listItemString = $('#listItem').html();

data.forEach(createList);

function createList(item, index) {
  var listItem = $('<li>' + listItemString + '</li>');
  var listItemTitle = $('.todo', listItem);
  listItemTitle.html(item.FeeType);
  $('#dataList').append(listItem);
