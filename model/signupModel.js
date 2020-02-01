var objs = {}

objs.InsertData = function(a,b,c,d){


var u = a;
var p = b;
var e = c;
var ft = d;
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

  var sql = "insert INTO record values('"+ u +"','"+ p +"','"+ e +"','"+ ft +"','','')"
  con.query(sql, function (err) {
   if (err) console.log(err);
    console.log('Query successful!');


    });

  // var sql = "INSERT INTO record (name,password,email) VALUES ('+u+','+p+','+e+')";

}
 exports.data = objs;
