module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			css: {
				src: [
					'css/*.css'
				],
				dest: 'src/helper-css.css'
			}
		},
		cssmin: {
			css: {
				src: 'src/helper-css.css',
				dest: 'src/helper-css.min.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['concat', 'cssmin']);
};
