var funcs = {}

funcs.checkAuth = function(callback){

  var mysql = require('mysql');


  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "raamishDB"
  });

  con.connect(function(err) {
    if (err) console.log(err);
    console.log("Connected!");
  })

  // for current user

    name = currentUser;

  var result1=con.query("SELECT * FROM record", function (err, result) {
   if (err) console.log(err);
   // console.log(result);
   // console.log('Query successful!');
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
                                    return callback(result,result1,result2,result3,result4);
                                    });
                                });
                            });
                        });
                    });


}


 exports.data = funcs;
