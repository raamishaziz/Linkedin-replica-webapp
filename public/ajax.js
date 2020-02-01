
$(document).ready(function(e){

    $('input[type="button"]').click(function (e) {
          e.preventDefault();
  
  
        
          var data = 'ramish';
  
  
  
      $.ajax({
          type: 'get',
          url: '/cross',
          data: {'data': data
  
                  },
          success: function (data) {
                 console.log(data);
  
    }, error: function(jqXHR, textStatus, errorThrown){
   console.log(" The following error occured: "+ textStatus, errorThrown );
  }
  });
  return false;
  
    });
  });
  