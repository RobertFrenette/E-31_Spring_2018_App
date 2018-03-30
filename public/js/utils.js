function localStorargeSupported() {
  if (typeof(Storage) !== "undefined") {
    return true;
  } else {
    return false;
  }
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
