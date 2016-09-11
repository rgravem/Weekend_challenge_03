console.log('calc.js sourced');


$(document).ready(function(){
  console.log('document ready');


  $('#calculate').on('click', function(){
    var firstval = $('#value1').val();
    var secondval = $('#value2').val();
    var operation = $('.operation').val();

    var objectToSend = {
      x:Number(firstval),
      y:Number(secondval),
      operator: operation,
    };
    console.log(objectToSend);
    var sendObject = function() {
      $.ajax({
        type: 'POST',
        url: '/calculate',
        data: objectToSend,
        success: function(data){
          console.log('client data:', data.result);
          $('#results').append("Result: ", data.result);
        }
      });
    };
    sendObject();


  });

  $('#clear').on('click', function(){
    location.reload();
  });

});
