
 
  var limit = 5;
  var check = false;

  window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            alert("ehhahdhad");
            getData();

        }
    };



$(document).ready(function(e){

        
  window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            alert("scroll at bottom");
                 getData();

        }
        else{
                return;
        }
    };

    getData();
        
        
});

function getData(){
        
        // e.preventDefault();
      

      console.log("hehe");



    $.ajax({
        type: 'post',
        url: '/getStatus',
        data: {

                'limit':limit

                },
        success: function (data) {
                console.log(data);
                for( i=0;i<data.length;i++){
                        h=$("<h2>").html(data[i].name);
                        var img = document.createElement("img");
                        img.src="images/avatar.png";
                        img.setAttribute("height", "90");
                        img.setAttribute("width", "90");
                       
                        $(".results").append(img);
                        $(".results").append(h);
                        div = $("<div>").html(data[i].status);
                      
                         $(".results").append(div); 
                      
                }
                limit+=5;

                
               

  }, error: function(jqXHR, textStatus, errorThrown){
 console.log(" The following error occured: "+ textStatus, errorThrown );
}
});
return false;
}



