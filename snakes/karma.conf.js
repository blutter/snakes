// Karma configuration
// Generated on Wed May 07 2014 14:32:42 GMT+1000 (AUS Eastern Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
			"www/components/angular/angular.js",
			"www/components/angular-mocks/angular-mocks.js",
			"www/components/restangular/dist/restangular.js",
			"www/components/underscore/underscore.js",
			"www/components/angular-touch/angular-touch.js",
			"www/components/steroids-js/steroids.js",
			"www/components/ionic/js/ionic.js",
			"www/components/ionic/js/ionic-angular.js",
			"www/components/angular-animate/angular-animate.js",
			"www/components/angular-sanitize/angular-sanitize.js",
			"www/components/angular-ui-router/release/angular-ui-router.js",
			"app/**/*.js",
      "app/tests/example.js", "app/tests/services/snakes.js"
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    	'app/controllers/*.js' : ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
