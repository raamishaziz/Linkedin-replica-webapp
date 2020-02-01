module.exports=function(req,res){

    var log = require('../model/signupModel')
    var user =  req.body.username;
    var pass =  req.body.password;
    var pass_again =  req.body.password_again;
    var email =  req.body.email;



    if(user.length>=5){
      if(pass.length>=6){
        if(pass=pass_again){
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)){
            console.log('successful!');
            log.data.InsertData(user,pass,email,"true")
            res.render('login.ejs')
          }
        }
      }
    }
    // console.log('Fields not filled properly!');
    res.render('signup', function(err, html) {
   res.send(html);
   });
    // console.log(user);
    // console.log(pass);
    // console.log(pass_again);
    // console.log(email);

}
