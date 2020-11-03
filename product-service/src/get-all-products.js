const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-1'});

exports.handler = function (callback) {
    
    let scanningParams = {
        TableName : 'rss-robots'
    }
    
    docClient.scan(scanningParams, function(err, data){
        if (err) {
            callback(err, null);
        } else {
            callback(null, data.Items)
        }
    })
  }