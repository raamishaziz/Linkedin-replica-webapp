var list={}

list.findjobs = function(callback){


      var mysql = require('mysql');

      name  = currentUser;

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

      var matching = 0;
      var result1=con.query("SELECT * FROM job", function (err, result) {
       if (err) console.log(err);
             var result2=con.query("SELECT * FROM skills where name='"+name+"'", function (err, result2) {
              if (err) console.log(err);

                  var userData  =result2[0].webDev;
                  var jobData = result[0].tags;
                   userData=userData.replace(/,/g,"");
                   jobData=jobData.replace(/,/g,"");
                   console.log(userData);
                   console.log(jobData);

                if(userData.includes(jobData)){
                  console.log("matched!!1!");
                  matching=100;

                }
                matching=100;

                  return callback(result,matching);
            });


       // finding relevancy for each job



    });

}

exports.data = list;
