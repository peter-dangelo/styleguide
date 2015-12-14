var babelify = require('babelify');

module.exports = function(config) {
  config.set({

    singleRun: false,
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
          bundle.transform(babelify)
        })
      }
    },

    reporters: ['mocha'],

    plugins: [
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-jsdom-launcher',
      'karma-browserify'
    ],

    port: 9876,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['jsdom'],

  })
}
