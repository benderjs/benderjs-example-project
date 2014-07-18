/**
 * Bender configuration file
 *
 * @param {Object}   applications       Applications used in current project
 * @param {Array}    browsers           List of browsers used for testing
 * @param {String}   framework          Default framework used for the tests
 * @param {Array}    plugins            List of Bender plugins to load at startup (Required)
 * @param {Number}   slowAvgThreshold   Average test case duration threshold above which a test is marked as slow
 * @param {Number}   slowThreshold      Test duration threshold above which a test is marked as slow
 * @param {Number}   testRetries        Number of retries to perform before marking a test as failed
 * @param {Object}   tests              Test groups for the project (Required)
 * @param {Number}   testTimeout        Timeout after which a test will be fetched again
 */

var config = {
	applications: {
		ago: {
			path: 'lib/',
			files: [
				'ago.js'
			]
		}
	},

	framework: 'jasmine',

	plugins: [ 'benderjs-jasmine' ],

	tests: {
		Core: {
			applications: [ 'ago' ],
			basePath: 'tests/',
			paths: [
				'/',
				'!assets/'
			]
		}
	}
};

module.exports = config;