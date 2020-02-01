module.exports = function(req,res){

  var log = require("../model/sendreqModel")
  res.send("success");
  log.data.updateUserFriends(req,res);


}
