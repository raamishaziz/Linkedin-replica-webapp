
$(document).ready(function(e){

  $('input[type="button"]').click(function (e) {
        e.preventDefault();


      var data=$(this).parent().find("label[for =name]").text();
      
      console.log(data);



    $.ajax({
        type: 'post',
        url: '/accept',
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
