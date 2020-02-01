module.exports = function(req,res){

      var log = require('../model/findjobModel')
      function callback(a,b){

        var matching = b;
        console.log(matching);
        var jobs =[];
        var divId=[];
        for (i=0;i<a.length;i++){
          jobs.push(a[i])
          divId.push(i+1);
        }

        res.render('findjobs.ejs',{
          jobs:jobs,
          divId:divId,
          relevancy:matching
        });

      }



        log.data.findjobs(callback)

}
