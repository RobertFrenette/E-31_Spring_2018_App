# CSCI E-31: Companion App - RESTful Node / Express Server

## Setup
Clone / Fork / Download Repo then run ```npm install```.

Set the following env vars (.env file)

* DB_NAME
* DB_USER
* DB_USER_PWD

* EMAIL_ADDRESS
* EMAIL_PASSWORD
* EMAIL_SERVICE

## Execute
### Production
```
$ npm start
```

### Development (nodemon)
```
$ npm run start-dev
```

## Test App
You can test the App using this [Postman Collection](https://github.com/RobertFrenette/E-31_Spring_2018_App/tree/master/server/postman).

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
