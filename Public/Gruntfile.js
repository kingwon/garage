
module.exports = function(grunt) {

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        uglify: {
            jsbase: {
                files: {
                    'dist/js/base.js': [
                        'js/base.js',
                        'js/util/*.js',
                        'js/widget/*.js',
                        'js/widget/*/*.js'
                    ]
                }
            }
        },
        concat: {
            jslib: {
                src: [
                    'js/jquery.js',
                    'js/lib/*.js'
                ],
                dest: 'dist/js/lib.js'
            },
            jsbase: {
                src: [
                    'js/base.js',
                    'js/util/*.js',
                    'js/widget/*.js',
                    'js/widget/*/*.js'
                ],
                dest: 'dist/js/base.js'
            },
            css: {
                src: ['dist/style/lib.css','dist/style/base.css'],
                dest: 'dist/style/base.css'
            }
        },
        recess: {
            options: {
                compile: true
            },
            lib: {
                options: {
                    compress: true
                },
                src: ['style/bootstrap/bootstrap.less'],
                dest: 'dist/style/lib.css'
            },
            base: {
                options: {
                    compress: true
                },
                src: ['style/base.less'],
                dest: 'dist/style/base.css'
            }
        },
        cssmin: {
            base: {
                src: [
                    'dist/style/base.css',
                    'style/addon/jquery.fileupload.css',
                    'style/addon/jquery.fileupload-ui.css',
                ],
                dest: 'dist/style/base.css'
            }
        },
        copy: {
            js: {
                files: [
                    {expand: true, cwd: 'js/ueditor/', src: ['**'], dest: 'dist/js/ueditor/'}
                ]
            },
            img: {
                expand: true,
                cwd: 'style/img',
                src: '**',
                dest: 'dist/style/img',
                flatten: true,
                filter: 'isFile',
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    //合并Css、压缩Css
    grunt.registerTask('dist-css', ['recess:lib', 'recess:base', 'concat:css', 'cssmin']);
    grunt.registerTask('dist-js', ['concat:jslib', 'uglify:jsbase']);
    grunt.registerTask('dist-jsdebug', ['concat:jslib', 'concat:jsbase']);
    grunt.registerTask('dist-copy', ['copy']);

    //发布
    grunt.registerTask('default', ['dist-js', 'dist-css', 'dist-copy']);




};