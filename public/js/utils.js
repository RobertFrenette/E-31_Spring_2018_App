function localStorargeSupported() {
  if (typeof(Storage) !== "undefined") {
    return true;
  } else {
    return false;
  }
}

function setLoginStatus(userName, authStatus, next) {
  // AJAX PATCH TBD
}
