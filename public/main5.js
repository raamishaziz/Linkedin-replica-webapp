$(document).ready(function(e){


  $('input[type="submit"]').click(function (e) {


console.log("hhehehe");
    var data1 = $('#inp1').val();
     if(data1==""){
         $('#inp1').effect("shake", { times:3 }, 2000);
         return false;

      }
      var data2 = $('#inp2').val();
      if(data2==""){
         $('#inp2').effect("shake", { times:3 }, 2000);
         return false;

      }
      else{
            return true;
          }



})



});
