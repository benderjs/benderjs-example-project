/**
 * Copyright (c) 2014-2015, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */

/* bender-tags: script */
/* bender-include: %BASE_PATH%assets/helpers.js */

describe( 'Ago', function() {
	var h = testHelpers;


	it( 'should add "ago" to window', function() {
		expect( window.ago ).toBeTruthy();
		expect( typeof window.ago ).toEqual( 'function' );
	} );

	it( 'should return "1 second ago" if 1 second passed', function() {
		var now = Date.now();

		expect( ago( now - h.s2ms( 1 ) ) ).toEqual( '1 second ago' );
	} );

	it( 'should return "x seconds ago" if less than 45 seconds passed', function() {
		var now = Date.now();

		expect( ago( now ) ).toEqual( '0 seconds ago' );
		expect( ago( now - h.s2ms( 30 ) ) ).toEqual( '30 seconds ago' );
		expect( ago( now - h.s2ms( 45 ) ) ).not.toEqual( '45 seconds ago' );
	} );

	it( 'should return "a minute ago" if more than 45 seconds and less than 90 seconds passed', function() {
		var now = Date.now();

		expect( ago( now - h.s2ms( 45 ) ) ).toEqual( 'a minute ago' );
		expect( ago( now - h.s2ms( 60 ) ) ).toEqual( 'a minute ago' );
		expect( ago( now - h.s2ms( 90 ) ) ).not.toEqual( 'a minute ago' );
	} );

	it( 'should return "x minutes ago" if more than 90 seconds and less than 45 minutes passed', function() {
		var now = Date.now();

		expect( ago( now - h.s2ms( 90 ) ) ).toEqual( '2 minutes ago' );
		expect( ago( now - h.m2ms( 30 ) ) ).toEqual( '30 minutes ago' );
		expect( ago( now - h.m2ms( 45 ) ) ).not.toEqual( '45 minutes ago' );
	} );

	it( 'should return "an hour ago" if more than 45 minutes and less than 90 minutes passed', function() {
		var now = Date.now();

		expect( ago( now - h.m2ms( 45 ) ) ).toEqual( 'an hour ago' );
		expect( ago( now - h.m2ms( 60 ) ) ).toEqual( 'an hour ago' );
		expect( ago( now - h.m2ms( 90 ) ) ).not.toEqual( 'an hour ago' );
	} );

	it( 'should return "x hours ago" if more than 90 minutes and less than 22 hours passed', function() {
		var now = Date.now();

		expect( ago( now - h.m2ms( 90 ) ) ).toEqual( '2 hours ago' );
		expect( ago( now - h.h2ms( 11 ) ) ).toEqual( '11 hours ago' );
		expect( ago( now - h.h2ms( 22 ) ) ).not.toEqual( '22 hours ago' );
	} );

	it( 'should return "a day ago" if more than 22 hours and less than 36 hours passed', function() {
		var now = Date.now();

		expect( ago( now - h.h2ms( 22 ) ) ).toEqual( 'a day ago' );
		expect( ago( now - h.h2ms( 29 ) ) ).toEqual( 'a day ago' );
		expect( ago( now - h.h2ms( 36 ) ) ).not.toEqual( 'a day ago' );
	} );

	it( 'should return "x days ago" if more than 36 hours and less than 25 days passed', function() {
		var now = Date.now();

		expect( ago( now - h.h2ms( 36 ) ) ).toEqual( '2 days ago' );
		expect( ago( now - h.d2ms( 13 ) ) ).toEqual( '13 days ago' );
		expect( ago( now - h.d2ms( 25 ) ) ).not.toEqual( '25 days ago' );
	} );

	it( 'should return "a month ago" if more than 25 days and less than 45 days passed', function() {
		var now = Date.now();

		expect( ago( now - h.d2ms( 25 ) ) ).toEqual( 'a month ago' );
		expect( ago( now - h.d2ms( 35 ) ) ).toEqual( 'a month ago' );
		expect( ago( now - h.d2ms( 45 ) ) ).not.toEqual( 'a month ago' );
	} );

	it( 'should return "x months ago" if more than 45 days and less than 345 days passed', function() {
		var now = Date.now();

		expect( ago( now - h.d2ms( 45 ) ) ).toEqual( '2 months ago' );
		expect( ago( now - h.d2ms( 200 ) ) ).toEqual( '7 months ago' );
		expect( ago( now - h.d2ms( 345 ) ) ).not.toEqual( '12 months ago' );
	} );

	it( 'should return "a year ago" if more than 345 days and less than 548 days passed', function() {
		var now = Date.now();

		expect( ago( now - h.d2ms( 345 ) ) ).toEqual( 'a year ago' );
		expect( ago( now - h.d2ms( 446 ) ) ).toEqual( 'a year ago' );
		expect( ago( now - h.d2ms( 548 ) ) ).not.toEqual( 'a year ago' );
	} );

	it( 'should return "x years ago" if more than 548 days passed', function() {
		var now = Date.now();

		expect( ago( now - h.d2ms( 548 ) ) ).toEqual( '2 years ago' );
		expect( ago( now - h.d2ms( 3650 ) ) ).toEqual( '10 years ago' );
	} );

	it( 'should hide "ago" suffix if false as second argument is passed', function() {
		var now = Date.now();

		expect( ago( now, false ) ).toEqual( '0 seconds' );
		expect( ago( now - h.s2ms( 30 ), false ) ).toEqual( '30 seconds' );
		expect( ago( now - h.s2ms( 45 ), false ) ).not.toEqual( '45 seconds' );
	} );
} );