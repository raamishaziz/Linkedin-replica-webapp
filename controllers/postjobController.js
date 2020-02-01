module.exports=function(req,res){

    var log = require('../model/postjobModel')
  console.log(req.body.data1);
  log.data.InsertData3(req.body.data1,req.body.data2,req.body.data3,req.body.data4,req.body.data5);


  res.send("job posted!");





}
