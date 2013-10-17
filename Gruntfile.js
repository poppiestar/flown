module.exports = function(grunt) {

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    jasmine : {
      src : 'src/**/*.js',
      options : {
        specs : 'spec/**/*.js'
      }
    },
    watch: {
      scripts: {
        files: ['static/js/**/*.js', 'test/**/*.js'],
          tasks: ['jshint'],
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

  grunt.registerTask('default', ['jshint', 'jasmine']);

};

