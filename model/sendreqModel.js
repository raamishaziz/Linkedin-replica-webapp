var objs = {}


objs.updateUserFriends = function(req,res){

var mysql = require("mysql")
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


name = currentUser;
var update = req.body.data;
var friend = req.body.label;

if(req.body.data=='Remove Friend'){

  var result1=con.query("SELECT * FROM record where name='"+name+"'", function (err, result) {
   if (err) console.log(err);

   // console.log(typeof(friend));
   friend = friend.replace(/\s+/g, '');
   // console.log(friend);
   var str = result[0].friends;
   var res = friend.concat(",");
   str = str.replace(res, "");
             var sql5 = "UPDATE record SET friends='"+str+"' WHERE name = '"+name+"' ";
             con.query(sql5, function (err, result) {
               if (err) console.log(err);
               console.log("successfully!");

              });


 });

}

if(req.body.data=='Send Request'){
   friend = friend.replace(/\s+/g, '');
   console.log("requests from" + name);
  var result1=con.query("SELECT * FROM record where name='"+friend+"'", function (err, result) {
   if (err) console.log(err);
   console.log(result[0].requests);
   var requests = result[0].requests;
   console.log("requests"+requests);

   if(requests.includes(name)){
        console.log("already sent request");
   }
   else{
     var str = result[0].requests;
     if(str==""){

     }
     else{
       str=str.concat(",");
     }

     str=str.concat(name);
     console.log(str);
                 var sql5 = "UPDATE record SET requests='"+str+"' WHERE name = '"+friend+"' ";
                 con.query(sql5, function (err, result) {
                   if (err) console.log(err);
                   console.log("successfully!");

      });

   }



 })


}



}

exports.data = objs;
