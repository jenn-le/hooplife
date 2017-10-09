module.exports = function(grunt) {

  // Prject configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    run: {
      jest: {
        options: {
          cwd: './frontend'
        },
        commands: {
          exec: 'npm run test-ci',
        }
      }
    },
    phpunit: {
    	classes: {
    		dir: 'backend/tests'
    	},
    	options: {
    		bin: 'backend/vendor/bin/phpunit',
    		colors: true
    	}
    }
  });

  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-phpunit');

  // Default task(s).
  grunt.registerTask('default', ['run:jest', 'phpunit']);
};