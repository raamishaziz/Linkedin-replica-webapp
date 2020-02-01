var arr = {}

arr.getMail = function(callback){



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

      
        var sql = "select name,email from record";
        result= con.query(sql,function(err,result1){
          if(err) console.log(err);
      
          return callback(result1);
        });

    
      



}
 exports.data = arr;
