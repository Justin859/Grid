function grid(){
  $('tr').append('<div></div>')
};



$(document).ready(function(){
  for(var i = 0; i < 16; i++){
    for(var j = 0; j < 16; j++){
      grid();
    }
  }
});

$(document).ready(function(){
  $('div').hover(function(){
    $(this).css('background-color', 'green');
  });
});

function restart(){
  var newGrid = prompt("How many rows?: ")
}
