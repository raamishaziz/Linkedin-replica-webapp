var objs = {}

objs.InsertData3 = function(a,b,c,d,e){


var u = a;
var p = b;
var e = c;
var ft = d;
var tags = e;
var cad = '';

console.log(u);
console.log(p);
console.log(e);
console.log(ft);
console.log(tags);

  var mysql = require('mysql');
  //get currrent user



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

  var sql = "insert INTO job values('"+ u +"','"+ p +"','"+ e +"','"+ ft +"','"+ tags +"','"+cad+"')"
  con.query(sql, function (err) {
   if (err) console.log(err);
    console.log('job table updated!');


    });

  // var sql = "INSERT INTO record (name,password,email) VALUES ('+u+','+p+','+e+')";

}
 exports.data = objs;
