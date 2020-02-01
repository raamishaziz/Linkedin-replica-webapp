module.exports = function(req,res){
  console.log("data recieved" + req.body.limit);
  var log = require("../model/getStatusModel");

  function callback(a){
    var array=[];
    
    console.log("Back in controller");
        for(let i=0;i<a.length;i++){
          array.push({
            name:a[i].name,
            status:a[i].status
          });
        }
        console.log(array);
        res.send(array);
        
  }

  log.data.getStatus(req.body.limit,callback);

}
