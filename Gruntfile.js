/* eslint-env node */
module.exports = function ( grunt ) {
	grunt.loadNpmTasks( 'grunt-stylelint' );

	grunt.initConfig( {
		stylelint: {
			all: [
				'*.css'
			]
		}
	} );

	grunt.registerTask( 'test', [ 'stylelint' ] );
	grunt.registerTask( 'default', 'test' );
};
