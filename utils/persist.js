// This Module is for User persistence. It won't be used once we cover Mongo!

const fs = require('fs');

// read persisted data from file
var getUsers = () => {
    try {
        var usersString = fs.readFileSync('data/users.json');
        return JSON.parse(usersString);        
    } catch (err) {
        return [];
    }
};

// persist data in file
var saveUsers = (users) => {
    fs.writeFileSync('data/users.json', JSON.stringify(users));      
};

// Insert a User
var insertUser = (username, email, password) => {
    var users = getUsers();
    
    var user = {
      username, 
      email, 
      password
    };
    
    // ensure no dups
    var duplicateUsers = users.filter((user) => {
        return user.username === username || user.email === email;
    });
    
    // persist the users
    if (duplicateUsers.length === 0) {
        users.push(user);
        saveUsers(users);
        return user;
    }
};

// Get a single User by username
var getUserByUserName = (username) => {
    var users = getUsers();
    var filteredUsers = users.filter((user) => user.username === username);
    return filteredUsers[0];
};

// Get a single User by email
var getUserByEmail = (email) => {
  var users = getUsers();
  var filteredUsers = users.filter((user) => user.email === email);
  return filteredUsers[0];
};

// Get a single User by username and password == Authenticate!
var getUserByUserNameAndPassword = (username, password) => {
    var users = getUsers();
    var filteredUsers = users.filter((user) => user.username === username && user.password === password);
    return filteredUsers[0];
};


// "Update" (delete and insert) a User
var updateUser = (username, email, password) => {
  var users = getUsers();
  var filteredUsers = users.filter((user) => user.username === username);

  // verify User exists
  if (filteredUsers.length > 0) {
    // delete the existing User
    deleteUser(username);
    // insert new User
    return insertUser(username, email, password);
  }
  
  return filteredUsers[0];
};

// Delete a User
var deleteUser = (username) => {
    var users = getUsers();
    var filteredUsers = users.filter((user) => user.username !== username);

    saveUsers(filteredUsers);
    
    return users.length !== filteredUsers.length;
};

// Return all Users
var listUsers = () => {
  return getUsers();
};

module.exports = {
  insertUser,
  getUserByUserName,
  getUserByEmail,
  getUserByUserNameAndPassword,
  updateUser,
  deleteUser,
  listUsers
};