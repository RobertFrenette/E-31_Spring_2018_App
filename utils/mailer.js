const nodemailer = require('nodemailer');

// NOTE: This is a simple example of sending mail and implemeting PWD reset functionality.
//       This should be more secure in a PROD App!
// https://www.w3schools.com/nodejs/nodejs_email.asp
// ENV vars should be set in config/config.json file
const privateEmailAddress    = process.env.EMAIL_ADDRESS;
const privateEmailAddressPwd = process.env.EMAIL_PASSWORD;
const emailService           = process.env.EMAIL_SERVICE;
const URI = 'http://45.55.86.26:8080/confirm'; // Note: Could set URI dynamically

// For GMAIL: https://myaccount.google.com/lesssecureapps
var transporter = nodemailer.createTransport({
  service: emailService,
  auth: {
    user: privateEmailAddress,
    pass: privateEmailAddressPwd
  }
});

// init mailOptions Obj
var mailOptions = {
  from: privateEmailAddress,
  to: '',
  subject: 'myLists App: Password Reset Request',
  text: ''
};

var sendMail = (emailAddress) => {
    mailOptions.to = emailAddress;
    mailOptions.text = `Please use the following link to reset your myLists password: ${URI}/${emailAddress}`;
    
    return transporter.sendMail(mailOptions)
    .then(
      function(info) {
        return({'success': true});
      },
      function(error){
        return({'success': false});
      }
    );
};

module.exports = {
    sendMail
};
