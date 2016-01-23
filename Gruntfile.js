module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            css: {
                src: [
                    'css/*.css'
                ],
                dest: 'css-helpers.css'
            }
        },
        cssmin: {
            css: {
                src: 'css-helpers.css',
                dest: 'css-helpers.min.css'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'cssmin']);
};
