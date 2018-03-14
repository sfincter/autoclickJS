var chromedriver = require('chromedriver');
var arr;
var fs = require('fs')

module.exports = {
  before : function(done) {
    chromedriver.start();

    done();
  },

  after : function(done) {
    chromedriver.stop();

    done();
  },

  afterEach: function(client, done) {
      client.end();
  }


};
