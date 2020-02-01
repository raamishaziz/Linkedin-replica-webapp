module.exports = function(req,res){



     var log = require('../model/loginModel')
       var mysql = require('mysql');

      // global.currentUser = req.body.username;

     function callb(x,a,b,c,d){
       for(i=0;i<x.length;i++){
         if(x[i].name==req.body.username){
           if(x[i].password==req.body.password){

             if(x[i].firstTime=="true"){


                  global.currentUser = req.body.username;

               res.render('userInfo.ejs',{
                 name:req.body.username
               })
             }
             else{

                 res.render('profile.ejs',
                     {
                       address:a[0].homeaddress,
                       phoneNumber:a[0].phoneNumber,
                       age:a[0].age,
                       matricMarks:b[0].matricMarks,
                       fscMarks:b[0].FscMarks,
                       semNum:b[0].semNum,
                       gpa:b[0].gpa,
                       gradDate:b[0].gradDate,
                       fname:c[0].fname,
                       lname:c[0].lname,
                       job:c[0].interest,
                       languages:d[0].languages,
                       webDev:d[0].webDev,
                       databases:d[0].db,
                       softwareDev:d[0].softwareDev

                 });




          }
             // res.render('profile.ejs')
           }
         }
       }




       res.render('login', function(err, html) {
      res.send(html);
      });

     }
     log.data.checkAuth(callb);
}
