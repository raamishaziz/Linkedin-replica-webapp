
var jwt = require('jsonwebtoken');


module.exports = function(app, passport) {
 app.get('/', function(req, res){
  res.render('login.ejs');
//  res.render('index2.ejs');
 });

 var checkUser= false;

//  app.get('/login', function(req, res){
//   res.render('login.ejs', {message:req.flash('loginMessage')});
// //  res.render('index2.ejs', {message:req.flash('loginMessage')});
//  });

 app.post('/login', passport.authenticate('local-login', {

  //successRedirect: '/profile',
  failureRedirect: '/'
  //failureFlash: true
 }),
  function(req, res){
    console.log('POST Req for /login in passport callback');
    if(successRedirect=true)
    {
      console.log(successRedirect);
      console.log('success');
      var token = jwt.sign({ user: req.username }, 'raamish', {
    expiresIn: 90  });
    res.write('successfully logged in\n')
    res.write('token :' + token + '\n')
    res.write('username is :' + req.body.username)
    res.end()

  //successRedirect:'/profile'
//  res.redirect('/profile');
    }

  /* if(req.body.remember){
    req.session.cookie.maxAge = 1000 * 60 * 3;
   }else{
    req.session.cookie.expires = false;
  }*/

   //res.redirect('/');
  });

  app.get('/profile', ensureToken, function(req, res) {
    console.log('in Profile');
  jwt.verify(req.token, 'raamish', function(err, data) {
    if (err) {
      res.sendStatus(403);
    } else {
      res.end('Welcome to your profile')
    }
  });
})

function ensureToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.send(403);
  }
}

/* app.get('/profile', isLoggedIn, function(req, res){

  /* var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    res.status(200).send(decoded);
  });
  //if (token) {
    if(isLoggedIn){
    res.render('profile.ejs', {
     user:req.user
    });
}
else {
  res.render('login.ejs');
}
  //}

 });
*/
};

function isLoggedIn(req, res, next){
 if(req.isAuthenticated())
{
  checkUser=true;
  return next();


}
  //return false;
 res.redirect('/');
}
