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
        data.username = userName.val().trim();
        data.email    = email.val().trim();
        data.password = password.val().trim();
        
        // TEMP
        alert('Functionality not yet implemented!');
        resetBtn.click();
        return;

        // AJAX POST
        $.ajax({
          type: 'POST',
          data: JSON.stringify(data),
              contentType: 'application/json',
              url: 'http://localhost:8080/auth/register'
        })
        .done(function(res) {
          window.location.href = '/users/login';
        })
        .fail(function(res) {
          var msg = '';
          
          if (res.status === 400) {
            msg = '<br />Error: A User with these credentials already exists.';
            confirm.val('');
            password.focus();
          }
        
          errMsg.html(`Registration failed. Please try again.${msg}`);
          errMsg.show();
        });
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
