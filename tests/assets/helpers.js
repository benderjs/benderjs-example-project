/**
 * Copyright (c) 2014, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */

var testHelpers = {
	// seconds to milliseconds
	s2ms: function( s ) {
		return s * 1000;
	},

	// minutes to milliseconds
	m2ms: function( m ) {
		return testHelpers.s2ms( m * 60 );
	},

	// hours to milliseconds
	h2ms: function( h ) {
		return testHelpers.m2ms( h * 60 );
	},

	// days to milliseconds
	d2ms: function( d ) {
		return testHelpers.h2ms( d * 24 );
	},

	replaceWhitespaces: function( text ) {
		return text.replace( />(\s+|\n+)</gmi, '><' );
	}
};