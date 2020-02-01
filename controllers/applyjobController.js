module.exports = function(req,res){

  var log = require("../model/jobModel")
  // console.log(req.body.data);
  log.data.apply(req,res)
  res.send("success!")
}
