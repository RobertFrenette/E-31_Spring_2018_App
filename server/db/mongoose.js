const mongoose = require('mongoose');
const log      = require('log-util');

mongoose.Promise = global.Promise;
var uri = `mongodb://${process.env.DB_USER}:${process.env.DB_USER_PWD}@cluster0-shard-00-00-rvadh.mongodb.net:27017,cluster0-shard-00-01-rvadh.mongodb.net:27017,cluster0-shard-00-02-rvadh.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`;
mongoose.connect(uri)
        .then(() => { log.info('DB connection successful!'); })
        .catch((err) => { log.error(`DB connection failed: ${err}`); });

module.exports = mongoose;
