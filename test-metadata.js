var metadata = require('react-component-metadata');
var fs = require('fs');
var dir = require('node-dir');
var assign = require('lodash.assign');

var options = { mixins: true };
var results = {};

dir.readFiles('./src/js/components/', function(err, component, next) {
  if (err) throw err;

  var data = metadata(component, options);
  var name = Object.keys(data)[0];
  if (data[name].desc.length > 0) {
    var doclets = metadata.parseDoclets(data[name].desc);
    console.log(doclets);
    assign(data[name], doclets);
  }

  results[name] = data[name];
  next();
}, function (err, files) {
  if (err) throw err;

  fs.writeFile('site/public/docs/_data.json', JSON.stringify(results), function (err) {
    if (err) throw err;
    console.log("It's saved!");
  });
});

