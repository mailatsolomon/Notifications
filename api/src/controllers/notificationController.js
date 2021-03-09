/*libraries*/
const AWS = require("aws-sdk");
const nodemailer = require("nodemailer");

/*Utils*/
const emailNotification = require("../utils/smtp");
const sesEmailNotification = require("../utils/smtp");
const sendSMS = require("../utils/smtp");
const pushNotif = require("../utils/pushNotification");

/*Entities*/
const errorReturnsEntity = require("../entities/errorReturnsEntity");
const successfulReturnsEntity = require("../entities/successfulReturnsEntity");

/* send smtp notif */
async function smtpNotification(req, res) {
    
    try {
        let emailAddress = req.body.email_address
        var resl = await emailNotification(emailAddress)
        return res.status(200).json(successfulReturnsEntity.successfullySent);
    
    } catch (err) {
        return res.status(400).json({ code: 1, message: err.message });
    }
}

/* send ses notif */
async function sesNotification(req, res) {
    
    try {
        let emailAddress = req.body.email_address
        var resl = await sesEmailNotification(emailAddress)
        return res.status(200).json(successfulReturnsEntity.successfullySent);
    
    } catch (err) {
        return res.status(400).json({ code: 1, message: err.message });
    }
}

/* send sms notif */
async function smsNotification(req, res) {
    
    try {
        let phoneNumber = req.body.phone_number
        var resl = await sendSMS(phoneNumber)
        return res.status(200).json(successfulReturnsEntity.successfullySent);
    
    } catch (err) {
        return res.status(400).json({ code: 1, message: err.message });
    }
}

/* send push notif */
async function pushNotification(req, res) {
    
    try {
        let deviceToken = req.body.device_token
        var resl = await pushNotif(deviceToken)
        return res.status(200).json(successfulReturnsEntity.successfullySent);
    
    } catch (err) {
        return res.status(400).json({ code: 1, message: err.message });
    }
}
  
  
module.exports = {
    smtpNotification,
    sesNotification,
    smsNotification,
    pushNotification
};
  