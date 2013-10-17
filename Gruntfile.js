module.exports = function(grunt) {

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
watch: {
  scripts: {
    files: ['static/js/**/*.js', 'test/**/*.js'],
    tasks: ['jshint'],
    options: {
      spawn: false,
    },
  },
},
jshint: {
    all: ['Gruntfile.js', 'static/js/**/*.js', 'test/**/*.js']
  }

  });

  grunt.registerTask('default', ['jshint']);

};

