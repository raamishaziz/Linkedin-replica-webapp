var arr = {}

arr.getData = function(callback){

  

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

      var sql = "select * from personal_information where name='"+name+"'"
      result1= con.query(sql,function(err,result1){
        // if (err) console.log(err);
        // var homeAddress = result[0].homeaddress;
        // var phoneNumber = result[0].phoneNumber
        // var age =  result[0].age;
              var sql1 = "select * from education where name='"+name+"'"
              con.query(sql1,function(err,result2){
                // var matricMarks =  result[0].matricMarks;
                // var fscMarks =  result[0].FscMarks;
                // var semNum =  result[0].semNum;
                // var gpa = result[0].gpa;
                // var gradDate =  result[0].gradDate;
                      var sql2 = "Select * from experience where name='"+name+"'"
                      con.query(sql2,function(err,result3){
                        if (err) console.log(err);
                        // var fname=  result[0].fname;
                        // var lname = result[0].lname;
                        // var interest = result[0].interest;

                            var sql3 = "select * from skills where name='"+name+"'"
                            con.query(sql3,function(err,result4){
                              if (err) console.log(err);
                              // var languages = result[0].languages;
                              // var webDev = result[0].webDev;
                              // var databases = result[0].db
                              // var softwareDev = result[0].softwareDev;

                              return callback(result1,result2,result3,result4);


                            })

                      })

              })

      })








}
 exports.data = arr;
