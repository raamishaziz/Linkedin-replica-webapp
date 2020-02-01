var funcs = {}

funcs.checkAuth2 = function(callback){

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

  var result1=con.query("SELECT * FROM record2", function (err, result) {
   if (err) throw err;
   // console.log(result);
   // console.log('Query successful!');
   return callback(result)
    });




}
 exports.data = funcs;
