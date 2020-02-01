module.exports = function(req,res){



     var log = require('../model/recloginModel')
       var mysql = require('mysql');

     function callb(a){
       for(i=0;i<a.length;i++){
         if(a[i].name==req.body.username){
           if(a[i].password==req.body.password){


               res.render('rec_profile.ejs')
             }
            }
          }






       res.render('login', function(err, html) {
      res.send(html);
      });

}
     log.data.checkAuth2(callb);
}
