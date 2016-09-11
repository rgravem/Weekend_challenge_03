console.log('calc.js sourced');

$(document).ready(function(){
  console.log('document ready');

  $('#calculate').on('click', function(){
    var firstval = $('#value1').val();
    var secondval = $('#value2').val();

    $.ajax({
      type: 'POST',
      url: '/',
      data: 
    });
  });


});
