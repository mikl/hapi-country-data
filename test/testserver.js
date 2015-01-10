// Test Hapi server to check if the REST API works.
'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server({});

server.connection({
  port: 7752
});

// Add the country data plugin.
server.register(require('../index'), function (err) {
  if (err) { throw err; }
});

module.exports = server;

// If this file is being run directly, start the server.
if (require.main === module) {
  server.start(function () {
    console.info('hapi-country-data server started at ' + server.info.uri);
  });
}
