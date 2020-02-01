module.exports= function(req,res){

  var log = require('../model/acceptModel');
  log.data.acceptData(req,res);
}
