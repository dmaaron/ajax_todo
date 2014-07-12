$(function() {
  $('#submit').on('click', function(e) {
    //prevents the default behavior of the form, i.e. submitting the form
    e.preventDefault();
    //some action

    var settings = {
      priority: {
        name: $('#priority_name').val(),
        color: $('#priority_color').val(),
        urgency_index: $('#priority_urgency_index').val()
      }
    };

    $.post('/priorities', settings, function(data) {
      var priority_row = $('<tr>');
      $('<td>').text(data.priority.name).appendTo(priority_row);
      $('<td>').text(data.priority.urgency_index).appendTo(priority_row);
      $('<td>').css('background-color', data.priority.color).appendTo(priority_row);
      $('#priorities-container').prepend(priority_row);
      $('#priority_name').val('');
      $('#priority_color').val('');
      $('#priority_urgency_index').val('');
    });
  });
  // $('#list').load('/tasks')
});
