// Basic tests for the hapi-country-data plugin.
'use strict';

var Code = require('code');
var Lab = require('lab');
var testserver = require('./testserver');

testserver.connection({
  port: 7752
});

var lab = module.exports.lab = Lab.script();


lab.experiment('load Hapi plugin', function () {
  lab.test('server starts with no problems', function (done) {
    testserver.start(function () {
      done();
    });
  });
});
