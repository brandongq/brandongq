/**
 * Created by brandongq on 3/09/16.
 */

var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var fs = require('fs');

module.exports.downloadFromS3 = function (bucket, key, stream) {
  var imgParams = {
    Bucket: 'brandongq',
    Key: 'fluffy.JPG'
  };

  var file = fs.createWriteStream(stream);
  s3.getObject(imgParams).createReadStream().pipe(file);

};

module.exports.readFromS3 = function (bucket, key, callback) {
  var params = {
    Bucket: bucket,
    Key: key
  };

  s3.getObject(params, function (error, data) {
    if (error) {
      callback(error);
    }
    else {
      callback(null, data);
    }
  });
};
