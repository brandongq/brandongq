var AWS = require('aws-sdk');
var s3 = new AWS.S3();

var params = {
   Bucket: "brandongq",
   Key : "index.html",
  Region: ''
};

s3.headObject(params, function (error, response) {
   if(error) {
      console.log(error);
   } else {
       var date = response.LastModified; //Last modified date
       console.log(date);
   }
});
