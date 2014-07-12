function create_task(e) {
  //prevents the default behavior of the form, i.e. submitting the form
  e.preventDefault();
  //some action
  var params = {
    task: {
      name: $('#task_name').val(),
      desc: $('#task_desc').val(),
      duedate: $('#task_duedate').val(),
      priority_id: $('#task_priority_id').val()
    }
  };
  $.ajax({
    type: 'POST',
    url: '/tasks',
    data: params,
    dataType: 'script'
  });
}

function sort_by_description(a, b) {
  name_a = $(a).children('.desc').text();
  name_b = $(b).children('.desc').text();
  if (name_a > name_b) {
    return 1;
  } else if (name_a < name_b) {
    return -1;
  } else {
    return 0;
  }
}

function sort_by_duedate(a, b) {
  name_a = $(a).children('.duedate').text();
  name_b = $(b).children('.duedate').text();
  if (name_a > name_b) {
    return 1;
  } else if (name_a < name_b) {
    return -1;
  } else {
    return 0;
  }
}

function sort_by_priority(a, b) {
  name_a = $(a).children('.priority-index').text();
  name_b = $(b).children('.priority-index').text();
  return ((name_a > name_b) ? 1 : ((name_a < name_b) ? -1 : sort_by_name(a, b)));
}

function sort_by_name(a, b) {
  name_a = $(a).children('.name').text();
  name_b = $(b).children('.name').text();
  return ((name_a < name_b) ? -1 : ((name_a > name_b) ? 1 : 0));
}

function populate_edit_form() {
  var task_id = $(this).data('id');
  edit_id = task_id;
  var task_row = $(this).parent().parent();
  var name = task_row.find('.name').text();
  var priority_id = task_row.find('.priority-id').text();
  $('#task_name').val(name.trim());
  $('#task_desc').val(task_row.find('.desc').text());
  $('#task_duedate').val(task_row.find('.duedate').text());
  $('#task_priority_id option[value=' + priority_id + ']').prop('selected', true);
  $('#submit').addClass('hidden');
  $('#edit-submit').removeClass('hidden').attr('data-task-id', task_id);
  $('#task-id-holder').text(task_id);
}

function increase_task_urgency(e) {
  e.preventDefault();
  var arrow_id = $(this).data('id');
  var params = {
    task: {
      name: $('#task_name').val(),
      desc: $('#task_desc').val(),
      duedate: $('#task_duedate').val(),
      priority_id: $('#task_priority_id').val()
    }
  };
  $.ajax({
    type: 'PUT',
    url: '/tasks/' + arrow_id + '/increase_urgency',
    data: params,
    dataType: 'script'
  });
}

function decrease_task_urgency(e) {
  e.preventDefault();
  var arrow_id = $(this).data('id');
  var params = {
    task: {
      name: $('#task_name').val(),
      desc: $('#task_desc').val(),
      duedate: $('#task_duedate').val(),
      priority_id: $('#task_priority_id').val()
    }
  };
  $.ajax({
    type: 'PUT',
    url: '/tasks/' + arrow_id + '/decrease_urgency',
    data: params,
    dataType: 'script'
  });
}


function create_updated_row(e) {
  e.preventDefault();
  edit_id = $('#task-id-holder').text();
  var params = {
    task: {
      name: $('#task_name').val(),
      desc: $('#task_desc').val(),
      duedate: $('#task_duedate').val(),
      priority_id: $('#task_priority_id').val()
    }
  };
  $.ajax({
    type: 'PUT',
    url: edit_id,
    data: params,
    dataType: 'script'
  });
}


function delete_task(e) {
    e.preventDefault();
    var id_of_task = $(this).data('id');
    var task_row = $(this).parent().parent();
    $.ajax({
      type: 'DELETE',
      url: id_of_task,
      dataType:  'script'
    });
  }


$(function() {

  $('#submit').on('click', create_task);

  $('th.name-link').on('click', function(e) {
    e.preventDefault();
    sorted = $('tbody tr').sort(sort_by_name);
    $('tbody').empty().append(sorted);
  });

  $('th.desc-link').on('click', function(e) {
    e.preventDefault();
    sorted = $('tbody tr').sort(sort_by_description);
    $('tbody').empty().append(sorted);
  });

  $('th.duedate-link').on('click', function(e) {
    e.preventDefault();
    sorted = $('tbody tr').sort(sort_by_duedate);
    $('tbody').empty().append(sorted);
  });

  $('th.priority-link').on('click', function(e) {
    e.preventDefault();
    sorted = $('tbody tr').sort(sort_by_priority);
    $('tbody').empty().append(sorted);
  });
  $('#tasks-container').on('click', '.delete-button', delete_task);
  $('#tasks-container').on('click', '.edit-button', populate_edit_form);
  $('#edit-submit').on('click', create_updated_row);
  $('tbody').on('click', '.up', increase_task_urgency);
  $('tbody').on('click', '.down', decrease_task_urgency);
});