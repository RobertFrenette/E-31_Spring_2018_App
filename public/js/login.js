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
      data.username = userName.val().trim();
      data.password = password.val().trim();

      // AJAX POST
      $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
            contentType: 'application/json',
            url: 'http://localhost:8080/auth/login'
      })
      .done(function(res) {
        // we always want to persist the UserName, even if the User didn't check the rememberMe checkbox
        // this is because we need the UserName later to see if User has logged in
        if (localStorargeSupported()) {
          localStorage.setItem('persistedData', JSON.stringify({"userName": userName.val(), "rememberMe": rememberMe.is(':checked'), "auth": true}));
        }

        // call funct in utils.js
        setLoginStatus(userName.val(), true, '/home') ;
      })
      .fail(function(res) {
        errMsg.html('Login failed. Please try again.');
        errMsg.show();
        userName.focus();
      });
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
