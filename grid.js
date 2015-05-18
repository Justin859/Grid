
$(document).ready(function(){
  $('#createTable').append('<table>' + '</table>');

  for(var i = 0; i < 16; i++){
    $('table').append('<tr>' + '</tr>');
  }
  for(var j = 0; j < 16; j++){
    $('tr').append('<td></td>');
  }

});

$(document).ready(function(){
  $('td').hover(function(){
    $(this).css('background-color', 'green');
  });
});



function restart(){
  $('table').remove();
  var newGrid = prompt("create new grid: ")

  $(document).ready(function(){
    $('#createTable').append('<table>' + '</table>');

    for(var i = 0; i < newGrid; i++){
      $('table').append('<tr>' + '</tr>');
    }
    for(var j = 0; j < newGrid; j++){
      $('tr').append('<td></td>');
    }

      $('td').hover(function(){
        $(this).css('background-color', 'green');
      });

  });
}
