var AWS = require("aws-sdk");
AWS.config.update({region: 'us-west-2'});
AWS.config.loadFromPath('./config.json'); // accessKeyId, secretAccessKey, region
AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
  }
});

