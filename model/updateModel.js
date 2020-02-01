var arr = {}

arr.updateInfo = function(req,res,callback){




// Fetching personal Information

var homeAddress = req.body.homeAddress;
var phoneNumber = req.body.phoneNumber;
var age =  req.body.age;

// fetching Education

var matricMarks =  req.body.matricMarks;
var fscMarks =  req.body.fscMarks;
var semNum =  req.body.semNum;
var gpa = req.body.gpa;
var gradDate =  req.body.gradDate;


//fetching Experience

var fname=  req.body.fname;
var lname = req.body.lname;
var interest = req.body.job;

// fetching Skills
 var languages = req.body.languages;
 var webDev = req.body.webDev;
 var databases = req.body.databases;
 var softwareDev = req.body.softwareDev;

  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "raamishDB"
  });


  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  })


    // getting current user logged in
      name = currentUser


      var perInfo = [homeAddress,phoneNumber,age,name];
      var educ = [matricMarks,fscMarks,semNum,gpa,gradDate,name];
      var exp = [fname,lname,interest,name];
      var skill = [languages,webDev,databases,softwareDev,name];

       var sql="UPDATE personal_information SET homeaddress=?,phoneNumber=?,age=? where name=?"
        con.query(sql,perInfo,function(err,result){
              if(err) console.log(err);
              console.log("personal_information table updated!!!");
        })
        var sql1="UPDATE education SET matricMarks=?,FscMarks=?,semNum=?,gpa=?,gradDate=? where name=?"
         con.query(sql1,educ,function(err,result){
               if(err) console.log(err);
               console.log("education table updated!!!");
         })
         var sql2="UPDATE experience SET fname=?,lname=?,interest=? where name=?"
          con.query(sql2,exp,function(err,result){
                if(err) console.log(err);
                console.log("experience updated!!!");
          })
          var sql3="UPDATE skills SET languages=?,webDev=?,db=?,softwareDev=? where name=?"
           con.query(sql3,skill,function(err,result){
                 if(err) console.log(err);
                 console.log("skills updated!!!");
           })


            // returning updated values for profile page rendering


                  var sql4 = "select * from personal_information where name='"+name+"'"
                  result1= con.query(sql4,function(err,result1){

                          var sql5 = "select * from education where name='"+name+"'"
                          con.query(sql5,function(err,result2){

                                  var sql6 = "Select * from experience where name='"+name+"'"
                                  con.query(sql6,function(err,result3){
                                    if (err) console.log(err);


                                        var sql7 = "select * from skills where name='"+name+"'"
                                        con.query(sql7,function(err,result4){
                                          if (err) console.log(err);

                                          return callback(result1,result2,result3,result4);


                                        })

                                  })

                          })

                  })






}
 exports.data = arr;
