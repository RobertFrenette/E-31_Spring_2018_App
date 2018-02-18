"use strict";

$(document).ready(function() {
    // Get HTML Elements
    var registerForm  = $('#registerForm');
    var resetBtn      = $('#resetBtn');
    var userName      = $('#userName');
    var email         = $('#email');
    var password      = $('#password');
    var confirm       = $('#confirm');
    var errMsg        = $('#errMsg');

    // Bind Event Handlers
    registerForm.submit(function(event) {
      event.preventDefault();
      if (password.val().length < 8) {
        errMsg.html('Password must be at least 8 characters.');
        errMsg.show();
        password.focus();
      } else if(password.val() !== confirm.val()) {
        confirm.val('');
        confirm.focus();
        errMsg.html('Passwords do not match.');
        errMsg.show();
      } else {
        var data = {};
        data.userName = userName.val().trim();
        data.email    = email.val().trim();
        data.password = password.val().trim();
        
        // AJAX POST TBD
        alert('Functionality not yet implemented!');
        resetBtn.click();
      }
    });

  resetBtn.click(function() {
    // clear field(s)
    errMsg.html('');
    errMsg.hide();
    
    // position cursor
    userName.focus();
  });
});
