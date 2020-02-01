var arr1={}



arr1.getConnection = function(){

  var mysql = require('mysql')
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "raamishDB",
    queueLimit : 0, // unlimited queueing
    connectionLimit : 0 // unlimited connections 
  });


  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  })

}

exports.data = arr1;
