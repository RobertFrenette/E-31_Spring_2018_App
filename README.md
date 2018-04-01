# CSCI E-31: Companion App

This Repo contains code for the [Companion App](http://www.mylistsapp.com/) developed in [Rob's weekly online Section](https://github.com/RobertFrenette/E-31_Spring_2018) for CSCI E-31 Introduction to Web Application Development using Node.js (MEAN Stack)

### Harvard Extension School, Spring 2018

### Teaching Assistant: [Rob Frenette](https://www.linkedin.com/in/robertmfrenette)

![myLists](img/mylists.jpg?raw=true "myLists")

## Setup
Clone / Fork / Download Repo then run ```npm install```.

Set the following env vars (.env file)

* DB_NAME
* DB_USER
* DB_USER_PWD

* COOKIE_KEY
* SESSION_KEY

* EMAIL_ADDRESS
* EMAIL_PASSWORD
* EMAIL_SERVICE

## Execute
### Production
```
npm start
```

### Development (nodemon)
```
npm run start-dev
```

## Load App
[http://localhost:8080](http://localhost:8080)


## Deployment Steps
#### SSH into your Cloud Server from your Dev Machine
```$ ssh YOUR_USER_NAME@YOUR_SERVER_IP_ADDRESS```

## When connected to your Server
### Change into your working dir
```# cd YOUR_WORKING_DIR```

#### Execute the Following in your working dir
``` 
# git pull
# npm install
# killall -q node && npm start
```

### To Stop a Specific Node Process
```
# ps aux

USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND
USER_NAME 12345 0.0 0.0 987654 98765 ? S0 00:00 0:00 node YOUR_SCRIPT_NAME 

# kill 12345
```


## Reporting issues
Use [Github's Issues section for this repository](https://github.com/RobertFrenette/E-31_Spring_2018_App/issues) to report any issues with the notes.

Examples of the kind of issues that may need reporting:
+ Typos
+ Code samples not working as described
+ Broken or moved links
+ Etc.
 