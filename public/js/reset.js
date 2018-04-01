"use strict";

$(document).ready(function() {
    // Get HTML Elements
    var resetForm   = $('#resetForm');
    var resetBtn    = $('#resetBtn');
    var email       = $('#email');
    var errMsg      = $('#errMsg');
    var successMsg  = $('#successMsg');
    
    // Bind Event Handlers
    resetForm.submit(function(event) {
      event.preventDefault();
      
      var emailAddress = email.val().trim();
      
      var data = {};
      data.email = emailAddress;
   
      // AJAX POST
      $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
            contentType: 'application/json',
            url: '/auth/reset'
      })
      .done(function(res) {
        errMsg.removeClass('alert-danger');
        errMsg.addClass('alert-success');
        errMsg.html('Success: Please check your email.');
        errMsg.show();
      })
      .fail(function(res) {
        errMsg.removeClass('alert-success');
        errMsg.addClass('alert-danger');
        errMsg.html('Error: Email Address not found.');
        errMsg.show();
        email.focus();
      });
    });

  resetBtn.click(function() {
    // clear field(s)
    errMsg.html('');
    errMsg.hide();
    successMsg.hide();
    
    // position cursor
    email.focus();
  });
});
