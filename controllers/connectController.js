module.exports = function(req,res){

var log = require('../model/studentsModel')
var mysql = require('mysql');


       function callb(a){

         for(i=0;i<a.length;i++){
           if(a[i].name==currentUser){
             var friends = a[i].friends;
             var pending = a[i].requests;
           }
         }
         console.log(friends);
         console.log(pending);

          var id1=[];
          var students=[];
          var check=[];

          for(i=0;i<a.length;i++){
              if(a[i].name==currentUser){

              }
              else{
                students.push(a[i].name);
                if (friends.includes(a[i].name)){
                  check.push("Remove Friend");
                  id1.push(i+1)
                }
                if(pending.includes(a[i].name)){
                  check.push("Pending....");
                  id1.push(i+1)
                }
                else{
                  check.push("Send Request");
                  id1.push(i+1)
                }

              }

          }


          module.exports.students = students;
          module.exports.check = check;

          res.render('students.ejs',{
            students:students,
            check:check,
            divId:id1
          });

       }
       log.data.getStudentList(callb);


}
