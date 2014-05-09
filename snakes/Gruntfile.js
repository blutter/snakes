/*
 * Default Gruntfile for AppGyver Steroids
 * http://www.appgyver.com
 *
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	grunt.registerTask('forceOn', 'turns the --force option ON',
		function () {
			if (!grunt.option('force')) {
				grunt.config.set('forceStatus', true);
				grunt.option('force', true);
			}
		});

	grunt.registerTask('forceOff', 'turns the --force option Off',
		function () {
			if (grunt.config.get('forceStatus')) {
				grunt.option('force', false);
			}
		});

	grunt.loadNpmTasks("grunt-steroids");

  grunt.registerTask("default", ["forceOn", "steroids-make"]);

};
