var arr = {}

arr.getStatus = function(limit,callback){



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

      var limit = limit;
      console.log(limit);
      if(limit==5){
        var sql = "select name,status from skills LIMIT 4";
        result= con.query(sql,function(err,result1){
          if(err) console.log(err);
      
          return callback(result1);
        });

      }
      if(limit==10){
        var sql = "select name,status from skills LIMIT 4,8 ";
        result= con.query(sql,function(err,result1){
          if(err) console.log(err);
      
          return callback(result1);
        });

      }
      



}
 exports.data = arr;
