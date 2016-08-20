module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        copy: {
          main: {
              files: [
                  {expand: true, cwd: 'src/views/', src: ['**'], dest: 'build/views', filter: 'isFile'},

              ]
          }

        },

        concat: {
            options: {separator: ';',
            },
            basic: {
                src: ['src/bower_components/angular/angular.js', 'src/bower_components/angular-ui-router/release/amgular-ui-router.js'],
                dest: 'build/js/lib.js'
            },
            extras: {
                src: ['src/js/*.js'],
                dest: 'build/js/app.js'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build:{
                files: [{
                    src: 'build/js/app.js',
                    dest: 'build/js/app.min.js'
                },
                    {
                        src: 'build/js/lib.js',
                        dest: 'build/js/lib.min.js'
                    }
                ]
            }
        },

        processhtml: {
            options: {
                data: {
                    message: 'Hello world!'
                }
            },
            dist: {
                files: {
                    'build/index.html': ['src/index.html']
                }
            }
        },
        serve: {
            options: {
                port: 9000,
                serve: {
                    path: 'build/'
                }
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-serve');


    grunt.registerTask('default', ['concat', 'uglify','copy','processhtml', 'serve']);
    grunt.registerTask('run', ['default']);
}