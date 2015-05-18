
$(document).ready(function(){
  for(var i = 0; i < 16; i++){
  $('#createTable').append('<table>' + '<tr>' + '</tr>' + '</table>');
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
  var newGrid = prompt("How many rows?: ")
}
