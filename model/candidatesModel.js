objs={}

objs.searchCandidates = function(callback){

  var mysql = require('mysql');

// name =currentUser;
// console.log(name);
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "raamishDB"
  });


  con.connect(function(err) {
    if (err) throw err;
  //  console.log("Connected!");
  })

  var sql = "select * from job";
  result= con.query(sql,function(err,result1){
    if(err) throw error;

    var job = result1[0].jobtitle;
    var candidates = result1[0].candidates;
      var nameArr = candidates.split(',');
      var objects = {};
      // console.log(nameArr);
      // for(let i=0;i<nameArr.length;i++){
      //   var sql2 = "select * from skills where name='"+nameArr[i]+"'"
      //   con.query(sql2,function(err,result2){
      //       if(err) console.log(err);
      //       var skills1 = result2[0].webDev;
      //       console.log(skills1);
      //       var sql3 = "select * from experience where name='"+nameArr[i]+"'"
      //       con.query(sql3,function(err,result3){
      //           if(err) console.log(err);
      //           var interest1 = result3[0].interest;
      //
      //
      //            var package = {
      //              name:nameArr[i],
      //              skills:skills1,
      //              interest:interest1,
      //              job:job
      //            };
      //
      //
      //            objects.push(package);
      //
      //
      //
      //
      //   });
      // });
      //
      //
      // }

          // console.log(objects);
          callback(result1);
    });







}
exports.data = objs;
