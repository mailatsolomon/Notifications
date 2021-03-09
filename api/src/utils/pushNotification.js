const AWS = require('aws-sdk');
var moment = require("moment");
var admin = require('firebase-admin')
moment().format();
var serviceAccount = require("../../sample.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:  process.env.FIREBASEDATABASEURL
});

const pushNotification = async (deviceToken) => {

    const message ={
        notification:{
          title:'Sample Notification',
          body:'Sample Notif'
        },
        token : deviceToken 
    }
    if(deviceToken){
        var result = await admin.messaging().send(message).then((response) => {
            console.log('Successfully sent message:', response);
        }).catch((error) => {
            console.log('Error sending message:', error);
        });
    }else{
        console.log('Error sending message no devicetoken:');
    }
  };

module.exports = pushNotification;