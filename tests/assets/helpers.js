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