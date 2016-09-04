/**
 * Created by brandongq on 3/09/16.
 */

var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var helper = require("./S3Helper.js");
var fs = require('fs');

helper.downloadFromS3("brandongq", "fluffy.JPG", "flois.JPG");
helper.readFromS3("brandongq", "fluffy.JPG", function (err, data) {
  if(err){
    console.log(err);
  }
  else{
    if (data.Metadata.move == 'true'){
      var pic = fs.createReadStream('flois.JPG');
      var params = {
        Bucket: "cc116-assignment3",
        Key: "22546/flois.JPG",
        Body: pic
      };
      s3.upload(params, function (err, data) {
        if (err){
         console.log(err);
        }
        else{
          console.log("Image uploaded!");
        }
      });
    }else{
      console.log("Metada = false");
    }
  }
});
