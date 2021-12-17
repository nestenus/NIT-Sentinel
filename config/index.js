let nconf    = require("nconf"),
    path     = require("path"),
    defaults = require("./defaults.json");

let configPath = path.join(__dirname, '../config');
nconf.env().argv();
nconf.file({file: path.join(configPath, (nconf.get('NODE_ENV') || "dev") + ".json")});
nconf.defaults(defaults);

// let r = require("rethinkdbdash")(nconf.get("rethinkdb"));

module.exports   = nconf;
// module.exports.r = r;