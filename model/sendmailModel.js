var arr = {}

arr.sendMail = function(req,res){



  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "raamishDB"
  });


  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  })


    // getting current user logged in
      name = currentUser
      var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'raamish96@gmail.com',
    pass: '03004918580'
  }
});

var mailOptions = {
  from: 'raamish96@gmail.com',
  to: 'raamish96@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'hello raamish :)'
        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

     



}
 exports.data = arr;
