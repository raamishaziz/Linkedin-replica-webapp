var arr = {}

arr.insertInfo = function(req,res){




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
var radio = req.body.radio;

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


   var sql5 = "UPDATE record SET firstTime = 'false' WHERE name = '"+name+"' ";
   con.query(sql5, function (err, result) {
     if (err) console.log(err);
     console.log("successfully!");

    });

   var sql = "insert INTO personal_information values('"+ name +"','"+ homeAddress +"','"+ phoneNumber +"','"+ age +"')"
   con.query(sql, function (err) {
    if (err) console.log(err);
     console.log('Personal info table updated successfully!');
     });

     var sql2 = "insert into education values('"+matricMarks+"','"+fscMarks+"','"+semNum+"','"+gpa+"','"+gradDate+"','"+radio+"','"+name+"')"
     con.query(sql2,function(err){
       if(err) console.log(err);
       console.log("Education table updated successfully");
     })
     var sql3 = "insert into Experience values('"+fname +"','"+lname +"','"+interest +"','"+name+"')"
     con.query(sql3,function(err){
       if(err) console.log(err);
       console.log("Experience table updated successfully");
     })
     var sql4 = "insert into Skills values('"+languages+"','"+webDev+"','"+databases+"','"+softwareDev+"','"+name+"')"
     con.query(sql4,function(err){
       if(err) console.log(err);
       console.log("skills table updated successfully");
       console.log("updated!");
     })

    // });



  // var sql = "INSERT INTO record (name,password,email) VALUES ('+u+','+p+','+e+')";

}
 exports.data = arr;
