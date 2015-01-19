/**
 * Copyright (c) 2014, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */

/* bender-tags: script */
/* bender-include: %BASE_PATH%assets/helpers.js */

describe( 'Ago', function() {
	var h = testHelpers;


	it( 'should add "ago" to window', function() {
		expect( window.ago ).to.be.truthy;
		expect( typeof window.ago ).to.equal( 'function' );
	} );

	it( 'should return "1 second ago" if 1 second passed', function() {
		var now = Date.now();

		expect( ago( now - h.s2ms( 1 ) ) ).to.equal( '1 second ago' );
	} );

	it( 'should return "x seconds ago" if less than 45 seconds passed', function() {
		var now = Date.now();

		expect( ago( now ) ).to.equal( '0 seconds ago' );
		expect( ago( now - h.s2ms( 30 ) ) ).to.equal( '30 seconds ago' );
		expect( ago( now - h.s2ms( 45 ) ) ).not.to.equal( '45 seconds ago' );
	} );

	it( 'should return "a minute ago" if more than 45 seconds and less than 90 seconds passed', function() {
		var now = Date.now();

		expect( ago( now - h.s2ms( 45 ) ) ).to.equal( 'a minute ago' );
		expect( ago( now - h.s2ms( 60 ) ) ).to.equal( 'a minute ago' );
		expect( ago( now - h.s2ms( 90 ) ) ).not.to.equal( 'a minute ago' );
	} );

	it( 'should return "x minutes ago" if more than 90 seconds and less than 45 minutes passed', function() {
		var now = Date.now();

		expect( ago( now - h.s2ms( 90 ) ) ).to.equal( '2 minutes ago' );
		expect( ago( now - h.m2ms( 30 ) ) ).to.equal( '30 minutes ago' );
		expect( ago( now - h.m2ms( 45 ) ) ).not.to.equal( '45 minutes ago' );
	} );

	it( 'should return "an hour ago" if more than 45 minutes and less than 90 minutes passed', function() {
		var now = Date.now();

		expect( ago( now - h.m2ms( 45 ) ) ).to.equal( 'an hour ago' );
		expect( ago( now - h.m2ms( 60 ) ) ).to.equal( 'an hour ago' );
		expect( ago( now - h.m2ms( 90 ) ) ).not.to.equal( 'an hour ago' );
	} );

	it( 'should return "x hours ago" if more than 90 minutes and less than 22 hours passed', function() {
		var now = Date.now();

		expect( ago( now - h.m2ms( 90 ) ) ).to.equal( '2 hours ago' );
		expect( ago( now - h.h2ms( 11 ) ) ).to.equal( '11 hours ago' );
		expect( ago( now - h.h2ms( 22 ) ) ).not.to.equal( '22 hours ago' );
	} );

	it( 'should return "a day ago" if more than 22 hours and less than 36 hours passed', function() {
		var now = Date.now();

		expect( ago( now - h.h2ms( 22 ) ) ).to.equal( 'a day ago' );
		expect( ago( now - h.h2ms( 29 ) ) ).to.equal( 'a day ago' );
		expect( ago( now - h.h2ms( 36 ) ) ).not.to.equal( 'a day ago' );
	} );

	it( 'should return "x days ago" if more than 36 hours and less than 25 days passed', function() {
		var now = Date.now();

		expect( ago( now - h.h2ms( 36 ) ) ).to.equal( '2 days ago' );
		expect( ago( now - h.d2ms( 13 ) ) ).to.equal( '13 days ago' );
		expect( ago( now - h.d2ms( 25 ) ) ).not.to.equal( '25 days ago' );
	} );

	it( 'should return "a month ago" if more than 25 days and less than 45 days passed', function() {
		var now = Date.now();

		expect( ago( now - h.d2ms( 25 ) ) ).to.equal( 'a month ago' );
		expect( ago( now - h.d2ms( 35 ) ) ).to.equal( 'a month ago' );
		expect( ago( now - h.d2ms( 45 ) ) ).not.to.equal( 'a month ago' );
	} );

	it( 'should return "x months ago" if more than 45 days and less than 345 days passed', function() {
		var now = Date.now();

		expect( ago( now - h.d2ms( 45 ) ) ).to.equal( '2 months ago' );
		expect( ago( now - h.d2ms( 200 ) ) ).to.equal( '7 months ago' );
		expect( ago( now - h.d2ms( 345 ) ) ).not.to.equal( '12 months ago' );
	} );

	it( 'should return "a year ago" if more than 345 days and less than 548 days passed', function() {
		var now = Date.now();

		expect( ago( now - h.d2ms( 345 ) ) ).to.equal( 'a year ago' );
		expect( ago( now - h.d2ms( 446 ) ) ).to.equal( 'a year ago' );
		expect( ago( now - h.d2ms( 548 ) ) ).not.to.equal( 'a year ago' );
	} );

	it( 'should return "x years ago" if more than 548 days passed', function() {
		var now = Date.now();

		expect( ago( now - h.d2ms( 548 ) ) ).to.equal( '2 years ago' );
		expect( ago( now - h.d2ms( 3650 ) ) ).to.equal( '10 years ago' );
	} );

	it( 'should hide "ago" suffix if false as second argument is passed', function() {
		var now = Date.now();

		expect( ago( now, false ) ).to.equal( '0 seconds' );
		expect( ago( now - h.s2ms( 30 ), false ) ).to.equal( '30 seconds' );
		expect( ago( now - h.s2ms( 45 ), false ) ).not.to.equal( '45 seconds' );
	} );
} );
