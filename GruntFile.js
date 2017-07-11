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
                dest: 'bin/<%= pkg.name %>.js',
            }

        }
    });
}