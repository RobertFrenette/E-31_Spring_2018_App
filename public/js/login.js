"use strict";

$(document).ready(function() {
    // Get HTML Elements
    var loginForm   = $('#loginForm');
    var resetBtn    = $('#resetBtn');
    var userName    = $('#userName');
    var password    = $('#password');
    var rememberMe  = $('#rememberMe');
    var errMsg      = $('#errMsg');
    
    // Bind Event Handlers
    loginForm.submit(function(event) {
      event.preventDefault();
      
      var data = {};
      data.userName = userName.val().trim();
      data.password = password.val().trim();
      
      // AJAX POST TBD
      alert('Functionality not yet implemented!');
      resetBtn.click();
    });

  resetBtn.click(function() {
    // clear field(s)
    errMsg.html('');
    errMsg.hide();
    
    // position cursor
    userName.focus();
  });
  
  // Check to is if User checked the RememberMe checkbox on prior login
  if (localStorargeSupported()) {
    var persistedData = localStorage.getItem('persistedData');
    
    if (persistedData !== null) {
      var parsedData = JSON.parse(persistedData);
      if (parsedData.rememberMe === true) {
        userName.val(parsedData.userName);
        rememberMe.prop('checked', true);
        password.focus();
      }
    }
  }
});
