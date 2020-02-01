var objs={}

objs.apply = function(req,res){


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
    // console.log("Connected!");
  })

  var jobTitle  = req.body.data;


  jobTitle = jobTitle.replace(/\s+/g, '');
  console.log(jobTitle);

  var sql4 = "select * from job where jobtitle='"+jobTitle+"'";
  result1= con.query(sql4,function(err,result){
    if(err) console.log(err);
    console.log(result);
    var str2 = result[0].candidates;
      str2 = str2.split(',');
      if(str2.includes(name)){
        console.log("do nothing");
        return;
      }
    if(str2==''){

    }
    else{
      str2 = str2.concat(",");
    }

    str2 = str2.concat(name);
    var result1=con.query("update job set candidates='"+str2+"' where jobtitle='"+jobTitle+"'", function (err, result) {
     if (err) throw err;

     // console.log(result);
     // console.log('Query successful!');

      });
  });






}

exports.data = objs;
