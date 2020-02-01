var objs = {}

objs.InsertData2 = function(a,b,c){


var u = a;
var p = b;
var e = c;

console.log(u);
console.log(p);
console.log(e);


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

  var sql = "insert INTO record2 values('"+ u +"','"+ p +"','"+ e +"')"
  con.query(sql, function (err) {
   if (err) throw err;
    console.log('Query successful!');


    });

  // var sql = "INSERT INTO record (name,password,email) VALUES ('+u+','+p+','+e+')";

}
 exports.data = objs;
