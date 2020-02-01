var arr = {}

arr.acceptData = function(req,res){



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
      var newFriend = req.body.data;
    console.log("new Firend to be added : " + newFriend);
      var sql = "select * from record where name='"+name+"'";
      result= con.query(sql,function(err,result1){
        if(err) console.log(err);

        var mod = result1[0].friends;
        if(mod == ''){

        }
        else{
          mod = mod.concat(",");
        }
        mod = mod.concat(newFriend);
        var sql = "update record set friends = '"+mod+"' where name='"+name+"' ";
        result= con.query(sql,function(err,result2){
          if(err) console.log(err);
          console.log("successfully added new friend");
                      var sql = "update record set requests ='' where name='"+name+"' ";
                      result= con.query(sql,function(err,result3){
                        if(err) console.log(err);
                        console.log("successfully added new friend");

                      });

        });

      });




}
 exports.data = arr;
