var winston = require('winston');
var config = require("./configbuilder").getConfig();
var path = require('path');


var logs = config.logs.path || "";

var debuglogpath = path.join(logs , "debug.log"); //__dirname + debuglogpath
var errlogpath = path.join(logs , "exceptions.log");

console.log("writing logs to: " + debuglogpath +", "+ errlogpath);

var logger = new (winston.Logger)({
  transports: [
    //new (winston.transports.Console)({ json: false, timestamp: true }),
    new winston.transports.File({ filename: debuglogpath , json: false })
  ],
  exceptionHandlers: [
    new (winston.transports.Console)({ json: false, timestamp: true }),
    new winston.transports.File({ filename: errlogpath, json: false })
  ],
  exitOnError: false
});

module.exports = logger;


