'use strict';

var Hoek = require('hoek');

var DEFAULTS = {
};


module.exports.register = function (server, options, next) {

  var config = Hoek.applyToDefaults(DEFAULTS, options);

  next();
};


exports.register.attributes = {
  pkg: require('./package.json')
};
