// Karma configuration
// Generated on Tue Feb 09 2016 15:18:43 GMT-0200 (BRST)

var isCiMode = process.env.TEST_ENV === 'CI';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],



    // list of files / patterns to load in the browser
    files: [
        { pattern: 'specs/*.js', watched: false }
    ],

    webpack: require('./webpack.test.config.js'),

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'specs/*.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,

    colors: !isCiMode,
    autoWatch: !isCiMode,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: isCiMode,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
