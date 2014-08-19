/**
 * Copyright (c) 2014, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
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

	coverage: {
		directory: '.bender/coverage/'
	},

	framework: 'jasmine',

	startBrowser: 'firefox',

	plugins: [ 'benderjs-jasmine', 'benderjs-coverage' ],

	tests: {
		Core: {
			applications: [ 'ago' ],
			basePath: 'tests/',
			paths: [
				'/',
				'!assets/'
			]
		}
	},

	testTimeout: 10 * 1000
};

module.exports = config;
