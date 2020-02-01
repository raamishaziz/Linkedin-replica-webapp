
$(document).ready(function(e){

    $('input[type="button"]').click(function (e) {
      e.preventDefault();
     
      
      var label=$(this).parent().find("label[for =name]").text();
      console.log(label);
      
  
     
  
      $.ajax({
          type: 'post',
          url: '/send',
          data: {

                  'label':label
  
                  },
          success: function (data) {
                 alert('mail sent')
  
    }, error: function(jqXHR, textStatus, errorThrown){
   console.log(" The following error occured: "+ textStatus, errorThrown );
  }
  });
  return false;
  
    });
  });
  