module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '\n\n'
             },
            dist: {
                src: ['resources/javascripts/Main.js', 'resources/javascripts/Controller.js'],
                dest: 'resources/javascripts/bin/<%= pkg.name %>.js',
            }

        }
    });


    grunt.loadNpmTasks('grunt-contrib-concat');

    //Tasks
    grunt.registerTask('default', ['concat']);

}