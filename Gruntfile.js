module.exports = function(grunt) {

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    jasmine: {
      src: 'src/**/*.js',
      options: {
        specs: 'spec/**/*Spec.js',
        helpers: 'spec/**/*Fixtures.js'
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.js', 'spec/**/*Spec.js'],
          tasks: ['jshint', 'jasmine'],
          options: {
            spawn: false,
          }
        }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'src/**/*.js',
        'test/**/*.js'
      ]
    }
  });

  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('default', 'test');

};

