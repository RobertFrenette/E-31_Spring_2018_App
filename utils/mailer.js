const nodemailer = require('nodemailer');
const log = require('log-util');

// NOTE: This is a simple example of sending mail and implemeting PWD reset functionality.
//       This should be more secure in a PROD App!
// https://www.w3schools.com/nodejs/nodejs_email.asp
// ENV vars should be set in .env file (used by dotenv Module)
const privateEmailAddress    = process.env.EMAIL_ADDRESS;
const privateEmailAddressPwd = process.env.EMAIL_PASSWORD;
const emailService           = process.env.EMAIL_SERVICE;

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
  subject: '',
  text: ''
};

var sendRegMail = (username, email, URI) => {
    mailOptions.to = email;
    mailOptions.subject = `Welcome to myLists, ${username}!`;
    mailOptions.html = `<h1>Welcome to myLists!</h1><p>You can access the site using this URL: http://${URI}<br /><br />Thanks,<br />The myLists Team</p>`;
    
    return transporter.sendMail(mailOptions)
    .then(
      function(info) {
        log.info(`Registration Email sent to User ${username} at ${email}.`);
        return({'success': true});
      },
      function(error){
        log.error(`Unable to send Registration email to User ${username} at ${email}.`);
        return({'success': false});
      }
    );
};

var sendResetMail = (email, URI) => {
  mailOptions.to = email;
  mailOptions.subject = `myLists Password Reset`;
  // Note: This should be more secure!
  mailOptions.text = `Please use the following link to reset your myLists Password: ${URI}auth/confirm?email=${email}`;
  
  return transporter.sendMail(mailOptions)
  .then(
    function(info) {
      log.info(`Password Reset Email sent to ${email}.`);
      return({'success': true});
    },
    function(error){
      log.error(`Unable to send Password Reset email to ${email}.`);
      return({'success': false});
    }
  );
};

module.exports = {
  sendRegMail,
  sendResetMail
};
