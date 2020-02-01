module.exports = function(req,res){
   var mysql =  require("mysql")
   var userInfo =  require("../model/userInfoModel")

   var status = req.body.status;
   var radio  = req.body.gu;

  userInfo.data.insertInfo(req,res);
  

  res.render('profile.ejs',
      {
          address:req.body.homeAddress,
          phoneNumber:req.body.phoneNumber,
          age:req.body.age,
          matricMarks:req.body.matricMarks,
          fscMarks:req.body.fscMarks,
          semNum:req.body.semNum,
          gpa:req.body.gpa,
          gradDate:req.body.gradDate,
          fname:req.body.fname,
          lname:req.body.lname,
          languages:req.body.languages,
          webDev:req.body.webDev,
          databases:req.body.databases,
          softwareDev:req.body.softwareDev

  })

}
