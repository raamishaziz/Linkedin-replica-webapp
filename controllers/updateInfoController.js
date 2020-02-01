module.exports = function(req,res){



  function callback(a,b,c,d){
      res.render('profile',{
        address:a[0].homeaddress,
        phoneNumber:a[0].phoneNumber,
        age:a[0].age,
        matricMarks:b[0].matricMarks,
        fscMarks:b[0].FscMarks,
        semNum:b[0].semNum,
        gpa:b[0].gpa,
        gradDate:b[0].gradDate,
        fname:c[0].fname,
        lname:c[0].lname,
        job:c[0].interest,
        languages:d[0].languages,
        webDev:d[0].webDev,
        databases:d[0].databases,
        softwareDev:d[0].softwareDev
      })
  }

  var log  = require("../model/updateModel")


  log.data.updateInfo(req,res,callback);

}
