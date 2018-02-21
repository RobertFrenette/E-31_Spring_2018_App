// self-invoking funct to get UserName from Storage
(function () {
    // get UserName from Storage
    var persistedUserName = '';
    if (localStorargeSupported()) {
      var persistedData = localStorage.getItem('persistedData');
      
      if (persistedData !== null) {
        var parsedData = JSON.parse(persistedData);
        persistedUserName = parsedData.userName;
      }
    }
    
    if (persistedUserName === '') {
        // no UserName in Storge, so User did not log in
        window.location.href = '/error.html';
    } else {
        // AJAX GET TBD
    }
})();
