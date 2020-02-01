
$(document).ready(function(e){

  $('input[type="button"]').click(function (e) {


      var div=$(this).parent().slideUp();
        var label=$(this).parent().find("label[for =name]").text();
      
      var data= label;


    $.ajax({
        type: 'post',
        url: '/apply',
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
