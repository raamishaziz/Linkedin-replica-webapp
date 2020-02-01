var express =  require('express')
var app = express()
// var passport = require('passport')
// var FacebookStrategy = require('passport-facebook').Strategy;


var loginController = require('./controllers/loginController');
var profileController = require('./controllers/profileController')
var signupController = require('./controllers/signupController')
var profileController2 = require('./controllers/profileController2')
var userInfoController = require('./controllers/userInfoController')
var editController = require('./controllers/editController')
var connectController = require('./controllers/connectController')
var sendreqController = require('./controllers/sendreqController')
var recSignupController = require('./controllers/recSignupController')
var recProfileController =require('./controllers/recProfileController')
var postjobController= require('./controllers/postjobController')
var findjobController = require('./controllers/findjobController')
var updateInfoController = require('./controllers/updateInfoController')
var connectionListingController = require('./controllers/connectionListingController')
var candidatesController = require('./controllers/candidatesController')
var applyjobController = require('./controllers/applyjobController')
var acceptController = require('./controllers/acceptController')
var getStatusController = require('./controllers/getStatusController')
var mailController  = require('./controllers/mailController')
var sendEmailController = require('./controllers/sendEmailController')

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// global.currentUser = 'raamish';


app.get('/',function(req,res){
  res.render('index.ejs')
})

app.get('/login',loginController)
app.post('/profile',profileController)
app.get('/signup',signupController)
app.post('/login',profileController2)
app.post('/profile2',userInfoController)
app.get('/edit',editController)
app.get('/connect',connectController)
app.post('/sendreq',sendreqController)
app.get('/rec-login',function(req,res){
  res.render('rec_login.ejs')
})
app.post('/rec-signup',recSignupController)
app.get('/rec-signup',function(req,res){
  res.render('rec_signup.ejs')
})
app.post('/rec-profile',recProfileController)
app.post('/postjob',postjobController)
app.get('/findjobs',findjobController)
app.post('/updateInfo',updateInfoController)
app.get('/logout',function(req,res){
  res.render('index.ejs')
})
app.get('/connectionListing',connectionListingController)
app.get('/candidates',candidatesController)
app.post('/apply',applyjobController)
app.post('/accept',acceptController)
app.get('/newsfeed',function(req,res){

  res.render('newsfeed.ejs')
});
app.post('/getStatus',getStatusController)
app.get('/mail',mailController)
app.post('/send',sendEmailController)
// app.get('/getapp',getappcontroller)



// app.get('/auth/facebook', passport.authenticate('facebook'));

// var fbOpts = {
//   'clientID':'2551355855185263',
//   'clientSecret':'80a6df2895b1255a072ebca60610f4c3',
//   'callbackURL': '/auth/facebook/callback'
// }

// var fbCallback  = function(accessToken, refreshToken, profile, done){
//   console.log(accessToken, refreshToken, profile);
  

// };
// passport.use(new FacebookStrategy(fbOpts,fbCallback))

// app.get('/auth/facebook/callback',
//   passport.authenticate('facebook', function(err,user,info){
//     console.log(err,user,info);
    
//   }));

// app.get('/fb',passport.authenticate('facebook',function(err){
//   console.log(err);
  
  
// }))
                                      

app.listen(8080,function(err){
  if(err)
    console.log('server not found');
    console.log('Server running on port : 8080');
})
