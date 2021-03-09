const ses = require("../utils/ses");
const env = require("../utils/env");
env.config();

async function sesEmailNotification(emailAddress) {
  
    var Message = `
        <html>
            <head>
            </head>
            <body>
                <p>Sample Email From STMP</p>
            </body>
        </html>`;

    const params = {
      Destination: {
        ToAddresses: [emailAddress],
      },
      Message: {
        Subject: {
          Charset: "UTF-8",
          Data: "SAMPLE",
        },
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: Message,
          },
        },
      },
      Source: "sample@gmail.com",
    };
  
    // Create the promise and SES service object
    var sendPromise = await ses.sendEmail(params).promise();
    console.log("SES sending : ", sendPromise);
}
  
  
module.exports = sesEmailNotification;