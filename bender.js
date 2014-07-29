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

	framework: 'jasmine',

	startBrowser: 'chrome',

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
