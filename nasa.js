/**
 * Created by brandongq on 4/09/16.
 */
var fs = require('fs');
var request = require('request');

var download = function (daUrl, filename, callback) {
  var params =  { url: daUrl};
  request(params, function (err, res, body) {
      if (err){
        console.log(err);
      }
      else{
        var stream = request(daUrl);
        stream.pipe(
          fs.createWriteStream(filename)).on('close', callback);
        console.log("Title: " + JSON.parse(body).title);
      }
    });
};

download('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', 'POTD.JPG', function (err, data, body) {
  if (err) {
    console.log(err);
  }
  else {
    console.log("POTD Downloaded");
  }
});
