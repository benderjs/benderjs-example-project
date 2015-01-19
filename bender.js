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

	framework: 'mocha',

	startBrowser: 'firefox',

	plugins: [ 'benderjs-mocha', 'benderjs-chai', 'benderjs-sinon' ],

	tests: {
		Core: {
			applications: [ 'ago' ],
			basePath: 'tests/',
			paths: [
				'**',
				'!**/assets/**'
			]
		}
	},

	testTimeout: 10 * 1000
};

module.exports = config;
