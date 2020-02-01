module.exports = function(req,res){

        var log = require('../model/reqSignupModel')
      var user =  req.body.username;
      var pass =  req.body.password;
      var pass_again =  req.body.password_again;
      var company = req.body.company;

      console.log(user);
      console.log(pass);
      console.log(pass_again);
      console.log(company);


      if(user.length>=5){
        if(pass.length>=6){
          if(pass=pass_again){
            if(company.length>5){
              console.log('successful!');
              log.data.InsertData2(user,pass,company)
              res.render('rec_login.ejs')
            }
          }
        }
      }
      // console.log('Fields not filled properly!');
      res.render('rec_signup', function(err, html) {
     res.send(html);
     });

  }
