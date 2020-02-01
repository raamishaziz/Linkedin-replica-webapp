module.exports = function(req,res){

  
   
   var log = require('../model/sendmailModel')
   log.data.sendMail(req,res);
   res.send("success!!!!!")
   
   
   
  }
  