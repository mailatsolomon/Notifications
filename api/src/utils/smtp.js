const AWS = require('aws-sdk');
const nodemailer = require("nodemailer");
const env = require("../utils/env");
env.config();

const emailNotification = async (data) => {
    var Message = `
            <html>
              <head>
              </head>
                <body>
                    <p>Sample Email From STMP</p>
                </body>
            </html>`;

    let transporter = nodemailer.createTransport({
        host: process.env.SMTPHOST,
        port: process.env.SMTPPORT,
        Encryption: process.env.SMTPENCRYPTION,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTPUSER, // generated ethereal user
          pass: process.env.SMTPPASSWORD, // generated ethereal password
        },
      });
    
      let info = await transporter.sendMail({
        from: '"SAMPLE 🛵"', // sender address
        to: emailAddress, 
        bcc:process.env.SUPPORTEMAIL, // list of receivers
        subject: "SUBJECT ", // Subject line
        html: Message
    });
    
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  };

  module.exports = emailNotification;