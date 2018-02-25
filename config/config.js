// Check to see if we're in PROD. If not, default to dev.
const ENV = process.env.NODE_ENV || 'development';

if (ENV === 'development' || ENV === 'test') {
    var config = require('./config.json');
    var envConfig = config[ENV];
        
    // All Env vars should be declared in config.json. 
    // Note congif.json is excluded in .gitignore, so will have to be added manually on server!
    // Ex:
    /*
        {
            "development": {
                "EMAIL_ADDRESS":  "YOUR_EMAIL_ADDRESS",
                "EMAIL_PASSWORD": "YOUR_EMAIL_PASSWORD",
                "EMAIL_SERVICE":  "YOUR_EMAIL_SERVICE"
            }
        }
    */

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });
}
