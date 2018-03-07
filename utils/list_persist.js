// This Module is for List persistence. It won't be used once we cover Mongo!
 
const fs = require('fs');
 
const log = require('log-util');
 
// read persisted data from file
var getList = (username) => {
    try {
        var listString = fs.readFileSync(`data/${username}.json`);
        return JSON.parse(listString);       
    } catch (err) {
        log.error('Error retrieving list file for ${username}');
        return [];
    }
};
 
// persist data in file
var saveList = (username, list) => {
    fs.writeFileSync(`data/${username}.json`, JSON.stringify(list));     
};
 
// Insert an Item
var insertItem = (username, item) => {
    console.log(item);
    log.info(`Inserting item ${item.name} for ${username}`);
    var list = getList(username);
   
    // persist the list
    list.push(item);
    saveList(username, list);
    return list;
};
 
module.exports = {
    getList,
    insertItem
};