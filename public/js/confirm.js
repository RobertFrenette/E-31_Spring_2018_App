"use strict";

$(document).ready(function() {
    // Get HTML Elements
    var confirmForm  = $('#confirmForm');
    var resetBtn     = $('#resetBtn');
    var userName     = $('#userName');
    var email        = $('#email');
    var password     = $('#password');
    var confirm      = $('#confirm');
    var errMsg       = $('#errMsg');
    var successMsg   = $('#successMsg');

    // Bind Event Handlers
    confirmForm.submit(function(event) {
      event.preventDefault();
      if (password.val().length < 8) {
        errMsg.html('Password must be at least 8 characters.');
        errMsg.show();
        password.focus();
      } else if (password.val() !== confirm.val()) {
        confirm.val('');
        confirm.focus();
        errMsg.html('Passwords do not match.');
        errMsg.show();
      } else {
        var userNameParam = userName.val().trim();
        var emailParam    = email.val().trim();
        var passwordParam = password.val().trim();
        
        // AJAX POST TBD
        alert('Functionality not yet implemented!');
        resetBtn.click();
      }
    });

  resetBtn.click(function() {
    // clear field(s)
    errMsg.html('');
    errMsg.hide();
    successMsg.hide();
    
    // position cursor
    userName.focus();
  });
});
