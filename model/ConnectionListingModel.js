var objs={}

objs.listing = function(callback){


  var mysql = require('mysql');


  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "raamishDB"
  });

  name = currentUser;
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  })

  var result1=con.query("SELECT * FROM record where requests='"+name+"'", function (err, result) {
   if (err) throw err;
   console.log(result);
             var result1=con.query("SELECT * FROM record where name='"+name+"'", function (err, result1) {
              if (err) throw err;
              console.log(result1);

                  return callback(result,result1);
            });

   // console.log(result);
   // console.log('Query successful!');

    });


}

exports.data = objs;
