/* jshint node: true */
'use strict';

var path;

module.exports = {
  name: 'ember-cli-headroom',
  contentFor: function(type, config) {
    if (type !== 'head') {
      return;
    }

    path = path || require('path');

    var configPath = this.app.project.configPath();
    var headContentPath = path.resolve( path.join(
      path.dirname(configPath),
      'head-content.js'
    ) );
    var headContentBuilder = require(headContentPath);
    var headContent = headContentBuilder(this.app.env, config);
    if (!Array.isArray(headContent)) {
      throw new Error('An array must be returned from config/head-content.js');
    }
    var indentation = "    ";
    return indentation + headContent.join("\n"+indentation);
  }
};
