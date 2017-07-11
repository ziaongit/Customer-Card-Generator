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
        },
        uglify: {
            options: {
            mangle:false
            },
            my_target: {
            files: {
                'resources/javascripts/bin/<%= pkg.name %>.min.js': ['resources/javascripts/bin/<%= pkg.name %>.js']
            }
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Tasks
    grunt.registerTask('default', ['concat']);

}