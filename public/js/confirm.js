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
        var data = {};
        data.username = userName.val().trim();
        data.email    = email.val().trim();
        data.password = password.val().trim();

        // AJAX POST
        $.ajax({
          type: 'POST',
          data: JSON.stringify(data),
              contentType: 'application/json',
              url: '/auth/confirm'
        })
        .done(function(res) {
          errMsg.removeClass('alert-danger');
          errMsg.addClass('alert-success');
          errMsg.html('Success: Your password has been reset.');
          errMsg.show();
        })
        .fail(function(res) {
          errMsg.removeClass('alert-success');
          errMsg.addClass('alert-danger');
          errMsg.html('Error: User not found.');
          errMsg.show();
          email.focus();
        });
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
