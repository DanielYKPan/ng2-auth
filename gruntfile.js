/**
 * gruntfile
 */

(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            concurrent: {
                default: ['watch', 'connect'],
                options: {
                    logConcurrentOutput: true
                }
            },
            watch: {
                clientTS: {
                    files: 'app/**/*.ts',
                    tasks: ['ts:dev'],
                    options: {
                        livereload: true
                    }
                },
                clientScss: {
                    files: 'sass/**/*.scss',
                    tasks: ['sass'],
                    options: {
                        livereload: true
                    }
                }
            },
            connect: {
                server: {
                    options: {
                        port: 3000,
                        base: './',
                        hostname: 'localhost',
                        directory: null,
                        protocol: "http",
                        livereload: true,
                        keepalive: true
                    }
                }
            },
            ts: {
                dev: {
                    src: ["app/**/*.ts", "!typings/**/*.ts", "!node_modules/**/*.ts"],
                    tsconfig: true
                }
            },
            sass: {
                dist: {
                    files: [{
                        expand: true,
                        src: 'sass/main.scss',
                        ext: '.css',
                        rename: function (base, src) {
                            return src.replace('sass/', 'public/assets/style/');
                        }
                    }]
                }
            }
        });

        // Load NPM tasks
        require('load-grunt-tasks')(grunt);

        grunt.registerTask('lint', ['sass']);
        grunt.registerTask('default', ['concurrent:default']);
    }
})();