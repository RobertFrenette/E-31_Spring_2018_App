function localStorargeSupported() {
  if (typeof(Storage) !== "undefined") {
    return true;
  } else {
    return false;
  }
}

function setLoginStatus(userName, authStatus, next) {
  // get UserName from Storage
  var persistedUserName = '';
  var auth = false;
  if (localStorargeSupported()) {
    var persistedData = localStorage.getItem('persistedData');
    
    if (persistedData !== null) {
      var parsedData = JSON.parse(persistedData);
      persistedUserName = parsedData.userName;
      auth = parsedData.auth;
    }
  }
  
  if (persistedUserName !== '' && auth) {
    window.location.href = next;
  } else {
    window.location.href = '/';
  }
}

function getLoginStatus(userName) {
  // get UserName from Storage
  var persistedUserName = '';
  var auth = false;
  if (localStorargeSupported()) {
    var persistedData = localStorage.getItem('persistedData');
    
    if (persistedData !== null) {
      var parsedData = JSON.parse(persistedData);
      persistedUserName = parsedData.userName;
      auth = parsedData.auth;
    }
  }
  
  if (persistedUserName !== '' && auth) {
    return true;
  } else {
    return false;
  }
}

function removeLoginStatus(userName, authStatus, next) {
  // get rememberMe from Storage
  var rememberMe = false;
  if (localStorargeSupported()) {
    var persistedData = localStorage.getItem('persistedData');
    
    if (persistedData !== null) {
      var parsedData = JSON.parse(persistedData);
      rememberMe = parsedData.rememberMe;
    }
  }

  localStorage.setItem('persistedData', JSON.stringify({"userName": userName, "rememberMe": rememberMe, "auth": authStatus}));
  
  window.location.href = next;
}

function getPersistedUserName() {
  // get UserName from Storage
  var persistedUserName = '';
  if (localStorargeSupported()) {
    var persistedData = localStorage.getItem('persistedData');
    
    if (persistedData !== null) {
      var parsedData = JSON.parse(persistedData);
      persistedUserName = parsedData.userName;
    }
  }

  return persistedUserName;
}
