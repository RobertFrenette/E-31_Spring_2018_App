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
   
      // AJAX POST TBD
      alert('Functionality not yet implemented!');
      resetBtn.click();
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
