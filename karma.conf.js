var babelify = require('babelify');
var cover = require('browserify-istanbul');
// empty for now...
var coverOptions = {};

module.exports = function(config) {
  config.set({

    singleRun: true,
    autoWatch: true,
    basePath: '',

    frameworks: ['mocha','browserify'],

    // list of files / patterns to load in the browser
    files: [
      'src/js/components/**/*.js',
      'test/**/*.spec.js'
    ],

    // list of files to exclude
    // view component is giving me problems.  excluding for now...
    exclude: [
      'src/js/components/view/**/*.js'
    ],

    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.spec.js': ['browserify'],
      'src/js/components/**/*.js': ['browserify']
    },

    browserify: {
      debug: true,
      paths: ['./src/js/components'],
      configure: function(bundle) {
        bundle.on('prebundle', function(){
          bundle.transform(babelify).transform(cover())
        })
      }
    },

    reporters: ['mocha','coverage'],

    plugins: [
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-chrome-launcher',
      'karma-jsdom-launcher',
      'karma-coverage',
      'karma-browserify'
    ],

    coverageReporter: {
      type: 'html'
    },

    port: 9876,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['jsdom'],

  })
}
