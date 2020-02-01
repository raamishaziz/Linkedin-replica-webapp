
$(document).ready(function(e){

  $('input[type="button"]').click(function (e) {
    e.preventDefault();
    var data = $(this).val();
    var div=$(this).parent().attr('data-divId');
    var label=$(this).parent().find("label[for =name]").text();

    if(data=='Send Request'){
      $(this).slideUp();
      $(this).val("Pending....");
      $(this).slideDown(50);
    }
    if(data=='Remove Friend'){
      $(this).slideUp();
      $(this).val("Send Request")
      $(this).slideDown(50);
    }
    if(data=='Pending....'){

      alert("Wait for Request to be accepted")
    }

    $.ajax({
        type: 'post',
        url: '/sendreq',
        data: {'data': data,
                'label':label

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
