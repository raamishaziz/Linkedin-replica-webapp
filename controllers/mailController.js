module.exports = function(req,res){
  
    var log = require("../model/mailModel");
  
    function callback(a){
      
        var array=[];
     
          for(let i=0;i<a.length;i++){
              if(a[i].name==currentUser){

              }
              else{
                array.push({
                    name:a[i].name,
                    email:a[i].email
                  });
              }
          
          }
          
         res.render('mail.ejs',{
            array:array
         });
          
    }
  
    log.data.getMail(callback);
  
  }
  