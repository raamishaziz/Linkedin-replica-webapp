module.exports = function(req,res){

var log = require("../model/ConnectionListingModel")
  function callback(a,b){

    var approved = [];
    var pending = [];
    var myrequests = [];
    var check = [1];
    for(i=0;i<a.length;i++){
      pending.push(a[i].name);
    }

    var myrequests = b[0].requests;
    myrequests = myrequests.split(',');
  




      res.render('listing.ejs',{
        approved:approved,
        pending:pending,
        myrequests:myrequests,
        check:check
      });


  }


log.data.listing(callback);
}
