
$(document).ready(function(e){

  $('input[type="submit"]').click(function (e) {
    e.preventDefault();
    var count = 0;

    var data1 = $('#inp1').val();
      if(data1==""){
         $('#inp1').effect("shake", { times:1 }, 1000);
         count+=1;
      }
      var data2 = $('#inp2').val();
      if(data2==""){
         $('#inp2').effect("shake", { times:1 }, 1000);
          count+=1;
      }
        var data3 = $('#inp3').val();
        if(data3==""){
           $('#inp3').effect("shake", { times:1 }, 1000);
            count+=1;
        }
          var data4 = $('#inp4').val();
          if(data4==""){
             $('#inp4').effect("shake", { times:1 }, 1000);
              count+=1;
          }
            var data5 = $('#inp5').val();
            if(data5==""){
               $('#inp5').effect("shake", { times:1 }, 1000);
                count+=1;
            }



if(count==0){


      $.ajax({
          type: 'post',
          url: '/postJob',
          data: {'data1': data1,
                  'data2':data2,
                  'data3':data3,
                  'data4':data4,
                  'data5':data5


                  },
          success: function (data) {
                 //alert(data);


                 $('#inp6').slideUp();
                 $('#inp6').slideDown();


    }, error: function(jqXHR, textStatus, errorThrown){
   console.log(" The following error occured: "+ textStatus, errorThrown );
  }
  });
  return false;

}
else{
  alert("fields not filled properly")
}

  });
});
