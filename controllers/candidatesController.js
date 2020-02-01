module.exports = function(req,res){
  var log = require("../model/candidatesModel")
function callback(a){
  // console.log(b[0]);


var count=0;
var matching = 0;
var students =[];
var divId=[];
for(let i=0;i<a.length;i++){
  var str=a[i].candidates;
  var nameArr = str.split(',');




  console.log("students"+nameArr);

  // 
  // if(a[i].jobtitle==b[i].job){
  //   if(b[i].skills.includes(a[i].tags)){
  //     matching = 70;
  //     if(b[i].interest==a[i].decription){
  //       matching = 100;
  //     }
  //   }
  // }
  divId.push(i+1);
}


  res.render('candidates.ejs',{
    jobs:a,
    students:nameArr,
    divId:divId,
    relevancy:'70%'

  })
}

  log.data.searchCandidates(callback);
}
