/**
 * Copyright (c) 2014, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */

/* bender-tags: html */
/* bender-include: %BASE_PATH%assets/helpers.js, %BASE_PATH%assets/results.js */

var oldNow;

beforeEach( function() {
	oldNow = Date.now;

	Date.now = function() {
		return +new Date( '18 July 2014' );
	};
} );

afterEach( function() {
	Date.now = oldNow;
} );

describe( 'Ago', function() {
	var h = testHelpers,
		r = testResults;

	it( 'should replace date in single element matching passed selector', function() {
		ago( '#date', false );
		expect(
			h.replaceWhitespaces( document.getElementById( 'date' ).outerHTML )
		).to.equal(
			h.replaceWhitespaces( r.id )
		);
	} );

	it( 'should replace dates in multiple elements matching passed selector', function() {
		ago( '.dates li' );
		expect(
			h.replaceWhitespaces( document.querySelector( '.dates' ).outerHTML )
		).to.equal(
			h.replaceWhitespaces( r.list )
		);
	} );
} );
