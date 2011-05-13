var _ = require('underscore'),
    Url = require('url');

/*
 * mailgun.js: Mailgun API
 *
 * (C) 2011, Matt Insler
 */

var Mailgun = exports = function(config) {
  this.apiKey = config.apiKey;
  this.apiUrl = config.apiUrl || 'https://mailgun.net/api/';
  this.baseUrl = Url.parse(this.apiUrl);
}

Mailgun.version = [0, 1, 0];


Mailgun.prototype._post = function() {
  request({
        headers: {
          Authorization: 'Basic ' + new Buffer('api:key-' + this.apiKey).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        json: {

        }
      });
};

Mailgun.prototype.sendMessage = function(message) {
  _.extend({}, this.baseUrl);
};